"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export type SortOption = "featured" | "newest" | "price-asc" | "price-desc";

type SortDropdownProps = {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
};

export function SortDropdown({ currentSort, onSortChange }: SortDropdownProps) {
  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-2">
        <label htmlFor="sort-select" className="text-xs uppercase tracking-widest text-[#6E6A64]">
          Sort By:
        </label>
        <div className="relative">
          <select
            id="sort-select"
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="appearance-none bg-[#FAF8F5] border border-[#D9D2C7] py-1.5 pl-3 pr-8 text-xs uppercase tracking-wider text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A] cursor-pointer"
          >
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-[#6E6A64] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
