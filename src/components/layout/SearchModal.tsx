"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";

type SearchModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      setResults([]);
      return;
    }

    const matched = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(trimmed) ||
        p.category.toLowerCase().includes(trimmed) ||
        p.fabric.toLowerCase().includes(trimmed) ||
        p.collection.toLowerCase().includes(trimmed)
    ).slice(0, 6);

    setResults(matched);
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onClose();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl bg-[#FAF8F5] border border-[#E9E1D5] shadow-2xl overflow-hidden rounded-none"
        role="dialog"
        aria-modal="true"
        aria-label="Search Cultural Fusion products"
      >
        {/* Search header */}
        <form onSubmit={handleSubmit} className="relative flex items-center border-b border-[#E9E1D5] px-6 py-4">
          <Search className="w-5 h-5 text-[#A88B5A] mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by collection, fabric (lawn, khaddar, velvet)..."
            className="w-full bg-transparent text-sm sm:text-base text-[#1D1D1B] placeholder-[#6E6A64] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="text-[#6E6A64] hover:text-[#1D1D1B] p-1 mr-2"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#6E6A64] hover:text-[#1D1D1B] transition-colors"
            aria-label="Close search modal"
          >
            <X className="w-5 h-5" />
          </button>
        </form>

        {/* Quick links when empty */}
        {!query && (
          <div className="p-6">
            <p className="text-xs uppercase tracking-widest text-[#6E6A64] font-medium mb-3">
              Popular Searches
            </p>
            <div className="flex flex-wrap gap-2">
              {["Printed Lawn", "Khaddar", "Solids", "Velvet", "Silk Karandi", "Punjabi Khussa"].map(
                (term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => {
                      setQuery(term);
                    }}
                    className="px-3 py-1.5 bg-[#F0ECE4] text-[#1D1D1B] text-xs uppercase tracking-wider hover:bg-[#A88B5A] hover:text-white transition-colors border border-[#E5DFD5]"
                  >
                    {term}
                  </button>
                )
              )}
            </div>
          </div>
        )}

        {/* Live results */}
        {query && results.length > 0 && (
          <div className="p-4 max-h-[60vh] overflow-y-auto divide-y divide-[#E9E1D5]">
            {results.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="flex items-center space-x-4 py-3 px-2 hover:bg-[#F0ECE4] transition-colors group"
              >
                <div className="relative w-14 h-18 bg-[#E9E1D5] shrink-0 overflow-hidden">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="56px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-widest text-[#A88B5A]">
                    {product.fabric} • {product.type}
                  </p>
                  <h4 className="text-sm font-medium text-[#1D1D1B] truncate group-hover:text-[#A88B5A] transition-colors">
                    {product.name}
                  </h4>
                  <div className="flex items-center space-x-2 mt-0.5">
                    <span className="text-xs font-semibold text-[#1D1D1B]">
                      {formatPrice(product.salePrice ?? product.price)}
                    </span>
                    {product.salePrice && (
                      <span className="text-xs text-[#6E6A64] line-through">
                        {formatPrice(product.price)}
                      </span>
                    )}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-[#A88B5A] opacity-0 group-hover:opacity-100 transition-opacity mr-2" />
              </Link>
            ))}

            <div className="pt-3 pb-1 text-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="text-xs uppercase tracking-widest text-[#1D1D1B] hover:text-[#A88B5A] font-medium inline-flex items-center space-x-1"
              >
                <span>View all results for &quot;{query}&quot;</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Empty state */}
        {query && results.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-sm text-[#6E6A64]">
              No pieces found matching &quot;{query}&quot;
            </p>
            <p className="text-xs text-[#6E6A64] mt-1">
              Try searching by fabric like lawn, khaddar, velvet, or cambric.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
