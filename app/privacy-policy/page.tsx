"use client";

import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <section className="relative w-full bg-[#D8E6EA] overflow-hidden">
      
      {/* ===== HERO SECTION ===== */}
      <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Background */}
        <Image
          src="/background.png"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay (UPDATED COLOR) */}
        <div className="absolute inset-0 bg-[#D8E6EA]/90 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#1f4f5f]">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-[#3f6b75] max-w-2xl mx-auto leading-relaxed">
            The comprehensive Islamic lifestyle app with the most accurate prayer
            times, empowering and connecting Muslims worldwide.
          </p>
        </div>
      </div>

      {/* ===== CONTENT SECTION ===== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10 py-10 md:py-16 space-y-10 text-[#2d3e46]">
        
        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4f5f]">
            1. Information we collect:
          </h2>
          <p className="leading-relaxed text-sm sm:text-base">
            International Technology Mission only collects very basic information
            from all our users and it does not include any private information.
            The information we gather is only for improving your experience and
            giving you better versions of our features. This information will not
            save on any server and neither given or sale to anyone.
          </p>
        </div>

        {/* Section 1.1 */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#1f4f5f]">
            1.1 General information and permissions:
          </h3>

          <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base leading-relaxed">
            <li>No general information is collected from users.</li>
            <li>We collect location for Qibla direction and prayer timings.</li>
            <li>Daily Ayat and prayer notifications (if allowed).</li>
            <li>Media storage for downloads & sharing Islamic content.</li>
            <li>Device info for crash analysis.</li>
            <li>Push notifications require device identifiers.</li>
          </ul>

          <p className="font-semibold text-[#237C9E] text-sm">
            Note: Above information is NOT saved on any server.
          </p>

          <p className="text-sm sm:text-base">
            Permissions can be changed anytime from device settings.
          </p>
        </div>

        {/* Section 1.2 */}
        <div className="space-y-2">
          <h3 className="text-xl md:text-2xl font-semibold text-[#1f4f5f]">
            1.2 App analytics:
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            We collect analytics such as region and device model using Firebase
            (Google) to understand usage and crashes.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4f5f] mb-2">
            2. How your information is used:
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            User preferences are saved locally on your smartphone and not on any
            server, ensuring better privacy.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4f5f] mb-2">
            3. Who gets your information:
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            We do not share any user information with third parties. Only general
            statistics are used for analytics purposes.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4f5f] mb-2">
            4. Third Party websites and services:
          </h2>
          <p className="text-sm sm:text-base">
            Contact us at:
            <span className="text-[#237C9E] font-medium">
              {" "}islam360helpcenter@gmail.com
            </span>
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4f5f] mb-2">
            5. Privacy policy changes:
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            We reserve the right to update this policy anytime.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4f5f] mb-2">
            6. Deleting your data:
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            You can request data deletion via email. It will be deleted within 15 days.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#1f4f5f] mb-3">
            7. Disclaimers:
          </h2>

          <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base leading-relaxed">
            <li>Quran translations may contain human errors.</li>
            <li>Prayer timings may vary based on location.</li>
            <li>Halal places data depends on Google.</li>
            <li>Hadith translations from authentic scholars.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}