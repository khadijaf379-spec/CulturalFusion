"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Sparkles } from "lucide-react";
import { BRAND_CONTACT_INFO } from "@/data/stores";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@") || !trimmed.includes(".")) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSubscribed(true);
  };

  return (
    <footer className="bg-[#1D1D1B] text-[#F8F5EF] border-t border-[#2D2D2B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Banner */}
        <div className="border-b border-[#2D2D2B] pb-14 mb-14 text-center max-w-2xl mx-auto">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold block mb-2">
            The Cultural Journal
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-normal tracking-wide mb-3">
            Join The Cultural Journal
          </h3>
          <p className="text-xs sm:text-sm text-[#A09D96] font-light leading-relaxed mb-6">
            Be the first to receive seasonal collection previews, editorial style notes, and textile stories from our Lahore atelier.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center space-x-2 text-[#A88B5A] text-sm py-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Thank you for subscribing to our journal.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  placeholder="Enter your email address"
                  className="flex-1 bg-[#262624] border border-[#3D3D3A] px-4 py-3 text-xs sm:text-sm text-[#F8F5EF] placeholder-[#73706A] focus:outline-none focus:border-[#A88B5A]"
                />
                <button
                  type="submit"
                  className="bg-[#A88B5A] text-[#1D1D1B] px-6 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A875] transition-colors flex items-center justify-center space-x-2 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {error && <p className="text-xs text-red-400 mt-2 text-left">{error}</p>}
            </form>
          )}
        </div>

        {/* 4 Navigation Columns + Contact summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-14 text-xs">
          {/* Brand Intro column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 space-y-4">
            <h4 className="font-serif text-lg tracking-widest text-[#F8F5EF] font-bold">
              CULTURAL FUSION
            </h4>
            <p className="text-[#A09D96] text-xs leading-relaxed">
              Where Pakistani heritage meets contemporary everyday elegance. Founded in 2019 in Lahore.
            </p>
            <div className="pt-2 text-[11px] text-[#A88B5A] space-y-1.5">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                <span>Wahdat Road, Iqbal Town, Lahore</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{BRAND_CONTACT_INFO.mainPhone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span>{BRAND_CONTACT_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* SHOP */}
          <div className="space-y-3">
            <h5 className="font-semibold uppercase tracking-widest text-[#A88B5A] text-[11px]">
              Shop
            </h5>
            <ul className="space-y-2 text-[#C4C0B7]">
              <li><Link href="/new-in" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link href="/printed" className="hover:text-white transition-colors">Printed Lawn & Cambric</Link></li>
              <li><Link href="/solids" className="hover:text-white transition-colors">Solids & Monochromes</Link></li>
              <li><Link href="/unstitched" className="hover:text-white transition-colors">Unstitched Collections</Link></li>
              <li><Link href="/exclusive" className="hover:text-white transition-colors">Exclusive Velvet & Silk</Link></li>
              <li><Link href="/accessories" className="hover:text-white transition-colors">Khussas & Accessories</Link></li>
              <li><Link href="/sale" className="text-red-400 hover:text-red-300 transition-colors">Special Sale Offers</Link></li>
            </ul>
          </div>

          {/* ABOUT */}
          <div className="space-y-3">
            <h5 className="font-semibold uppercase tracking-widest text-[#A88B5A] text-[11px]">
              About
            </h5>
            <ul className="space-y-2 text-[#C4C0B7]">
              <li><Link href="/about" className="hover:text-white transition-colors">Our Philosophy</Link></li>
              <li><Link href="/our-story" className="hover:text-white transition-colors">Heritage Timeline</Link></li>
              <li>
                <Link href="/foundation" className="hover:text-[#A88B5A] transition-colors flex items-center space-x-1">
                  <span>Cultural Human Foundation</span>
                  <Sparkles className="w-3 h-3 text-[#A88B5A]" />
                </Link>
              </li>
              <li><Link href="/style-edit" className="hover:text-white transition-colors">The Style Edit</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Cultural Journal</Link></li>
              <li><Link href="/stores" className="hover:text-white transition-colors">Lahore Flagship Store</Link></li>
            </ul>
          </div>

          {/* HELP */}
          <div className="space-y-3">
            <h5 className="font-semibold uppercase tracking-widest text-[#A88B5A] text-[11px]">
              Client Care
            </h5>
            <ul className="space-y-2 text-[#C4C0B7]">
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Atelier</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Nationwide Shipping</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">10-Day Return & Exchange</Link></li>
              <li><Link href="/size-guide" className="hover:text-white transition-colors">Size Guide & Chart</Link></li>
            </ul>
          </div>

          {/* CONNECT & TRUST */}
          <div className="space-y-3">
            <h5 className="font-semibold uppercase tracking-widest text-[#A88B5A] text-[11px]">
              Connect
            </h5>
            <ul className="space-y-2 text-[#C4C0B7]">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-[#2D2D2B]">
              <p className="text-[10px] text-[#A09D96] uppercase tracking-wider mb-2">
                Accepted Payment Methods
              </p>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-[#A88B5A] font-semibold">
                <span className="px-2 py-0.5 bg-[#262624] border border-[#3D3D3A]">Cash on Delivery</span>
                <span className="px-2 py-0.5 bg-[#262624] border border-[#3D3D3A]">Visa</span>
                <span className="px-2 py-0.5 bg-[#262624] border border-[#3D3D3A]">Mastercard</span>
                <span className="px-2 py-0.5 bg-[#262624] border border-[#3D3D3A]">PayPak</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2D2D2B] pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8C8880] space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Cultural Fusion. All rights reserved.</p>
          <div className="flex space-x-6 text-[11px]">
            <Link href="/shipping" className="hover:text-white transition-colors">Shipping Policy</Link>
            <Link href="/returns" className="hover:text-white transition-colors">Exchange Policy</Link>
            <Link href="/about" className="hover:text-white transition-colors">Privacy & Craft</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
