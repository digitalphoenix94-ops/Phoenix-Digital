import Link from "next/link";
import type { ReactNode } from "react";

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

type Variant = "primary" | "secondary" | "leaf" | "text" | "leafText";

const variants: Record<Variant, string> = {
  primary:
    "bg-ember text-night hover:bg-gold px-6 py-3.5 font-semibold",
  secondary:
    "border border-line text-ink hover:border-ember hover:text-ember px-6 py-3.5 font-semibold",
  leaf: "bg-leaf text-leaf-deep hover:bg-gold px-6 py-3.5 font-semibold",
  text: "text-ember hover:text-gold font-medium underline-offset-4 hover:underline",
  leafText: "text-leaf hover:text-gold font-medium underline-offset-4 hover:underline",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
}) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-sm text-[0.95rem] transition-colors ${variants[variant]} ${className}`;
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={cls} onClick={onClick} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 10h11M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
  as: Tag = "h2",
  accent = "ember",
  className = "",
  id,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  sub?: string;
  as?: "h1" | "h2";
  accent?: "ember" | "leaf" | "gold";
  className?: string;
}) {
  const eyebrowColor = accent === "leaf" ? "text-leaf" : accent === "gold" ? "text-gold" : "text-ember";
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
      <Tag
        id={id}
        className={`headline mt-4 text-ink ${Tag === "h1" ? "text-[2.5rem] sm:text-6xl lg:text-7xl" : "text-[2rem] sm:text-5xl"}`}
      >
        {title}
      </Tag>
      {sub ? <p className="mt-5 max-w-2xl text-lg text-muted">{sub}</p> : null}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  labelledBy,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`border-t border-line py-20 sm:py-28 ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/** Numbered list marker, e.g. "01". */
export const pad = (n: number) => String(n).padStart(2, "0");

export function Tick({ className = "text-ember" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="14" height="14" className={`mt-1.5 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
