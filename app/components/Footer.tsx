import Image from "next/image";
import Link from "next/link";
import { Linkedin, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <section id="footer" className="relative h-svh flex flex-col justify-center bg-[#D7E8EE]/65 items-center text-center px-4 sm:px-6 overflow-hidden">

      {/* Background */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="object-cover absolute inset-0 -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#D7E8EE]/65 z-10" />

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_65%,rgba(25,110,140,0.12)_95%)] -z-10" />

      {/* Wrapper */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full w-full py-6 sm:py-8">

        {/* TOP CONTENT */}
        <div className="flex flex-col items-center">

          {/* Logo */}
          <Link href="/" className="relative w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[95px] md:h-[95px] mb-2 flex items-center justify-center">

            <div className="pointer-events-none absolute -inset-6 z-0 rounded-full blur-[16px] opacity-100
              bg-[radial-gradient(circle,transparent_38%,rgba(34,124,158,0.45)_55%,rgba(141,211,224,0.25)_70%,transparent_82%)]"
            />

            <div className="pointer-events-none absolute -inset-5 z-0 rounded-full blur-[12px] opacity-90
              bg-[radial-gradient(circle,transparent_48%,rgba(255,255,255,0.9)_62%,transparent_80%)]"
            />

            <div className="relative z-10 w-full h-full">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Heading */}
          <h1 className="text-[26px] sm:text-[40px] md:text-[50px] lg:text-[60px] leading-[1.2] font-extrabold max-w-[900px]">
            <span className="bg-gradient-to-b from-[#0e3a46] via-[#165a6b] to-[#217c9d] bg-clip-text text-transparent">
              Strengthen Your Bond
            </span>
            <span className="block bg-gradient-to-b from-[#0e3a46] via-[#165a6b] to-[#217c9d] bg-clip-text text-transparent">
              with the Quran
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-2 text-[12px] sm:text-[14px] md:text-[15px] leading-[1.6] text-[#4d7a86] max-w-[520px]">
            Download IQRA QURAN today and make every moment a spiritual journey.
            Free for all Muslims, everywhere.
          </p>

          {/* Google Play Button */}
          <div className="mt-4 sm:mt-5">
            <Link
              href="https://play.google.com/store/apps/details?id=com.devsinntechnologies.iqraquran"
              target="_blank"
              className="w-[160px] sm:w-[185px] h-[44px] sm:h-[52px] bg-white rounded-[12px] border border-[#cfe3ea] shadow-sm flex items-center justify-center gap-2 text-[#123e48] font-semibold text-[13px] sm:text-[14px] transition-all duration-300 hover:scale-110 hover:bg-[#e6f5f9]"
            >
              <Image src="/play.png" alt="Play Store" width={25} height={25} className="object-contain" />
              <div className="text-left leading-tight">
                <div className="text-[9px] sm:text-[10px] text-[#5b8a96] font-medium">
                  Get it on
                </div>
                <div>Google Play</div>
              </div>
            </Link>
          </div>
        </div>

        {/* LINKS GRID */}
        <div className="w-full mt-4 flex flex-col sm:flex-row flex-wrap justify-center items-start gap-10 sm:gap-16 md:gap-24 text-left px-4">

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-[#7a8f95] mb-3 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[#3e555c] text-[15px]">
              <li><Link href="#">Home</Link></li>
              <li><Link href="/featuers">Features</Link></li>
              <li><Link href="/learnquran">Learn Quran</Link></li>
              <li><Link href="/about">About Us</Link></li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="text-sm font-semibold text-[#7a8f95] mb-3 uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-2 text-[#3e555c] text-[15px]">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/term">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="text-sm font-semibold text-[#7a8f95] mb-3 uppercase tracking-wide">
              Connect
            </h3>

            <div className="flex items-center gap-4">
              <Link href="https://www.linkedin.com/in/the-iqra-quran-66096b3b1/"
              target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:scale-110 transition">
                <Linkedin className="text-[#0A66C2]" size={18} />
              </Link>

              <Link href="https://www.instagram.com/theiqraquranofficial/"
              target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:scale-110 transition">
                <Instagram className="text-[#E1306C]" size={18} />
              </Link>

              <Link href="https://youtube.com/@theiqraquranofficial"
              target="_blank" className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-sm hover:scale-110 transition">
                <Youtube className="text-[#FF0000]" size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-2">
          <div className="text-[14px] sm:text-[15px] md:text-[16px] text-[#2f8aa3]">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </div>
          <div className="text-[9px] sm:text-[10px] tracking-[1.5px] sm:tracking-[2px] text-[#6a8f98] mt-1">
            IQRA QURAN · VERSION 2.0 · ALL RIGHTS RESERVED
          </div>
        </div>

      </div>
    </section>
  );
}