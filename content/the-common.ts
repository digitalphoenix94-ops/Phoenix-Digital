// The Common: Phoenix Digital's community platform for Tigoni, Redhill and Riara Ridge.
// Used by the home page section and the /the-common page.

export const theCommon = {
  name: "The Common",
  areas: ["Tigoni", "Redhill", "Riara Ridge"],
  locality: "Limuru area, Kiambu County",
  by: "A Phoenix Digital community platform",

  why: "To bring the Tigoni, Riara Ridge and Redhill community together and build lasting communities for work, social life, hobbies and welfare.",
  what: "Monthly, well-curated sundowners held at different spots around Tigoni, so every local venue gets patronised. Plus a residents' marketplace for events, workshops, career mentoring for the community's children, jobs and trusted local businesses. Exclusive to this community.",

  pillars: [
    {
      title: "Sundowners",
      body: "A well-curated evening every month, each time at a different spot around Tigoni, so every local venue gets its turn.",
    },
    {
      title: "Communities",
      body: "Lasting circles for work, social life, hobbies and welfare, started by neighbours who met at The Common.",
    },
    {
      title: "The Marketplace",
      body: "Events, workshops, career mentoring for the community's children, jobs and trusted local businesses, in one place.",
    },
    {
      title: "Exclusive by design",
      body: "Built for residents of Tigoni, Redhill and Riara Ridge. Neighbours first, always.",
    },
  ],

  event: {
    series: "The Common Sundowner",
    volume: "Vol. 01",
    /** ISO date-times (East Africa Time, UTC+3). Used for the date block and search-engine event data. */
    start: "2026-11-07T16:00:00+03:00",
    end: "2026-11-07T22:00:00+03:00",
    dateLabel: "Saturday 7 November 2026",
    timeLabel: "4:00 pm – 10:00 pm",
    venue: "Ridge Cabin Resort",
    venueArea: "Tigoni, Limuru",
    programme: [
      { title: "Sundowner on the deck", body: "Settle in as the sun goes down over tea country." },
      { title: "Wine and dine with your neighbours", body: "Good food, good wine and the people who live down the road." },
      { title: "Speed Dating: Neighbours edition", body: "Quick-fire introductions with branded cue cards to get the conversation going." },
      { title: "\"Find a neighbour who…\" mixer", body: "30+ prompts to find the people you have more in common with than you think." },
      { title: "Live DJ", body: "Music from sundown to close." },
      { title: "Local vendor village", body: "Shop from businesses run by and for the community." },
    ],
  },

  /**
   * Prices. Set `showPrices` to true to display them on the site.
   * Amounts are in KES. Leave an amount as null to show "Price on request".
   */
  pricing: {
    showPrices: false,
    currency: "KES",
    ticket: { label: "Sundowner ticket", amount: null as number | null, note: "PLACEHOLDER: add what the ticket includes" },
    vendorSlot: { label: "Vendor slot", amount: null as number | null },
  },

  vendors: {
    title: "Book a vendor slot",
    intro: "Show your business to the neighbours who matter most to it.",
    includes: ["A small tent", "A table", "Two seats", "Permission to bring branded material"],
    categories: ["Flower farms", "Skincare & wellness", "Activewear", "Limuru Golf Club", "Realtors", "Food & drink", "Other"],
  },

  /**
   * Photo slots for the venue and past events. Add files to /public/images/the-common/
   * and set `src`, e.g. "/images/the-common/ridge-cabin-deck.webp".
   */
  gallery: [
    { src: null, alt: "The deck at Ridge Cabin Resort", caption: "Ridge Cabin Resort: the deck" },
    { src: null, alt: "Tea fields around Tigoni at sunset", caption: "Tigoni at sundown" },
    { src: null, alt: "Neighbours at The Common Sundowner", caption: "Vol. 01: neighbours on the deck" },
    { src: null, alt: "Local vendor village stalls", caption: "Vol. 01: vendor village" },
  ] as { src: string | null; alt: string; caption: string }[],
};
