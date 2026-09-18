# UF Cycle Lab — complete UF catalog

Open `/learn/uf` or use the UF Cycle Lab navigation link.

```bash
npm ci
npm run dev -- --port 4317
npm run generate:uf
npm run test:uf
npm run build
```

## Cube workspace controls

The trainer uses a compact toolbar in place of the site header. **Menu** unfolds navigation to recall practice, atlas and guide. **Cases** and **Details** independently fold either side; on narrow screens they open as drawers. **Top info** hides selectors, cycle and view options; **Bottom info** hides algorithm details and timeline. Playback and restart remain visible. **Focus / Restore** temporarily maximizes the cube and restores prior layout choices without resetting the cube or camera.

**Auto fold** defaults on: sides fold below 1100px and while playing, then return when paused. Manual panel choices override this behavior; toggling Auto fold clears those overrides. Layout choices last for the current visit. Camera framing adapts to portrait viewports.

Verified folding, state preservation, navigation and viewport fit at 1440×900, 1366×768, 390×667 and 320×568.

## Available now

- **440 directed UF cases, 220 inverse pairs, 135 core families.** Coverage includes every ordered pair of target stickers on two distinct non-buffer edges.
- Searchable family selection and a complete 22 × 22 target-pair atlas. Numbers/colors identify each chosen family; invalid same-piece pairs are disabled.
- Every case has a selected setup and ordered commutator, inverse partner, setup alignment explanation and a variable-length A/B/A-inverse/B-inverse timeline.
- Three.js layer animation, drag/pinch orbit controls, back/reset view and the alternative 2D net share the same engine and timeline. Buffer identities are followed even when setups move them.
- Recall practice spans all 440 directed cases or the current family. It shows the core, asks for the setup and offers a geometry hint. Distractors are checked not to produce the target permutation with that core. Results are saved under physical cycle IDs in the browser.

Families here mean equal commutator operands up to reversal in this selected repertoire, not every possible alternative algorithm or every possible symmetry class. Every UF case is covered; alternative repertoires and merging rotated/mirrored constructions can be added later without claiming they are already identical mechanisms.

## Data source and generation

The existing `docs/edge-memory/edge_buffer_*.md` sheets contain 1,760 saved algorithm selections from the earlier project. `scripts/uf-trainer/catalog.mts` parses and independently verifies these decompositions, selects cycles involving UF, then picks one setup/core per inverse pair and derives its inverse. Selection prefers shorter setups then shorter operands. It writes the deterministic `src/features/uf-trainer/catalog.json`, including original sheet, source key, source notation and whether the entry was inverted.

The old raw-key UF sheet's 360 rows are not treated as complete coverage. The catalog is verified against all 22 × 20 valid oriented target pairs. Family counts are recomputed from this complete repertoire.

See [CATALOG.md](CATALOG.md) for every family and its coverage.

## Verification

`npm run test:uf` checks 54 supported move tokens (face, slice, wide and rotation moves) against BLDDB's independent tracer and compares Three.js axis-angle rotations for all 54 facelets. It checks every catalog entry for exact target cycle, unchanged other pieces, setup-to-core alignment, full inverse restoration, paired inverse operands, and complete unique 440-case coverage.

The original 14 seed lessons remain regression checks. The browser audit selected and played all 440 cases, checked all 135 family options and 440 atlas buttons, then verified inverse switching, a multi-move core, search, whole-catalog practice and mobile layout. The production build and targeted ESLint pass. WebGL failure retains a usable 2D fallback; reduced-motion skips interpolation. The 3D texture cache is bounded by sticker identity and highlight role, rather than growing with every selected case.

Implementation: `src/features/uf-trainer/`; route: `src/app/learn/uf/`; data generation and checks: `scripts/uf-trainer/`.

Personal lettering, timed physical execution, scheduled reviews and progress export/import remain future enhancements. This is a complete UF three-cycle repertoire, not a full blindfold curriculum including corner algorithms, flips, parity and cycle breaks.

## Fixed workspace and execution reduction

The trainer fits the viewport: family/case selection, cube and timeline stay together. Case lists and long explanations scroll within their own panels. The atlas and learning guide are keyboard-accessible overlays. On phones, native family/case selectors and a separate explanation panel preserve room for the cube and controls.

Execution mode is the default. It combines adjacent moves of the same layer across phase boundaries, with visible reduction notes; `U2 U′` becomes `U`, while opposite quarter turns disappear. Commutator mode preserves the original setup/A/B/A-inverse/B-inverse/undo sequence. Phase-navigation buttons deliberately return to Commutator mode. Different layer tokens such as R and r are not combined.

All 440 shortened sequences were verified against their original permutations. Browser checks passed at 1366×768, 1440×900, 390×844 and 390×667: no document scrolling, family/case and playback controls visible, practice answers and Next case visible, overlays, equal execution/commutator outcomes and phase navigation. Screenshot files use the `workspace-` prefix.

## See-through cube

Stickers use 0.64-unit squares instead of 0.87 (about 26% narrower). Faint wireframe cubies replace solid bodies; ordinary stickers are translucent while buffer/target stickers retain strong color. Separate inward-facing labels keep far-side text readable, including during layer rotations. Desktop and phone rendering, animated steps and camera controls were checked with a consistent English locale.
