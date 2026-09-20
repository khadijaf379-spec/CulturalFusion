"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/types/product";
import { Badge } from "@/components/ui/Badge";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || "M");
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);

  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  const isFavorite = isInWishlist(product.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, selectedSize, 1);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      setShowQuickAdd(false);
    }, 1200);
  };

  return (
    <div
      className="group relative flex flex-col bg-[#FAF8F5] border border-[#E9E1D5] transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickAdd(false);
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E9E1D5]">
        <Link href={`/products/${product.slug}`} className="block w-full h-full">
          {/* Primary Image */}
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover object-center transition-opacity duration-700 ease-in-out ${
              isHovered && product.images[1] ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Secondary Hover Image */}
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={`object-cover object-center transition-opacity duration-700 ease-in-out ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </Link>

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1">
          {product.badge && <Badge type={product.badge} />}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-2.5 right-2.5 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm text-[#1D1D1B] hover:text-[#A88B5A] hover:bg-white transition-all shadow-sm"
          aria-label={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorite ? "fill-[#A88B5A] text-[#A88B5A]" : "text-[#1D1D1B]"
            }`}
          />
        </button>

        {/* Quick Add Overlay on Desktop */}
        <div className="absolute bottom-0 inset-x-0 p-2.5 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-end">
          {showQuickAdd ? (
            <div className="bg-[#FAF8F5] p-2.5 shadow-lg border border-[#E9E1D5] animate-in slide-in-from-bottom-2 duration-200">
              <div className="text-[10px] uppercase tracking-wider text-[#6E6A64] mb-1.5 flex justify-between items-center">
                <span>Select Size:</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setShowQuickAdd(false);
                  }}
                  className="text-xs hover:text-[#1D1D1B]"
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-wrap gap-1 mb-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedSize(s);
                    }}
                    className={`px-2 py-1 text-[10px] border transition-colors ${
                      selectedSize === s
                        ? "bg-[#1D1D1B] text-white border-[#1D1D1B]"
                        : "bg-white text-[#1D1D1B] border-[#D9D2C7] hover:border-[#1D1D1B]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={handleQuickAdd}
                className="w-full py-1.5 bg-[#A88B5A] text-white text-[11px] uppercase tracking-widest font-semibold hover:bg-[#8C7243] transition-colors flex items-center justify-center space-x-1"
              >
                {addedSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added!</span>
                  </>
                ) : (
                  <span>Add {selectedSize} to Bag</span>
                )}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (product.sizes.length === 1) {
                  addToCart(product, product.sizes[0], 1);
                } else {
                  setShowQuickAdd(true);
                }
              }}
              className="w-full py-2 bg-white/95 backdrop-blur-sm text-[#1D1D1B] text-xs uppercase tracking-widest font-semibold hover:bg-[#1D1D1B] hover:text-[#F8F5EF] transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Quick Add</span>
            </button>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="p-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-[#A88B5A] uppercase tracking-wider mb-1">
            <span>{product.fabric}</span>
            <span>{product.type}</span>
          </div>

          <Link href={`/products/${product.slug}`} className="block group-hover:text-[#A88B5A] transition-colors">
            <h3 className="font-serif text-sm font-medium text-[#1D1D1B] line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>
        </div>

        <div className="mt-3 pt-2 border-t border-[#F0ECE4] flex items-baseline justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-xs sm:text-sm font-bold text-[#1D1D1B]">
              {formatPrice(product.salePrice ?? product.price)}
            </span>
            {product.salePrice && (
              <span className="text-xs text-[#6E6A64] line-through">
                {formatPrice(product.price)}
              </span>
            )}
          </div>
          {product.pieces && (
            <span className="text-[10px] text-[#6E6A64] font-medium hidden sm:inline">
              {product.pieces.split("&")[0].trim()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
