// Google Analytics 4 helpers. Set NEXT_PUBLIC_GA4_ID to switch tracking on.

export const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID ?? "";

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

/** Send a GA4 event. Safe to call when analytics is off: it does nothing. */
export function trackEvent(name: string, params: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  (window as GtagWindow).gtag?.("event", name, params);
}
