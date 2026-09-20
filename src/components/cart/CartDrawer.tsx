"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    freeShippingThreshold,
    shippingFee,
    total,
    totalItems,
  } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isCartOpen]);

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E9E1D5] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#E9E1D5] bg-[#F8F5EF]">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-[#A88B5A]" />
              <h2 className="text-base uppercase tracking-widest font-serif font-semibold text-[#1D1D1B]">
                Your Bag ({totalItems})
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#6E6A64] hover:text-[#1D1D1B] transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free shipping progress bar */}
          <div className="px-6 py-3.5 bg-[#F0ECE4] border-b border-[#E9E1D5] text-xs">
            {amountNeededForFreeShipping > 0 ? (
              <p className="text-[#6E6A64]">
                Add <span className="font-semibold text-[#1D1D1B]">{formatPrice(amountNeededForFreeShipping)}</span> more for <span className="text-[#A88B5A] font-semibold">Free Nationwide Shipping</span>
              </p>
            ) : (
              <p className="text-[#A88B5A] font-semibold flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>You qualify for Free Nationwide Shipping!</span>
              </p>
            )}
            <div className="w-full bg-[#E5DFD5] h-1.5 mt-2 rounded-full overflow-hidden">
              <div
                className="bg-[#A88B5A] h-full transition-all duration-300 ease-out"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#E9E1D5]">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#E9E1D5] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-[#A88B5A]" />
                </div>
                <h3 className="font-serif text-lg text-[#1D1D1B] mb-1">
                  Your shopping bag is empty
                </h3>
                <p className="text-xs text-[#6E6A64] max-w-xs mb-6">
                  Explore our latest unstitched lawns, stitched solids, and luxury festive edits.
                </p>
                <Link
                  href="/new-in"
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest hover:bg-[#A88B5A] transition-colors"
                >
                  Discover New Arrivals
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="py-4 flex space-x-4 items-start"
                >
                  <div className="relative w-20 h-26 bg-[#E9E1D5] shrink-0 overflow-hidden">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-xs font-semibold text-[#1D1D1B] line-clamp-1">
                          {item.product.name}
                        </h4>
                        <p className="text-[11px] text-[#6E6A64] mt-0.5">
                          Size: <span className="font-medium text-[#1D1D1B]">{item.selectedSize}</span>
                        </p>
                        <p className="text-[11px] text-[#A88B5A]">
                          {item.product.fabric}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                        className="text-[#6E6A64] hover:text-red-600 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity stepper */}
                      <div className="flex items-center border border-[#D9D2C7] bg-[#F8F5EF]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                          className="p-1.5 text-[#6E6A64] hover:text-[#1D1D1B]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-medium text-[#1D1D1B]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                          className="p-1.5 text-[#6E6A64] hover:text-[#1D1D1B]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <span className="text-xs font-bold text-[#1D1D1B]">
                          {formatPrice((item.product.salePrice ?? item.product.price) * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with totals & checkout */}
          {cart.length > 0 && (
            <div className="border-t border-[#E9E1D5] bg-[#F8F5EF] p-6 space-y-3">
              <div className="flex justify-between text-xs text-[#6E6A64]">
                <span>Subtotal</span>
                <span className="font-medium text-[#1D1D1B]">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-xs text-[#6E6A64]">
                <span>Estimated Shipping</span>
                <span>
                  {shippingFee === 0 ? (
                    <span className="text-[#A88B5A] font-semibold">FREE</span>
                  ) : (
                    formatPrice(shippingFee)
                  )}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#1D1D1B] pt-2 border-t border-[#E9E1D5]">
                <span>Estimated Total</span>
                <span>{formatPrice(total)}</span>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center py-3 border border-[#1D1D1B] text-[#1D1D1B] text-xs uppercase tracking-widest font-medium hover:bg-[#1D1D1B] hover:text-[#F8F5EF] transition-colors"
                >
                  View Bag
                </Link>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center py-3 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-medium hover:bg-[#A88B5A] transition-colors flex items-center justify-center space-x-1"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <p className="text-[11px] text-center text-[#6E6A64] pt-1">
                Taxes calculated at checkout • 10-day exchange guarantee
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
