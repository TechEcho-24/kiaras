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
import { Sparkles, Search, ArrowUpDown, FileDown, FileText, ExternalLink } from "lucide-react";

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
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#450206]/10 border border-[#450206]/20 text-[#450206] text-xs font-semibold uppercase tracking-[0.02em] mb-3 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-[#855312]" />
              <span>Full Artisanal Catalog</span>
              <Sparkles className="w-3.5 h-3.5 text-[#855312]" />
            </div>
            
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#231710] font-bold tracking-[0.02em]">
              Kiara’s Luxury Hamper Catalog
            </h1>
            
            <div className="w-16 h-1 bg-[#450206] mx-auto my-3 rounded-full" />
            
            <p className="text-sm sm:text-base text-[#6b584c] mt-2 font-sans font-light leading-relaxed">
              Explore our master handcrafted lookbook in high resolution below, or download the complete PDF brochure directly to your device.
            </p>
          </div>

          {/* 1. Embedded PDF Viewer Container */}
          <div className="mb-4 rounded-3xl overflow-hidden border border-[#dfb758]/40 bg-[#231710] shadow-2xl">
            <div className="w-full h-[650px] sm:h-[800px] md:h-[950px] bg-[#1a0204]">
              <object
                data="/catalog.pdf#toolbar=1&navpanes=0&scrollbar=1"
                type="application/pdf"
                className="w-full h-full"
              >
                <iframe
                  src="/catalog.pdf#toolbar=1&navpanes=0"
                  className="w-full h-full border-0"
                  title="Kiara's Luxury Hamper Catalog"
                >
                  <p className="p-8 text-center text-[#ede5d8] text-sm">
                    Your browser does not support inline PDF viewing. Please use the button below to download or view the PDF catalog.
                  </p>
                </iframe>
              </object>
            </div>
          </div>

          {/* 2. Directly beneath the PDF: "Download PDF" Action Bar */}
          <div className="mb-14 p-5 sm:p-6 bg-white border border-[#dfd4c2] rounded-3xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-left w-full sm:w-auto">
              <div className="w-12 h-12 rounded-2xl bg-[#dfb758]/20 border border-[#dfb758] flex items-center justify-center text-[#450206] shrink-0">
                <FileText className="w-6 h-6 text-[#855312]" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#231710]">
                  Kiara’s Master Gifting Lookbook
                </h3>
                <p className="text-xs text-[#6b584c] font-sans">
                  Complete 2026 Collection • High-Resolution Artwork &amp; Inclusions
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <a
                href="/catalog.pdf"
                download="Kiaras-Luxury-Catalog.pdf"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-heading hover:scale-[1.02]"
              >
                <FileDown className="w-4 h-4" />
                <span>Download PDF</span>
              </a>

              <a
                href="/catalog.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full border border-[#450206]/30 text-[#450206] hover:bg-[#450206]/5 font-semibold text-xs uppercase tracking-wider transition-colors font-sans"
                title="Open PDF in new window"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Fullscreen</span>
              </a>
            </div>
          </div>

          {/* 3. Section Divider: Individual Hamper Selection & Quotation */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-heading text-2xl sm:text-3xl text-[#231710] font-bold tracking-[0.02em]">
              Browse &amp; Inquire by Hamper ({PRODUCTS.length} Signature Creations)
            </h2>
            <p className="text-xs sm:text-sm text-[#6b584c] mt-2 font-sans font-light">
              Filter by occasion, theme, or materials below to request instant bespoke pricing:
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
