"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { BRAND_CONTACT_INFO } from "@/data/stores";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(8, "Please enter your phone or WhatsApp number"),
  subject: z.string().min(3, "Please enter an inquiry subject"),
  message: z.string().min(10, "Please provide more details regarding your inquiry"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    // Simulated server action
    await new Promise((r) => setTimeout(r, 600));
    setIsSubmitted(true);
    reset();
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Client Care", href: "/faq" }, { label: "Contact Us" }]} />

        {/* Header */}
        <div className="border-b border-[#E9E1D5] pb-10 pt-4 mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 text-[11px] uppercase tracking-[0.25em] text-[#A88B5A] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Atelier Concierge</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#1D1D1B] tracking-tight mb-3">
            Contact Cultural Fusion
          </h1>
          <p className="text-xs sm:text-sm text-[#6E6A64] font-light leading-relaxed">
            Our atelier specialists are available 24/7 to assist with inquiries, custom tailoring consultations, and order support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-8 space-y-6 shadow-xs">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#A88B5A] font-semibold block mb-1">
                Direct Touchpoints
              </span>
              <h2 className="font-serif text-2xl font-normal text-[#1D1D1B]">
                Lahore Headquarters & Store
              </h2>
            </div>

            <div className="space-y-4 text-xs text-[#6E6A64]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#A88B5A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1D1B]">Boutique Address</p>
                  <p className="mt-0.5 leading-relaxed">{BRAND_CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#A88B5A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1D1B]">Phone & WhatsApp</p>
                  <p className="mt-0.5">{BRAND_CONTACT_INFO.mainPhone} (Primary)</p>
                  <p>{BRAND_CONTACT_INFO.alternatePhone} (Alternate)</p>
                  <p className="text-[11px] text-[#A09D96]">{BRAND_CONTACT_INFO.internationalPhone} (International)</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#A88B5A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1D1B]">Email Inquiries</p>
                  <p className="mt-0.5">{BRAND_CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-[#A88B5A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1D1B]">Customer Care Hours</p>
                  <p className="mt-0.5">24/7 Digital Support • Flagship: 11:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E9E1D5] bg-[#F0ECE4] p-4 text-[11px] text-[#6E6A64]">
              <span className="font-semibold text-[#1D1D1B] block mb-1">Looking for Instant WhatsApp Support?</span>
              Send your query directly to <a href="https://wa.me/923124644046" className="text-[#A88B5A] font-bold underline">+92 312 4644046</a> for rapid assistance with sizing and delivery updates.
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#E9E1D5] p-6 sm:p-8 shadow-xs">
            <h2 className="font-serif text-2xl font-normal text-[#1D1D1B] mb-2">
              Send Us A Message
            </h2>
            <p className="text-xs text-[#6E6A64] mb-6">
              Fill out the form below and our team will respond within 2 to 4 business hours.
            </p>

            {isSubmitted ? (
              <div className="p-8 text-center bg-[#F8F5EF] border border-[#E9E1D5] space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#A88B5A] mx-auto" />
                <h3 className="font-serif text-xl text-[#1D1D1B]">Message Received</h3>
                <p className="text-xs text-[#6E6A64] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to Cultural Fusion. Our atelier team will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-wider font-medium hover:bg-[#A88B5A] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Your Name"
                      className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="email@example.com"
                      className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="0312 4644046"
                      className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-600 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                      Inquiry Subject *
                    </label>
                    <input
                      type="text"
                      {...register("subject")}
                      placeholder="e.g. Order Tracking, Sizing, Exchange"
                      className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                    />
                    {errors.subject && (
                      <p className="text-xs text-red-600 mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#1D1D1B] mb-1">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Please write your inquiry or order details here..."
                    className="w-full bg-white border border-[#D9D2C7] px-3.5 py-2.5 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#A88B5A]"
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#1D1D1B] text-[#F8F5EF] text-xs uppercase tracking-widest font-semibold hover:bg-[#A88B5A] transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <span>{isSubmitting ? "Transmitting..." : "Send Message"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
