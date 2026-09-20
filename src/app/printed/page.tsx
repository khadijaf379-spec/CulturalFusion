import type { Metadata } from "next";
import { getProductsByCategory } from "@/data/products";
import { CatalogView } from "@/components/products/CatalogView";

export const metadata: Metadata = {
  title: "Printed Collection — Luxury Lawn & Cambric Suits",
  description: "Browse Cultural Fusion's printed collection. Botanical frescoes, delicate paisleys, and geometric motifs on premium breathable cotton and lawn.",
};

export default function PrintedPage() {
  const products = getProductsByCategory("printed");

  return (
    <CatalogView
      title="Printed Collection"
      description="Vibrant botanical motifs, vintage frescoes, and contemporary geometric patterns printed on super fine luxury lawn and cambric cotton."
      initialProducts={products}
      categorySlug="printed"
      breadcrumbItems={[{ label: "Shop" }, { label: "Printed" }]}
    />
  );
}
