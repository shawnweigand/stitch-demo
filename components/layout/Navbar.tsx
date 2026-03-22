"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(250,249,249,0.95)] shadow-sm"
          : "bg-[rgba(250,249,249,0.8)] backdrop-blur-[12px]"
      }`}
    >
      <div className="flex justify-between items-center w-full px-8 py-6 max-w-[1920px] mx-auto">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-[#1a1c1c]"
            style={{ fontFamily: "var(--font-display-var)" }}
          >
            HESTRA
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/collections/alpine"
              className="text-[#1a1c1c] font-medium uppercase text-xs tracking-[0.1rem] hover:text-[#b08a62] transition-colors duration-300"
            >
              Shop
            </Link>
            <Link
              href="/our-story"
              className="text-[#1a1c1c] font-medium uppercase text-xs tracking-[0.1rem] hover:text-[#b08a62] transition-colors duration-300"
            >
              Our Story
            </Link>
            <Link
              href="#"
              className="text-[#1a1c1c] font-medium uppercase text-xs tracking-[0.1rem] hover:text-[#b08a62] transition-colors duration-300"
            >
              Store Locator
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-6 text-[#1a1c1c]">
          <span className="material-symbols-outlined cursor-pointer hover:text-[#785834] transition-colors">
            shopping_bag
          </span>
          <span className="material-symbols-outlined cursor-pointer hover:text-[#785834] transition-colors">
            person
          </span>
        </div>
      </div>
    </nav>
  );
}
