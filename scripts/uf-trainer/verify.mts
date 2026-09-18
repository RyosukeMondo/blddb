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
} from "../../src/features/uf-trainer/engine.ts";
import { Vector3 } from "three";
import tracer from "../../src/utils/tracer.ts";
const home = solved();
assert.equal(new Set(home).size, 54);
const allMoves = [
  "R",
  "L",
  "U",
  "D",
  "F",
  "B",
  "M",
  "E",
  "S",
  "r",
  "l",
  "u",
  "d",
  "f",
  "b",
  "x",
  "y",
  "z",
].flatMap((m) => [m, `${m}'`, `${m}2`]);
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
