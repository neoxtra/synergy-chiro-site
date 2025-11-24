"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // ref for the glow element
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    const SIZE = 600;

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX - SIZE / 2;
      const y = e.clientY - SIZE / 2;

      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-[#020617]">
        {/* cursor-following glow */}
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

        {/* TEXT OVERLAY */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center px-6 h-full">
          {/* TOP TAGLINE */}
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs md:text-lg tracking-[0.2em] text-red-400 font-bold mb-4"
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
            <span className="text-white"> for Small Businesses </span>
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
            <br/>
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
      </section>

      {/* SECTION BELOW HERO (unchanged, you can tweak later) */}
      <section className="w-full bg-zinc-100">
        <div className="mx-auto max-w-6xl px-8 py-20">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">
            Your Path to Better Spine Health
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mb-10">
            Personalized chiropractic care to help you move, heal, and feel your
            best.
          </p>
          <button className="inline-flex items-center justify-center rounded-md bg-black px-8 py-3 text-base font-medium text-white transition hover:bg-zinc-800">
            Book Appointment
          </button>
        </div>
      </section>
    </>
  );
}
