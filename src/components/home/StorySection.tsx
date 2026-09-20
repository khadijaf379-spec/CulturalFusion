import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Compass } from "lucide-react";

export function StorySection() {
  return (
    <section className="py-24 bg-[#F8F5EF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Imagery Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none overflow-hidden bg-[#E9E1D5] border border-[#E0D8CC]">
              <Image
                src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80"
                alt="Cultural Fusion In-House Production in Lahore"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Overlapping small badge box */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#1D1D1B] text-[#F8F5EF] p-6 shadow-xl max-w-xs border border-[#3D3A35] hidden sm:block">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A875] font-semibold block mb-1">
                Founded 2019
              </span>
              <p className="font-serif text-base italic leading-snug">
                &ldquo;Where Pakistani heritage meets contemporary everyday elegance.&rdquo;
              </p>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Rooted in Culture</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1D1D1B] leading-tight">
              From Humble Stitches to Modern In-House Production
            </h2>

            <p className="text-sm sm:text-base text-[#6E6A64] font-light leading-relaxed">
              Founded in 2019 by Islam Shahid in Lahore, Cultural Fusion began as a modest home-based stitching operation with just two sewing machines. Driven by a deep appreciation for Pakistani textiles and wearable modern cuts, the brand expanded into a comprehensive in-house manufacturing atelier.
            </p>

            <p className="text-sm sm:text-base text-[#6E6A64] font-light leading-relaxed">
              Every garment reflects our commitment to long-term wardrobe value: breathable lawn, rich winter khaddars, hand-embroidered tilla details, and silhouettes engineered for the multifaceted lives of modern women.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/our-story"
                className="px-6 py-3.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors flex items-center space-x-2"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/about"
                className="px-6 py-3.5 bg-transparent border border-[#1D1D1B] text-[#1D1D1B] text-xs uppercase tracking-widest font-semibold hover:bg-[#1D1D1B] hover:text-[#F8F5EF] transition-colors"
              >
                Atelier Craftsmanship
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
