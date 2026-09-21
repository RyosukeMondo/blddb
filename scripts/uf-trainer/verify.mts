import assert from "node:assert/strict";
import fs from "node:fs";
import {
  FACELETS,
  solved,
  execute,
  inverse,
  BASE,
  SETUPS,
  lesson,
  destination,
  apply,
  turnSpec,
  simplifyMoves,
  MOVE_TOKENS,
  mirrorMove,
  mirrorMoves,
  mirrorCycle,
  mirrorFacelet,
  invertCycle,
  computeSymmetry,
  computeSymmetryGroup,
  computeAlgVariants,
  TARGET_FACELET_IDS,
  isSamePiece,
  validateTargetPair,
  caseIdForTargets,
  parseTargetPairInput,
  type CaseCore,
  type SymmetryInfo,
} from "../../src/features/uf-trainer/engine.ts";
import { Vector3 } from "three";
import tracer from "../../src/utils/tracer.ts";
const home = solved();
assert.equal(new Set(home).size, 54);
const allMoves = MOVE_TOKENS;
const faceOrder = ["U", "L", "F", "R", "B", "D"];
for (const m of allMoves) {
  assert.deepEqual(execute([m, ...inverse([m])]), home);
  assert.deepEqual(execute([m, m, m, m]), home);
  // Independent implementation: compare every facelet's Chichu marker to existing tracer.
  const initial = tracer.sequenceToState("").slice(1);
  const result = execute([m]);
  const actual = result.map((id) => initial[home.indexOf(id)]).join("");
  assert.equal(actual, tracer.sequenceToState(m).slice(1), m);
}
// Independent sanity table for mirrorMove, brute-forced at engine.ts module
// init: M and x are LR-mirror fixed points, "invert then swap L/R" is wrong.
const expectedMirrorMoves: Record<string, string> = {
  R: "L'",
  "R'": "L",
  R2: "L2",
  L: "R'",
  "L'": "R",
  L2: "R2",
  U: "U'",
  "U'": "U",
  U2: "U2",
  D: "D'",
  "D'": "D",
  D2: "D2",
  F: "F'",
  "F'": "F",
  F2: "F2",
  B: "B'",
  "B'": "B",
  B2: "B2",
  M: "M",
  "M'": "M'",
  M2: "M2",
  E: "E'",
  "E'": "E",
  E2: "E2",
  S: "S'",
  "S'": "S",
  S2: "S2",
  x: "x",
  "x'": "x'",
  x2: "x2",
  y: "y'",
  "y'": "y",
  y2: "y2",
  z: "z'",
  "z'": "z",
  z2: "z2",
  r: "l'",
  l: "r'",
  u: "u'",
  f: "f'",
  b: "b'",
  d: "d'",
};
for (const [token, mirrored] of Object.entries(expectedMirrorMoves)) {
  assert.equal(mirrorMove(token), mirrored, `mirrorMove(${token})`);
}
assert.equal(new Set(allMoves.map(mirrorMove)).size, allMoves.length);
assert.deepEqual(mirrorCycle(["UF", "LU", "RU"]), ["UF", "RU", "LU"]);
assert.deepEqual(invertCycle(["UF", "LU", "RU"]), ["UF", "RU", "LU"]);
assert.equal(mirrorFacelet("UF"), "UF");
assert.equal(mirrorFacelet("LU"), "RU");
console.log(
  `Verified the LR-mirror sanity table for all ${Object.keys(expectedMirrorMoves).length} listed tokens, mirrorMove bijectivity over all ${allMoves.length} tokens, and mirrorCycle/invertCycle on a sample cycle.`,
);
assert.deepEqual(
  FACELETS.filter((_, i) => i % 9 === 4).map((f) => f.face),
  faceOrder,
);
assert.throws(() => apply(home, "Rw"));
assert.throws(() => apply(home, "banana"));
assert.deepEqual(lesson([]).cycle, ["UF", "DF", "UB"]);
let verified = 0;
for (const setup of SETUPS) {
  for (const reverse of [false, true]) {
    const l = lesson(setup, reverse),
      end = execute(l.moves);
    assert.equal(destination(end, l.cycle[2]), "UF");
    assert.equal(new Set(l.cycle).size, 3);
    const changed = FACELETS.filter((f, i) => end[i] !== f.id);
    assert.equal(changed.length, 6);
    assert.ok(changed.every((f) => f.id.length === 2));
    assert.equal(
      new Set(changed.map((f) => f.id.split("").sort().join(""))).size,
      3,
    );
    assert.deepEqual(execute([...l.moves, ...inverse(l.moves)]), home);
    assert.deepEqual(l.aligned, lesson([], reverse).cycle);
    const initial = tracer.sequenceToState("").slice(1);
    assert.equal(
      end.map((id) => initial[home.indexOf(id)]).join(""),
      tracer.sequenceToState(l.moves.join(" ")).slice(1),
    );
    verified++;
  }
}
assert.deepEqual(execute([...BASE, ...BASE, ...BASE]), home);
console.log(
  `Verified ${verified} directed lessons, all 54 supported moves against independent tracer, full 54-facelet restoration, setup alignment and invalid-token rejection.`,
);

// The renderer's Three.js axis-angle transform must land at the engine's exact slots.
for (const move of allMoves) {
  const spec = turnSpec(move),
    end = execute([move]);
  const axis = new Vector3().setComponent(spec.axis, 1);
  for (const f of FACELETS) {
    const position = new Vector3(...f.position),
      normal = new Vector3(...f.normal);
    if (spec.layers.includes(f.position[spec.axis])) {
      const angle = (spec.sign * spec.amount * Math.PI) / 2;
      position.applyAxisAngle(axis, angle).round();
      normal.applyAxisAngle(axis, angle).round();
    }
    const slot = FACELETS[end.indexOf(f.id)];
    assert.ok(
      position.distanceTo(new Vector3(...slot.position)) < 1e-8,
      `${move}: ${f.id} position`,
    );
    assert.ok(
      normal.distanceTo(new Vector3(...slot.normal)) < 1e-8,
      `${move}: ${f.id} normal`,
    );
  }
}
console.log(
  "Verified Three.js layer rotations against all 54 facelets for all 54 move tokens.",
);

const catalog = JSON.parse(
  fs.readFileSync(
    new URL("../../src/features/uf-trainer/catalog.json", import.meta.url),
    "utf8",
  ),
);
const ids = new Set<string>();
for (const family of catalog.families) {
  for (const entry of family.cases) {
    const core = [
      ...entry.a,
      ...entry.b,
      ...inverse(entry.a),
      ...inverse(entry.b),
    ];
    const moves = [...entry.setup, ...core, ...inverse(entry.setup)];
    assert.deepEqual(
      execute(simplifyMoves(moves).moves),
      execute(moves),
      `${entry.id}: simplification`,
    );
    const final = execute(moves),
      coreState = execute(core),
      setupState = execute(entry.setup);
    assert.equal(ids.has(entry.id), false);
    ids.add(entry.id);
    for (let i = 0; i < 3; i++) {
      assert.equal(
        destination(final, entry.cycle[i]),
        entry.cycle[(i + 1) % 3],
      );
      assert.equal(
        destination(coreState, destination(setupState, entry.cycle[i])),
        destination(setupState, entry.cycle[(i + 1) % 3]),
      );
    }
    const changed = FACELETS.filter((f, i) => f.id !== final[i]);
    assert.equal(changed.length, 6);
    assert.ok(changed.every((f) => f.id.length === 2));
    assert.equal(
      new Set(changed.map((f) => [...f.id].sort().join(""))).size,
      3,
    );
    assert.deepEqual(execute([...moves, ...inverse(moves)]), home);
    const other = family.cases.find(
      (c) => c.id === `UF-${entry.cycle[2]}-${entry.cycle[1]}`,
    );
    assert.ok(other);
    assert.deepEqual(other.setup, entry.setup);
    assert.deepEqual(other.a, entry.b);
    assert.deepEqual(other.b, entry.a);
    // LR-mirroring the algorithm must land exactly on the LR-mirrored cycle.
    const mirroredMoves = mirrorMoves(moves),
      mirroredCycle = mirrorCycle(entry.cycle),
      mirroredFinal = execute(mirroredMoves);
    for (let i = 0; i < 3; i++) {
      assert.equal(
        destination(mirroredFinal, mirroredCycle[i]),
        mirroredCycle[(i + 1) % 3],
        `${entry.id}: mirrored cycle`,
      );
    }
    const mirroredChanged = FACELETS.filter(
      (f, i) => f.id !== mirroredFinal[i],
    );
    assert.equal(
      mirroredChanged.length,
      6,
      `${entry.id}: mirrored changed count`,
    );
    assert.deepEqual(
      execute([...mirroredMoves, ...inverse(mirroredMoves)]),
      home,
      `${entry.id}: mirrored restoration`,
    );
  }
}
const targets = FACELETS.filter(
  (f) => f.id.length === 2 && !["UF", "FU"].includes(f.id),
);
for (const a of targets) {
  for (const b of targets) {
    if ([...a.id].sort().join("") !== [...b.id].sort().join("")) {
      assert.ok(ids.has(`UF-${a.id}-${b.id}`));
    }
  }
}
assert.equal(ids.size, 440);
assert.equal(catalog.familyCount, catalog.families.length);
console.log(
  `Verified all ${ids.size} directed cases in ${catalog.familyCount} families, setup-to-core alignment and inverse pairing. No missing or duplicate UF cases.`,
);

// Symmetry: stored ids/purity must match recomputation, every group partner
// must exist, and every algVariants row must independently solve the case.
type CatalogEntry = CaseCore & { symmetry: SymmetryInfo };
const byId = new Map<string, CatalogEntry>();
for (const family of catalog.families) {
  for (const entry of family.cases) {
    byId.set(entry.id, entry);
  }
}
assert.equal(byId.size, 440);
const findCase = (id: string) => byId.get(id);
let recomputedMirrorPure = 0,
  recomputedMirrorDifferent = 0,
  recomputedSelfMirror = 0;
for (const entry of byId.values()) {
  const recomputed = computeSymmetry(entry, findCase);
  assert.deepEqual(
    recomputed,
    entry.symmetry,
    `${entry.id}: symmetry mismatch`,
  );
  assert.equal(entry.symmetry.inversePure, true, `${entry.id}: inversePure`);
  if (entry.symmetry.mirrorId === entry.id) {
    recomputedSelfMirror++;
  } else if (entry.symmetry.mirrorPure) {
    recomputedMirrorPure++;
  } else {
    recomputedMirrorDifferent++;
  }
  const group = computeSymmetryGroup(entry);
  for (const member of group) {
    assert.ok(
      byId.has(member.caseId),
      `${entry.id}: missing partner ${member.caseId}`,
    );
  }
  assert.ok(
    group.some((member) => member.caseId === entry.id),
    `${entry.id}: symmetry group missing self`,
  );
  const variants = computeAlgVariants(entry, findCase);
  assert.ok(
    variants.some((variant) => variant.pure),
    `${entry.id}: no variant marked pure`,
  );
  for (const variant of variants) {
    const variantMoves = [
      ...variant.setup,
      ...variant.a,
      ...variant.b,
      ...inverse(variant.a),
      ...inverse(variant.b),
      ...inverse(variant.setup),
    ];
    const variantFinal = execute(variantMoves);
    for (let i = 0; i < 3; i++) {
      assert.equal(
        destination(variantFinal, entry.cycle[i]),
        entry.cycle[(i + 1) % 3],
        `${entry.id}: variant ${variant.key} cycle`,
      );
    }
    const variantChanged = FACELETS.filter((f, i) => f.id !== variantFinal[i]);
    assert.equal(
      variantChanged.length,
      6,
      `${entry.id}: variant ${variant.key} changed count`,
    );
    assert.deepEqual(
      execute([...variantMoves, ...inverse(variantMoves)]),
      home,
      `${entry.id}: variant ${variant.key} restoration`,
    );
  }
}
assert.deepEqual(catalog.symmetryStats, {
  mirrorPure: recomputedMirrorPure,
  mirrorDifferent: recomputedMirrorDifferent,
  selfMirror: recomputedSelfMirror,
});
console.log(
  `Symmetry: ${recomputedMirrorPure} cases are a pure LR mirror of their partner's assigned alg, ${recomputedMirrorDifferent} differ, ${recomputedSelfMirror} are self-mirrored (both targets on the M plane).`,
);

// Reverse lookup ("pick stickers"): every ordered pair of the 22 targets on
// distinct pieces must resolve to an existing case whose cycle is exactly
// [UF, t1, t2]; same-piece pairs and the buffer must be rejected; the typed
// parser must accept every documented format and reject garbage.
assert.equal(TARGET_FACELET_IDS.length, 22);
const familyIndexById = new Map<string, number>();
const caseIndexById = new Map<string, number>();
catalog.families.forEach((family, familyIndex) => {
  family.cases.forEach((entry, caseIndex) => {
    familyIndexById.set(entry.id, familyIndex);
    caseIndexById.set(entry.id, caseIndex);
  });
});
function lookupCaseByTargets(t1: string, t2: string) {
  if (validateTargetPair(t1, t2)) {
    return null;
  }
  const caseId = caseIdForTargets(t1, t2);
  if (!ids.has(caseId)) {
    return null;
  }
  return {
    caseId,
    familyIndex: familyIndexById.get(caseId),
    caseIndex: caseIndexById.get(caseId),
  };
}
let validOrderedPairs = 0,
  samePiecePairs = 0;
for (const t1 of TARGET_FACELET_IDS) {
  for (const t2 of TARGET_FACELET_IDS) {
    if (t1 === t2) {
      continue;
    }
    if (isSamePiece(t1, t2)) {
      samePiecePairs++;
      assert.equal(
        validateTargetPair(t1, t2),
        "same-piece",
        `${t1}-${t2}: same-piece pair must be flagged`,
      );
      assert.equal(
        lookupCaseByTargets(t1, t2),
        null,
        `${t1}-${t2}: same-piece pair must be rejected`,
      );
      continue;
    }
    assert.equal(
      validateTargetPair(t1, t2),
      null,
      `${t1}-${t2}: expected a valid distinct-piece pair`,
    );
    const result = lookupCaseByTargets(t1, t2);
    assert.ok(result, `${t1}-${t2}: expected an existing case`);
    const entry = byId.get(result.caseId);
    assert.ok(entry, `${t1}-${t2}: case ${result.caseId} must exist`);
    assert.deepEqual(
      entry.cycle,
      ["UF", t1, t2],
      `${t1}-${t2}: cycle must be exactly [UF, ${t1}, ${t2}]`,
    );
    assert.equal(
      catalog.families[result.familyIndex].cases[result.caseIndex].id,
      result.caseId,
      `${t1}-${t2}: familyIndex/caseIndex must resolve back to ${result.caseId}`,
    );
    validOrderedPairs++;
  }
}
assert.equal(validOrderedPairs, 440);
assert.equal(samePiecePairs, 22);
// Buffer stickers (UF/FU) are never valid targets, whichever side they're on.
assert.equal(validateTargetPair("UF", "RU"), "buffer");
assert.equal(validateTargetPair("RU", "FU"), "buffer");
assert.equal(validateTargetPair("UF", "FU"), "buffer");
assert.equal(lookupCaseByTargets("UF", "RU"), null);
// Unknown/garbage facelet ids (corners, centers, nonsense) are rejected too.
assert.equal(validateTargetPair("ULF", "RU"), "invalid");
assert.equal(validateTargetPair("U", "RU"), "invalid");
assert.equal(validateTargetPair("XY", "RU"), "invalid");
const acceptedFormats: [string, { t1: string; t2: string }][] = [
  ["RU FR", { t1: "RU", t2: "FR" }],
  ["ru-fr", { t1: "RU", t2: "FR" }],
  ["RU→FR", { t1: "RU", t2: "FR" }],
  ["RU->FR", { t1: "RU", t2: "FR" }],
  ["  ru   fr  ", { t1: "RU", t2: "FR" }],
];
for (const [input, expected] of acceptedFormats) {
  assert.deepEqual(
    parseTargetPairInput(input),
    expected,
    `parseTargetPairInput(${JSON.stringify(input)})`,
  );
}
const rejectedFormats = ["", "RU", "RU FR EX", "R2 FR", "12 34", "RUFR"];
for (const input of rejectedFormats) {
  assert.equal(
    parseTargetPairInput(input),
    null,
    `parseTargetPairInput(${JSON.stringify(input)}) should reject garbage`,
  );
}
console.log(
  `Reverse lookup: all ${validOrderedPairs} ordered target pairs on distinct pieces resolve to the exact [UF, t1, t2] case with matching familyIndex/caseIndex, all ${samePiecePairs} same-piece pairs and every buffer pairing are rejected, and the typed parser accepts ${acceptedFormats.length} documented formats and rejects ${rejectedFormats.length} garbage inputs.`,
);

assert.deepEqual(simplifyMoves(["U2", "U'"]).moves, ["U"]);
assert.deepEqual(simplifyMoves(["R", "U", "U'", "R'"]).moves, []);
assert.deepEqual(simplifyMoves(["R", "r'"]).moves, ["R", "r'"]);
assert.deepEqual(
  simplifyMoves(["M", "U", "M'", "U2", "M", "U2", "U'", "M'"]).moves,
  ["M", "U", "M'", "U2", "M", "U", "M'"],
);
assert.deepEqual(simplifyMoves(["U2", "U2"]).moves, []);
assert.deepEqual(simplifyMoves(["U'", "U'"]).moves, ["U2"]);
assert.throws(() => simplifyMoves(["nope"]));
console.log(
  "Verified adjacent-turn reduction across all 440 cases, phase-boundary cancellation, cascading cancellation and distinct wide turns.",
);
