import { activations } from "@/content/activations";
import { Arrow, ButtonLink, Section, SectionHeader, pad } from "../ui";

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {items.map((v) => (
        <li key={v} className="rounded-sm border border-line bg-surface px-3 py-1.5 text-sm text-ink">
          {v}
        </li>
      ))}
    </ul>
  );
}

/** Activations content. `standalone` hides the section header (the page renders its own hero). */
export function Activations({ standalone = false }: { standalone?: boolean }) {
  const StepsHeading = standalone ? "h2" : "h3";
  return (
    <Section id="activations" labelledBy={standalone ? "activations-steps" : "activations-title"}>
      {!standalone && (
        <SectionHeader id="activations-title" eyebrow={activations.eyebrow} title={activations.title} sub={activations.intro} />
      )}

      <StepsHeading id="activations-steps" className={`label text-muted ${standalone ? "" : "mt-14"}`}>
        How an activation runs
      </StepsHeading>
      <ol className="mt-5 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
        {activations.steps.map((s, i) => (
          <li key={s.title} className="bg-night p-6">
            <span className="label text-ember">{pad(i + 1)}</span>
            <p className="headline mt-3 text-xl text-ink">{s.title}</p>
            <p className="mt-2 text-sm text-muted">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="headline text-2xl text-ink">Where we activate</h3>
          <Chips items={activations.venues} />
        </div>
        <div>
          <h3 className="headline text-2xl text-ink">Formats</h3>
          <Chips items={activations.formats} />
        </div>
      </div>

      <div className="mt-14 rounded-sm border border-ember/30 bg-ember-deep p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <h3 className="headline text-2xl text-ink sm:text-3xl">{activations.report.title}</h3>
            <p className="mt-3 text-muted">{activations.report.sub}</p>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 lg:col-span-7">
            {activations.report.metrics.map((m) => (
              <li key={m} className="border-t border-ember/30 pt-3 font-mono text-sm uppercase tracking-wider text-gold">
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {!standalone && (
        <div className="mt-10">
          <ButtonLink href="/activations/" variant="secondary">
            More on activations <Arrow />
          </ButtonLink>
        </div>
      )}
    </Section>
  );
}
