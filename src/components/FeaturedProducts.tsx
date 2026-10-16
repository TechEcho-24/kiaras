"use client";

import React from "react";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface FeaturedProductsProps {
  limit?: number;
  showFilters?: boolean;
}

export function FeaturedProducts({
  limit = 4,
}: FeaturedProductsProps) {
  const displayedProducts = PRODUCTS.slice(0, limit);

  return (
    <section id="products" className="w-full bg-[#faf8f5] text-[#231710] py-16 md:py-24 border-b border-[#ede5d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header exactly matching User's Reference Screenshot (media_1792044109586.png) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline mb-12">
          <div className="md:col-span-5">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#231710] font-bold tracking-tight">
              Signature Luxury Hampers
            </h2>
          </div>

          <div className="md:col-span-5">
            <p className="text-xs sm:text-sm text-[#5c4a40] font-sans font-light leading-relaxed">
              For royal weddings, festive gifting, and bespoke milestone celebrations — Handcrafted keepsakes inspired by Indian heritage.
            </p>
          </div>

          <div className="md:col-span-2 text-left md:text-right">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium tracking-wide text-[#231710] hover:text-[#450206] transition-colors group font-sans underline underline-offset-4 decoration-[#231710]/40"
            >
              <span>All Products</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Products Grid: Exactly 4 Cards in 1 Row (Matching User's Reference Image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
