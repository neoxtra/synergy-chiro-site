import Image from "next/image";


export default function Hero() {
  return (
    <section className="w-full bg-zinc-100">
      {/* inner content container, centered and limited in width */}
      <div className="mx-auto flex max-w-6xl items-center gap-12 px-8 py-20">
        {/* LEFT: image area (your BJJ photo will go here later) */}
        <div className="h-[420px] w-[520px] overflow-hidden rounded-lg">
            <Image
                src="/bjj.png"
                alt="Hero Image"
                width={520}
                height={420}
                className="h-full w-full object-cover"
                priority
            />
        </div>

        {/* RIGHT: text + button */}
        <div className="flex max-w-xl flex-col gap-6">
          <h1 className="text-5xl font-bold leading-tight text-zinc-900">
            Your Path to Better Spine Health
          </h1>

          <p className="text-lg text-zinc-600">
            Personalized chiropractic care to help you move, heal, and feel your best.
          </p>







          <button className="inline-flex items-center justify-center rounded-md bg-black px-8 py-3 text-base font-medium text-white transition hover:bg-zinc-800">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
}



