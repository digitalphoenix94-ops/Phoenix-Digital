import Link from "next/link";
import { services, servicesIntro } from "@/content/services";
import { Arrow, Section, SectionHeader, pad } from "../ui";

export function Services() {
  return (
    <Section id="services" labelledBy="services-title">
      <SectionHeader id="services-title" eyebrow={servicesIntro.eyebrow} title={servicesIntro.title} sub={servicesIntro.sub} />
      <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const common = s.id === "the-common";
          return (
            <li key={s.id} className={`flex flex-col p-6 sm:p-8 ${common ? "bg-leaf-deep" : "bg-night"}`}>
              <span className={`label ${common ? "text-leaf" : "text-ember"}`}>{pad(i + 1)}</span>
              <h3 className={`headline mt-4 text-2xl ${common ? "text-leaf" : "text-ink"}`}>{s.title}</h3>
              <p className="mt-3 text-muted">{s.summary}</p>
              {s.details && (
                <ul className="mt-4 space-y-1.5 text-sm text-ink">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span aria-hidden="true" className="text-gold">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
              )}
              {s.link && (
                <Link
                  href={s.link.href}
                  className={`mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium ${
                    common ? "text-leaf hover:text-gold" : "text-ember hover:text-gold"
                  }`}
                >
                  {s.link.label}
                  <span className="sr-only">: {s.title}</span>
                  <Arrow />
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
