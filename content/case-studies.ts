// Case studies. Each entry becomes a page at /work/<slug>.
// To add one: copy an entry, give it a new unique slug, fill it in, and rebuild.
// Only use real, verified numbers in `results`.
//
// Gallery: put photos in /public/images/work/<slug>/ and set `src` to e.g. "/images/work/<slug>/1.webp".
// Slots with `src: null` show a labelled placeholder until a photo is added.
import type { CaseStudy, WorkCategory } from "./types";

export const workIntro = {
  eyebrow: "Selected work",
  title: "Campaigns we ran, and what they moved.",
  sub: "ATL, activations, influencer and digital for some of East Africa's best-known brands.",
};

export const workFilters: { id: "all" | WorkCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "activations", label: "Activations" },
  { id: "atl", label: "ATL & Outdoor" },
  { id: "influencer", label: "Influencer" },
  { id: "digital", label: "Digital" },
];

const slots = (captions: string[], client: string) =>
  captions.map((caption) => ({ src: null, alt: `${client}: ${caption}`, caption }));

export const caseStudies: CaseStudy[] = [
  {
    slug: "lintons-beauty-world",
    client: "Lintons Beauty World",
    summary:
      "Billboards, three brand launches, new stores and a retail activation across all 34 stores, backed by always-on social and e-commerce.",
    disciplines: ["Digital & E-Commerce", "ATL Outdoor", "Influencer", "Store Openings"],
    categories: ["digital", "atl", "influencer", "activations"],
    challenge:
      "Lintons needed to launch new brands, open new stores outside Nairobi and grow online sales at the same time, with every channel pulling in the same direction.",
    whatWeDid: [
      "Nationwide billboard campaign on major routes.",
      "Launches for Kalahari, Bio Balance and Elizabeth Arden.",
      "New store openings in Nanyuki, Meru and Ruiru.",
      "Retail activation across all 34 stores.",
      "Influencer day-one visits in three towns.",
      "In-store branding and POS.",
      "Always-on social, paid social with e-commerce retargeting, and Reels and TikTok content.",
    ],
    results: [
      { value: "34", label: "Stores activated" },
      { value: "3", label: "Brand launches" },
      { value: "40+", label: "Influencers" },
      { value: "3x", label: "E-commerce uplift" },
    ],
    gallery: slots(
      ["Billboard on a major route", "Brand launch event", "New store opening", "In-store branding and POS", "Influencer day-one visit", "Social content"],
      "Lintons Beauty World",
    ),
  },
  {
    slug: "coca-cola-kenya",
    client: "Coca-Cola Kenya",
    summary:
      "The Christmas Caravan across 30+ counties, a KICC launch and a Kenya Airways partnership, with a full digital layer at every stop.",
    disciplines: ["ATL + BTL", "Digital", "Programmatic"],
    categories: ["atl", "activations", "digital", "influencer"],
    challenge:
      "Take Coca-Cola's Christmas campaign beyond Nairobi and make it felt county by county, on the ground and online at the same time.",
    whatWeDid: [
      "Christmas Caravan across 30+ counties.",
      "Launch at KICC, Nairobi.",
      "Kenya Airways partnership at JKIA.",
      "Coke with Meals activations.",
      "Full digital layer: Google Display, YouTube and programmatic rich media.",
      "Influencers at every county stop.",
    ],
    results: [
      { value: "30+", label: "Counties" },
      { value: "50+", label: "Influencer touchpoints" },
      { value: "5M+", label: "Reach" },
    ],
    gallery: slots(
      ["Christmas Caravan on the road", "KICC Nairobi launch", "Kenya Airways JKIA activation", "Coke with Meals activation", "Influencer at a county stop", "Digital creative"],
      "Coca-Cola Kenya",
    ),
  },
  {
    slug: "naivas-kikapu-kibonge",
    client: "Naivas: Kikapu Kibonge",
    summary: "Concept, visual identity, influencer roster, launch event and trained promoter teams nationwide.",
    disciplines: ["Influencer", "Creative Direction", "Launch", "In-store BTL"],
    categories: ["influencer", "activations"],
    challenge:
      "Naivas needed Kikapu Kibonge to feel like a moment, not just a promotion: an idea shoppers would recognise, talk about and come into store for.",
    whatWeDid: [
      "Campaign concept and visual identity.",
      "Influencer roster selection and management.",
      "Launch event.",
      "Trained promoter teams in stores nationwide.",
    ],
    results: [
      { value: "Footfall", label: "Up in store" },
      { value: "Basket", label: "Size up" },
      { value: "National", label: "Reach" },
      { value: "Viral", label: "User-generated content" },
    ],
    gallery: slots(
      ["Kikapu Kibonge visual identity", "Launch event", "Promoter team in store", "Influencer content"],
      "Naivas",
    ),
  },
  {
    slug: "miss-universe-kenya",
    client: "Miss Universe Kenya",
    summary: "A nationwide registration campaign: on-ground drives plus digital, measured from awareness to sign-up.",
    disciplines: ["Nationwide Activation", "Registration Campaign"],
    categories: ["activations", "digital"],
    challenge: "Get applicants from across the country, not just Nairobi, and track every step from first hearing about it to signing up.",
    whatWeDid: [
      "On-ground registration drives.",
      "Digital amplification.",
      "Measurement from awareness to sign-up.",
    ],
    results: [{ value: "1,200+", label: "Applicants" }],
    gallery: slots(["Registration drive", "Applicants signing up", "Digital campaign creative"], "Miss Universe Kenya"),
  },
  {
    slug: "sababuu",
    client: "Sababuu",
    summary: "Roadshows, demo booths and ambassador outreach across 7 universities for a Phoenix in-house venture.",
    disciplines: ["Campus BTL", "Phoenix in-house venture"],
    categories: ["activations"],
    inHouse: true,
    challenge: "Launch a new app to university students and turn campus attention into real subscribers.",
    whatWeDid: [
      "Campus roadshows.",
      "Demo booths.",
      "Student ambassador outreach across 7 universities.",
    ],
    results: [
      { value: "12,000+", label: "New app subscribers" },
      { value: "7", label: "Universities" },
    ],
    gallery: slots(["Campus roadshow", "Demo booth", "Student ambassadors"], "Sababuu"),
  },
  {
    slug: "stasoft-kenya",
    client: "Stasoft Kenya",
    summary:
      "A lifestyle influencer programme plus sensory stations, live demos and sampling in 18 supermarkets.",
    disciplines: ["Influencer", "Retail Experiential", "Sampling"],
    categories: ["influencer", "activations"],
    challenge: "Get shoppers to experience the product for themselves, and give them a reason to pick it up again.",
    whatWeDid: [
      "Lifestyle influencer programme.",
      "Sensory stations in store.",
      "Live demos.",
      "Take-home sampling in 18 Nairobi and upcountry supermarkets.",
    ],
    results: [
      { value: "25+", label: "Influencers" },
      { value: "35K+", label: "Shoppers reached" },
      { value: "+28%", label: "Sales uplift" },
      { value: "18", label: "Supermarkets" },
    ],
    gallery: slots(["Sensory station", "Live demo", "Take-home sampling", "Influencer content"], "Stasoft Kenya"),
  },
  {
    slug: "zuri-gas",
    client: "Zuri Gas",
    summary: "A retained 8-creator programme across lifestyle, food, family and comedy, including a 7-episode docuseries.",
    disciplines: ["Retained Influencer Programme"],
    categories: ["influencer"],
    challenge: "Keep Zuri Gas in people's feeds every month with content that feels natural, not like a string of one-off ads.",
    whatWeDid: [
      "8-creator roster across lifestyle, food, family and comedy.",
      "Monthly content calendars built on five brand pillars.",
      "A 7-episode team docuseries.",
    ],
    results: [
      { value: "8", label: "Creators on the roster" },
      { value: "5", label: "Brand pillars" },
      { value: "7", label: "Docuseries episodes" },
    ],
    gallery: slots(["Creator content", "Docuseries still", "Monthly calendar highlights"], "Zuri Gas"),
  },
];

/** Client names shown in the row under the work grid. (Sababuu is left out: it is a Phoenix in-house venture.) */
export const clients = [
  "Lintons Beauty World",
  "Coca-Cola Kenya",
  "Naivas",
  "Miss Universe Kenya",
  "Stasoft Kenya",
  "Zuri Gas",
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
