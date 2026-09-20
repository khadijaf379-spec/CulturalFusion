import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { STYLE_EDITS } from "@/data/style-edit";

export function StyleEditSection() {
  const featuredLooks = STYLE_EDITS.slice(0, 3);

  return (
    <section className="py-20 bg-[#FAF8F5] border-b border-[#E9E1D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Magazine Edition</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B]">
              The Style Edit
            </h2>
          </div>

          <Link
            href="/style-edit"
            className="mt-4 sm:mt-0 inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A] transition-colors group"
          >
            <span>View Full Lookbook</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredLooks.map((look) => (
            <div
              key={look.id}
              className="group bg-[#F8F5EF] border border-[#E9E1D5] overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E9E1D5]">
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {look.featuredPersonality && (
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-xs text-[#F8F5EF] text-[10px] uppercase tracking-widest px-3 py-1">
                    Featured Look • {look.featuredPersonality}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#1D1D1B] mb-1 group-hover:text-[#A88B5A] transition-colors">
                    {look.title}
                  </h3>
                  <p className="text-xs text-[#6E6A64] line-clamp-2 leading-relaxed mb-4">
                    {look.lookDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9E1D5] flex items-center justify-between">
                  <div className="text-[11px] text-[#A88B5A] uppercase tracking-wider">
                    {look.keyPieces[0]}
                  </div>
                  <Link
                    href="/style-edit"
                    className="text-xs uppercase tracking-widest font-semibold text-[#1D1D1B] hover:text-[#A88B5A] flex items-center space-x-1"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
