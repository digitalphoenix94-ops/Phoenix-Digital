import { site } from "@/content/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { Arrow, ButtonLink } from "./ui";

export function CtaBand({
  title = "Ready when you are.",
  sub = "Send the brief and we'll come back with a plan, a team and the numbers we'll hold ourselves to.",
  label = "Start a brief",
  href = site.cta.href,
}: {
  title?: string;
  sub?: string;
  label?: string;
  href?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="border-t border-line bg-ember-deep">
      <div className="wrap flex flex-col gap-8 py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow text-gold">{site.tagline}</p>
          <h2 id="cta-title" className="headline mt-4 text-[2rem] text-ink sm:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted">{sub}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={href}>
            {label} <Arrow />
          </ButtonLink>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
