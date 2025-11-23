import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* FULLSCREEN HERO IMAGE */}
      <section className="relative w-full h-screen">
        <Image
          src="/hero_bg.png"
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />
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
