"use client";

import React from "react";
import { HeartHandshake, Sparkles, Globe2, Award } from "lucide-react";

export function ClassApartSection() {
  const features = [
    {
      title: "Handcrafted Excellence",
      description: "Every hamper and box is made with care, detail, and high-quality materials.",
      icon: HeartHandshake,
    },
    {
      title: "Fully Customizable",
      description: "Safe and timely doorstep delivery throughout India/ Worldwide.",
      icon: Sparkles,
    },
    {
      title: "Shipping India / Worldwide",
      description: "Real people making great products with royal standards.",
      icon: Globe2,
    },
    {
      title: "Trusted Experience",
      description: "Hundreds of happy clients and glowing reviews.",
      icon: Award,
    },
  ];

  return (
    <section className="w-full bg-[#ffffff] text-[#1a0204] py-16 md:py-24 border-b border-[#ede5d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading matching Image 1 */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#1a0204] font-bold tracking-tight">
            Why Our Hampers Are a Class Apart
          </h2>
          <div className="w-16 h-0.5 bg-[#450206] mx-auto mt-4" />
        </div>

        {/* 4 Feature Columns matching Image 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group p-4 rounded-2xl transition-all duration-300 hover:bg-[#faf7f2]"
              >
                {/* Circular Icon with Thin #450206 Border */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-[#450206]/35 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:border-[#450206] group-hover:bg-[#450206]/5 shadow-sm">
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#450206] stroke-[1.4]" />
                </div>

                {/* Feature Title */}
                <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#1a0204] mb-2.5">
                  {item.title}
                </h3>

                {/* Feature Description */}
                <p className="text-xs sm:text-sm text-[#5c4a40] font-sans font-light leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
