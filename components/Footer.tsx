"use client";

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* LEFT SECTION */}
          <div className="text-center md:text-left space-y-1">
            <h3 className="text-white text-lg font-semibold">NeoTek Designs</h3>
            <p className="text-sm text-zinc-400">
              hi@placeholderemail.com
            </p>
            <p className="text-sm text-zinc-400">
              support@placeholderemail.com
            </p>
          </div>

          {/* SOCIALS */}
          <div className="flex space-x-8">
            <Link
              href="#"
              className="flex items-center space-x-2 text-zinc-400 hover:text-white transition"
            >
              <Instagram size={20} />
              <span className="text-sm font-medium">Instagram</span>
            </Link>

            <Link
              href="#"
              className="flex items-center space-x-2 text-zinc-400 hover:text-white transition"
            >
              <Facebook size={20} />
              <span className="text-sm font-medium">Facebook</span>
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-zinc-800 mt-10 pt-6 text-center">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} NeoTek Designs. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500 mt-1">
            Powered by <span className="text-white font-medium">NeoTek Designs</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
