import data from "./catalog.json";
import { execute, inverse, destination } from "./engine";
export const FAMILIES = data.families;
export const CASES = FAMILIES.flatMap((family, familyIndex) =>
  family.cases.map((entry) => ({ ...entry, familyIndex })),
);
export type CatalogCase = (typeof CASES)[number];
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
