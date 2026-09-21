"use client";

import styles from "./lab.module.css";
import type { CatalogCase, SymmetryGroupMember, AlgVariant } from "./catalog";

const relationLabel: Record<string, string> = {
  self: "This case",
  inverse: "Inverse",
  mirror: "LR mirror",
  mirrorInverse: "Mirror + inverse",
};
function mergedRelationLabel(relations: string[]): string {
  return relations
    .map((relation) => relationLabel[relation] || relation)
    .join(" = ");
}
export function variantNotation(
  variant: { setup: string[]; a: string[]; b: string[] },
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  pretty: (s: string) => string,
) {
  const core = `[${variant.a.join(" ")}, ${variant.b.join(" ")}]`;
  return pretty(
    variant.setup.length ? `${variant.setup.join(" ")} : ${core}` : core,
  );
}
function provenanceLabel(variant: AlgVariant) {
  return variant.provenance
    .map((p) => {
      if (p.relation === "assigned") {
        return "assigned";
      }
      return `${relationLabel[p.relation] || p.relation} of ${p.fromCaseId}`;
    })
    .join(" · ");
}
function pureBadges(variant: AlgVariant) {
  const isAssignedRow = variant.provenance.some(
    (p) => p.relation === "assigned",
  );
  if (!isAssignedRow) {
    return [];
  }
  return variant.provenance
    .filter((p) => p.relation !== "assigned")
    .map(
      (p) => `pure ${(relationLabel[p.relation] || p.relation).toLowerCase()}`,
    );
}

export default function SymmetryPanel({
  entry,
  group,
  variants,
  activeKey,
  savedKey,
  onSelectVariant,
  onClearVariantChoice,
  onNavigate,
  preferMirror,
  onChangePreferMirror,
  rememberedSummary,
  pretty,
}: {
  entry: CatalogCase;
  group: SymmetryGroupMember[];
  variants: AlgVariant[];
  activeKey: string;
  savedKey: string | undefined;
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  onSelectVariant: (key: string) => void;
  onClearVariantChoice: () => void;
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  onNavigate: (caseId: string) => void;
  preferMirror: boolean;
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  onChangePreferMirror: (value: boolean) => void;
  rememberedSummary: { total: number; mirror: number };
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  pretty: (s: string) => string;
}) {
  const hasSavedChoice = variants.some((v) => v.key === savedKey);
  const orderedVariants = hasSavedChoice
    ? [
        ...variants.filter((v) => v.key === savedKey),
        ...variants.filter((v) => v.key !== savedKey),
      ]
    : variants;
  return (
    <div className={styles.symmetry}>
      <span className={styles.eyebrow}>SYMMETRY</span>
      <div
        className={styles.symmetryChips}
        role="group"
        aria-label="Symmetry group"
      >
        {group.map((member) => (
          <button
            key={member.caseId}
            aria-pressed={member.caseId === entry.id}
            disabled={member.caseId === entry.id}
            onClick={() => onNavigate(member.caseId)}
          >
            {member.caseId === entry.id
              ? "This case"
              : mergedRelationLabel(member.relations)}
            <small>{member.caseId}</small>
          </button>
        ))}
      </div>
      <label className={styles.preferMirror}>
        <input
          type="checkbox"
          checked={preferMirror}
          onChange={(e) => onChangePreferMirror(e.target.checked)}
        />
        Default alg: prefer LR mirror when it differs
      </label>
      <p className={styles.rememberedSummary}>
        {rememberedSummary.total
          ? `Remembered: ${rememberedSummary.total} case${rememberedSummary.total === 1 ? "" : "s"} (${rememberedSummary.mirror} using a mirror alg)`
          : "Remembered: no per-case choices yet"}
      </p>
      <div className={styles.variantListHeader}>
        <span>Algorithms for this case</span>
        {hasSavedChoice && (
          <button
            type="button"
            className={styles.clearChoice}
            onClick={onClearVariantChoice}
            title="Forget the remembered choice for this case and use the default (assigned or preferred mirror) again"
          >
            Use default
          </button>
        )}
      </div>
      <div
        className={styles.variantList}
        role="radiogroup"
        aria-label="Algorithms for this case"
      >
        {orderedVariants.map((variant) => {
          const isSaved = hasSavedChoice && variant.key === savedKey;
          return (
            <button
              key={variant.key}
              role="radio"
              aria-checked={variant.key === activeKey}
              onClick={() => onSelectVariant(variant.key)}
            >
              <code>{variantNotation(variant, pretty)}</code>
              <small>
                {provenanceLabel(variant)}
                {isSaved ? " · remembered as your alg" : ""}
              </small>
              <span className={styles.variantBadges}>
                {isSaved && <em className={styles.myAlgBadge}>my alg</em>}
                {pureBadges(variant).map((badge) => (
                  <em key={badge} className={styles.pureBadge}>
                    {badge}
                  </em>
                ))}
                {!variant.pure && (
                  <em className={styles.differsBadge}>differs from assigned</em>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
