"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "The Holy Quran",
    description: "Read and search Quran with Tafseer and Translations",
    details:
      "Islam360 offers the most comprehensive Quran reading experience with features like tafseer from renowned Islamic scholars, translations in multiple languages, and more.",
    extra: "Search for chapters and verses in the Holy Quran in a single tap.",
    buttonText: "Download Now",
    buttonLink: "https://play.google.com/store/apps/details?id=com.devsinntechnologies.iqraquran",
  },
  {
    title: "Hadith",
    description: "Read and analyze a comprehensive collection of Hadith in one place.",
    details:
      "Islam360 has collected and digitized all authentic Hadith, like Sahih al-Bukhari, Sahih Muslim, and more, in one app. Now, learning from the Hadith could not have been any simpler!",
    extra: "Search for specific Hadith in the Islam360 app with a single tap.",
    buttonText: "Download Now",
    buttonLink: "https://play.google.com/store/apps/details?id=com.devsinntechnologies.iqraquran",
  },
  {
    title: "Prayer Times",
    description: "Never miss a prayer with the Islam360 app.",
    details:
      "The Islam360 app includes prayer times, the adhan, and notifications, thus offering immense value to those that want to create and maintain a strong bond with Allah (SWT).",
    extra: "Check prayer times and configure notifications in a single tap.",
    buttonText: "Download Now",
    buttonLink: "https://play.google.com/store/apps/details?id=com.devsinntechnologies.iqraquran",
  },
  {
    title: "Qibla Directions",
    description: "Pray towards the Qibla no matter where one is located.",
    details:
      "The Islam360 app provides a handy tool for individuals to identify the direction of the Qibla so that they can pray in peace no matter where they are located, especially while traveling.",
    extra: "Pray facing the Qibla with complete confidence.",
    buttonText: "Download Now",
    buttonLink: "https://play.google.com/store/apps/details?id=com.devsinntechnologies.iqraquran",
  },
  {
    title: "Duas And Supplications",
    description: "Find relevant duas and supplications for different situations.",
    details:
      "The Islam360 app houses numerous duas and supplications for different situations for God’s blessings, protection, guidance, and so on.",
    extra: "Search for supplications for a happy and blessed life.",
    buttonText: "Download Now",
    buttonLink: "https://play.google.com/store/apps/details?id=com.devsinntechnologies.iqraquran",
  },
  {
    title: "Translations And Tafseer",
    description: "Learn and understand the Holy Quran via reliable translations and Tafseer.",
    details:
      "The Islam360 app features 21+ translations of the Holy Quran and 16+ tafseer to understand its teachings and implement it in one’s daily life for benefit in this life and the hereafter.",
    extra: "Now, better understand the Quran and its teachings under one roof.",
    buttonText: "Download Now",
    buttonLink: "https://play.google.com/store/apps/details?id=com.devsinntechnologies.iqraquran",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#D9E7EB] py-0 min-h-screen overflow-y-scroll scroll-snap-y-mandatory">
      <div className="max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center justify-center gap-8 min-h-screen scroll-snap-align-start py-16"
          >
            {/* Image */}
            <div className="flex-1 flex justify-center">
              <Image
                src="/mob4.png"
                alt={feature.title}
                width={300}
                height={600}
                className="w-64 h-auto object-contain"
              />
            </div>

            {/* Text */}
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h2 className="text-4xl font-bold text-gray-900">{feature.title}</h2>
              <p className="text-xl font-medium text-gray-700">{feature.description}</p>
              <p className="text-lg text-gray-600">{feature.details}</p>
              <p className="text-lg text-gray-600 italic">{feature.extra}</p>
              <Link href={feature.buttonLink} target="_blank">
                <button className="mt-6 px-8 py-4 bg-[#227C9E] text-white rounded-lg hover:bg-[#2F6F8F] transition text-lg">
                  {feature.buttonText}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}