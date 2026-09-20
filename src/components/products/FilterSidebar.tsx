"use client";

import React from "react";
import { FilterState } from "@/types/product";
import { RotateCcw } from "lucide-react";

type FilterSidebarProps = {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  fabrics: string[];
  sizes: string[];
};

export function FilterSidebar({
  filters,
  onFilterChange,
  onReset,
  fabrics,
  sizes,
}: FilterSidebarProps) {
  const hasActiveFilters =
    filters.fabric ||
    filters.size ||
    filters.minPrice !== undefined ||
    filters.maxPrice !== undefined ||
    filters.inStockOnly;

  return (
    <div className="space-y-6 text-xs text-[#1D1D1B]">
      {/* Active filters reset header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E9E1D5]">
        <h4 className="font-semibold uppercase tracking-widest text-[#1D1D1B]">
          Filters
        </h4>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onReset}
            className="flex items-center space-x-1 text-[#A88B5A] hover:text-[#1D1D1B] uppercase tracking-wider"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Fabric Filter */}
      <div className="space-y-2.5">
        <h5 className="font-semibold uppercase tracking-wider text-[#6E6A64]">
          Fabric
        </h5>
        <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
          {fabrics.map((fabric) => {
            const isSelected = filters.fabric === fabric;
            return (
              <label
                key={fabric}
                className="flex items-center space-x-2.5 cursor-pointer hover:text-[#A88B5A] transition-colors"
              >
                <input
                  type="radio"
                  name="fabric"
                  checked={isSelected}
                  onChange={() =>
                    onFilterChange({
                      ...filters,
                      fabric: isSelected ? undefined : fabric,
                    })
                  }
                  className="w-3.5 h-3.5 accent-[#A88B5A] rounded-none cursor-pointer"
                />
                <span className={isSelected ? "font-semibold text-[#1D1D1B]" : "text-[#6E6A64]"}>
                  {fabric}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Size Filter */}
      <div className="space-y-2.5 pt-4 border-t border-[#E9E1D5]">
        <h5 className="font-semibold uppercase tracking-wider text-[#6E6A64]">
          Size
        </h5>
        <div className="flex flex-wrap gap-1.5">
          {sizes.map((size) => {
            const isSelected = filters.size === size;
            return (
              <button
                key={size}
                type="button"
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    size: isSelected ? undefined : size,
                  })
                }
                className={`px-2.5 py-1 text-xs border uppercase tracking-wider transition-colors ${
                  isSelected
                    ? "bg-[#1D1D1B] text-white border-[#1D1D1B]"
                    : "bg-[#FAF8F5] text-[#1D1D1B] border-[#D9D2C7] hover:border-[#1D1D1B]"
                }`}
              >
                {size}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter */}
      <div className="space-y-2.5 pt-4 border-t border-[#E9E1D5]">
        <h5 className="font-semibold uppercase tracking-wider text-[#6E6A64]">
          Price Range
        </h5>
        <div className="space-y-1.5">
          {[
            { label: "All Prices", min: undefined, max: undefined },
            { label: "Under Rs. 6,000", min: 0, max: 6000 },
            { label: "Rs. 6,000 – Rs. 10,000", min: 6000, max: 10000 },
            { label: "Rs. 10,000 – Rs. 15,000", min: 10000, max: 15000 },
            { label: "Above Rs. 15,000", min: 15000, max: undefined },
          ].map((tier, idx) => {
            const isSelected =
              filters.minPrice === tier.min && filters.maxPrice === tier.max;
            return (
              <label
                key={idx}
                className="flex items-center space-x-2.5 cursor-pointer hover:text-[#A88B5A] transition-colors"
              >
                <input
                  type="radio"
                  name="priceTier"
                  checked={isSelected}
                  onChange={() =>
                    onFilterChange({
                      ...filters,
                      minPrice: tier.min,
                      maxPrice: tier.max,
                    })
                  }
                  className="w-3.5 h-3.5 accent-[#A88B5A] rounded-none cursor-pointer"
                />
                <span className={isSelected ? "font-semibold text-[#1D1D1B]" : "text-[#6E6A64]"}>
                  {tier.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* In-Stock Toggle */}
      <div className="pt-4 border-t border-[#E9E1D5]">
        <label className="flex items-center space-x-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={!!filters.inStockOnly}
            onChange={(e) =>
              onFilterChange({
                ...filters,
                inStockOnly: e.target.checked ? true : undefined,
              })
            }
            className="w-3.5 h-3.5 accent-[#A88B5A] rounded-none cursor-pointer"
          />
          <span className="text-[#6E6A64] hover:text-[#1D1D1B]">
            In Stock Only
          </span>
        </label>
      </div>
    </div>
  );
}
