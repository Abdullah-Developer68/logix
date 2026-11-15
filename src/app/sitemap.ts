import type { MetadataRoute } from "next";

const BASE = "https://logixofficial.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/internships", "/contact", "/privacy", "/terms"];
  // Bump when page content changes; a constant keeps the sitemap static and honest.
  const lastModified = "2026-11-15";
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
