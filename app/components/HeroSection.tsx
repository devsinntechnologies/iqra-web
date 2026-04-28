"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative h-svh w-full flex items-center justify-center overflow-hidden bg-[#D7E8EE]">

      {/* ===== Background Image ===== */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#D7E8EE]/80 z-0" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full w-full text-center px-4 space-y-3 md:space-y-7">

        {/* ===== LOGO ===== */}
        <div className="relative animate-float w-full flex items-center justify-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={130}
              height={130}
              className="object-contain relative z-10 w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[130px] md:h-[130px]"
              priority
            />
          </Link>
        </div>

        {/* Main Heading */}
        <div>
          <h1
            className="text-[44px] sm:text-[65px] md:text-[80px] leading-[1.2] sm:leading-[1.05] font-extrabold
            bg-[linear-gradient(90deg,#1f4f5f_0%,#24677a_45%,#2f7f97_100%)] bg-clip-text text-transparent"
          >
            IQRA <br className="sm:hidden" /> QURAN
          </h1>
        </div>

        {/* Arabic Subtitle */}
        <div>
          <p className="mt-0 text-xl sm:text-2xl font-[500] text-[#237C9E]">اقرأ القرآن</p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-[90px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#2f7ea1] to-transparent" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#2f7ea1]" />
          <div className="w-[90px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#2f7ea1] to-transparent" />
        </div>

        {/* Tagline */}
        <div>
          <p className="text-[10px] sm:text-sm tracking-[1px] uppercase text-[#4E8798] leading-relaxed">
            YOUR MODERN COMPANION FOR QURAN, PRAYER &amp; <br /> ISLAMIC KNOWLEDGE
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {["Prayer Times", "Quran Recitation", "Qibla Direction", "Daily Duas"].map(
            (btn, index) => (
              <button
                key={index}
                className="px-3 text-[10px] sm:text-xs py-2 rounded-full border border-[#2c6e7f] text-[#2c6e7f] hover:bg-[#2c6e7f] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg backdrop-blur-sm bg-[#D4E9EF]"
              >
                {btn}
              </button>
            )
          )}
        </div>

        <div>
          <p className="text-[10px] tracking-[1px] uppercase text-[#4E8798] leading-relaxed">
            Scroll to explore
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;