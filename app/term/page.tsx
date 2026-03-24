"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#DCEAEE] text-gray-800 px-6 py-16 flex justify-center">
      
      <div className="max-w-4xl w-full bg-[#DCEAEE] rounded-3xl shadow-lg p-8 md:p-12">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Terms & Conditions
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Last Updated: March 2026
        </p>

        {/* Section */}
        <Section
          title="1. Acceptance of Terms"
          text="By accessing and using the Iqran Quran App and its website, you agree to comply with and be bound by these Terms and Conditions."
        />

        <Section
          title="2. Use of Service"
          text="Our platform is designed to help users learn and understand the Quran. You agree to use this service respectfully and not misuse the content or platform."
        />

        <Section
          title="3. User Responsibilities"
          text="Users must ensure that their use of the app aligns with Islamic values and does not harm, abuse, or misuse the platform or its content."
        />

        <Section
          title="4. Intellectual Property"
          text="All content, including text, audio, and design, is owned by Iqran Quran App and may not be copied or redistributed without permission."
        />

        <Section
          title="5. Privacy"
          text="We respect your privacy. Any personal information collected is handled according to our Privacy Policy."
        />

        <Section
          title="6. Limitation of Liability"
          text="We are not responsible for any damages or losses resulting from the use of our app or website."
        />

        <Section
          title="7. Changes to Terms"
          text="We reserve the right to update these Terms at any time. Continued use of the platform means you accept the updated terms."
        />

        <Section
          title="8. Contact Us"
          text="If you have any questions about these Terms, please contact us at support@iqranapp.com"
        />

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          © 2026 Iqran Quran App. All rights reserved.
        </div>
      </div>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, text }: { title: string; text: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-xl md:text-2xl font-semibold mb-2 text-[#2C6E7A]">
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}