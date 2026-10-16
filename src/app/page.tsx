"use client";

import React, { useState } from "react";
import { QuoteProvider } from "@/context/QuoteContext";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { SignatureCollections } from "@/components/SignatureCollections";
import { AboutSection } from "@/components/AboutSection";
import { ClassApartSection } from "@/components/ClassApartSection";
import { GetAQuoteSection } from "@/components/GetAQuoteSection";
import { Footer } from "@/components/Footer";
import { GetAQuoteModal } from "@/components/GetAQuoteModal";
import { SearchModal } from "@/components/SearchModal";
import { Toast } from "@/components/Toast";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <QuoteProvider>
      <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#231710] selection:bg-[#dfb758] selection:text-[#450206]">
        {/* Navigation Header (Deep Maroon #450206 with Glass Effect & Gold Accent) */}
        <Navbar onOpenSearch={() => setSearchOpen(true)} />

        <main className="flex-1 w-full">
          {/* 1. Hero Section (Full Background Image behind typography & buttons) */}
          <HeroSection />

          {/* 2. Products Section (Clean Ivory UI matching User Reference media_1792044109586.png, exactly 4 cards) */}
          <FeaturedProducts limit={4} />

          {/* 3. Collections Section (Signature Collections matching media_1792040775028.png) */}
          <SignatureCollections />

          {/* 4. About Section (Arched frame + floating white card matching media_1792040774986.png) */}
          <AboutSection />

          {/* 5. Why Our Hamper Wala (Class Apart 4 Pillars matching media_1792040774883.png) */}
          <ClassApartSection />

          {/* 6. Get Quote Section (Interactive Bespoke Quote Consultation before Footer) */}
          <GetAQuoteSection />
        </main>

        {/* Luxury Footer (Deep Maroon #450206 + Gold) */}
        <Footer />

        {/* Interactive Drawers & Modals */}
        <GetAQuoteModal />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        <Toast />
      </div>
    </QuoteProvider>
  );
}
