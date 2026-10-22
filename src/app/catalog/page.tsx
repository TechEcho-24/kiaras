"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { QuoteProvider } from "@/context/QuoteContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { GetAQuoteModal } from "@/components/GetAQuoteModal";
import { SearchModal } from "@/components/SearchModal";
import { Toast } from "@/components/Toast";
import { Sparkles, Search, ArrowUpDown } from "lucide-react";

function CatalogContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"featured" | "name">("featured");

  const categories = [
    "All",
    "Wedding & Trousseau Packaging",
    "Festive Gifting",
    "Gourmet Gift Hampers",
    "Corporate Gifting",
    "Custom Orders",
  ];

  let filtered = PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === "All" || p.collection === selectedCategory;
    const matchesQuery =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.materials.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  if (sortBy === "name") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#231710] selection:bg-[#dfb758] selection:text-[#450206]">
      <Navbar onOpenSearch={() => setSearchOpen(true)} />

      <main className="flex-1 w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#450206]/10 border border-[#450206]/20 text-[#450206] text-xs font-semibold uppercase tracking-[0.02em] mb-3 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-[#855312]" />
              <span>Full Artisanal Catalog</span>
              <Sparkles className="w-3.5 h-3.5 text-[#855312]" />
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#231710] font-bold tracking-[0.02em]">
              Curated Luxury Hampers &amp; Boxes
            </h1>
            
            <div className="w-16 h-1 bg-[#450206] mx-auto my-3 rounded-full" />
            
            <p className="text-sm sm:text-base text-[#6b584c] mt-2 font-sans font-light leading-relaxed">
              Explore our complete collection of {PRODUCTS.length} master handcrafted gift boxes. Select any design to request a personalized quote with bespoke dry fruits, sweets, and monogramming.
            </p>
          </div>

          {/* Search & Filter Controls (Clean Senior Designer UI) */}
          <div className="bg-white border border-[#e5ddcf] rounded-3xl p-4 sm:p-6 mb-10 shadow-md space-y-4">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#855312] absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search hampers by title, material, or motif..."
                  className="w-full bg-[#faf7f2] border border-[#dcd1be] rounded-2xl pl-10 pr-4 py-2.5 text-xs text-[#231710] placeholder-[#8c786a] focus:outline-none focus:border-[#450206] font-sans"
                />
              </div>

              {/* Sort selector */}
              <div className="flex items-center gap-2">
                <ArrowUpDown className="w-4 h-4 text-[#855312]" />
                <span className="text-xs text-[#6b584c] font-sans">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as "featured" | "name")}
                  className="bg-[#faf7f2] border border-[#dcd1be] rounded-2xl px-3 py-2 text-xs text-[#231710] focus:outline-none focus:border-[#450206] font-sans"
                >
                  <option value="featured">Featured Order</option>
                  <option value="name">Alphabetical (A-Z)</option>
                </select>
              </div>

            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 scrollbar-none">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all font-sans ${
                      isActive
                        ? "gold-gradient-btn text-[#240508] shadow-md"
                        : "bg-[#faf7f2] text-[#6b584c] hover:text-[#450206] border border-[#dcd1be] hover:border-[#450206]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6 text-xs text-[#855312] font-sans font-medium">
            <span>Showing {filtered.length} of {PRODUCTS.length} Handcrafted Hampers</span>
            {selectedCategory !== "All" && (
              <button
                onClick={() => setSelectedCategory("All")}
                className="underline hover:text-[#450206]"
              >
                Clear Category Filter
              </button>
            )}
          </div>

          {/* Product Cards Grid: Clean Minimalist Layout Matching Reference */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center rounded-3xl bg-white border border-[#e5ddcf] p-8">
              <p className="font-heading text-xl text-[#231710] font-bold mb-2">No hampers matched your criteria</p>
              <p className="text-xs text-[#6b584c] font-sans">Try searching with a different term or resetting the filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-6 py-2.5 text-xs uppercase tracking-[0.02em] gold-gradient-btn text-[#240508] font-bold rounded-full font-heading"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />

      {/* Modals & Drawers */}
      <GetAQuoteModal />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <Toast />
    </div>
  );
}

export default function CatalogPage() {
  return (
    <QuoteProvider>
      <Suspense fallback={<div className="min-h-screen bg-[#faf8f5] text-[#450206] flex items-center justify-center font-heading font-semibold">Loading Catalog...</div>}>
        <CatalogContent />
      </Suspense>
    </QuoteProvider>
  );
}
