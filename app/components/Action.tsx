"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Action() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-[#D7E8EE] px-5 sm:px-8 md:px-12 lg:pl-[70px] lg:pr-[60px] py-12 md:py-16 lg:py-[80px] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="object-cover absolute inset-0 z-0"
      />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-[#D7E8EE]/55 z-10" />

      {/* MAIN CONTENT */}
      <div className="relative z-20 w-full max-w-[1400px] flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-6">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[650px]">
          {/* APP DEMO LABEL */}
          <div className="flex items-center gap-[10px] mt-2 lg:mt-[20px] justify-center lg:justify-start">
            <div className="w-[35px] h-[2px] bg-[#1e6f8d]" />
            <span className="text-[11px] md:text-[12px] tracking-[2px] font-semibold text-[#1e6f8d]">
              APP DEMO
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.1] font-bold text-[#0e3c4d] mb-2 lg:mb-0 text-center lg:text-left">
            See It <br />
            <span className="text-[#1e6f8d]">In Action</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[24px] lg:leading-[26px] text-[#4b6b76] mb-4 lg:mb-[10px] w-full lg:w-[520px] text-center lg:text-left">
            Watch how IQRA QURAN seamlessly integrates
            prayer times, Quran recitation, and Islamic tools
            into a single beautiful experience.
          </p>

          {/* DEMO LIST */}
          <div className="flex flex-col gap-[10px] mb-4 lg:mb-[10px]">
            {[
              {
                time: "0:00",
                title: "Open IQRA QURAN",
                sub: "Launch and see the beautiful home screen",
              },
              {
                time: "0:15",
                title: "Check Prayer Time",
                sub: "View live prayer countdown for your city",
              },
              {
                time: "0:30",
                title: "Browse Surahs",
                sub: "Navigate through all 114 chapters",
              },
              {
                time: "0:45",
                title: "Listen & Recite",
                sub: "Play audio and follow along with translation",
              },
              {
                time: "1:00",
                title: "Find Qibla",
                sub: "Use the compass to locate the Kaaba",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="
                  group flex items-center gap-3 sm:gap-[22px]
                  h-[50px] sm:h-[55px] w-full px-4 sm:px-[30px] rounded-[18px]
                  bg-white/60 backdrop-blur-md
                  border border-[#b7d3df]
                  shadow-[0_4px_18px_rgba(13,60,77,0.05)]
                  transition-all duration-300
                  hover:bg-[#cfe5ee]
                  hover:border-[#8fb8c9]
                  hover:shadow-[0_8px_28px_rgba(13,60,77,0.08)]
                "
              >
                <div className="w-[40px] sm:w-[55px] text-[12px] sm:text-[13px] font-medium text-[#6f97a6] shrink-0">
                  {item.time}
                </div>

                <div className="flex flex-col min-w-0">
                  <span className="text-[13px] sm:text-[14px] font-semibold text-[#4E788A] group-hover:text-black transition-colors duration-300 truncate">
                    {item.title}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#6f97a6] truncate">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* PLAY BUTTON */}
          <div className="flex justify-center lg:justify-start">
            <button className="flex items-center gap-[10px] bg-white border border-gray-300 px-[18px] py-[6px] rounded-full text-[14px] sm:text-[15px] font-semibold text-[#1e6f8d] hover:bg-[#1e6f8d] hover:text-white hover:border-[#1e6f8d] transition-all duration-300 shadow-sm">
              ▶ Play Demo
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full lg:w-[600px] flex justify-center lg:justify-end items-center gap-4 sm:gap-6 md:gap-[40px]">
          {/* Mobile 4 */}
          <motion.img
            src="/mob4.png"
            alt="Mobile 4"
            className="
              w-[140px] sm:w-[180px] md:w-[210px] lg:w-[240px]
              translate-y-6 sm:translate-y-8 lg:translate-y-[50px]
              [filter:drop-shadow(0_25px_60px_rgba(0,0,0,0.18))]
              will-change-transform
            "
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Mobile 1 */}
          <motion.img
            src="/mob1.png"
            alt="Mobile 5"
            className="
              w-[140px] sm:w-[180px] md:w-[210px] lg:w-[240px]
              [filter:drop-shadow(0_25px_60px_rgba(0,0,0,0.18))]
              will-change-transform
            "
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2,
            }}
          />
        </div>
      </div>
    </section>
  );
}