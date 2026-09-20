import type { Metadata } from "next";
import { Truck, Clock, ShieldCheck, HelpCircle } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Shipping & Delivery Policy | Cultural Fusion",
  description: "Learn about Cultural Fusion's nationwide shipping policies, delivery timelines across Lahore and Pakistan, and free delivery thresholds.",
};

export default function ShippingPage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Client Care", href: "/faq" }, { label: "Shipping Policy" }]} />

        {/* Header */}
        <div className="border-b border-[#E9E1D5] pb-10 pt-4 mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
            <Truck className="w-3.5 h-3.5" />
            <span>Nationwide Logistics</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-3">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
            Reliable and prompt nationwide delivery across all major cities and towns in Pakistan.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 text-center space-y-2">
            <Truck className="w-6 h-6 text-[#A88B5A] mx-auto" />
            <h2 className="font-serif text-base font-semibold text-[#1D1D1B]">Free Delivery</h2>
            <p className="text-xs text-[#6E6A64]">
              On all orders above <strong className="text-[#1D1D1B]">Rs. 4,000</strong> nationwide.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 text-center space-y-2">
            <Clock className="w-6 h-6 text-[#A88B5A] mx-auto" />
            <h2 className="font-serif text-base font-semibold text-[#1D1D1B]">Lahore 1-Day</h2>
            <p className="text-xs text-[#6E6A64]">
              Delivered within 1 working day for Lahore addresses.
            </p>
          </div>

          <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 text-center space-y-2">
            <ShieldCheck className="w-6 h-6 text-[#A88B5A] mx-auto" />
            <h2 className="font-serif text-base font-semibold text-[#1D1D1B]">Nationwide Reach</h2>
            <p className="text-xs text-[#6E6A64]">
              2 to 4 working days across all major Pakistani cities.
            </p>
          </div>
        </div>

        {/* Detailed Policy Breakdown */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-10 space-y-8 text-xs sm:text-sm text-[#3D3A35] leading-relaxed mb-16">
          <section className="space-y-2">
            <h3 className="font-serif text-lg font-semibold text-[#1D1D1B]">
              1. Delivery Timelines
            </h3>
            <p>
              • <strong>Lahore Metro:</strong> Delivered within 1 working day after order confirmation.
            </p>
            <p>
              • <strong>Major Cities (Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta):</strong> Delivered within 2 to 3 working days.
            </p>
            <p>
              • <strong>Regional & Rural Towns:</strong> Delivered within 3 to 5 working days depending on courier accessibility.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E9E1D5]">
            <h3 className="font-serif text-lg font-semibold text-[#1D1D1B]">
              2. Shipping Charges
            </h3>
            <p>
              • <strong>Orders Above Rs. 4,000:</strong> Free nationwide shipping.
            </p>
            <p>
              • <strong>Orders Below Rs. 4,000:</strong> Standard flat courier fee of Rs. 250 applies at checkout.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E9E1D5]">
            <h3 className="font-serif text-lg font-semibold text-[#1D1D1B]">
              3. Order Confirmation & Tracking
            </h3>
            <p>
              Once your order is placed, you will receive an immediate SMS and email with your unique order tracking reference (e.g., <code>CF-2026-XXXXX</code>). Our courier partner will also send real-time dispatch updates.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E9E1D5]">
            <h3 className="font-serif text-lg font-semibold text-[#1D1D1B]">
              4. Payment on Delivery
            </h3>
            <p>
              For Cash on Delivery (COD) orders, please have the exact invoice total ready for the courier representative to avoid unnecessary transit delays.
            </p>
          </section>

          <div className="p-4 bg-[#F0ECE4] border border-[#E0D8CC] text-xs flex items-center space-x-3 text-[#6E6A64]">
            <HelpCircle className="w-5 h-5 text-[#A88B5A] shrink-0" />
            <span>
              Have a delivery inquiry or address update? Reach our support desk 24/7 at{" "}
              <a href="mailto:contact@culturalfusion.pk" className="text-[#A88B5A] font-semibold underline">
                contact@culturalfusion.pk
              </a>{" "}
              or call +92 312 4644046.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
