# Edge memory sheets

Personal study material: from `public/data/edgeNightmare.json` (1,760 edge cases ×
100 computer-generated algs each), pick the **single most memorable commutator**
per case and group the results to minimise memorisation load.

Output lives in [`docs/edge-memory/`](../../docs/edge-memory/) — start at
[`INDEX.md`](../../docs/edge-memory/INDEX.md).

## What "most memorable" means here

For each case, every candidate alg is decomposed with the repo's own
`src/utils/commutator.ts` engine, then ranked by:

1. **single clean commutator** preferred over a sum-of-commutators (the latter
   is penalised by +3 effective moves);
2. fewest moves;
3. fewest setup moves;
4. pure commutator (no setup) preferred;
5. shorter notation.

Fingertricks/execution speed are intentionally ignored — this optimises for
recall, not TPS.

## Layout of each sheet

`setup : [interchange , insert]` → execute setup → interchange → insert →
interchange' → insert' → setup'. The inverse case (`XYZ` ⇄ `XZY`) is the same
commutator with the two pieces swapped, so you learn one and derive the other.

Each per-buffer sheet has: collapse stats, a mermaid family map, family tables
(shared core = same shape), singletons, an inverse-pair index, and per-case
cards with an ASCII 3-cycle diagram (decoded under the **Chichu** lettering
scheme). [`PERIODIC_TABLE.md`](../../docs/edge-memory/PERIODIC_TABLE.md) lists the
whole interchange/insert vocabulary.

## Regenerate

```bash
bash scripts/edge-memory/run.sh   # needs Node >= 22
```

- `pick.mts <start> <end> <outFile> <limit>` — decompose+rank a key range.
- `analyze.mts` — merge picks, group, and render all markdown.

Tune `NS` / `LIMIT` in `run.sh`, or the `+3` compound penalty / scoring in
`pick.mts`.
