"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-[#eef3f5] border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          
          {/* Logo Image */}
          <div className="w-12 h-12 relative">
            <Image
              src="/logo.png"
              alt="IQRA QURAN Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Text */}
          <div>
            <h1 className="text-mde font-semibold tracking-wide text-[#1f3c4d]">
              IQRA QURAN
            </h1>
            <p className="text-s tracking-[0.2em] text-[#237D9E] uppercase">
              Your Digital Companion
            </p>
          </div>
        </div>

        {/* RIGHT SIDE BUTTON */}
        <Link
          href="#"
          className="px-4 py-2  rounded-full border border-[#2F84A4] text-[#2f6f8f] bg-[#E0EDF1] font-medium tracking-widest text-xs hover:bg-[#2f6f8f] hover:text-white transition-all duration-300"
        >
          INTRO
        </Link>

      </div>
    </header>
  );
}