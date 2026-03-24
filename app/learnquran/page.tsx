"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  Headphones,
  Bookmark,
  Search
} from "lucide-react";

const features = [
  {
    title: "Learn Quran",
    desc: "Step by step Quran learning with Tajweed rules.",
    icon: BookOpen,
  },
  {
    title: "Listen Recitation",
    desc: "Beautiful recitations from top Qaris.",
    icon: Headphones,
  },
  {
    title: "Save Ayahs",
    desc: "Bookmark your favorite verses easily.",
    icon: Bookmark,
  },
  {
    title: "Search Quran",
    desc: "Find any ayah instantly with smart search.",
    icon: Search,
  },
];

export default function LearnQuranPage() {
  return (
    <section className="min-h-screen bg-[#DCEAEE] px-6 md:px-12 lg:px-20 py-12">

      {/* HERO */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            Learn Quran <br />
            <span className="text-teal-700">
              The Right Way
            </span>
          </h1>

          <p className="mt-5 text-gray-600 text-lg max-w-lg">
            Start your journey of understanding the Holy Quran with proper Tajweed,
            guided lessons, and beautiful recitation.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-teal-700 text-white rounded-xl shadow-md hover:bg-teal-800 transition">
              Start Learning
            </button>

            <button className="px-6 py-3 bg-white text-gray-700 rounded-xl shadow hover:shadow-md transition">
              Explore
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <Image
            src="/tree.png" // apni image yahan lagana
            alt="Quran Learning"
            width={450}
            height={450}
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* FEATURES */}
      <div className="max-w-7xl mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {features.map((item, i) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-100 text-teal-700 mb-4">
                <Icon size={22} />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2">
                {item.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* EXTRA SECTION (Islam360 style learning cards) */}
      <div className="max-w-7xl mx-auto mt-20">

        <h2 className="text-2xl font-bold text-gray-800 mb-8">
          Learning Modules
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {["Noorani Qaida", "Tajweed Basics", "Advanced Recitation"].map(
            (item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  Structured lessons to help you master Quran reading.
                </p>

                <button className="mt-4 text-teal-700 font-medium">
                  Start →
                </button>
              </motion.div>
            )
          )}
        </div>
      </div>

    </section>
  );
}