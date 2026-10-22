"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuote } from "@/context/QuoteContext";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react";

export function Footer() {
  const { openDrawer } = useQuote();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#450206] text-[#faf7f2] border-t border-[#dfb758]/25 relative overflow-hidden">
      

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex justify-start">
              <Link href="/" className="inline-block transition-transform duration-300 hover:scale-[1.02]" aria-label="Kiara's Home">
                <Image
                  src="/newlogo.png"
                  alt="Kiara's - Decadence Redefined"
                  width={220}
                  height={110}
                  className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
                  priority
                />
              </Link>
            </div>
            <p className="text-xs sm:text-sm text-[#ede5d8]/80 leading-relaxed font-sans font-light">
              Kiara’s transforms the tradition of gifting into an enduring art form. Handcrafted keepsake boxes, palatial miniature art, and custom gourmet selections curated with royal elegance.
            </p>
            <div className="pt-2 text-xs text-[#dfb758] flex items-center gap-2 font-sans font-medium">
              <ShieldCheck className="w-4 h-4 text-[#dfb758]" />
              <span>Since 2019: A trusted name in luxury gifting</span>
            </div>
          </div>

          {/* Hamper Collections (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.02em] text-[#dfb758]">
              Curated Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#ede5d8]/85 font-sans">
              <li>
                <Link href="/catalog?category=Wedding%20%26%20Trousseau%20Packaging" className="hover:text-[#dfb758] transition-colors">
                  Wedding & Trousseau Packaging
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Festive%20Gifting" className="hover:text-[#dfb758] transition-colors">
                  Festive Gifting (Diwali & Eid)
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Gourmet%20Gift%20Hampers" className="hover:text-[#dfb758] transition-colors">
                  Gourmet Gift Hampers
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Corporate%20Gifting" className="hover:text-[#dfb758] transition-colors">
                  Corporate Leadership Boxes
                </Link>
              </li>
              <li>
                <Link href="/catalog?category=Custom%20Orders" className="hover:text-[#dfb758] transition-colors">
                  Bespoke Made-to-Order Hampers
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge & Atelier (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.02em] text-[#dfb758]">
              Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-[#ede5d8]/85 font-sans">
              <li>
                <button onClick={() => openDrawer()} className="hover:text-[#dfb758] transition-colors text-left">
                  Request a Quote
                </button>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-[#dfb758] transition-colors">
                  All 13 Products
                </Link>
              </li>
              <li>
                <a href="#about" className="hover:text-[#dfb758] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#dfb758] transition-colors">
                  Signature Hampers
                </a>
              </li>
              <li>
                <a href="https://wa.me/919891993626" target="_blank" rel="noopener noreferrer" className="hover:text-[#dfb758] transition-colors">
                  VIP Direct Chat (+91 98919 93626)
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Atelier Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-[0.02em] text-[#dfb758]">
              Atelier & Contact
            </h4>
            
            <div className="space-y-2 text-xs text-[#ede5d8]/85 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#dfb758] mt-0.5 flex-shrink-0" />
                <span>Kiara’s Design Studio, Mumbai &amp; Pan-India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#dfb758] flex-shrink-0" />
                <a href="tel:+919891993626" className="hover:text-[#dfb758] transition-colors">+91 98919 93626</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#dfb758] flex-shrink-0" />
                <span>concierge@kiarasluxury.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-[11px] text-[#ede5d8]/70 block mb-2 font-sans">
                Join our private salon for seasonal releases
              </span>
              {subscribed ? (
                <div className="p-2.5 rounded-xl glass-badge text-xs text-[#dfb758] flex items-center gap-2 font-sans">
                  <Check className="w-4 h-4" />
                  <span>Welcome to the Kiara&apos;s Circle.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#350104] border border-[#dfb758]/30 rounded-full px-3.5 py-2 text-xs text-white placeholder-[#ede5d8]/40 focus:outline-none focus:border-[#dfb758] font-sans"
                  />
                  <button
                    type="submit"
                    className="p-2 rounded-full gold-gradient-btn text-[#240508] shadow-md flex-shrink-0"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-[#dfb758]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#ede5d8]/65 font-sans">
          <p>© 2026 Kiara’s. Decadence Redefined. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-[#dfb758] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#dfb758] transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-[#dfb758] transition-colors cursor-pointer">Shipping & Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
