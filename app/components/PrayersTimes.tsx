
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, MapPin, Bell, Compass } from "lucide-react";

export default function PrayersTime() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 overflow-hidden bg-[#D7E8EE]">
      {/* ===== Background Image ===== */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="object-cover absolute inset-0 z-0"
      />

      {/* ===== Overlay (same style as first page) ===== */}
      <div className="absolute inset-0 bg-[#D7E8EE]/55 z-10" />

      {/* ===== Subtle Vignette (optional) ===== */}
      {/* <div
        className="absolute inset-0 z-10 pointer-events-none
        bg-[radial-gradient(circle_at_center,transparent_55%,rgba(33,124,157,0.25)_85%)]"
      /> */}

      {/* ===== Content Container ===== */}
      <div className="relative z-20 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* ===== LEFT CONTENT ===== */}
        <div className="w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#2c6e7f]" />
            <span className="text-sm tracking-[3px] text-[#2c6e7f] uppercase">
              Feature 01
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl w-full font-bold text-[#1f4e5f]">
            Prayer Times &{" "}
            <span className="text-[#227C9E]">Daily Schedule</span>
          </h2>

          <p className="mt-6 text-[#4a6c78] text-sm">
            Never miss a prayer with our intelligent prayer time <br />
            system. Precise calculations based on your location <br />
            with support for multiple Islamic calculation methods.
          </p>

          <div className="mt-10 space-y-2">
            {/* 1 */}
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-xl bg-[#d4e9ef] border border-[#bcdde6] flex items-center justify-center">
                <Clock size={20} className="text-[#2c6e7f]" />
              </div>

              <div>
                <h4 className="font-semibold text-[14px] text-[#1f4e5f]">
                  Live Prayer Countdown
                </h4>
                <p className="text-[#6d8b95] text-[14px] mt-1">
                  Real-time countdown to next prayer with precise timing
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-xl bg-[#d4e9ef] border border-[#bcdde6] flex items-center justify-center">
                <MapPin size={20} className="text-[#2c6e7f]" />
              </div>

              <div>
                <h4 className="font-semibold text-[14px] text-[#1f4e5f]">
                  Location-Based Times
                </h4>
                <p className="text-[#6d8b95] text-[14px] mt-1">
                  Automatic prayer times for your city, worldwide coverage
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-xl bg-[#d4e9ef] border border-[#bcdde6] flex items-center justify-center">
                <Bell size={20} className="text-[#2c6e7f]" />
              </div>

              <div>
                <h4 className="font-semibold text-[14px] text-[#1f4e5f]">
                  Smart Notifications
                </h4>
                <p className="text-[#6d8b95] text-[14px] mt-1">
                  Customizable alerts for each prayer, never miss a Salah
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="flex items-start gap-5">
              <div className="w-11 h-11 rounded-xl bg-[#d4e9ef] border border-[#bcdde6] flex items-center justify-center">
                <Compass size={20} className="text-[#2c6e7f]" />
              </div>

              <div>
                <h4 className="font-semibold text-[14px] text-[#1f4e5f]">
                  Qibla Direction
                </h4>
                <p className="text-[#6d8b95] text-[14px] mt-1">
                  Accurate compass pointing to the Kaaba from anywhere
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===== RIGHT MOBILE IMAGE ===== */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex justify-center w-full md:w-auto"
        >
          <Image
            src="/download.png"
            alt="Mobile Preview"
            width={200}
            height={1000}
            priority
            className="drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
