"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search as SearchIcon, RotateCcw } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types/product";
import { ProductGrid } from "@/components/products/ProductGrid";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

function SearchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    setSearchTerm(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) {
      setResults(PRODUCTS.slice(0, 8)); // show 8 popular items when query is empty
      return;
    }

    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q) ||
        (p.colors && p.colors.some((c) => c.toLowerCase().includes(q)))
    );

    setResults(filtered);
  }, [searchTerm]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Search" }]} />

        {/* Search Input Bar */}
        <div className="max-w-2xl mx-auto my-8 text-center">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold block mb-2">
            Atelier Search
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] mb-6">
            Find Your Next Ensemble
          </h1>

          <form onSubmit={handleFormSubmit} className="relative flex items-center shadow-sm">
            <SearchIcon className="w-5 h-5 text-[#A88B5A] absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by fabric (lawn, khaddar, velvet), collection, or style..."
              className="w-full bg-[#FAF8F5] border border-[#D9D2C7] pl-12 pr-28 py-3.5 text-sm text-[#1D1D1B] placeholder-[#6E6A64] focus:outline-none focus:border-[#A88B5A]"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors"
            >
              Search
            </button>
          </form>

          {/* Quick Keywords */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs">
            <span className="text-[#6E6A64]">Suggestions:</span>
            {["Khaddar", "Printed Lawn", "Solids", "Velvet", "Silk Karandi", "Khussa"].map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => {
                  setSearchTerm(k);
                  router.push(`/search?q=${encodeURIComponent(k)}`);
                }}
                className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E9E1D5] hover:border-[#1D1D1B] text-[#1D1D1B] text-[11px] uppercase tracking-wider transition-colors"
              >
                {k}
              </button>
            ))}
          </div>
        </div>

        {/* Results Metadata Header */}
        <div className="flex items-center justify-between border-b border-[#E9E1D5] pb-4 mb-8">
          <div>
            <h2 className="text-xs uppercase tracking-widest font-semibold text-[#1D1D1B]">
              {searchTerm.trim() ? (
                <span>
                  Results for &ldquo;<span className="text-[#A88B5A]">{searchTerm}</span>&rdquo;
                </span>
              ) : (
                <span>Curated Suggestions</span>
              )}
            </h2>
            <span className="text-[11px] text-[#6E6A64]">
              {results.length} {results.length === 1 ? "piece" : "pieces"} found
            </span>
          </div>

          {searchTerm.trim() && (
            <button
              type="button"
              onClick={() => {
                setSearchTerm("");
                router.push("/search");
              }}
              className="flex items-center space-x-1 text-xs text-[#A88B5A] hover:text-[#1D1D1B] uppercase tracking-wider"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Results Grid */}
        <ProductGrid
          products={results}
          emptyMessage={`We couldn't find any designs matching "${searchTerm}". Try checking your spelling or searching for another fabric.`}
          onResetFilters={() => {
            setSearchTerm("");
            router.push("/search");
          }}
        />
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-xs uppercase tracking-widest text-[#6E6A64]">
          Loading Search...
        </div>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
