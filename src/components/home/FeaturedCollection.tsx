import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";

export function FeaturedCollection() {
  const exclusiveProducts = getProductsByCategory("exclusive").slice(0, 4);

  return (
    <section className="py-20 bg-[#F8F5EF] border-t border-[#E9E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold block mb-2">
              Festive & Heirloom Edits
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B]">
              The Velvet & Silk Edit
            </h2>
          </div>

          <Link
            href="/exclusive"
            className="mt-4 sm:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A] transition-colors group"
          >
            <span>View All Festive Pieces</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {exclusiveProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
