"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SIGNATURE_COLLECTIONS } from "@/data/products";
import { ArrowUpRight } from "lucide-react";

export function SignatureCollections() {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="collections" className="w-full bg-[#faf8f5] text-[#231710] py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching clean light luxury aesthetic */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#231710] font-normal tracking-[0.02em]">
            Our Signature Hamper Collections
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-[#6b584c] leading-relaxed font-sans font-light max-w-2xl mx-auto mt-4">
            From <strong className="text-[#231710] font-medium">chocolate luxury gift hampers</strong> to <strong className="text-[#231710] font-medium">luxury food hampers</strong> and <strong className="text-[#231710] font-medium">custom hampers</strong>, our curated selections are designed to bring joy, exclusivity, and elegance.
          </p>
        </div>

        {/* 5 Card Layout matching User's Reference Screenshot (media_1792040775028.png) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Gourmet Gift Hampers */}
          <div
            onMouseEnter={() => setHoveredIdx(0)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group relative rounded-3xl overflow-hidden border border-[#e2d8c7] bg-[#231710] shadow-md hover:shadow-2xl transition-all duration-500 h-[360px] flex flex-col justify-end p-6"
          >
            <Image
              src={SIGNATURE_COLLECTIONS[0].image}
              alt={SIGNATURE_COLLECTIONS[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] uppercase font-semibold tracking-[0.02em] text-white glass-badge bg-black/40 px-3 py-1 rounded-full font-sans inline-block border border-white/20">
                Confectionery & Treats
              </span>
              <h3 className="font-heading text-xl sm:text-2xl text-white font-semibold group-hover:text-[#dfb758] transition-colors">
                {SIGNATURE_COLLECTIONS[0].title}
              </h3>
              <p className="text-xs text-[#ede5d8]/90 leading-relaxed font-sans">
                {SIGNATURE_COLLECTIONS[0].description}
              </p>
              <div className="pt-2">
                <Link
                  href="/catalog?category=Gourmet%20Gift%20Hampers"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white uppercase tracking-[0.02em] hover:text-[#ede5d8] group-hover:underline underline-offset-4 font-sans"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Festive Gifting */}
          <div
            onMouseEnter={() => setHoveredIdx(1)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group relative rounded-3xl overflow-hidden border border-[#e2d8c7] bg-[#231710] shadow-md hover:shadow-2xl transition-all duration-500 h-[360px] flex flex-col justify-end p-6"
          >
            <Image
              src={SIGNATURE_COLLECTIONS[1].image}
              alt={SIGNATURE_COLLECTIONS[1].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] uppercase font-semibold tracking-[0.02em] text-white glass-badge bg-black/40 px-3 py-1 rounded-full font-sans inline-block border border-white/20">
                Diwali & Eid Specials
              </span>
              <h3 className="font-heading text-xl sm:text-2xl text-white font-semibold group-hover:text-[#dfb758] transition-colors">
                {SIGNATURE_COLLECTIONS[1].title}
              </h3>
              <p className="text-xs text-[#ede5d8]/90 leading-relaxed font-sans">
                {SIGNATURE_COLLECTIONS[1].description}
              </p>
              <div className="pt-2">
                <Link
                  href="/catalog?category=Festive%20Gifting"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white uppercase tracking-[0.02em] hover:text-[#ede5d8] group-hover:underline underline-offset-4 font-sans"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3: Custom Orders */}
          <div
            onMouseEnter={() => setHoveredIdx(2)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group relative rounded-3xl overflow-hidden border border-[#e2d8c7] bg-[#231710] shadow-md hover:shadow-2xl transition-all duration-500 h-[360px] flex flex-col justify-end p-6 md:col-span-2 lg:col-span-1"
          >
            <Image
              src={SIGNATURE_COLLECTIONS[2].image}
              alt={SIGNATURE_COLLECTIONS[2].title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] uppercase font-semibold tracking-[0.02em] text-white glass-badge bg-black/40 px-3 py-1 rounded-full font-sans inline-block border border-white/20">
                Made-to-Order
              </span>
              <h3 className="font-heading text-xl sm:text-2xl text-white font-semibold group-hover:text-[#dfb758] transition-colors">
                {SIGNATURE_COLLECTIONS[2].title}
              </h3>
              <p className="text-xs text-[#ede5d8]/90 leading-relaxed font-sans">
                {SIGNATURE_COLLECTIONS[2].description}
              </p>
              <div className="pt-2">
                <Link
                  href="/catalog?category=Custom%20Orders"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white uppercase tracking-[0.02em] hover:text-[#ede5d8] group-hover:underline underline-offset-4 font-sans"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4: Corporate Gifting */}
          <div
            onMouseEnter={() => setHoveredIdx(3)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group relative rounded-3xl overflow-hidden border border-[#e2d8c7] bg-[#231710] shadow-md hover:shadow-2xl transition-all duration-500 h-[320px] md:h-[350px] lg:col-span-1 flex flex-col justify-end p-6"
          >
            <Image
              src={SIGNATURE_COLLECTIONS[3].image}
              alt={SIGNATURE_COLLECTIONS[3].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-2">
              <span className="text-[10px] uppercase font-semibold tracking-[0.02em] text-white glass-badge bg-black/40 px-3 py-1 rounded-full font-sans inline-block border border-white/20">
                Executive & Bulk Gifting
              </span>
              <h3 className="font-heading text-xl sm:text-2xl text-white font-semibold group-hover:text-[#dfb758] transition-colors">
                {SIGNATURE_COLLECTIONS[3].title}
              </h3>
              <p className="text-xs text-[#ede5d8]/90 leading-relaxed font-sans">
                {SIGNATURE_COLLECTIONS[3].description}
              </p>
              <div className="pt-2">
                <Link
                  href="/catalog?category=Corporate%20Gifting"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white uppercase tracking-[0.02em] hover:text-[#ede5d8] group-hover:underline underline-offset-4 font-sans"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 5: Wedding & Trousseau Packaging */}
          <div
            onMouseEnter={() => setHoveredIdx(4)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group relative rounded-3xl overflow-hidden border border-[#e2d8c7] bg-[#231710] shadow-md hover:shadow-2xl transition-all duration-500 h-[320px] md:h-[350px] md:col-span-2 lg:col-span-2 flex flex-col justify-end p-6"
          >
            <Image
              src={SIGNATURE_COLLECTIONS[4].image}
              alt={SIGNATURE_COLLECTIONS[4].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent transition-opacity duration-300" />
            
            <div className="relative z-10 space-y-2 max-w-xl">
              <span className="text-[10px] uppercase font-semibold tracking-[0.02em] text-white glass-badge bg-black/40 px-3 py-1 rounded-full font-sans inline-block border border-white/20">
                Bridal & Royal Heirlooms
              </span>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-white font-semibold group-hover:text-[#dfb758] transition-colors">
                {SIGNATURE_COLLECTIONS[4].title}
              </h3>
              <p className="text-xs sm:text-sm text-[#ede5d8]/90 leading-relaxed font-sans">
                {SIGNATURE_COLLECTIONS[4].description}
              </p>
              <div className="pt-2">
                <Link
                  href="/catalog?category=Wedding%20%26%20Trousseau%20Packaging"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white uppercase tracking-[0.02em] hover:text-[#ede5d8] group-hover:underline underline-offset-4 font-sans"
                >
                  <span>Explore Collection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
