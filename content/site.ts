// Company-wide details: name, contact, navigation, socials and SEO defaults.
import type { Link } from "./types";

export const site = {
  name: "Phoenix Digital",
  legalName: "Phoenix Digital",
  tagline: "Where brands catch fire.",
  secondaryLine: "We don't just execute. We ignite.",
  description:
    "Phoenix Digital is an integrated marketing agency in Nairobi, Kenya. ATL, BTL activations, experiential, influencer marketing, digital, talent representation and pitch writing for brands, SMEs and creators across East Africa.",

  /** Live domain. Set NEXT_PUBLIC_SITE_URL in your host; the fallback is a placeholder. */
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.phoenixdigital.co.ke").replace(/\/$/, ""),

  contact: {
    person: "Valentine Kariuki",
    role: "Founder",
    /** Display format. */
    phone: "+254 712 251 001",
    /** Digits only, international format, used for tel: and WhatsApp links. */
    phoneE164: "+254712251001",
    whatsapp: "254712251001",
    whatsappMessage: "Hi Phoenix Digital, I'd like to talk about a brief.",
    email: "digitalphoenix94@gmail.com",
    city: "Nairobi",
    country: "Kenya",
    countryCode: "KE",
    region: "Nairobi County",
    areaServed: ["Kenya", "Uganda", "Tanzania", "Rwanda", "East Africa"],
  },

  /**
   * PLACEHOLDER social profiles. Replace each `url` with your real profile link.
   * Set `url` to "" to hide a network from the footer.
   */
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/PLACEHOLDER_PHOENIX_DIGITAL" },
    { label: "TikTok", url: "https://www.tiktok.com/@PLACEHOLDER_PHOENIX_DIGITAL" },
    { label: "LinkedIn", url: "https://www.linkedin.com/company/PLACEHOLDER_PHOENIX_DIGITAL" },
  ],

  /** Header navigation, in order. `highlight` renders the link in gold. */
  nav: [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Activations", href: "/activations/" },
    { label: "Talent", href: "/talent/" },
    { label: "The Common", href: "/the-common/", highlight: true },
    { label: "Work", href: "/work/" },
    { label: "Contact", href: "/contact/" },
  ] as (Link & { highlight?: boolean })[],

  cta: { label: "Start a brief", href: "/contact/#brief" } as Link,
};

export const whatsappLink = (message: string = site.contact.whatsappMessage) =>
  `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
