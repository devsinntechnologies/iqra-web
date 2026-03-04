
"use client";

import Image from "next/image";
import {
  Clock,
  BookOpen,
  Compass,
  Star,
  Heart,
  Moon,
  Volume2,
  Calendar
} from "lucide-react";

export default function IslamicFeatures() {
  return (
    <section className="relative py-5 h-screen px-6 overflow-hidden bg-[#D7E8EE]">
      {/* ===== Background Image ===== */}
      <Image
        src="/background.png"
        alt="background"
        fill
        priority
        sizes="100vw"
        className="object-cover absolute inset-0 z-0"
      />

      {/* ===== Overlay (same as previous pages) ===== */}
      <div className="absolute inset-0 bg-[#D7E8EE]/75 z-10" />

      {/* ===== Subtle Vignette (optional - same layering) ===== */}
      {/* <div
        className="absolute inset-0 z-10 pointer-events-none
        bg-[radial-gradient(circle_at_center,transparent_55%,rgba(33,124,157,0.25)_85%)]"
      /> */}

      {/* ===== CONTENT ===== */}
      <div className="relative z-20">
        {/* ===== Top Small Text with Lines ===== */}
        <div className="flex items-center justify-center mb-4 gap-3">
          <span className="h-[1px] w-20 bg-[#2c6e8f] hidden md:block" />
          <p className="text-[10px] tracking-[4px] text-[#2c6e8f] font-semibold">
            EVERYTHING YOU NEED
          </p>
          <span className="h-[1px] w-20 bg-[#2c6e8f] hidden md:block" />
        </div>

        {/* ===== Heading ===== */}
        <h2 className="text-center text-4xl md:text-4xl font-bold text-[#103b4a]">
          Complete <span className="text-[#2c6e8f]">Islamic Features</span>
        </h2>

        {/* ===== Logo Center ===== */}
        <div className="flex justify-center my-4">
          <div className="w-14 h-14 relative">
            <Image src="/logo.png" alt="logo" fill className="object-contain" />
          </div>
        </div>

        {/* ===== Cards Grid ===== */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: Clock,
              title: "Prayer Times",
              desc: "Accurate worldwide prayer schedules"
            },
            {
              icon: BookOpen,
              title: "Full Quran",
              desc: "Complete Quran with 50+ translations"
            },
            {
              icon: Compass,
              title: "Qibla Finder",
              desc: "Precise compass for Kaaba direction"
            },
            {
              icon: Star,
              title: "99 Names of Allah",
              desc: "Beautiful Asmaul Husna with meanings"
            },
            {
              icon: Heart,
              title: "Daily Duas",
              desc: "Authentic supplications for every occasion"
            },
            {
              icon: Moon,
              title: "Ramadan Mode",
              desc: "Sehri & Iftar times with countdown"
            },
            {
              icon: Volume2,
              title: "Audio Recitation",
              desc: "Crystal clear recitation by top Qaris"
            },
            {
              icon: Calendar,
              title: "Islamic Calendar",
              desc: "Hijri calendar with important dates"
            }
          ].map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-md p-3 rounded-2xl shadow-sm hover:shadow-lg hover:scale-110 transition-transform duration-300 hover:bg-[#d8edf4]"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#e3f1f7] mb-4">
                  <Icon className="text-[#2c6e8f]" size={22} />
                </div>
                <h3 className="font-medium text-[#103b4a] mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-[#709EAE]">{card.desc}</p>
              </div>
            );
          })}
        </div>

        {/* ===== Bottom Stats ===== */}
        <div className="flex justify-center gap-12 mt-10 text-center flex-wrap">
          <div>
            <h4 className="text-2xl font-bold text-[#227C9E]">1M+</h4>
            <p className="text-[10px] text-[#227C9E]">Downloads</p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-[#227C9E]">4.8★</h4>
            <p className="text-[10px] text-[#227C9E]">App Rating</p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-[#227C9E]">50+</h4>
            <p className="text-[10px] text-[#227C9E]">Languages</p>
          </div>

          <div>
            <h4 className="text-2xl font-bold text-[#227C9E]">Free</h4>
            <p className="text-[10px] text-[#227C9E]">Always</p>
          </div>
        </div>
      </div>
    </section>
  );
}
