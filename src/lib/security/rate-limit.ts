const DEFAULT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const DEFAULT_MAX_REQUESTS = 5;
const MAX_TRACKED_KEYS = 2000;

// Persist across hot-reloads in dev while remaining isolated per serverless instance.
const globalForRateLimit = globalThis as typeof globalThis & {
  __logixRateLimitStore?: Map<string, number[]>;
};

const store =
  globalForRateLimit.__logixRateLimitStore ??
  (globalForRateLimit.__logixRateLimitStore = new Map<string, number[]>());

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

export function getClientIp(headers: Headers): string {
  const forwardedFor = headers.get("x-forwarded-for");
  if (forwardedFor) {
    const first = forwardedFor.split(",")[0]?.trim();
    if (first) {
      return first;
    }
  }

  const realIp = headers.get("x-real-ip")?.trim();
  if (realIp) {
    return realIp;
  }

  return "unknown";
}

function pruneExpiredEntries(now: number, windowMs: number): void {
  const cutoff = now - windowMs;
  for (const [key, timestamps] of store.entries()) {
    const active = timestamps.filter((ts) => ts > cutoff);
    if (active.length === 0) {
      store.delete(key);
    } else if (active.length !== timestamps.length) {
      store.set(key, active);
    }
  }
}

export function checkRateLimit(
  key: string,
  options?: { windowMs?: number; maxRequests?: number },
): RateLimitResult {
  const windowMs = options?.windowMs ?? DEFAULT_WINDOW_MS;
  const maxRequests = options?.maxRequests ?? DEFAULT_MAX_REQUESTS;
  const now = Date.now();
  const cutoff = now - windowMs;

  if (store.size >= MAX_TRACKED_KEYS) {
    pruneExpiredEntries(now, windowMs);
    // If still at capacity, evict the oldest inserted key to bound memory.
    if (store.size >= MAX_TRACKED_KEYS) {
      const oldestKey = store.keys().next().value;
      if (oldestKey !== undefined) {
        store.delete(oldestKey);
      }
    }
  }

  const existing = store.get(key) ?? [];
  const active = existing.filter((ts) => ts > cutoff);

  if (active.length >= maxRequests) {
    store.set(key, active);
    const oldestInWindow = active[0];
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((oldestInWindow + windowMs - now) / 1000),
    );
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds,
    };
  }

  active.push(now);
  store.set(key, active);

  return {
    allowed: true,
    remaining: Math.max(0, maxRequests - active.length),
    retryAfterSeconds: 0,
  };
}
