// Posts form data to the endpoint configured in environment variables.
// Works with Formspree (https://formspree.io) or any endpoint that accepts a JSON POST.
import { site } from "@/content/site";
import type { FormConfig } from "@/content/types";

const ENDPOINTS: Record<FormConfig["endpoint"], string> = {
  main: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  common: process.env.NEXT_PUBLIC_COMMON_FORM_ENDPOINT || process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",
};

export type SubmitResult = { ok: true; via: "endpoint" | "email" } | { ok: false; error: string };

export async function submitForm(form: FormConfig, values: Record<string, string>): Promise<SubmitResult> {
  const endpoint = ENDPOINTS[form.endpoint];
  const payload = { ...values, form: form.id, _subject: form.subject, page: window.location.pathname };

  if (!endpoint) {
    // No endpoint configured yet: hand over to the visitor's email app so nothing is lost.
    const body = Object.entries(values)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:${site.contact.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    return { ok: true, via: "email" };
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`Status ${res.status}`);
    return { ok: true, via: "endpoint" };
  } catch {
    return {
      ok: false,
      error: `We couldn't send that just now. Please try again, or reach us on WhatsApp or at ${site.contact.email}.`,
    };
  }
}
