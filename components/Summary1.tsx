// components/Summary1.tsx
"use client";

export default function Summary1() {
  return (
    <section className="w-full bg-white text-black py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* TOP LABEL */}
        <p className="text-center text-xs md:text-sm tracking-[0.25em] font-semibold text-slate-600 mb-12 uppercase">
          A NEW YORK–BASED DIGITAL MARKETING STUDIO
        </p>

        {/* TWO-COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT COLUMN – BIG RED HEADLINE + SHORT BODY */}
          <div>
            <h2 className="text-3xl md:text-5xl leading-tight font-semibold text-[#e63934] mb-6">
              We Built The Studio We Wish Existed.
            </h2>

            <p className="text-base md:text-lg text-slate-800 leading-relaxed">
              We are a full-service design studio
              specializing in custom websites, SEO, and marketing content that
              converts. We focus on <span className="font-bold"> customizable </span> design, performance, and
              clear communication.

              <br />
              <br />

              No shortcuts, no recycled layouts, no cookie-cutter garbage. We tailor to your brand, built by a team that knows what they’re doing.
            </p>
          </div>


          
          {/* RIGHT COLUMN – LONGER COPY + BUTTON */}
          <div className="flex flex-col justify-between gap-8">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              <br />
              <br />
              
              
              
              
              Our team is made up of engineers, artists, and developers.
              We believe that{" "}
              <span className="font-semibold">
                clarity, consistency, and performance
              </span>{" "}
              are what separate a forgettable website from a brand that people
              trust. 

              <br />
              <br />

              We’ve been in your position: investing countless hours and dollars into designers who disappear when you need them.
              
            </p>

            <div>
              <button
                className="
                  inline-flex items-center justify-center
                  px-8 py-3
                  border border-black
                  text-sm md:text-base
                  font-semibold
                  tracking-wide
                  uppercase
                  bg-white
                  hover:bg-black hover:text-white
                  transition-colors
                  duration-200
                "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
