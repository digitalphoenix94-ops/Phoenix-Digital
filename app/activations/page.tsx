import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Activations } from "@/components/sections/Activations";
import { WorkCard } from "@/components/WorkGrid";
import { Arrow, ButtonLink } from "@/components/ui";
import { activations } from "@/content/activations";
import { getCaseStudy } from "@/content/case-studies";
import type { CaseStudy } from "@/content/types";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Activations & BTL in Kenya",
  description:
    "Brand activations across Kenya and East Africa: malls, county tours, estates, campuses, supermarkets and launches. Sampling, roadshows, caravans, promoter teams and a report after every activation.",
  path: "/activations/",
});

export default function ActivationsPage() {
  const featured = activations.featuredWork.map(getCaseStudy).filter(Boolean) as CaseStudy[];
  return (
    <>
      <PageHero eyebrow={activations.eyebrow} title={activations.title} sub={activations.intro}>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact/?service=activations-btl#brief">
            Plan an activation <Arrow />
          </ButtonLink>
          <ButtonLink href="/work/?filter=activations" variant="secondary">
            Activation case studies
          </ButtonLink>
        </div>
      </PageHero>

      <Activations standalone />

      <section aria-labelledby="featured-title" className="border-t border-line py-20 sm:py-24">
        <div className="wrap">
          <p className="eyebrow">Proof</p>
          <h2 id="featured-title" className="headline mt-4 text-[2rem] text-ink sm:text-5xl">
            Activations we&rsquo;ve run.
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {featured.map((c) => (
              <li key={c.slug}>
                <WorkCard study={c} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Got a site, a crowd or a launch date?" sub="Tell us where and when. We'll scout it, staff it, run it and report on it." label="Plan an activation" href="/contact/?service=activations-btl#brief" />
    </>
  );
}
