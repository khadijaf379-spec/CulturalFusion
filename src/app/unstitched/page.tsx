import type { Metadata } from "next";
import { getProductsByCategory } from "@/data/products";
import { CatalogView } from "@/components/products/CatalogView";

export const metadata: Metadata = {
  title: "Unstitched Fabrics — Premium 3-Piece & 2-Piece Lengths",
  description: "Bespoke fabric lengths with embroidered organza patches, fine voile dupattas, and premium cambric trousers from Cultural Fusion.",
};

export default function UnstitchedPage() {
  const products = getProductsByCategory("unstitched");

  return (
    <CatalogView
      title="Unstitched Bespoke Collection"
      description="Tailor your personal expression. Premium textured dobby, winter khaddar, and fine lawn fabric lengths complete with embroidered organza motifs and luxury dupattas."
      initialProducts={products}
      categorySlug="unstitched"
      breadcrumbItems={[{ label: "Shop" }, { label: "Unstitched" }]}
    />
  );
}
