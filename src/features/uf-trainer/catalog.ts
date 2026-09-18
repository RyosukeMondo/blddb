import data from "./catalog.json";
import {
  execute,
  inverse,
  destination,
  computeSymmetryGroup,
  computeAlgVariants,
  type SymmetryRelation,
  type VariantRelation,
} from "./engine";
export const FAMILIES = data.families;
export const CASES = FAMILIES.flatMap((family, familyIndex) =>
  family.cases.map((entry) => ({ ...entry, familyIndex })),
);
export type CatalogCase = (typeof CASES)[number];
const byId = new Map(CASES.map((c) => [c.id, c]));
export function caseLesson(entry: (typeof FAMILIES)[number]["cases"][number]) {
  const blocks = [entry.a, entry.b, inverse(entry.a), inverse(entry.b)];
  const core = blocks.flat(),
    moves = [...entry.setup, ...core, ...inverse(entry.setup)];
  const aligned = entry.cycle.map((id) =>
    destination(execute(entry.setup), id),
  );
  let offset = entry.setup.length;
  const phases = blocks.map((block, i) => {
    offset += block.length;
    return { label: ["A", "B", "A⁻¹", "B⁻¹"][i], moves: block, end: offset };
  });
  return { ...entry, moves, core, aligned, phases };
}
export function setupChoices(entry: CatalogCase) {
  const correct = entry.setup.join(" "),
    lesson = caseLesson(entry),
    target = execute(lesson.moves).join(",");
  const seen = new Set([correct]),
    choices = [correct];
  for (const candidate of CASES) {
    const value = candidate.setup.join(" ");
    if (seen.has(value)) {
      continue;
    }
    seen.add(value);
    if (
      execute([
        ...candidate.setup,
        ...lesson.core,
        ...inverse(candidate.setup),
      ]).join(",") === target
    ) {
      continue;
    }
    choices.push(value);
    if (choices.length === 4) {
      break;
    }
  }
  return choices.sort();
}

export type SymmetryGroupMember = {
  relation: SymmetryRelation;
  relations: SymmetryRelation[];
  caseId: string;
  familyIndex: number;
  caseIndex: number;
};
// The case's own symmetry group: itself, its inverse partner, its LR-mirror
// partner and its mirror-inverse partner, deduplicated by case id (two
// relations can land on the same case, e.g. "mirror = inverse").
export function symmetryGroup(entry: CatalogCase): SymmetryGroupMember[] {
  return computeSymmetryGroup(entry).map((member) => {
    const caseEntry = byId.get(member.caseId);
    const familyIndex = caseEntry?.familyIndex ?? -1;
    const caseIndex =
      familyIndex >= 0
        ? FAMILIES[familyIndex].cases.findIndex((c) => c.id === member.caseId)
        : -1;
    return { ...member, familyIndex, caseIndex };
  });
}

export type AlgVariant = CatalogCase & {
  key: string;
  provenance: { relation: VariantRelation; fromCaseId: string }[];
  pure: boolean;
};
// Every distinct algorithm that solves this case: the assigned one, plus
// whichever of the inverse/mirror/mirror-inverse partners' algorithms turn
// out to be a genuinely different way to solve it once reduced to the same
// simplified move sequence as the assigned alg. Structurally compatible with
// CatalogCase, so each variant is directly playable through caseLesson.
export function algVariants(entry: CatalogCase): AlgVariant[] {
  return computeAlgVariants(entry, (id) => byId.get(id)).map((variant) => ({
    ...entry,
    ...variant,
  }));
}
