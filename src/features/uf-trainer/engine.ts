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
