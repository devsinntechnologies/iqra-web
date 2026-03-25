"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative  h-auto min-[2000px] : h-auto w-full spac e-y-100  md:h-screen flex md:justify-center justify-start pt-0 overflow-hidden bg-[#D7E8EE]">
      text
      {/* ===== Background Image ===== */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
          
      />

      {/* Optional soft overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#D7E8EE]/80 z-0 h-auto min-[2000px] : h-auto w-full space-y-100 " />

      <div className="relative z-10 flex flex-col justify-center  h-auto min-[2000px] : h-auto w-full m-y-0 text-center px-4 w-full md:space-y-7 space-y-4 ">
        {/* ===== LOGO SECTION ===== */}
        {/* <div className="relative flex justify-center"> */}
        {/* Glow Behind Logo (aapka wala same) */}
        {/* <div className="absolute w-44 h-44 bg-[#257796] rounded-full blur-3xl animate-glow" /> */}
        {/* Logo + SHINE (same as header) */}
        <div className="relative animate-float w-full items-center justify-center flex">
          {/* SHINE layers */}
          {/* <div className="pointer-events-none absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(34,124,158,0.35)_0%,rgba(141,211,224,0.25)_35%,transparent_70%)] blur-[12px] opacity-100" /> */}
          {/* <div className="pointer-events-none absolute -inset-9 rounded-full bg-[radial-gradient(circle_at_55%_70%,rgba(255,255,255,0.85)_0%,transparent_60%)] blur-[9px] opacity-90" /> */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={130}
              height={130}
              className="object-contain relative z-10"
              priority
            />
          </Link>
        </div>
        {/* </div> */}

        {/* Main Heading */}
        <div>
          <h1
            className="text-[60px] sm:text-[80px] leading-[1.2] sm:leading-[1.05] font-extrabold
            bg-[linear-gradient(90deg,#1f4f5f_0%,#24677a_45%,#2f7f97_100%)] bg-clip-text text-transparent"
          >
            IQRA <br className="sm:hidden" /> QURAN
          </h1>
        </div>
        text

        {/* Arabic Subtitle */}
        <div>
          <p className="mt-0 text-2xl font-[500] text-[#237C9E]">اقرأ القرآن</p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-3">
          <div className="w-[90px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#2f7ea1] to-transparent" />
          <div className="w-[8px] h-[8px] rounded-full bg-[#2f7ea1]" />
          <div className="w-[90px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#2f7ea1] to-transparent" />
        </div>

        {/* Tagline */}
        <div>
          <p className="text-sm tracking-[1px] uppercase text-[#4E8798] leading-relaxed">
            YOUR MODERN COMPANION FOR QURAN, PRAYER & <br /> ISLAMIC KNOWLEDGE
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-0 flex flex-wrap justify-center gap-6">
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

        <div>
          <p className="text-[10px] pt-5 py-4 tracking-[1px] uppercase text-[#4E8798] leading-relaxed">
            Scroll to explore
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;