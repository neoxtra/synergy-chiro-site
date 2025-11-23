"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        ${roboto.className}
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-zinc-900/70 backdrop-blur-md shadow-lg h-36"
            : "bg-transparent h-40"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 h-full flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="NeoTek Designs"
            width={250}
            height={100}
            className={`
              object-contain
              transition-all duration-300 ease-in-out
              ${scrolled ? "w-[190px]" : "w-[250px]"}
            `}
            priority
          />
        </Link>

        {/* MENU */}
        <div className="hidden md:flex space-x-10 font-medium text-white text-lg">
          {/* ABOUT + SUBMENU */}
          <div className="relative group">
            <Link
              href="/about"
              className="
                inline-block
                transition-transform
                duration-200
                hover:text-red-500
                hover:scale-110
              "
            >
              ABOUT
            </Link>

            {/* DROPDOWN */}
            <div
              className="
                invisible opacity-0
                group-hover:visible group-hover:opacity-100
                transition-opacity duration-200
                absolute left-0 mt-0
                bg-zinc-900/90
                shadow-lg w-56 py-2
                rounded-md
              "
            >
              {/* ITEM 1 */}
              <Link
                href="/about/test-1"
                className="
                  group/item
                  relative block px-4 py-3
                  overflow-hidden text-white font-medium
                "
              >
                {/* sliding background */}
                <span
                  className="
                    absolute inset-0 bg-red-600
                    translate-x-[-100%]
                    group-hover/item:translate-x-0
                    transition-transform duration-300
                  "
                />
                {/* text */}
                <span className="relative z-10 group-hover/item:scale-105 transition-transform duration-300">
                  TEST 1
                </span>
              </Link>

              {/* ITEM 2 */}
              <Link
                href="/about/test-2"
                className="
                  group/item
                  relative block px-4 py-3
                  overflow-hidden text-white font-medium
                "
              >
                <span
                  className="
                    absolute inset-0 bg-red-600
                    translate-x-[-100%]
                    group-hover/item:translate-x-0
                    transition-transform duration-300
                  "
                />
                <span className="relative z-10 group-hover/item:scale-105 transition-transform duration-300">
                  TEST 2
                </span>
              </Link>
            </div>
          </div>

          <Link
            href="/services"
            className="transform transition-all duration-200 hover:text-red-500 hover:scale-110"
          >
            SERVICES
          </Link>
          <Link
            href="/portfolio"
            className="transform transition-all duration-200 hover:text-red-500 hover:scale-110"
          >
            PORTFOLIO
          </Link>
          <Link
            href="/contact"
            className="transform transition-all duration-200 hover:text-red-500 hover:scale-110"
          >
            CONTACT
          </Link>
          <Link
            href="/resources"
            className="transform transition-all duration-200 hover:text-red-500 hover:scale-110"
          >
            RESOURCES
          </Link>
        </div>
      </div>
    </nav>
  );
}
