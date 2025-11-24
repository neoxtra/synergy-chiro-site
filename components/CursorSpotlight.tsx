"use client";

import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = spotRef.current;
    if (!el) return;

    const SIZE = 700;

    const move = (e: PointerEvent) => {
      const x = e.clientX - SIZE / 2;
      const y = e.clientY - SIZE / 2;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      ref={spotRef}
      className="
        pointer-events-none
        fixed
        top-0 left-0
        w-[700px] h-[700px]
        rounded-full
        -z-10
        blur-3xl
        opacity-60
        bg-[radial-gradient(circle,_rgba(56,189,248,0.9)_0%,_transparent_70%)]
      "
    />
  );
}
