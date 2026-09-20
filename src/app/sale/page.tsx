import type { Metadata } from "next";
import { getProductsByCategory } from "@/data/products";
import { CatalogView } from "@/components/products/CatalogView";

export const metadata: Metadata = {
  title: "Sale — Special Offers on Pret & Unstitched Pieces",
  description: "Shop Cultural Fusion sale items. Special limited-time discounts on previous season favorites, stitched lawn, and accessories.",
};

export default function SalePage() {
  const products = getProductsByCategory("sale");

  return (
    <CatalogView
      title="Special Seasonal Sale"
      description="Enjoy limited-time reductions on selected ready-to-wear pret, unstitched collections, and accessories. Premium quality crafted for timeless wardrobe rotation."
      initialProducts={products}
      categorySlug="sale"
      breadcrumbItems={[{ label: "Shop" }, { label: "Sale" }]}
    />
  );
}
