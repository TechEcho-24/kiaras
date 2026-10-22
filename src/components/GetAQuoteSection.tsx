"use client";

import React from "react";
import { useQuote } from "@/context/QuoteContext";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { ArrowRight, ShieldCheck, HeartHandshake, Globe } from "lucide-react";

export function GetAQuoteSection() {
  const { openDrawer } = useQuote();

  return (
    <section 
      id="bespoke-quote" 
      className="w-full bg-gradient-to-b from-[#fdfbf7] via-[#faf4e6] to-[#f4ead7] text-[#231710] py-20 md:py-28 border-t border-[#dfb758]/35 relative overflow-hidden"
    >
      {/* Subtle ambient luxury gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#dfb758]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Centered Heading with Work Sans */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#231710] font-normal tracking-[0.02em] max-w-3xl leading-[1.18]">
          Planning a Royal Celebration, <br className="hidden sm:inline" />
          <span className="font-serif italic text-[#450206]">Wedding, or Corporate Event?</span>
        </h2>

        {/* Centered Subtitle with Poppins */}
        <p className="text-sm sm:text-base md:text-lg text-[#5c4a40] font-sans font-light leading-relaxed max-w-2xl mt-5">
          From palatial trousseau presentations to custom-engraved brass canisters, Kiara’s master artisans create bespoke heirlooms tailored to your grandest celebrations.
        </p>

        {/* 3 Centered Trust Highlights */}
        <div className="pt-8 pb-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-[#4a3a30] font-sans">
          <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-[#e2d8c6] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#855312]" />
            <span>Tailored Monogram Engraving</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-[#e2d8c6] shadow-sm">
            <HeartHandshake className="w-4 h-4 text-[#855312]" />
            <span>Dedicated VIP Concierge</span>
          </div>
          <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-[#e2d8c6] shadow-sm">
            <Globe className="w-4 h-4 text-[#855312]" />
            <span>Pan-India & Global Delivery</span>
          </div>
        </div>

        {/* Centered Action Buttons (Matching User Request) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
          <button
            onClick={() => openDrawer()}
            className="w-full sm:w-auto px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-semibold tracking-[0.02em] text-[#240508] gold-gradient-btn shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 font-heading hover:scale-[1.02]"
          >
            <span>Get a Custom Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/919891993626?text=Hello%20Kiara's,%20I%20would%20like%20to%20consult%20for%20a%20bespoke%20luxury%20hamper%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 sm:px-7 sm:py-3 rounded-full text-xs sm:text-sm font-medium tracking-[0.02em] bg-white hover:bg-[#faf7f2] text-[#450206] border border-[#d8ccba] hover:border-[#450206] shadow-sm transition-all flex items-center justify-center gap-2 font-sans"
          >
            <WhatsAppIcon className="w-4 h-4 shrink-0" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
