import type { Metadata } from "next";
import { getNewArrivals } from "@/data/products";
import { CatalogView } from "@/components/products/CatalogView";

export const metadata: Metadata = {
  title: "New In — Latest Pakistani Luxury Arrivals",
  description: "Explore the newest seasonal additions from Cultural Fusion. Fresh off the loom lawn, khaddar, and bespoke festive ensembles.",
};

export default function NewInPage() {
  const products = getNewArrivals();

  return (
    <CatalogView
      title="New Arrivals"
      description="The freshest expressions of Pakistani craft. Discover our latest seasonal edits featuring innovative silhouettes, intricate embroidery, and breathable luxury fabrics."
      initialProducts={products}
      categorySlug="new-in"
      breadcrumbItems={[{ label: "New In" }]}
    />
  );
}
