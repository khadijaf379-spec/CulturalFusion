import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function EditorialBanner() {
  return (
    <section className="relative py-28 bg-[#1D1D1B] text-[#F8F5EF] overflow-hidden">
      {/* Editorial Split Background */}
      <div className="absolute inset-0 opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=2000&q=80"
          alt="Pakistani Textile Craftsmanship"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1B] via-[#1D1D1B]/85 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#C5A875] font-semibold block mb-3">
            Editorial Campaign
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal leading-tight mb-6">
            A Modern Expression of Heritage
          </h2>
          <p className="text-sm sm:text-base text-[#E9E1D5] font-light leading-relaxed mb-8">
            Thoughtfully designed silhouettes, rich textures, and timeless Pakistani craftsmanship come together for the modern wardrobe. Every motif tells a story of ancient looms and contemporary grace.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/exclusive"
              className="px-8 py-4 bg-[#A88B5A] text-[#1D1D1B] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A875] transition-colors flex items-center space-x-2"
            >
              <span>Discover The Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/our-story"
              className="px-8 py-4 bg-transparent border border-[#F8F5EF]/60 text-[#F8F5EF] text-xs uppercase tracking-widest font-medium hover:bg-white/10 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
