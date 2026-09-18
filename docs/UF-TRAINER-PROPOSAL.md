# UF Cycle Lab — codebase review and proposal

Date: 2026-09-08. Status: the complete 440-case UF catalog (135 selected core families), Three.js playback and recall practice are implemented at `/learn/uf`. See `uf-trainer/README.md` for current scope; this document retains the original proposal.

## Recommendation

Add a UF edge 3-style learning area to BLDDB at `/learn/uf`. Teach a small, explicit vocabulary of base commutators, how setups transform cases into those bases, and how to retrieve the right setup and direction from a target pair. Reuse existing data and lettering support, with selected visualization ideas from the other repos.

Assumption: “memorization” primarily means learning and recalling algorithms. Include a separate target-letter/pair association track for solve memo; these are different skills. Start with UF edge 3-style, not a complete blindfold solve curriculum. Corners, parity, flipped-edge handling, cycle breaks, and full scramble memo follow later.

## What already exists

| Repo / source | Existing behavior | Reuse / gap |
|---|---|---|
| `blddb/scripts/edge-memory/` | Selects commutator candidates, groups cores, renders family tables, inverse indexes and ASCII cycle nets | This is the earlier memorization grouping project. Convert into validated structured lesson data. |
| `blddb/docs/edge-memory/edge_buffer_A.md` | UF under Chichu: 360 cases, 129 core buckets, 180 inverse pairs; 98 shared buckets cover 329 cases | Useful starting material, not a complete UF curriculum or validated count of mechanisms. |
| `blddb/src/utils/codeConverter.ts` | Chichu, Speffz, custom lettering; cyclic and companion-sticker representations | Keep physical sticker IDs as identity; lettering is presentation. |
| `blddb/src/utils/commutator.ts`, `tracer.ts` | Commutator manipulation and move-to-sticker-state tracing | Reuse behind validated adapters. |
| `cube-sticker-visual/src/components/CubeVisualizer.tsx` | React/Three cube, UF highlighting, particle arrows, replay and speed control | Useful presentation foundation; current animation shows target arrows on a static cube, not algorithm turn execution. |
| `cube-sticker-visual/public/algo_edge.csv` and generator | Japanese target-pair table, algorithm notation, generated cycle mappings | Additional candidate algorithms and Japanese labels; mappings are generated from table coordinates, not proved by simulating notation. |
| `cube-bld-flat/cube_bld_mercator/lib/controllers/world_controller.dart` | Flat/cube exploration, two target selections with locks, E/M/S indicators from algorithms | Reuse the interaction idea: lock one target and inspect related cases. Slice indicators alone do not establish shared mechanism. |
| `cube-solver/lib/domain/services/drill_generator.dart` | Flutter recognition drills for moves, F2L, OLL etc. | General drill ideas; not the missing UF family trainer. |

Review was source-based. No claim that the existing apps build or work in a browser was made. One read-only Node audit was run against the current database and tracer.

## Findings that affect the design

1. **Coverage must be expanded before counting UF cases.** The Nightmare database contains 1,760 canonical keys. Selecting keys beginning with Chichu A gives only the 360 cases in the old sheet. Expanding cyclic rotations plus companion-sticker representations produced 440 distinct directed UF cases in this review. This agrees with 22 first-target stickers × 20 second-target stickers on a different non-buffer edge. There are 220 inverse pairs. Recompute family counts on this full set.
2. **Current core grouping is textual.** `pick.mts` sorts the two commutator operands into a core key. That deliberately combines opposite directions; retain ordered operands and direction in each lesson. `analyze.mts` places compounds into one bucket, which is not a shared mechanism and must not become one lesson.
3. **Shortest per case is not smallest learning burden.** Current scoring selects each case independently. The runner searches the 40 shortest candidates, despite documentation describing 100 candidates per case. The raw output shards are deleted after Markdown generation. Preserve candidate provenance and generate a stable JSON artifact.
4. **“Insert” and “interchange” are inferred from length.** The current sheet chooses the shorter operand as interchange. This is a naming heuristic, not a proof of physical roles. Use neutral A/B labels unless the mechanism has a reviewed explanation.
5. **Validation must fail visibly.** The existing tracer returns the solved state on an invalid token. Wrap it with strict parsing so unsupported notation cannot look like a successful solve. Use uniquely identified facelets for authoritative verification; check corners, centers, companion stickers and untouched edges too.
6. **Arrows need a direction convention.** Distinguish executing an algorithm on solved state (piece movement) from applying that algorithm to its inverse-generated training state (solving). Never infer direction from CSV row/column names alone.

## Grouping model

Every case has a physical ordered cycle and one or more candidate algorithms. Every family has an explicit reason for membership and a reproducible transformation.

| Relationship | What the learner sees | Required evidence |
|---|---|---|
| Same directed cycle | Different notation or cyclic starting point, same outcome | Equal complete permutation, including orientation |
| Inverse pair | Same three targets, reversed arrows | Inverse permutation; swapping A/B in the same conjugated commutator produces the inverse |
| Shared base through setup | Different target positions become the same core geometry | Explicit setup S, ordered core C, and verified `S C S⁻¹` |
| Shared construction | Similar insertion/slice pattern with a changed move | Named variation and its actual changed geometry; not labeled identical |
| Mirror / rotation relative | Similar geometry in another frame | Explicit transformation, notation and buffer tracking; optional later lesson |

A shared final permutation does not imply the same execution mechanism. Conversely, a shared core can solve different cycles through different setups.

Select algorithms across the curriculum: prefer reusing a known base, short understandable setups, clear direction, and few exceptions. Keep move count and execution comfort visible. Provide a user-pinned alternative so familiar algorithms are not silently replaced. Do not promise a particular tiny number of families before this optimization is evaluated.

Suggested progression: pure short slice/half-turn examples → reverse direction → one-move setups → insertion commutators → longer setups → exceptional algorithms. These are teaching stages, not a claim that every short commutator has the same construction.

## Proposed experience

### 1. Family atlas

A 22 × 22 target-pair grid with invalid same-piece combinations disabled. Rows are first target, columns second target, UF fixed. Color by chosen family; toggle direction and learning status. Select a family to see its base, covered cases, setup-length distribution and explanation. Lock one target to explore how changing the second target changes the setup.

Keep physical IDs visible beside personal letters, including UF versus FU. Allow Chichu, Speffz, custom letters and the existing Japanese labels without changing stored case identity.

### 2. Why these cases belong together

Show selected case and base case side by side, with synchronized 3D cube and readable 2D net. Track buffer and two target sticker identities consistently in cyan, orange and purple, plus text labels. Animate the setup and show exactly where those three stickers arrive. Overlay the base geometry after setup. Then play the common core and undo setup.

The buffer sticker may move during setup. Follow its identity and show its temporary position instead of pretending it remains at UF throughout.

Each case states a concrete explanation: “This setup places these target stickers into the base cycle; execute the base in this direction, then undo the setup.” Where a case uses a different construction, explain that difference explicitly.

### 3. Base-cycle microscope

Timeline: `S → A → B → A⁻¹ → B⁻¹ → S⁻¹`. Offer one-move steps, phase steps, scrub, replay, speed and inverse toggles. During execution show all temporarily disturbed pieces in subdued colors, emphasizing the three intended targets. At the end show which pieces were restored and the exact net cycle.

Worked seed verified with the existing tracer:

- `[M′, U2] = M′ U2 M U2` moves stickers `UF → DF → UB → UF` when executed on solved state.
- Its inverse `[U2, M′] = U2 M′ U2 M` moves `UF → UB → DF → UF`.
- The audit found companion stickers moving consistently and no non-edge sticker changes for these two sequences. This is a spot check, not validation of the whole database.

Start with this lesson and derive setup relatives only after simulation proves them. The lesson asks the learner to predict the next target or the final cycle before revealing the answer.

### 4. Recall practice

Short sessions: review a base, identify a family from a pair, recall the setup, choose direction, execute on a real cube, then interleave cases from different families. Reveal hints gradually: geometry → family → setup → full algorithm.

Record recall correctness, hint use, direction mistakes and optional execution time separately. Real-cube success is self-reported unless a future sensor integration is added. Schedule case reviews and family reviews independently; knowing one base does not prove all its setups are mastered.

Provide personal mnemonic notes on bases and cases. A separate memo exercise maps physical target ↔ personal letter and pair ↔ personal image/word; avoid imposing arbitrary word groups as algorithm families. Persist locally with export/import backup.

## Architecture

- Host in existing Next.js BLDDB under `src/app/learn/uf/`; client components for simulation and saved progress.
- Add `src/features/uf-trainer/` for family atlas, explanation player, drills, storage and lesson data adapters.
- Build a deterministic offline pipeline producing `public/data/uf-trainer.json`; do not run expensive commutator searches in the browser.
- Data includes physical cycle, candidate source, expanded moves, parsed commutator tree, setup, ordered operands, family relation, inverse case, verified permutation and explanation metadata. Use stable physical IDs and versioned family IDs.
- Personal data includes preferred algorithms, lettering, mnemonic notes, per-case attempts and per-family progress, with schema version and migration.
- Start with an accurate 2D net driven by a pure permutation engine. Add actual 3D layer animation driven by the same state. Borrow the existing Three presentation selectively; no need to merge Flutter projects or all repos.
- Preserve existing attribution/licenses when reusing code and datasets.

## Implementation sequence and acceptance criteria

1. **Data foundation.** Expand all 440 UF cases; verify actual algorithm permutations and inverses; inventory invalid or unsupported candidates. Save reproducible coverage and candidate reports. All accepted cases must be free of unintended piece changes; malformed notation must fail explicitly.
2. **One complete lesson.** Implement the verified base, its inverse, and a few verified setup relatives. Deliver actual phase-by-phase visualization plus a short recall drill. Acceptance: setup alignment is demonstrable, 2D/3D agree at every phase, inverse reverses the cycle, reset/replay are deterministic.
3. **Family curriculum.** Optimize candidate selection for reusable bases, manually review family explanations, add atlas and pair search. Every family member links to its concrete setup/direction proof; compound exceptions remain explicit. Report actual learning coverage, not just bucket totals.
4. **Practice and persistence.** Add progressive hints, interleaving, review scheduling, custom letters, personal algorithms, and export/import. Acceptance: progress survives reload and backup round trips; lettering changes preserve progress; keyboard and phone use are checked.
5. **Later full BLD practice.** Add memo chains, cycle breaks, flips, parity and corners as separately verified modules. A UF 3-cycle trainer alone is not a complete blindfold-solving app.

First useful release: one understandable family with real turns and recall practice, followed by the validated full UF atlas. Success means the learner can explain a setup and recall an unseen relative of a learned base, not merely browse algorithms.

## External teaching references

[J Perm — Getting Faster at Blindfolded](https://jperm.net/bld/faster) describes 3-style as buffer-based three-piece cycles and discusses lettering and pair-image skills separately. [Beyer–Hardwick edges](https://www.speedcubing.com/chris/bhedges.html) emphasizes case constructions and names as a way to derive algorithms. These support the teaching direction; local code and simulation are the source of the repo findings and worked example above.
