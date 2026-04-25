// @ts-nocheck
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header"; // 👈 ADD THIS
import Footer from "@/app/components/Footer"; // 👈 ADD THIS

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IQRA QURAN",
  description: "Your Digital Companion",
  icons: {
    icon: "/logo.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
       <script type="module" src="https://widget.chatsupplies.com/index.js" id="chatbot" data-admin-id="123"   api-key="lw5gxHjpSkDW9hx1Y1k5"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />   {/* 👈 HEADER YAHAN ADD KIYA */}
        {children}
        <Footer />   {/* 👈 FOOTER YAHAN ADD KIYA */}
      </body>
    </html>
  );
}