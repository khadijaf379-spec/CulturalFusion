import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Compass } from "lucide-react";
import { STYLE_EDITS } from "@/data/style-edit";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "The Style Edit — Fashion Magazine & Lookbook",
  description: "Explore Cultural Fusion's seasonal editorial lookbook, styling inspirations, and curated ensembles.",
};

export default function StyleEditPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Editorial", href: "/style-edit" }, { label: "The Style Edit" }]} />

        {/* Magazine Cover Header */}
        <div className="border-b border-[#E9E1D5] pb-12 pt-6 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Volume IV • Autumn / Festive 2026</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] leading-tight mb-4">
            The Style Edit
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
            Curated styling inspiration, textile pairings, and verified featured looks from our creative studio.
          </p>
        </div>

        {/* Editorial Lookbook Cards */}
        <div className="space-y-16 sm:space-y-24 mb-24">
          {STYLE_EDITS.map((look, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={look.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Large Editorial Portrait */}
                <div
                  className={`lg:col-span-6 relative aspect-[3/4] bg-[#E9E1D5] overflow-hidden border border-[#E0D8CC] ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  {look.featuredPersonality && (
                    <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-xs text-[#F8F5EF] text-xs uppercase tracking-widest px-3 py-1.5 border border-white/20">
                      Editorial Feature • {look.featuredPersonality}
                    </div>
                  )}
                </div>

                {/* Editorial Notes */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold block">
                    Look 0{idx + 1}
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] leading-tight">
                    {look.title}
                  </h2>

                  <p className="text-sm font-medium text-[#1D1D1B] italic">
                    &ldquo;{look.subtitle}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
                    {look.lookDescription}
                  </p>

                  {/* Styling Guide Box */}
                  <div className="p-5 bg-[#FAF8F5] border border-[#E9E1D5] space-y-3">
                    <div className="flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#1D1D1B]">
                      <Compass className="w-3.5 h-3.5 text-[#A88B5A]" />
                      <span>Stylist&apos;s Advice:</span>
                    </div>
                    <p className="text-xs text-[#6E6A64] leading-relaxed">
                      {look.stylingTips}
                    </p>
                    <div className="pt-2 border-t border-[#E9E1D5] text-[11px] text-[#A88B5A] font-semibold">
                      Key Pieces: {look.keyPieces.join(" + ")}
                    </div>
                  </div>

                  <div>
                    <Link
                      href="/new-in"
                      className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors"
                    >
                      <span>Shop The Aesthetic</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
