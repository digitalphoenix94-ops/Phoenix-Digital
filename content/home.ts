// Home page copy: hero, the "What we do" tabs, About and headline stats.
import type { ProofTab, Stat } from "./types";

export const hero = {
  eyebrow: "East Africa · Brands, activations & creators",
  headline: "We build brands and the people behind them.",
  sub: "ATL, BTL activations, experiential, influencer marketing, digital, talent representation and pitch writing. One accountable team, from brief to numbers.",
  primary: { label: "See our work", href: "/work/" },
  secondary: { label: "Let's talk", href: "/contact/" },
};

export const whatWeDo = {
  eyebrow: "What we do",
  title: "Pick a discipline. See the proof.",
  tabs: [
    {
      id: "activations",
      label: "Activations",
      title: "If people pass through it, we can activate it.",
      pitch:
        "Malls, campuses, estates, supermarkets and county tours. We scout the site, build the set, train the team, run the day and send the report.",
      proof: [
        "50+ activations across East Africa",
        "Retail activation across all 34 Lintons Beauty World stores",
        "12,000+ app sign-ups from one campus programme for Sababuu",
      ],
      link: { label: "Explore activations", href: "/activations/" },
    },
    {
      id: "atl",
      label: "ATL & Outdoor",
      title: "Billboards on the routes that matter. Launches people talk about.",
      pitch:
        "Outdoor, launch events and national campaigns planned alongside the ground and digital work, so every channel pushes the same idea.",
      proof: [
        "Nationwide billboard campaign on major routes for Lintons Beauty World",
        "Coca-Cola Christmas Caravan across 30+ counties",
        "KICC Nairobi launch and a Kenya Airways JKIA partnership",
      ],
      link: { label: "See ATL work", href: "/work/?filter=atl" },
    },
    {
      id: "influencer",
      label: "Influencer",
      title: "Vetted creators, briefed properly, measured on outcomes.",
      pitch:
        "We cast from a roster of 200+ vetted creators, write the brief, clear the content and report on what it moved.",
      proof: [
        "200+ vetted creators on call",
        "50+ influencer touchpoints on the Coca-Cola Christmas Caravan",
        "25+ influencers and a +28% sales uplift for Stasoft Kenya",
      ],
      link: { label: "See influencer work", href: "/work/?filter=influencer" },
    },
    {
      id: "talent",
      label: "Talent",
      title: "We represent creators and pitch them to brands.",
      pitch:
        "Pitch, negotiate, contract, brief, concept note, deliver. Brands get one partner. Talent gets deals qualified and rates protected.",
      proof: [
        "A six-step flow from pitch to delivery",
        "One contract and one invoice for brands",
        "Contracts read properly and content made to broadcast standard",
      ],
      link: { label: "Talent management", href: "/talent/" },
    },
    {
      id: "digital",
      label: "Digital",
      title: "Always-on social and e-commerce that ties back to sales.",
      pitch:
        "Organic social, paid social, retargeting, display, YouTube and programmatic, planned with the ground work rather than after it.",
      proof: [
        "3x e-commerce uplift for Lintons Beauty World",
        "Google Display, YouTube and programmatic rich media for Coca-Cola Kenya",
        "Reels and TikTok content for always-on social",
      ],
      link: { label: "See digital work", href: "/work/?filter=digital" },
    },
    {
      id: "the-common",
      label: "The Common",
      title: "Our community platform for Tigoni, Redhill and Riara Ridge.",
      pitch:
        "Monthly sundowners at different local venues and a residents' marketplace, built to bring neighbours together for work, social life, hobbies and welfare.",
      proof: [
        "Monthly, well-curated sundowners around Tigoni",
        "A marketplace for events, workshops, mentoring, jobs and local businesses",
        "Vol. 01: Saturday 7 November 2026, Ridge Cabin Resort",
      ],
      link: { label: "Visit The Common", href: "/the-common/" },
    },
  ] satisfies ProofTab[],
};

export const about = {
  eyebrow: "About Phoenix Digital",
  title: "An integrated agency for growing businesses and the talent that moves them.",
  body: [
    "We plan and run campaigns across ATL, BTL, influencer and digital for brands, SMEs and creators across East Africa. Strategy, production, people on the ground and reporting sit with one team, so nothing gets lost between agencies.",
    "We also represent creators and pitch them to brands, and we write pitches and tenders for businesses going after new work.",
  ],
  founder: {
    name: "Valentine Kariuki",
    role: "Founder & Creative Director",
    bio: "10+ years in brand marketing, FMCG and digital.",
    quote:
      "Every activation starts with one question: what will make the consumer stop, feel something, and act? We live at that intersection.",
    /** Optional portrait under /public, e.g. "/images/team/valentine.webp". */
    photo: null as string | null,
  },
};

/** Credibility numbers. Only use figures you can stand behind. */
export const stats: Stat[] = [
  { value: "50+", label: "Activations across East Africa" },
  { value: "200+", label: "Vetted creators" },
  { value: "12.5M+", label: "Combined campaign reach" },
  { value: "30+", label: "Counties toured" },
  { value: "34", label: "Retail stores activated" },
  { value: "12K+", label: "App sign-ups from one campus programme" },
];
