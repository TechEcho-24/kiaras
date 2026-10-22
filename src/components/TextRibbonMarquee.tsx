"use client";

import React from "react";

export function TextRibbonMarquee() {
  const phrase = "Beautifully Crafted For You ✦ Bespoke Elegance ✦ Handcrafted Heritage ✦ Unmatched Luxury ✦ ";
  const repeated = Array(8).fill(phrase);

  return (
    <div className="w-full overflow-hidden bg-[#faf7f2] py-4 border-y border-[#dfb758]/35 shadow-sm select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {repeated.map((text, idx) => (
          <span
            key={idx}
            className="font-heading text-lg sm:text-xl md:text-2xl text-[#450206] tracking-[0.02em] font-normal mx-4 inline-block"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
