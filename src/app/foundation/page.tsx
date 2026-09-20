import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Cultural Human Foundation — Fashion With Purpose",
  description: "Every purchase carries a purpose. Discover how Cultural Fusion dedicates 5% of every sale to the Cultural Human Foundation.",
};

export default function FoundationPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "About", href: "/about" }, { label: "Foundation" }]} />

        {/* Hero */}
        <div className="border-b border-[#E9E1D5] pb-12 pt-6 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
            <HeartHandshake className="w-4 h-4" />
            <span>Fashion With Purpose</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] leading-tight mb-4">
            Every Purchase Carries A Purpose
          </h1>
          <p className="text-sm sm:text-base text-[#6E6A64] font-light leading-relaxed">
            Cultural Fusion believes that true luxury includes giving back. 5% of every sale is dedicated to the Cultural Human Foundation.
          </p>
        </div>

        {/* Core Statement & Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-6 relative aspect-[4/5] bg-[#E9E1D5] overflow-hidden border border-[#E0D8CC]">
            <Image
              src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=1200&q=80"
              alt="Cultural Human Foundation Impact"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold block">
              The 5% Commitment
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1D1D1B] leading-tight">
              A Pledge Stitched Into Every Garment
            </h2>

            <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
              Cultural Fusion states that <strong className="font-semibold text-[#1D1D1B]">5% of every sale</strong> goes directly toward supporting the <strong className="font-semibold text-[#1D1D1B]">Cultural Human Foundation</strong>.
            </p>

            <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
              When you choose a Cultural Fusion stitched kurta, unstitched suit, or hand-worked accessory, your patronage helps fund foundational welfare initiatives and community support programs.
            </p>

            <div className="p-5 bg-[#FAF8F5] border border-[#E9E1D5] space-y-3">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#A88B5A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#1D1D1B]">
                    Built-In Transparency
                  </h3>
                  <p className="text-xs text-[#6E6A64] mt-0.5 leading-relaxed">
                    The 5% contribution is automatically set aside from the retail price across all purchases made in our store and online.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 pt-3 border-t border-[#E9E1D5]">
                <Sparkles className="w-5 h-5 text-[#A88B5A] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold text-[#1D1D1B]">
                    Community Uplift
                  </h3>
                  <p className="text-xs text-[#6E6A64] mt-0.5 leading-relaxed">
                    Empowering our regional artisan ecosystem and extending humanitarian support to vulnerable communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/new-in"
                className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors"
              >
                <span>Shop With Purpose</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Transparent Note */}
        <div className="max-w-2xl mx-auto text-center p-8 bg-[#FAF8F5] border border-[#E9E1D5] mb-16">
          <p className="text-xs text-[#6E6A64] leading-relaxed italic">
            &ldquo;We measure our success not just by the beauty of our garments, but by the dignity and support we return to the community that inspires us.&rdquo;
          </p>
          <span className="text-[10px] uppercase tracking-widest text-[#A88B5A] font-semibold block mt-3">
            — Cultural Fusion Atelier, Lahore
          </span>
        </div>
      </div>
    </div>
  );
}
