import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { GallerySlots } from "@/components/GallerySlots";
import { JsonLd } from "@/components/JsonLd";
import { CommonBadge } from "@/components/Logo";
import { SmartForm } from "@/components/forms/SmartForm";
import { ButtonLink, Tick, pad } from "@/components/ui";
import { ticketForm, vendorForm, venueForm } from "@/content/forms";
import { site } from "@/content/site";
import { theCommon } from "@/content/the-common";
import { pageMetadata } from "@/lib/seo";
import { formatKES } from "@/components/EventCard";

export const metadata: Metadata = pageMetadata({
  title: "The Common: Tigoni, Redhill & Riara Ridge",
  description:
    "The Common is a community platform for Tigoni, Redhill and Riara Ridge: monthly sundowners at local venues and a residents' marketplace. Vol. 01 is on Saturday 7 November 2026 at Ridge Cabin Resort.",
  path: "/the-common/",
  image: "/og-the-common.png",
});

export default function TheCommonPage() {
  const { event, pricing, vendors } = theCommon;

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: `${event.series}, ${event.volume}`,
    startDate: event.start,
    endDate: event.end,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venue,
      address: { "@type": "PostalAddress", addressLocality: "Tigoni, Limuru", addressRegion: "Kiambu County", addressCountry: "KE" },
    },
    image: [`${site.url}/og-the-common.png`],
    description: theCommon.what,
    organizer: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <div className="bg-[linear-gradient(180deg,#101a0b_0%,#0b0a09_40rem)]">
      <JsonLd data={eventJsonLd} />

      {/* Hero */}
      <section aria-labelledby="page-title" className="pb-16 pt-14 sm:pb-20 sm:pt-20">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-leaf">{theCommon.by}</p>
            <h1 id="page-title" className="display mt-5 text-6xl text-ink sm:text-8xl">
              {theCommon.name}
            </h1>
            <p className="label mt-5 text-base tracking-[0.22em] text-gold">{theCommon.areas.join(" · ")}</p>
            <p className="mt-2 text-sm text-muted">{theCommon.locality}</p>
            <p className="mt-8 max-w-xl text-lg text-muted sm:text-xl">{theCommon.why}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#reserve" variant="leaf">
                Reserve a ticket
              </ButtonLink>
              <ButtonLink href="#vendors" variant="secondary">
                Book a vendor slot
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <CommonBadge priority className="mx-auto h-auto w-60 sm:w-80 lg:w-full lg:max-w-md" />
          </div>
        </div>
      </section>

      {/* What */}
      <section aria-labelledby="what-title" className="border-t border-leaf/25 py-16 sm:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-leaf">What it is</p>
            <h2 id="what-title" className="headline mt-4 text-[2rem] text-ink sm:text-5xl">
              Neighbours first.
            </h2>
          </div>
          <p className="text-lg text-muted lg:col-span-8 lg:text-xl">{theCommon.what}</p>
        </div>
        <div className="wrap">
          <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-leaf/25 bg-leaf/25 sm:grid-cols-2 lg:grid-cols-4">
            {theCommon.pillars.map((p, i) => (
              <li key={p.title} className="bg-night p-6 sm:p-8">
                <span className="label text-leaf">{pad(i + 1)}</span>
                <h3 className="headline mt-3 text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Event */}
      <section id="event" aria-labelledby="event-title" className="border-t border-leaf/25 py-16 sm:py-20">
        <div className="wrap">
          <p className="eyebrow text-leaf">First event</p>
          <h2 id="event-title" className="headline mt-4 text-[2rem] text-ink sm:text-5xl">
            {event.series}, {event.volume}.
          </h2>
          <div className="mt-10">
            <EventCard />
          </div>
        </div>
      </section>

      {/* Forms */}
      <section aria-label="Tickets and vendor slots" className="border-t border-leaf/25 py-16 sm:py-20">
        <div className="wrap grid gap-8 lg:grid-cols-2">
          <div id="reserve" className="rounded-sm border border-line bg-surface p-6 sm:p-10">
            <p className="eyebrow text-leaf">Tickets</p>
            <h2 className="headline mt-3 text-3xl text-ink">Reserve a ticket</h2>
            <p className="mt-3 text-muted">
              {event.dateLabel} · {event.timeLabel} · {event.venue}
            </p>
            {pricing.showPrices && (
              <p className="headline mt-4 text-xl text-gold">
                {pricing.ticket.label}: {formatKES(pricing.ticket.amount)}
              </p>
            )}
            <SmartForm config={ticketForm} accent="leaf" className="mt-8" />
          </div>

          <div id="vendors" className="rounded-sm border border-line bg-surface p-6 sm:p-10">
            <p className="eyebrow text-leaf">Vendors</p>
            <h2 className="headline mt-3 text-3xl text-ink">{vendors.title}</h2>
            <p className="mt-3 text-muted">{vendors.intro}</p>
            <p className="label mt-6 text-muted">Every slot includes</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {vendors.includes.map((v) => (
                <li key={v} className="flex gap-3 text-ink">
                  <Tick className="text-leaf" />
                  {v}
                </li>
              ))}
            </ul>
            {pricing.showPrices && (
              <p className="headline mt-4 text-xl text-gold">
                {pricing.vendorSlot.label}: {formatKES(pricing.vendorSlot.amount)}
              </p>
            )}
            <p className="mt-4 text-sm text-muted">
              We&rsquo;re especially keen on: {vendors.categories.filter((c) => c !== "Other").join(", ")}.
            </p>
            <SmartForm config={vendorForm} accent="leaf" className="mt-8" />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section aria-labelledby="gallery-title" className="border-t border-leaf/25 py-16 sm:py-20">
        <div className="wrap">
          <p className="eyebrow text-leaf">Gallery</p>
          <h2 id="gallery-title" className="headline mt-4 text-[2rem] text-ink sm:text-5xl">
            The venue and the evenings.
          </h2>
          <div className="mt-10">
            <GallerySlots slots={theCommon.gallery} accent="leaf" />
          </div>
        </div>
      </section>

      {/* Suggest a venue */}
      <section aria-labelledby="venue-title" className="border-t border-leaf/25 py-16 sm:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-leaf">Residents</p>
            <h2 id="venue-title" className="headline mt-4 text-[2rem] text-ink sm:text-5xl">
              Suggest the next venue.
            </h2>
            <p className="mt-4 text-lg text-muted">
              Every sundowner moves to a different spot around Tigoni. Know a place that should host the next one?
            </p>
          </div>
          <div className="rounded-sm border border-leaf/30 bg-leaf-deep p-6 sm:p-10 lg:col-span-7">
            <SmartForm config={venueForm} accent="leaf" />
          </div>
        </div>
      </section>
    </div>
  );
}
