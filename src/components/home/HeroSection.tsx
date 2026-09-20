import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1D1D1B]">
      {/* Background Editorial Image */}
      <Image
        src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=2000&q=85"
        alt="Cultural Fusion Editorial Collection"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-70 scale-100 transition-transform duration-1000 ease-out hover:scale-105"
      />

      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[#F8F5EF] py-24">
        <span className="inline-block text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A875] font-semibold mb-4 drop-shadow-sm">
          Autumn / Winter & Pret 2026
        </span>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.1] mb-6 drop-shadow-md">
          The Art of Everyday Elegance
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#E9E1D5] font-light max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide drop-shadow-sm">
          Rooted in tradition. Designed for today. Discover thoughtfully crafted silhouettes, rich textures, and timeless Pakistani craftsmanship.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/new-in"
            className="w-full sm:w-auto px-8 py-4 bg-[#F8F5EF] text-[#1D1D1B] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#A88B5A] hover:text-white transition-all shadow-lg flex items-center justify-center space-x-2"
          >
            <span>Shop New In</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/unstitched"
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#F8F5EF] text-[#F8F5EF] text-xs uppercase tracking-[0.2em] font-medium hover:bg-white/10 transition-all backdrop-blur-xs"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      {/* Subtle bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#E9E1D5] opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-[0.25em] mb-1">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-[#A88B5A] to-transparent" />
      </div>
    </section>
  );
}
