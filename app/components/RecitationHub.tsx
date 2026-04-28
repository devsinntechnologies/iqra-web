"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Headphones, Bookmark, Search } from "lucide-react";
import type { ReactNode } from "react";

export default function RecitationHub() {
  return (
    <section className="relative isolate w-full h-svh overflow-hidden bg-[#D7E8EE]">

      <Image src="/background.png" alt="Background" fill priority sizes="100vw" className="object-cover absolute inset-0 z-0 contrast-125 brightness-95" />
      <div className="absolute inset-0 bg-[#D7E8EE]/55 z-10" />

      {/* Full-height flex container: col on mobile, grid on md+ */}
      <div className="relative z-20 h-full w-full flex flex-col md:grid md:grid-cols-2 md:gap-14
        px-4 sm:px-6 md:px-10
        pt-[64px] md:pt-0 md:items-center">

        {/* ── TEXT CONTENT (order-1 = top on mobile, right on desktop) ── */}
        <div className="flex flex-col justify-center w-full order-1 md:order-2 shrink-0 py-3 md:py-0 xl:translate-x-[-100px]">

          <div className="flex items-center gap-3 mb-2 md:mb-3 justify-center md:justify-start">
            <div className="w-12 h-[3px] rounded-full bg-gradient-to-r from-[#1f5f6f] via-[#2f6f86] to-[#8fd3e0]" />
            <p className="uppercase tracking-[3px] text-[11px] text-[#2f6f86]">FEATURE 02</p>
          </div>

          <h2 className="text-[22px] sm:text-[32px] md:text-[36px] lg:text-[44px] leading-tight font-bold text-[#143642] mb-2 sm:mb-5 text-center md:text-left">
            Quran <br />
            <span className="text-[#2f6f86]">Recitation Hub</span>
          </h2>

          <div className="w-full bg-white/95 rounded-[16px] sm:rounded-[20px] px-4 sm:px-6 py-2 sm:py-4 shadow-lg mb-2 sm:mb-6 flex flex-col sm:flex-row gap-2 sm:gap-4">
            <p className="text-[11px] sm:text-[13px] text-[#3e6b7a] leading-[18px] sm:leading-[20px] flex-1 text-center sm:text-left">
              In the name of Allah, the Most Gracious, the Most Merciful — Al-Fatiha 1
            </p>
            <p className="text-[13px] sm:text-[16px] text-[#2f6f86] font-semibold text-center sm:text-right leading-snug">
              بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </p>
          </div>

          <p className="text-[#3e6b7a] text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] mb-2 sm:mb-8 text-center md:text-left hidden sm:block">
            Explore the complete Holy Quran with beautiful Arabic typography,
            multiple translations, and high-quality audio recitations from renowned Qaris.
          </p>

          <div className="space-y-1.5 sm:space-y-2">
            <Feature icon={<BookOpen size={14} />} title="Complete Quran" text="All 114 Surahs with Arabic text & translations" />
            <Feature icon={<Headphones size={14} />} title="Audio Recitation" text="Beautiful recitations by world-renowned Qaris" />
            <Feature icon={<Bookmark size={14} />} title="Bookmarks & Notes" text="Save your favourite Ayahs and personal notes" />
            <Feature icon={<Search size={14} />} title="Verse Search" text="Quickly find any Ayah by keyword or reference" />
          </div>
        </div>

        {/* ── PHONE IMAGE (order-2 = bottom on mobile, fills height; left on desktop) ── */}
        <div className="flex-1 md:flex-none flex flex-col items-center justify-center order-2 md:order-1 min-h-0 xl:translate-x-[-80px]">

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="h-full max-h-[260px] md:max-h-[55vh] w-auto flex items-center"
          >
            <Image
              src="/mob2.png"
              alt="Mobile Preview"
              width={300}
              height={620}
              priority
              className="h-full w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.25)]"
            />
          </motion.div>

          {/* Surah Cards — only on sm+ */}
          <div className="hidden sm:grid mt-4 md:mt-8 w-full max-w-[300px] md:max-w-[330px] lg:max-w-[350px] grid-cols-6 gap-2 sm:gap-3">
            <div className="col-span-2"><Surah name="الفاتحة" en="Al-Fatiha" /></div>
            <div className="col-span-2"><Surah name="البقرة" en="Al-Baqarah" /></div>
            <div className="col-span-2"><Surah name="آل عمران" en="Al-Imran" /></div>
            <div className="col-start-3 col-span-2"><Surah name="النساء" en="An-Nisa" /></div>
          </div>
        </div>

      </div>
    </section>
  );
}

function Surah({ name, en }: { name: string; en: string }) {
  return (
    <div className="w-full h-[60px] sm:h-[72px] bg-white/95 rounded-[14px] sm:rounded-[18px] px-2 sm:px-4 py-2 sm:py-3 text-center border border-[#d7e7ee] shadow-md">
      <p className="text-[#2f6f86] text-[13px] sm:text-[15px] lg:text-[16px] font-semibold leading-none">{name}</p>
      <p className="text-[10px] sm:text-[12px] text-[#7c98a3] mt-1 leading-none">{en}</p>
    </div>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-[#CDE6EF] flex items-center justify-center text-[#2f6f86] shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-[13px] sm:text-[15px] text-[#143642]">{title}</h4>
        <p className="text-[11px] sm:text-[13px] text-[#3e6b7a] mt-0.5 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}