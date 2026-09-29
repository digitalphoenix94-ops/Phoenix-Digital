import { theCommon } from "@/content/the-common";
import { EventCard } from "../EventCard";
import { CommonBadge } from "../Logo";
import { Arrow, ButtonLink, pad } from "../ui";

/** The Common section on the home page. */
export function TheCommonSection() {
  return (
    <section
      id="the-common"
      aria-labelledby="the-common-title"
      className="border-t border-leaf/30 bg-[linear-gradient(180deg,#101a0b_0%,#0b0a09_70%)] py-20 sm:py-28"
    >
      <div className="wrap">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow text-leaf">{theCommon.by}</p>
            <h2 id="the-common-title" className="display mt-4 text-5xl text-ink sm:text-7xl">
              {theCommon.name}
            </h2>
            <p className="label mt-4 text-gold">{theCommon.areas.join(" · ")}</p>
            <p className="mt-6 max-w-2xl text-lg text-muted">{theCommon.why}</p>
          </div>
          <div className="lg:col-span-4">
            <CommonBadge className="h-auto w-40 sm:w-56 lg:ml-auto lg:w-64" />
          </div>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-leaf/25 bg-leaf/25 sm:grid-cols-2 lg:grid-cols-4">
          {theCommon.pillars.map((p, i) => (
            <li key={p.title} className="bg-night p-6">
              <span className="label text-leaf">{pad(i + 1)}</span>
              <h3 className="headline mt-3 text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.body}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <EventCard compact />
        </div>

        <div className="mt-8">
          <ButtonLink href="/the-common/" variant="leafText">
            Everything about The Common <Arrow />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
