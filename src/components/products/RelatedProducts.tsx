import React from "react";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

type RelatedProductsProps = {
  products: Product[];
};

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-16 border-t border-[#E9E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold block mb-1">
            Curated For You
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1D1D1B]">
            You May Also Like
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
