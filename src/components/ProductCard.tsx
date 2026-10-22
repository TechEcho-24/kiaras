"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import { ArrowRight, Sparkles } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openDrawer } = useQuote();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // Shorten clean title like the reference screenshot (BIO MAGENHARMONIE style)
  const displayTitle = product.name
    .replace(/Luxury Hamper|Hamper|Royal Trunk/gi, "")
    .trim()
    .toUpperCase();

  const handleGetPrice = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addItem(product, 1);
    openDrawer(product);
  };

  return (
    <div className="group rounded-3xl bg-[#ede6d8] hover:bg-[#e7dfcf] p-4 sm:p-5 border border-[#dfd4c2] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between">
      
      {/* 1. Top Image Container: Links to dedicated Product Detail Page */}
      <Link
        href={`/products/${product.slug}`}
        className="block relative aspect-square w-full rounded-2xl overflow-hidden bg-white border border-[#e2d8c6] shadow-sm cursor-pointer"
      >
        <Image
          src={product.images[currentImgIndex] || product.coverImage}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
        />

        {/* Reference Image Badge: Top-Left Rounded Pill */}
        <div className="absolute top-3 left-3 z-10 pointer-events-none">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.02em] bg-[#a8822d] text-white shadow-sm font-sans">
            {product.tag || "Bestseller"}
          </span>
        </div>

        {/* Multi-image switcher dots */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2.5 left-0 right-0 z-10 flex justify-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
            {product.images.slice(0, 4).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setCurrentImgIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all ${
                  currentImgIndex === idx
                    ? "bg-[#450206] w-4"
                    : "bg-[#231710]/40 hover:bg-[#231710]/70 w-1.5"
                }`}
                aria-label={`View photo ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </Link>

      {/* 2. Content below image: Title and subtitle link to product detail page */}
      <div className="pt-4 flex flex-col justify-between flex-1">
        
        <div>
          {/* Product Name (Links to Product Detail Page) */}
          <Link href={`/products/${product.slug}`}>
            <h3
              className="font-heading text-sm sm:text-base font-bold uppercase tracking-[0.02em] text-[#231710] group-hover:text-[#450206] transition-colors cursor-pointer"
              title={product.name}
            >
              {displayTitle}
            </h3>
          </Link>

          {/* Subtitle: 1-2 lines underneath */}
          <p className="text-xs text-[#5c4a40] line-clamp-2 mt-1 font-sans leading-relaxed" title={product.tagline || product.description}>
            {product.tagline || product.description}
          </p>
        </div>

        {/* 3. Bottom Row: Price removed, "Get Price" button opens Quote Form */}
        <div className="pt-4 mt-3 border-t border-[#dfd4c2]/80 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#855312] font-sans">
            <Sparkles className="w-3.5 h-3.5 text-[#855312]" />
            <span>Royal Keepsake</span>
          </div>

          <button
            type="button"
            onClick={handleGetPrice}
            className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.02em] text-[#240508] gold-gradient-btn shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 font-heading hover:scale-[1.02]"
          >
            <span>Get Price</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>

    </div>
  );
}
