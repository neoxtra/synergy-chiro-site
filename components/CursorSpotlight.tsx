"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    const SIZE = 20000; // diameter of the glow circle

    const handleMove = (e: PointerEvent) => {
      const x = e.clientX - SIZE / 2;
      const y = e.clientY - SIZE / 2;

      spotlight.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <>
      {/* Base dark blue-ish background */}
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[#020617]" />

      {/* Cursor-following glow */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          -z-10
          w-[600px] h-[600px]
          rounded-full
          blur-3xl
          mix-blend-screen
          bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.8),_transparent_60%)]
        "
      />
    </>
  );
}
