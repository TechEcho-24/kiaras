"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useQuote } from "@/context/QuoteContext";
import {
  X,
  Sparkles,
  Plus,
  Minus,
  Check,
  ShieldCheck,
  Package,
  Ruler
} from "lucide-react";

export function ProductDetailModal() {
  const { quickViewProduct, closeQuickView, addItem, openDrawer, items } = useQuote();
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [quantity, setQuantity] = useState(10);

  if (!quickViewProduct) return null;

  const isAlreadyInQuote = items.some((item) => item.product.id === quickViewProduct.id);

  const handleAddToQuote = () => {
    addItem(quickViewProduct, quantity);
    closeQuickView();
    openDrawer();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      {/* Backdrop */}
      <div
        onClick={closeQuickView}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white text-[#231710] rounded-3xl border border-[#e5ddcf] shadow-2xl z-10 overflow-hidden max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 p-2 text-[#6b584c] hover:text-[#450206] bg-white/90 hover:bg-white rounded-full border border-[#e5ddcf] transition-colors shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* Left: Gallery (6 cols) */}
          <div className="md:col-span-6 p-6 sm:p-8 bg-[#faf7f2] flex flex-col justify-between space-y-4 border-r border-[#f0eae1]">
            
            {/* Main Featured Photo */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-[#e5ddcf] bg-white shadow-inner">
              <Image
                src={quickViewProduct.images[selectedImgIdx] || quickViewProduct.coverImage}
                alt={quickViewProduct.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-300"
              />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.02em] bg-[#c89837] text-white shadow-sm font-sans">
                  <Sparkles className="w-3 h-3" />
                  {quickViewProduct.tag}
                </span>
              </div>
            </div>

            {/* Thumbnail Navigation */}
            {quickViewProduct.images.length > 1 && (
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
                {quickViewProduct.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImgIdx(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                      selectedImgIdx === idx
                        ? "border-[#450206] scale-105 shadow-md ring-2 ring-[#450206]/20"
                        : "border-[#e5ddcf] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Angle ${idx + 1}`}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Narrative & Quote CTA (6 cols) */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div>
                <span className="text-xs uppercase font-bold tracking-[0.02em] text-[#855312] font-sans">
                  {quickViewProduct.collection}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#231710] mt-1 tracking-[0.02em]">
                  {quickViewProduct.name}
                </h2>
                <p className="text-xs text-[#6b584c] italic mt-0.5 font-sans">
                  {quickViewProduct.tagline}
                </p>
              </div>

              {/* Price badge */}
              <div className="inline-block px-3.5 py-1 rounded-full bg-[#faf7f2] border border-[#dcd1be]">
                <span className="text-xs font-bold text-[#231710] font-sans">
                  {quickViewProduct.price}
                </span>
                <span className="text-[10px] text-[#855312] ml-1.5 font-sans">(Custom Tier)</span>
              </div>

              {/* Evocative Narrative */}
              <p className="text-xs sm:text-sm text-[#6b584c] leading-relaxed font-sans font-light">
                {quickViewProduct.description}
              </p>

              {/* Key Highlights */}
              <div className="space-y-2 pt-2 border-t border-[#f0eae1]">
                <span className="font-heading text-xs font-bold uppercase tracking-[0.02em] text-[#450206] block">
                  Artisanal Specifications:
                </span>
                <ul className="space-y-1.5 font-sans">
                  {quickViewProduct.highlights.map((h, i) => (
                    <li key={i} className="text-xs text-[#231710] flex items-start gap-2">
                      <span className="text-[#855312] mt-0.5">✦</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Dimensions & Materials */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs border-t border-[#f0eae1] font-sans">
                <div>
                  <span className="text-[#855312] font-bold block">Dimensions:</span>
                  <span className="text-[#6b584c]">{quickViewProduct.dimensions}</span>
                </div>
                <div>
                  <span className="text-[#855312] font-bold block">Materials:</span>
                  <span className="text-[#6b584c]">{quickViewProduct.materials}</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions: Quantity & Add to Quote */}
            <div className="pt-4 border-t border-[#f0eae1] space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center bg-[#faf7f2] border border-[#dcd1be] rounded-full px-3 py-1">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(5, quantity - 5))}
                    className="p-1 text-[#855312] hover:text-[#450206]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-12 text-center text-xs font-bold text-[#231710] font-sans">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 5)}
                    className="p-1 text-[#855312] hover:text-[#450206]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAddToQuote}
                  className="flex-1 py-3 px-6 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-[0.02em] flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all font-heading"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Add to Quote ({quantity} units)</span>
                </button>
              </div>

              <div className="text-center">
                <span className="text-[10px] text-[#8c786a] font-sans">
                  Ideal for: {quickViewProduct.idealFor}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
