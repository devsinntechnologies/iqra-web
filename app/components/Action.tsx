// @ts-nocheck
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Action() {

  const demoList = [
    { time: "0:00", title: "Open IQRA QURAN", sub: "Launch and see the beautiful home screen", video: "open-iqra-quran.mp4" },
    { time: "0:15", title: "Check Prayer Time", sub: "View live prayer countdown for your city", video: "check-prayer-time.mp4" },
    { time: "0:30", title: "Browse Surahs", sub: "Navigate through all 114 chapters", video: "browse-surahs.mp4" },
    { time: "0:45", title: "Listen & Recite", sub: "Play audio and follow along with translation", video: "listen-and-recite.mp4" },
    { time: "1:00", title: "Find Qibla", sub: "Use the compass to locate the Kaaba", video: "find-qibla.mp4" },
  ];

  const [currentVideo, setCurrentVideo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const playDemo = () => { setPlaying(true); setCurrentVideo(0); };
  const handleVideoEnd = () => { if (currentVideo < demoList.length - 1) setCurrentVideo((prev) => prev + 1); };
  const handleListClick = (index) => { setCurrentVideo(index); setPlaying(true); };

  return (
    <section className="relative w-full h-svh overflow-hidden bg-[#D7E8EE]">

      <Image src="/background.png" alt="Background" fill priority sizes="100vw" className="object-cover absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-[#D7E8EE]/55 z-10" />

      {/* Full-height flex container: col on mobile, row on desktop */}
      <div className="relative z-20 h-full w-full flex flex-col lg:flex-row
        px-5 sm:px-8 md:px-12 lg:pl-[70px] lg:pr-[60px]
        pt-[64px] lg:pt-0 lg:items-center lg:justify-between">

        {/* ── TEXT CONTENT (top on mobile, left on desktop) ── */}
        <div className="w-full lg:w-[650px] shrink-0 py-3 lg:py-0">

          <div className="flex items-center gap-[10px] justify-center lg:justify-start">
            <div className="w-[35px] h-[2px] bg-[#1e6f8d]" />
            <span className="text-[11px] md:text-[12px] tracking-[2px] font-semibold text-[#1e6f8d]">APP DEMO</span>
          </div>

          <h1 className="text-[24px] sm:text-[38px] md:text-[44px] lg:text-[48px] leading-[1.1] font-bold text-[#0e3c4d] mb-1 text-center lg:text-left">
            See It <br />
            <span className="text-[#1e6f8d]">In Action</span>
          </h1>

          <p className="text-[11px] sm:text-[14px] lg:text-[15px] leading-[20px] lg:leading-[26px] text-[#4b6b76] mb-2 lg:mb-[10px] w-full lg:w-[520px] text-center lg:text-left hidden sm:block">
            Watch how IQRA QURAN seamlessly integrates prayer times, Quran recitation, and Islamic tools into a single beautiful experience.
          </p>

          {/* DEMO LIST */}
          <div className="flex flex-col gap-[5px] sm:gap-[8px] mb-2 lg:mb-[10px]">
            {demoList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleListClick(index)}
                className="cursor-pointer group flex items-center gap-3 sm:gap-[22px] h-[36px] sm:h-[48px] w-full px-3 sm:px-[30px] rounded-[14px] sm:rounded-[18px] bg-white/60 backdrop-blur-md border border-[#b7d3df] shadow-[0_4px_18px_rgba(13,60,77,0.05)] transition-all duration-300 hover:bg-[#cfe5ee] hover:border-[#8fb8c9]"
              >
                <div className="w-[36px] sm:w-[55px] text-[10px] sm:text-[13px] font-medium text-[#6f97a6] shrink-0">{item.time}</div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] sm:text-[14px] font-semibold text-[#4E788A] group-hover:text-black transition-colors truncate">{item.title}</span>
                  <span className="text-[9px] sm:text-[10px] text-[#6f97a6] truncate hidden sm:block">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* PLAY BUTTON */}
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={playDemo}
              className="flex items-center gap-[10px] bg-white border border-gray-300 px-[16px] py-[5px] rounded-full text-[13px] sm:text-[15px] font-semibold text-[#1e6f8d] hover:bg-[#1e6f8d] hover:text-white hover:border-[#1e6f8d] transition-all duration-300 shadow-sm"
            >
              ▶ Play Demo
            </button>
          </div>
        </div>

        {/* ── PHONE IMAGE (fills remaining space on mobile, right column on desktop) ── */}
        <div className="flex-1 lg:flex-none lg:w-[600px] flex items-center justify-center lg:justify-end min-h-0">
          <div className="relative h-full max-h-[340px] lg:max-h-none lg:h-[340px] w-auto flex items-center">
            {playing && (
              <video
                key={currentVideo}
                ref={videoRef}
                autoPlay muted playsInline controls
                className="absolute top-[8.5%] left-[15%] w-[70%] h-[83%] object-cover rounded-[20px] z-40"
                onEnded={handleVideoEnd}
              >
                <source src={`/videos/${demoList[currentVideo].video}`} type="video/mp4" />
              </video>
            )}
            <motion.img
              src="/mob4.png"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-auto object-contain relative z-30 pointer-events-none drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
