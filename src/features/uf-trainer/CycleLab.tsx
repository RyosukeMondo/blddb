"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
} from "react";
import Link from "next/link";
import {
  FACELETS,
  destination,
  execute,
  simplifyMoves,
  resolveVariantKey,
  TARGET_FACELET_IDS,
  isSamePiece,
  validateTargetPair,
  parseTargetPairInput,
  type TargetPairIssue,
} from "./engine";
import {
  FAMILIES,
  CASES,
  caseLesson,
  setupChoices,
  symmetryGroup,
  algVariants,
  lookupCaseByTargets,
} from "./catalog";
import styles from "./lab.module.css";
import dynamic from "next/dynamic";
import SymmetryPanel, { variantNotation } from "./SymmetryPanel";
const Cube3D = dynamic(() => import("./Cube3D"), {
  ssr: false,
  loading: () => <p>Loading 3D cube…</p>,
});

const colors = ["#087f78", "#c36d24", "#7760a9"];
const overlayLabels: Record<string, string> = {
  pick: "Pick stickers",
  atlas: "Target atlas",
  guide: "Learning guide",
};
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
const casesById = new Map(CASES.map((c) => [c.id, c]));
const targetFaceletIdSet = new Set(TARGET_FACELET_IDS);
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
const PREFER_MIRROR_STORAGE = "uf-cycle-lab-prefer-mirror-v1";
let memoryPreferMirror = "false";
let preferMirrorStorageUnavailable = false;
function writePreferMirror(value: boolean) {
  memoryPreferMirror = JSON.stringify(value);
  try {
    localStorage.setItem(PREFER_MIRROR_STORAGE, memoryPreferMirror);
  } catch {
    preferMirrorStorageUnavailable = true;
  }
  window.dispatchEvent(new Event("uf-prefer-mirror"));
}
function preferMirrorSnapshot() {
  if (preferMirrorStorageUnavailable) {
    return memoryPreferMirror;
  }
  try {
    return localStorage.getItem(PREFER_MIRROR_STORAGE) || memoryPreferMirror;
  } catch {
    return memoryPreferMirror;
  }
}
function subscribePreferMirror(callback: () => void) {
  window.addEventListener("uf-prefer-mirror", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("uf-prefer-mirror", callback);
    window.removeEventListener("storage", callback);
  };
}
// Per-case "my alg" choice: { [caseId]: variantKey }. Same external-store +
// in-memory-fallback pattern as prefer-mirror above, so a saved choice
// survives reloads but degrades gracefully when storage is unavailable.
const VARIANT_CHOICES_STORAGE = "uf-cycle-lab-variant-choices-v1";
type VariantChoices = Record<string, string>;
let memoryVariantChoices = "{}";
let variantChoicesStorageUnavailable = false;
function writeVariantChoices(value: VariantChoices) {
  memoryVariantChoices = JSON.stringify(value);
  try {
    localStorage.setItem(VARIANT_CHOICES_STORAGE, memoryVariantChoices);
  } catch {
    variantChoicesStorageUnavailable = true;
  }
  window.dispatchEvent(new Event("uf-variant-choices"));
}
function variantChoicesSnapshot() {
  if (variantChoicesStorageUnavailable) {
    return memoryVariantChoices;
  }
  try {
    return (
      localStorage.getItem(VARIANT_CHOICES_STORAGE) || memoryVariantChoices
    );
  } catch {
    return memoryVariantChoices;
  }
}
function subscribeVariantChoices(callback: () => void) {
  window.addEventListener("uf-variant-choices", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("uf-variant-choices", callback);
    window.removeEventListener("storage", callback);
  };
}
function readVariantChoices(raw: string): VariantChoices {
  try {
    const data: unknown = JSON.parse(raw);
    if (!data || typeof data !== "object" || Array.isArray(data)) {
      return {};
    }
    return Object.fromEntries(
      Object.entries(data).filter(([, v]) => typeof v === "string"),
    );
  } catch {
    return {};
  }
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
// `pickable` turns the same net geometry/colours into the "pick stickers"
// picker: the 22 valid edge stickers (not UF/FU, not centers or corners)
// become focusable buttons that call onPick, UF/FU render as the inert
// buffer, and everything else is dimmed and aria-hidden. `tracked` doubles
// as the picker's selection: passing [buffer, t1?, t2?] reuses the existing
// buffer/target-1/target-2 color coding and same-piece companion dot.
function CubeNet({
  moves,
  tracked,
  pickable = false,
  onPick,
}: {
  moves: string[];
  tracked: string[];
  pickable?: boolean;
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  onPick?: (id: string) => void;
}) {
  const state = execute(moves);
  return (
    <svg
      className={`${styles.net} ${pickable ? styles.pickerNet : ""}`}
      viewBox="0 0 584 448"
      role="img"
      aria-label={
        pickable
          ? "Unfolded cube. Click a sticker to pick it as a target."
          : `Cube net after ${moves.length} moves. ${tracked.map((id) => `${id} sticker at ${destination(state, id)}`).join(". ")}`
      }
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
              id !== identity.id &&
              id.length === 2 &&
              isSamePiece(id, identity.id),
          );
        const active = highlight >= 0 ? highlight : companion;
        const isCenter = identity.id.length === 1;
        const isBuffer = identity.id === "UF" || identity.id === "FU";
        const isTarget = targetFaceletIdSet.has(identity.id);
        const clickable = pickable && isTarget;
        const inert = pickable && !isTarget && !isBuffer;
        const stickerOpacity = active >= 0 ? 1 : 0.7;
        let rectOpacity = stickerOpacity;
        if (isCenter) {
          rectOpacity = 0.35;
        } else if (inert) {
          rectOpacity = 0.3;
        }
        let labelOpacity = 0.58;
        if (active >= 0) {
          labelOpacity = 1;
        } else if (inert) {
          labelOpacity = 0.4;
        }
        const content = (
          <>
            <rect
              width="42"
              height="42"
              rx="6"
              fill={active >= 0 ? colors[active] : faceColors[identity.face]}
              opacity={rectOpacity}
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
                opacity={labelOpacity}
                fontWeight={active >= 0 ? 750 : 400}
              >
                {identity.id}
              </text>
            )}
            {companion >= 0 && <circle cx="34" cy="8" r="2.5" fill="white" />}
            {pickable && isBuffer && (
              <>
                <title>{`${identity.id} — buffer, not selectable`}</title>
                <text
                  x="21"
                  y="37"
                  textAnchor="middle"
                  fill={active >= 0 ? "white" : "#485148"}
                  fontSize="6"
                  letterSpacing="0.05em"
                  opacity="0.85"
                >
                  BUFFER
                </text>
              </>
            )}
            {pickable && highlight >= 1 && (
              <>
                <circle cx="8" cy="8" r="8" fill="#162c26" />
                <text
                  x="8"
                  y="11"
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight="700"
                  fill="white"
                >
                  {highlight}
                </text>
              </>
            )}
          </>
        );
        return (
          <g
            key={identity.id}
            style={{
              transform: `translate(${ox + slot.col * 44}px, ${oy + slot.row * 44}px)`,
            }}
            className={`${styles.sticker} ${clickable ? styles.stickerButton : ""}`}
            role={clickable ? "button" : undefined}
            tabIndex={clickable ? 0 : undefined}
            aria-hidden={inert ? true : undefined}
            aria-label={
              clickable
                ? `${identity.face} face, next to ${identity.id.slice(1)} (${identity.id})`
                : undefined
            }
            onClick={clickable ? () => onPick?.(identity.id) : undefined}
            onKeyDown={
              clickable
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onPick?.(identity.id);
                    }
                  }
                : undefined
            }
          >
            {content}
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
  const [overlay, setOverlay] = useState<"atlas" | "guide" | "pick" | null>(
    null,
  );
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
  const preferMirror =
    useSyncExternalStore(
      subscribePreferMirror,
      preferMirrorSnapshot,
      () => "false",
    ) === "true";
  const variantChoices = readVariantChoices(
    useSyncExternalStore(
      subscribeVariantChoices,
      variantChoicesSnapshot,
      () => "{}",
    ),
  );
  const setVariantChoice = (caseId: string, key: string) => {
    writeVariantChoices({ ...variantChoices, [caseId]: key });
  };
  const clearVariantChoice = (caseId: string) => {
    const next = { ...variantChoices };
    Reflect.deleteProperty(next, caseId);
    writeVariantChoices(next);
  };
  const [storageMessage, setStorageMessage] = useState("");
  const [question, setQuestion] = useState(1),
    [answer, setAnswer] = useState<number | null>(null),
    [hint, setHint] = useState(false);
  const [pickT1, setPickT1] = useState<string | null>(null);
  const [pickT2, setPickT2] = useState<string | null>(null);
  const [pickMessage, setPickMessage] = useState("");
  const [pickTypedInput, setPickTypedInput] = useState("");
  const openPicker = () => {
    setOverlay("pick");
    setPlaying(false);
    setPickT1(null);
    setPickT2(null);
    setPickMessage("");
    setPickTypedInput("");
  };
  const family = FAMILIES[familyIndex];
  const currentEntry = { ...family.cases[selected], familyIndex };
  const symmetryVariants = algVariants(currentEntry);
  const symmetryGroupInfo = symmetryGroup(currentEntry);
  const savedVariantKey = variantChoices[currentEntry.id];
  const activeVariantKey = resolveVariantKey(
    symmetryVariants,
    savedVariantKey,
    preferMirror,
  );
  const activeVariant =
    symmetryVariants.find((v) => v.key === activeVariantKey) ||
    symmetryVariants[0];
  const current = caseLesson(activeVariant);
  // Family-relative direction is a property of the case itself, not of
  // whichever symmetry-derived algorithm variant is currently displayed.
  const reverse = currentEntry.a.join(" ") !== family.id.split(" | ")[0];
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
  const pickPairMessage = (issue: TargetPairIssue, t1: string, t2: string) => {
    if (issue === "buffer") {
      return `${t1} or ${t2} is the buffer (UF/FU) — pick one of the 22 targets instead.`;
    }
    if (issue === "same-piece") {
      return `${t1} and ${t2} are the same edge — pick a different piece.`;
    }
    return `${t1} and ${t2} must both be valid edge sticker ids, e.g. RU or FR.`;
  };
  const handlePick = (id: string) => {
    setPickMessage("");
    if (id === pickT1) {
      setPickT1(null);
      return;
    }
    if (id === pickT2) {
      setPickT2(null);
      return;
    }
    if (!pickT1) {
      setPickT1(id);
      return;
    }
    if (isSamePiece(pickT1, id)) {
      setPickMessage(
        `${pickT1} and ${id} are the same edge — pick a different piece.`,
      );
      return;
    }
    setPickT2(id);
  };
  const swapPick = () => {
    setPickT1(pickT2);
    setPickT2(pickT1);
    setPickMessage("");
  };
  const clearPick = () => {
    setPickT1(null);
    setPickT2(null);
    setPickMessage("");
    setPickTypedInput("");
  };
  // Enter in the typed-input field both sets the targets and, since a
  // validated pair always resolves to a case, opens it in the same step --
  // this is where the picker's "Enter to open" lives; the native "Open
  // case" button covers the click/pick flow.
  const applyTypedPick = () => {
    const parsed = parseTargetPairInput(pickTypedInput);
    if (!parsed) {
      setPickMessage(
        'Enter two facelet ids, e.g. "RU FR", "ru-fr", or "RU→FR".',
      );
      return;
    }
    const issue = validateTargetPair(parsed.t1, parsed.t2);
    if (issue) {
      setPickMessage(pickPairMessage(issue, parsed.t1, parsed.t2));
      return;
    }
    setPickT1(parsed.t1);
    setPickT2(parsed.t2);
    setPickMessage("");
    const lookup = lookupCaseByTargets(parsed.t1, parsed.t2);
    if (lookup) {
      openCase(lookup.caseId);
      setOverlay(null);
    }
  };
  const pickLookup =
    pickT1 && pickT2 ? lookupCaseByTargets(pickT1, pickT2) : null;
  const pickCaseEntry = pickLookup
    ? casesById.get(pickLookup.caseId)
    : undefined;
  const pickVariants = pickCaseEntry ? algVariants(pickCaseEntry) : [];
  const pickActiveKey = pickCaseEntry
    ? resolveVariantKey(
        pickVariants,
        variantChoices[pickCaseEntry.id],
        preferMirror,
      )
    : "";
  const pickActiveVariant =
    pickVariants.find((v) => v.key === pickActiveKey) || pickVariants[0];
  const pickPreview =
    pickCaseEntry && pickActiveVariant
      ? {
          caseId: pickCaseEntry.id,
          familyName: pretty(FAMILIES[pickCaseEntry.familyIndex].name),
          notation: variantNotation(pickActiveVariant, pretty),
        }
      : null;
  const jump = (n: number) => {
    setPlaying(false);
    setStep(n);
  };
  const practiceCases =
    practiceScope === "all"
      ? CASES
      : CASES.filter((c) => c.familyIndex === familyIndex);
  const quizEntry = practiceCases[(question * 137) % practiceCases.length];
  const quizVariants = algVariants(quizEntry);
  const quizVariant =
    quizVariants.find(
      (v) =>
        v.key ===
        resolveVariantKey(
          quizVariants,
          variantChoices[quizEntry.id],
          preferMirror,
        ),
    ) || quizVariants[0];
  const quiz = caseLesson(quizVariant);
  const choices = setupChoices(quizVariant);
  const quizIndex = choices.indexOf(quiz.setup.join(" "));
  const attempts = Object.values(progress).reduce(
      (sum, p) => sum + p.attempts,
      0,
    ),
    correct = Object.values(progress).reduce((sum, p) => sum + p.correct, 0);
  // A remembered choice "flips" a case when it resolves to a variant that
  // differs from the catalog's assigned alg (in practice: a mirror-derived
  // one, since the inverse variant is always identical to assigned).
  const flippedCase = (caseId: string, key: string) => {
    const caseEntry = casesById.get(caseId);
    if (!caseEntry) {
      return false;
    }
    const variant = algVariants(caseEntry).find((v) => v.key === key);
    return Boolean(variant && !variant.pure);
  };
  const rememberedSummary = Object.entries(variantChoices).reduce(
    (acc, [caseId, key]) => {
      if (!casesById.has(caseId)) {
        return acc;
      }
      return {
        total: acc.total + 1,
        mirror: acc.mirror + (flippedCase(caseId, key) ? 1 : 0),
      };
    },
    { total: 0, mirror: 0 },
  );
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
          <button
            title="Pick two stickers on the cube net to jump straight to that case"
            onClick={openPicker}
          >
            ◎ Pick stickers
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
              title="Pick two stickers on the cube net to jump straight to that case"
              onClick={openPicker}
            >
              Pick stickers
            </button>
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
                      {variantChoices[l.id] &&
                        flippedCase(l.id, variantChoices[l.id]) && (
                          <span
                            className={styles.mirrorMarker}
                            title="Remembered alg is a mirror variant, not the assigned one"
                          >
                            M
                          </span>
                        )}
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
                <SymmetryPanel
                  entry={currentEntry}
                  group={symmetryGroupInfo}
                  variants={symmetryVariants}
                  activeKey={activeVariantKey}
                  savedKey={savedVariantKey}
                  onSelectVariant={(key) =>
                    setVariantChoice(currentEntry.id, key)
                  }
                  onClearVariantChoice={() =>
                    clearVariantChoice(currentEntry.id)
                  }
                  onNavigate={openCase}
                  preferMirror={preferMirror}
                  onChangePreferMirror={writePreferMirror}
                  rememberedSummary={rememberedSummary}
                  pretty={pretty}
                />
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
              aria-label={overlay ? overlayLabels[overlay] : undefined}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles.closeModal}
                onClick={() => setOverlay(null)}
              >
                Close ×
              </button>
              {overlay === "pick" && (
                <div className={styles.picker}>
                  <h2>Pick two stickers</h2>
                  <p>
                    Click the two targets on the net in order, or type their
                    facelet ids. UF/FU is the buffer and can&apos;t be picked.
                  </p>
                  <div className={styles.pickerBody}>
                    <div className={styles.pickerNetScroll}>
                      <CubeNet
                        moves={[]}
                        tracked={["UF", pickT1, pickT2].filter(
                          (id): id is string => Boolean(id),
                        )}
                        pickable
                        onPick={handlePick}
                      />
                    </div>
                    <div className={styles.pickerControls}>
                      <p className={styles.pickerReadout}>
                        UF → {pickT1 ?? "?"} → {pickT2 ?? "?"}
                      </p>
                      {pickMessage && (
                        <p role="status" className={styles.pickerMessage}>
                          {pickMessage}
                        </p>
                      )}
                      <label>
                        Type facelet ids
                        <input
                          aria-label="Type two facelet ids"
                          placeholder="e.g. RU FR"
                          value={pickTypedInput}
                          onChange={(e) => setPickTypedInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              e.stopPropagation();
                              applyTypedPick();
                            }
                          }}
                        />
                      </label>
                      <div className={styles.pickerActions}>
                        <button
                          type="button"
                          onClick={swapPick}
                          disabled={!pickT1 || !pickT2}
                        >
                          ⇄ Swap order
                        </button>
                        <button
                          type="button"
                          onClick={clearPick}
                          disabled={!pickT1 && !pickT2}
                        >
                          Clear
                        </button>
                      </div>
                      {pickPreview ? (
                        <div className={styles.pickerPreview}>
                          <span className={styles.eyebrow}>
                            {pickPreview.familyName}
                          </span>
                          <code>{pickPreview.notation}</code>
                          <button
                            className={styles.play}
                            onClick={() => {
                              openCase(pickPreview.caseId);
                              setOverlay(null);
                            }}
                          >
                            Open case ↗
                          </button>
                        </div>
                      ) : (
                        <p className={styles.fine}>
                          Pick two different-piece targets to preview the
                          algorithm that will load.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {overlay === "atlas" && (
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
                          {TARGET_FACELET_IDS.map((id) => (
                            <th key={id}>{id}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {TARGET_FACELET_IDS.map((rowId) => (
                          <tr key={rowId}>
                            <th>{rowId}</th>
                            {TARGET_FACELET_IDS.map((colId) => {
                              const entry = CASES.find(
                                (c) => c.id === `UF-${rowId}-${colId}`,
                              );
                              return (
                                <td key={colId}>
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
              )}
              {overlay === "guide" && (
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
