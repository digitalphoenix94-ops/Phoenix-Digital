import type { Metadata } from "next";
import { ClientRow } from "@/components/ClientRow";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { StatGrid } from "@/components/StatGrid";
import { WorkGrid } from "@/components/WorkGrid";
import { workIntro } from "@/content/case-studies";
import { stats } from "@/content/home";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies from Phoenix Digital: Lintons Beauty World, Coca-Cola Kenya, Naivas, Miss Universe Kenya, Stasoft Kenya, Zuri Gas and Sababuu. Activations, ATL, influencer and digital across East Africa.",
  path: "/work/",
});

export default function WorkPage() {
  return (
    <>
      <PageHero eyebrow={workIntro.eyebrow} title={workIntro.title} sub={workIntro.sub} />
      <section aria-label="Case studies" className="border-t border-line py-16 sm:py-20">
        <div className="wrap">
          <WorkGrid headingLevel="h2" />
          <ClientRow className="mt-16" />
        </div>
      </section>
      <section aria-label="Headline numbers" className="border-t border-line py-16 sm:py-20">
        <div className="wrap">
          <StatGrid stats={stats} />
        </div>
      </section>
      <CtaBand title="Want numbers like these?" />
    </>
  );
}
