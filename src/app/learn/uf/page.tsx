import type { Metadata } from "next";
import CycleLab from "@/features/uf-trainer/CycleLab";
export const metadata: Metadata = {
  title: "UF Cycle Lab · BLDDB",
  description:
    "Understand one base cycle. Derive its relatives. Practice UF edge commutators visually.",
};
export default function Page() {
  return <CycleLab />;
}
