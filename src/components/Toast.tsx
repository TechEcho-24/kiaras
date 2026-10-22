"use client";

import React from "react";
import { useQuote } from "@/context/QuoteContext";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function Toast() {
  const { toastMessage, openDrawer } = useQuote();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#240508] border border-[#dfb758]/60 text-[#faf7f2] px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 backdrop-blur-md">
        <div className="w-8 h-8 rounded-full bg-[#dfb758]/20 flex items-center justify-center flex-shrink-0">
          <Sparkles className="w-4 h-4 text-[#dfb758]" />
        </div>
        <div>
          <p className="text-xs font-medium text-white">{toastMessage}</p>
        </div>
        <button
          onClick={() => openDrawer()}
          className="ml-2 text-[11px] uppercase tracking-[0.02em] text-[#dfb758] font-bold hover:underline"
        >
          View Quote
        </button>
      </div>
    </div>
  );
}
