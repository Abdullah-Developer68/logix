import { ImageResponse } from "next/og";

export const alt = "Logix — Custom Software, Web & Mobile App Development";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Shared preview image for links to logixofficial.site (WhatsApp, LinkedIn, X, Slack…).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#080e1a",
          color: "#f1f5f9",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <svg width="96" height="96" viewBox="41.5 67.5 800 800">
            <rect x="41.5" y="67.5" width="800" height="800" rx="144" fill="#0b1f3a" />
            <polygon points="643,178 749,263 461,618 355,533" fill="#17c4b0" />
            <polygon points="134,169 288,169 288,612 561,612 561,766 134,766" fill="#ffffff" />
          </svg>
          <div style={{ display: "flex", fontSize: 56, fontWeight: 700 }}>
            LOG<span style={{ color: "#22d3b0" }}>IX</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 56, fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          <span>Software that moves your</span>
          <span style={{ color: "#22d3b0" }}>business forward.</span>
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 30, color: "#94a3b8" }}>
          Custom software · Web & mobile apps · UI/UX · Cloud · AI automation
        </div>
      </div>
    ),
    size,
  );
}
