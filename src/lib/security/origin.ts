const PRODUCTION_HOSTS = new Set([
  "logixofficial.site",
  "www.logixofficial.site",
  "logix-beige.vercel.app",
]);

const VERCEL_PREVIEW_RE = /^logix-[a-z0-9-]+\.vercel\.app$/i;

function isAllowedUrl(url: URL, isDev: boolean): boolean {
  if (isDev && url.protocol === "http:") {
    return url.hostname === "localhost" || url.hostname === "127.0.0.1";
  }

  if (url.protocol !== "https:" || url.port !== "") {
    return false;
  }

  const host = url.hostname.toLowerCase();
  return PRODUCTION_HOSTS.has(host) || VERCEL_PREVIEW_RE.test(host);
}

export function isAllowedOrigin(headers: Headers): boolean {
  const isDev = process.env.NODE_ENV !== "production";

  const originHeader = headers.get("origin")?.trim();
  if (originHeader) {
    if (originHeader === "null") {
      return false;
    }
    try {
      const parsed = new URL(originHeader);
      if (parsed.origin !== originHeader) {
        return false;
      }
      return isAllowedUrl(parsed, isDev);
    } catch {
      return false;
    }
  }

  const refererHeader = headers.get("referer")?.trim();
  if (refererHeader) {
    try {
      const parsed = new URL(refererHeader);
      return isAllowedUrl(parsed, isDev);
    } catch {
      return false;
    }
  }

  return false;
}
