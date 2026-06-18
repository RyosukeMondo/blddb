#!/bin/bash
# Regenerate the edge memory sheets from public/data/edgeNightmare.json.
# Usage: bash scripts/edge-memory/run.sh
# Requires Node >= 22 (uses --experimental-strip-types to run the .mts files directly).
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(cd "$HERE/../.." && pwd)"
cd "$ROOT"

TOTAL=1760          # number of edge cases in edgeNightmare.json
NS=6                # parallel workers (keep <= physical cores to avoid thrashing)
LIMIT=40            # search only the N shortest candidates per case (speed; 0 = all 100)
CHUNK=$(( (TOTAL + NS - 1) / NS ))

rm -f "$HERE"/picks_r*.json
for i in $(seq 0 $((NS-1))); do
  S=$(( i * CHUNK )); E=$(( S + CHUNK )); [ $E -gt $TOTAL ] && E=$TOTAL
  node --experimental-strip-types "$HERE/pick.mts" "$S" "$E" "$HERE/picks_r${i}.json" "$LIMIT" &
done
wait
node --experimental-strip-types "$HERE/analyze.mts"
rm -f "$HERE"/picks_r*.json
echo "Sheets written to docs/edge-memory/"
