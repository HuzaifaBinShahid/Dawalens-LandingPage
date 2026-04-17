import type { ReactNode } from "react";

/**
 * A phone frame that deliberately reads as an illustration, not a stock mockup.
 * The bezel is thin, the notch is a dynamic-island pill, and the shadow is
 * editorial (long and low) rather than a generic drop shadow.
 */
export function PhoneFrame({
  children,
  className = "",
  tilt = 0,
  scale = 1,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
  scale?: number;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `rotate(${tilt}deg) scale(${scale})`,
        transformOrigin: "center bottom",
      }}
    >
      {/* Long editorial shadow */}
      <div
        aria-hidden
        className="absolute -bottom-6 left-6 right-6 h-10 rounded-[50%] blur-2xl"
        style={{ background: "color-mix(in oklch, var(--color-ink) 55%, transparent)" }}
      />

      {/* Outer shell */}
      <div
        className="relative aspect-[9/19] w-full rounded-[44px] p-[10px]"
        style={{
          background: "linear-gradient(160deg, #1a1f2e 0%, #0a0e1a 100%)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px -20px rgba(10,14,26,0.35)",
        }}
      >
        {/* Screen */}
        <div className="relative w-full h-full rounded-[36px] overflow-hidden bg-[color:var(--color-paper)]">
          {/* Dynamic island */}
          <div
            aria-hidden
            className="absolute top-2 left-1/2 -translate-x-1/2 w-[86px] h-[26px] rounded-full bg-[#0a0e1a] z-30"
          />
          {children}
        </div>
      </div>
    </div>
  );
}

/** Status bar helper — tiny clock + signal/battery glyphs */
export function StatusBar({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const color = tone === "dark" ? "#0a0e1a" : "#F8FAFC";
  return (
    <div
      className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 pt-[14px] text-[11px] font-semibold z-20 tabular-nums"
      style={{ color, fontFamily: "var(--font-body)" }}
    >
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <svg width="16" height="10" viewBox="0 0 16 10" fill={color}>
          <rect x="0" y="6" width="2.5" height="4" rx="0.5" />
          <rect x="4" y="4" width="2.5" height="6" rx="0.5" />
          <rect x="8" y="2" width="2.5" height="8" rx="0.5" />
          <rect x="12" y="0" width="2.5" height="10" rx="0.5" />
        </svg>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke={color} strokeWidth="1.2">
          <path d="M1 4 Q7 -1 13 4" strokeLinecap="round" />
          <path d="M3 6 Q7 3 11 6" strokeLinecap="round" />
          <circle cx="7" cy="8.5" r="0.9" fill={color} stroke="none" />
        </svg>
        <svg width="22" height="10" viewBox="0 0 22 10" fill="none" stroke={color} strokeWidth="1">
          <rect x="0.5" y="0.5" width="18" height="9" rx="2" />
          <rect x="2" y="2" width="14" height="6" rx="1" fill={color} />
          <rect x="19.5" y="3" width="1.5" height="4" rx="0.5" fill={color} />
        </svg>
      </span>
    </div>
  );
}
