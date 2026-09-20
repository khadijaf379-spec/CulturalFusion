import type { Metadata } from "next";
import { Ruler, Sparkles, CheckCircle2 } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Size Guide & Body Measurement Chart | Cultural Fusion",
  description: "Find your ideal fit with Cultural Fusion's standard ready-to-wear sizing chart and step-by-step measurement guide.",
};

const SIZES_DATA = [
  { size: "XS", bustIn: "34", waistIn: "30", hipIn: "37", lengthIn: "40", bustCm: "86", waistCm: "76", hipCm: "94", lengthCm: "101" },
  { size: "S", bustIn: "36", waistIn: "32", hipIn: "39", lengthIn: "41", bustCm: "91", waistCm: "81", hipCm: "99", lengthCm: "104" },
  { size: "M", bustIn: "39", waistIn: "35", hipIn: "42", lengthIn: "42", bustCm: "99", waistCm: "89", hipCm: "106", lengthCm: "106" },
  { size: "L", bustIn: "42", waistIn: "38", hipIn: "45", lengthIn: "43", bustCm: "106", waistCm: "96", hipCm: "114", lengthCm: "109" },
  { size: "XL", bustIn: "45", waistIn: "41", hipIn: "48", lengthIn: "44", bustCm: "114", waistCm: "104", hipCm: "122", lengthCm: "111" },
  { size: "XXL", bustIn: "48", waistIn: "44", hipIn: "51", lengthIn: "45", bustCm: "122", waistCm: "111", hipCm: "129", lengthCm: "114" },
];

export default function SizeGuidePage() {
  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Client Care", href: "/faq" }, { label: "Size Guide" }]} />

        {/* Header */}
        <div className="border-b border-[#E9E1D5] pb-10 pt-4 mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
            <Ruler className="w-3.5 h-3.5" />
            <span>Fit & Measurements</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-3">
            Ready-To-Wear Sizing Chart
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
            Our ready-to-wear silhouettes are engineered with relaxed Asian comfort in mind. Consult our chart below to determine your ideal size.
          </p>
        </div>

        {/* Sizing Table (Inches) */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-8 mb-12 shadow-xs">
          <h2 className="font-serif text-xl font-normal text-[#1D1D1B] mb-2">
            Standard Measurements (Inches)
          </h2>
          <p className="text-xs text-[#6E6A64] mb-6">
            Measurements refer to finished garment dimensions. We recommend adding 2–3 inches of ease around the bust for comfortable daily movement.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border border-[#D9D2C7] divide-y divide-[#D9D2C7]">
              <thead className="bg-[#E9E1D5] text-[#1D1D1B] uppercase tracking-wider font-semibold">
                <tr>
                  <th className="p-3 border-r border-[#D9D2C7]">Size Tag</th>
                  <th className="p-3 border-r border-[#D9D2C7]">Bust (Inches)</th>
                  <th className="p-3 border-r border-[#D9D2C7]">Waist (Inches)</th>
                  <th className="p-3 border-r border-[#D9D2C7]">Hip (Inches)</th>
                  <th className="p-3">Kameez Length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E1D5] text-[#1D1D1B]">
                {SIZES_DATA.map((row) => (
                  <tr key={row.size} className="hover:bg-[#F0ECE4] transition-colors">
                    <td className="p-3 font-bold border-r border-[#D9D2C7] text-[#A88B5A]">{row.size}</td>
                    <td className="p-3 border-r border-[#D9D2C7]">{row.bustIn}&quot;</td>
                    <td className="p-3 border-r border-[#D9D2C7]">{row.waistIn}&quot;</td>
                    <td className="p-3 border-r border-[#D9D2C7]">{row.hipIn}&quot;</td>
                    <td className="p-3 font-medium">{row.lengthIn}&quot;</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Measure Illustrated Guide */}
        <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-10 mb-16 shadow-xs">
          <div className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Step-By-Step</span>
          </div>
          <h2 className="font-serif text-2xl font-normal text-[#1D1D1B] mb-6">
            How To Measure Accurately
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#6E6A64]">
            <div className="p-4 bg-[#F8F5EF] border border-[#E9E1D5] space-y-2">
              <div className="flex items-center space-x-2 font-semibold text-[#1D1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#A88B5A]" />
                <span>1. Bust / Chest</span>
              </div>
              <p className="leading-relaxed">
                Measure around the fullest part of your bust across the shoulder blades, holding the tape parallel to the floor without pulling too tightly.
              </p>
            </div>

            <div className="p-4 bg-[#F8F5EF] border border-[#E9E1D5] space-y-2">
              <div className="flex items-center space-x-2 font-semibold text-[#1D1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#A88B5A]" />
                <span>2. Natural Waist</span>
              </div>
              <p className="leading-relaxed">
                Measure around your natural waistline, typically the narrowest point of your torso, about an inch above your belly button.
              </p>
            </div>

            <div className="p-4 bg-[#F8F5EF] border border-[#E9E1D5] space-y-2">
              <div className="flex items-center space-x-2 font-semibold text-[#1D1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#A88B5A]" />
                <span>3. Hips</span>
              </div>
              <p className="leading-relaxed">
                Stand with your feet together and measure around the widest portion of your hips and seat to ensure trousers drape without pulling.
              </p>
            </div>

            <div className="p-4 bg-[#F8F5EF] border border-[#E9E1D5] space-y-2">
              <div className="flex items-center space-x-2 font-semibold text-[#1D1D1B]">
                <CheckCircle2 className="w-4 h-4 text-[#A88B5A]" />
                <span>4. Shirt Length</span>
              </div>
              <p className="leading-relaxed">
                Measure straight down from the highest point of your shoulder seam over the apex of the bust to the desired hemline.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#E9E1D5] text-xs text-[#6E6A64] text-center">
            Need custom adjustments or between sizes? Contact our Lahore atelier team at{" "}
            <a href="tel:+923124644046" className="text-[#A88B5A] font-semibold underline">
              +92 312 4644046
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
