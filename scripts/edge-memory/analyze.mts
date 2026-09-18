import codeConverter from "../../src/utils/codeConverter.ts";
import fs from "fs";

const NESTED_OPEN = /\[.+\[/u;
const SECOND_COMM = /\],.*\]/u;
const OPEN_BRACKET = /\[/u;

const ROOT = new URL("../../", import.meta.url).pathname;
const OUT = `${ROOT}docs/edge-memory`;
fs.mkdirSync(OUT, { recursive: true });

// ---------- load merged picks ----------
interface PickRecord {
  core: string;
  comm: string;
  mlen: number;
  pure: boolean;
}
const picks: Record<string, PickRecord> = {};
for (let i = 0; i < 24; i++) {
  const f = `${ROOT}scripts/edge-memory/picks_r${i}.json`;
  if (fs.existsSync(f)) {
    Object.assign(picks, JSON.parse(fs.readFileSync(f, "utf8")));
  }
}
const keys = Object.keys(picks).sort();
const buffers = [...new Set(keys.map((k) => k[0]))].sort();

// normalize compound (sum-of-commutators) picks into one bucket so grouping/tables stay clean
for (const k of keys) {
  const c = picks[k].core;
  if (c.includes("+") || NESTED_OPEN.test(c) || SECOND_COMM.test(c.slice(1))) {
    picks[k].core = "⊕compound";
  }
}

// ---------- helpers ----------
const mc = (s: string) => (s ? s.split(/\s+/u).filter(Boolean).length : 0);
const invOf = (k: string) => k[0] + k[2] + k[1];

function splitCore(core: string) {
  const inner = core.slice(1, -1);
  // compound: engine emitted a sum of two commutators ( [..]+[..] ) — not a single clean comm
  if (core.includes("+") || OPEN_BRACKET.test(inner)) {
    return { ic: "⊕", ins: "compound", compound: true };
  }
  let depth = 0,
    ci = -1;
  for (let i = 0; i < inner.length; i++) {
    const c = inner[i];
    if (c === "[") {
      depth++;
    } else if (c === "]") {
      depth--;
    } else if (c === "," && depth === 0) {
      ci = i;
      break;
    }
  }
  let a = inner,
    b = "";
  if (ci >= 0) {
    a = inner.slice(0, ci);
    b = inner.slice(ci + 1);
  }
  if (!a.trim() || !b.trim()) {
    return { ic: "⊕", ins: "compound", compound: true };
  }
  // interchange = fewer moves; insert = more moves
  return mc(a) <= mc(b) ? { ic: a, ins: b } : { ic: b, ins: a };
}
// nickname for a comm piece
function nick(p: string) {
  const m = p.trim().split(/\s+/u);
  if (m.length === 1) {
    return m[0];
  }
  // conjugate slot insert  X y X'   ->  y@Xbase
  if (
    m.length === 3 &&
    m[0].replace(/['2]/u, "") === m[2].replace(/['2]/u, "")
  ) {
    return `${m[1]}@${m[0]}`;
  }
  return p.replace(/\s+/gu, "");
}
function famName(core: string) {
  const { ic, ins } = splitCore(core);
  return `${nick(ins)} · ${nick(ic)}`;
}

// ---------- ASCII edge net ----------
const faceEdges: Record<
  string,
  { N: string; E: string; S: string; W: string }
> = {
  U: { N: "UB", E: "UR", S: "UF", W: "UL" },
  L: { N: "LU", E: "LF", S: "LD", W: "LB" },
  F: { N: "FU", E: "FR", S: "FD", W: "FL" },
  R: { N: "RU", E: "RB", S: "RD", W: "RF" },
  B: { N: "BU", E: "BL", S: "BD", W: "BR" },
  D: { N: "DF", E: "DR", S: "DB", W: "DL" },
};
function faceBlock(face: string, marks: Record<string, string>) {
  const fe = faceEdges[face];
  const cell = (pos: string) => marks[pos] ?? "·";
  const c = face.toLowerCase();
  return [
    `· ${cell(fe.N)} ·`,
    `${cell(fe.W)} ${c} ${cell(fe.E)}`,
    `· ${cell(fe.S)} ·`,
  ];
}
const PAD = "      ";
function renderNet(code: string) {
  const pos = codeConverter.customCodeToPosition(code, "edge");
  const marks: Record<string, string> = {};
  pos.forEach((p: string, i: number) => {
    marks[p] = String(i + 1);
  });
  const U = faceBlock("U", marks),
    L = faceBlock("L", marks),
    F = faceBlock("F", marks),
    R = faceBlock("R", marks),
    B = faceBlock("B", marks),
    D = faceBlock("D", marks);
  const lines: string[] = [];
  for (const r of U) {
    lines.push(PAD + r);
  }
  for (let i = 0; i < 3; i++) {
    lines.push([L[i], F[i], R[i], B[i]].join("  "));
  }
  for (const r of D) {
    lines.push(PAD + r);
  }
  const legend = pos
    .map((p: string, i: number) => `${i + 1}=${code[i]}(${p})`)
    .join("  ");
  return { net: lines.join("\n"), legend };
}

// ---------- global stats ----------
const cores: Record<string, string[]> = {};
for (const k of keys) {
  (cores[picks[k].core] ??= []).push(k);
}
const allPairs: [string, string][] = [];
const pseen = new Set<string>();
for (const k of keys) {
  const iv = invOf(k);
  if (picks[iv] && !pseen.has(k) && k !== iv) {
    allPairs.push([k, iv]);
    pseen.add(k);
    pseen.add(iv);
  }
}

// vocab
const interCount: Record<string, number> = {},
  insertCount: Record<string, number> = {};
for (const k of keys) {
  const { ic, ins } = splitCore(picks[k].core);
  interCount[ic] = (interCount[ic] || 0) + 1;
  insertCount[ins] = (insertCount[ins] || 0) + 1;
}
const byCount = (o: Record<string, number>) =>
  Object.entries(o).sort((a, b) => b[1] - a[1]);

// ================= PERIODIC TABLE =================
{
  const L: string[] = [];
  const P = (s = "") => L.push(s);
  P("# Edge 3‑Style — Insert / Interchange Periodic Table");
  P();
  P(
    `Across **all ${keys.length} edge cases**, every pure‑memorability pick is \`setup : [interchange , insert]\`.`,
  );
  P(
    "These two tables are the whole vocabulary — learn the pieces once, every case is a combination.",
  );
  P();
  P(
    `## Interchanges (the "swap" — usually 1 move)  — ${byCount(interCount).length} distinct`,
  );
  P();
  P("| interchange | used in | nickname |");
  P("|---|---|---|");
  for (const [p, n] of byCount(interCount)) {
    P(`| \`${p}\` | ${n} | ${nick(p)} |`);
  }
  P();
  P(
    `## Inserts (the "cycle" piece)  — ${byCount(insertCount).length} distinct`,
  );
  P();
  P("| insert | used in | nickname |");
  P("|---|---|---|");
  for (const [p, n] of byCount(insertCount)) {
    P(`| \`${p}\` | ${n} | ${nick(p)} |`);
  }
  P();
  P(
    `## Cores (interchange × insert combos)  — ${Object.keys(cores).length} distinct shapes`,
  );
  P();
  P("| core shape | name | # cases | cases |");
  P("|---|---|---|---|");
  for (const [core, ks] of Object.entries(cores).sort(
    (a, b) => b[1].length - a[1].length,
  )) {
    P(
      `| \`${core}\` | ${famName(core)} | ${ks.length} | ${ks.length <= 14 ? ks.sort().join(" ") : `${ks.sort().slice(0, 14).join(" ")} …(+${ks.length - 14})`} |`,
    );
  }
  P();
  fs.writeFileSync(`${OUT}/PERIODIC_TABLE.md`, L.join("\n"));
}

// ================= PER-BUFFER SHEETS =================
function bufSheet(buf: string) {
  const bk = keys.filter((k) => k[0] === buf);
  const fams: Record<string, string[]> = {};
  for (const k of bk) {
    (fams[picks[k].core] ??= []).push(k);
  }
  const famList = Object.entries(fams).sort(
    (a, b) => b[1].length - a[1].length,
  );
  const multi = famList.filter(([, k]) => k.length > 1),
    singles = famList.filter(([, k]) => k.length === 1);
  const pairs: [string, string][] = [];
  const seen = new Set<string>();
  for (const k of bk) {
    const iv = invOf(k);
    if (picks[iv] && !seen.has(k) && k !== iv) {
      pairs.push([k, iv]);
      seen.add(k);
      seen.add(iv);
    }
  }
  const mlens = bk.map((k) => picks[k].mlen);
  const pure = bk.filter((k) => picks[k].pure).length;

  const L: string[] = [];
  const P = (s = "") => L.push(s);
  P(`# Edge 3‑Style — Buffer ${buf} — Memory Sheet`);
  P();
  P(
    "*Pure‑memorability picks (shortest/cleanest commutator of 100 computer algs per case).*",
  );
  P();
  P("## The collapse");
  P("| metric | value |");
  P("|---|---|");
  P(`| cases | **${bk.length}** |`);
  P(`| distinct shapes (cores) | **${famList.length}** |`);
  P(
    `| shared‑core families (≥2) | **${multi.length}** covering ${multi.reduce((a, [, k]) => a + k.length, 0)} |`,
  );
  P(`| inverse pairs (learn 1 ⇒ 2) | **${pairs.length}** |`);
  P(`| pure commutators (no setup) | **${pure}** |`);
  P(
    `| moves min/avg/max | ${Math.min(...mlens)} / ${(mlens.reduce((a, b) => a + b, 0) / mlens.length).toFixed(1)} / ${Math.max(...mlens)} |`,
  );
  P();
  P(
    "Read: `setup : [interchange , insert]` → setup → interchange → insert → interchange' → insert' → setup'. Inverse case = swap the two pieces.",
  );
  P();
  // mermaid
  P("## Family map");
  P();
  P("```mermaid");
  P("graph LR");
  let fi = 0;
  for (const [core, ks] of multi) {
    fi++;
    const id = `F${fi}`;
    P(`  ${id}["${famName(core).replace(/"/gu, "'")}"]`);
    for (const k of ks) {
      P(`  ${id} --> ${k}`);
    }
  }
  P("```");
  P();
  // families
  P("## Families");
  P();
  fi = 0;
  for (const [core, ks] of multi) {
    fi++;
    const { ic, ins } = splitCore(core);
    P(`### F${fi}. ${famName(core)} · ×${ks.length}`);
    P();
    P(`Shape \`[${ic} , ${ins}]\` — interchange \`${ic}\`, insert \`${ins}\`.`);
    P();
    P("| case | comm | moves | inverse |");
    P("|---|---|---|---|");
    for (const k of ks.sort()) {
      P(
        `| **${k}** | \`${picks[k].comm}\` | ${picks[k].mlen} | ${picks[invOf(k)] ? invOf(k) : "—"} |`,
      );
    }
    P();
  }
  if (singles.length) {
    P("## Singletons");
    P();
    P("| case | comm | moves | inverse |");
    P("|---|---|---|---|");
    for (const [, ks] of singles) {
      const k = ks[0];
      P(
        `| **${k}** | \`${picks[k].comm}\` | ${picks[k].mlen} | ${picks[invOf(k)] ? invOf(k) : "—"} |`,
      );
    }
    P();
  }
  // inverse index
  P("## Inverse‑pair index");
  P();
  P("| learn | comm | ⇄ | derive | comm |");
  P("|---|---|---|---|---|");
  for (const [a, b] of pairs.sort()) {
    P(`| **${a}** | \`${picks[a].comm}\` | ⇄ | ${b} | \`${picks[b].comm}\` |`);
  }
  P();
  // cards with ASCII nets
  P("## Case cards (with 3‑cycle diagrams)");
  P();
  for (const k of bk.sort()) {
    const p = picks[k];
    const { net, legend } = renderNet(k);
    P(`#### ${k} — ${famName(p.core)} — \`${p.comm}\` (${p.mlen})`);
    P("```");
    P(net);
    P(`  ${legend}`);
    P("```");
    P();
  }
  fs.writeFileSync(`${OUT}/edge_buffer_${buf}.md`, L.join("\n"));
  return {
    buf,
    cases: bk.length,
    shapes: famList.length,
    pairs: pairs.length,
    pure,
  };
}

const bufStats = buffers.map(bufSheet);

// ================= MASTER INDEX =================
{
  const L: string[] = [];
  const P = (s = "") => L.push(s);
  const totShapes = Object.keys(cores).length;
  P("# Edge 3‑Style — Memory Sheets (Index)");
  P();
  P(
    "Computer‑generated algs (100/case) reduced to the **single most memorable commutator** per case, then grouped.",
  );
  P();
  P("## Global collapse");
  P("| metric | value |");
  P("|---|---|");
  P(`| total cases | **${keys.length}** |`);
  P(`| distinct shapes (cores) across all buffers | **${totShapes}** |`);
  P(`| inverse pairs | **${allPairs.length}** |`);
  P(`| distinct interchanges | ${byCount(interCount).length} |`);
  P(`| distinct inserts | ${byCount(insertCount).length} |`);
  P(`| pure commutators | ${keys.filter((k) => picks[k].pure).length} |`);
  P();
  P("➡ [Insert / Interchange Periodic Table](PERIODIC_TABLE.md)");
  P();
  P("## Per‑buffer sheets");
  P("| buffer | cases | shapes | inverse pairs | pure | sheet |");
  P("|---|---|---|---|---|---|");
  for (const s of bufStats) {
    P(
      `| ${s.buf} | ${s.cases} | ${s.shapes} | ${s.pairs} | ${s.pure} | [edge_buffer_${s.buf}.md](edge_buffer_${s.buf}.md) |`,
    );
  }
  P();
  fs.writeFileSync(`${OUT}/INDEX.md`, L.join("\n"));
}

console.log(
  `cases=${keys.length} buffers=${buffers.join("")} shapes=${Object.keys(cores).length} pairs=${allPairs.length}`,
);
console.log(`wrote sheets to ${OUT}/`);
