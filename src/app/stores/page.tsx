import type { Metadata } from "next";
import { MapPin, Phone, Clock, Mail, CheckCircle2, Navigation, ExternalLink } from "lucide-react";
import { STORES } from "@/data/stores";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "Flagship Stores & Locations — Lahore Atelier",
  description: "Visit the Cultural Fusion flagship boutique in Iqbal Town, Lahore. Experience our ready-to-wear pret, bespoke unstitched fabrics, and personalized styling.",
};

export default function StoresPage() {
  const store = STORES[0];

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Stores & Ateliers" }]} />

        {/* Header */}
        <div className="border-b border-[#E9E1D5] pb-10 pt-4 mb-12 text-center max-w-3xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#A88B5A] font-semibold block mb-2">
            Flagship Atelier
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-3">
            Visit Us In Lahore
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
            Experience our fabrics in person. Our atelier stylists are on hand to assist with sizing, bespoke draping, and personalized wardrobe selections.
          </p>
        </div>

        {/* Main Store Card + Interactive Map Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          {/* Store Info Card */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A88B5A] font-semibold block mb-1">
                Main Retail Store & Atelier
              </span>
              <h2 className="font-serif text-2xl font-normal text-[#1D1D1B]">
                {store.name}
              </h2>
            </div>

            <div className="space-y-4 text-xs text-[#6E6A64]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#A88B5A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1D1B]">{store.address}</p>
                  <p className="text-[11px] text-[#A09D96] mt-0.5">{store.area}, {store.city}, {store.country}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#A88B5A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1D1B]">Opening Hours</p>
                  <p className="mt-0.5">{store.hours}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#A88B5A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1D1B]">Direct Phone</p>
                  <a href={`tel:${store.phone}`} className="hover:text-[#A88B5A] transition-colors block">
                    {store.phone}
                  </a>
                  {store.secondaryPhone && (
                    <a href={`tel:${store.secondaryPhone}`} className="hover:text-[#A88B5A] transition-colors block text-[11px]">
                      {store.secondaryPhone} (Alternate)
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#A88B5A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1D1B]">Email Enquiries</p>
                  <a href={`mailto:${store.email}`} className="hover:text-[#A88B5A] transition-colors">
                    {store.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Store Features */}
            <div className="pt-4 border-t border-[#E9E1D5]">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#1D1D1B] mb-2.5">
                Atelier Amenities:
              </h3>
              <ul className="space-y-1.5 text-xs text-[#6E6A64]">
                {store.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A88B5A] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${store.phone}`}
                className="py-3 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors text-center flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>

              <a
                href="https://maps.google.com/?q=80+Sabzi+Mandi+Iqbal+Town+Lahore"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-transparent border border-[#1D1D1B] text-[#1D1D1B] text-xs uppercase tracking-widest font-semibold hover:bg-[#1D1D1B] hover:text-[#F8F5EF] transition-colors text-center flex items-center justify-center space-x-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Map Simulation & Storefront Visual */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="bg-[#FAF8F5] border border-[#E9E1D5] p-6 text-center h-full flex flex-col justify-between">
              <div>
                <div className="aspect-[16/10] bg-[#E9E1D5] border border-[#D9D2C7] relative overflow-hidden flex flex-col items-center justify-center text-center p-6 mb-4">
                  {/* Stylized Map View */}
                  <div className="absolute inset-0 bg-[#E8E2D8] flex flex-col items-center justify-center text-[#1D1D1B]">
                    <div className="w-12 h-12 bg-[#1D1D1B] rounded-full flex items-center justify-center shadow-lg text-[#A88B5A] mb-2 animate-bounce">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="font-serif font-bold text-base">CULTURAL FUSION ATELIER</span>
                    <span className="text-xs text-[#6E6A64] mt-0.5">80 Sabzi Mandi, Wahdat Road, Iqbal Town</span>
                    <span className="text-[11px] text-[#A88B5A] mt-1 font-semibold">Coordinates: 31.5126° N, 74.2952° E</span>
                  </div>
                </div>

                <h3 className="font-serif text-lg text-[#1D1D1B] mb-1">
                  Convenient Location in Central Lahore
                </h3>
                <p className="text-xs text-[#6E6A64] leading-relaxed max-w-lg mx-auto">
                  Easily accessible from Wahdat Road, Multan Road, and Allama Iqbal Town. Ample street parking available for visitors.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9E1D5] flex justify-center">
                <a
                  href="https://maps.google.com/?q=80+Sabzi+Mandi+Iqbal+Town+Lahore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#A88B5A] uppercase tracking-wider font-semibold hover:text-[#1D1D1B]"
                >
                  <span>Open in Google Maps Application</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
