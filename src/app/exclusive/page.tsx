import type { Metadata } from "next";
import { getProductsByCategory } from "@/data/products";
import { CatalogView } from "@/components/products/CatalogView";

export const metadata: Metadata = {
  title: "Exclusive Collection — Luxury Velvet, Silk & Shararas",
  description: "Opulent micro-velvet, raw silk karandi, hand-embellished tilla zardozi, and festive silhouettes for memorable Pakistani celebrations.",
};

export default function ExclusivePage() {
  const products = getProductsByCategory("exclusive");

  return (
    <CatalogView
      title="Exclusive & Festive Edit"
      description="Heirloom craftsmanship designed for ceremonial evenings. Discover plush micro-velvet, pure silk karandi, hand-worked dabka embellishments, and regal flared shararas."
      initialProducts={products}
      categorySlug="exclusive"
      breadcrumbItems={[{ label: "Shop" }, { label: "Exclusive" }]}
    />
  );
}
