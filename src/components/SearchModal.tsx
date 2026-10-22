"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PRODUCTS, Product } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import { Search, X, Sparkles, ArrowRight } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const { openQuickView, openDrawer } = useQuote();

  if (!isOpen) return null;

  const results = PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.collection.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.materials.toLowerCase().includes(q) ||
      p.idealFor.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
      />

      {/* Search Container */}
      <div className="relative w-full max-w-2xl bg-[#450206] text-[#faf7f2] rounded-2xl border border-[#dfb758]/40 shadow-2xl z-10 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150">
        
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#dfb758]/25 bg-[#350104] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#dfb758]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search hampers by name (e.g. Shahi Jal Mahal, Haveli, Tote, Cane...)"
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-[#ede5d8]/40 focus:outline-none font-sans font-medium"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 text-[#ede5d8]/60 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-[0.02em] text-[#dfb758] font-bold px-2 py-1 rounded hover:bg-white/5 font-sans"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-3 sm:p-4 divide-y divide-[#dfb758]/10 font-sans">
          {results.length > 0 ? (
            results.map((product) => (
              <div
                key={product.id}
                className="py-3 px-3 rounded-xl hover:bg-[#5a040a]/50 transition-colors flex items-center justify-between group cursor-pointer"
                onClick={() => {
                  onClose();
                  openQuickView(product);
                }}
              >
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[#dfb758]/30 flex-shrink-0 bg-black">
                    <Image
                      src={product.coverImage}
                      alt={product.name}
                      fill
                      sizes="48px"
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="font-heading text-sm font-semibold text-[#faf7f2] group-hover:text-[#dfb758] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-[#dfb758]/80 font-sans">
                      {product.collection} • {product.price}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onClose();
                      openDrawer(product);
                    }}
                    className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.02em] gold-gradient-btn text-[#240508] font-heading"
                  >
                    Quote
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-10 text-center text-xs text-[#ede5d8]/60 font-sans">
              No hampers matching &quot;{query}&quot;. Try searching for &quot;Wedding&quot;, &quot;Festive&quot;, or &quot;Gourmet&quot;.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
