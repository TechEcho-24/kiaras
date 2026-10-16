"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuote } from "@/context/QuoteContext";
import { PRODUCTS } from "@/data/products";
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";

export function HeroSection() {
  const { openDrawer } = useQuote();
  const heroProduct = PRODUCTS.find((p) => p.id === "shahi-jal-mahal") || PRODUCTS[0];

  return (
    <section className="relative w-full overflow-hidden min-h-[580px] sm:min-h-[640px] md:min-h-[680px] lg:min-h-[740px] flex items-center">
      
      {/* 1. FULL BACKGROUND IMAGE BEHIND ALL HERO CONTENT */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Kiara's Royal Luxury Gifting - Handcrafted Shahi Jal Mahal Box"
          fill
          priority
          sizes="100vw"
          className="object-cover object-left md:object-center brightness-100"
        />
        {/* Subtle atmospheric vignette so right-side text is crisp while preserving background hamper */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/50 md:from-transparent md:via-[#450206]/20 md:to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#450206]/60 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* 2. HERO CONTENT FLOATING OVER FULL BACKGROUND IMAGE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Kept intentionally open to showcase the handcrafted royal hamper box present in the background */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 h-[400px]">
            {/* Clickable subtle prompt to inspect the featured master hamper */}
            <div className="h-full flex items-end pb-4">
              <button
                onClick={() => openDrawer(heroProduct)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium glass-badge text-[#faf7f2]/90 hover:text-white hover:border-[#dfb758] transition-all group backdrop-blur-md"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#dfb758] group-hover:rotate-12 transition-transform" />
                <span>Featured Masterpiece: <strong className="text-[#dfb758] font-normal">{heroProduct.name}</strong></span>
              </button>
            </div>
          </div>

          {/* Right Column: Royal Typography & Metallic Gold Gradient CTAs (Matching media_1792040774980.png) */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 pt-12 lg:pt-0">
            
            {/* Glass Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-badge text-[#dfb758] text-[11px] sm:text-xs font-medium tracking-widest uppercase">
              <span className="text-[#dfb758]">✦</span>
              <span className="font-sans">The Art of Royal Gifting</span>
              <span className="text-[#dfb758]">✦</span>
            </div>

            {/* Headline with Work Sans */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-normal leading-[1.12] tracking-tight drop-shadow-md">
              Luxury Hampers <br />
              <span className="gold-gradient-text font-serif italic">That Define</span> Elegance
            </h1>

            {/* Subtitle with Poppins */}
            <p className="text-sm sm:text-base md:text-lg text-[#ede5d8]/95 max-w-xl font-sans font-light leading-relaxed drop-shadow">
              The finest luxury hampers, exclusive hampers, and custom luxury gift hampers that transform every occasion into a celebration of class and sophistication.
            </p>

            {/* Dual CTAs matching reference image with 6-color metallic gold gradient */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/catalog"
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#240508] gold-gradient-btn rounded-full text-center shadow-2xl flex items-center justify-center gap-2 group font-heading hover:scale-[1.02] transition-transform"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={() => openDrawer(heroProduct)}
                className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-[#240508] gold-gradient-btn rounded-full text-center shadow-2xl flex items-center justify-center gap-2 font-heading hover:scale-[1.02] transition-transform"
              >
                <span>Customize</span>
                <Sparkles className="w-4 h-4 text-[#450206]" />
              </button>
            </div>

            {/* Micro Trust Proof */}
            <div className="pt-6 grid grid-cols-2 gap-4 border-t border-[#dfb758]/25 w-full text-left">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#dfb758] flex-shrink-0" />
                <span className="text-xs text-[#ede5d8]/90 font-sans font-medium">100% Handcrafted Keepsakes</span>
              </div>
              <div className="flex items-center gap-2.5">
                <HeartHandshake className="w-4 h-4 text-[#dfb758] flex-shrink-0" />
                <span className="text-xs text-[#ede5d8]/90 font-sans font-medium">Doorstep Delivery Pan-India</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
