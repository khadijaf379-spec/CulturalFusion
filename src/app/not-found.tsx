import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#F8F5EF] min-h-[75vh] flex items-center justify-center py-20">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-[#E9E1D5] flex items-center justify-center mx-auto mb-6 text-[#A88B5A]">
          <Compass className="w-8 h-8" />
        </div>

        <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold block mb-2">
          Error 404
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] mb-3">
          Page Not Found
        </h1>

        <p className="text-xs sm:text-sm text-[#6E6A64] mb-8 leading-relaxed">
          The page or collection you are looking for may have moved or is temporarily unavailable.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors flex items-center justify-center space-x-2"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/new-in"
            className="w-full sm:w-auto px-6 py-3 bg-transparent border border-[#1D1D1B] text-[#1D1D1B] text-xs uppercase tracking-widest font-semibold hover:bg-[#1D1D1B] hover:text-[#F8F5EF] transition-colors flex items-center justify-center space-x-2"
          >
            <span>Explore New In</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
