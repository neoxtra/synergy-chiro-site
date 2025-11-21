import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-zinc-200">
      <div className="text-xl font-semibold">
        Synergy Chiropractic
      </div>

      <div className="flex gap-6 text-base">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/treatments">Treatments</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
