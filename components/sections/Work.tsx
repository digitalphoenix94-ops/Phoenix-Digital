import { workIntro } from "@/content/case-studies";
import { ClientRow } from "../ClientRow";
import { WorkGrid } from "../WorkGrid";
import { Arrow, ButtonLink, Section, SectionHeader } from "../ui";

export function Work() {
  return (
    <Section id="work" labelledBy="work-title">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeader id="work-title" eyebrow={workIntro.eyebrow} title={workIntro.title} sub={workIntro.sub} />
        <ButtonLink href="/work/" variant="secondary" className="shrink-0 self-start sm:self-end">
          All work <Arrow />
        </ButtonLink>
      </div>
      <div className="mt-12">
        <WorkGrid />
      </div>
      <ClientRow className="mt-16" />
    </Section>
  );
}
