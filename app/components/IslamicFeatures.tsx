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
    <section className="relative h-auto md:h-screen  w-full  bg-[#D7E8EE] ">

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
      <div className="relative z-10 w-full h-auto md:h-screen flex flex-col justify-center md:p-7 p-4">

        {/* Top Text */}
        <div className="flex items-center justify-center mb-0 gap-3">
          <span className="h-[1px] w-16 bg-[#2c6e8f] hidden md:block" />
          <p className="text-[9px] md:text-[10px] tracking-[4px] py-3 text-[#2c6e8f] font-semibold">
            EVERYTHING YOU NEED
          </p>
          <span className="h-[1px] w-16 bg-[#2c6e8f] hidden md:block" />
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#103b4a] mb-4">
          Complete <span className="text-[#2c6e8f]">Islamic Features</span>
        </h2>

        {/* Logo */}
        <div className="flex justify-center my-6">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
            <Image src="/logo.png" alt="logo" fill className="object-contain" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mt-6">
          {features.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-sm  hover:shadow-xl hover:scale-110 hover:bg-[#d8edf4] 
  transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl  bg-[#e3f1f7] mb-3">
                  <Icon className="text-[#2c6e8f] w-[20px] h-[20px] md:w-[22px] md:h-[22px]" />
                </div>
                <h3 className="font-medium text-[#103b4a] mb-1 text-sm md:text-base">
                  {card.title}
                </h3>
                <p className="text-[11px] md:text-xs text-[#709EAE]">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:flex md:justify-center  gap-10 mt-5 text-center">
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