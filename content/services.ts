// The nine services shown on the home page. Order here is the order on the page.
import type { Service } from "./types";

export const servicesIntro = {
  eyebrow: "Services",
  title: "Nine ways we move a brand.",
  sub: "Use one, or run them together under one team and one report.",
};

export const services: Service[] = [
  {
    id: "activations",
    title: "Activations & BTL",
    summary:
      "Sampling, demos, roadshows, pop-ups and promoter teams in malls, campuses, estates, supermarkets and towns. Planned, permitted, staffed and reported.",
    link: { label: "Activations", href: "/activations/" },
  },
  {
    id: "atl",
    title: "ATL & Outdoor",
    summary:
      "Billboards on major routes, national campaigns and launch moments, planned to work with what happens on the ground and online.",
    link: { label: "ATL work", href: "/work/?filter=atl" },
  },
  {
    id: "influencer",
    title: "Influencer Marketing",
    summary:
      "Casting from 200+ vetted creators, briefs, content clearance, posting calendars and reporting on reach and results.",
    link: { label: "Influencer work", href: "/work/?filter=influencer" },
  },
  {
    id: "talent",
    title: "Talent Representation",
    summary:
      "We manage creators and pitch them to brands, then handle negotiation, contracts, briefs, concept notes and delivery.",
    link: { label: "Talent", href: "/talent/" },
  },
  {
    id: "retail",
    title: "Retail & Shopper",
    summary:
      "In-store branding, POS, sensory stations, live demos and trained promoters that move shoppers at the shelf.",
    link: { label: "Stasoft case study", href: "/work/stasoft-kenya/" },
  },
  {
    id: "launches",
    title: "Brand Launches",
    summary:
      "Product and store launches: concept, venue, guest list, influencers on day one and the content that keeps it going.",
    link: { label: "Lintons case study", href: "/work/lintons-beauty-world/" },
  },
  {
    id: "pitch-writing",
    title: "Pitch Writing",
    summary: "Pitch decks and tender responses written to win, for agencies, SMEs and creators.",
    details: [
      "Standard pitch in 7 working days",
      "Tenders scoped to the deadline",
      "Rush turnaround available",
    ],
    link: { label: "Request a pitch", href: "/contact/?service=pitch-writing#brief" },
  },
  {
    id: "digital",
    title: "Digital & E-Commerce",
    summary:
      "Always-on social, paid social, retargeting, display, YouTube and programmatic, with e-commerce tracked through to sales.",
    link: { label: "Digital work", href: "/work/?filter=digital" },
  },
  {
    id: "the-common",
    title: "The Common",
    summary:
      "Our community platform for Tigoni, Redhill and Riara Ridge: monthly sundowners and a residents' marketplace.",
    link: { label: "The Common", href: "/the-common/" },
  },
];
