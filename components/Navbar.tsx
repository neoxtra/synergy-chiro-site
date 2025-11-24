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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // close mobile menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav
      className={`
        ${roboto.className}
        fixed top-0 left-0 w-full z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-zinc-900/70 backdrop-blur-md shadow-lg h-20"
            : "bg-transparent h-24"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-full flex items-center justify-between">
        {/* LOGO (left on all sizes) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo1.png"
            alt="NeoTek Designs"
            width={250}
            height={100}
            className={`
            object-contain
            transition-all duration-300 ease-in-out

            w-[120px]          /* mobile */

            md:w-[250px]       /* desktop */
            md:scrolled:w-[190px]
          `}

            priority
          />
        </Link>

        {/* DESKTOP MENU */}
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
              <Link
                href="/about/test-1"
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
                  Methodology
                </span>
              </Link>

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
                  Testimonials
                </span>
              </Link>
            </div>
          </div>

          {/* SERVICES + SUBMENU */}
          <div className="relative group">
            <Link
              href="/services"
              className="transform transition-all duration-200 hover:text-red-500 hover:scale-110"
            >
              SERVICES
            </Link>

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
              <Link
                href="/services/website-design"
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
                  Website Design
                </span>
              </Link>

              <Link
                href="/services/SEO"
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
                  SEO
                </span>
              </Link>
            </div>
          </div>

          <Link
            href="/Portfolio"
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

        {/* MOBILE HAMBURGER (right side) */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-zinc-800 transition"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {/* simple hamburger icon / X icon */}
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1">
            <span
              className={`block h-[2px] w-6 bg-white transition-transform ${
                mobileOpen ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-opacity ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-6 bg-white transition-transform ${
                mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {mobileOpen && (
        <div className="md:hidden bg-zinc-900/95 border-t border-zinc-800">
          <div className="max-w-7xl mx-auto px-6 pt-4 pb-6 space-y-3 text-white text-base">
            <Link
              href="/about"
              className="block py-1 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              ABOUT
            </Link>
            <div className="pl-3 space-y-1 text-sm text-zinc-300">
              <Link
                href="/about/test-1"
                className="block py-1"
                onClick={() => setMobileOpen(false)}
              >
                Methodology
              </Link>
              <Link
                href="/about/test-2"
                className="block py-1"
                onClick={() => setMobileOpen(false)}
              >
                Testimonials
              </Link>
            </div>

            <Link
              href="/services"
              className="block pt-3 pb-1 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              SERVICES
            </Link>
            <div className="pl-3 space-y-1 text-sm text-zinc-300">
              <Link
                href="/services/website-design"
                className="block py-1"
                onClick={() => setMobileOpen(false)}
              >
                Website Design
              </Link>
              <Link
                href="/services/SEO"
                className="block py-1"
                onClick={() => setMobileOpen(false)}
              >
                SEO
              </Link>
            </div>

            <Link
              href="/Portfolio"
              className="block pt-3 pb-1 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              PORTFOLIO
            </Link>

            <Link
              href="/contact"
              className="block py-1 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              CONTACT
            </Link>

            <Link
              href="/resources"
              className="block py-1 font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              RESOURCES
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
