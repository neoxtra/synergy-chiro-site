import Image from "next/image";

export default function Hero() {
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

        {/* TEXT OVERLAY */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            Transforming Ideas Into Digital Reality
          </h1>

          <p className="text-xl mt-4 max-w-2xl drop-shadow-lg">
            High-performance web design, branding, and automation for modern businesses.
          </p>

          <button className="mt-8 bg-green-700 hover:bg-green-800 px-8 py-3 rounded-lg text-lg font-semibold shadow-lg transition">
            Get Started
          </button>
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
