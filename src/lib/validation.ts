export const EMAIL_RE =
  /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[^\s@<>()[\]\\,;:"]{2,}$/;

export const APPLY_MAX_LEN = {
  name: 120,
  email: 254,
  phone: 40,
  role: 120,
  note: 4000,
} as const;

export const CONTACT_MAX_LEN = {
  name: 120,
  email: 254,
  company: 120,
  details: 4000,
} as const;

export const CONTACT_MIN_DETAILS_LEN = 10;

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Strip control characters (incl. CR/LF) from single-line fields. */
export function singleLine(value: string): string {
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim();
}

/** Strip control characters except newlines and tabs from multi-line fields. */
export function multiLine(value: string): string {
  return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim();
}

export function field(formData: FormData, key: string): string {
  const v = formData.get(key);
  return typeof v === "string" ? v.trim() : "";
}

export function parseContentLength(headers: Headers): number | null {
  const raw = headers.get("content-length")?.trim();
  if (raw && /^\d+$/.test(raw)) {
    return Number.parseInt(raw, 10);
  }
  return null;
}
