import type { MetadataRoute } from "next";

const BASE = "https://logixofficial.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/internships", "/contact", "/privacy", "/terms"];
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
