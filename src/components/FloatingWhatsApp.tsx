"use client";

import React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import * as fpixel from "@/lib/fpixel";

export function FloatingWhatsApp() {
  const whatsappUrl =
    "https://wa.me/919891993626?text=Hello%20Kiara's,%20I%20would%20like%20to%20inquire%20about%20your%20luxury%20hampers.";

  const handleClick = () => {
    fpixel.event("Contact", {
      content_name: "Floating WhatsApp Concierge",
      channel: "WhatsApp",
    });
  };

  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-40 pointer-events-none">
      <div className="relative">
        {/* Floating WhatsApp Button: Only this 56px circle accepts pointer events */}
        <a
          href={whatsappUrl}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Kiara's Concierge on WhatsApp (+91 98919 93626)"
          className="group pointer-events-auto relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.65)] transform hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/60 p-3"
        >
          {/* Floating tooltip: only visible when the green button itself is hovered */}
          <span className="hidden sm:inline-block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-full bg-[#231710]/95 text-white text-xs font-sans font-medium shadow-2xl backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#dfb758]/30 whitespace-nowrap">
            Chat with Concierge (+91 98919 93626)
          </span>

          {/* Soft pulse animation aura */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

          {/* Official WhatsApp Icon */}
          <WhatsAppIcon variant="white" className="w-8 h-8 text-white fill-white" />
        </a>
      </div>
    </aside>
  );
}
