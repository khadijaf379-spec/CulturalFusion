import type { Metadata } from "next";
import { getProductsByCategory } from "@/data/products";
import { CatalogView } from "@/components/products/CatalogView";

export const metadata: Metadata = {
  title: "Solids & Monochromes — Minimalist Everyday Pret",
  description: "Explore understated monochrome silhouettes with artisanal tailored necklines, pure cambric, and breathable daily luxury.",
};

export default function SolidsPage() {
  const products = getProductsByCategory("solids");

  return (
    <CatalogView
      title="Solids & Monochromes"
      description="The beauty of restraint. Modern monochromatic two-piece and single kurta silhouettes tailored with subtle architectural details and artisanal fabric potli buttons."
      initialProducts={products}
      categorySlug="solids"
      breadcrumbItems={[{ label: "Shop" }, { label: "Solids" }]}
    />
  );
}
