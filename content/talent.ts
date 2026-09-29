// Talent management & representation: home section and /talent page.

export const talent = {
  eyebrow: "Talent management & representation",
  title: "We manage creators and pitch them to brands. Then we handle everything, end to end.",
  intro:
    "Brands get the right people without chasing ten inboxes. Creators get a team that finds the work, protects the rate and makes sure the content lands.",

  flow: [
    { title: "Pitch", body: "We match talent to the brief and pitch them to the brand, or the brand to the talent." },
    { title: "Negotiate", body: "Fees, usage, exclusivity and timelines agreed up front." },
    { title: "Contract", body: "One clear contract, read line by line before anyone signs." },
    { title: "Brief", body: "A tight brief: the message, the must-haves, the no-go areas and the deadlines." },
    { title: "Concept note", body: "The creator's idea on paper, approved by the brand before a camera rolls." },
    { title: "Deliver", body: "Content produced, cleared, posted on schedule and reported on." },
  ],

  forBrands: {
    title: "For brands",
    points: [
      "One contract, one invoice",
      "One partner for casting, clearance, production and reporting",
      "Creators briefed properly and held to the schedule",
      "Results reported in one place",
    ],
  },
  forTalent: {
    title: "For talent",
    points: [
      "Deals qualified before they reach you",
      "Rates protected",
      "Contracts read properly",
      "Content made to broadcast standard",
    ],
  },

  /**
   * Representation models.
   * REVIEW: bullets and "best for" lines should match the portfolio deck word for word.
   */
  models: [
    {
      name: "Deal-by-Deal",
      basis: "Commission only",
      points: [
        "We pitch you for specific brand deals as they come in",
        "Commission only on deals we close",
        "Negotiation, contract and invoicing handled for each deal",
        "No exclusivity: keep your existing relationships",
      ],
      bestFor: "Creators who want occasional brand work without a long-term commitment.",
    },
    {
      name: "Managed Talent",
      basis: "Exclusive, full roster",
      points: [
        "Exclusive representation with a dedicated manager",
        "Proactive pitching to brands across our client roster",
        "Rate card, media kit and brand positioning",
        "Content planning, production support and reporting",
      ],
      bestFor: "Creators building a full-time career who want one team behind them.",
      featured: true,
    },
    {
      name: "Production Only",
      basis: "Project-based",
      points: [
        "We produce content for deals you have already signed",
        "Concept notes, shoot planning and on-set direction",
        "Broadcast-standard edit and delivery",
        "Scoped and quoted per project",
      ],
      bestFor: "Talent or brands who already have the deal and need it executed well.",
    },
  ],
};
