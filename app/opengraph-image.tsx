import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "DawaLens — Know what you're taking.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0A0E1A",
          color: "#F8FAFC",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 18, letterSpacing: 4, textTransform: "uppercase", opacity: 0.7 }}>
          <div style={{ width: 40, height: 1, background: "#EA580C" }} />
          <span>DawaLens &middot; Pharmacy, in your pocket</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, lineHeight: 1, letterSpacing: -3, display: "flex", flexDirection: "column" }}>
            <span>Know what you&rsquo;re</span>
            <span style={{ color: "#EA580C", fontStyle: "italic" }}>taking.</span>
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 22,
              letterSpacing: 0.5,
              lineHeight: 1.4,
              maxWidth: 820,
              opacity: 0.8,
              fontFamily: "sans-serif",
            }}
          >
            Scan any medicine packaging &mdash; get dosage, interactions, contraindications,
            and pregnancy safety. Bilingual English &amp; Urdu.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, letterSpacing: 3, textTransform: "uppercase", opacity: 0.5 }}>
          <span>Beta 2026</span>
          <span>dawalens.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
