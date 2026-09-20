import type { Metadata } from "next";
import { RotateCcw, AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Returns & 10-Day Exchange Policy | Cultural Fusion",
  description: "Cultural Fusion offers a customer-friendly 10-day exchange and return policy on unworn garments with original tags.",
};

export default function ReturnsPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Client Care", href: "/faq" }, { label: "Exchanges & Returns" }]} />

        {/* Header */}
        <div className="border-b border-[#E9E1D5] pb-10 pt-4 mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
            <RotateCcw className="w-3.5 h-3.5" />
            <span>10-Day Window</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-3">
            Returns & Exchange Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
            We take pride in our craftsmanship and want you to cherish every piece. Our 10-day exchange policy guarantees your complete peace of mind.
          </p>
        </div>

        {/* Highlight Alert */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 mb-10 flex items-start space-x-3 text-xs sm:text-sm text-[#3D3A35]">
          <ShieldCheck className="w-6 h-6 text-[#A88B5A] shrink-0 mt-0.5" />
          <div>
            <h2 className="font-serif text-base font-semibold text-[#1D1D1B] mb-1">
              10-Day Hassle-Free Exchange Guarantee
            </h2>
            <p className="leading-relaxed text-[#6E6A64]">
              If your garment doesn&apos;t fit as expected or you wish to exchange it for another size or design, you may request an exchange within 10 days of delivery.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-[#3D3A35] leading-relaxed mb-16">
          <section className="space-y-3">
            <h3 className="font-serif text-lg font-semibold text-[#1D1D1B]">
              1. Eligibility for Exchange
            </h3>
            <ul className="space-y-1.5 text-xs text-[#6E6A64]">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>The item must be unworn, unwashed, and in its original pristine condition.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>All original brand tags, labels, and packaging must be intact.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Unstitched fabric pieces must remain uncut and complete with all embroidered patches.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#E9E1D5]">
            <h3 className="font-serif text-lg font-semibold text-[#1D1D1B]">
              2. Damaged or Defective Items
            </h3>
            <p className="text-xs text-[#6E6A64]">
              In the rare event that you receive a damaged or misprinted piece, please report it within 48 hours of delivery. We will arrange a complimentary pickup from your address and dispatch an immediate replacement or full refund.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#E9E1D5]">
            <h3 className="font-serif text-lg font-semibold text-[#1D1D1B]">
              3. Step-by-Step Exchange Procedure
            </h3>
            <ol className="list-decimal pl-5 space-y-2 text-xs text-[#6E6A64]">
              <li>Contact our customer support team via WhatsApp or email at <code>contact@culturalfusion.pk</code> with your Order Reference ID.</li>
              <li>Provide clear photographs of the product and reason for exchange (e.g., size change).</li>
              <li>Once verified, securely pack the parcel and hand it over to our reverse-logistics courier partner.</li>
              <li>Your new exchanged item will be dispatched within 2 working days of our atelier receiving the original package.</li>
            </ol>
          </section>

          <section className="space-y-3 pt-4 border-t border-[#E9E1D5]">
            <h3 className="font-serif text-lg font-semibold text-[#1D1D1B]">
              4. In-Store Exchanges
            </h3>
            <p className="text-xs text-[#6E6A64]">
              You can also exchange online purchases directly at our flagship boutique: <strong>80 Sabzi Mandi, Wahdat Road, Iqbal Town, Lahore</strong>. Please bring your digital order receipt.
            </p>
          </section>

          {/* Transparent Notice */}
          <div className="p-4 bg-[#F0ECE4] border border-[#E0D8CC] text-xs text-[#6E6A64] space-y-1">
            <div className="flex items-center space-x-2 font-semibold text-[#1D1D1B]">
              <AlertCircle className="w-4 h-4 text-[#A88B5A]" />
              <span>Policy Notice</span>
            </div>
            <p>
              Please confirm the final return conditions with Cultural Fusion before publishing live production updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
