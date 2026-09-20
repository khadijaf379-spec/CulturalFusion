"use client";

import React, { useState, useMemo } from "react";
import { Product, FilterState } from "@/types/product";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductGrid } from "@/components/products/ProductGrid";
import { FilterSidebar } from "@/components/products/FilterSidebar";
import { MobileFilterDrawer } from "@/components/products/MobileFilterDrawer";
import { SortDropdown, SortOption } from "@/components/products/SortDropdown";
import { SlidersHorizontal } from "lucide-react";

type CatalogViewProps = {
  title: string;
  description: string;
  initialProducts: Product[];
  categorySlug: string;
  breadcrumbItems: { label: string; href?: string }[];
};

export function CatalogView({
  title,
  description,
  initialProducts,
  breadcrumbItems,
}: CatalogViewProps) {
  const [filters, setFilters] = useState<FilterState>({});
  const [sort, setSort] = useState<SortOption>("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Extract available fabrics and sizes from the current product set
  const fabrics = useMemo(() => {
    const set = new Set<string>();
    initialProducts.forEach((p) => {
      if (p.fabric) set.add(p.fabric);
    });
    return Array.from(set).sort();
  }, [initialProducts]);

  const sizes = useMemo(() => {
    const set = new Set<string>();
    initialProducts.forEach((p) => {
      p.sizes.forEach((s) => set.add(s));
    });
    return Array.from(set);
  }, [initialProducts]);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    let result = [...initialProducts];

    // Filter by fabric
    if (filters.fabric) {
      result = result.filter(
        (p) => p.fabric.toLowerCase() === filters.fabric?.toLowerCase()
      );
    }

    // Filter by size
    if (filters.size) {
      result = result.filter((p) => p.sizes.includes(filters.size!));
    }

    // Filter by price range
    if (filters.minPrice !== undefined) {
      result = result.filter((p) => {
        const price = p.salePrice ?? p.price;
        return price >= filters.minPrice!;
      });
    }

    if (filters.maxPrice !== undefined) {
      result = result.filter((p) => {
        const price = p.salePrice ?? p.price;
        return price <= filters.maxPrice!;
      });
    }

    // Filter by stock
    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    // Sort
    switch (sort) {
      case "newest":
        result.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      case "price-asc":
        result.sort((a, b) => (a.salePrice ?? a.price) - (b.salePrice ?? b.price));
        break;
      case "price-desc":
        result.sort((a, b) => (b.salePrice ?? b.price) - (a.salePrice ?? a.price));
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [initialProducts, filters, sort]);

  const handleResetFilters = () => {
    setFilters({});
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} />

        {/* Editorial Catalog Header */}
        <div className="border-b border-[#E9E1D5] pb-8 pt-4 mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Toolbar: Product Count, Mobile Filter Trigger, Sort Dropdown */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E9E1D5]">
          <div className="flex items-center space-x-4">
            {/* Mobile Filter Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center space-x-1.5 px-3 py-1.5 border border-[#1D1D1B] text-xs uppercase tracking-wider font-semibold text-[#1D1D1B]"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>

            <span className="text-xs text-[#6E6A64] uppercase tracking-wider font-medium">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "Piece" : "Pieces"}
            </span>
          </div>

          <SortDropdown currentSort={sort} onSortChange={setSort} />
        </div>

        {/* Main Grid + Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 bg-[#FAF8F5] border border-[#E9E1D5] p-5 shadow-xs">
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              onReset={handleResetFilters}
              fabrics={fabrics}
              sizes={sizes}
            />
          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-9">
            <ProductGrid
              products={filteredProducts}
              onResetFilters={handleResetFilters}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        filters={filters}
        onFilterChange={setFilters}
        onReset={handleResetFilters}
        fabrics={fabrics}
        sizes={sizes}
        totalResults={filteredProducts.length}
      />
    </div>
  );
}
