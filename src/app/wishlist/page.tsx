"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { formatPrice } from "@/lib/utils";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, clearWishlist, totalWishlistItems } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (product: (typeof wishlist)[0]) => {
    addToCart(product, product.sizes[0] || "M", 1);
    removeFromWishlist(product.id);
  };

  if (wishlist.length === 0) {
    return (
      <div className="bg-[#F8F5EF] min-h-[70vh] py-16 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-20 h-20 rounded-full bg-[#E9E1D5] flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-[#A88B5A]" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#1D1D1B] mb-2">
            Your Wishlist is Empty
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] mb-8 leading-relaxed">
            Save pieces you love by tapping the heart icon while browsing our collections.
          </p>
          <Link
            href="/new-in"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors"
          >
            <span>Explore New In</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Wishlist" }]} />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E9E1D5] pb-6 mb-8">
          <div>
            <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] tracking-tight">
              My Wishlist ({totalWishlistItems})
            </h1>
            <p className="text-xs text-[#6E6A64] mt-1">
              Pieces saved for later consideration.
            </p>
          </div>

          <button
            type="button"
            onClick={clearWishlist}
            className="mt-4 sm:mt-0 text-xs uppercase tracking-wider text-[#6E6A64] hover:text-red-600 transition-colors text-left"
          >
            Clear All Wishlist
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-[#FAF8F5] border border-[#E9E1D5] flex flex-col justify-between group overflow-hidden"
            >
              <div className="relative aspect-[3/4] bg-[#E9E1D5] overflow-hidden">
                <Link href={`/products/${product.slug}`} className="block w-full h-full">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-xs text-[#6E6A64] hover:text-red-600 rounded-full transition-colors shadow-sm"
                  aria-label="Remove from wishlist"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A88B5A] font-semibold block mb-1">
                    {product.fabric} • {product.type}
                  </span>
                  <Link
                    href={`/products/${product.slug}`}
                    className="font-serif text-sm font-medium text-[#1D1D1B] hover:text-[#A88B5A] transition-colors block line-clamp-1"
                  >
                    {product.name}
                  </Link>
                  <p className="text-xs font-bold text-[#1D1D1B] mt-2">
                    {formatPrice(product.salePrice ?? product.price)}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#E9E1D5]">
                  <button
                    type="button"
                    onClick={() => handleMoveToCart(product)}
                    className="w-full py-2.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors flex items-center justify-center space-x-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Move To Bag</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
