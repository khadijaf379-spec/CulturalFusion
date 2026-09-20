"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Phone, MapPin, Heart, ShoppingBag, Sparkles } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { totalWishlistItems } = useWishlist();
  const { totalItems, setIsCartOpen } = useCart();

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
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex">
        <div className="w-screen max-w-sm bg-[#F8F5EF] border-r border-[#E9E1D5] shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#E9E1D5]">
              <Link
                href="/"
                onClick={onClose}
                className="font-serif text-lg tracking-widest text-[#1D1D1B] font-bold"
              >
                CULTURAL FUSION
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-[#6E6A64] hover:text-[#1D1D1B] transition-colors"
                aria-label="Close mobile navigation"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions Row */}
            <div className="grid grid-cols-2 border-b border-[#E9E1D5] bg-[#F0ECE4] text-xs">
              <Link
                href="/wishlist"
                onClick={onClose}
                className="flex items-center justify-center space-x-2 py-3 border-r border-[#E9E1D5] hover:text-[#A88B5A] transition-colors text-[#1D1D1B]"
              >
                <Heart className="w-4 h-4 text-[#A88B5A]" />
                <span>Wishlist ({totalWishlistItems})</span>
              </Link>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  setIsCartOpen(true);
                }}
                className="flex items-center justify-center space-x-2 py-3 hover:text-[#A88B5A] transition-colors text-[#1D1D1B]"
              >
                <ShoppingBag className="w-4 h-4 text-[#A88B5A]" />
                <span>Bag ({totalItems})</span>
              </button>
            </div>

            {/* Main Collections Nav */}
            <div className="px-6 py-4">
              <p className="text-[10px] uppercase tracking-widest font-semibold text-[#A88B5A] mb-2">
                Collections
              </p>
              <nav className="space-y-1">
                {[
                  { label: "New In", href: "/new-in", badge: "Fresh" },
                  { label: "Printed", href: "/printed" },
                  { label: "Solids", href: "/solids" },
                  { label: "Unstitched", href: "/unstitched" },
                  { label: "Exclusive", href: "/exclusive" },
                  { label: "Accessories", href: "/accessories" },
                  { label: "Sale", href: "/sale", isSale: true },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="flex items-center justify-between py-2.5 text-sm uppercase tracking-wider font-medium text-[#1D1D1B] hover:text-[#A88B5A] transition-colors border-b border-[#F0ECE4]"
                  >
                    <span className={item.isSale ? "text-red-700 font-semibold" : ""}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] bg-[#A88B5A] text-white px-2 py-0.5 uppercase tracking-wider">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Editorial & Brand Nav */}
            <div className="px-6 py-4 border-t border-[#E9E1D5]">
              <p className="text-[10px] uppercase tracking-widest font-semibold text-[#A88B5A] mb-2">
                The Brand
              </p>
              <nav className="space-y-2 text-xs uppercase tracking-wider text-[#6E6A64]">
                <Link
                  href="/about"
                  onClick={onClose}
                  className="block py-1 hover:text-[#1D1D1B] transition-colors"
                >
                  About Us & Craftsmanship
                </Link>
                <Link
                  href="/our-story"
                  onClick={onClose}
                  className="block py-1 hover:text-[#1D1D1B] transition-colors"
                >
                  Our Story & Heritage Timeline
                </Link>
                <Link
                  href="/foundation"
                  onClick={onClose}
                  className="flex items-center justify-between py-1 text-[#A88B5A] font-semibold hover:text-[#1D1D1B] transition-colors"
                >
                  <span>Cultural Human Foundation</span>
                  <Sparkles className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/style-edit"
                  onClick={onClose}
                  className="block py-1 hover:text-[#1D1D1B] transition-colors"
                >
                  The Style Edit (Lookbook)
                </Link>
                <Link
                  href="/blog"
                  onClick={onClose}
                  className="block py-1 hover:text-[#1D1D1B] transition-colors"
                >
                  Cultural Journal
                </Link>
              </nav>
            </div>
          </div>

          {/* Footer Contact */}
          <div className="p-6 bg-[#F0ECE4] border-t border-[#E9E1D5] space-y-3">
            <Link
              href="/stores"
              onClick={onClose}
              className="flex items-center space-x-2 text-xs text-[#1D1D1B] hover:text-[#A88B5A]"
            >
              <MapPin className="w-4 h-4 text-[#A88B5A]" />
              <span>Lahore Flagship Store: Iqbal Town</span>
            </Link>
            <a
              href="tel:+923124644046"
              className="flex items-center space-x-2 text-xs text-[#1D1D1B] hover:text-[#A88B5A]"
            >
              <Phone className="w-4 h-4 text-[#A88B5A]" />
              <span>+92 312 4644046</span>
            </a>
            <div className="pt-2 text-[10px] text-[#6E6A64]">
              Founded in 2019 • Lahore, Pakistan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
