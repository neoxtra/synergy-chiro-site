import Image from "next/image";

export default function Solutions() {
  return (
    <section className="w-full bg-[#020617] pt-0 pb-24 m-0 flex justify-center">
      <div className="relative w-full max-w-7xl mx-auto flex justify-center">
        <Image
          src="/solutions.png"
          alt="Solutions"
          width={2400}
          height={2400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </section>
  );
}
