"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Reveal } from "@/components/motion/Reveal";
import { NastaliqMark } from "@/components/visual/NastaliqMark";
import { Grain } from "@/components/visual/Grain";
import { Mail, Github, Twitter } from "lucide-react";

const EXPO_URL = "exp://u.expo.dev/update/dawalens-beta";

export function CTAFooter() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    QRCode.toCanvas(canvasRef.current, EXPO_URL, {
      width: 220,
      margin: 0,
      color: {
        dark: "#0A0E1A",
        light: "#0000",
      },
      errorCorrectionLevel: "M",
    });
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EXPO_URL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <>
      <section
        id="beta"
        aria-labelledby="cta-title"
        className="relative bg-[color:var(--color-ink)] text-[color:var(--color-paper)] py-28 md:py-40 overflow-hidden"
      >
        <Grain opacity={0.09} />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 20% 100%, color-mix(in oklch, #EA580C 25%, transparent), transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-[1300px] px-8 md:px-14 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-4 mb-6 text-[11px] tracking-[0.24em] uppercase text-[color:var(--color-accent)]">
                <span className="editorial-rule" />
                <span>The beta, in your hand</span>
                <NastaliqMark text="آزمائشی" className="text-base opacity-80" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                id="cta-title"
                className="text-[clamp(2.6rem,6.4vw,5.6rem)] leading-[0.96] tracking-[-0.02em] max-w-[14ch]"
                style={{ fontFamily: "var(--font-display)", fontVariationSettings: '"opsz" 144, "SOFT" 20' }}
              >
                Point your camera.
                <br />
                <span className="italic text-[color:var(--color-accent)]">Start scanning.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 text-[17px] md:text-[19px] leading-[1.55] max-w-[50ch] text-[color:var(--color-paper)]/75">
                Open Expo Go on your Android, scan the QR, and the beta drops straight
                onto your phone. No store listing yet &mdash; we&rsquo;re still tuning the OCR
                against regional packaging.
              </p>
            </Reveal>
          </div>

          {/* QR card — editorial frame */}
          <Reveal direction="right" delay={0.2} className="col-span-12 lg:col-span-5">
            <div className="relative bg-[color:var(--color-paper)] text-[color:var(--color-ink)] p-8 md:p-10">
              <span
                aria-hidden
                className="absolute -top-3 -left-3 text-[11px] tracking-[0.24em] uppercase bg-[color:var(--color-accent)] text-[color:var(--color-ink)] px-3 py-1.5"
              >
                Scan with Expo Go
              </span>

              <div className="flex flex-col items-center pt-4">
                <canvas
                  ref={canvasRef}
                  aria-label="QR code to install the DawaLens beta via Expo Go"
                  className="block"
                />
                <code className="mt-6 text-[11px] tracking-[0.14em] text-[color:var(--color-slate)] break-all text-center">
                  {EXPO_URL}
                </code>
                <button
                  onClick={copy}
                  className="mt-4 text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-primary)] hover:text-[color:var(--color-accent)] transition-colors"
                >
                  {copied ? "Copied" : "Copy link"}
                </button>
              </div>

              <div className="mt-8 pt-6 border-t border-[color:var(--color-bone-deep)] text-[11px] tracking-[0.14em] text-[color:var(--color-slate)] leading-relaxed">
                Beta is informational only and is <strong className="text-[color:var(--color-ink)]">not</strong> a
                substitute for professional medical advice.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="relative bg-[color:var(--color-ink)] text-[color:var(--color-paper)]/60 border-t border-[color:var(--color-paper)]/10 px-8 md:px-14 py-14">
        <div className="mx-auto max-w-[1400px] grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-baseline gap-3">
              <span
                className="text-2xl tracking-tight text-[color:var(--color-paper)]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                Dawa<span className="text-[color:var(--color-accent)]">Lens</span>
              </span>
              <NastaliqMark text="دوا" className="opacity-60" />
            </div>
            <p className="mt-4 text-sm max-w-[42ch] leading-[1.6]">
              A pharmacy-first scanner for the world&rsquo;s most bilingual households. Built in
              South Asia. Open to clinicians, pharmacists, and caregivers everywhere.
            </p>
          </div>

          <nav aria-label="Footer" className="col-span-6 md:col-span-3 md:col-start-8 text-[11px] tracking-[0.22em] uppercase">
            <div className="text-[color:var(--color-paper)]/40 mb-4">Explore</div>
            <ul className="space-y-3">
              <li><a href="#how" className="hover:text-[color:var(--color-accent)] transition-colors">How it works</a></li>
              <li><a href="#safety" className="hover:text-[color:var(--color-accent)] transition-colors">Safety</a></li>
              <li><a href="#features" className="hover:text-[color:var(--color-accent)] transition-colors">Features</a></li>
              <li><a href="#beta" className="hover:text-[color:var(--color-accent)] transition-colors">Beta</a></li>
            </ul>
          </nav>

          <div className="col-span-6 md:col-span-2 md:col-start-11 text-[11px] tracking-[0.22em] uppercase">
            <div className="text-[color:var(--color-paper)]/40 mb-4">Reach us</div>
            <ul className="space-y-3">
              <li><a href="mailto:beta@dawalens.app" className="inline-flex items-center gap-2 hover:text-[color:var(--color-accent)] transition-colors"><Mail size={12} strokeWidth={1.6} /> Email</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-[color:var(--color-accent)] transition-colors"><Github size={12} strokeWidth={1.6} /> Github</a></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-[color:var(--color-accent)] transition-colors"><Twitter size={12} strokeWidth={1.6} /> Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-[1400px] mt-16 pt-8 border-t border-[color:var(--color-paper)]/10 flex flex-col md:flex-row gap-4 md:justify-between text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-paper)]/40">
          <span>&copy; {new Date().getFullYear()} DawaLens. All rights reserved.</span>
          <span className="normal-case tracking-normal">
            Informational only. Always consult a licensed clinician or pharmacist before acting on scan results.
          </span>
        </div>
      </footer>
    </>
  );
}
