"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "gold" | "dark";
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className = "", variant = "light", size = "md" }: BrandLogoProps) {
  const isDark = variant === "dark";

  // Height configurations based on size prop
  const heightClass = 
    size === "sm" ? "h-9 md:h-10" :
    size === "lg" ? "h-16 sm:h-20" :
    "h-11 sm:h-13 md:h-14";

  return (
    <Link
      href="/"
      className={`group inline-flex items-center justify-center transition-transform duration-300 hover:scale-[1.03] ${className}`}
      aria-label="Kiara's - Decadence Redefined"
    >
      <Image
        src="/newlogo.png"
        alt="Kiara's - Decadence Redefined"
        width={240}
        height={120}
        priority
        className={`${heightClass} w-auto object-contain transition-all duration-300 ${
          isDark 
            ? "brightness-0 filter" 
            : "drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
        }`}
      />
    </Link>
  );
}
