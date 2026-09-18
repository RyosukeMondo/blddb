import fs from "node:fs";
import assert from "node:assert/strict";
import {
  FACELETS,
  execute,
  inverse,
  destination,
  solved,
  computeSymmetry,
  type SymmetryInfo,
} from "../../src/features/uf-trainer/engine.ts";
import commutator from "../../src/utils/commutator.ts";
import tracer from "../../src/utils/tracer.ts";
const root = new URL("../../", import.meta.url);
const sheets = new URL("docs/edge-memory/", root);
const rows = new Map<string, { notation: string; source: string }>();
for (const name of fs
  .readdirSync(sheets)
  .filter((n) => /^edge_buffer_.*\.md$/u.test(n))
  .sort()) {
  const text = fs.readFileSync(new URL(name, sheets), "utf8");
  for (const m of text.matchAll(/\| \*\*([A-Z]{3})\*\* \| `([^`]+)`/gu)) {
    rows.set(m[1], { notation: m[2], source: `docs/edge-memory/${name}` });
  }
}
assert.equal(rows.size, 1760);
type Entry = {
  id: string;
  setup: string[];
  a: string[];
  b: string[];
  cycle: string[];
  source: string;
  sourceKey: string;
  sourceNotation: string;
  familyId: string;
  derivedInverse: boolean;
  symmetry?: SymmetryInfo;
};
const entries: Entry[] = [];
const home = solved(),
  initial = tracer.sequenceToState("").slice(1);
for (const [sourceKey, { notation, source }] of rows) {
  const m = notation.match(/^(?:(.*):)?\[([^[\],]+),([^[\],]+)\]$/u);
  assert.ok(m, `Unparsed ${sourceKey}: ${notation}`);
  const tokenize = (s: string) => s.trim().split(/\s+/u).filter(Boolean);
  const setup = tokenize(m[1] || ""),
    a = tokenize(m[2]),
    b = tokenize(m[3]);
  const moves = [
    ...setup,
    ...a,
    ...b,
    ...inverse(a),
    ...inverse(b),
    ...inverse(setup),
  ];
  const state = execute(moves);
  // Reject malformed decompositions and independently validate final sticker permutation.
  assert.deepEqual(
    state,
    execute(tokenize(commutator.expand({ algorithm: notation }))),
    sourceKey,
  );
  assert.equal(
    state.map((id) => initial[home.indexOf(id)]).join(""),
    tracer.sequenceToState(moves.join(" ")).slice(1),
    sourceKey,
  );
  if (destination(state, "UF") === "UF") {
    continue;
  }
  const cycle = ["UF", destination(state, "UF")];
  cycle.push(destination(state, cycle[1]));
  assert.equal(destination(state, cycle[2]), "UF");
  const changed = FACELETS.filter((f, i) => f.id !== state[i]);
  assert.equal(changed.length, 6, sourceKey);
  assert.ok(changed.every((f) => f.id.length === 2));
  assert.equal(new Set(changed.map((f) => [...f.id].sort().join(""))).size, 3);
  entries.push({
    derivedInverse: false,
    id: cycle.join("-"),
    setup,
    a,
    b,
    cycle,
    source,
    sourceKey,
    sourceNotation: notation,
    familyId: [a.join(" "), b.join(" ")].sort().join(" | "),
  });
}
// Choose one algorithm per unordered target pair. The inverse derives from the same core/setup.
const pairs = new Map<string, Entry[]>();
for (const e of entries) {
  const id = e.cycle.slice(1).sort().join("-");
  pairs.set(id, [...(pairs.get(id) || []), e]);
}
assert.equal(pairs.size, 220);
const chosen: Entry[] = [];
for (const options of pairs.values()) {
  options.sort(
    (a, b) =>
      a.setup.length - b.setup.length ||
      a.a.length + a.b.length - b.a.length - b.b.length ||
      a.sourceKey.localeCompare(b.sourceKey),
  );
  const e = options[0];
  chosen.push(e, {
    ...e,
    derivedInverse: true,
    id: ["UF", e.cycle[2], e.cycle[1]].join("-"),
    a: e.b,
    b: e.a,
    cycle: ["UF", e.cycle[2], e.cycle[1]],
  });
}
assert.equal(new Set(chosen.map((e) => e.id)).size, 440);
// LR-mirror / inverse symmetry: every case's group of related algorithms and
// whether its assigned alg happens to already be the pure mirror/inverse of
// its partner's, computed generically from engine.ts rather than hand-typed.
const byId = new Map(chosen.map((e) => [e.id, e]));
const findCase = (id: string) => byId.get(id);
let mirrorPureCount = 0,
  mirrorDifferentCount = 0,
  selfMirrorCount = 0;
for (const e of chosen) {
  const symmetry = computeSymmetry(e, findCase);
  e.symmetry = symmetry;
  if (symmetry.mirrorId === e.id) {
    selfMirrorCount++;
  } else if (symmetry.mirrorPure) {
    mirrorPureCount++;
  } else {
    mirrorDifferentCount++;
  }
}
assert.equal(mirrorPureCount + mirrorDifferentCount + selfMirrorCount, 440);
const symmetryStats = {
  mirrorPure: mirrorPureCount,
  mirrorDifferent: mirrorDifferentCount,
  selfMirror: selfMirrorCount,
};
// Prefer the existing simple base family first, then larger families.
const familyMap = new Map<string, Entry[]>();
for (const e of chosen) {
  familyMap.set(e.familyId, [...(familyMap.get(e.familyId) || []), e]);
}
const families = [...familyMap].map(([id, cases]) => ({
  id,
  name: `[${id.replace(" | ", ", ")}]`,
  cases: cases.sort(
    (a, b) => a.setup.length - b.setup.length || a.id.localeCompare(b.id),
  ),
}));
families.sort(
  (a, b) =>
    Number(b.id === "M' | U2") - Number(a.id === "M' | U2") ||
    b.cases.length - a.cases.length ||
    a.id.localeCompare(b.id),
);
const valid = FACELETS.filter(
  (f) => f.id.length === 2 && !["UF", "FU"].includes(f.id),
).map((f) => f.id);
for (const a of valid) {
  for (const b of valid) {
    if ([...a].sort().join("") !== [...b].sort().join("")) {
      assert.ok(chosen.some((e) => e.id === `UF-${a}-${b}`));
    }
  }
}
const result = {
  version: 1,
  caseCount: 440,
  pairCount: 220,
  familyCount: families.length,
  sourceCount: rows.size,
  symmetryStats,
  families,
};
const out = new URL("src/features/uf-trainer/catalog.json", root);
fs.writeFileSync(out, `${JSON.stringify(result, null, 2)}\n`);
const symmetryLine = `Symmetry: ${symmetryStats.mirrorPure} cases are a pure LR mirror of their partner's assigned alg, ${symmetryStats.mirrorDifferent} differ, ${symmetryStats.selfMirror} are self-mirrored (both targets on the M plane).`;
// CATALOG.md's family table is hand-curated, but its symmetry-stats line is
// derived here so the two files can never drift apart.
const catalogDoc = new URL("docs/uf-trainer/CATALOG.md", root);
const docText = fs.readFileSync(catalogDoc, "utf8");
const symmetryLinePattern = /^Symmetry: .*$/mu;
const updatedDoc = symmetryLinePattern.test(docText)
  ? docText.replace(symmetryLinePattern, symmetryLine)
  : docText.replace(
      /^(Family numbers match the app atlas\. Opposite directions share a family\.)$/mu,
      `$1\n\n${symmetryLine}`,
    );
fs.writeFileSync(catalogDoc, updatedDoc);
console.log(
  `Generated ${families.length} verified core families covering all 440 directed UF cycles / 220 inverse pairs from ${rows.size} source selections.`,
);
console.log(symmetryLine);
console.log(
  families
    .slice(0, 10)
    .map((f) => `${f.name}: ${f.cases.length}`)
    .join("\n"),
);
