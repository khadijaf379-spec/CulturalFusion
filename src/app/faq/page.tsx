"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, Sparkles } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

const FAQ_ITEMS = [
  {
    q: "How long does nationwide delivery take?",
    a: "Orders for Lahore addresses are typically delivered within 1 working day. For other major cities across Pakistan (Karachi, Islamabad, Rawalpindi, Faisalabad, Peshawar, Multan, etc.), delivery takes 2 to 4 working days.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash on Delivery (COD) across Pakistan, as well as Visa, Mastercard, and PayPak cards. Online card transactions are processed securely through certified banking channels.",
  },
  {
    q: "Do you offer Cash on Delivery (COD)?",
    a: "Yes! Cash on Delivery is available for all stitched, unstitched, and accessory orders across all cities, towns, and postal areas in Pakistan.",
  },
  {
    q: "How can I track my order?",
    a: "As soon as your order is dispatched from our Lahore atelier, you will receive an SMS and email notification containing your unique courier tracking number and real-time tracking link.",
  },
  {
    q: "What is your return and exchange policy?",
    a: "We offer a 10-day exchange policy on all unworn items with original tags and packaging intact. Unstitched suits must remain uncut. You can initiate an exchange online or visit our Lahore store.",
  },
  {
    q: "What sizes are available in ready-to-wear pret?",
    a: "Our standard pret collection spans XS, S, M, L, XL, and XXL. Handcrafted Punjabi khussas are available in sizes 36 through 40. Please consult our Size Guide for detailed bust, waist, and length measurements.",
  },
  {
    q: "Do you ship internationally outside Pakistan?",
    a: "Yes, international orders can be placed through our international portal (culturalfusion.com.pk) or by contacting our dedicated international support desk on WhatsApp at +92 325 7864046.",
  },
  {
    q: "How can I contact Cultural Fusion customer support?",
    a: "Our customer care team is available 24/7. You can reach us by phone at +92 312 4644046, via email at contact@culturalfusion.pk, or by visiting our flagship store at 80 Sabzi Mandi, Wahdat Road, Iqbal Town, Lahore.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Client Care", href: "/faq" }, { label: "FAQ" }]} />

        {/* Header */}
        <div className="border-b border-[#E9E1D5] pb-10 pt-4 mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help Center</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
            Find immediate answers to questions regarding ordering, sizing, nationwide shipping, and exchanges.
          </p>
        </div>

        {/* Accordion List */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] divide-y divide-[#E9E1D5] shadow-xs mb-16">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="p-5 sm:p-6 transition-colors hover:bg-[#F0ECE4]/30">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-[#1D1D1B] group-hover:text-[#A88B5A] transition-colors pr-4">
                    {item.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#E9E1D5] flex items-center justify-center shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#A88B5A] text-white" : "text-[#1D1D1B]"}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-4 text-xs sm:text-sm text-[#6E6A64] leading-relaxed animate-in fade-in duration-200">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-8 text-center max-w-xl mx-auto mb-16 shadow-xs">
          <Sparkles className="w-6 h-6 text-[#A88B5A] mx-auto mb-3" />
          <h3 className="font-serif text-xl font-normal text-[#1D1D1B] mb-2">
            Still Have Questions?
          </h3>
          <p className="text-xs text-[#6E6A64] mb-6 leading-relaxed">
            Our atelier support specialists are available around the clock to assist you with order placements, measurements, and fabric inquiries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors"
            >
              Contact Support
            </Link>
            <a
              href="tel:+923124644046"
              className="px-6 py-2.5 bg-transparent border border-[#1D1D1B] text-[#1D1D1B] text-xs uppercase tracking-widest font-semibold hover:bg-[#1D1D1B] hover:text-[#F8F5EF] transition-colors"
            >
              Call +92 312 4644046
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
