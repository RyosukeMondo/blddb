import commutator from "../../src/utils/commutator.ts";
import fs from "fs";
const ROOT = new URL("../../", import.meta.url).pathname;
const nm = JSON.parse(
  fs.readFileSync(`${ROOT}/public/data/edgeNightmare.json`, "utf8"),
);

const start = Number(process.argv[2]);
const end = Number(process.argv[3]);
const outFile = process.argv[4];
const LIMIT = Number(process.argv[5] || "20"); // search only the N shortest candidates

function parseComm(comm: string) {
  const br = comm.lastIndexOf("[");
  const colon = comm.lastIndexOf(":");
  const setup = colon >= 0 && colon < br ? comm.slice(0, colon).trim() : "";
  const inner = comm.slice(
    comm.indexOf("[", br >= 0 ? br : 0) + 1,
    comm.lastIndexOf("]"),
  );
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
  let A = inner,
    B = "";
  if (ci >= 0) {
    A = inner.slice(0, ci).trim();
    B = inner.slice(ci + 1).trim();
  }
  return { setup, A, B };
}
const moveCount = (s: string) => s.split(/\s+/u).filter(Boolean).length;

function pickBest(key: string) {
  let cands = (nm[key] as string[]).slice();
  cands.sort((a, b) => moveCount(a) - moveCount(b));
  if (LIMIT > 0) {
    cands = cands.slice(0, LIMIT);
  }
  const rows = cands
    .map((alg) => {
      let comm = "";
      try {
        const r = commutator.search({ algorithm: alg });
        comm = r && r[0] ? r[0] : "";
      } catch {
        comm = "";
      }
      return { alg, comm, mlen: moveCount(alg) };
    })
    .filter((r) => /\[.*,.*\]/u.test(r.comm));
  if (!rows.length) {
    return null;
  }
  const enriched = rows.map((r) => {
    const { setup, A, B } = parseComm(r.comm);
    const setupMoves = setup ? moveCount(setup) : 0;
    const pure = setupMoves === 0;
    // compound = sum-of-commutators or nested comm — far less memorable than a single clean comm
    const compound = r.comm.includes("+") || /\[.+\[/u.test(r.comm);
    const core = `[${[A, B].sort().join(",")}]`;
    // a single comm is worth up to +3 moves vs a compound
    const score = r.mlen + (compound ? 3 : 0);
    return { ...r, setup, A, B, setupMoves, pure, core, compound, score };
  });
  enriched.sort(
    (a, b) =>
      a.score - b.score ||
      a.mlen - b.mlen ||
      a.setupMoves - b.setupMoves ||
      Number(b.pure) - Number(a.pure) ||
      a.comm.length - b.comm.length,
  );
  const e = enriched[0];
  return {
    key,
    comm: e.comm,
    alg: e.alg,
    mlen: e.mlen,
    setup: e.setup,
    A: e.A,
    B: e.B,
    setupMoves: e.setupMoves,
    pure: e.pure,
    core: e.core,
    compound: e.compound,
  };
}

const allKeys = Object.keys(nm);
const myKeys = allKeys.slice(start, end);
const picks: Record<string, NonNullable<ReturnType<typeof pickBest>>> = {};
let done = 0;
for (const k of myKeys) {
  const p = pickBest(k);
  if (p) {
    picks[k] = p;
  }
  done++;
  if (done % 100 === 0) {
    fs.writeFileSync(outFile, JSON.stringify(picks));
    process.stderr.write(`[${start}-${end}] ${done}/${myKeys.length}\n`);
  }
}
fs.writeFileSync(outFile, JSON.stringify(picks));
process.stderr.write(`[${start}-${end}] DONE ${Object.keys(picks).length}\n`);
