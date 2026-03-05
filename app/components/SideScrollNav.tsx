"use client";

import { useEffect, useState } from "react";

export default function SideScrollNav() {
  const [active, setActive] = useState(0);

  // 👇 Apne sections ke real IDs yahan likho
  const sections = [
    "hero",
    "prayer",
    "recitation",
    "features",
    "action",
    "footer",
  ];
  
  // Active section detect karna
  useEffect(() => {
    const handleScroll = () => {
      // const scrollPosition = window.scrollY + window.innerHeight / 2;

      // sections.forEach((id, index) => {
      //   const element = document.getElementById(id);
      //   if (element) {
      //     if (
      //       scrollPosition >= element.offsetTop &&
      //       scrollPosition < element.offsetTop + element.offsetHeight
      //     ) {
      //       setActive(index);
      //     }
      //   }
      // });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    }
  };
return (
  <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3">
    {sections.map((id, index) => (
      <div
        key={id}
        onClick={() => scrollToSection(id)}
        className={`cursor-pointer transition-all duration-300 ${
          active === index
            ? "w-2 h-7 bg-[#1e6f8d] rounded-full shadow-sm"
            : "w-2 h-2 bg-[#a8cbd6] rounded-full hover:bg-[#6fa9bb]"
        }`}
      />
    ))}
  </div>
);
}