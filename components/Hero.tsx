"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const glowRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null); // now tracks the blue hero block

  useEffect(() => {
    const glow = glowRef.current;
    const hero = heroRef.current;
    if (!glow || !hero) return;

    const SIZE = 600;

    const handleMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();

      // position relative to the BLUE HERO block
      const x = e.clientX - rect.left - SIZE / 2;
      const y = e.clientY - rect.top - SIZE / 2;

      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    // BACKGROUND BEHIND HERO (modifiable)
    <section className="relative w-full bg-white m-0 p-0 overflow-visible">
      {/* BLUE HERO BLOCK (rect + triangle) */}
      <div
        ref={heroRef}
        className="
          relative
          w-full
          text-slate-100
          pb-24
        "
        style={{
          // blue hero rectangle with triangle extension at bottom
          backgroundColor: "#020617",
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)",
          // 0,0 to 100,0 = top edge
          // 100,75 and 0,75 = flat bottom edge
          // 50,100 = point of triangle
        }}
      >
        {/* cursor-following glow INSIDE blue hero */}
        <div
          ref={glowRef}
          className="
            pointer-events-none
            absolute
            w-[600px] h-[600px]
            rounded-full
            blur-5xl
            opacity-10
            -z-0
          "
          style={{
            background:
              "radial-gradient(circle at center, rgba(56,189,248,0.9), transparent 65%)",
          }}
        />

        {/* HERO TEXT BLOCK */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 min-h-[700px]">
          {/* TOP TAGLINE */}
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs md:text-lg tracking-[0.2em] text-slate-400 font-bold mb-4"
          >
            Efficient Marketing Begins Here
          </motion.span>

          {/* MAIN HEADING */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl md:text-8xl font-bold tracking-tight text-white"
          >
            <span
              className="
                bg-gradient-to-r
                from-blue-600
                to-red-400
                bg-clip-text
                text-transparent
              "
            >
              Creative
            </span>
            <span className="text-white"> Solutions </span>
            <br />
            <span className="text-white"> for Local Businesses </span>
          </motion.h1>

          {/* SUBHEADING */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="md:text-xl text-zinc-100 mt-4 max-w-2xl"
          >
            We provide you the tools needed to turn your design into reality.
            <br />
            Make your first impression count.
          </motion.p>

          {/* BUTTON */}
          <motion.button
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="
              group
              relative
              mt-8
              inline-flex
              items-center
              justify-center
              px-8
              py-3
              rounded-lg
              text-base
              md:text-lg
              font-semibold
              text-white
              border
              border-white
              overflow-hidden
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            <span
              className="
                absolute
                inset-0
                bg-green-600
                translate-x-[-100%]
                group-hover:translate-x-0
                transition-transform
                duration-1200
              "
            />
            <span className="relative z-10">Get Started</span>
          </motion.button>
        </div>

        {/* IMAGE UNDER HERO TEXT, STILL INSIDE BLUE SHAPE */}
        <div className="relative z-10 w-full max-w-7xl mx-auto mt-0 pb-10 flex justify-center">
          <Image
            src="/jerry.png"
            alt="Solutions"
            width={1880}
            height={1330}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
