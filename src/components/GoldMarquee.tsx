"use client";

import React from "react";

export function GoldMarquee() {
  const phrase = "Since 2019: A trusted name in luxury gifting. ✦ Handcrafted in India ✦ Worldwide Delivery ✦ Decadence Redefined ✦ ";
  
  // Repeating for a seamless continuous ticker loop
  const repeatedPhrases = Array(8).fill(phrase);

  return (
    <div className="w-full overflow-hidden gold-gradient-bar py-3.5 border-y border-[#dfb758]/50 shadow-inner select-none">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {repeatedPhrases.map((text, idx) => (
          <span
            key={idx}
            className="font-heading text-sm sm:text-base md:text-lg tracking-wider text-[#240508] font-medium mx-3 inline-block"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
