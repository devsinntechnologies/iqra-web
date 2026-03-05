"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Bell, Compass } from "lucide-react";

export default function PrayersTime() {
  return (
    <section className="relative h-auto md:h-screen flex items-center overflow-hidden bg-[#D7E8EE] px-4 sm:px-8 md:px-16 lg:px-20">
      
      {/* ===== Background Image ===== */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="object-cover absolute inset-0 z-0"
      />

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-[#D7E8EE]/55 z-10" />

      {/* ===== Content Container ===== */}
      <div className="relative z-20 h-auto md:h-screen grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full  p-5 sm:p-8">

        {/* ===== LEFT CONTENT ===== */}
        <div className="w-full text-center md:text-left">

          {/* Feature Tag */}
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
            <div className="w-8 md:w-10 h-[2px] bg-[#2c6e7f]" />
            <span className="text-xs sm:text-sm tracking-[3px] text-[#2c6e7f] uppercase">
              Feature 01
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f4e5f] leading-tight">
            Prayer Times &{" "}
            <span className="text-[#227C9E]">Daily Schedule</span>
          </h2>

          {/* Paragraph */}
          <p className="mt-4 md:mt-6 text-[#4a6c78] text-xs sm:text-sm md:text-base leading-relaxed max-w-[520px] mx-auto md:mx-0">
            Never miss a prayer with our intelligent prayer time system.
            Precise calculations based on your location with support for
            multiple Islamic calculation methods.
          </p>

          {/* Features */}
          <div className="mt-6 md:mt-10 space-y-4 md:space-y-6">

            {[
              {
                icon: <Clock size={18} className="text-[#2c6e7f]" />,
                title: "Live Prayer Countdown",
                desc: "Real-time countdown to next prayer with precise timing",
              },
              {
                icon: <MapPin size={18} className="text-[#2c6e7f]" />,
                title: "Location-Based Times",
                desc: "Automatic prayer times for your city, worldwide coverage",
              },
              {
                icon: <Bell size={18} className="text-[#2c6e7f]" />,
                title: "Smart Notifications",
                desc: "Customizable alerts for each prayer, never miss a Salah",
              },
              {
                icon: <Compass size={18} className="text-[#2c6e7f]" />,
                title: "Qibla Direction",
                desc: "Accurate compass pointing to the Kaaba from anywhere",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 md:gap-5 text-left">

                <div className="min-w-[38px] min-h-[38px] md:min-w-[44px] md:min-h-[44px] rounded-xl bg-[#d4e9ef] border border-[#bcdde6] flex items-center justify-center">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-xs sm:text-sm md:text-[15px] text-[#1f4e5f]">
                    {item.title}
                  </h4>
                  <p className="text-[#6d8b95] text-xs sm:text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* ===== RIGHT MOBILE IMAGE ===== */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <Image
            src="/mob4.png"
            alt="Mobile Preview"
            width={260}
            height={900}
            priority
            className="w-[150px] sm:w-[190px] md:w-[220px] lg:w-[260px] h-auto drop-shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}