"use client";
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex justify-center pt-5 overflow-hidden">
      {/* ===== Background Image ===== */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Optional soft overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#D7E8EE]/75 -z-10" />

      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* ===== LOGO SECTION ===== */}
        <div className="relative flex justify-center">
          {/* Glow Behind Logo (aapka wala same) */}
          <div className="absolute w-44 h-44 bg-[#257796] rounded-full blur-3xl animate-glow" />

          {/* Logo + SHINE (same as header) */}
          <div className="relative animate-float">
            {/* SHINE layers */}
            <div
              className="pointer-events-none absolute -inset-8 rounded-full
              bg-[radial-gradient(circle_at_35%_30%,rgba(34,124,158,0.35)_0%,rgba(141,211,224,0.25)_35%,transparent_70%)]
              blur-[12px] opacity-100"
            />
            <div
              className="pointer-events-none absolute -inset-9 rounded-full
              bg-[radial-gradient(circle_at_55%_70%,rgba(255,255,255,0.85)_0%,transparent_60%)]
              blur-[9px] opacity-90"
            />

            <Image
              src="/logo.png"
              alt="Logo"
              width={130}
              height={130}
              className="object-contain relative z-10"
              priority
            />
          </div>
        </div>

        {/* Main Heading */}
        <h1
          className="
            text-[80px]
            font-extrabold
            bg-[linear-gradient(90deg,#1f4f5f_0%,#24677a_45%,#2f7f97_100%)]
            bg-clip-text
            text-transparent
          "
        >
          Iqra Quran
        </h1>

        {/* Arabic Subtitle */}
        <p className="mt-0 text-2xl font-[500] text-[#237C9E]">اقرأ القرآن</p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div
            className="w-[90px] h-[2px] rounded-full
            bg-gradient-to-r from-transparent via-[#2f7ea1] to-transparent"
          />
          <div className="w-[8px] h-[8px] rounded-full bg-[#2f7ea1]" />
          <div
            className="w-[90px] h-[2px] rounded-full
            bg-gradient-to-r from-transparent via-[#2f7ea1] to-transparent"
          />
        </div>

        {/* Tagline */}
        <p className="text-sm tracking-[1px] uppercase text-[#4E8798] leading-relaxed">
          YOUR MODERN COMPANION FOR QURAN, PRAYER & <br />
          ISLAMIC KNOWLEDGE
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap justify-center gap-6">
          {["Prayer Times", "Quran Recitation", "Qibla Direction", "Daily Duas"].map(
            (btn, index) => (
              <button
                key={index}
                className="px-3 text-xs py-2 rounded-full border border-[#2c6e7f] text-[#2c6e7f] hover:bg-[#2c6e7f] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm bg-[#D4E9EF]"
              >
                {btn}
              </button>
            )
          )}
        </div>

        <p className="text-[10px] pt-5 tracking-[1px] uppercase text-[#4E8798] leading-relaxed">
          Scroll to explore
        </p>
      </div>
    </div>
  );
};

export default HeroSection;