"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Headphones, Bookmark, Search } from "lucide-react";
import type { ReactNode } from "react";

export default function RecitationHub() {
  return (
 <section className="relative isolate h-screen w-full overflow-hidden bg-[#D7E8EE]">
      {/* Background (VISIBLE FIX) */}
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
      <div className="relative z-20 h-full max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-2 h-full items-center gap-4">
          {/* ================= LEFT (IMAGE) ================= */}
          <div className="flex flex-col items-center md:items-start justify-center md:-translate-x-8 lg:-translate-x-12">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[340px] md:w-[410px] lg:w-[470px] h-[62vh] max-h-[650px]"
            >
              <Image
                src="/mob2.png"
                alt="Mobile Preview"
                fill
                priority
                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.2)]"
              />
            </motion.div>

            <div className="mt-6 w-[360px] md:w-[420px] lg:w-[460px] grid grid-cols-3 gap-4 mx-auto md:mx-0">
              <Surah name="الفاتحة" en="Al-Fatiha" />
              <Surah name="البقرة" en="Al-Baqarah" />
              <Surah name="آل عمران" en="Al-Imran" />

              <Surah name="النساء" en="An-Nisa" className="col-start-2" />
            </div>
          </div>

          {/* ================= RIGHT (CONTENT) ================= */}
          <div className="flex flex-col justify-center -translate-y-6 md:-translate-x-6 lg:-translate-x-[116px]">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-12 h-[3px] rounded-full
                bg-gradient-to-r from-[#1f5f6f] via-[#2f6f86] to-[#8fd3e0]
                shadow-[0_2px_8px_rgba(47,111,134,0.4)]"
              />
              <p className="uppercase tracking-[3px] text-[11px] text-[#2f6f86]">
                FEATURE 02
              </p>
            </div>

            <h1 className="text-[42px] leading-[48px] font-bold text-[#143642] mb-4">
              Quran <br />
              <span className="text-[#2f6f86]">Recitation Hub</span>
            </h1>

            <div
              className="w-full bg-white/95 rounded-[20px] px-6 py-4
              shadow-[0_8px_22px_rgba(0,0,0,0.07)]
              mb-4 flex items-center justify-between gap-3"
            >
              <p className="text-[13px] text-[#3e6b7a] leading-[20px] flex-1">
                In the name of Allah, the Most Gracious, the Most Merciful —
                Al-Fatiha 1
              </p>

              <p className="text-[16px] text-[#2f6f86] font-semibold text-right leading-snug w-[220px] sm:w-[260px]">
                بِسْمِ ٱللّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>
            </div>

            <p className="text-[#3e6b7a] text-[13px] leading-[22px] mb-4">
              Explore the complete Holy Quran with beautiful Arabic typography,
              multiple translations, and high-quality audio recitations from
              renowned Qaris.
            </p>

            <div className="space-y-4">
              <Feature
                icon={<BookOpen size={15} />}
                title="Complete Quran"
                text="All 114 Surahs with Arabic text & translations"
              />
              <Feature
                icon={<Headphones size={15} />}
                title="Audio Recitation"
                text="Beautiful recitations by world-renowned Qaris"
              />
              <Feature
                icon={<Bookmark size={15} />}
                title="Bookmarks & Notes"
                text="Save your favourite Ayahs and personal notes"
              />
              <Feature
                icon={<Search size={15} />}
                title="Verse Search"
                text="Quickly find any Ayah by keyword or reference"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Surah({
  name,
  en,
  className = ""
}: {
  name: string;
  en: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "w-full h-[72px] bg-white/90 rounded-[18px] px-4 py-3 text-center",
        "border border-[#d7e7ee]",
        "shadow-[0_10px_22px_rgba(20,54,66,0.08)]",
        className
      ].join(" ")}
    >
      <p className="text-[#2f6f86] text-[16px] font-semibold leading-none">
        {name}
      </p>
      <p className="text-[12px] text-[#7c98a3] mt-1 leading-none">{en}</p>
    </div>
  );
}

function Feature({
  icon,
  title,
  text
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-lg bg-[#CDE6EF] flex items-center justify-center text-[#2f6f86]">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-[15px] text-[#143642]">{title}</h4>
        <p className="text-[12px] text-[#3e6b7a] mt-1 leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}