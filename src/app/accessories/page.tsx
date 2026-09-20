import type { Metadata } from "next";
import { getProductsByCategory } from "@/data/products";
import { CatalogView } from "@/components/products/CatalogView";

export const metadata: Metadata = {
  title: "Accessories — Punjabi Khussas, Dupattas & Kundan Jewellery",
  description: "Artisanal accessories crafted by master Lahore artisans. Genuine leather Punjabi khussas, embellished dupattas, clutches, and polki kundan jhumkas.",
};

export default function AccessoriesPage() {
  const products = getProductsByCategory("accessories");

  return (
    <CatalogView
      title="Artisan Accessories"
      description="The finishing touch of authentic grace. Hand-stitched genuine leather khussas, embroidered organza and chiffon dupattas, velvet evening clutches, and heirloom kundan jewelry."
      initialProducts={products}
      categorySlug="accessories"
      breadcrumbItems={[{ label: "Shop" }, { label: "Accessories" }]}
    />
  );
}
