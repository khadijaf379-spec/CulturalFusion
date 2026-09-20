import React from "react";
import Link from "next/link";
import { ArrowRight, HeartHandshake } from "lucide-react";

export function FoundationBanner() {
  return (
    <section className="py-20 bg-[#F0ECE4] border-t border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-[#A88B5A] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <HeartHandshake className="w-4 h-4" />
            <span>Fashion With Purpose</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1D1D1B] leading-tight mb-6">
            Every Purchase Carries A Purpose
          </h2>

          <p className="text-sm sm:text-base text-[#6E6A64] font-light leading-relaxed mb-6">
            Cultural Fusion states that <strong className="font-semibold text-[#1D1D1B]">5% of every sale</strong> is contributed toward the <strong className="font-semibold text-[#1D1D1B]">Cultural Human Foundation</strong>. We believe in thoughtful design that honours both our artisanal heritage and social responsibility.
          </p>

          <div className="p-4 bg-[#FAF8F5] border border-[#E0D8CC] inline-block mb-8 text-xs text-[#6E6A64] tracking-wide">
            <span className="text-[#A88B5A] font-semibold">5% Contribution</span> • Transparent Social Commitment • Lahore, Pakistan
          </div>

          <div>
            <Link
              href="/foundation"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors"
            >
              <span>Discover Our Foundation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
