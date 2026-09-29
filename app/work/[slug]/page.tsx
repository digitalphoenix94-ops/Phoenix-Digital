import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { GallerySlots } from "@/components/GallerySlots";
import { StatGrid } from "@/components/StatGrid";
import { WorkCard } from "@/components/WorkGrid";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { pad } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: `${study.client} case study`,
    description: `${study.summary} ${study.disciplines.join(", ")}. By Phoenix Digital, Nairobi.`,
    path: `/work/${study.slug}/`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      <section aria-labelledby="page-title" className="pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="wrap">
          <nav aria-label="Breadcrumb" className="label text-muted">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-ink">Home</Link> <span aria-hidden="true">/</span></li>
              <li><Link href="/work/" className="hover:text-ink">Work</Link> <span aria-hidden="true">/</span></li>
              <li aria-current="page" className="text-ember">{study.client}</li>
            </ol>
          </nav>
          <p className="eyebrow mt-10">{study.inHouse ? "Case study · Phoenix in-house venture" : "Case study"}</p>
          <h1 id="page-title" className="display mt-5 text-[2.5rem] text-ink sm:text-6xl lg:text-7xl">
            {study.client}
          </h1>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Disciplines">
            {study.disciplines.map((d) => (
              <li key={d} className="rounded-sm border border-line bg-surface px-3 py-1.5 text-sm text-ink">
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-lg text-muted sm:text-xl">{study.summary}</p>
        </div>
      </section>

      <section aria-labelledby="results-title" className="border-t border-line py-16 sm:py-20">
        <div className="wrap">
          <h2 id="results-title" className="eyebrow">Results</h2>
          <StatGrid stats={study.results} className="mt-6" />
          {study.resultsNote && <p className="mt-4 text-sm text-muted">{study.resultsNote}</p>}
        </div>
      </section>

      <section aria-label="The brief and the work" className="border-t border-line py-16 sm:py-20">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="eyebrow">The challenge</h2>
            <p className="headline mt-5 text-2xl leading-snug text-ink sm:text-3xl">{study.challenge}</p>
          </div>
          <div className="lg:col-span-7">
            <h2 className="eyebrow">What we did</h2>
            <ol className="mt-5 divide-y divide-line border-y border-line">
              {study.whatWeDid.map((item, i) => (
                <li key={item} className="flex gap-5 py-4">
                  <span className="label pt-1 text-ember">{pad(i + 1)}</span>
                  <span className="text-lg text-ink">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section aria-labelledby="gallery-title" className="border-t border-line py-16 sm:py-20">
        <div className="wrap">
          <h2 id="gallery-title" className="eyebrow">Gallery</h2>
          <div className="mt-6">
            <GallerySlots slots={study.gallery} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Start a similar brief."
        sub={`Tell us what you need. We'll show you how we'd approach it, based on what worked for ${study.client}.`}
        label="Start a similar brief"
      />

      <section aria-labelledby="more-work-title" className="border-t border-line py-16 sm:py-20">
        <div className="wrap">
          <div className="flex items-end justify-between gap-6">
            <h2 id="more-work-title" className="headline text-3xl text-ink">More work</h2>
            <Link href="/work/" className="text-sm font-medium text-ember hover:text-gold">All case studies</Link>
          </div>
          <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((c) => (
              <li key={c.slug}>
                <WorkCard study={c} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
