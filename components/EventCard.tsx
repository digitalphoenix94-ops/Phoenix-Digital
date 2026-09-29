import { theCommon } from "@/content/the-common";
import { ButtonLink } from "./ui";

const EAT = "Africa/Nairobi";

export function formatKES(amount: number | null) {
  if (amount == null) return "Price on request";
  return `KES ${amount.toLocaleString("en-KE")}`;
}

/** The Common event card: date block, details and programme. */
export function EventCard({ compact = false, headingLevel = "h3" }: { compact?: boolean; headingLevel?: "h2" | "h3" }) {
  const { event, pricing } = theCommon;
  const start = new Date(event.start);
  const day = start.toLocaleDateString("en-GB", { weekday: "short", timeZone: EAT });
  const date = start.toLocaleDateString("en-GB", { day: "2-digit", timeZone: EAT });
  const month = start.toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: EAT });
  const Heading = headingLevel;

  return (
    <article className="overflow-hidden rounded-sm border border-leaf/30 bg-leaf-deep">
      <div className="grid sm:grid-cols-[9rem_1fr]">
        <div className="flex items-center gap-4 border-b border-leaf/30 bg-leaf p-5 text-leaf-deep sm:flex-col sm:justify-center sm:gap-0 sm:border-b-0 sm:border-r sm:p-6 sm:text-center">
          <span className="label font-semibold">{day}</span>
          <span className="display text-5xl sm:text-6xl">{date}</span>
          <span className="label font-semibold">{month}</span>
        </div>
        <div className="p-6 sm:p-8">
          <p className="label text-gold">
            {event.series} · {event.volume}
          </p>
          <Heading className="headline mt-3 text-2xl text-ink sm:text-3xl">
            {event.dateLabel}, {event.venue}
          </Heading>
          <dl className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
            <div>
              <dt className="label text-muted">Time</dt>
              <dd className="text-ink">{event.timeLabel}</dd>
            </div>
            <div>
              <dt className="label text-muted">Venue</dt>
              <dd className="text-ink">
                {event.venue}, {event.venueArea}
              </dd>
            </div>
            {pricing.showPrices && (
              <>
                <div>
                  <dt className="label text-muted">{pricing.ticket.label}</dt>
                  <dd className="text-ink">{formatKES(pricing.ticket.amount)}</dd>
                </div>
                <div>
                  <dt className="label text-muted">{pricing.vendorSlot.label}</dt>
                  <dd className="text-ink">{formatKES(pricing.vendorSlot.amount)}</dd>
                </div>
              </>
            )}
          </dl>

          {!compact && (
            <>
              <p className="label mt-8 text-leaf">Programme</p>
              <ul className="mt-3 divide-y divide-leaf/20 border-y border-leaf/20">
                {event.programme.map((p) => (
                  <li key={p.title} className="grid gap-1 py-3 sm:grid-cols-[16rem_1fr] sm:gap-6">
                    <span className="font-semibold text-ink">{p.title}</span>
                    <span className="text-sm text-muted">{p.body}</span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/the-common/#reserve" variant="leaf">
              Reserve a ticket
            </ButtonLink>
            <ButtonLink href="/the-common/#vendors" variant="secondary">
              Book a vendor slot
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}
