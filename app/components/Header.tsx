"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#eef3f5] border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

        {/* LEFT: Logo + Text */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 relative shrink-0">
            <Image
              src="/logo.png"
              alt="IQRA QURAN Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <p className="text-base sm:text-lg md:text-xl font-semibold tracking-wide text-[#1f3c4d] leading-tight">
              IQRA QURAN
            </p>
            <p className="text-[10px] sm:text-xs tracking-[0.2em] text-[#237D9E] uppercase">
              Your Digital Companion
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="featuers" className="px-3 py-2 text-[#2f6f8f] hover:underline text-sm">
            Features
          </Link>
          <Link href="learnquran" className="px-3 py-2 text-[#2f6f8f] hover:underline text-sm">
            Learn Quran
          </Link>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCompanyDropdown(!companyDropdown)}
              className="px-3 py-2 text-[#2f6f8f] hover:underline text-sm"
            >
              Company
            </button>
            {companyDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                <Link href="about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setCompanyDropdown(false)}>
                  About Us
                </Link>
                <Link href="#team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setCompanyDropdown(false)}>
                  Our Team
                </Link>
                <Link href="#careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setCompanyDropdown(false)}>
                  Careers
                </Link>
              </div>
            )}
          </div>

          {/* Download Button */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.devsinntechnologies.iqraquran"
            target="_blank"
            className="ml-2 px-4 py-2 rounded-full border bg-[#2f6f8f] text-[#DCEAEE] font-medium tracking-widest text-xs hover:bg-[#DCEAEE] hover:text-black transition-all duration-300 flex items-center gap-2"
          >
            <Image src="/play.png" alt="Play store" width={14} height={14} className="object-contain" />
            Download
          </Link>
        </div>

        {/* MOBILE: Download + Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="https://play.google.com/store/apps/details?id=com.devsinntechnologies.iqraquran"
            target="_blank"
            className="px-3 py-1.5 rounded-full bg-[#2f6f8f] text-[#DCEAEE] font-medium text-[10px] tracking-wide flex items-center gap-1 hover:bg-[#DCEAEE] hover:text-black transition-all duration-300"
          >
            <Image src="/play.png" alt="Play" width={12} height={12} className="object-contain" />
            Download
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#2f6f8f] hover:bg-[#dce9ee] transition"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#eef3f5] border-t border-gray-200 px-4 py-3 flex flex-col gap-1">
          <Link
            href="featuers"
            className="py-2 px-3 text-[#2f6f8f] text-sm hover:bg-[#dce9ee] rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link
            href="learnquran"
            className="py-2 px-3 text-[#2f6f8f] text-sm hover:bg-[#dce9ee] rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Learn Quran
          </Link>
          <div>
            <button
              onClick={() => setCompanyDropdown(!companyDropdown)}
              className="w-full text-left py-2 px-3 text-[#2f6f8f] text-sm hover:bg-[#dce9ee] rounded-lg"
            >
              Company
            </button>
            {companyDropdown && (
              <div className="pl-4 flex flex-col gap-1 mt-1">
                <Link href="about" className="py-1.5 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg" onClick={() => { setCompanyDropdown(false); setMobileMenuOpen(false); }}>
                  About Us
                </Link>
                <Link href="#team" className="py-1.5 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg" onClick={() => { setCompanyDropdown(false); setMobileMenuOpen(false); }}>
                  Our Team
                </Link>
                <Link href="#careers" className="py-1.5 px-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg" onClick={() => { setCompanyDropdown(false); setMobileMenuOpen(false); }}>
                  Careers
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}