"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { useQuote } from "@/context/QuoteContext";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import {
  Sparkles,
  Plus,
  Minus,
  Check,
  ShieldCheck,
  Truck,
  HeartHandshake,
  FileText,
  Gift,
  ArrowRight
} from "lucide-react";

interface ProductClientViewProps {
  product: Product;
  related: Product[];
}

export function ProductClientView({ product, related }: ProductClientViewProps) {
  const { addItem, openDrawer } = useQuote();
  const [selectedImgIdx, setSelectedImgIdx] = useState(0);
  const [quantity, setQuantity] = useState(15);
  const [activeTab, setActiveTab] = useState<"inclusions" | "packaging" | "customization">("inclusions");

  const handleGetPrice = () => {
    addItem(product, quantity);
    openDrawer(product);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Kiara's Concierge,\n\nI am interested in getting pricing and bespoke options for the "${product.name}" (Qty: ${quantity} units).\n\nCould you please share the quote?`
  );
  const whatsappUrl = `https://wa.me/919891993626?text=${whatsappMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-sans">
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-[#8c786a]">
        <Link href="/" className="hover:text-[#450206] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/catalog" className="hover:text-[#450206] transition-colors">
          Catalog
        </Link>
        <span>/</span>
        <Link
          href={`/catalog?category=${encodeURIComponent(product.collection)}`}
          className="hover:text-[#450206] transition-colors"
        >
          {product.collection}
        </Link>
        <span>/</span>
        <span className="text-[#450206] font-semibold truncate max-w-[200px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Product Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left: Multi-photo Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden border border-[#e5ddcf] bg-white shadow-xl">
            <Image
              src={product.images[selectedImgIdx] || product.coverImage}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
              className="object-cover object-center transition-all duration-300"
            />
            
            {/* Top-left Luxury Pill */}
            <div className="absolute top-4 left-4 z-10 pointer-events-none">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider bg-[#a8822d] text-white shadow-md font-sans">
                <Sparkles className="w-3.5 h-3.5" />
                {product.tag || "Signature Curation"}
              </span>
            </div>

            {/* Bottom-right Photo Index Indicator */}
            {product.images.length > 1 && (
              <div className="absolute bottom-4 right-4 z-10 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-medium text-white shadow-sm font-sans">
                {selectedImgIdx + 1} / {product.images.length}
              </div>
            )}
          </div>

          {/* Thumbnail Strip */}
          {product.images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImgIdx(idx)}
                  className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-all cursor-pointer ${
                    selectedImgIdx === idx
                      ? "border-[#450206] scale-105 shadow-md ring-2 ring-[#450206]/20"
                      : "border-[#e5ddcf] opacity-75 hover:opacity-100"
                  }`}
                  aria-label={`View picture ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`Preview ${idx + 1}`}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Trust Guarantees under Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#e5ddcf] text-xs text-[#6b584c]">
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#f5efe4] border border-[#e8ded0]">
              <Truck className="w-4 h-4 text-[#855312] shrink-0" />
              <span>Pan-India &amp; Global Express</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#f5efe4] border border-[#e8ded0]">
              <ShieldCheck className="w-4 h-4 text-[#855312] shrink-0" />
              <span>100% Inspected &amp; Sealed</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-[#f5efe4] border border-[#e8ded0]">
              <Gift className="w-4 h-4 text-[#855312] shrink-0" />
              <span>Bespoke Monogramming</span>
            </div>
          </div>
        </div>

        {/* Right: Specifications & Quote Action (5 cols) */}
        <div className="lg:col-span-5 space-y-6 bg-white border border-[#e5ddcf] rounded-3xl p-6 sm:p-8 shadow-xl">
          
          {/* Header & Title */}
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#855312] block font-heading">
              {product.collection}
            </span>
            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-[#231710] font-bold leading-tight">
              {product.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#6b584c] italic">
              {product.tagline}
            </p>
          </div>

          {/* Bespoke Quote Banner (Price removed as requested) */}
          <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#e8dfcf] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-[#855312] font-bold font-heading flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#855312]" />
                Pricing Upon Curation
              </span>
              <span className="text-[11px] text-[#450206] font-semibold bg-[#450206]/10 px-2.5 py-0.5 rounded-full border border-[#450206]/20">
                Bulk Tier Benefits
              </span>
            </div>
            <p className="text-xs text-[#6b584c] font-sans">
              Each hamper is hand-assembled to order with bespoke wax seal customization, custom cards, and tiered volume privileges.
            </p>
          </div>

          {/* Quantity Selector & Get Price CTA */}
          <div className="pt-2 space-y-3 font-sans">
            <div className="flex items-center justify-between">
              <label htmlFor="hamper-qty" className="text-xs font-bold uppercase tracking-wider text-[#231710] font-heading">
                Estimated Units Needed:
              </label>
              <span className="text-[11px] text-[#8c786a]">Min. suggested 5 units</span>
            </div>

            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center bg-[#faf7f2] border border-[#dcd1be] rounded-full px-3 py-1.5">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 5))}
                  className="p-1.5 text-[#855312] hover:text-[#450206] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-xs font-bold text-[#231710] font-sans" id="hamper-qty">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 5)}
                  className="p-1.5 text-[#855312] hover:text-[#450206] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Primary "Get Price" CTA button (Opens Quote Form Drawer) */}
              <button
                type="button"
                onClick={handleGetPrice}
                className="flex-1 py-3.5 px-6 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-md hover:shadow-xl transition-all font-heading hover:scale-[1.02] cursor-pointer"
              >
                <span>Get Price</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Concierge WhatsApp Inquiries */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#f9f5ee] hover:bg-[#f0e7d6] border border-[#dfd4c2] text-xs uppercase tracking-wider text-[#231710] font-semibold flex items-center justify-center gap-2 transition-colors font-sans hover:text-[#25D366]"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Inquire via WhatsApp (+91 98919 93626)</span>
            </a>
          </div>

          {/* Interactive Information Tabs */}
          <div className="pt-4 border-t border-[#f0eae1] font-sans">
            <div className="flex items-center gap-2 border-b border-[#f0eae1] pb-2">
              <button
                type="button"
                onClick={() => setActiveTab("inclusions")}
                className={`text-xs font-bold uppercase tracking-wider pb-1 transition-colors ${
                  activeTab === "inclusions"
                    ? "text-[#450206] border-b-2 border-[#450206]"
                    : "text-[#8c786a] hover:text-[#231710]"
                }`}
              >
                Inclusions
              </button>
              <span className="text-[#dcd1be]">|</span>
              <button
                type="button"
                onClick={() => setActiveTab("packaging")}
                className={`text-xs font-bold uppercase tracking-wider pb-1 transition-colors ${
                  activeTab === "packaging"
                    ? "text-[#450206] border-b-2 border-[#450206]"
                    : "text-[#8c786a] hover:text-[#231710]"
                }`}
              >
                Packaging &amp; Dimensions
              </button>
              <span className="text-[#dcd1be]">|</span>
              <button
                type="button"
                onClick={() => setActiveTab("customization")}
                className={`text-xs font-bold uppercase tracking-wider pb-1 transition-colors ${
                  activeTab === "customization"
                    ? "text-[#450206] border-b-2 border-[#450206]"
                    : "text-[#8c786a] hover:text-[#231710]"
                }`}
              >
                Custom Monograms
              </button>
            </div>

            <div className="pt-3 text-xs text-[#6b584c] leading-relaxed">
              {activeTab === "inclusions" && (
                <div className="space-y-2">
                  <p className="font-medium text-[#231710]">{product.description}</p>
                  <ul className="space-y-1.5 pt-1">
                    {product.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#855312] mt-0.5 font-bold">✦</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "packaging" && (
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl bg-[#faf7f2] border border-[#e8dfcf]">
                    <div>
                      <span className="text-[#855312] font-bold block mb-0.5">Dimensions:</span>
                      <span className="text-[#231710] font-medium">{product.dimensions}</span>
                    </div>
                    <div>
                      <span className="text-[#855312] font-bold block mb-0.5">Craft Materials:</span>
                      <span className="text-[#231710] font-medium">{product.materials}</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-[#8c786a]">
                    Handcrafted rigid box or royal trunk structure with reinforced corners and premium velvet/satin lining.
                  </p>
                </div>
              )}

              {activeTab === "customization" && (
                <div className="space-y-2">
                  <p>
                    Every hamper can be bespoke tailored with:
                  </p>
                  <ul className="space-y-1 list-disc list-inside text-[11px]">
                    <li>Wax seal stamps with bride &amp; groom or corporate monogram</li>
                    <li>Foil-stamped ribbons with custom typography</li>
                    <li>Handwritten calligraphy note card on imported cotton paper</li>
                    <li>Dietary adaptations (eggless, gluten-free, dry-fruit only)</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* "You May Also Like" Related Products Section */}
      {related.length > 0 && (
        <section aria-label="You May Also Like" className="mt-20 pt-14 border-t border-[#e5ddcf]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#855312] font-semibold font-sans block mb-2">
              Curated Royal Hampers
            </span>
            <h2 className="font-heading text-2xl sm:text-4xl font-bold text-[#231710]">
              You May Also Like
            </h2>
            <p className="text-xs sm:text-sm text-[#6b584c] mt-2 font-sans">
              Discover complementary handcrafted suites designed for discerning celebrations, grand weddings, and executive gifting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((rel) => (
              <ProductCard key={rel.id} product={rel} />
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
