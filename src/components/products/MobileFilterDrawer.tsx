"use client";

import React, { useEffect } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { FilterState } from "@/types/product";
import { FilterSidebar } from "./FilterSidebar";

type MobileFilterDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onReset: () => void;
  fabrics: string[];
  sizes: string[];
  totalResults: number;
};

export function MobileFilterDrawer({
  isOpen,
  onClose,
  filters,
  onFilterChange,
  onReset,
  fabrics,
  sizes,
  totalResults,
}: MobileFilterDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-12">
        <div className="w-screen max-w-xs sm:max-w-sm bg-[#FAF8F5] border-l border-[#E9E1D5] shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#E9E1D5] bg-[#F8F5EF]">
            <div className="flex items-center space-x-2">
              <SlidersHorizontal className="w-4 h-4 text-[#A88B5A]" />
              <h3 className="font-serif text-sm uppercase tracking-widest text-[#1D1D1B] font-semibold">
                Refine Collection
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1 text-[#6E6A64] hover:text-[#1D1D1B]"
              aria-label="Close filters"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Filter Options */}
          <div className="flex-1 overflow-y-auto p-6">
            <FilterSidebar
              filters={filters}
              onFilterChange={onFilterChange}
              onReset={onReset}
              fabrics={fabrics}
              sizes={sizes}
            />
          </div>

          {/* Bottom Action */}
          <div className="p-4 border-t border-[#E9E1D5] bg-[#F8F5EF]">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors text-center"
            >
              Show {totalResults} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
