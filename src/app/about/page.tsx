import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Scissors, HeartHandshake, Sparkles } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us — Philosophy & Atelier Craftsmanship",
  description: "Learn about Cultural Fusion's heritage, in-house production atelier in Lahore, and commitment to accessible luxury fashion since 2019.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "About Us" }]} />

        {/* Hero Section */}
        <div className="border-b border-[#E9E1D5] pb-12 pt-6 mb-16 text-center max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#A88B5A] font-semibold block mb-3">
            Who We Are
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] leading-tight mb-6">
            Rooted in Tradition. Designed for Today.
          </h1>
          <p className="text-sm sm:text-base text-[#6E6A64] font-light leading-relaxed">
            Cultural Fusion is a Pakistani women&apos;s fashion brand founded in 2019 in Lahore. We unite ancient artisanal textile traditions with modern silhouettes tailored for the contemporary wardrobe.
          </p>
        </div>

        {/* Section 1: Philosophy & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 relative aspect-[4/5] bg-[#E9E1D5] overflow-hidden border border-[#E0D8CC]">
            <Image
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80"
              alt="Cultural Fusion Craftsmanship"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] leading-tight">
              Wearable Elegance Without Compromise
            </h2>

            <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
              We believe great fashion should feel as effortless to wear as it is breathtaking to admire. In a market often divided between disposable fast-fashion and inaccessible couture, Cultural Fusion carves a space for thoughtful, long-lasting clothing.
            </p>

            <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
              Each piece is created to serve women across their diverse daily roles—from demanding workspaces and spontaneous family dinners to festive celebrations where tradition takes center stage.
            </p>

            <div className="pt-2">
              <Link
                href="/our-story"
                className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A] transition-colors"
              >
                <span>Discover our timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Section 2: Craftsmanship & In-House Production */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 lg:flex-row-reverse">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold">
              <Scissors className="w-3.5 h-3.5" />
              <span>Craftsmanship & Production</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] leading-tight">
              In-House Production in Lahore
            </h2>

            <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
              What began with two sewing machines has evolved into a dedicated in-house stitching and quality control facility in Lahore. By keeping our garment construction internal rather than outsourcing to random contractors, we maintain strict oversight on seam integrity, lining comfort, and authentic needlework.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-[#FAF8F5] border border-[#E9E1D5]">
                <h3 className="font-serif text-base font-semibold text-[#1D1D1B] mb-1">Authentic Fabrics</h3>
                <p className="text-xs text-[#6E6A64]">Hand-picked pure lawn, seasonal khaddar, raw silk karandi, and rich velvet.</p>
              </div>
              <div className="p-4 bg-[#FAF8F5] border border-[#E9E1D5]">
                <h3 className="font-serif text-base font-semibold text-[#1D1D1B] mb-1">Precision Fit</h3>
                <p className="text-xs text-[#6E6A64]">Flattering Asian cuts engineered with comfortable ease and durable seam finishes.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 relative aspect-[4/5] bg-[#E9E1D5] overflow-hidden border border-[#E0D8CC]">
            <Image
              src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1200&q=80"
              alt="Cultural Fusion Fabric Details"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Section 3: Fashion With Purpose */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-8 sm:p-12 text-center max-w-4xl mx-auto mb-16 shadow-xs">
          <HeartHandshake className="w-10 h-10 text-[#A88B5A] mx-auto mb-4" />
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold block mb-2">
            Fashion With Purpose
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1D1D1B] mb-4">
            Contributing to the Cultural Human Foundation
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6A64] max-w-2xl mx-auto leading-relaxed mb-6 font-light">
            Cultural Fusion states that 5% of every purchase contributes toward the Cultural Human Foundation. We believe aesthetic creation must walk hand-in-hand with community welfare and social responsibility.
          </p>
          <Link
            href="/foundation"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors"
          >
            <span>Learn About The Foundation</span>
            <Sparkles className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
