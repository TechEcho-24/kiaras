"use client";

import React, { useState } from "react";
import Link from "next/link";
import { QuoteProvider } from "@/context/QuoteContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchModal } from "@/components/SearchModal";
import { GetAQuoteModal } from "@/components/GetAQuoteModal";
import { Toast } from "@/components/Toast";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import * as fpixel from "@/lib/fpixel";
import {
  Truck,
  RotateCcw,
  ShieldCheck,
  Package,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  MapPin,
  Mail,
  Camera
} from "lucide-react";

export default function ShippingAndReturnsPage() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <QuoteProvider>
      <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#231710] selection:bg-[#dfb758] selection:text-[#450206] font-sans">
        <Navbar onOpenSearch={() => setSearchOpen(true)} />

        <main className="flex-1 w-full py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[#8c786a]">
              <Link href="/" className="hover:text-[#450206] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#450206] font-semibold">Shipping &amp; Returns</span>
            </nav>

            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#450206]/10 border border-[#450206]/20 text-[#450206] text-xs font-semibold uppercase tracking-[0.02em] mb-4 font-sans">
                <Truck className="w-4 h-4 text-[#855312]" />
                <span>Pan-India Logistics &amp; Quality Guarantee</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#231710] tracking-tight mb-4">
                Shipping &amp; Returns Policy
              </h1>
              <p className="text-[#6b584c] text-sm sm:text-base font-light leading-relaxed">
                Every hamper is packed with double-reinforced velvet and temperature-stable cushioning to ensure pristine arrival across India.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#8c786a]">
                <Clock className="w-3.5 h-3.5" />
                <span>Dispatched from Delhi, India • Serving 19,000+ Pin Codes</span>
              </div>
            </div>

            {/* Content Container */}
            <div className="bg-white rounded-3xl border border-[#e8dfcf] p-6 sm:p-10 md:p-12 shadow-sm space-y-10">
              
              {/* Shipping Logistics & Timelines */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Pan-India Delivery &amp; Lead Times
                  </h2>
                </div>
                <div className="pl-11 space-y-4 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    All orders are hand-assembled and dispatched directly from our master atelier in <strong>Delhi, India</strong>. We partner with premier express air and surface logistics providers to ensure timely doorstep handover:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-[#fdfbf7] border border-[#e8dfcf] space-y-1.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#450206]">Delhi NCR</p>
                      <p className="text-base font-heading font-bold text-[#231710]">Same Day / 24 Hours</p>
                      <p className="text-xs text-[#6b584c]">Dedicated local chauffeur delivery available for delicate wedding hampers.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fdfbf7] border border-[#e8dfcf] space-y-1.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#450206]">Metro Cities</p>
                      <p className="text-base font-heading font-bold text-[#231710]">2 – 4 Business Days</p>
                      <p className="text-xs text-[#6b584c]">Air express delivery to Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune.</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fdfbf7] border border-[#e8dfcf] space-y-1.5">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#450206]">Rest of India</p>
                      <p className="text-base font-heading font-bold text-[#231710]">4 – 7 Business Days</p>
                      <p className="text-xs text-[#6b584c]">Secure Pan-India courier coverage to Tier 2/3 destinations and destination weddings.</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#8c786a] italic">
                    *Note: Monogrammed brassware, engraved plaques, and hand-waxed custom hampers require 2–4 days of artisanal craftsmanship before dispatch.
                  </p>
                </div>
              </section>

              {/* Fragile & Gourmet Packaging Standards */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Fragile Care &amp; Gourmet Protection
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    Luxury gifting demands flawless arrival. We apply multi-tier packaging protection:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#450206] shrink-0 mt-1" />
                      <span><strong>Rigid Hard-Shell Enclosures:</strong> Pinewood crates, reinforced leatherette boxes, and laser-carved MDF containers that resist exterior impact.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#450206] shrink-0 mt-1" />
                      <span><strong>Cushioned Cavities:</strong> Custom die-cut foam lined with plush suede or silk prevents internal movement of glassware, brass urulis, and glass candle jars.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#450206] shrink-0 mt-1" />
                      <span><strong>Freshness Shield:</strong> Gourmet chocolates, dry fruits, and mithai are sealed in moisture-proof, vacuumized or nitrogen-flushed containers.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Return Policy for Customized & Perishable Hampers */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Custom Order Returns Policy
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    Because our hampers contain <strong>personalized patron monograms, custom laser-etched keepsakes, and perishable gourmet delicacies</strong>, we cannot accept standard returns or exchanges once custom production has been initiated.
                  </p>
                  <p>
                    We provide high-resolution digital mockups and detailed ingredient/material specifications prior to production to guarantee alignment with your expectations.
                  </p>
                </div>
              </section>

              {/* 100% Transit Damage & Replacement Guarantee */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    100% Transit Damage Guarantee
                  </h2>
                </div>
                <div className="pl-11 space-y-4 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <div className="p-4 rounded-2xl bg-[#fff9ee] border border-[#dfb758]/50 flex items-start gap-3">
                    <ShieldCheck className="w-6 h-6 text-[#855312] shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-[#450206] space-y-1 font-medium">
                      <p className="font-bold">Zero-Risk Transit Commitment</p>
                      <p className="text-[#6b584c]">
                        In the rare event that your gift hamper arrives with external or internal transit damage (broken glass, cracked brassware, or compromised packaging), our atelier will immediately replace the damaged item or dispatch a fresh hamper at zero cost to you.
                      </p>
                    </div>
                  </div>

                  <p className="font-semibold text-[#231710]">How to file a transit claim:</p>
                  <ul className="space-y-2 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <Camera className="w-4 h-4 text-[#450206] shrink-0 mt-0.5" />
                      <span>Take clear photos or a short unboxing video of the damaged box and contents within <strong>24 hours</strong> of delivery.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <WhatsAppIcon className="w-4 h-4 text-[#450206] shrink-0 mt-0.5" />
                      <span>Send the evidence to our WhatsApp Concierge at <strong>+91 98919 93626</strong> or email <strong>anujsachan98@gmail.com</strong> with your order reference.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <RotateCcw className="w-4 h-4 text-[#450206] shrink-0 mt-0.5" />
                      <span>Our priority replacement team will review and dispatch an expedited replacement within 24–48 hours.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Order Cancellation Windows */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Order Cancellation Policy
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    Standard orders may be cancelled within <strong>12 hours of order confirmation</strong> for a full refund.
                  </p>
                  <p>
                    For custom wedding favors or bulk corporate orders where monogram engraving, bespoke ribbon printing, or specialized sourcing has commenced, cancellation fees proportionate to raw materials utilized will apply.
                  </p>
                </div>
              </section>

              {/* Concierge Contact Support */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    6
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Shipping Concierge &amp; Live Tracking
                  </h2>
                </div>
                <div className="pl-11 space-y-4 text-sm sm:text-base text-[#6b584c]">
                  <p>
                    Need an urgent delivery update for a wedding event or corporate ceremony? Connect directly with our Delhi logistics desk:
                  </p>
                  
                  <div className="pt-2 flex flex-wrap gap-4 items-center">
                    <a
                      href="https://wa.me/919891993626?text=Hello%20Kiara%27s%20Atelier,%20I%20need%20assistance%20tracking%20my%20hamper%20order."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        fpixel.event("Contact", {
                          content_name: "Shipping Inquiry WhatsApp Concierge",
                          channel: "WhatsApp",
                        })
                      }
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all font-heading"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Track Order on WhatsApp (+91 98919 93626)</span>
                    </a>

                    <div className="text-xs text-[#8c786a] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#450206]" />
                      <span>Atelier Hub: Delhi, India</span>
                    </div>
                  </div>
                </div>
              </section>

            </div>

          </div>
        </main>

        <Footer />
        <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
        <GetAQuoteModal />
        <Toast />
      </div>
    </QuoteProvider>
  );
}
