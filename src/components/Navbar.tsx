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
  ChevronDown,
  Sparkles,
  Check
} from "lucide-react";

interface NavbarProps {
  onOpenSearch?: () => void;
}

export function Navbar({ onOpenSearch }: NavbarProps) {
  const pathname = usePathname();
  const { totalItems, openDrawer } = useQuote();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("India");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Home is removed from navLinks as it is now accessed via the center Brand Logo
  const navLinks = [
    { label: "Catalog", href: "/catalog" },
    { label: "Collections", href: "/#collections" },
    { label: "About Us", href: "/#about" },
    { label: "Contact Us", href: "/#contact" },
  ];

  const countries = [
    { name: "India", code: "IN", flag: "🇮🇳", currency: "INR (₹)" },
    { name: "United Arab Emirates", code: "AE", flag: "🇦🇪", currency: "AED (د.إ)" },
    { name: "United Kingdom", code: "GB", flag: "🇬🇧", currency: "GBP (£)" },
    { name: "United States", code: "US", flag: "🇺🇸", currency: "USD ($)" },
    { name: "Singapore", code: "SG", flag: "🇸🇬", currency: "SGD (S$)" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Announcement Bar - Metallic Gold Banner */}
      <div className="gold-gradient-bar w-full py-1.5 px-4 text-center text-xs md:text-sm font-serif font-medium tracking-wide text-[#2b060b] shadow-sm flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#2b060b] animate-pulse" />
        <span>Shop Our Latest Arrivals! Handcrafted Luxury Hampers For Every Celebration</span>
        <Sparkles className="w-3.5 h-3.5 text-[#2b060b] animate-pulse hidden sm:inline" />
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 glass-header ${
          isScrolled ? "py-2.5 shadow-2xl bg-[#450206]/95" : "py-3.5 bg-[#450206]/85"
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
                  className={`text-xs uppercase tracking-[0.18em] transition-colors duration-200 font-medium ${
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

          {/* Right: Actions (Call button removed as requested) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Country/Currency Selector with Glass Effect */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1 text-xs text-[#ede5d8] glass-badge rounded-full transition-colors hover:border-[#dfb758]"
                aria-label="Select Country"
              >
                <span>{countries.find((c) => c.name === selectedCountry)?.flag}</span>
                <span className="font-medium tracking-wide">{selectedCountry}</span>
                <ChevronDown className="w-3 h-3 text-[#dfb758]" />
              </button>

              {countryDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-[#450206] border border-[#dfb758]/30 rounded-xl shadow-2xl py-2 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-3 py-1 text-[11px] font-semibold text-[#dfb758] uppercase tracking-wider border-b border-[#dfb758]/15 mb-1 font-heading">
                    Delivering To
                  </div>
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setSelectedCountry(c.name);
                        setCountryDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-[#ede5d8] hover:bg-[#5a040a] hover:text-[#dfb758] flex items-center justify-between transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span>{c.flag}</span>
                        <span>{c.name}</span>
                      </span>
                      {selectedCountry === c.name && (
                        <Check className="w-3.5 h-3.5 text-[#dfb758]" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#240508] gold-gradient-btn rounded-full shadow-md font-heading"
            >
              Get a Quote
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#dfb758]/20 bg-[#450206]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-2 shadow-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs uppercase tracking-wider text-[#ede5d8] hover:text-[#dfb758] hover:bg-white/5 rounded-lg transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-[#dfb758]/15 flex items-center justify-between">
              <span className="text-xs text-[#dfb758]">Region:</span>
              <div className="flex items-center gap-1.5 text-xs text-[#ede5d8]">
                <span>🇮🇳 India</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
