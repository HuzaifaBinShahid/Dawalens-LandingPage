import type { Metadata } from "next";

export const SITE = {
  name: "DawaLens",
  tagline: "Know what you're taking.",
  description:
    "Scan any medicine packaging to get dosage, interactions, contraindications, and pregnancy safety — bilingual English and Urdu.",
  url: "https://dawalens.app",
  locale: "en_US",
  twitter: "@dawalens",
};

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "DawaLens" }],
  keywords: [
    "medicine scanner",
    "pharmacy app",
    "drug interactions",
    "OCR medicine",
    "pregnancy medication safety",
    "bilingual pharmacy app",
    "Urdu medicine app",
    "DawaLens",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "ur-PK": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    locale: SITE.locale,
    alternateLocale: ["ur_PK"],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/assets/icon.png",
  },
};

export function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}#org`,
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/assets/icon.png`,
      },
      {
        "@type": "MobileApplication",
        "@id": `${SITE.url}#app`,
        name: SITE.name,
        applicationCategory: "MedicalApplication",
        operatingSystem: "Android, iOS",
        description: SITE.description,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        publisher: { "@id": `${SITE.url}#org` },
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${SITE.url}#page`,
        url: SITE.url,
        name: `${SITE.name} — ${SITE.tagline}`,
        description: SITE.description,
        inLanguage: ["en", "ur"],
        audience: {
          "@type": "MedicalAudience",
          audienceType: "Patient, Caregiver, HealthcareProfessional",
        },
        mainEntity: { "@id": `${SITE.url}#app` },
        isPartOf: { "@id": `${SITE.url}#org` },
      },
    ],
  };
}
