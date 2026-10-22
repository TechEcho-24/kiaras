"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuote } from "@/context/QuoteContext";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { Award, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const { openDrawer } = useQuote();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section id="about" className="w-full bg-[#fbf9f5] text-[#1f0408] py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background watermark */}
      <div className="absolute right-0 bottom-0 text-[180px] font-heading font-black text-[#dfb758]/10 select-none pointer-events-none leading-none">
        Kiara’s
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Arched Framed Hamper Photo (Matching Image 4) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Outer Decorative Gold Outline Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full arch-frame border-2 border-[#dfb758]/40 pointer-events-none hidden sm:block" />
              <div className="absolute -top-2 -left-2 w-full h-full arch-frame border border-[#dfb758]/60 pointer-events-none hidden sm:block" />

              {/* Main Image Container */}
              <div className="relative aspect-[4/5] w-full arch-frame overflow-hidden shadow-2xl bg-[#450206] border-2 border-[#dfb758]/35">
                {!imageLoaded && (
                  <div className="w-full h-full skeleton-luxury" />
                )}
                <Image
                  src="/Rose%20Ivory/Copy%20of%20Untitled%20Session14366.jpg"
                  alt="Crafting Joy, One Luxury Hamper at a Time - Kiara's"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onLoad={() => setImageLoaded(true)}
                  className={`object-cover object-center transform transition-transform duration-700 hover:scale-105 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Micro badge on image with Glass Effect */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-badge shadow-lg text-[#faf7f2]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#dfb758]/20 border border-[#dfb758] flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-[#dfb758]" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold">Master Artisan Handcraft</p>
                      <p className="text-[11px] text-[#ede5d8]/85 font-sans">Every piece crafted with royal precision</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating White Card (Matching Image 4) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(69,2,6,0.08)] border border-[#ede5d8] relative space-y-6">
              
              {/* Badge: ABOUT US */}
              <div>
                <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-[0.02em] uppercase bg-[#450206]/10 text-[#450206] border border-[#dfb758]/40 font-sans">
                  About Us
                </span>
              </div>

              {/* Heading */}
              <div>
                <h2 className="font-heading text-3xl sm:text-4xl text-[#1a0204] font-bold leading-tight">
                  Crafting Joy, One Luxury Hamper at a Time
                </h2>
              </div>

              {/* Body Text matching screenshot */}
              <div className="space-y-4 text-sm sm:text-base text-[#4a3b32] font-sans font-light leading-relaxed">
                <p>
                  We’re a boutique studio dedicated to thoughtful gifting. From gourmet selections to handcrafted keepsakes, every hamper is curated with purpose, packed with care, and designed to make moments unforgettable.
                </p>
                <p>
                  Our team partners with artisanal makers, prioritizes premium materials, and obsessively refines the unboxing experience—so your gift feels personal, polished, and timeless.
                </p>
              </div>

              {/* Key Pillars */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1a0204] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb758]" />
                  <span>Curated Fine Inclusions</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1a0204] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb758]" />
                  <span>Bespoke Wax Seals & Ribbons</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1a0204] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb758]" />
                  <span>Corporate Branding Available</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#1a0204] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#dfb758]" />
                  <span>Global Secure Shipping</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => openDrawer()}
                  className="px-7 py-3.5 text-xs font-bold uppercase tracking-[0.02em] text-[#240508] gold-gradient-btn rounded-full shadow-lg text-center font-heading"
                >
                  Start Custom Order
                </button>

                <a
                  href="https://wa.me/919891993626?text=Hello%20Kiara's,%20I%20would%20love%20to%20discuss%20a%20custom%20hamper%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 text-xs font-semibold tracking-[0.02em] text-[#450206] hover:bg-[#450206]/5 border border-[#450206]/30 rounded-full text-center transition-colors flex items-center justify-center gap-2.5 font-sans"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
