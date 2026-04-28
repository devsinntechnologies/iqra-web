"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Bell, Compass } from "lucide-react";

export default function PrayersTime() {
  return (
    <section className="relative h-svh overflow-hidden bg-[#D7E8EE]">

      <Image src="/background.png" alt="Background" fill priority sizes="100vw" className="object-cover absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-[#D7E8EE]/55 z-10" />

      {/* Full-height flex container: col on mobile, grid on md+ */}
      <div className="relative z-20 h-full w-full flex flex-col md:grid md:grid-cols-2 md:gap-12
        px-4 sm:px-8 md:px-16 lg:px-20
        pt-[64px] md:pt-0 md:items-center">

        {/* ── TEXT CONTENT (top on mobile, left on desktop) ── */}
        <div className="w-full text-left shrink-0 py-3 md:py-0">

          <div className="flex items-center gap-3 mb-2 md:mb-6">
            <div className="w-8 md:w-10 h-[2px] bg-[#2c6e7f]" />
            <span className="text-[10px] sm:text-sm tracking-[3px] text-[#2c6e7f] uppercase">Feature 01</span>
          </div>

          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f4e5f] leading-tight">
            Prayer Times &{" "}
            <span className="text-[#227C9E]">Daily Schedule</span>
          </h2>

          <p className="mt-2 md:mt-6 text-[#4a6c78] text-[11px] sm:text-sm md:text-base leading-relaxed max-w-[520px] hidden sm:block">
            Never miss a prayer with our intelligent prayer time system.
            Precise calculations based on your location with support for multiple Islamic calculation methods.
          </p>

          <div className="mt-2 md:mt-10 space-y-1.5 sm:space-y-4 md:space-y-6">
            {[
              { icon: <Clock size={16} className="text-[#2c6e7f]" />, title: "Live Prayer Countdown", desc: "Real-time countdown to next prayer with precise timing" },
              { icon: <MapPin size={16} className="text-[#2c6e7f]" />, title: "Location-Based Times", desc: "Automatic prayer times for your city, worldwide coverage" },
              { icon: <Bell size={16} className="text-[#2c6e7f]" />, title: "Smart Notifications", desc: "Customizable alerts for each prayer, never miss a Salah" },
              { icon: <Compass size={16} className="text-[#2c6e7f]" />, title: "Qibla Direction", desc: "Accurate compass pointing to the Kaaba from anywhere" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 md:gap-5">
                <div className="min-w-[32px] min-h-[32px] md:min-w-[44px] md:min-h-[44px] rounded-xl bg-[#d4e9ef] border border-[#bcdde6] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[11px] sm:text-sm md:text-[15px] text-[#1f4e5f]">{item.title}</h4>
                  <p className="text-[#6d8b95] text-[10px] sm:text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── PHONE IMAGE (fills remaining height on mobile, right on desktop) ── */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex-1 md:flex-none flex items-center justify-center md:justify-end min-h-0"
        >
          <Image
            src="/mob4.png"
            alt="Mobile Preview"
            width={260}
            height={900}
            priority
            className="h-full max-h-[300px] md:max-h-none md:h-auto md:w-[220px] lg:w-[260px] w-auto drop-shadow-2xl object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}