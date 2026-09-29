"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import type { FormConfig, FormField } from "@/content/types";
import { trackEvent } from "@/lib/analytics";
import { submitForm } from "@/lib/submit";

type Values = Record<string, string>;
type Errors = Record<string, string>;
type Status = { state: "idle" | "sending" | "sent" | "error"; message?: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?\d{9,15}$/;
const slug = (s: string) => s.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function validate(field: FormField, raw: string): string {
  const value = raw.trim();
  if (!value) return field.required ? `${field.label} is required.` : "";
  if (field.type === "email" && !EMAIL.test(value)) return "Please enter a valid email address, like name@company.co.ke.";
  if (field.type === "tel" && !PHONE.test(value.replace(/[\s()-]/g, ""))) return "Please enter a valid phone number, like +254 712 345 678.";
  if (value.length > 5000) return "That's a bit long. Please keep it under 5,000 characters.";
  return "";
}

export function SmartForm({
  config,
  accent = "ember",
  prefillFromQuery = false,
  className = "",
}: {
  config: FormConfig;
  accent?: "ember" | "leaf";
  /** Reads ?service= and ?package= from the URL to pre-fill the brief form. */
  prefillFromQuery?: boolean;
  className?: string;
}) {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<Values>(() => Object.fromEntries(config.fields.map((f) => [f.name, ""])));
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>({ state: "idle" });

  useEffect(() => {
    if (!prefillFromQuery) return;
    const q = new URLSearchParams(window.location.search);
    const service = q.get("service");
    const pkg = q.get("package");
    setValues((v) => {
      const next = { ...v };
      const serviceField = config.fields.find((f) => f.name === "service");
      const match = service && serviceField?.options?.find((o) => slug(o) === service);
      if (match) next.service = match;
      if (pkg && "message" in next && !next.message) {
        next.message = `I'm interested in the ${pkg.charAt(0).toUpperCase()}${pkg.slice(1)} package. `;
      }
      return next;
    });
  }, [prefillFromQuery, config.fields]);

  const accentBtn = accent === "leaf" ? "bg-leaf text-leaf-deep hover:bg-gold" : "bg-ember text-night hover:bg-gold";
  const fieldId = (name: string) => `${uid}-${name}`;

  const onChange = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      const field = config.fields.find((f) => f.name === name)!;
      setErrors((e) => ({ ...e, [name]: validate(field, value) }));
    }
  };

  const onBlur = (field: FormField) => {
    if (values[field.name]) setErrors((e) => ({ ...e, [field.name]: validate(field, values[field.name]) }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status.state === "sending") return;

    const nextErrors: Errors = {};
    for (const f of config.fields) {
      const msg = validate(f, values[f.name] ?? "");
      if (msg) nextErrors[f.name] = msg;
    }
    setErrors(nextErrors);
    const firstInvalid = config.fields.find((f) => nextErrors[f.name]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstInvalid.name))}`)?.focus();
      return;
    }

    // Honeypot: bots fill hidden fields, people don't.
    const trap = formRef.current?.querySelector<HTMLInputElement>('input[name="_gotcha"]');
    if (trap?.value) return;

    setStatus({ state: "sending" });
    const trimmed = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]));
    const result = await submitForm(config, trimmed);
    if (result.ok) {
      trackEvent("generate_lead", { form_id: config.id, method: result.via });
      setStatus({
        state: "sent",
        message:
          result.via === "email"
            ? "Your email app should open with your details filled in. Just press send."
            : config.successMessage,
      });
      if (result.via === "endpoint") setValues(Object.fromEntries(config.fields.map((f) => [f.name, ""])));
    } else {
      setStatus({ state: "error", message: result.error });
    }
  };

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} className={className} aria-describedby={`${uid}-req`}>
      <p id={`${uid}-req`} className="mb-5 text-sm text-muted">
        Fields marked <span aria-hidden="true" className="text-ember">*</span>
        <span className="sr-only">with an asterisk</span> are required.
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {config.fields.map((f) => {
          const id = fieldId(f.name);
          const err = errors[f.name];
          const describedBy = [f.hint ? `${id}-hint` : "", err ? `${id}-err` : ""].filter(Boolean).join(" ") || undefined;
          const base =
            "mt-2 block w-full rounded-sm border bg-night px-4 py-3 text-base text-ink placeholder:text-faint focus:outline-none focus:ring-2 " +
            (accent === "leaf" ? "focus:border-leaf focus:ring-leaf/40 " : "focus:border-ember focus:ring-ember/40 ") +
            (err ? "border-red-400" : "border-line");
          const common = {
            id,
            name: f.name,
            required: f.required,
            "aria-invalid": err ? true : undefined,
            "aria-describedby": describedBy,
            value: values[f.name] ?? "",
            onBlur: () => onBlur(f),
          };
          return (
            <div key={f.name} className={f.half ? "" : "sm:col-span-2"}>
              <label htmlFor={id} className="text-sm font-medium text-ink">
                {f.label}
                {f.required && (
                  <span aria-hidden="true" className="ml-1 text-ember">
                    *
                  </span>
                )}
              </label>
              {f.type === "textarea" ? (
                <textarea {...common} rows={5} placeholder={f.placeholder} className={base} onChange={(e) => onChange(f.name, e.target.value)} />
              ) : f.type === "select" ? (
                <select {...common} className={`${base} appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat pr-10`} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%23A69C91' stroke-width='1.6'/%3E%3C/svg%3E\")" }} onChange={(e) => onChange(f.name, e.target.value)}>
                  <option value="">Choose one</option>
                  {f.options?.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...common}
                  type={f.type}
                  inputMode={f.type === "tel" ? "tel" : f.type === "email" ? "email" : undefined}
                  autoComplete={f.autoComplete}
                  placeholder={f.placeholder}
                  className={base}
                  onChange={(e) => onChange(f.name, e.target.value)}
                />
              )}
              {f.hint && (
                <p id={`${id}-hint`} className="mt-1.5 text-sm text-muted">
                  {f.hint}
                </p>
              )}
              {err && (
                <p id={`${id}-err`} className="mt-1.5 text-sm text-red-300">
                  {err}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Leave this empty
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status.state === "sending"}
          className={`inline-flex items-center justify-center rounded-sm px-7 py-3.5 font-semibold transition-colors disabled:opacity-60 ${accentBtn}`}
        >
          {status.state === "sending" ? "Sending…" : config.submitLabel}
        </button>
        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${status.state === "error" ? "text-red-300" : accent === "leaf" ? "text-leaf" : "text-gold"}`}
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
