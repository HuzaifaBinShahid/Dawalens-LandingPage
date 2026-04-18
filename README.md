# DawaLens Landing Page

Marketing site for **DawaLens** — a mobile pharmacy assistant that helps users search medicines, OCR-scan drug packaging, and read dosage, side effects, contraindications, and interactions.

Built with Next.js 15, Tailwind v4, and an editorial-clinical design direction.

---

## Tech Stack

- **Next.js 15** (App Router, React 19, TypeScript strict)
- **Tailwind v4** — `@theme` tokens mapped to CSS variables
- **`next/font`** — Fraunces (display), Geist (body), Noto Nastaliq Urdu (accents)
- **`motion`** — component motion and viewport reveals
- **`gsap` + `ScrollTrigger`** — scroll choreography
- **`lenis`** — smooth scroll
- **`lucide-react`** — icon set
- **`qrcode`** — beta-invite QR generation

Rendering: SSG (static) — this is a marketing page.

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

The site runs on [http://localhost:3001](http://localhost:3001) (port chosen to avoid clashing with the Expo frontend on 3000).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start Next.js dev server on port 3001 |
| `npm run build` | Production build (SSG) |
| `npm run start` | Serve the production build on port 3001 |
| `npm run lint` | Next.js / ESLint checks |
| `npm run typecheck` | `tsc --noEmit` |

---

## Project Structure

```
Landing page/
├── app/              # Next.js App Router routes, layout, metadata
├── components/       # Section components for the landing page
├── lib/              # Utilities (motion helpers, QR, etc.)
├── public/           # Static assets (icons, images)
├── styles/           # globals.css with @theme tokens
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## Design System

Brand tokens are defined as CSS variables in `styles/globals.css` and consumed through Tailwind's `@theme` directive.

### Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-ink` | `#0A0E1A` | Hero background |
| `--color-primary` | `#0160B8` | DawaLens blue — primary actions |
| `--color-primary-dark` | `#014A8F` | Hover / deep emphasis |
| `--color-primary-tint` | `#E5EFF8` | Pale blue backgrounds |
| `--color-accent` | `#EA580C` | Orange — warnings, emphasis only |
| `--color-paper` | `#F8FAFC` | Default light background |
| `--color-bone` | `#EEE7DC` | Editorial warm neutral |
| `--color-success` | `#16A34A` | Safety confirmation |
| `--color-danger` | `#DC2626` | Alerts, contraindications |

### Typography

- **Fraunces** — display headlines (variable, exploit `opsz` + `wght`)
- **Geist** — body copy and UI
- **Noto Nastaliq Urdu** — bilingual design accents

Inter, Roboto, Arial, system-ui, and Space Grotesk are intentionally not used.

---

## Design Direction — Editorial Clinical

- Dark ink hero with grain overlay
- Magazine-grade typography
- Clinical blue dominant with surgical orange accents
- Urdu Nastaliq as a design element, not a translation layer
- Asymmetric, grid-breaking compositions

Avoid: pastel wellness gradients, symmetric three-column card grids, stock illustrations, infinite continuous animations.

---

## SEO & Performance

- `generateMetadata` with OpenGraph, Twitter card, canonical
- Dynamic `app/opengraph-image.tsx`
- `app/sitemap.ts` and `app/robots.ts`
- JSON-LD: `MedicalWebPage`, `MobileApplication`, `Organization`
- Semantic HTML throughout

### Core Web Vitals budget

| Metric | Target |
|---|---|
| LCP | < 2.0s |
| CLS | < 0.05 |
| INP | < 150ms |
| Lighthouse | 95+ on all axes |

---

## Parent Repository

This landing page lives inside the DawaLens monorepo alongside the backend and mobile app:

```
medicines-project/
├── backend/       # Express + Mongoose + MongoDB Atlas
├── frontend/      # Expo Router (React Native)
└── Landing page/  # ← this project
```

The landing page is a fresh marketing site and does not share components with the mobile app.

---

## Status

Pre-launch beta. The primary CTA is **"Try the beta"** backed by an Expo QR code — no Play Store / App Store links yet.

---

## Repository

Source is hosted on GitHub. Clone, open an issue, or send a pull request:

```bash
git clone https://github.com/<your-org>/dawalens-landing.git
cd "dawalens-landing"
npm install && npm run dev
```

Replace `<your-org>` with the GitHub owner once the remote is connected (`git remote add origin ...`).
