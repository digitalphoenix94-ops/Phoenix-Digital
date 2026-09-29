import type { Metadata } from "next";
import { site } from "@/content/site";

/** Builds page metadata with a canonical URL and Open Graph/Twitter tags. */
export function pageMetadata({
  title,
  description,
  path,
  image = "/og.png",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_KE",
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  slogan: site.tagline,
  url: site.url,
  logo: `${site.url}/brand/pd-lockup-480.webp`,
  image: `${site.url}/og.png`,
  telephone: site.contact.phoneE164,
  email: site.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.contact.city,
    addressRegion: site.contact.region,
    addressCountry: site.contact.countryCode,
  },
  areaServed: site.contact.areaServed.map((name) => ({ "@type": "Place", name })),
  founder: { "@type": "Person", name: site.contact.person },
  sameAs: site.socials.map((s) => s.url).filter((u) => u && !u.includes("PLACEHOLDER")),
};
