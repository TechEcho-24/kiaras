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
  FileText,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Scale,
  MapPin,
  Mail,
  Gift
} from "lucide-react";

export default function TermsOfServicePage() {
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
              <span className="text-[#450206] font-semibold">Terms of Service</span>
            </nav>

            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#450206]/10 border border-[#450206]/20 text-[#450206] text-xs font-semibold uppercase tracking-[0.02em] mb-4 font-sans">
                <Scale className="w-4 h-4 text-[#855312]" />
                <span>Patron Agreement &amp; Atelier Standards</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#231710] tracking-tight mb-4">
                Terms of Service
              </h1>
              <p className="text-[#6b584c] text-sm sm:text-base font-light leading-relaxed">
                Welcome to Kiara’s Gifting Atelier. By accessing our catalog, requesting bespoke proposals, or placing an order, you agree to these artisanal terms.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#8c786a]">
                <Clock className="w-3.5 h-3.5" />
                <span>Last Updated: October 2026 • Governed under Delhi, India Jurisdiction</span>
              </div>
            </div>

            {/* Content Container */}
            <div className="bg-white rounded-3xl border border-[#e8dfcf] p-6 sm:p-10 md:p-12 shadow-sm space-y-10">
              
              {/* Artisanal Nature & Craftsmanship */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Handcrafted &amp; Artisanal Authenticity
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    Every hamper at Kiara’s Atelier is an authentic creation crafted by master artisans. Subtle natural variations in wooden grain, hand-poured wax seal shapes, raw brass patina, or hand-tied silk ribbons are hallmarks of genuine luxury craftsmanship rather than industrial defects.
                  </p>
                  <p>
                    Photographs and digital previews display our signature styling. Seasonal botanicals or ribbon shades of equivalent or superior premium grade may occasionally be substituted when required to maintain utmost freshness.
                  </p>
                </div>
              </section>

              {/* Quotations & Customization Approvals */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Quotations, Proofs &amp; Bespoke Approvals
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#450206] shrink-0 mt-1" />
                      <span><strong>Quotation Validity:</strong> Bespoke quotations provided via our concierge or online portal remain valid for 14 calendar days from issuance.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#450206] shrink-0 mt-1" />
                      <span><strong>Digital Proofs:</strong> Prior to custom laser-monogramming, wax sealing, or ribbon printing, our design atelier shares digital proofs via WhatsApp or email for patron confirmation.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#450206] shrink-0 mt-1" />
                      <span><strong>Finality of Sign-Off:</strong> Once written approval is given by the patron, monogram initials, names, and wedding dates cannot be altered without incurring component remake costs.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Payment Terms & Commercial Orders */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Payment Milestones &amp; Corporate Invoicing
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    For bespoke and bulk orders (Wedding Favors, Diwali Hampers, Corporate Suites):
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>A <strong>50% non-refundable booking deposit</strong> is required to initiate material procurement, artisan scheduling, and box fabrication.</li>
                    <li>The balance <strong>50% is due upon quality approval</strong> and prior to dispatch from our Delhi atelier.</li>
                    <li>GST invoices will be issued in accordance with Indian tax regulations. Corporate patrons must provide active GSTIN during quotation approval.</li>
                  </ul>
                </div>
              </section>

              {/* Perishable Inclusions & Gourmet Ingredients */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Gourmet Delicacies, Dry Fruits &amp; Shelf Life
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    All artisanal chocolates, dry fruits (Mamra almonds, Kashmiri walnuts, Afghan figs), organic saffron, and preserves included in Kiara’s hampers are sealed in nitrogen-flushed or food-grade airtight containers.
                  </p>
                  <p>
                    We recommend storing edible items in a cool, dry environment away from direct heat or humidity. The patron is responsible for notifying us of any recipient food allergies prior to curation.
                  </p>
                </div>
              </section>

              {/* Intellectual Property & Visuals */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Intellectual Property
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    All hamper concepts, box construction designs, aesthetic compositions, photography, branding elements, and copy displayed on this website are the proprietary intellectual property of <strong>Kiara’s Gifting Atelier</strong>. Any unauthorized commercial reproduction, imitation, or repurposing without prior written consent is strictly prohibited.
                  </p>
                </div>
              </section>

              {/* Jurisdiction & Legal Venue */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    6
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Governing Law &amp; Dispute Resolution
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    These Terms of Service and any contractual agreements entered into with Kiara’s Gifting Atelier shall be governed by, and construed in accordance with, the laws of the Republic of India. Any legal dispute, controversy, or claim shall fall under the exclusive jurisdiction of the competent courts of <strong>Delhi, India</strong>.
                  </p>
                </div>
              </section>

              {/* Atelier Support Concierge */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    7
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Legal &amp; Contract Concierge
                  </h2>
                </div>
                <div className="pl-11 space-y-4 text-sm sm:text-base text-[#6b584c]">
                  <p>
                    Have questions regarding bespoke contractual clauses or custom corporate service level agreements (SLAs)?
                  </p>
                  
                  <div className="flex flex-wrap gap-4 items-center pt-2">
                    <a
                      href="https://wa.me/919891993626?text=Hello%20Kiara%27s%20Atelier,%20I%20have%20an%20inquiry%20regarding%20your%20Terms%20of%20Service."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        fpixel.event("Contact", {
                          content_name: "Terms of Service Concierge Inquiry",
                          channel: "WhatsApp",
                        })
                      }
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Speak with Legal Concierge (+91 98919 93626)</span>
                    </a>

                    <div className="text-xs text-[#8c786a] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#450206]" />
                      <span>Kiara’s Atelier • Delhi, India</span>
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
