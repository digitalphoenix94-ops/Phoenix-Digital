import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Talent } from "@/components/sections/Talent";
import { Arrow, ButtonLink } from "@/components/ui";
import { talent } from "@/content/talent";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Talent management & representation",
  description:
    "Phoenix Digital manages creators and pitches them to brands in Kenya and East Africa: pitch, negotiate, contract, brief, concept note, deliver. One contract and one invoice for brands; protected rates for talent.",
  path: "/talent/",
});

export default function TalentPage() {
  return (
    <>
      <PageHero eyebrow={talent.eyebrow} title={talent.title} sub={talent.intro}>
        <p className="label mt-6 text-gold">200+ vetted creators · One contract · One invoice</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact/?service=talent-representation#brief">
            Cast talent for a brief <Arrow />
          </ButtonLink>
          <ButtonLink href="/contact/?service=talent-representation#brief" variant="secondary">
            I&rsquo;m a creator
          </ButtonLink>
        </div>
      </PageHero>

      <Talent standalone />

      <CtaBand title="Brand or creator, start here." sub="Tell us who you are and what you need. We'll come back with the right people and a clear next step." label="Get in touch" href="/contact/?service=talent-representation#brief" />
    </>
  );
}
