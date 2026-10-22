"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuoteProvider, useQuote } from "@/context/QuoteContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toast } from "@/components/Toast";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { PRODUCTS, Product } from "@/data/products";
import * as fpixel from "@/lib/fpixel";
import {
  Sparkles,
  Plus,
  Minus,
  Trash2,
  ChevronDown,
  Search,
  Check,
  CheckCircle2,
  Send
} from "lucide-react";

function QuotePageContent() {
  const {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearQuote,
    totalItems,
  } = useQuote();

  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [selectorQuantity, setSelectorQuantity] = useState(10);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownSearch, setDropdownSearch] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occasion: "Wedding & Trousseau Packaging",
    deliveryDate: "",
    location: "Mumbai, India",
    monogramming: true,
    customRibbon: true,
    waxSeal: false,
    specialNotes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteReferenceId, setQuoteReferenceId] = useState("");

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(dropdownSearch.toLowerCase()) ||
    p.collection.toLowerCase().includes(dropdownSearch.toLowerCase())
  );

  const handleAddProduct = () => {
    if (selectedProduct) {
      addItem(selectedProduct, selectorQuantity);
      setSelectorQuantity(10);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("Please select at least one hamper for your quote.");
      return;
    }

    setIsSubmitting(true);
    const generatedId = `KQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteReferenceId(generatedId);

    const hamperDetails = items
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.product.name} (Collection: ${item.product.collection}, Qty: ${item.quantity}, Price: ${item.product.price})`
      )
      .join(" | ");

    const payload = {
      _subject: `New Luxury Hamper Quote: ${formData.name || "Patron"} (${generatedId})`,
      _cc: "Sweta.hawkdesigning@gmail.com",
      _template: "table",
      _captcha: "false",
      Reference_ID: generatedId,
      Customer_Name: formData.name || "Not provided",
      Phone_Number: formData.phone || "Not provided",
      Email: formData.email || "Not provided",
      Occasion: formData.occasion,
      Delivery_Location: formData.location,
      Target_Delivery_Date: formData.deliveryDate || "Flexible",
      Monogramming: formData.monogramming ? "Yes (Included)" : "No",
      Custom_Ribbon: formData.customRibbon ? "Yes (Included)" : "No",
      Wax_Seal: formData.waxSeal ? "Yes (Included)" : "No",
      Selected_Hampers: hamperDetails,
      Total_Units: totalItems,
      Special_Notes: formData.specialNotes || "None",
    };

    try {
      await fetch("https://formsubmit.co/ajax/anujsachan98@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Facebook Pixel Lead Event
      fpixel.event("Lead", {
        content_name: "Bespoke Hamper Quote Request",
        content_category: formData.occasion,
        currency: "INR",
        value: totalItems * 5000,
        total_units: totalItems,
      });
    } catch (error) {
      console.warn("Quote email dispatch:", error);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const generateWhatsAppMessage = () => {
    const itemDetails = items
      .map((item, idx) => `${idx + 1}. ${item.product.name} (Qty: ${item.quantity})`)
      .join("\n");

    const message = `*KIARA'S LUXURY HAMPER INQUIRY*
Quote Ref: ${quoteReferenceId || "KQ-NEW"}
Name: ${formData.name || "Patron"}
Phone: ${formData.phone || "Not provided"}
Occasion: ${formData.occasion}
Location: ${formData.location}
Expected Date: ${formData.deliveryDate || "Flexible"}

*Selected Hampers:*
${itemDetails}

*Customizations:*
${formData.monogramming ? "• Custom Monogram Engraving\n" : ""}${formData.customRibbon ? "• Branded Satin Ribbon\n" : ""}${formData.waxSeal ? "• Royal Wax Seal\n" : ""}
*Notes:* ${formData.specialNotes || "None"}

Please share the bespoke proposal and pricing.`;

    return encodeURIComponent(message);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#231710] font-sans selection:bg-[#dfb758] selection:text-[#450206]">
      <Navbar />

      <main className="flex-1 w-full py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#450206]/10 border border-[#450206]/20 text-[#450206] text-xs font-semibold uppercase tracking-[0.2em] mb-2 font-sans">
              <Sparkles className="w-3.5 h-3.5 text-[#855312]" />
              <span>Bespoke Concierge</span>
              <Sparkles className="w-3.5 h-3.5 text-[#855312]" />
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#231710] font-bold tracking-tight">
              Request a Custom Hamper Quote
            </h1>
            <div className="w-16 h-1 bg-[#450206] mx-auto my-3 rounded-full" />
            <p className="text-xs sm:text-sm text-[#6b584c] mt-2 font-sans font-light">
              Select any of our {PRODUCTS.length} handcrafted hampers, specify your quantities, and receive a tailor-made luxury proposal.
            </p>
          </div>

          {isSubmitted ? (
            <div className="max-w-xl mx-auto bg-white border border-[#dfb758]/40 rounded-3xl p-8 sm:p-12 text-center shadow-2xl space-y-6 animate-in zoom-in-95">
              <div className="w-20 h-20 rounded-full bg-[#dfb758]/20 border-2 border-[#dfb758] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#450206]" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-semibold text-[#231710]">
                Quote Request Dispatched
              </h2>
              <p className="text-xs sm:text-sm text-[#6b584c] font-sans font-light leading-relaxed">
                Thank you, {formData.name || "Esteemed Patron"}. Your bespoke request for {totalItems} hampers has been dispatched to <strong className="text-[#450206]">anujsachan98@gmail.com</strong> &amp; <strong className="text-[#450206]">Sweta.hawkdesigning@gmail.com</strong>. Reference ID: <strong className="text-[#450206] font-mono">{quoteReferenceId}</strong>.
              </p>

              <div className="space-y-3 pt-4">
                <a
                  href={`https://wa.me/919891993626?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    fpixel.event("Contact", {
                      content_name: "Quote Confirmation WhatsApp Concierge",
                      channel: "WhatsApp",
                      quote_id: quoteReferenceId,
                    })
                  }
                  className="w-full py-3.5 px-6 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl font-heading"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0" />
                  <span>Send Details to WhatsApp Concierge</span>
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    clearQuote();
                  }}
                  className="w-full py-3 text-xs uppercase tracking-wider text-[#6b584c] hover:text-[#450206] font-semibold font-sans"
                >
                  Configure Another Hamper Order
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Product Selection & Live Cart (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Product Selector with Dropdown */}
                <div className="bg-white border border-[#e5ddcf] rounded-3xl p-6 shadow-md space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="font-heading text-xs font-bold uppercase tracking-wider text-[#450206] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#855312]" />
                      <span>Choose a Product Design</span>
                    </label>
                  </div>

                  {/* Dropdown with images */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full flex items-center justify-between p-3 bg-[#faf7f2] border border-[#dcd1be] hover:border-[#450206] rounded-2xl text-left transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[#dfb758]/30 flex-shrink-0 bg-white">
                          <Image
                            src={selectedProduct.coverImage}
                            alt={selectedProduct.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-heading text-xs sm:text-sm font-semibold text-[#231710]">
                            {selectedProduct.name}
                          </div>
                          <div className="text-[10px] text-[#855312] font-sans">
                            {selectedProduct.collection}
                          </div>
                        </div>
                      </div>
                      <ChevronDown className="w-4 h-4 text-[#855312]" />
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-[#dcd1be] rounded-2xl shadow-2xl z-50 overflow-hidden max-h-72 flex flex-col">
                        <div className="p-2.5 border-b border-[#f0eae1] bg-[#faf7f2] flex items-center gap-2">
                          <Search className="w-3.5 h-3.5 text-[#855312]" />
                          <input
                            type="text"
                            value={dropdownSearch}
                            onChange={(e) => setDropdownSearch(e.target.value)}
                            placeholder="Search hampers..."
                            className="w-full bg-transparent text-xs text-[#231710] placeholder-[#8c786a] focus:outline-none font-sans"
                            autoFocus
                          />
                        </div>
                        <div className="overflow-y-auto divide-y divide-[#f0eae1] font-sans">
                          {filteredProducts.map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => {
                                setSelectedProduct(p);
                                setDropdownOpen(false);
                              }}
                              className="w-full flex items-center justify-between p-2.5 text-left hover:bg-[#faf7f2] transition-colors"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="relative w-9 h-9 rounded-md overflow-hidden border border-[#dfb758]/30 flex-shrink-0 bg-white">
                                  <Image
                                    src={p.coverImage}
                                    alt={p.name}
                                    fill
                                    sizes="36px"
                                    className="object-cover"
                                  />
                                </div>
                                <div className="text-xs font-heading font-semibold text-[#231710]">{p.name}</div>
                              </div>
                              {selectedProduct.id === p.id && <Check className="w-3.5 h-3.5 text-[#450206]" />}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Quantity and Add Button */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex items-center bg-[#faf7f2] border border-[#dcd1be] rounded-full px-3 py-1.5">
                      <button
                        type="button"
                        onClick={() => setSelectorQuantity(Math.max(5, selectorQuantity - 5))}
                        className="p-1 text-[#855312]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <input
                        type="number"
                        min={1}
                        value={selectorQuantity}
                        onChange={(e) => setSelectorQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-12 text-center bg-transparent text-xs font-bold text-[#231710] focus:outline-none font-sans"
                      />
                      <button
                        type="button"
                        onClick={() => setSelectorQuantity(selectorQuantity + 5)}
                        className="p-1 text-[#855312]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleAddProduct}
                      className="flex-1 py-3 px-4 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 font-heading shadow-md"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add ({selectorQuantity} units)</span>
                    </button>
                  </div>
                </div>

                {/* Selected List */}
                <div className="bg-white border border-[#e5ddcf] rounded-3xl p-6 shadow-md space-y-3 font-sans">
                  <div className="flex items-center justify-between border-b border-[#f0eae1] pb-2">
                    <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-[#450206]">
                      Selected Hampers ({items.length})
                    </h3>
                    <span className="text-xs font-bold text-[#231710] font-sans">{totalItems} Total Units</span>
                  </div>

                  {items.length === 0 ? (
                    <p className="text-xs text-[#8c786a] py-4 text-center font-sans">
                      No hampers selected. Pick one above to add to your quote.
                    </p>
                  ) : (
                    <div className="space-y-2.5 max-h-60 overflow-y-auto pr-1">
                      {items.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center justify-between p-2.5 rounded-2xl bg-[#faf7f2] border border-[#e8dfcf]"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="relative w-10 h-10 rounded-md overflow-hidden border border-[#dfb758]/30 flex-shrink-0 bg-white">
                              <Image
                                src={item.product.coverImage}
                                alt={item.product.name}
                                fill
                                sizes="40px"
                                className="object-cover"
                              />
                            </div>
                            <div className="text-xs font-heading font-semibold text-[#231710]">
                              {item.product.name}
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => removeItem(item.product.id)}
                              className="text-red-500/80 hover:text-red-600 p-1 rounded hover:bg-red-50"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Right Column: Inquiry Form (7 cols) */}
              <div className="lg:col-span-7 bg-white border border-[#e5ddcf] rounded-3xl p-6 sm:p-8 shadow-xl font-sans">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#f0eae1] pb-3">
                    <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                      Celebration &amp; Delivery Details
                    </h2>
                    <p className="text-xs text-[#6b584c] mt-0.5 font-sans">
                      Tell us about your event so our artisans can calibrate the styling and packing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#231710] mb-1 font-sans">
                        Occasion / Event *
                      </label>
                      <select
                        value={formData.occasion}
                        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                        className="w-full bg-[#faf7f2] border border-[#dcd1be] rounded-xl px-3 py-2 text-xs text-[#231710] focus:outline-none focus:border-[#450206] font-sans"
                      >
                        <option value="Wedding & Trousseau Packaging">Wedding & Trousseau Packaging</option>
                        <option value="Diwali & Festive Gifting">Diwali & Festive Celebrations</option>
                        <option value="Corporate Executive Hampers">Corporate Executive Gifting</option>
                        <option value="Milestone Anniversary">Milestone Anniversary / Birthday</option>
                        <option value="Destination Wedding Favors">Destination Wedding Favors</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#231710] mb-1 font-sans">
                        Target Delivery Date
                      </label>
                      <input
                        type="date"
                        value={formData.deliveryDate}
                        onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                        className="w-full bg-[#faf7f2] border border-[#dcd1be] rounded-xl px-3 py-2 text-xs text-[#231710] focus:outline-none focus:border-[#450206] font-sans"
                      />
                    </div>
                  </div>

                  {/* Personalization Options */}
                  <div className="p-3.5 rounded-2xl bg-[#faf7f2] border border-[#e8dfcf] space-y-2">
                    <span className="text-[11px] font-semibold text-[#450206] block font-sans">
                      Custom Personalization:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <label className="flex items-center gap-2 text-xs cursor-pointer text-[#231710]">
                        <input
                          type="checkbox"
                          checked={formData.monogramming}
                          onChange={(e) => setFormData({ ...formData, monogramming: e.target.checked })}
                          className="accent-[#450206]"
                        />
                        <span>Laser Monogram</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs cursor-pointer text-[#231710]">
                        <input
                          type="checkbox"
                          checked={formData.customRibbon}
                          onChange={(e) => setFormData({ ...formData, customRibbon: e.target.checked })}
                          className="accent-[#450206]"
                        />
                        <span>Branded Ribbons</span>
                      </label>
                      <label className="flex items-center gap-2 text-xs cursor-pointer text-[#231710]">
                        <input
                          type="checkbox"
                          checked={formData.waxSeal}
                          onChange={(e) => setFormData({ ...formData, waxSeal: e.target.checked })}
                          className="accent-[#450206]"
                        />
                        <span>Wax Stamp Seal</span>
                      </label>
                    </div>
                  </div>

                  {/* Patron Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-[11px] font-semibold text-[#231710] mb-1 font-sans">
                        Patron Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ananya Mehra"
                        className="w-full bg-[#faf7f2] border border-[#dcd1be] rounded-xl px-3 py-2 text-xs text-[#231710] focus:outline-none focus:border-[#450206] font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#231710] mb-1 font-sans">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-[#faf7f2] border border-[#dcd1be] rounded-xl px-3 py-2 text-xs text-[#231710] focus:outline-none focus:border-[#450206] font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#231710] mb-1 font-sans">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ananya@example.com"
                        className="w-full bg-[#faf7f2] border border-[#dcd1be] rounded-xl px-3 py-2 text-xs text-[#231710] focus:outline-none focus:border-[#450206] font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-[#231710] mb-1 font-sans">
                        Delivery City / State
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. New Delhi / London"
                        className="w-full bg-[#faf7f2] border border-[#dcd1be] rounded-xl px-3 py-2 text-xs text-[#231710] focus:outline-none focus:border-[#450206] font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#231710] mb-1 font-sans">
                      Special Inclusions / Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.specialNotes}
                      onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                      placeholder="Dry fruits preference, artisanal sweets, brass jars or custom theme..."
                      className="w-full bg-[#faf7f2] border border-[#dcd1be] rounded-xl px-3 py-2 text-xs text-[#231710] focus:outline-none focus:border-[#450206] font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || items.length === 0}
                    className={`w-full py-4 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl font-heading ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : "hover:scale-[1.01]"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[#240508] border-t-transparent rounded-full animate-spin" />
                        <span>Curating Custom Proposal...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Quote Request ({totalItems} Hampers)</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
      <Toast />
    </div>
  );
}

export default function QuotePage() {
  return (
    <QuoteProvider>
      <QuotePageContent />
    </QuoteProvider>
  );
}
