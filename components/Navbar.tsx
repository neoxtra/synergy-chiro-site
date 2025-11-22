import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-col md:flex-row items-center md:items-center justify-between px-8 py-4 border-b border-zinc-200 gap-3 md:gap-0">
      <div className="text-xl font-semibold text-center md:text-left">
        Synergy Chiropractic
      </div>

      <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6 text-base">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/treatments">Treatments</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
