"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react";
import Link from "next/link";
import { FACELETS, destination, execute, simplifyMoves } from "./engine";
import { FAMILIES, CASES, caseLesson, setupChoices } from "./catalog";
import styles from "./lab.module.css";
import dynamic from "next/dynamic";
const Cube3D = dynamic(() => import("./Cube3D"), {
  ssr: false,
  loading: () => <p>Loading 3D cube…</p>,
});

const colors = ["#087f78", "#c36d24", "#7760a9"];
const offsets: Record<string, [number, number]> = {
  U: [156, 12],
  L: [12, 156],
  F: [156, 156],
  R: [300, 156],
  B: [444, 156],
  D: [156, 300],
};
const faceColors: Record<string, string> = {
  U: "#faf9f1",
  D: "#eadfad",
  F: "#bad8cc",
  B: "#bfcfe3",
  L: "#e7c7aa",
  R: "#e1b8af",
};
const pretty = (s: string) => s.replaceAll("'", "′");
const STORAGE = "uf-cycle-lab-progress-v1";
type Progress = Record<string, { attempts: number; correct: number }>;
let memoryProgress = "{}";
let storageUnavailable = false;
function writeProgress(value: Progress) {
  memoryProgress = JSON.stringify(value);
  try {
    localStorage.setItem(STORAGE, memoryProgress);
  } catch {
    storageUnavailable = true;
  }
  window.dispatchEvent(new Event("uf-progress"));
  return !storageUnavailable;
}
function progressSnapshot() {
  if (storageUnavailable) {
    return memoryProgress;
  }
  try {
    return localStorage.getItem(STORAGE) || memoryProgress;
  } catch {
    return memoryProgress;
  }
}
function subscribeProgress(callback: () => void) {
  window.addEventListener("uf-progress", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("uf-progress", callback);
    window.removeEventListener("storage", callback);
  };
}
function readProgress(raw: string): Progress {
  try {
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return {};
    }
    return Object.fromEntries(
      Object.entries(data).filter(
        ([, v]) =>
          v &&
          typeof v === "object" &&
          Number.isFinite(v.attempts) &&
          Number.isFinite(v.correct) &&
          v.correct >= 0 &&
          v.attempts >= v.correct,
      ),
    );
  } catch {
    return {};
  }
}
function CycleDiagram({
  cycle,
  compact = false,
}: {
  cycle: string[];
  compact?: boolean;
}) {
  return (
    <div
      className={compact ? styles.cycleSmall : styles.cycle}
      aria-label={`Sticker movement: ${cycle.join(" to ")} to UF`}
    >
      {cycle.map((id, i) => (
        <span key={id} className={styles.cycleItem}>
          <span
            className={styles.target}
            style={{ "--target": colors[i] } as CSSProperties}
          >
            <small>{i === 0 ? "BUFFER" : `TARGET ${i}`}</small>
            <strong>{id}</strong>
          </span>
          <span className={styles.arrow} aria-hidden>
            →
          </span>
        </span>
      ))}
      <span className={styles.returnLabel}>UF</span>
    </div>
  );
}
function CubeNet({ moves, tracked }: { moves: string[]; tracked: string[] }) {
  const state = execute(moves);
  return (
    <svg
      className={styles.net}
      viewBox="0 0 584 448"
      role="img"
      aria-label={`Cube net after ${moves.length} moves. ${tracked.map((id) => `${id} sticker at ${destination(state, id)}`).join(". ")}`}
    >
      {Object.entries(offsets).map(([face, [x, y]]) => (
        <g key={face}>
          <rect
            x={x - 5}
            y={y - 5}
            width="140"
            height="140"
            rx="13"
            fill="#dedfd5"
          />
          <text
            x={x + 65}
            y={y + 76}
            textAnchor="middle"
            fill="#414b43"
            fontSize="21"
            fontWeight="700"
          >
            {face}
          </text>
        </g>
      ))}
      {FACELETS.map((identity) => {
        const index = state.indexOf(identity.id),
          slot = FACELETS[index],
          [ox, oy] = offsets[slot.face];
        const highlight = tracked.indexOf(identity.id),
          companion = tracked.findIndex(
            (id) =>
              id.length === 2 &&
              id.split("").reverse().join("") === identity.id,
          );
        const active = highlight >= 0 ? highlight : companion;
        const isCenter = identity.id.length === 1;
        const stickerOpacity = active >= 0 ? 1 : 0.7;
        return (
          <g
            key={identity.id}
            style={{
              transform: `translate(${ox + slot.col * 44}px, ${oy + slot.row * 44}px)`,
            }}
            className={styles.sticker}
          >
            <rect
              width="42"
              height="42"
              rx="6"
              fill={active >= 0 ? colors[active] : faceColors[identity.face]}
              opacity={isCenter ? 0.35 : stickerOpacity}
              stroke={highlight >= 0 ? "#fff" : "transparent"}
              strokeWidth="2"
            />
            {!isCenter && (
              <text
                x="21"
                y="25"
                textAnchor="middle"
                fill={active >= 0 ? "white" : "#485148"}
                fontSize={identity.id.length === 2 ? 11 : 8}
                opacity={active >= 0 ? 1 : 0.58}
                fontWeight={active >= 0 ? 750 : 400}
              >
                {identity.id}
              </text>
            )}
            {companion >= 0 && <circle cx="34" cy="8" r="2.5" fill="white" />}
          </g>
        );
      })}
    </svg>
  );
}
function subscribeViewport(callback: () => void) {
  const query = window.matchMedia("(max-width: 1100px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
const narrowViewport = () => window.matchMedia("(max-width: 1100px)").matches;

export default function CycleLab() {
  const modalRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [executionMode, setExecutionMode] = useState(true);
  const [overlay, setOverlay] = useState<"atlas" | "guide" | null>(null);
  const [headerOpen, setHeaderOpen] = useState(false);
  const [autoFold, setAutoFold] = useState(true);
  const [focusCube, setFocusCube] = useState(false);
  const [leftOverride, setLeftOverride] = useState<boolean | null>(null);
  const [rightOverride, setRightOverride] = useState<boolean | null>(null);
  const [upperOpen, setUpperOpen] = useState(true);
  const [lowerOpen, setLowerOpen] = useState(true);
  const narrow = useSyncExternalStore(
    subscribeViewport,
    narrowViewport,
    () => false,
  );
  const [familyIndex, setFamilyIndex] = useState(0);
  const [search, setSearch] = useState("");
  const [practiceScope, setPracticeScope] = useState<"all" | "family">("all");
  const [view, setView] = useState<"3d" | "2d">("3d");
  const [selected, setSelected] = useState(0),
    [step, setStep] = useState(0),
    [playing, setPlaying] = useState(false);
  const [tab, setTab] = useState<"explore" | "practice">("explore");
  const progress = readProgress(
    useSyncExternalStore(subscribeProgress, progressSnapshot, () => "{}"),
  );
  const [storageMessage, setStorageMessage] = useState("");
  const [question, setQuestion] = useState(1),
    [answer, setAnswer] = useState<number | null>(null),
    [hint, setHint] = useState(false);
  const family = FAMILIES[familyIndex];
  const current = caseLesson(family.cases[selected]);
  const reverse = current.a.join(" ") !== family.id.split(" | ")[0];
  const foldAutomatically = autoFold && (narrow || playing);
  const leftOpen = !focusCube && (leftOverride ?? !foldAutomatically);
  const rightOpen = !focusCube && (rightOverride ?? !foldAutomatically);
  const phaseNames = current.phases;
  const simplified = simplifyMoves(current.moves);
  const playbackMoves = executionMode ? simplified.moves : current.moves;
  const phaseJump = (n: number) => {
    setOverlay(null);
    setTab("explore");

    setExecutionMode(false);
    setPlaying(false);
    setStep(n);
  };
  useEffect(() => {
    if (!overlay) {
      return undefined;
    }
    const previousFocus = document.activeElement as HTMLElement | null;
    modalRef.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOverlay(null);
      }
      if (e.key === "Tab") {
        const nodes = modalRef.current?.querySelectorAll<HTMLElement>(
          "button, a[href], input, select, [tabindex='0']",
        );
        if (!nodes?.length) {
          return;
        }
        const first = nodes[0],
          last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      previousFocus?.focus();
    };
  }, [overlay]);
  const visibleFamilies = FAMILIES.map((f, i) => ({ f, i })).filter(({ f }) =>
    `${f.name} ${f.cases.map((c) => c.id).join(" ")}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  const setupLength = current.setup.length,
    total = playbackMoves.length;
  useEffect(() => {
    if (!playing) {
      return undefined;
    }
    const timer = setTimeout(() => {
      setStep(Math.min(step + 1, total));
      if (step + 1 >= total) {
        setPlaying(false);
      }
    }, 900);
    return () => clearTimeout(timer);
  }, [playing, total, step]);
  const changeCase = (i: number) => {
    setSelected(i);
    setStep(0);
    setPlaying(false);
  };
  const chooseFamily = (i: number) => {
    setAnswer(null);
    setHint(false);
    setFamilyIndex(i);
    setSelected(0);
    setStep(0);
    setPlaying(false);
  };
  const openCase = (id: string) => {
    const entry = CASES.find((c) => c.id === id);
    if (entry) {
      setAnswer(null);
      setHint(false);
      setFamilyIndex(entry.familyIndex);
      setSelected(
        FAMILIES[entry.familyIndex].cases.findIndex((c) => c.id === id),
      );
      setStep(0);
      setPlaying(false);
    }
  };
  const toggleDirection = () => {
    openCase(`UF-${current.cycle[2]}-${current.cycle[1]}`);
  };
  const jump = (n: number) => {
    setPlaying(false);
    setStep(n);
  };
  const practiceCases =
    practiceScope === "all"
      ? CASES
      : CASES.filter((c) => c.familyIndex === familyIndex);
  const quizEntry = practiceCases[(question * 137) % practiceCases.length];
  const quiz = caseLesson(quizEntry);
  const choices = setupChoices(quizEntry);
  const quizIndex = choices.indexOf(quiz.setup.join(" "));
  const attempts = Object.values(progress).reduce(
      (sum, p) => sum + p.attempts,
      0,
    ),
    correct = Object.values(progress).reduce((sum, p) => sum + p.correct, 0);
  const submit = (i: number) => {
    if (answer !== null) {
      return;
    }
    setAnswer(i);
    const prev = progress[quiz.id] || { attempts: 0, correct: 0 };
    const next = {
      ...progress,
      [quiz.id]: {
        attempts: prev.attempts + 1,
        correct: prev.correct + Number(i === quizIndex),
      },
    };
    if (!writeProgress(next)) {
      setStorageMessage(
        "Browser storage is unavailable. Progress lasts for this visit only.",
      );
    }
  };
  let phase = "Undo setup · restore the frame";
  if (step === 0) {
    phase = "Start with a solved cube";
  } else if (step <= setupLength) {
    phase = "Setup · bring the targets into place";
  } else if (step <= setupLength + current.core.length) {
    const block = phaseNames.find((p) => step <= p.end);
    phase = `Core · ${block?.label} (${pretty(block?.moves.join(" ") || "")})`;
  }
  if (executionMode && step > 0) {
    phase = `Execution · ${pretty(playbackMoves[step - 1] || "")} · adjacent turns combined`;
  }
  useEffect(() => {
    const strip = timelineRef.current,
      active = strip?.querySelector<HTMLElement>("[aria-current='step']");
    if (strip && active) {
      const parent = strip.getBoundingClientRect(),
        child = active.getBoundingClientRect();
      if (child.bottom > parent.bottom) {
        strip.scrollTop += child.bottom - parent.bottom;
      } else if (child.top < parent.top) {
        strip.scrollTop -= parent.top - child.top;
      }
    }
  }, [step, executionMode]);
  const moveLabel = (i: number) => {
    if (executionMode) {
      return String(i + 1);
    }
    if (i < setupLength) {
      return "SETUP";
    }
    if (i < setupLength + current.core.length) {
      return phaseNames.find((p) => i < p.end)?.label || "CORE";
    }
    return "UNDO";
  };
  const answerClass = (i: number) => {
    if (answer !== null && i === quizIndex) {
      return styles.correct;
    }
    if (answer === i) {
      return styles.incorrect;
    }
    return "";
  };
  return (
    <main
      className={`${styles.lab} ${styles.appLayout} ${overlay ? styles.overlayOpen : ""} ${leftOpen ? "" : styles.leftFolded} ${rightOpen ? "" : styles.rightFolded} ${!upperOpen || focusCube ? styles.upperFolded : ""} ${!lowerOpen || focusCube ? styles.lowerFolded : ""} ${!headerOpen || focusCube ? styles.headerFolded : ""}`}
    >
      <div className={styles.shell}>
        <div className={styles.displayBar} aria-label="Display controls">
          <Link href="/" className={styles.compactBrand}>
            BLDDB
          </Link>
          <button
            aria-expanded={headerOpen && !focusCube}
            onClick={() => {
              setFocusCube(false);
              setHeaderOpen(!headerOpen);
            }}
          >
            Menu
          </button>
          {tab === "explore" && (
            <>
              <button
                aria-expanded={leftOpen}
                aria-controls="uf-cases"
                onClick={() => {
                  setFocusCube(false);
                  setLeftOverride(!leftOpen);
                  if (narrow) {
                    setRightOverride(false);
                  }
                }}
              >
                ◧ Cases
              </button>
              <button
                aria-expanded={rightOpen}
                aria-controls="uf-details"
                onClick={() => {
                  setFocusCube(false);
                  setRightOverride(!rightOpen);
                  if (narrow) {
                    setLeftOverride(false);
                  }
                }}
              >
                Details ◨
              </button>
              <button
                aria-expanded={upperOpen && !focusCube}
                onClick={() => {
                  setFocusCube(false);
                  setUpperOpen(focusCube || !upperOpen);
                }}
              >
                Top info
              </button>
              <button
                aria-expanded={lowerOpen && !focusCube}
                onClick={() => {
                  setFocusCube(false);
                  setLowerOpen(focusCube || !lowerOpen);
                }}
              >
                Bottom info
              </button>
              <button
                aria-pressed={autoFold}
                title="Fold sides on smaller screens and during playback. Manual panel choices override auto-fold."
                onClick={() => {
                  setAutoFold(!autoFold);
                  setLeftOverride(null);
                  setRightOverride(null);
                }}
              >
                Auto fold
              </button>
              <button
                aria-pressed={focusCube}
                onClick={() => setFocusCube(!focusCube)}
              >
                {focusCube ? "↙ Restore" : "⛶ Focus"}
              </button>
            </>
          )}
          <span className={styles.currentCase}>
            {current.cycle.join(" → ")}
          </span>
        </div>
        <div className={styles.topline}>
          <Link href="/">
            BLDDB <span>/ LEARNING STUDIO</span>
          </Link>
          <span className={styles.tag}>440 CASES · 135 FAMILIES</span>
        </div>
        <div className={styles.tabbar}>
          <div role="tablist" aria-label="Learning mode">
            <button
              role="tab"
              aria-selected={tab === "explore"}
              onClick={() => {
                setTab("explore");
                setPlaying(false);
              }}
            >
              01 <b>Explore the family</b>
            </button>
            <button
              role="tab"
              aria-selected={tab === "practice"}
              onClick={() => {
                setTab("practice");
                setPlaying(false);
              }}
            >
              02 <b>Practice recall</b>
            </button>
          </div>
          <div className={styles.appActions}>
            <button
              onClick={() => {
                setOverlay("atlas");
                setPlaying(false);
              }}
            >
              Target atlas
            </button>
            <button
              onClick={() => {
                setOverlay("guide");
                setPlaying(false);
              }}
            >
              Guide
            </button>
          </div>
          <span>
            {attempts
              ? `${correct} / ${attempts} correct`
              : "Understanding before speed"}
          </span>
        </div>
        {tab === "explore" ? (
          <>
            <section className={styles.catalogBar}>
              <label>
                Search cores or stickers
                <input
                  aria-label="Search families"
                  placeholder="e.g. M, R2, UF-FR…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </label>
              <label>
                Choose a family
                <select
                  aria-label="Choose a family"
                  value={familyIndex}
                  onChange={(e) => chooseFamily(Number(e.target.value))}
                >
                  {!visibleFamilies.some(({ i }) => i === familyIndex) && (
                    <option value={familyIndex}>
                      {pretty(family.name)} · current
                    </option>
                  )}
                  {visibleFamilies.map(({ f, i }) => (
                    <option key={f.id} value={i}>
                      {i + 1}. {pretty(f.name)} · {f.cases.length} cases
                    </option>
                  ))}
                </select>
                <small>{visibleFamilies.length} matching families</small>
              </label>
              <label>
                Case
                <select
                  aria-label="Choose a case"
                  value={selected}
                  onChange={(e) => changeCase(Number(e.target.value))}
                >
                  {family.cases.map((entry, i) => (
                    <option key={entry.id} value={i}>
                      {entry.cycle.join(" → ")}
                    </option>
                  ))}
                </select>
              </label>
            </section>
            <div className={styles.workspace}>
              <aside id="uf-cases" className={styles.families}>
                <div className={styles.sectionTitle}>
                  <span className={styles.eyebrow}>THE FAMILY MAP</span>
                  <span className={styles.count}>{family.cases.length}</span>
                </div>
                <h2>{pretty(family.name)}</h2>
                <p className={styles.muted}>
                  Choose a case. Compare its setup and direction.
                </p>
                <div className={styles.familyList}>
                  {family.cases.map((l, i) => (
                    <button
                      key={l.id}
                      aria-pressed={selected === i}
                      onClick={() => changeCase(i)}
                      className={selected === i ? styles.selected : ""}
                    >
                      <span className={styles.familyNumber}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>
                        <strong>
                          {l.setup.length === 0
                            ? "No setup"
                            : `${pretty(l.setup.join(" "))} setup`}
                        </strong>
                        <small>{l.cycle.join(" → ")}</small>
                      </span>
                      <span className={styles.familyGlyph}>
                        {i === 0 ? "◎" : "↳"}
                      </span>
                    </button>
                  ))}
                </div>
                <div className={styles.note}>
                  <strong>What makes a family?</strong>
                  <p>
                    After setup, the same three sticker positions enter the same
                    ordered commutator (or its inverse).
                  </p>
                </div>
              </aside>
              <section className={styles.player}>
                <div className={styles.sectionTitle}>
                  <span className={styles.eyebrow}>FOLLOW THE STICKERS</span>
                  <button
                    className={styles.direction}
                    aria-pressed={reverse}
                    onClick={toggleDirection}
                  >
                    ⇄ {reverse ? "Inverse direction" : "Forward direction"}
                  </button>
                </div>
                <CycleDiagram cycle={current.cycle} />
                <div
                  className={styles.viewToggle}
                  role="group"
                  aria-label="Cube view"
                >
                  <button
                    aria-pressed={view === "3d"}
                    onClick={() => setView("3d")}
                  >
                    3D cube
                  </button>
                  <button
                    aria-pressed={view === "2d"}
                    onClick={() => setView("2d")}
                  >
                    2D net
                  </button>
                </div>
                <div className={styles.netStage}>
                  {view === "3d" ? (
                    <Cube3D
                      moves={playbackMoves.slice(0, step)}
                      tracked={current.cycle}
                    />
                  ) : (
                    <>
                      <span className={styles.netBadge}>
                        UNFOLDED CUBE · LIVE STATE
                      </span>
                      <CubeNet
                        moves={playbackMoves.slice(0, step)}
                        tracked={current.cycle}
                      />
                    </>
                  )}
                </div>
                <div className={styles.legend}>
                  {current.cycle.map((id, i) => (
                    <span key={id}>
                      <i style={{ background: colors[i] }} />
                      {id}
                      {i === 0 ? " · buffer" : ""}
                    </span>
                  ))}
                  <span>● partner sticker</span>
                </div>
                <p className={styles.phase} aria-live="polite">
                  {step === total
                    ? "Complete · three edges cycled, everything else restored"
                    : phase}
                </p>
                <div
                  className={styles.algorithmMode}
                  role="group"
                  aria-label="Algorithm display"
                >
                  <button
                    aria-pressed={executionMode}
                    onClick={() => {
                      setExecutionMode(true);
                      jump(0);
                    }}
                  >
                    Execution · {simplified.moves.length} moves
                  </button>
                  <button
                    aria-pressed={!executionMode}
                    onClick={() => {
                      setExecutionMode(false);
                      jump(0);
                    }}
                  >
                    Commutator · {current.moves.length} moves
                  </button>
                </div>
                <p
                  className={styles.cancellation}
                  title={pretty(simplified.reductions.join("; "))}
                >
                  {simplified.reductions.length
                    ? pretty(simplified.reductions.join(" · "))
                    : "No adjacent turns to combine"}
                </p>
                <div ref={timelineRef} className={styles.moveStrip}>
                  <button
                    aria-label="Reset cube"
                    className={step === 0 ? styles.activeMove : ""}
                    onClick={() => jump(0)}
                  >
                    ↺
                  </button>
                  {playbackMoves.map((m, i) => (
                    <button
                      key={`${selected}-${reverse}-${i}`}
                      aria-label={`Step ${i + 1}: ${pretty(m)}`}
                      aria-current={step === i + 1 ? "step" : undefined}
                      onClick={() => jump(i + 1)}
                      className={step === i + 1 ? styles.activeMove : ""}
                    >
                      <small>{moveLabel(i)}</small>
                      {pretty(m)}
                    </button>
                  ))}
                </div>
                <div className={styles.transport}>
                  <button aria-label="Restart cycle" onClick={() => jump(0)}>
                    ↺
                  </button>
                  <button
                    aria-label="Previous move"
                    disabled={step === 0}
                    onClick={() => jump(step - 1)}
                  >
                    ←
                  </button>
                  <button
                    className={styles.play}
                    onClick={() => {
                      if (step === total) {
                        setStep(0);
                      }
                      setPlaying(!playing);
                    }}
                  >
                    {playing ? "Ⅱ Pause" : "▶ Play cycle"}
                  </button>
                  <button
                    aria-label="Next move"
                    disabled={step === total}
                    onClick={() => jump(step + 1)}
                  >
                    →
                  </button>
                  <span>
                    {step} / {total} moves
                  </span>
                </div>
                <input
                  className={styles.scrubber}
                  aria-label="Cycle position"
                  type="range"
                  min={0}
                  max={total}
                  value={step}
                  onChange={(e) => jump(Number(e.target.value))}
                />
                <p className={styles.fine}>
                  Labels follow sticker identities. Arrows describe execution on
                  a solved cube, not scramble memo order.
                </p>
              </section>
              <aside id="uf-details" className={styles.explanation}>
                <span className={styles.eyebrow}>WHY IT WORKS</span>
                <h2>
                  {setupLength === 0
                    ? "Already in the base pattern."
                    : "A new case. A familiar place."}
                </h2>
                <p>
                  {setupLength === 0
                    ? "No setup is needed. Execute A, then B, then undo A and undo B to produce this directed cycle."
                    : `The ${pretty(current.setup.join(" "))} setup moves your targets into the base positions. The core is unchanged.`}
                </p>
                <div className={styles.mapping}>
                  <div>
                    <span>YOUR STICKER</span>
                    <span>AFTER SETUP</span>
                  </div>
                  {current.cycle.map((id, i) => (
                    <div key={id}>
                      <strong style={{ color: colors[i] }}>{id}</strong>
                      <span className={styles.mappingArrow}>→</span>
                      <strong>{current.aligned[i]}</strong>
                    </div>
                  ))}
                </div>
                <button
                  className={styles.textButton}
                  onClick={() => phaseJump(setupLength)}
                >
                  Show setup alignment ↗
                </button>
                <div className={styles.formula}>
                  <small>THE WHOLE ALGORITHM</small>
                  <p>
                    {current.setup.length > 0 && (
                      <span>{pretty(current.setup.join(" "))} : </span>
                    )}
                    <strong>
                      {pretty(
                        `[${current.a.join(" ")}, ${current.b.join(" ")}]`,
                      )}
                    </strong>
                  </p>
                  <code>{pretty(simplified.moves.join(" "))}</code>
                </div>
                <div className={styles.proof}>
                  <span>✓</span>
                  <p>
                    <strong>Same mechanism, verified.</strong>
                    <br />
                    All 54 stickers checked. Only the intended three edge pieces
                    remain moved.
                  </p>
                </div>
              </aside>
            </div>
          </>
        ) : (
          <section className={styles.practice}>
            <div className={styles.practiceIntro}>
              <span className={styles.eyebrow}>RECALL THE CONNECTION</span>
              <h2>Which setup gets you here?</h2>
              <p>
                The core is{" "}
                <strong>
                  {pretty(`[${quiz.a.join(" ")}, ${quiz.b.join(" ")}]`)}
                </strong>
                . Choose the setup that produces this directed cycle, then undo
                that setup after the core.
              </p>
              <p className={styles.fine}>
                This exercise tests setup recognition. Practice the algorithm on
                your physical cube after revealing it.
              </p>
              <div className={styles.practiceStats}>
                <strong>{correct}</strong> correct{" "}
                <span>/ {attempts} attempts</span>
              </div>
              <p className={styles.fine}>
                Saved in this browser. All 440 UF cases are available.
              </p>
              <label>
                Practice scope
                <select
                  aria-label="Practice scope"
                  value={practiceScope}
                  onChange={(e) => {
                    setPracticeScope(e.target.value as "all" | "family");
                    setQuestion(1);
                    setAnswer(null);
                    setHint(false);
                  }}
                >
                  <option value="all">All 440 cases</option>
                  <option value="family">
                    Current family ({family.cases.length} cases)
                  </option>
                </select>
              </label>
              {storageMessage && <p role="status">{storageMessage}</p>}
            </div>
            <div className={styles.quiz}>
              <span className={styles.eyebrow}>
                TARGET CYCLE · BOTH DIRECTIONS
              </span>
              <CycleDiagram cycle={quiz.cycle} />
              <div className={styles.answers}>
                {choices.map((s, i) => (
                  <button
                    key={i}
                    disabled={answer !== null}
                    className={answerClass(i)}
                    onClick={() => submit(i)}
                  >
                    {s.length ? pretty(s) : "No setup"}
                  </button>
                ))}
              </div>
              {answer === null ? (
                <button
                  className={styles.textButton}
                  onClick={() => setHint(true)}
                >
                  Reveal a geometry hint
                </button>
              ) : (
                <div className={styles.feedback} role="status">
                  <h3>
                    {answer === quizIndex
                      ? "Exactly. You found the connection."
                      : "Follow where the setup sends each sticker."}
                  </h3>
                  <p>
                    {quiz.cycle
                      .map((id, i) => `${id} → ${quiz.aligned[i]}`)
                      .join(" · ")}
                  </p>
                  <code>
                    {pretty(simplifyMoves(quiz.moves).moves.join(" "))}
                  </code>
                  <div className={styles.quizActions}>
                    <button
                      onClick={() => {
                        openCase(quiz.id);
                        setTab("explore");
                      }}
                    >
                      See it on the cube
                    </button>
                    <button
                      className={styles.play}
                      onClick={() => {
                        setQuestion(question + 1);
                        setAnswer(null);
                        setHint(false);
                      }}
                    >
                      Next case →
                    </button>
                  </div>
                </div>
              )}
              {hint && answer === null && (
                <p className={styles.hint}>
                  After setup:{" "}
                  {quiz.cycle
                    .map((id, i) => `${id} → ${quiz.aligned[i]}`)
                    .join(" · ")}
                  . Follow sticker identity even when the buffer moves.
                </p>
              )}
            </div>
          </section>
        )}
        {overlay && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setOverlay(null)}
          >
            <section
              ref={modalRef}
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-label={
                overlay === "atlas" ? "Target atlas" : "Learning guide"
              }
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeModal}
                onClick={() => setOverlay(null)}
              >
                Close ×
              </button>
              {overlay === "atlas" ? (
                <div className={styles.atlas}>
                  <h2>
                    Open the complete 22 × 22 target-pair atlas · 440 valid
                    cases
                  </h2>
                  <p>
                    Rows = first target; columns = second target. Color
                    identifies the selected algorithm family. Same-piece pairs
                    are unavailable.
                  </p>
                  <div className={styles.atlasScroll}>
                    <table>
                      <thead>
                        <tr>
                          <th>1st ↓ / 2nd →</th>
                          {FACELETS.filter(
                            (f) =>
                              f.id.length === 2 && !["UF", "FU"].includes(f.id),
                          ).map((f) => (
                            <th key={f.id}>{f.id}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {FACELETS.filter(
                          (f) =>
                            f.id.length === 2 && !["UF", "FU"].includes(f.id),
                        ).map((row) => (
                          <tr key={row.id}>
                            <th>{row.id}</th>
                            {FACELETS.filter(
                              (f) =>
                                f.id.length === 2 &&
                                !["UF", "FU"].includes(f.id),
                            ).map((col) => {
                              const entry = CASES.find(
                                (c) => c.id === `UF-${row.id}-${col.id}`,
                              );
                              return (
                                <td key={col.id}>
                                  {entry ? (
                                    <button
                                      aria-label={`Open ${entry.id}`}
                                      title={`${entry.id}: ${FAMILIES[entry.familyIndex].name}`}
                                      style={{
                                        background: `hsl(${(entry.familyIndex * 137.5) % 360} 35% 84%)`,
                                      }}
                                      onClick={() => {
                                        openCase(entry.id);
                                        setOverlay(null);
                                        setTab("explore");
                                      }}
                                    >
                                      {entry.familyIndex + 1}
                                    </button>
                                  ) : (
                                    <span>—</span>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <>
                  {" "}
                  <section className={styles.story}>
                    <div>
                      <span className={styles.eyebrow}>
                        THE IDEA BEHIND THE NOTATION
                      </span>
                      <h2>Move. Move. Undo. Undo.</h2>
                      <p>
                        A commutator is <code>A B A⁻¹ B⁻¹</code>. The moves
                        interact before they are undone. Watch the colored
                        stickers to see what survives.
                      </p>
                    </div>
                    <div className={styles.phaseCards}>
                      {phaseNames.map((block, i) => (
                        <button key={i} onClick={() => phaseJump(block.end)}>
                          <span>
                            {["01 / A", "02 / B", "03 / A⁻¹", "04 / B⁻¹"][i]}
                          </span>
                          <strong>{pretty(block.moves.join(" "))}</strong>
                          <small>
                            {
                              [
                                "First movement",
                                "Second movement",
                                "Undo the first",
                                "Undo the second",
                              ][i]
                            }
                          </small>
                          <b>→</b>
                        </button>
                      ))}
                    </div>
                  </section>
                  <section className={styles.relationships}>
                    <div>
                      <span className={styles.eyebrow}>
                        THREE DIFFERENT CONNECTIONS
                      </span>
                      <h2>Related doesn’t always mean identical.</h2>
                    </div>
                    <div className={styles.relationGrid}>
                      <article>
                        <span>01</span>
                        <h3>Same directed cycle</h3>
                        <div className={styles.diagramText}>
                          UF → DF → UB
                          <br />
                          <b>＝</b>
                          <br />
                          DF → UB → UF
                        </div>
                        <p>
                          Same circular journey. We just start reading it from
                          another sticker.
                        </p>
                      </article>
                      <article>
                        <span>02</span>
                        <h3>Inverse pair</h3>
                        <div className={styles.diagramText}>
                          UF → DF → UB
                          <br />
                          <b>⇄</b>
                          <br />
                          UF → UB → DF
                        </div>
                        <p>
                          Same three targets, opposite direction. Swap the
                          commutator operands.
                        </p>
                        <button
                          className={styles.textButton}
                          onClick={() => {
                            openCase("UF-UB-DF");
                            setOverlay(null);
                            setTab("explore");
                          }}
                        >
                          Compare the inverse ↑
                        </button>
                      </article>
                      <article>
                        <span>03</span>
                        <h3>Setup relative</h3>
                        <div className={styles.setupDiagram}>
                          <span>S</span> → <strong>CORE</strong> →{" "}
                          <span>S⁻¹</span>
                        </div>
                        <p>
                          Bring targets into the base pattern, use the core,
                          then undo the setup.
                        </p>
                        <button
                          className={styles.textButton}
                          onClick={() => {
                            openCase("UF-DL-UB");
                            setOverlay(null);
                            setTab("explore");
                          }}
                        >
                          Explore a setup relative ↑
                        </button>
                      </article>
                    </div>
                  </section>
                </>
              )}
            </section>
          </div>
        )}
        <footer className={styles.footer}>
          <span>
            UF CYCLE LAB <b> / </b> Understanding → recognition → recall
          </span>
          <Link href="/edge">Open the full algorithm database ↗</Link>
        </footer>
      </div>
    </main>
  );
}
