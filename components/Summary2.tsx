"use client";

import Image from "next/image";
import Link from "next/link";

type SummaryItem = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  highlight: string;
  body: string;
  ctaLabel?: string;
  ctaHref?: string;
};

type Summary2Props = {
  heading?: string;
  subheading?: string;
  items?: SummaryItem[]; // OPTIONAL NOW
};

/* -------------------------------------------
   DEFAULT ITEMS (used if none are passed in)
-------------------------------------------- */
const defaultItems: SummaryItem[] = [
  {
    iconSrc: "/icons/custom-websites.png",
    iconAlt: "Custom Websites Icon",
    title: "Custom Websites",
    highlight:
      "Your business is unique. You deserve a unique, custom website.",
    body: "We design everything from scratch with layouts, messaging, and performance optimized specifically for your brand and audience.",
    ctaLabel: "Learn More",
    ctaHref: "/services/websites",
  },
  {
    iconSrc: "/icons/social-strategy.png",
    iconAlt: "Social Strategy Icon",
    title: "Social Strategy & Management",
    highlight:
      "Let us introduce your company to social media – or take it to the next level.",
    body: "From content calendars to full campaign management, we help you build a consistent, on-brand presence on every platform.",
    ctaLabel: "Learn More",
    ctaHref: "/services/social",
  },
  {
    iconSrc: "/icons/content-creation.png",
    iconAlt: "Content Creation Icon",
    title: "Content Creation",
    highlight: "You need content. We create it.",
    body: "Blogs, website copy, graphics, and social content — all crafted to match your voice and convert visitors into customers.",
    ctaLabel: "Learn More",
    ctaHref: "/services/content",
  },
];

export default function Summary2({
  heading = "Our Specialties",
  subheading = "We establish and improve your digital footprint & web presence.",
  items = defaultItems, // fallback prevents errors
}: Summary2Props) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
            {heading}
          </h2>

          <p className="mt-4 text-zinc-600 text-sm md:text-base max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-6 py-10 border border-zinc-200/80 rounded-lg shadow-sm"
            >
              {/* Icon + sonar ping */}
              <div className="relative mb-8 group">
                <div className="absolute inset-0 rounded-full border border-red-500/70 opacity-0 group-hover:opacity-70 group-hover:animate-ping transition-opacity duration-200" />

                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-zinc-50 group-hover:bg-red-50 transition-colors duration-200">
                  <Image
                    src={item.iconSrc}
                    alt={item.iconAlt}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-zinc-900 mb-4">
                {item.title}
              </h3>

              {/* Highlight text */}
              <p className="text-sm md:text-base text-red-600 font-medium mb-4 leading-relaxed">
                {item.highlight}
              </p>

              {/* Body text */}
              <p className="text-sm text-zinc-600 leading-relaxed mb-8">
                {item.body}
              </p>

              {/* Button */}
              {item.ctaHref && item.ctaLabel && (
                <Link
                  href={item.ctaHref}
                  className="mt-auto inline-flex items-center justify-center px-6 py-2 text-xs md:text-sm font-semibold tracking-wide border border-zinc-300 rounded-md text-zinc-800 bg-white hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors duration-200"
                >
                  {item.ctaLabel.toUpperCase()}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
