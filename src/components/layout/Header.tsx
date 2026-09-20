"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { SearchModal } from "./SearchModal";
import { MobileNav } from "./MobileNav";

const NAV_LINKS = [
  { label: "New In", href: "/new-in", isHighlighted: false },
  { label: "Printed", href: "/printed" },
  { label: "Solids", href: "/solids" },
  { label: "Unstitched", href: "/unstitched" },
  { label: "Exclusive", href: "/exclusive" },
  { label: "Accessories", href: "/accessories" },
  { label: "Sale", href: "/sale", isSale: true },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const { totalItems, setIsCartOpen } = useCart();
  const { totalWishlistItems } = useWishlist();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "header-glass border-b border-[#E9E1D5] shadow-sm py-3"
            : "bg-[#F8F5EF] border-b border-[#E9E1D5] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(true)}
                className="p-1.5 text-[#1D1D1B] hover:text-[#A88B5A] transition-colors"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="p-1.5 ml-2 text-[#1D1D1B] hover:text-[#A88B5A] transition-colors"
                aria-label="Open search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex flex-col items-center justify-center text-center">
              <Link href="/" className="group">
                <span className="font-serif text-xl sm:text-2xl lg:text-3xl tracking-[0.2em] font-bold text-[#1D1D1B] group-hover:text-[#A88B5A] transition-colors uppercase block">
                  Cultural Fusion
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#6E6A64] block -mt-1 font-medium">
                  Lahore • Est. 2019
                </span>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-xs uppercase tracking-widest font-medium py-1 transition-colors ${
                      link.isSale
                        ? "text-red-700 hover:text-red-900 font-semibold"
                        : isActive
                        ? "text-[#A88B5A]"
                        : "text-[#1D1D1B] hover:text-[#A88B5A]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#A88B5A]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Header Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Search trigger on desktop */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="hidden lg:flex items-center space-x-1.5 p-1.5 text-[#1D1D1B] hover:text-[#A88B5A] transition-colors text-xs tracking-wider"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
                <span className="text-xs uppercase text-[#6E6A64]">Search</span>
              </button>

              {/* Wishlist Link */}
              <Link
                href="/wishlist"
                className="relative p-1.5 text-[#1D1D1B] hover:text-[#A88B5A] transition-colors"
                aria-label={`View wishlist with ${totalWishlistItems} items`}
              >
                <Heart className="w-5 h-5" />
                {totalWishlistItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#A88B5A] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalWishlistItems}
                  </span>
                )}
              </Link>

              {/* Cart Drawer Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative p-1.5 text-[#1D1D1B] hover:text-[#A88B5A] transition-colors flex items-center space-x-1"
                aria-label={`Open shopping bag with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#1D1D1B] text-[#F8F5EF] text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
