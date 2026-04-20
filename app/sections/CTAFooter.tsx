"use client";

import { NastaliqMark } from "@/components/visual/NastaliqMark";
import { Mail, Github } from "lucide-react";

/**
 * The old QR / Expo beta CTA lived here and was replaced by the new
 * `Waitlist` section (see `app/sections/Waitlist.tsx`). Kept commented
 * so the original treatment is recoverable if we ever re-open a beta.
 *
 * import { useEffect, useRef, useState } from "react";
 * import QRCode from "qrcode";
 * import { Reveal } from "@/components/motion/Reveal";
 * import { Grain } from "@/components/visual/Grain";
 *
 * const EXPO_URL = "exp://u.expo.dev/update/dawalens-beta";
 *
 * <section id="beta" …>
 *   …QR card + copy-link button…
 * </section>
 */

export function SiteFooter() {
  return (
    <footer className="relative bg-[color:var(--color-ink)] text-[color:var(--color-paper)]/60 border-t border-[color:var(--color-paper)]/10 px-6 sm:px-8 md:px-14 py-14">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Brand block — takes more of the row now that link columns are lean. */}
        <div className="md:col-span-7">
          <div className="flex items-baseline gap-3">
            <span
              className="text-2xl tracking-tight text-[color:var(--color-paper)]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
            >
              Dawa<span className="text-[color:var(--color-accent)]">Lens</span>
            </span>
            <NastaliqMark text="دوا" className="opacity-70" />
          </div>
          <p className="mt-4 text-sm max-w-[46ch] leading-[1.65]">
            A pharmacy-first scanner for the world&rsquo;s most bilingual households. Built in
            South Asia. Open to clinicians, pharmacists, and caregivers everywhere.
          </p>
        </div>

        {/* Single compact link column — only the anchors that actually exist on the page,
            plus the two contact routes worth surfacing. */}
        <nav
          aria-label="Footer"
          className="md:col-span-4 md:col-start-9 text-[11px] tracking-[0.22em] uppercase"
        >
          <div className="text-[color:var(--color-paper)]/40 mb-4">Elsewhere</div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            <li>
              <a href="#showcase" className="hover:text-[color:var(--color-paper)] transition-colors">
                Inside the app
              </a>
            </li>
            <li>
              <a href="#waitlist" className="hover:text-[color:var(--color-paper)] transition-colors">
                Waitlist
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@dawalens.app"
                className="inline-flex items-center gap-2 hover:text-[color:var(--color-paper)] transition-colors"
              >
                <Mail size={12} strokeWidth={1.6} />
                Email
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center gap-2 hover:text-[color:var(--color-paper)] transition-colors"
              >
                <Github size={12} strokeWidth={1.6} />
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-[1400px] mt-14 pt-8 border-t border-[color:var(--color-paper)]/10 flex flex-col md:flex-row gap-4 md:justify-between text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-paper)]/40">
        <span>&copy; {new Date().getFullYear()} DawaLens. All rights reserved.</span>
        <span className="normal-case tracking-normal">
          Informational only. Always consult a licensed clinician or pharmacist before acting on scan results.
        </span>
      </div>
    </footer>
  );
}
