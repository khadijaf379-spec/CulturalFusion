"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ShieldCheck, Truck, CreditCard, Banknote, ArrowRight, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { formatPrice } from "@/lib/utils";

const checkoutSchema = z.object({
  fullName: z.string().min(3, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid Pakistani phone number (e.g. 0312 4644046)"),
  address: z.string().min(8, "Please enter complete street address"),
  city: z.string().min(2, "Please select or enter your city"),
  postalCode: z.string().optional(),
  paymentMethod: z.enum(["cod", "card"]),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
  orderNotes: z.string().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

const PAKISTANI_CITIES = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Quetta",
  "Sialkot",
  "Gujranwala",
  "Sargodha",
  "Bahawalpur",
  "Abbottabad",
  "Other City",
];

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, subtotal, shippingFee, total, totalItems, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "cod",
      city: "Lahore",
    },
  });

  const selectedPaymentMethod = watch("paymentMethod");

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);

    // Generate realistic demo order ID
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `CF-2026-${randomNum}`;

    const orderData = {
      orderId,
      customer: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        address: data.address,
        city: data.city,
      },
      items: cart.map((item) => ({
        name: item.product.name,
        size: item.selectedSize,
        quantity: item.quantity,
        price: (item.product.salePrice ?? item.product.price) * item.quantity,
        image: item.product.images[0],
      })),
      subtotal,
      shippingFee,
      total,
      paymentMethod: data.paymentMethod === "cod" ? "Cash on Delivery" : "Demo Credit Card",
      estimatedDelivery: data.city.toLowerCase() === "lahore" ? "Within 1 Working Day" : "2 to 4 Working Days",
      createdAt: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem("cf_last_order", JSON.stringify(orderData));
    } catch (e) {
      console.error(e);
    }

    // Clear cart and route to success screen
    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      router.push("/checkout/success");
    }, 600);
  };

  if (cart.length === 0) {
    return (
      <div className="bg-[#F8F5EF] min-h-[70vh] py-16 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center px-4">
          <h1 className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] mb-3">
            Your Bag is Empty
          </h1>
          <p className="text-xs text-[#6E6A64] mb-6">
            Please add pieces to your bag before proceeding to checkout.
          </p>
          <Link
            href="/new-in"
            className="px-6 py-3 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Bag", href: "/cart" }, { label: "Checkout" }]} />

        <div className="border-b border-[#E9E1D5] pb-4 mb-8">
          <h1 className="font-serif text-3xl font-normal text-[#1D1D1B]">
            Checkout & Delivery Details
          </h1>
          <p className="text-xs text-[#6E6A64] mt-1">
            Complete your order with secure delivery across Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Customer Contact */}
              <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 space-y-4">
                <h2 className="font-serif text-lg font-normal text-[#1D1D1B] pb-2 border-b border-[#E9E1D5]">
                  1. Contact Information
                </h2>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="e.g. Fatima Ali"
                    className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs sm:text-sm text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 mt-1">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="fatima@example.com"
                      className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs sm:text-sm text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="0312 4644046"
                      className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs sm:text-sm text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 space-y-4">
                <h2 className="font-serif text-lg font-normal text-[#1D1D1B] pb-2 border-b border-[#E9E1D5]">
                  2. Delivery Address
                </h2>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                    Street Address & House / Flat No. *
                  </label>
                  <input
                    type="text"
                    {...register("address")}
                    placeholder="e.g. House 80, Sector G, Street 4, Phase 5"
                    className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs sm:text-sm text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                  />
                  {errors.address && (
                    <p className="text-xs text-red-600 mt-1">{errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                      City *
                    </label>
                    <select
                      {...register("city")}
                      className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs sm:text-sm text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                    >
                      {PAKISTANI_CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c} {c === "Lahore" ? "(1-Day Delivery)" : ""}
                        </option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="text-xs text-red-600 mt-1">{errors.city.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                      Postal / ZIP Code (Optional)
                    </label>
                    <input
                      type="text"
                      {...register("postalCode")}
                      placeholder="54000"
                      className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs sm:text-sm text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                    Order Instructions / Special Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    {...register("orderNotes")}
                    placeholder="Any specific delivery instructions or gate code..."
                    className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2 text-xs sm:text-sm text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-[#E9E1D5]">
                  <h2 className="font-serif text-lg font-normal text-[#1D1D1B]">
                    3. Payment Method
                  </h2>
                  <span className="text-[11px] text-[#A88B5A] flex items-center space-x-1">
                    <Lock className="w-3 h-3" />
                    <span>Demo Secure Checkout</span>
                  </span>
                </div>

                <div className="space-y-3">
                  {/* COD */}
                  <label
                    className={`flex items-start space-x-3 p-4 border cursor-pointer transition-colors ${
                      selectedPaymentMethod === "cod"
                        ? "bg-[#F8F5EF] border-[#1D1D1B]"
                        : "bg-white border-[#E5DFD5]"
                    }`}
                  >
                    <input
                      type="radio"
                      value="cod"
                      {...register("paymentMethod")}
                      className="mt-1 w-4 h-4 accent-[#A88B5A]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1B]">
                          Cash on Delivery (COD)
                        </span>
                        <Banknote className="w-4 h-4 text-[#A88B5A]" />
                      </div>
                      <p className="text-xs text-[#6E6A64] mt-0.5">
                        Pay cash directly to the courier when receiving your parcel anywhere in Pakistan.
                      </p>
                    </div>
                  </label>

                  {/* Demo Card Payment */}
                  <label
                    className={`flex items-start space-x-3 p-4 border cursor-pointer transition-colors ${
                      selectedPaymentMethod === "card"
                        ? "bg-[#F8F5EF] border-[#1D1D1B]"
                        : "bg-white border-[#E5DFD5]"
                    }`}
                  >
                    <input
                      type="radio"
                      value="card"
                      {...register("paymentMethod")}
                      className="mt-1 w-4 h-4 accent-[#A88B5A]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-semibold text-[#1D1D1B]">
                          Credit / Debit Card (Portfolio Demo)
                        </span>
                        <div className="flex items-center space-x-1 text-[#A88B5A]">
                          <CreditCard className="w-4 h-4" />
                          <span className="text-[10px] font-bold">Visa / MC / PayPak</span>
                        </div>
                      </div>
                      <p className="text-xs text-[#6E6A64] mt-0.5">
                        Simulated card gateway for portfolio testing. No real card charge will be made.
                      </p>

                      {selectedPaymentMethod === "card" && (
                        <div className="mt-4 pt-4 border-t border-[#E9E1D5] space-y-3">
                          <input
                            type="text"
                            placeholder="Card Number (e.g. 4242 •••• •••• 4242)"
                            className="w-full bg-white border border-[#D9D2C7] px-3 py-2 text-xs text-[#1D1D1B]"
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-full bg-white border border-[#D9D2C7] px-3 py-2 text-xs text-[#1D1D1B]"
                            />
                            <input
                              type="text"
                              placeholder="CVC"
                              className="w-full bg-white border border-[#D9D2C7] px-3 py-2 text-xs text-[#1D1D1B]"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 shadow-md"
                >
                  {isSubmitting ? (
                    <span>Confirming Order...</span>
                  ) : (
                    <>
                      <span>Complete Order ({formatPrice(total)})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-[#6E6A64] mt-3">
                  By placing an order, you agree to Cultural Fusion&apos;s 10-day exchange and shipping terms.
                </p>
              </div>
            </form>
          </div>

          {/* Right: Sticky Order Summary */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 shadow-xs sticky top-28 space-y-6">
              <h2 className="font-serif text-xl font-normal text-[#1D1D1B] pb-3 border-b border-[#E9E1D5]">
                Order Summary ({totalItems})
              </h2>

              <div className="max-h-80 overflow-y-auto divide-y divide-[#E9E1D5] pr-1">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}`}
                    className="py-3 flex items-center space-x-3"
                  >
                    <div className="relative w-14 h-18 bg-[#E9E1D5] shrink-0 overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-semibold text-[#1D1D1B] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#6E6A64]">
                        Size: {item.selectedSize} • Qty: {item.quantity}
                      </p>
                      <p className="text-xs font-medium text-[#1D1D1B]">
                        {formatPrice((item.product.salePrice ?? item.product.price) * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E9E1D5] space-y-2 text-xs text-[#6E6A64]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1D1D1B]">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Nationwide Shipping</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-[#A88B5A] font-semibold">FREE</span>
                    ) : (
                      formatPrice(shippingFee)
                    )}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#1D1D1B] pt-2 border-t border-[#E9E1D5]">
                  <span>Total Payable</span>
                  <span className="font-serif text-xl font-bold">{formatPrice(total)}</span>
                </div>
              </div>

              <div className="p-4 bg-[#F0ECE4] border border-[#E0D8CC] text-[11px] text-[#6E6A64] space-y-2">
                <div className="flex items-center space-x-2">
                  <Truck className="w-4 h-4 text-[#A88B5A] shrink-0" />
                  <span>Lahore: 1 working day | Nationwide: 2-4 days</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#A88B5A] shrink-0" />
                  <span>5% of this order supports Cultural Human Foundation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
