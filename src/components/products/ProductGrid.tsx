import React from "react";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  emptyMessage?: string;
  onResetFilters?: () => void;
};

export function ProductGrid({
  products,
  emptyMessage = "No pieces found matching your selected criteria.",
  onResetFilters,
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-20 text-center bg-[#FAF8F5] border border-[#E9E1D5] px-6 my-6">
        <h3 className="font-serif text-lg text-[#1D1D1B] mb-2">No Products Found</h3>
        <p className="text-xs text-[#6E6A64] max-w-sm mx-auto mb-6 leading-relaxed">
          {emptyMessage}
        </p>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="px-6 py-2.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest hover:bg-[#A88B5A] transition-colors"
          >
            Clear All Filters
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
