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
function variantNotation(
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
  onSelectVariant,
  onNavigate,
  preferMirror,
  onChangePreferMirror,
  pretty,
}: {
  entry: CatalogCase;
  group: SymmetryGroupMember[];
  variants: AlgVariant[];
  activeKey: string;
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  onSelectVariant: (key: string) => void;
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  onNavigate: (caseId: string) => void;
  preferMirror: boolean;
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  onChangePreferMirror: (value: boolean) => void;
  // eslint-disable-next-line no-unused-vars -- parameter name describes the callback type
  pretty: (s: string) => string;
}) {
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
      <div
        className={styles.variantList}
        role="radiogroup"
        aria-label="Algorithms for this case"
      >
        {variants.map((variant) => (
          <button
            key={variant.key}
            role="radio"
            aria-checked={variant.key === activeKey}
            onClick={() => onSelectVariant(variant.key)}
          >
            <code>{variantNotation(variant, pretty)}</code>
            <small>{provenanceLabel(variant)}</small>
            <span className={styles.variantBadges}>
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
        ))}
      </div>
    </div>
  );
}
