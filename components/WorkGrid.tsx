"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { caseStudies, workFilters } from "@/content/case-studies";
import type { CaseStudy, WorkCategory } from "@/content/types";
import { Arrow } from "./ui";

type FilterId = "all" | WorkCategory;

export function WorkCard({ study, headingLevel = "h3" }: { study: CaseStudy; headingLevel?: "h2" | "h3" }) {
  const lead = study.results[0];
  const Heading = headingLevel;
  return (
    <Link
      href={`/work/${study.slug}/`}
      className="group flex h-full flex-col rounded-sm border border-line bg-surface p-6 transition-colors hover:border-ember sm:p-8"
    >
      <p className="label text-muted">{study.disciplines.slice(0, 3).join(" · ")}</p>
      <Heading className="headline mt-4 text-2xl text-ink sm:text-3xl">{study.client}</Heading>
      {lead && (
        <p className="mt-6">
          <span className={`display block text-ember ${/\d/.test(lead.value) ? "text-5xl" : "text-4xl"}`}>{lead.value}</span>
          <span className="mt-1 block text-sm text-muted">{lead.label}</span>
        </p>
      )}
      <p className="mt-6 text-muted">{study.summary}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-ember group-hover:text-gold">
        Read the case study <Arrow />
      </span>
    </Link>
  );
}

export function WorkGrid({ headingLevel = "h3" }: { headingLevel?: "h2" | "h3" }) {
  const [filter, setFilter] = useState<FilterId>("all");

  // Allow deep links such as /work/?filter=influencer
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("filter");
    if (q && workFilters.some((f) => f.id === q)) setFilter(q as FilterId);
  }, []);

  const choose = (id: FilterId) => {
    setFilter(id);
    const url = new URL(window.location.href);
    if (id === "all") url.searchParams.delete("filter");
    else url.searchParams.set("filter", id);
    window.history.replaceState(null, "", url);
  };

  const shown = filter === "all" ? caseStudies : caseStudies.filter((c) => c.categories.includes(filter));

  return (
    <div>
      <div role="group" aria-label="Filter case studies" className="flex flex-wrap gap-2">
        {workFilters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={filter === f.id}
            onClick={() => choose(f.id)}
            className={`rounded-sm border px-4 py-2 text-sm transition-colors ${
              filter === f.id ? "border-ember bg-ember text-night" : "border-line text-muted hover:border-ember hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {shown.length} case {shown.length === 1 ? "study" : "studies"}
      </p>
      <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => (
          <li key={c.slug}>
            <WorkCard study={c} headingLevel={headingLevel} />
          </li>
        ))}
      </ul>
    </div>
  );
}
