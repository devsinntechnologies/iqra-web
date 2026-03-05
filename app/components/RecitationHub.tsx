"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Headphones, Bookmark, Search } from "lucide-react";
import type { ReactNode } from "react";

export default function RecitationHub() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-[#D7E8EE] flex items-center">
      
      {/* Background */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="object-cover absolute inset-0 z-0 contrast-125 brightness-95"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#D7E8EE]/55 z-10" />

      {/* Container */}
      <div className="relative z-20 w-full mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-8 md:py-5">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-14 items-center py-4 sm:py-6 md:py-8">

          {/* ================= RIGHT CONTENT ================= */}
          <div className="flex flex-col justify-center order-1 md:order-2 translate-x-0 xl:translate-x-[-100px] md:-ml-0 xl:-ml-8 md:-mt-0 xl:-mt-10">

            {/* Feature Label */}
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#1f5f6f] via-[#2f6f86] to-[#8fd3e0]" />
              <p className="uppercase tracking-[3px] text-[11px] text-[#2f6f86]">
                FEATURE 02
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[38px] xl:text-[44px] leading-tight font-bold text-[#143642] mb-4 sm:mb-5 md:mb-6 text-center md:text-left">
              Quran <br />
              <span className="text-[#2f6f86]">Recitation Hub</span>
            </h1>

            {/* Ayah Card */}
            <div className="w-full bg-white/95 rounded-[16px] sm:rounded-[18px] md:rounded-[20px] px-4 sm:px-5 md:px-6 py-3 sm:py-4 shadow-lg mb-4 sm:mb-5 md:mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <p className="text-[12px] sm:text-[13px] text-[#3e6b7a] leading-[20px] flex-1 text-center sm:text-left">
                In the name of Allah, the Most Gracious, the Most Merciful —
                Al-Fatiha 1
              </p>

              <p className="text-[15px] sm:text-[16px] text-[#2f6f86] font-semibold text-center sm:text-right leading-snug">
                بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>
            </div>

            {/* Description */}
            <p className="text-[#3e6b7a] text-[13px] sm:text-[14px] leading-[22px] sm:leading-[24px] mb-6 sm:mb-7 md:mb-8 text-center md:text-left">
              Explore the complete Holy Quran with beautiful Arabic typography,
              multiple translations, and high-quality audio recitations from
              renowned Qaris.
            </p>

            {/* Features */}
            <div className="space-y-2">
              <Feature
                icon={<BookOpen size={16} />}
                title="Complete Quran"
                text="All 114 Surahs with Arabic text & translations"
              />
              <Feature
                icon={<Headphones size={16} />}
                title="Audio Recitation"
                text="Beautiful recitations by world-renowned Qaris"
              />
              <Feature
                icon={<Bookmark size={16} />}
                title="Bookmarks & Notes"
                text="Save your favourite Ayahs and personal notes"
              />
              <Feature
                icon={<Search size={16} />}
                title="Verse Search"
                text="Quickly find any Ayah by keyword or reference"
              />
            </div>
          </div>

          {/* ================= LEFT SIDE ================= */}
          <div className="flex flex-col items-center order-2 md:order-1 translate-x-0 xl:translate-x-[-80px]">

            {/* Floating Image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[200px] sm:w-[260px] md:w-[300px] lg:w-[380px] xl:w-[450px] h-[38vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] max-h-[620px]"
            >
              <Image
                src="/mob2.png"
                alt="Mobile Preview"
                fill
                priority
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
              />
            </motion.div>

            {/* Surah Cards */}
            <div className="mt-6 sm:mt-8 md:mt-10 w-full max-w-[260px] sm:max-w-[300px] md:max-w-[330px] lg:max-w-[350px] grid grid-cols-6 gap-2 sm:gap-3">

              {/* Top 3 Cards */}
              <div className="col-span-2">
                <Surah name="الفاتحة" en="Al-Fatiha" />
              </div>

              <div className="col-span-2">
                <Surah name="البقرة" en="Al-Baqarah" />
              </div>

              <div className="col-span-2">
                <Surah name="آل عمران" en="Al-Imran" />
              </div>

              {/* Centered Bottom Card */}
              <div className="col-start-3 col-span-2">
                <Surah name="النساء" en="An-Nisa" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= SURAH CARD ================= */

function Surah({
  name,
  en,
}: {
  name: string;
  en: string;
}) {
  return (
    <div className="w-full h-[60px] sm:h-[68px] md:h-[72px] lg:h-[75px] bg-white/95 rounded-[14px] sm:rounded-[16px] md:rounded-[18px] px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-center border border-[#d7e7ee] shadow-md">
      <p className="text-[#2f6f86] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-semibold leading-none">
        {name}
      </p>
      <p className="text-[10px] sm:text-[11px] md:text-[12px] text-[#7c98a3] mt-1 leading-none">{en}</p>
    </div>
  );
}

/* ================= FEATURE ITEM ================= */

function Feature({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#CDE6EF] flex items-center justify-center text-[#2f6f86] shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-[14px] sm:text-[15px] text-[#143642]">
          {title}
        </h4>
        <p className="text-[12px] sm:text-[13px] text-[#3e6b7a] mt-1 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}