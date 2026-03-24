"use client";

import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#DCEAEE] text-gray-800 px-6 py-16 flex justify-center">
      
      <div className="max-w-5xl w-full bg-[#DCEAEE]  rounded-3xl shadow-lg p-8 md:p-12">

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">
          About Iqran Quran App
        </h1>

        <p className="text-center text-gray-500 mb-12">
          Connecting Hearts with the Quran
        </p>

        {/* Intro */}
        <Section
          title="Our Mission"
          text="Our mission is to make learning and understanding the Holy Quran easy, accessible, and engaging for everyone. We aim to bring people closer to the words of Allah through modern technology while preserving authenticity and respect."
        />

        {/* Vision */}
        <Section
          title="Our Vision"
          text="We envision a world where every Muslim can easily connect with the Quran, understand its meanings, and implement its teachings in daily life."
        />

        {/* Quran Inspiration */}
        <div className="bg-[#2F6F8F] rounded-2xl p-6 mb-8 text-center">
          <p className="italic text-lg md:text-xl text-[black]">
            “And We have certainly made the Quran easy for remembrance, so is there any who will remember?”
          </p>
          <p className="mt-2 text-sm text-gray-900">
            — Surah Al-Qamar (54:17)
          </p>
        </div>

        {/* What We Offer */}
        <Section
          title="What We Offer"
          text="Iqran Quran App provides features such as Quran reading, translation, audio recitation, and learning tools designed to help users of all ages understand the Quran with ease."
        />

        {/* Values */}
        <Section
          title="Our Values"
          text="We are committed to authenticity, simplicity, and sincerity. Our goal is to deliver a distraction-free, respectful, and spiritually uplifting experience."
        />

        {/* Why Choose Us */}
        <Section
          title="Why Choose Iqran?"
          text="We combine Islamic values with modern design to create a seamless and meaningful Quran learning experience. Our platform is built with care, respect, and dedication to serving the Ummah."
        />

        {/* Closing */}
        <div className="mt-10 text-center">
          <p className="text-gray-600 leading-relaxed">
            We pray that this effort becomes a source of guidance, الخير (goodness), and صدقة جارية (continuous charity) for everyone involved.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          © 2026 Iqran Quran App. All rights reserved.
        </div>
      </div>
    </div>
  );
}

/* Reusable Section */
function Section({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#2C6E7A]">
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">
        {text}
      </p>
    </div>
  );
}