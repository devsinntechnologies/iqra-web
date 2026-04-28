"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  BookOpen,
  Compass,
  Star,
  Heart,
  Moon,
  Volume2,
  Calendar,
} from "lucide-react";

const features = [
  { icon: Clock, title: "Prayer Times", desc: "Accurate worldwide prayer schedules" },
  { icon: BookOpen, title: "Full Quran", desc: "Complete Quran with 50+ translations" },
  { icon: Compass, title: "Qibla Finder", desc: "Precise compass for Kaaba direction" },
  { icon: Star, title: "99 Names of Allah", desc: "Beautiful Asmaul Husna with meanings" },
  { icon: Heart, title: "Daily Duas", desc: "Authentic supplications for every occasion" },
  { icon: Moon, title: "Ramadan Mode", desc: "Sehri & Iftar times with countdown" },
  { icon: Volume2, title: "Audio Recitation", desc: "Crystal clear recitation by top Qaris" },
  { icon: Calendar, title: "Islamic Calendar", desc: "Hijri calendar with important dates" },
];

const stats = [
  { value: "1M+", label: "Downloads" },
  { value: "4.8★", label: "App Rating" },
  { value: "50+", label: "Languages" },
  { value: "Free", label: "Always" },
];

export default function IslamicFeatures() {
  return (
    <section className="relative h-svh w-full bg-[#D7E8EE] flex items-center">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#D7E8EE]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-8">

        {/* Top Text */}
        <div className="flex items-center justify-center mb-0 gap-3">
          <span className="h-[1px] w-16 bg-[#2c6e8f] hidden md:block" />
          <p className="text-[9px] md:text-[10px] tracking-[4px] py-2 text-[#2c6e8f] font-semibold">
            EVERYTHING YOU NEED
          </p>
          <span className="h-[1px] w-16 bg-[#2c6e8f] hidden md:block" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-3xl md:text-4xl font-bold text-[#103b4a] mb-2 md:mb-4">
          Complete <span className="text-[#2c6e8f]">Islamic Features</span>
        </h2>

        {/* Logo */}
        <div className="flex justify-center my-2 md:my-4">
          <Link href="/" className="relative w-10 h-10 md:w-14 md:h-14">
            <Image src="/logo.png" alt="logo" fill className="object-contain" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 max-w-5xl mx-auto">
          {features.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-md p-2 sm:p-4 rounded-2xl shadow-sm hover:shadow-xl hover:scale-110 hover:bg-[#d8edf4]
  transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-[#e3f1f7] mb-2 md:mb-3">
                  <Icon className="text-[#2c6e8f] w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px]" />
                </div>
                <h3 className="font-medium text-[#103b4a] mb-1 text-xs md:text-base">
                  {card.title}
                </h3>
                <p className="text-[10px] md:text-xs text-[#709EAE]">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 md:flex md:justify-center gap-6 sm:gap-10 mt-3 md:mt-4 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h4 className="text-xl md:text-2xl font-bold text-[#227C9E]">
                {stat.value}
              </h4>
              <p className="text-[10px] text-[#227C9E]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}