import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/work/", "/activations/", "/talent/", "/the-common/", "/contact/"];
  const lastModified = new Date();
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.8,
    })),
    ...caseStudies.map((c) => ({
      url: `${site.url}/work/${c.slug}/`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
