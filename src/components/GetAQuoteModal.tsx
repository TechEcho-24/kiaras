"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useQuote } from "@/context/QuoteContext";
import { PRODUCTS, Product } from "@/data/products";
import {
  X,
  Plus,
  Minus,
  Trash2,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  Send,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Package
} from "lucide-react";

export function GetAQuoteModal() {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearQuote,
    isDrawerOpen,
    closeDrawer,
    totalItems,
  } = useQuote();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Quote Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occasion: "Wedding & Trousseau Packaging",
    deliveryCity: "Mumbai",
    deliveryDate: "",
    customCard: true,
    customSeal: true,
    specialNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReferenceId, setQuoteReferenceId] = useState("");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleQuickAdd = (product: Product) => {
    addItem(product, 1);
    setDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("Please add at least one hamper to your quote request.");
      return;
    }
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const generatedId = `KQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setQuoteReferenceId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end animate-in fade-in duration-300">
      
      {/* Dark backdrop */}
      <div
        onClick={closeDrawer}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Slide-over Quote Request Form Drawer */}
      <div className="relative w-full max-w-lg bg-[#faf8f5] text-[#231710] shadow-2xl flex flex-col h-full z-50 border-l border-[#dfb758]/30">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-[#450206] text-white flex items-center justify-between border-b border-[#dfb758]/30 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 border border-[#dfb758]/40 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#dfb758]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-heading text-lg sm:text-xl font-semibold tracking-wide text-white">
                  Get a Custom Quote
                </h2>
                {totalItems > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#dfb758] text-[#240508] font-sans">
                    {totalItems} units
                  </span>
                )}
              </div>
              <p className="text-[11px] text-[#ede5d8]/80 font-sans">
                Official proposal & pricing inquiry form
              </p>
            </div>
          </div>

          <button
            onClick={closeDrawer}
            className="p-2 text-[#ede5d8]/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 font-sans">
          
          {isSubmitted ? (
            /* SUCCESS CONFIRMATION STATE (NO WHATSAPP, PURE ONLINE QUOTE SUBMISSION) */
            <div className="space-y-6 text-center py-8 animate-in zoom-in-95">
              <div className="w-20 h-20 rounded-full bg-[#dfb758]/20 border-2 border-[#dfb758] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#450206]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase font-bold tracking-widest text-[#450206] bg-[#450206]/10 px-3 py-1 rounded-full font-sans">
                  Quote Request Submitted
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#231710]">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-xs sm:text-sm text-[#5c4a40] max-w-sm mx-auto font-sans font-light leading-relaxed">
                  Your bespoke inquiry for <strong className="text-[#450206]">{totalItems} hampers</strong> has been logged into our atelier management system.
                </p>
              </div>

              {/* Reference ID Summary Card */}
              <div className="p-4 rounded-2xl bg-white border border-[#e2d8c6] text-left space-y-2.5 shadow-sm text-xs text-[#5c4a40]">
                <div className="flex items-center justify-between border-b border-[#f0eae1] pb-2 font-mono">
                  <span className="font-sans text-[#8c786a]">Reference ID:</span>
                  <span className="font-bold text-sm text-[#450206]">{quoteReferenceId}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Contact Phone:</span>
                  <span className="font-semibold text-[#231710]">{formData.phone}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Occasion:</span>
                  <span className="font-semibold text-[#231710]">{formData.occasion}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>City:</span>
                  <span className="font-semibold text-[#231710]">{formData.deliveryCity}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    clearQuote();
                    closeDrawer();
                  }}
                  className="w-full py-3.5 px-6 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-wider shadow-lg font-heading"
                >
                  Done &amp; Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* SECTION 1: Selected Hampers */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#450206] font-heading flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#855312]" />
                    <span>Selected Hampers ({items.length})</span>
                  </span>

                  {items.length > 0 && (
                    <button
                      type="button"
                      onClick={clearQuote}
                      className="text-[11px] text-[#992d34] hover:underline"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Items List */}
                {items.length === 0 ? (
                  <div className="p-4 rounded-2xl bg-white border border-dashed border-[#dfb758] text-center space-y-2">
                    <p className="text-xs text-[#6b584c]">No hampers selected yet.</p>
                    <p className="text-[11px] text-[#8c786a]">Choose a hamper below to include in your quote request.</p>
                  </div>
                ) : (
                  <div className="space-y-2.5">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="p-3 rounded-2xl bg-white border border-[#e4dbcd] shadow-sm flex items-center justify-between gap-3"
                      >
                        <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-[#e4dbcd] flex-shrink-0 bg-[#faf8f5]">
                          <Image src={item.product.coverImage} alt={item.product.name} fill sizes="56px" className="object-cover" />
                        </div>

                        <div className="flex-1 min-w-0 pr-1">
                          <h4 className="font-heading text-xs font-bold text-[#231710] truncate">
                            {item.product.name}
                          </h4>
                          <span className="text-[10px] text-[#855312] block">
                            {item.product.collection}
                          </span>

                          {/* Stepper */}
                          <div className="inline-flex items-center border border-[#d6cbba] rounded-full bg-[#faf8f5] px-2 py-0.5 mt-1.5">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="p-0.5 text-[#5c4a40] hover:text-[#450206]"
                              aria-label="Decrease"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="font-heading text-xs font-bold text-[#231710] px-2 min-w-[20px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="p-0.5 text-[#5c4a40] hover:text-[#450206]"
                              aria-label="Increase"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          className="p-1 text-[#8c786a] hover:text-[#992d34] transition-colors"
                          aria-label="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {/* Quick Add Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full py-2 px-3 bg-white hover:bg-[#f5efe4] border border-[#dcd1be] rounded-xl flex items-center justify-between text-xs text-[#855312] transition-colors"
                  >
                    <span className="flex items-center gap-1.5">
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add / Change Hamper from Catalog</span>
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#dfd4c2] rounded-xl shadow-xl z-50 max-h-56 overflow-y-auto divide-y divide-[#f2ebd9]">
                      {PRODUCTS.map((prod) => (
                        <button
                          key={prod.id}
                          type="button"
                          onClick={() => handleQuickAdd(prod)}
                          className="w-full p-2 flex items-center justify-between text-left hover:bg-[#faf7f2] transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#dfb758]/30 flex-shrink-0">
                              <Image src={prod.coverImage} alt={prod.name} fill sizes="32px" className="object-cover" />
                            </div>
                            <span className="text-xs font-medium text-[#231710] font-heading">{prod.name}</span>
                          </div>
                          <Plus className="w-3.5 h-3.5 text-[#855312]" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* SECTION 2: Patron Details (The Form) */}
              <div className="space-y-3 bg-white p-4 sm:p-5 rounded-3xl border border-[#e4dbcd] shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-[#450206] font-heading block">
                  Your Contact Information
                </span>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#5c4a40] block mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-3.5 h-3.5 text-[#8c786a] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full text-xs pl-8 pr-3 py-2.5 rounded-xl bg-[#faf7f2] border border-[#dcd1be] focus:border-[#450206] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#5c4a40] block mb-1">
                      Phone / Mobile *
                    </label>
                    <div className="relative">
                      <Phone className="w-3.5 h-3.5 text-[#8c786a] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full text-xs pl-8 pr-3 py-2.5 rounded-xl bg-[#faf7f2] border border-[#dcd1be] focus:border-[#450206] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-[11px] font-semibold text-[#5c4a40] block mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-[#8c786a] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. radhika@example.com"
                      className="w-full text-xs pl-8 pr-3 py-2.5 rounded-xl bg-[#faf7f2] border border-[#dcd1be] focus:border-[#450206] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Occasion & Delivery City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-[#5c4a40] block mb-1">
                      Occasion / Event
                    </label>
                    <select
                      value={formData.occasion}
                      onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                      className="w-full text-xs px-3 py-2.5 rounded-xl bg-[#faf7f2] border border-[#dcd1be] focus:border-[#450206] focus:outline-none"
                    >
                      <option value="Wedding & Trousseau Packaging">Wedding &amp; Trousseau Packaging</option>
                      <option value="Corporate & Executive Gifting">Corporate &amp; Executive Gifting</option>
                      <option value="Festive Gifting (Diwali/Eid/New Year)">Festive Gifting (Diwali / Eid)</option>
                      <option value="Birthday & Milestone Celebration">Birthday &amp; Milestone</option>
                      <option value="Custom Bespoke Order">Custom Bespoke Order</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-[#5c4a40] block mb-1">
                      Delivery City / Location
                    </label>
                    <div className="relative">
                      <MapPin className="w-3.5 h-3.5 text-[#8c786a] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.deliveryCity}
                        onChange={(e) => setFormData({ ...formData, deliveryCity: e.target.value })}
                        placeholder="e.g. Mumbai, Delhi, Dubai"
                        className="w-full text-xs pl-8 pr-3 py-2.5 rounded-xl bg-[#faf7f2] border border-[#dcd1be] focus:border-[#450206] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Expected Delivery Date */}
                <div>
                  <label className="text-[11px] font-semibold text-[#5c4a40] block mb-1">
                    Target Delivery Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 text-[#8c786a] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.deliveryDate}
                      onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                      className="w-full text-xs pl-8 pr-3 py-2.5 rounded-xl bg-[#faf7f2] border border-[#dcd1be] focus:border-[#450206] focus:outline-none text-[#231710]"
                    />
                  </div>
                </div>

                {/* Special Customization Notes */}
                <div>
                  <label className="text-[11px] font-semibold text-[#5c4a40] block mb-1">
                    Special Requirements or Gourmet Preferences
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    placeholder="Mention custom initials, dietary preferences, or packaging theme..."
                    className="w-full text-xs p-3 rounded-xl bg-[#faf7f2] border border-[#dcd1be] focus:border-[#450206] focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Submit Button (NO WHATSAPP HERE) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-transform font-heading"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Submitting Inquiry..." : "Submit Quote Request"}</span>
                </button>
                <p className="text-[11px] text-center text-[#8c786a] pt-2">
                  Our bespoke concierge will review your selections and contact you with a royal proposal.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
