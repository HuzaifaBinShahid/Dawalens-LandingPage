"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { NastaliqMark } from "@/components/visual/NastaliqMark";

/**
 * Full-bleed editorial break. A duotone photo carries the weight; a single
 * pull quote sits layered over it, offset to one side. No feature copy — the
 * image is the argument.
 */
export function InTheHand() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="hand-title"
      className="relative w-full bg-[color:var(--color-ink)] text-[color:var(--color-paper)] overflow-hidden"
    >
      <div className="relative w-full" style={{ aspectRatio: "21 / 9" }}>
        <Image
          src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1800&q=80"
          alt="Pharmacist reading a medicine label"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ filter: "grayscale(100%) contrast(1.08) brightness(0.85)" }}
        />
        {/* Duotone blue wash */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: "var(--color-primary)", mixBlendMode: "color", opacity: 0.85 }}
        />
        {/* Ink gradient — deeper on the left to hold the quote */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, color-mix(in oklch, var(--color-ink) 85%, transparent) 0%, color-mix(in oklch, var(--color-ink) 30%, transparent) 55%, transparent 100%)",
          }}
        />
        {/* Orange edge glint */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 25% 30% at 88% 18%, color-mix(in oklch, var(--color-accent) 32%, transparent), transparent 55%)",
            mixBlendMode: "screen",
          }}
        />
        {/* Grain */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Quote — left aligned, anchored to bottom */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full mx-auto max-w-[1400px] px-8 md:px-14 pb-14 md:pb-20">
            <div className="grid grid-cols-12">
              <motion.div
                initial={{ opacity: 0, y: reduced ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: reduced ? 0.15 : 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-12 md:col-span-8 lg:col-span-7"
              >
                <div className="flex items-center gap-4 mb-6 text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-accent)]">
                  <span className="inline-block w-10 h-px bg-[color:var(--color-accent)]" />
                  <span>Interlude</span>
                  <NastaliqMark text="وقفہ" className="text-base opacity-80" />
                </div>

                <h2
                  id="hand-title"
                  className="text-[clamp(1.8rem,4vw,3.4rem)] leading-[1.15] tracking-[-0.01em] max-w-[28ch]"
                  style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 144, "SOFT" 20' }}
                >
                  The strip in the kitchen drawer is where medicine gets
                  <span className="italic text-[color:var(--color-accent)]"> complicated.</span>
                </h2>

                <p className="mt-6 text-[color:var(--color-paper)]/70 max-w-[50ch] leading-[1.6]">
                  It&rsquo;s rarely the prescription itself that confuses a family &mdash; it&rsquo;s the
                  strip that wandered out of its box, the half-remembered dose, the warning
                  on the leaflet nobody kept. DawaLens starts exactly there.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Top-right editorial notation */}
        <div className="absolute top-8 right-8 md:top-10 md:right-14 text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-paper)]/60">
          Fig. 00 &nbsp;&mdash;&nbsp; In the hand
        </div>
      </div>
    </section>
  );
}
