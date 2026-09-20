"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Truck, Sparkles, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { formatPrice } from "@/lib/utils";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    subtotal,
    freeShippingThreshold,
    shippingFee,
    total,
    totalItems,
  } = useCart();

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (cart.length === 0) {
    return (
      <div className="bg-[#F8F5EF] min-h-[70vh] py-16 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <div className="w-20 h-20 rounded-full bg-[#E9E1D5] flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-10 h-10 text-[#A88B5A]" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#1D1D1B] mb-2">
            Your Bag is Empty
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] mb-8 leading-relaxed">
            You haven&apos;t added any pieces to your shopping bag yet. Explore our latest arrivals or seasonal collections.
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
        <Breadcrumb items={[{ label: "Shopping Bag" }]} />

        <div className="border-b border-[#E9E1D5] pb-6 mb-8">
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] tracking-tight">
            Shopping Bag ({totalItems})
          </h1>
        </div>

        {/* Free shipping banner */}
        <div className="mb-8 p-4 bg-[#FAF8F5] border border-[#E9E1D5] max-w-4xl">
          <div className="flex items-center justify-between text-xs mb-2">
            {amountNeededForFreeShipping > 0 ? (
              <span className="text-[#6E6A64]">
                Add <strong className="text-[#1D1D1B]">{formatPrice(amountNeededForFreeShipping)}</strong> more to qualify for <strong className="text-[#A88B5A]">Free Nationwide Shipping</strong>
              </span>
            ) : (
              <span className="text-[#A88B5A] font-semibold flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4" />
                <span>You qualify for Free Nationwide Shipping!</span>
              </span>
            )}
            <span className="text-[11px] font-semibold text-[#1D1D1B]">
              {Math.round(freeShippingProgress)}%
            </span>
          </div>
          <div className="w-full bg-[#E5DFD5] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#A88B5A] h-full transition-all duration-300 ease-out"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Table / Items */}
          <div className="lg:col-span-8">
            <div className="bg-[#FAF8F5] border border-[#E9E1D5] divide-y divide-[#E9E1D5]">
              {cart.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-20 h-28 bg-[#E9E1D5] shrink-0 overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#A88B5A] font-semibold">
                        {item.product.fabric}
                      </span>
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="block font-serif text-base text-[#1D1D1B] hover:text-[#A88B5A] transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-[#6E6A64] mt-1">
                        Size: <span className="font-medium text-[#1D1D1B]">{item.selectedSize}</span>
                      </p>
                      <p className="text-xs font-semibold text-[#1D1D1B] mt-1 sm:hidden">
                        {formatPrice(item.product.salePrice ?? item.product.price)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto sm:space-x-8">
                    {/* Quantity */}
                    <div className="flex items-center border border-[#D9D2C7] bg-[#F8F5EF]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                        className="p-2 text-[#6E6A64] hover:text-[#1D1D1B]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-3 text-xs font-semibold text-[#1D1D1B]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                        className="p-2 text-[#6E6A64] hover:text-[#1D1D1B]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Total for item */}
                    <div className="text-right min-w-[100px]">
                      <span className="font-serif text-base font-semibold text-[#1D1D1B]">
                        {formatPrice((item.product.salePrice ?? item.product.price) * item.quantity)}
                      </span>
                    </div>

                    {/* Remove button */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                      className="text-[#6E6A64] hover:text-red-600 transition-colors p-1.5"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <Link
                href="/new-in"
                className="text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A] transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-4">
            <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 shadow-xs space-y-4 sticky top-28">
              <h2 className="font-serif text-xl font-normal text-[#1D1D1B] pb-3 border-b border-[#E9E1D5]">
                Order Summary
              </h2>

              <div className="space-y-2 text-xs text-[#6E6A64]">
                <div className="flex justify-between">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-medium text-[#1D1D1B]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-[#A88B5A] font-semibold">FREE</span>
                    ) : (
                      formatPrice(shippingFee)
                    )}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E9E1D5] flex justify-between items-baseline">
                <span className="font-serif text-base font-semibold text-[#1D1D1B]">Total</span>
                <span className="font-serif text-2xl font-bold text-[#1D1D1B]">
                  {formatPrice(total)}
                </span>
              </div>

              <div className="pt-2">
                <Link
                  href="/checkout"
                  className="w-full py-4 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors flex items-center justify-center space-x-2 text-center shadow-sm"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-4 border-t border-[#E9E1D5] space-y-2 text-[11px] text-[#6E6A64]">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-[#A88B5A] shrink-0" />
                  <span>Lahore: 1 working day | Nationwide: 2-4 days</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#A88B5A] shrink-0" />
                  <span>10-day exchange policy on unworn items</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
