"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [companyDropdown, setCompanyDropdown] = useState(false);

  return (
    <header className="w-full bg-[#eef3f5] border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT SIDE: Logo + Text */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-12 h-12 relative">
            <Image
              src="/logo.png"
              alt="IQRA QURAN Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Logo Text */}
          <div>
            <h1 className="text-lg md:text-xl font-semibold tracking-wide text-[#1f3c4d]">
              IQRA QURAN
            </h1>
            <p className="text-xs md:text-sm tracking-[0.2em] text-[#237D9E] uppercase">
              Your Digital Companion
            </p>
          </div>
        </div>

        {/* RIGHT SIDE NAVIGATION */}
        <nav className="flex items-center gap-4 md:gap-6">
          {/* Learn Quran Button */}
          <Link
            href="featuers"
            className="px-3 py-2  text-[#2f6f8f] cursor-pointer hover:underline"
          >
            Featrures
          </Link>
          <Link
            href="learnquran"
            className="px-3 py-2  text-[#2f6f8f] cursor-pointer hover:underline "
          >
            Learn Quran 
          </Link>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCompanyDropdown(!companyDropdown)}
              className="px-3 py-2 text-[#2f6f8f] cursor-pointer hover:underline "
            >
              Company
            </button>

            {/* Dropdown Menu */}
            {companyDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <Link
                  href="about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setCompanyDropdown(false)}
                >
                  About Us
                </Link>
                <Link
                  href="#team"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setCompanyDropdown(false)}
                >
                  Our Team
                </Link>
                <Link
                  href="#careers"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setCompanyDropdown(false)}
                >
                  Careers
                </Link>
              </div>
            )}
          </div>

          {/* Download Button */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.devsinntechnologies.iqraquran"
            className="px-4 py-2 rounded-full border border-[#2F84A4] text-[#2f6f8f] bg-[#E0EDF1] font-medium tracking-widest text-xs hover:bg-[#2f6f8f] hover:text-white transition-all duration-300"
          >
            Download the App
          </Link>
        </nav>
      </div>
    </header>
  );
}