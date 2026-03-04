import Image from "next/image";
import { Apple, Play } from "lucide-react";

export default function Footer() {
  return (
    <section className="relative h-screen flex flex-col justify-center bg-[#D7E8EE]/65 items-center text-center px-6 overflow-hidden">
      {/* Background */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        sizes="100vw"
        className="object-cover absolute inset-0 -z-10"
      />

      {/* Overlay (FIXED) */}
      <div className="absolute inset-0 bg-[#D7E8EE]/65 z-10" />

      {/* Radial Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_65%,rgba(25,110,140,0.12)_95%)] -z-10" />

      {/* Wrapper */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full py-6">
        {/* TOP CONTENT */}
        <div className="flex flex-col items-center">
          {/* Logo (shine BEHIND, not on top) */}
          <div className="relative w-[95px] h-[95px] mb-2 flex items-center justify-center">
            {/* Halo Shine (center transparent) */}
            <div
              className="pointer-events-none absolute -inset-6 z-0 rounded-full blur-[16px] opacity-100
              bg-[radial-gradient(circle,transparent_38%,rgba(34,124,158,0.45)_55%,rgba(141,211,224,0.25)_70%,transparent_82%)]"
            />
            <div
              className="pointer-events-none absolute -inset-5 z-0 rounded-full blur-[12px] opacity-90
              bg-[radial-gradient(circle,transparent_48%,rgba(255,255,255,0.9)_62%,transparent_80%)]"
            />

            {/* Logo on top */}
            <div className="relative z-10 w-full h-full">
              <Image
                src="/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-[60px] leading-[1.2] font-extrabold max-w-[900px]">
            <span className="bg-gradient-to-b from-[#0e3a46] via-[#165a6b] to-[#217c9d] bg-clip-text text-transparent">
              Strengthen Your Bond
            </span>
            <span className="block bg-gradient-to-b from-[#0e3a46] via-[#165a6b] to-[#217c9d] bg-clip-text text-transparent">
              with the Quran
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-3 text-[15px] leading-[1.6] text-[#4d7a86] max-w-[520px]">
            Download Iqra Quran today and make every moment a spiritual journey.
            Free for all Muslims, everywhere.
          </p>

          {/* Buttons */}
          <div className="mt-5 flex gap-4">
            <a className="w-[185px] h-[52px] bg-white rounded-[12px] border border-[#cfe3ea] shadow-sm flex items-center justify-center gap-2 text-[#123e48] font-semibold text-[14px] transition-all duration-300 hover:scale-110 hover:bg-[#e6f5f9]">
              <Apple size={18} />
              <div className="text-left leading-tight">
                <div className="text-[10px] text-[#5b8a96] font-medium">
                  Download on the
                </div>
                <div>App Store</div>
              </div>
            </a>

            <a className="w-[185px] h-[52px] bg-white rounded-[12px] border border-[#cfe3ea] shadow-sm flex items-center justify-center gap-2 text-[#123e48] font-semibold text-[14px] transition-all duration-300 hover:scale-110 hover:bg-[#e6f5f9]">
              <Play size={18} />
              <div className="text-left leading-tight">
                <div className="text-[10px] text-[#5b8a96] font-medium">
                  Get it on
                </div>
                <div>Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="flex gap-6 mt-4">
          {[
            { text: `"MashAllah, the best Quran app I've used."`, author: "Ahmed K." },
            { text: `"Beautiful design and very easy to use."`, author: "Fatima R." },
            { text: `"The audio quality is amazing."`, author: "Ibrahim M." }
          ].map((item, index) => (
            <div
              key={index}
              className="w-[240px] h-[130px] bg-white rounded-[16px] shadow-sm p-4 flex flex-col justify-between text-left transition-all duration-300 hover:scale-110 hover:bg-[#e6f5f9] hover:shadow-md"
            >
              <div>
                <div className="text-[#2f8aa3] text-[12px] mb-2 tracking-[1px]">
                  ★★★★★
                </div>
                <p className="text-[12px] leading-[1.5] text-[#4c6e77]">
                  {item.text}
                </p>
              </div>

              <div className="text-[12px] text-[#2f8aa3] font-semibold">
                — {item.author}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mt-2">
          <div className="text-[16px] text-[#2f8aa3]">
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </div>
          <div className="text-[10px] tracking-[2px] text-[#6a8f98] mt-1">
            IQRA QURAN · VERSION 2.0 · ALL RIGHTS RESERVED
          </div>
        </div>
      </div>
    </section>
  );
}