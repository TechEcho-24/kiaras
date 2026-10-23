"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandLogo } from "./BrandLogo";
import { useQuote } from "@/context/QuoteContext";
import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Sparkles,
  FileDown
} from "lucide-react";
import * as fpixel from "@/lib/fpixel";

interface NavbarProps {
  onOpenSearch?: () => void;
}

export function Navbar({ onOpenSearch }: NavbarProps) {
  const pathname = usePathname();
  const { totalItems, openDrawer } = useQuote();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation Links: Menu button is Catalog which opens the catalog page with PDF
  const navLinks = [
    { label: "Catalog", href: "/catalog" },
    { label: "Collections", href: "/#collections" },
    { label: "About Us", href: "/#about" },
    { label: "Contact Us", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar - Metallic Gold Banner */}
      <div className="gold-gradient-bar w-full py-1.5 px-4 text-center text-xs md:text-sm font-serif font-medium tracking-[0.02em] text-[#2b060b] shadow-sm flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#2b060b] animate-pulse" />
        <span>Shop Our Latest Arrivals! Handcrafted Luxury Hampers For Every Celebration</span>
        <Sparkles className="w-3.5 h-3.5 text-[#2b060b] animate-pulse hidden sm:inline" />
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 bg-[#450206] border-b border-[#dfb758]/20 ${
          isScrolled ? "py-2.5 shadow-2xl" : "py-3.5 shadow-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Navigation Links (Without 'Home', as Home is in the logo) */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.02em] transition-colors duration-200 font-medium ${
                    isActive
                      ? "text-[#dfb758] border-b-2 border-[#dfb758] pb-1"
                      : "text-[#ede5d8]/90 hover:text-[#dfb758]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#ede5d8] hover:text-[#dfb758] transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Center: Brand Logo (Links to Home) */}
          <div className="flex-1 lg:flex-initial flex justify-center lg:justify-center">
            <BrandLogo variant="light" />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">

            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#ede5d8] hover:text-[#dfb758] transition-colors rounded-full hover:bg-white/5"
              aria-label="Search hampers"
              title="Search hampers"
            >
              <Search className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Quote / Shopping Bag Drawer Trigger */}
            <button
              onClick={() => openDrawer()}
              className="relative p-2 text-[#ede5d8] hover:text-[#dfb758] transition-colors rounded-full hover:bg-white/5"
              aria-label="View Quote Bag"
              title="View Quote Bag"
            >
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-[#dfb758] text-[10px] font-bold text-[#450206] ring-2 ring-[#450206]">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            {/* Get a Quote Primary CTA button */}
            <button
              onClick={() => openDrawer()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.02em] text-[#240508] gold-gradient-btn rounded-full shadow-md font-heading"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#dfb758]/20 bg-[#450206] px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs uppercase tracking-[0.02em] text-[#ede5d8] hover:text-[#dfb758] hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Quick Action Buttons - Side by Side in 1 row */}
            <div className="pt-3 border-t border-[#dfb758]/20 grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDrawer();
                }}
                className="py-2.5 px-3 text-xs font-semibold uppercase tracking-[0.02em] text-[#240508] gold-gradient-btn rounded-full shadow-md text-center font-heading"
              >
                Get a Quote
              </button>
              <a
                href="https://wa.me/919891993626"
                onClick={() => fpixel.event("Contact", { content_name: "Mobile Menu WhatsApp", channel: "WhatsApp" })}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 text-xs font-semibold tracking-[0.02em] text-[#dfb758] border border-[#dfb758]/40 hover:bg-white/5 rounded-full text-center font-sans flex items-center justify-center gap-1.5"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
