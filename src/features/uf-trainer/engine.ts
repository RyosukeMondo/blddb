// Pure, uniquely labelled facelets. Geometry and lesson arrows share this state.
export type Vec = [number, number, number];
export type Facelet = {
  id: string;
  face: string;
  position: Vec;
  normal: Vec;
  row: number;
  col: number;
};
const normals: Record<string, Vec> = {
  U: [0, 1, 0],
  L: [-1, 0, 0],
  F: [0, 0, 1],
  R: [1, 0, 0],
  B: [0, 0, -1],
  D: [0, -1, 0],
};
export const FACELETS: Facelet[] = Object.keys(normals).flatMap((face) =>
  Array.from({ length: 9 }, (_, i) => {
    const row = Math.floor(i / 3),
      col = i % 3,
      a = col - 1,
      b = 1 - row;
    const positions: Record<string, Vec> = {
      U: [a, 1, -b],
      D: [a, -1, b],
      F: [a, b, 1],
      B: [-a, b, -1],
      R: [1, b, -a],
      L: [-1, b, a],
    };
    const position = positions[face];
    const adjacent = Object.entries(normals)
      .filter(
        ([f, n]) =>
          f !== face && position.reduce((sum, v, j) => sum + v * n[j], 0) === 1,
      )
      .map(([f]) => f)
      .join("");
    return {
      id: face + adjacent,
      face,
      position,
      normal: normals[face],
      row,
      col,
    };
  }),
);
const key = (p: Vec, n: Vec) => `${p.join(",")}/${n.join(",")}`;
const lookup = new Map(FACELETS.map((f, i) => [key(f.position, f.normal), i]));
const turns: Record<string, [number, number, number]> = {
  R: [0, 1, -1],
  L: [0, -1, 1],
  U: [1, 1, -1],
  D: [1, -1, 1],
  F: [2, 1, -1],
  B: [2, -1, 1],
  M: [0, 0, 1],
  E: [1, 0, 1],
  S: [2, 0, -1],
};
export const solved = () => FACELETS.map((f) => f.id);
export function inverse(moves: string[]): string[] {
  return [...moves].reverse().map((m) => {
    if (m.endsWith("2")) {
      return m;
    }
    if (m.endsWith("'")) {
      return m.slice(0, -1);
    }
    return `${m}'`;
  });
}
function rotate(v: Vec, axis: number, sign: number): Vec {
  const out: Vec = [...v];
  const a = (axis + 1) % 3,
    b = (axis + 2) % 3;
  out[a] = -sign * v[b];
  out[b] = sign * v[a];
  return out;
}
const MOVE_PATTERN = /^[RLUDFBMESrludfbxyz](?:2|')?$/u;
export function turnSpec(move: string) {
  if (!MOVE_PATTERN.test(move)) {
    throw new Error(`Unsupported move: ${move}`);
  }
  const token = move[0];
  const wide = "rludfb".includes(token);
  const rotation = "xyz".includes(token);
  const rotationFace: Record<string, string> = { x: "R", y: "U", z: "F" };
  const [axis, layer, direction] =
    turns[rotation ? rotationFace[token] : token.toUpperCase()];
  let layers = [layer];
  if (wide) {
    layers = [0, layer];
  }
  if (rotation) {
    layers = [-1, 0, 1];
  }
  const amount = move.endsWith("2") ? 2 : 1,
    sign = move.endsWith("'") ? -direction : direction;
  return { axis, layer, layers, sign, amount };
}
export function apply(state: string[], move: string): string[] {
  const { axis, layers, sign, amount } = turnSpec(move);
  let next = [...state];
  for (let t = 0; t < amount; t++) {
    const previous = next;
    next = [...previous];
    FACELETS.forEach((f, i) => {
      if (layers.includes(f.position[axis])) {
        const targetIndex = lookup.get(
          key(rotate(f.position, axis, sign), rotate(f.normal, axis, sign)),
        );
        if (targetIndex === undefined) {
          throw new Error("Invalid facelet transform");
        }
        next[targetIndex] = previous[i];
      }
    });
  }
  return next;
}
export function execute(moves: string[], initial = solved()): string[] {
  return moves.reduce((state, move) => apply(state, move), initial);
}
export function destination(state: string[], id: string): string {
  return FACELETS[state.indexOf(id)].id;
}
export const BASE = ["M'", "U2", "M", "U2"];
export type Lesson = {
  id: string;
  setup: string[];
  moves: string[];
  cycle: string[];
  aligned: string[];
};
export function lesson(setup: string[], reverse = false): Lesson {
  const core = reverse ? inverse(BASE) : BASE;
  const moves = [...setup, ...core, ...inverse(setup)],
    final = execute(moves);
  const second = destination(final, "UF"),
    third = destination(final, second);
  const cycle = ["UF", second, third];
  return {
    id: setup.join(" ") || "base",
    setup,
    moves,
    cycle,
    aligned: cycle.map((id) => destination(execute(setup), id)),
  };
}
export const SETUPS: string[][] = [
  [],
  ["D"],
  ["D'"],
  ["D2"],
  ["B"],
  ["B'"],
  ["B2"],
];
export const LESSONS = SETUPS.map((s) => lesson(s));

// Combine adjacent turns of the same layer, including across commutator phases.
// Different layers are never reordered (R and r remain distinct).
export function simplifyMoves(moves: string[]) {
  const stack: { move: string; source: number[] }[] = [];
  const reductions: string[] = [];
  const amount = (move: string) => {
    if (move.endsWith("2")) {
      return 2;
    }
    if (move.endsWith("'")) {
      return 3;
    }
    return 1;
  };
  moves.forEach((move, index) => {
    turnSpec(move);
    const previous = stack[stack.length - 1];
    if (previous && previous.move[0] === move[0]) {
      stack.pop();
      const power = (amount(previous.move) + amount(move)) % 4;
      let combined = move[0];
      if (power === 2) {
        combined += "2";
      }
      if (power === 3) {
        combined += "'";
      }
      reductions.push(`${previous.move} + ${move} → ${power ? combined : "∅"}`);
      if (power) {
        stack.push({ move: combined, source: [...previous.source, index] });
      }
    } else {
      stack.push({ move, source: [index] });
    }
  });
  return { moves: stack.map((s) => s.move), reductions };
}

// --- LR mirror symmetry (reflection across the M-slice plane). ---
// Geometric, not string-based: negate the x coordinate (the L/R axis) of a
// facelet's position and normal and look up whichever facelet actually sits
// there. A character swap on the id alone is wrong for corners, whose two
// adjacent-face letters are ordered U,L,F,R,B,D rather than by geometry.
function reflectVec(v: Vec): Vec {
  return [-v[0], v[1], v[2]];
}
export function mirrorFacelet(id: string): string {
  const facelet = FACELETS.find((f) => f.id === id);
  if (!facelet) {
    throw new Error(`Unknown facelet: ${id}`);
  }
  const mirroredIndex = lookup.get(
    key(reflectVec(facelet.position), reflectVec(facelet.normal)),
  );
  if (mirroredIndex === undefined) {
    throw new Error(`No LR-mirrored facelet for ${id}`);
  }
  return FACELETS[mirroredIndex].id;
}
export function mirrorCycle(cycle: string[]): string[] {
  return cycle.map(mirrorFacelet);
}
export function invertCycle(cycle: string[]): string[] {
  return [cycle[0], ...cycle.slice(1).reverse()];
}
export function fullSequence(
  setup: string[],
  a: string[],
  b: string[],
): string[] {
  return [
    ...setup,
    ...a,
    ...b,
    ...inverse(a),
    ...inverse(b),
    ...inverse(setup),
  ];
}
export function simplifiedFullSequence(
  setup: string[],
  a: string[],
  b: string[],
): string[] {
  return simplifyMoves(fullSequence(setup, a, b)).moves;
}
const BASE_MOVE_TOKENS = [
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
];
export const MOVE_TOKENS = BASE_MOVE_TOKENS.flatMap((m) => [
  m,
  `${m}'`,
  `${m}2`,
]);
const homeIndex = new Map(FACELETS.map((f, i) => [f.id, i]));
// The mirror of a whole cube state: every slot takes the mirror-relabelled
// content of its own mirror-image slot.
function reflectState(state: string[]): string[] {
  return FACELETS.map((f) => {
    const mirroredHomeId = mirrorFacelet(f.id);
    const sourceIndex = homeIndex.get(mirroredHomeId);
    if (sourceIndex === undefined) {
      throw new Error(`No facelet for mirrored id ${mirroredHomeId}`);
    }
    return mirrorFacelet(state[sourceIndex]);
  });
}
// For each of the 54 supported tokens t, mirrorMove(t) is the unique token m
// with perm(m) = sigma ∘ perm(t) ∘ sigma, found by brute force rather than by
// a hand-typed move table (M and x are fixed points; folklore "invert and
// swap L/R" is wrong for them).
function buildMirrorMoveTable(): Record<string, string> {
  const byResult = new Map<string, string[]>();
  MOVE_TOKENS.forEach((m) => {
    const resultKey = execute([m]).join(",");
    byResult.set(resultKey, [...(byResult.get(resultKey) || []), m]);
  });
  const table: Record<string, string> = {};
  MOVE_TOKENS.forEach((token) => {
    const target = reflectState(execute([token])).join(",");
    const matches = byResult.get(target) || [];
    if (matches.length !== 1) {
      throw new Error(
        `mirrorMove: expected exactly one LR-mirror match for ${token}, found ${matches.length}`,
      );
    }
    table[token] = matches[0];
  });
  return table;
}
const MIRROR_MOVE_TABLE = buildMirrorMoveTable();
export function mirrorMove(token: string): string {
  const mirrored = MIRROR_MOVE_TABLE[token];
  if (!mirrored) {
    throw new Error(`Unsupported move: ${token}`);
  }
  return mirrored;
}
export function mirrorMoves(moves: string[]): string[] {
  return moves.map(mirrorMove);
}

// --- Symmetry group / algorithm-variant computation. Pure and framework-free
// so it is shared by the catalog generator, the catalog module and the
// verification script, all of which need to run outside a bundler. ---
export type SymmetryInfo = {
  inverseId: string;
  mirrorId: string;
  mirrorInverseId: string;
  inversePure: boolean;
  mirrorPure: boolean;
  mirrorInversePure: boolean;
};
export type CaseCore = {
  id: string;
  setup: string[];
  a: string[];
  b: string[];
  cycle: string[];
};
function sameSequence(x: string[], y: string[]): boolean {
  return x.length === y.length && x.every((m, i) => m === y[i]);
}
export function computeSymmetry(
  entry: CaseCore,
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  findCase: (id: string) => CaseCore | undefined,
): SymmetryInfo {
  const inverseId = invertCycle(entry.cycle).join("-");
  const mirroredCycle = mirrorCycle(entry.cycle);
  const mirrorId = mirroredCycle.join("-");
  const mirrorInverseId = invertCycle(mirroredCycle).join("-");
  const inversePartner = findCase(inverseId);
  const mirrorPartner = findCase(mirrorId);
  const mirrorInversePartner = findCase(mirrorInverseId);
  if (!inversePartner || !mirrorPartner || !mirrorInversePartner) {
    throw new Error(`Missing symmetry partner for case ${entry.id}`);
  }
  const own = fullSequence(entry.setup, entry.a, entry.b);
  const invertedOwn = simplifyMoves(inverse(own)).moves;
  const mirroredOwn = simplifyMoves(mirrorMoves(own)).moves;
  const mirrorInvertedOwn = simplifyMoves(mirrorMoves(inverse(own))).moves;
  const inversePure = sameSequence(
    simplifiedFullSequence(
      inversePartner.setup,
      inversePartner.a,
      inversePartner.b,
    ),
    invertedOwn,
  );
  const mirrorPure = sameSequence(
    simplifiedFullSequence(
      mirrorPartner.setup,
      mirrorPartner.a,
      mirrorPartner.b,
    ),
    mirroredOwn,
  );
  const mirrorInversePure = sameSequence(
    simplifiedFullSequence(
      mirrorInversePartner.setup,
      mirrorInversePartner.a,
      mirrorInversePartner.b,
    ),
    mirrorInvertedOwn,
  );
  return {
    inverseId,
    mirrorId,
    mirrorInverseId,
    inversePure,
    mirrorPure,
    mirrorInversePure,
  };
}

export type SymmetryRelation = "self" | "inverse" | "mirror" | "mirrorInverse";
export type SymmetryGroupEntry = {
  relation: SymmetryRelation;
  relations: SymmetryRelation[];
  caseId: string;
};
export function computeSymmetryGroup(
  entry: CaseCore & { symmetry: SymmetryInfo },
): SymmetryGroupEntry[] {
  const candidates: { relation: SymmetryRelation; caseId: string }[] = [
    { relation: "self", caseId: entry.id },
    { relation: "inverse", caseId: entry.symmetry.inverseId },
    { relation: "mirror", caseId: entry.symmetry.mirrorId },
    { relation: "mirrorInverse", caseId: entry.symmetry.mirrorInverseId },
  ];
  const relationsById = new Map<string, SymmetryRelation[]>();
  const order: string[] = [];
  candidates.forEach(({ relation, caseId }) => {
    if (!relationsById.has(caseId)) {
      relationsById.set(caseId, []);
      order.push(caseId);
    }
    relationsById.get(caseId)?.push(relation);
  });
  return order.map((caseId) => {
    const relations = relationsById.get(caseId) || [];
    return { relation: relations[0], relations, caseId };
  });
}

export type VariantRelation = "assigned" | SymmetryRelation;
export type VariantProvenance = {
  relation: VariantRelation;
  fromCaseId: string;
};
export type AlgVariantCore = {
  // Content-based: the simplified full move sequence this variant plays,
  // joined by spaces. Stable across catalog regeneration, unlike a list
  // index or a relation label (several cases can share a relation label
  // while playing different sequences).
  key: string;
  setup: string[];
  a: string[];
  b: string[];
  provenance: VariantProvenance[];
  pure: boolean;
};
// The four candidate algorithms that solve `entry`: its own assigned alg, the
// inverse partner's alg with operands swapped, the mirror partner's alg
// mirrored, and the mirror-inverse partner's alg mirrored-then-swapped.
// Candidates whose simplified full sequence coincide are merged into one row;
// a row that merges with "assigned" is how the pure-mirror / pure-inverse
// badges arise.
export function computeAlgVariants(
  entry: CaseCore & { symmetry: SymmetryInfo },
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  findCase: (id: string) => CaseCore | undefined,
): AlgVariantCore[] {
  const inversePartner = findCase(entry.symmetry.inverseId);
  const mirrorPartner = findCase(entry.symmetry.mirrorId);
  const mirrorInversePartner = findCase(entry.symmetry.mirrorInverseId);
  if (!inversePartner || !mirrorPartner || !mirrorInversePartner) {
    throw new Error(`Missing symmetry partner for algVariants(${entry.id})`);
  }
  const candidates: {
    relation: VariantRelation;
    fromCaseId: string;
    setup: string[];
    a: string[];
    b: string[];
  }[] = [
    {
      relation: "assigned",
      fromCaseId: entry.id,
      setup: entry.setup,
      a: entry.a,
      b: entry.b,
    },
    {
      relation: "inverse",
      fromCaseId: inversePartner.id,
      setup: inversePartner.setup,
      a: inversePartner.b,
      b: inversePartner.a,
    },
    {
      relation: "mirror",
      fromCaseId: mirrorPartner.id,
      setup: mirrorMoves(mirrorPartner.setup),
      a: mirrorMoves(mirrorPartner.a),
      b: mirrorMoves(mirrorPartner.b),
    },
    {
      relation: "mirrorInverse",
      fromCaseId: mirrorInversePartner.id,
      setup: mirrorMoves(mirrorInversePartner.setup),
      a: mirrorMoves(mirrorInversePartner.b),
      b: mirrorMoves(mirrorInversePartner.a),
    },
  ];
  const groups = new Map<
    string,
    {
      setup: string[];
      a: string[];
      b: string[];
      provenance: VariantProvenance[];
    }
  >();
  const order: string[] = [];
  candidates.forEach((candidate) => {
    const seqKey = simplifiedFullSequence(
      candidate.setup,
      candidate.a,
      candidate.b,
    ).join(" ");
    if (!groups.has(seqKey)) {
      groups.set(seqKey, {
        setup: candidate.setup,
        a: candidate.a,
        b: candidate.b,
        provenance: [],
      });
      order.push(seqKey);
    }
    groups.get(seqKey)?.provenance.push({
      relation: candidate.relation,
      fromCaseId: candidate.fromCaseId,
    });
  });
  const assignedKey = simplifiedFullSequence(
    entry.setup,
    entry.a,
    entry.b,
  ).join(" ");
  return order.map((seqKey) => {
    const group = groups.get(seqKey);
    if (!group) {
      throw new Error("Unreachable: missing alg-variant group");
    }
    return {
      key: seqKey,
      setup: group.setup,
      a: group.a,
      b: group.b,
      provenance: group.provenance,
      pure: seqKey === assignedKey,
    };
  });
}

// Shared default-variant policy, used by both the explore player and the
// practice quiz so they agree on which algorithm is "current" for a case
// absent a remembered per-case choice.
export function defaultVariantKey(
  variants: AlgVariantCore[],
  preferMirror: boolean,
): string {
  const assigned = variants.find((v) =>
    v.provenance.some((p) => p.relation === "assigned"),
  );
  if (preferMirror) {
    const mirror = variants.find(
      (v) =>
        v !== assigned && v.provenance.some((p) => p.relation === "mirror"),
    );
    if (mirror) {
      return mirror.key;
    }
  }
  return assigned ? assigned.key : variants[0].key;
}

// The single resolution order for "which algorithm is current for this
// case," shared by the explore player and the practice quiz: a remembered
// per-case choice (if it still names one of this case's variants) beats the
// global "prefer LR mirror" preference, which beats the catalog's assigned
// alg. Callers should not re-implement this order themselves.
export function resolveVariantKey(
  variants: AlgVariantCore[],
  savedKey: string | undefined,
  preferMirror: boolean,
): string {
  if (savedKey && variants.some((v) => v.key === savedKey)) {
    return savedKey;
  }
  return defaultVariantKey(variants, preferMirror);
}

// --- Reverse lookup: pick two target stickers, resolve which UF case that
// is. Catalog-independent (no case data), so the same functions serve the
// picker UI, the catalog module's case lookup, and the verification script.
// The 22 target edge stickers: every two-letter facelet id except the
// buffer's own UF/FU pair.
export const TARGET_FACELET_IDS: string[] = FACELETS.filter(
  (f) => f.id.length === 2 && f.id !== "UF" && f.id !== "FU",
).map((f) => f.id);
const targetFaceletSet = new Set(TARGET_FACELET_IDS);
export function isValidTargetFacelet(id: string): boolean {
  return targetFaceletSet.has(id);
}
// Two facelet ids name the same edge piece exactly when one is the other's
// character reversal (RU/UR) -- geometric, not the app's lettering-scheme id
// system, which uses a different identifier per sticker.
export function isSamePiece(a: string, b: string): boolean {
  return a === b || a.split("").reverse().join("") === b;
}
export type TargetPairIssue = "buffer" | "invalid" | "same-piece";
const BUFFER_FACELET_IDS = new Set(["UF", "FU"]);
// null means the pair is a valid, distinct-piece pair of targets.
export function validateTargetPair(
  t1: string,
  t2: string,
): TargetPairIssue | null {
  if (BUFFER_FACELET_IDS.has(t1) || BUFFER_FACELET_IDS.has(t2)) {
    return "buffer";
  }
  if (!isValidTargetFacelet(t1) || !isValidTargetFacelet(t2)) {
    return "invalid";
  }
  if (isSamePiece(t1, t2)) {
    return "same-piece";
  }
  return null;
}
export function caseIdForTargets(t1: string, t2: string): string {
  return `UF-${t1}-${t2}`;
}
// Accepts "RU FR", "ru-fr", "RU→FR" (and "RU->FR"): two letter-pairs
// separated by whitespace, hyphens or an arrow, case-insensitive. Only the
// app's own facelet ids are recognized here -- lettering-scheme letters are
// a different id system and are out of scope.
const FACELET_TOKEN = /^[A-Za-z]{2}$/u;
const TARGET_PAIR_SPLIT = /[\s\-→>]+/u;
export function parseTargetPairInput(
  raw: string,
): { t1: string; t2: string } | null {
  const parts = raw
    .trim()
    .split(TARGET_PAIR_SPLIT)
    .filter((part) => part.length > 0);
  if (parts.length !== 2) {
    return null;
  }
  const [t1, t2] = parts.map((part) => part.toUpperCase());
  if (!FACELET_TOKEN.test(t1) || !FACELET_TOKEN.test(t2)) {
    return null;
  }
  return { t1, t2 };
}
