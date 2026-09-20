"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Truck, ArrowRight, PackageCheck, Mail, MapPin } from "lucide-react";
import confetti from "canvas-confetti";
import { formatPrice } from "@/lib/utils";

type StoredOrder = {
  orderId: string;
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
  };
  items: {
    name: string;
    size: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  subtotal: number;
  shippingFee: number;
  total: number;
  paymentMethod: string;
  estimatedDelivery: string;
  createdAt: string;
};

export default function CheckoutSuccessPage() {
  const [order, setOrder] = useState<StoredOrder | null>(null);

  useEffect(() => {
    // Fire celebratory confetti on mount
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#A88B5A", "#1D1D1B", "#C5A875", "#F8F5EF"],
      });
    } catch (e) {
      console.error(e);
    }

    try {
      const stored = sessionStorage.getItem("cf_last_order");
      if (stored) {
        setOrder(JSON.parse(stored));
      } else {
        // Fallback demo order if visited directly
        setOrder({
          orderId: "CF-2026-48291",
          customer: {
            fullName: "Valued Patron",
            email: "patron@culturalfusion.pk",
            phone: "+92 312 4644046",
            address: "80 Sabzi Mandi, Wahdat Road, Iqbal Town",
            city: "Lahore",
          },
          items: [
            {
              name: "Noor Printed Lawn Set",
              size: "M",
              quantity: 1,
              price: 6490,
              image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
            },
          ],
          subtotal: 6490,
          shippingFee: 0,
          total: 6490,
          paymentMethod: "Cash on Delivery",
          estimatedDelivery: "Within 1 Working Day",
          createdAt: new Date().toISOString(),
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  if (!order) return null;

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-12 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-10 text-center mb-8 shadow-xs">
          <div className="w-16 h-16 bg-[#E9E1D5] rounded-full flex items-center justify-center mx-auto mb-4 text-[#A88B5A]">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <span className="text-xs uppercase tracking-[0.25em] text-[#A88B5A] font-semibold block mb-2">
            Order Confirmed
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] mb-2">
            Thank You For Your Order
          </h1>

          <p className="text-xs sm:text-sm text-[#6E6A64] max-w-md mx-auto mb-6 leading-relaxed">
            Your booking has been received by our Lahore atelier. A confirmation receipt has been dispatched to{" "}
            <strong className="text-[#1D1D1B]">{order.customer.email}</strong>.
          </p>

          <div className="inline-block bg-[#F0ECE4] border border-[#E0D8CC] px-5 py-2.5 text-xs text-[#1D1D1B] font-medium tracking-wide">
            Order Reference: <strong className="font-bold tracking-wider">{order.orderId}</strong>
          </div>
        </div>

        {/* Order Details & Summary Card */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-8 space-y-6">
          <div className="flex items-center space-x-2 pb-4 border-b border-[#E9E1D5]">
            <PackageCheck className="w-5 h-5 text-[#A88B5A]" />
            <h2 className="font-serif text-xl font-normal text-[#1D1D1B]">
              Order Summary & Details
            </h2>
          </div>

          {/* Delivery & Timeline Notice */}
          <div className="p-4 bg-[#F8F5EF] border border-[#E9E1D5] flex items-start space-x-3 text-xs text-[#6E6A64]">
            <Truck className="w-5 h-5 text-[#A88B5A] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#1D1D1B]">
                Estimated Delivery: {order.estimatedDelivery}
              </p>
              <p className="mt-0.5">
                Our logistics partners will contact you at <strong className="text-[#1D1D1B]">{order.customer.phone}</strong> prior to delivery.
              </p>
            </div>
          </div>

          {/* Purchased Items */}
          <div className="divide-y divide-[#E9E1D5]">
            {order.items.map((item, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-16 bg-[#E9E1D5] shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#1D1D1B]">{item.name}</h3>
                    <p className="text-[11px] text-[#6E6A64]">
                      Size: {item.size} • Qty: {item.quantity}
                    </p>
                  </div>
                </div>
                <span className="font-serif text-xs sm:text-sm font-semibold text-[#1D1D1B]">
                  {formatPrice(item.price)}
                </span>
              </div>
            ))}
          </div>

          {/* Customer Delivery info recap */}
          <div className="pt-4 border-t border-[#E9E1D5] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#6E6A64]">
            <div>
              <div className="flex items-center space-x-1 font-semibold text-[#1D1D1B] mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#A88B5A]" />
                <span>Shipping Address</span>
              </div>
              <p>{order.customer.fullName}</p>
              <p>{order.customer.address}</p>
              <p>{order.customer.city}, Pakistan</p>
            </div>

            <div>
              <div className="flex items-center space-x-1 font-semibold text-[#1D1D1B] mb-1">
                <Mail className="w-3.5 h-3.5 text-[#A88B5A]" />
                <span>Payment & Contact</span>
              </div>
              <p>Method: <strong className="text-[#1D1D1B]">{order.paymentMethod}</strong></p>
              <p>Phone: {order.customer.phone}</p>
              <p>Email: {order.customer.email}</p>
            </div>
          </div>

          {/* Final Financial Totals */}
          <div className="pt-4 border-t border-[#E9E1D5] space-y-1.5 text-xs text-[#6E6A64]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-medium text-[#1D1D1B]">{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>{order.shippingFee === 0 ? "FREE" : formatPrice(order.shippingFee)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-[#1D1D1B] pt-2 border-t border-[#E9E1D5]">
              <span>Amount Due Upon Delivery</span>
              <span className="font-serif text-lg text-[#A88B5A]">{formatPrice(order.total)}</span>
            </div>
          </div>

          {/* Continue button */}
          <div className="pt-4 text-center">
            <Link
              href="/"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
