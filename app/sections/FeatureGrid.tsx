"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import {
  ScanLine,
  Search,
  Clock,
  Users,
  WifiOff,
  FileText,
} from "lucide-react";

const features = [
  {
    icon: ScanLine,
    t: "Live OCR scan",
    d: "Camera-first: point at any packaging and we parse brand, molecule, strength, and batch.",
    span: "md:col-span-7 md:row-span-2",
    size: "large",
  },
  {
    icon: Search,
    t: "Name search",
    d: "Typed search with fuzzy matching — remembers the misspellings your family actually types.",
    span: "md:col-span-5",
    size: "small",
  },
  {
    icon: FileText,
    t: "Dosage blocks",
    d: "Adult, pediatric, renal, hepatic — the right number for the right body.",
    span: "md:col-span-5",
    size: "small",
  },
  {
    icon: Users,
    t: "Pregnancy & lactation",
    d: "FDA categories with plain-language guidance. No unexplained jargon.",
    span: "md:col-span-4",
    size: "small",
  },
  {
    icon: Clock,
    t: "Interaction checks",
    d: "Add the other meds you take. We flag clashes before you do.",
    span: "md:col-span-4",
    size: "small",
  },
  {
    icon: WifiOff,
    t: "Offline first",
    d: "Your medicine cabinet doesn't have Wi-Fi. The app doesn't need it after the first scan.",
    span: "md:col-span-4",
    size: "small",
  },
];

export function FeatureGrid() {
  const reduced = useReducedMotion();

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative bg-[color:var(--color-paper)] text-[color:var(--color-ink)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-8 md:px-14">
        <div className="mb-16 md:mb-24">
          <Reveal>
            <div className="flex items-center gap-4 mb-6 text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-slate)]">
              <span className="editorial-rule" />
              <span>Inside the app</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              id="features-title"
              className="text-[clamp(2.4rem,5.4vw,5rem)] leading-[0.98] tracking-[-0.02em] max-w-[14ch]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Built for the moment
              <br />
              <span className="italic text-[color:var(--color-primary)]">the strip leaves the box.</span>
            </h2>
          </Reveal>
        </div>

        {/* Broken grid — explicitly not 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_auto_auto] gap-4 md:gap-6 auto-rows-auto">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isLarge = f.size === "large";
            return (
              <motion.article
                key={f.t}
                initial={{ opacity: 0, y: reduced ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: reduced ? 0.15 : 0.7,
                  delay: reduced ? 0 : i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${f.span} group relative p-8 md:p-10 bg-[color:var(--color-bone)] overflow-hidden transition-colors duration-500 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)]`}
              >
                {/* Corner accent rule */}
                <span
                  aria-hidden
                  className="absolute top-0 right-0 w-10 h-10 border-t border-r border-[color:var(--color-ink)]/20 group-hover:border-[color:var(--color-accent)] transition-colors"
                />

                <div className="flex items-start justify-between mb-10 md:mb-14">
                  <Icon
                    size={isLarge ? 36 : 28}
                    strokeWidth={1.4}
                    className="text-[color:var(--color-primary)] group-hover:text-[color:var(--color-accent)] transition-colors duration-500"
                  />
                  <span className="text-[11px] tracking-[0.24em] uppercase opacity-40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className={`${isLarge ? "text-[32px] md:text-[40px]" : "text-[22px] md:text-[26px]"} leading-[1.05] tracking-[-0.01em] mb-4`}
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.t}
                </h3>
                <p className="text-[15px] leading-[1.55] text-[color:var(--color-slate)] group-hover:text-[color:var(--color-paper)]/80 transition-colors duration-500 max-w-[44ch]">
                  {f.d}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
