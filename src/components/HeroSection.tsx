"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuote } from "@/context/QuoteContext";
import { PRODUCTS } from "@/data/products";
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, ChevronLeft, ChevronRight, Award, Globe } from "lucide-react";

export function HeroSection() {
  const { openDrawer } = useQuote();
  const heroProduct = PRODUCTS.find((p) => p.id === "shahi-jal-mahal") || PRODUCTS[0];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  }, []);

  // Auto-advance banner every 5 seconds as requested by the user
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden min-h-[600px] sm:min-h-[660px] md:min-h-[720px] lg:min-h-[780px] flex items-center bg-[#230205]">
      
      {/* =========================================================================
          SLIDE 1: banner1.jpeg — Text strictly on the LEFT, products on the RIGHT
         ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 0 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner1.jpeg"
            alt="Kiara's Handcrafted Royal Luxury Hampers"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center brightness-95"
          />
          {/* Left-side vignette so text on the left is crystal clear while products on the right pop */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent md:w-3/5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Slide 1 Content: STRICTLY LEFT-ALIGNED (Clean Typography, No Blur Boxes) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center py-16 md:py-24">
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Clean Typography & CTAs */}
            <div className="lg:col-span-8 xl:col-span-7 flex flex-col items-start text-left space-y-6">
              
              {/* Glass Pill Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 text-white text-[11px] sm:text-xs font-medium tracking-[0.02em] border border-white/20">
                <span className="text-[#dfb758]">✦</span>
                <span className="font-sans">Diwali Luxury Gifting Edition</span>
                <span className="text-[#dfb758]">✦</span>
              </div>

              {/* Headline */}
              <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-normal leading-[1.14] sm:leading-[1.12] tracking-[0.02em] drop-shadow-lg">
                Share The Joy <br />
                <span className="gold-gradient-text font-serif italic">Of Diwali</span> In Royal Grandeur
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-base md:text-lg text-[#ede5d8]/95 max-w-xl font-sans font-light leading-relaxed drop-shadow">
                Handcrafted keepsake boxes, fine silver-plated mementos, gourmet dry fruits, and artisanal treats curated to bring warmth, blessings, and elegance to your loved ones.
              </p>

              {/* Dual CTAs - Fits 1 line on mobile (grid 2 cols) or flex row on desktop */}
              <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto">
                <Link
                  href="/catalog?category=festive"
                  className="w-full sm:w-auto px-3 sm:px-7 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-sm font-semibold tracking-[0.02em] text-[#240508] gold-gradient-btn text-center shadow-2xl flex items-center justify-center gap-1.5 sm:gap-2 group font-heading hover:scale-[1.02] transition-transform whitespace-nowrap"
                >
                  <span><span className="sm:hidden">Shop Diwali</span><span className="hidden sm:inline">Shop Diwali Hampers</span></span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 shrink-0" />
                </Link>

                <button
                  onClick={() => openDrawer(heroProduct)}
                  className="w-full sm:w-auto px-3 sm:px-7 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-sm font-semibold tracking-[0.02em] text-[#240508] gold-gradient-btn text-center shadow-2xl flex items-center justify-center gap-1.5 sm:gap-2 font-heading hover:scale-[1.02] transition-transform whitespace-nowrap"
                >
                  <span><span className="sm:hidden">Personalize</span><span className="hidden sm:inline">Personalize Gift</span></span>
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#450206] shrink-0" />
                </button>
              </div>

              {/* Trust proof */}
              <div className="pt-4 sm:pt-6 grid grid-cols-2 gap-2.5 sm:gap-4 border-t border-[#dfb758]/25 w-full max-w-md text-left">
                <div className="flex items-center gap-1.5 sm:gap-2.5">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb758] flex-shrink-0" />
                  <span className="text-[11px] sm:text-xs text-[#ede5d8]/90 font-sans font-medium">Handcrafted Keepsakes</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2.5">
                  <HeartHandshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb758] flex-shrink-0" />
                  <span className="text-[11px] sm:text-xs text-[#ede5d8]/90 font-sans font-medium">Pan-India Delivery</span>
                </div>
              </div>

            </div>

            {/* Right Column: Kept open to showcase products in banner1 */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

          </div>
        </div>
      </div>

      {/* =========================================================================
          SLIDE 2: banner2.png — Text strictly in the CENTER (Corporate Gifts)
         ========================================================================= */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          currentSlide === 1 ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner2.png"
            alt="Kiara's Corporate & Executive Luxury Gift Hampers"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.88]"
          />
          {/* Subtle gradient vignette to protect centered text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/60 pointer-events-none" />
        </div>

        {/* Slide 2 Content: STRICTLY CENTERED (Clean Typography, No Blur Boxes) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center justify-center py-12 sm:py-16 md:py-24">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-4 sm:space-y-6 pt-4 pb-16 sm:pb-20 md:pb-28">
            
            {/* Centered Glass Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/45 text-white text-[10px] sm:text-xs font-medium tracking-[0.02em] border border-white/20">
              <span className="text-[#dfb758]">✦</span>
              <span className="font-sans">Bespoke Corporate & Executive Gifting</span>
              <span className="text-[#dfb758]">✦</span>
            </div>

            {/* Centered Headline */}
            <h1 className="font-heading text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-normal leading-[1.14] tracking-[0.02em] drop-shadow-lg">
              Make A Lasting Impression <br />
              <span className="gold-gradient-text font-serif italic">On Your Clients</span> & Partners
            </h1>

            {/* Centered Subtitle */}
            <p className="text-xs sm:text-base md:text-lg text-[#ede5d8]/95 max-w-2xl font-sans font-light leading-relaxed drop-shadow">
              Refined leadership hampers with customized company branding, premium keepsakes, and seamless pan-India bulk delivery tailored for corporate milestones and festive gratitude.
            </p>

            {/* Centered CTAs - Fits 1 line on mobile */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto">
              <Link
                href="/catalog?category=corporate"
                className="w-full sm:w-auto px-3 sm:px-7 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-sm font-semibold tracking-[0.02em] text-[#240508] gold-gradient-btn text-center shadow-2xl flex items-center justify-center gap-1.5 sm:gap-2 group font-heading hover:scale-[1.02] transition-transform whitespace-nowrap"
              >
                <span><span className="sm:hidden">Catalog</span><span className="hidden sm:inline">View Corporate Catalog</span></span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>

              <button
                onClick={() => openDrawer()}
                className="w-full sm:w-auto px-3 sm:px-7 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-sm font-semibold tracking-[0.02em] text-[#240508] gold-gradient-btn text-center shadow-2xl flex items-center justify-center gap-1.5 sm:gap-2 font-heading hover:scale-[1.02] transition-transform whitespace-nowrap"
              >
                <span><span className="sm:hidden">Get Quote</span><span className="hidden sm:inline">Request Bulk Quote</span></span>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#450206] shrink-0" />
              </button>
            </div>

            {/* Centered Trust Proof */}
            <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6 border-t border-[#dfb758]/25 w-full max-w-lg">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb758]" />
                <span className="text-[11px] sm:text-xs text-[#ede5d8]/90 font-sans font-medium">Custom Monogramming</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb758]" />
                <span className="text-[11px] sm:text-xs text-[#ede5d8]/90 font-sans font-medium">Pan-India Bulk Logistics</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* =========================================================================
          SLIDER CONTROLS: Arrow Buttons (Hover) & Slide Indicators / Dots (Bottom)
         ========================================================================= */}
      {/* Previous Slide Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 flex items-center justify-center transition-all opacity-70 hover:opacity-100 hover:scale-110 shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Next Slide Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white border border-white/20 flex items-center justify-center transition-all opacity-70 hover:opacity-100 hover:scale-110 shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        <button
          onClick={() => setCurrentSlide(0)}
          className={`h-2 rounded-full transition-all duration-300 ${
            currentSlide === 0
              ? "w-8 bg-[#dfb758] shadow-[0_0_10px_rgba(223,183,88,0.8)]"
              : "w-2.5 bg-white/50 hover:bg-white/80"
          }`}
          aria-label="Slide 1 - Handcrafted Royal Hampers"
        />
        <button
          onClick={() => setCurrentSlide(1)}
          className={`h-2 rounded-full transition-all duration-300 ${
            currentSlide === 1
              ? "w-8 bg-[#dfb758] shadow-[0_0_10px_rgba(223,183,88,0.8)]"
              : "w-2.5 bg-white/50 hover:bg-white/80"
          }`}
          aria-label="Slide 2 - Executive & Festive Celebrations"
        />
      </div>

    </section>
  );
}
