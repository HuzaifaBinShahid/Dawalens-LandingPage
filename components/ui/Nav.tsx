import Link from "next/link";
import { NastaliqMark } from "@/components/visual/NastaliqMark";

export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="absolute top-0 left-0 right-0 z-50 px-6 sm:px-8 md:px-14 py-7 flex items-center justify-between text-[color:var(--color-primary)]"
    >
      <Link href="/" className="flex items-baseline gap-2 group">
        <span
          className="text-xl tracking-tight"
          style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontVariationSettings: '"opsz" 36, "SOFT" 50' }}
        >
          Dawa<span className="text-[color:var(--color-primary-dark)]">Lens</span>
        </span>
        <NastaliqMark
          text="دوا"
          className="text-sm opacity-70 group-hover:opacity-100 transition-opacity"
        />
      </Link>

      <ul className="hidden md:flex items-center gap-10 text-[12px] tracking-[0.18em] uppercase">
        {/* Nav links intentionally hidden for now. */}
      </ul>

      <a
        href="#waitlist"
        className="text-[12px] tracking-[0.18em] uppercase border border-[color:var(--color-primary)]/40 text-[color:var(--color-primary)] px-4 py-2 hover:bg-[color:var(--color-primary)] hover:text-[color:var(--color-paper)] hover:border-[color:var(--color-primary)] transition-colors"
      >
        Join waitlist
      </a>
    </nav>
  );
}
