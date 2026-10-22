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
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Phone
} from "lucide-react";

export default function PrivacyPolicyPage() {
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
              <span className="text-[#450206] font-semibold">Privacy Policy</span>
            </nav>

            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#450206]/10 border border-[#450206]/20 text-[#450206] text-xs font-semibold uppercase tracking-[0.02em] mb-4 font-sans">
                <ShieldCheck className="w-4 h-4 text-[#855312]" />
                <span>Patron Privacy &amp; Data Ethics</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#231710] tracking-tight mb-4">
                Privacy Policy
              </h1>
              <p className="text-[#6b584c] text-sm sm:text-base font-light leading-relaxed">
                At Kiara’s Atelier, we honor your trust with the same discretion, precision, and craftsmanship that define our luxury gifting creations.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#8c786a]">
                <Clock className="w-3.5 h-3.5" />
                <span>Last Updated: October 2026 • Effective Immediately</span>
              </div>
            </div>

            {/* Content Container */}
            <div className="bg-white rounded-3xl border border-[#e8dfcf] p-6 sm:p-10 md:p-12 shadow-sm space-y-10">
              
              {/* Introduction */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Our Commitment to Discretion
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#6b584c] leading-relaxed pl-11">
                  Kiara’s Gifting Atelier operates from <strong>Delhi, India</strong>, curating bespoke trousseau hampers, festive gift collections, and corporate gifting suites pan-India. We recognize that gifting often involves personal relationships, private addresses of esteemed recipients, and corporate confidentiality. We guarantee that your information is treated with highest security standards and never sold, rented, or traded.
                </p>
              </section>

              {/* Information Collected */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Information We Collect
                  </h2>
                </div>
                <div className="pl-11 space-y-4 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    To curate and deliver your custom gift orders with tailored excellence, we collect:
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#450206] shrink-0 mt-1" />
                      <span><strong>Contact Details:</strong> Your name, phone number, WhatsApp contact, and email address when requesting quotes or initiating concierge consultations.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#450206] shrink-0 mt-1" />
                      <span><strong>Customization Details:</strong> Names, monograms, wedding dates, recipient gift card messages, and bespoke notes for ribbons and wax seal tags.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#450206] shrink-0 mt-1" />
                      <span><strong>Delivery &amp; Logistics Data:</strong> Recipient delivery addresses, landmark details, and preferred delivery time slots across India.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#450206] shrink-0 mt-1" />
                      <span><strong>Corporate Inquiries:</strong> Organization name, GSTIN (for tax invoicing), corporate liaison contact, and employee distribution lists.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    How Your Information Is Used
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>We use your information exclusively for legitimate artisanal and commercial purposes:</p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Generating bespoke quotations and sending curated digital design mockups.</li>
                    <li>Crafting personalized packaging (monogram engraving, satin ribbon printing, wax sealing).</li>
                    <li>Dispatching packages via trusted white-glove courier and logistics partners across Delhi NCR and Pan-India.</li>
                    <li>Communicating real-time updates regarding order preparation, dispatch, and transit tracking.</li>
                    <li>Internal order accounting, invoicing, and statutory tax compliance under Indian Law.</li>
                  </ul>
                </div>
              </section>

              {/* Cookies, Meta Pixel & Analytics */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Analytics, Meta Pixel &amp; Cookies
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    We deploy industry-standard technologies including the Meta (Facebook) Pixel and standard session cookies. These enable us to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5">
                    <li>Understand which signature hamper collections resonate with visitors.</li>
                    <li>Measure the effectiveness of our social campaigns and wedding showcase presentations.</li>
                    <li>Deliver relevant festive and seasonal gifting recommendations to patrons across Meta platforms without compromising your identity.</li>
                  </ul>
                  <p className="text-xs text-[#8c786a] pt-1">
                    You can manage cookie settings in your browser at any time or opt-out of personalized advertisements via your social media profile privacy controls.
                  </p>
                </div>
              </section>

              {/* Data Security & Confidentiality */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Data Security &amp; Recipient Privacy
                  </h2>
                </div>
                <div className="pl-11 space-y-3 text-sm sm:text-base text-[#6b584c] leading-relaxed">
                  <p>
                    We implement encrypted transit (SSL/TLS), strict access controls, and secure server protocols. Furthermore, recipient addresses shared for bulk corporate distribution or wedding favor dispatches are permanently purged from active distribution systems 60 days following verified delivery.
                  </p>
                </div>
              </section>

              {/* Contact and Atelier Office */}
              <section className="space-y-4 border-t border-[#f2ede4] pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#f6f0e4] text-[#450206] flex items-center justify-center font-bold text-sm">
                    6
                  </div>
                  <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#231710]">
                    Privacy Officer &amp; Atelier Contacts
                  </h2>
                </div>
                <div className="pl-11 space-y-4 text-sm sm:text-base text-[#6b584c]">
                  <p>
                    If you wish to review, update, or request deletion of your information, or have any questions about this policy, please reach out to our team:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#fbf9f5] border border-[#e8dfcf] rounded-2xl p-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#450206]">
                        <MapPin className="w-4 h-4 text-[#855312]" />
                        <span>Registered Atelier</span>
                      </div>
                      <p className="text-sm text-[#231710] font-medium">Kiara’s Gifting Atelier</p>
                      <p className="text-xs text-[#6b584c]">Delhi, India</p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#450206]">
                        <Mail className="w-4 h-4 text-[#855312]" />
                        <span>Email Concierge</span>
                      </div>
                      <p className="text-xs text-[#231710] font-medium">anujsachan98@gmail.com</p>
                      <p className="text-xs text-[#231710] font-medium">Sweta.hawkdesigning@gmail.com</p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://wa.me/919891993626?text=Hello%20Kiara%27s%20Atelier,%20I%20have%20an%20inquiry%20regarding%20your%20Privacy%20Policy."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        fpixel.event("Contact", {
                          content_name: "Privacy Policy Concierge Inquiry",
                          channel: "WhatsApp",
                        })
                      }
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full gold-gradient-btn text-[#240508] font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Chat with Privacy Concierge (+91 98919 93626)</span>
                    </a>
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
