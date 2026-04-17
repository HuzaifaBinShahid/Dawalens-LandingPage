"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";

/**
 * Editorial duotone photo. Grayscales the source, then washes it in the
 * clinical blue so every photo reads as one voice regardless of photographer.
 * The stacked corner brackets and captioning make the image feel published,
 * not dropped in. Captions are deliberately tiny — the photo does the talking.
 */
export function EditorialImage({
  src,
  alt,
  width,
  height,
  caption,
  index,
  tone = "duotone",
  frame = true,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  index?: string;
  tone?: "duotone" | "mono" | "raw";
  frame?: boolean;
  className?: string;
  priority?: boolean;
}) {
  const reduced = useReducedMotion();

  const imgFilter: CSSProperties =
    tone === "duotone"
      ? { filter: "grayscale(100%) contrast(1.08) brightness(0.95)" }
      : tone === "mono"
      ? { filter: "grayscale(100%) contrast(1.1)" }
      : {};

  return (
    <motion.figure
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduced ? 0.15 : 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: `${width} / ${height}` }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 40vw, 90vw"
          priority={priority}
          className="object-cover"
          style={imgFilter}
        />

        {/* Color-wash duotone layer — maps grayscale to clinical blue */}
        {tone === "duotone" && (
          <>
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "var(--color-primary)",
                mixBlendMode: "color",
                opacity: 0.85,
              }}
            />
            {/* Shadow deepener — ink on the darks */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklch, var(--color-ink) 10%, transparent) 0%, color-mix(in oklch, var(--color-ink) 55%, transparent) 100%)",
                mixBlendMode: "multiply",
              }}
            />
            {/* Orange punctuation glint — subtle edge light on top-right */}
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 30% 20% at 85% 12%, color-mix(in oklch, var(--color-accent) 28%, transparent), transparent 60%)",
                mixBlendMode: "screen",
              }}
            />
          </>
        )}

        {/* Grain overlay for cohesion with dark sections */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.9'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Corner brackets — editorial frame, no border box */}
        {frame && (
          <>
            <span aria-hidden className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[color:var(--color-paper)]/40" />
            <span aria-hidden className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[color:var(--color-paper)]/40" />
            <span aria-hidden className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[color:var(--color-paper)]/40" />
            <span aria-hidden className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[color:var(--color-paper)]/40" />
          </>
        )}
      </div>

      {(caption || index) && (
        <figcaption className="mt-3 flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-[color:var(--color-slate)]">
          {index && <span className="text-[color:var(--color-accent)]">fig. {index}</span>}
          {caption && <span className="text-right">{caption}</span>}
        </figcaption>
      )}
    </motion.figure>
  );
}
