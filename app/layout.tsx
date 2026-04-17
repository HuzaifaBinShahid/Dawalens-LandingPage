import type { Metadata, Viewport } from "next";
import { fraunces, geist, notoNastaliqUrdu } from "@/lib/fonts";
import { siteMetadata, jsonLd } from "@/lib/seo";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import "@/styles/globals.css";

export const metadata: Metadata = siteMetadata;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0E1A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable} ${notoNastaliqUrdu.variable}`}
      style={
        {
          ["--font-display-var" as string]: fraunces.style.fontFamily,
          ["--font-body-var" as string]: geist.style.fontFamily,
          ["--font-urdu-var" as string]: notoNastaliqUrdu.style.fontFamily,
        } as React.CSSProperties
      }
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
