import React from "react";
import Link from "next/link";
import { Sparkles, Truck } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-[#1D1D1B] text-[#F8F5EF] text-[11px] sm:text-xs tracking-widest uppercase font-medium py-2 px-4 border-b border-[#2D2D2B]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-2 text-[#C5A875]">
          <Truck className="w-3.5 h-3.5" />
          <span>Lahore 1-Day Delivery Available</span>
        </div>

        <div className="mx-auto flex items-center space-x-2 text-center">
          <Sparkles className="w-3 h-3 text-[#A88B5A] hidden sm:inline" />
          <span>
            Complimentary Nationwide Shipping On Orders Above Rs. 4,000
          </span>
          <Link
            href="/shipping"
            className="underline underline-offset-4 hover:text-[#C5A875] transition-colors ml-1"
          >
            Details
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4 text-[11px] text-[#A88B5A]">
          <Link href="/stores" className="hover:text-white transition-colors">
            Lahore Flagship
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:text-white transition-colors">
            Support
          </Link>
        </div>
      </div>
    </div>
  );
}
