import Link from "next/link";
import { NastaliqMark } from "@/components/visual/NastaliqMark";

export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="absolute top-0 left-0 right-0 z-50 px-8 md:px-14 py-7 flex items-center justify-between text-[color:var(--color-paper)]"
    >
      <Link href="/" className="flex items-baseline gap-2 group">
        <span
          className="text-xl tracking-tight"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontVariationSettings: '"opsz" 36, "SOFT" 50' }}
        >
          Dawa<span className="text-[color:var(--color-accent)]">Lens</span>
        </span>
        <NastaliqMark
          text="دوا"
          className="text-sm opacity-60 group-hover:opacity-100 transition-opacity"
        />
      </Link>

      <ul className="hidden md:flex items-center gap-10 text-[12px] tracking-[0.18em] uppercase">
        <li><a href="#how" className="hover:text-[color:var(--color-accent)] transition-colors">How it works</a></li>
        <li><a href="#safety" className="hover:text-[color:var(--color-accent)] transition-colors">Safety</a></li>
        <li><a href="#features" className="hover:text-[color:var(--color-accent)] transition-colors">Features</a></li>
      </ul>

      <a
        href="#beta"
        className="text-[12px] tracking-[0.18em] uppercase border border-[color:var(--color-paper)]/30 px-4 py-2 hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)] transition-colors"
      >
        Try the beta
      </a>
    </nav>
  );
}
