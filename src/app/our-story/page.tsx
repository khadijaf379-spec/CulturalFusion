import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Our Story — From Humble Stitches to Modern Pakistani Fashion",
  description: "Explore the journey of Cultural Fusion since 2019: from two sewing machines in Lahore to an in-house fashion atelier.",
};

const TIMELINE_STEPS = [
  {
    year: "2019",
    era: "The Beginning",
    title: "A Vision in Lahore",
    description:
      "Cultural Fusion was founded in 2019 by Islam Shahid in Lahore, Pakistan. Inspired by the rich textile heritage of Punjab, the brand embarked on a journey to offer women thoughtful, culturally grounded fashion that fits modern everyday life.",
    highlight: "Founded in Lahore with an authentic passion for Pakistani textiles.",
  },
  {
    year: "Early Years",
    era: "The Craft Takes Shape",
    title: "Small-Scale Stitching Operation",
    description:
      "The brand describes its early beginnings as a modest home-based stitching setup with just two sewing machines. Every seam and hem was personally overseen, creating an obsessive dedication to garment longevity and fit.",
    highlight: "Started with two sewing machines focused on artisanal quality.",
  },
  {
    year: "Growth",
    era: "Building the Atelier",
    title: "Development of In-House Production",
    description:
      "As customer appreciation grew across Lahore, Cultural Fusion transitioned from home-based stitching to a full in-house production setup. This allowed direct control over fabric selection, custom dying, embroidery sampling, and fair artisan compensation.",
    highlight: "Establishment of dedicated Lahore production and quality control.",
  },
  {
    year: "Today",
    era: "Modern Era",
    title: "Where Heritage Meets Today",
    description:
      "Today, Cultural Fusion offers a broad women's fashion catalogue spanning stitched pret, bespoke unstitched fabrics, festive velvets, handcrafted khussas, and accessories, anchored by its flagship Lahore store and nationwide e-commerce.",
    highlight: "A recognized contemporary Pakistani brand giving back 5% of sales.",
  },
];

export default function OurStoryPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "About", href: "/about" }, { label: "Our Story" }]} />

        {/* Header */}
        <div className="border-b border-[#E9E1D5] pb-12 pt-6 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Milestones</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] leading-tight mb-4">
            Our Journey Through Time
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
            The evolution of Cultural Fusion: rooted in craftsmanship, driven by purposeful design, and celebrating Pakistani fashion.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="max-w-4xl mx-auto mb-24 relative">
          {/* Vertical line through center */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-[1.5px] bg-[#D9D2C7]" />

          <div className="space-y-12 md:space-y-16">
            {TIMELINE_STEPS.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-8 relative`}
                >
                  {/* Timeline Badge in Center */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#1D1D1B] text-[#F8F5EF] items-center justify-center text-xs font-bold shadow-md z-10 border-2 border-[#A88B5A]">
                    <Calendar className="w-4 h-4 text-[#A88B5A]" />
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-8 shadow-xs hover:border-[#A88B5A] transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-serif text-2xl font-bold text-[#A88B5A]">
                          {step.year}
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-[#6E6A64] font-semibold">
                          {step.era}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-normal text-[#1D1D1B] mb-3">
                        {step.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#6E6A64] leading-relaxed mb-4">
                        {step.description}
                      </p>

                      <div className="flex items-center space-x-2 text-xs text-[#1D1D1B] font-medium pt-3 border-t border-[#E9E1D5]">
                        <CheckCircle2 className="w-4 h-4 text-[#A88B5A] shrink-0" />
                        <span>{step.highlight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Opposite Spacer on Desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Footnote Banner */}
        <div className="relative aspect-[21/9] max-w-5xl mx-auto overflow-hidden bg-[#1D1D1B] border border-[#3D3A35] mb-20 flex items-center justify-center text-center p-6">
          <Image
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=80"
            alt="Cultural Fusion Heritage"
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-cover opacity-35"
          />
          <div className="relative z-10 text-white max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A875] font-semibold block mb-2">
              Our Vision Forward
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-normal mb-4">
              Fashion With Purpose
            </h2>
            <p className="text-xs sm:text-sm text-[#E9E1D5] mb-6 font-light leading-relaxed">
              As we grow, our core principles remain unchanged: authentic craftsmanship, accessible pricing, and a 5% commitment toward community impact through the Cultural Human Foundation.
            </p>
            <Link
              href="/new-in"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-[#A88B5A] text-[#1D1D1B] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A875] transition-colors"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
