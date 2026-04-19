"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { PhoneFrame } from "@/components/visual/PhoneFrame";
import { NastaliqMark } from "@/components/visual/NastaliqMark";

type Feature = {
  fig: string;
  title: string;
  urdu: string;
  description: string;
  src: string;
  alt: string;
  /* Column span on md+ — breaks the uniform 2×2 grid. */
  span: string;
  /* Optional slight rotation for editorial feel. */
  tilt?: number;
};

const features: Feature[] = [
  {
    fig: "01",
    title: "Home",
    urdu: "صفحہ",
    description:
      "A single screen that greets you by name and gives you two unambiguous entry points to the medicine index.",
    src: "/assets/screen-home.jpeg",
    alt: "DawaLens home screen with two ways to identify a medicine",
    span: "md:col-span-7 md:row-span-2",
    tilt: -2,
  },
  {
    fig: "02",
    title: "Scan",
    urdu: "تصویر",
    description:
      "Hold the camera over the box. The frame locks, the name is read off the packaging — no typing, no guessing.",
    src: "/assets/screen-scan.jpeg",
    alt: "DawaLens camera scanner framing a medicine box",
    span: "md:col-span-5",
    tilt: 2,
  },
  {
    fig: "03",
    title: "Search",
    urdu: "تلاش",
    description:
      "Type a brand, a generic, a misspelling. Fuzzy-matched against a verified index of every medicine sold regionally.",
    src: "/assets/screen-search.jpeg",
    alt: "DawaLens search screen with keyboard and suggested medicines",
    span: "md:col-span-6",
    tilt: -1,
  },
  {
    fig: "04",
    title: "Details",
    urdu: "تفصیل",
    description:
      "Uses, dosage, safety alerts, contraindications &mdash; with a one-tap Urdu translation when you need it.",
    src: "/assets/screen-details.jpeg",
    alt: "DawaLens medicine detail screen with uses and safety alert",
    span: "md:col-span-6",
    tilt: 1,
  },
];

export function Features() {
  const reduced = useReducedMotion();

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="relative bg-[color:var(--color-paper)] text-[color:var(--color-ink)] py-28 md:py-40 overflow-hidden scroll-mt-24"
    >
      {/* Bone stripe that bleeds behind the grid */}
      <div
        aria-hidden
        className="absolute left-0 right-0 top-[38%] h-[28%] bg-[color:var(--color-bone)] -z-0"
        style={{ clipPath: "polygon(0 20%, 100% 0, 100% 80%, 0 100%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-8 md:px-14">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <div className="flex items-center gap-4 mb-6 text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-slate)]">
              <span className="editorial-rule" />
              <span>Four modules, one cabinet</span>
              <NastaliqMark text="خصوصیات" className="text-base opacity-70" />
            </div>
            <h2
              id="features-title"
              className="text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[0.98] tracking-[-0.02em] max-w-[16ch]"
              style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 144, "SOFT" 20' }}
            >
              Everything a household
              <br />
              <span className="italic text-[color:var(--color-primary)]">asks the pharmacist.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-[38ch] text-[color:var(--color-slate)] leading-[1.55]">
              A home screen, a scanner, a searchable index, and a medicine page that doesn&rsquo;t
              hide the warning in a leaflet nobody kept.
            </p>
          </Reveal>
        </div>

        {/* Asymmetric 12-column layout — home stretches, the others flank. */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          {features.map((f, i) => (
            <motion.article
              key={f.fig}
              initial={{ opacity: 0, y: reduced ? 0 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: reduced ? 0.15 : 0.9,
                delay: reduced ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`${f.span} flex flex-col md:flex-row gap-8 md:gap-10 items-start`}
            >
              <div className="w-full max-w-[220px] md:max-w-[240px] shrink-0 mx-auto md:mx-0">
                <PhoneFrame tilt={reduced ? 0 : (f.tilt ?? 0)} scale={1}>
                  <div className="absolute inset-0">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(max-width: 768px) 60vw, 240px"
                      className="object-cover object-top"
                    />
                  </div>
                </PhoneFrame>
              </div>

              <div className="flex-1 pt-2">
                <div className="text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-primary)] mb-3">
                  Fig. {f.fig}
                </div>
                <h3
                  className="text-[28px] md:text-[34px] leading-[1.05] tracking-[-0.01em]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>
                <NastaliqMark
                  text={f.urdu}
                  className="block mt-1 text-base text-[color:var(--color-primary)] opacity-80"
                />
                <p
                  className="mt-4 text-[15px] leading-[1.6] text-[color:var(--color-slate)] max-w-[42ch]"
                  dangerouslySetInnerHTML={{ __html: f.description }}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
