"use client";

import React from "react";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "gold" | "dark";
}

export function BrandLogo({ className = "", variant = "light" }: BrandLogoProps) {
  const isLight = variant === "light";
  const isGold = variant === "gold";

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col items-center justify-center text-center transition-transform duration-300 hover:scale-[1.02] ${className}`}
      aria-label="Kiara's Decadence Redefined"
    >
      {/* Brand Script Title with Arch Swash */}
      <div className="relative flex items-center justify-center">
        {/* Subtle decorative crest line */}
        <div className="absolute -top-2 flex items-center gap-1 opacity-75">
          <span className="h-[0.5px] w-6 bg-gradient-to-r from-transparent to-[#dfb758]" />
          <span className="text-[10px] text-[#dfb758]">✦</span>
          <span className="h-[0.5px] w-6 bg-gradient-to-l from-transparent to-[#dfb758]" />
        </div>

        <span
          className={`font-heading tracking-wider text-2xl md:text-3xl font-semibold select-none ${
            isGold
              ? "gold-gradient-text drop-shadow-[0_2px_8px_rgba(223,183,88,0.4)]"
              : isLight
              ? "text-[#faf7f2] drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
              : "text-[#450206]"
          }`}
        >
          Kiara’s
        </span>
      </div>

      {/* Brand Tagline: "decadence redefined" */}
      <span
        className={`font-sans text-[9px] md:text-[10px] tracking-[0.28em] uppercase font-medium -mt-0.5 select-none ${
          isGold
            ? "text-[#dfb758]"
            : isLight
            ? "text-[#dfb758]/90"
            : "text-[#450206]"
        }`}
      >
        decadence redefined
      </span>
    </Link>
  );
}
