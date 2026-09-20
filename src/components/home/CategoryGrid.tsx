import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export function CategoryGrid() {
  return (
    <section className="py-20 bg-[#F8F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold block mb-2">
            Curated Categories
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] mb-3">
            Shop By Collection
          </h2>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
            From everyday breathable lawn suits to bespoke festive velvets and artisanal Punjabi footwear.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/${category.slug}`}
              className="group relative aspect-[4/5] overflow-hidden bg-[#E9E1D5] border border-[#E5DFD5]"
            >
              {/* Category Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity group-hover:opacity-90" />

              {/* Category Content */}
              <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#C5A875] font-semibold block mb-1">
                      {category.itemCount} Designs
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl font-normal text-white group-hover:text-[#F8F5EF] transition-colors">
                      {category.name}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center group-hover:bg-white group-hover:text-[#1D1D1B] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
