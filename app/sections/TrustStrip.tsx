import { NastaliqMark } from "@/components/visual/NastaliqMark";

const items = [
  { k: "180K+", v: "Medicines indexed" },
  { k: "EN / اردو", v: "Bilingual by design" },
  { k: "< 1.2s", v: "Avg. scan-to-result" },
  { k: "26", v: "Contraindication classes flagged" },
  { k: "Offline", v: "After first scan" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="At a glance"
      className="relative bg-[color:var(--color-ink-soft)] text-[color:var(--color-paper)] py-8 overflow-hidden border-y border-[color:var(--color-paper)]/10"
    >
      <div className="marquee-track flex items-center gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((it, i) => (
          <div key={i} className="flex items-center gap-5 shrink-0">
            <span
              className="text-[34px] md:text-[44px] leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1',
              }}
            >
              {it.k}
            </span>
            <span className="text-[11px] tracking-[0.24em] uppercase opacity-70">{it.v}</span>
            <span className="text-[color:var(--color-accent)] text-xl leading-none pb-1" aria-hidden>
              &bull;
            </span>
          </div>
        ))}
      </div>

      <span className="sr-only">
        Over 180,000 medicines indexed, bilingual English and <NastaliqMark text="اردو" />, under 1.2 second scan-to-result,
        26 contraindication classes flagged, works offline after first scan.
      </span>
    </section>
  );
}
