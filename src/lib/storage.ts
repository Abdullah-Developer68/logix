import "server-only";
import { randomUUID } from "node:crypto";

const STORAGE_BUCKET = "resumes";
const STORAGE_TIMEOUT_MS = 15_000;

function getStorageConfig(): { url: string; secretKey: string } {
  const url = process.env.SUPABASE_URL?.trim().replace(/\/+$/, "");
  const secretKey = process.env.SUPABASE_SECRET_KEY?.trim();

  if (!url || !secretKey) {
    throw new Error("Supabase Storage credentials are not configured.");
  }

  return { url, secretKey };
}

function encodeObjectPath(objectPath: string): string {
  return objectPath
    .replace(/^\/+/, "")
    .split("/")
    .filter(Boolean)
    .map(encodeURIComponent)
    .join("/");
}

export async function uploadResume(
  buffer: Buffer,
  mimeType: string,
  ext: string,
): Promise<string> {
  const { url, secretKey } = getStorageConfig();

  const now = new Date();
  const year = String(now.getUTCFullYear());
  const month = String(now.getUTCMonth() + 1).padStart(2, "0");
  const safeExt = ext.replace(/[^a-z0-9]/gi, "").toLowerCase();
  if (!safeExt) {
    throw new Error("Invalid resume file extension.");
  }

  const objectPath = `applications/${year}/${month}/${randomUUID()}.${safeExt}`;
  const endpoint = `${url}/storage/v1/object/${STORAGE_BUCKET}/${encodeObjectPath(objectPath)}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      apikey: secretKey,
      "Content-Type": mimeType,
      "x-upsert": "false",
    },
    body: new Uint8Array(buffer),
    signal: AbortSignal.timeout(STORAGE_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Storage upload failed with status ${response.status}.`);
  }

  return objectPath;
}

export async function deleteResume(objectPath: string): Promise<void> {
  const { url, secretKey } = getStorageConfig();
  const encodedPath = encodeObjectPath(objectPath);
  if (!encodedPath) {
    throw new Error("Invalid storage object path.");
  }

  const endpoint = `${url}/storage/v1/object/${STORAGE_BUCKET}/${encodedPath}`;
  const response = await fetch(endpoint, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      apikey: secretKey,
    },
    signal: AbortSignal.timeout(STORAGE_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Storage delete failed with status ${response.status}.`);
  }
}
