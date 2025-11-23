"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  // Shared slide-up + fade-in animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* FULLSCREEN HERO IMAGE */}
      <section className="relative w-full h-screen">
        {/* Background image */}
        <Image
          src="/bg.png"
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          
          {/* TOP TAGLINE */}
          <motion.span
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
              text-xs
              md:text-lg
              tracking-[0.2em]
              text-sky-400
              font-bold
              mb-4
            "
          >
            Efficient Marketing Begins Here
          </motion.span>

          {/* MAIN HEADING */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="
              text-4xl
              md:text-6xl
              font-bold
              tracking-tight
              text-white
              drop-shadow-[0_8px_30px_rgba(0,0,0,0.9)]
            "
          >
            {/* <span className="text-white">AI-Powered </span> */}

            {/* GRADIENT WORD */}
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

            <span className="text-white"> Full Stack Solutions </span>
            <br/>
            <span className="text-white"> for Small Businesses </span>
          </motion.h1>
          

          {/* SUBHEADING */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="
              text-
              md:text-xl
              text-zinc-100
              mt-4
              max-w-2xl
              drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)]
            "
          >
            NeoTek Media gives local businesses the power to stand out online and win more clients every day. Make your first impression count.
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
              transform
              transition-transform
              duration-300
              hover:scale-105
            "
          >
            {/* sliding blue background */}
            <span
              className="
                absolute
                inset-0
                bg-sky-600
                translate-x-[-100%]
                group-hover:translate-x-0
                transition-transform
                duration-300
              "
            />

            {/* text (above background) */}
            <span className="relative z-10">
              Get Started

              
            </span>
          </motion.button>
        </div>
      </section>

      {/* SECTION BELOW HERO */}
      <section className="w-full bg-zinc-100">
        <div className="mx-auto max-w-6xl px-8 py-20">
          <h2 className="text-4xl font-bold text-zinc-900 mb-6">
            Your Path to Better Spine Health
          </h2>

          <p className="text-lg text-zinc-600 max-w-2xl mb-10">
            Personalized chiropractic care to help you move, heal, and feel your best.
          </p>

          <button className="inline-flex items-center justify-center rounded-md bg-black px-8 py-3 text-base font-medium text-white transition hover:bg-zinc-800">
            Book Appointment
          </button>
        </div>
      </section>
    </>
  );
}
