import { talent } from "@/content/talent";
import { Arrow, ButtonLink, Section, SectionHeader, Tick, pad } from "../ui";

export function Talent({ standalone = false }: { standalone?: boolean }) {
  const StepsHeading = standalone ? "h2" : "h3";
  return (
    <Section id="talent" labelledBy={standalone ? "talent-flow" : "talent-title"}>
      {!standalone && <SectionHeader id="talent-title" eyebrow={talent.eyebrow} title={talent.title} sub={talent.intro} />}

      <StepsHeading id="talent-flow" className={`label text-muted ${standalone ? "" : "mt-14"}`}>
        Six steps, one team
      </StepsHeading>
      <ol className="mt-5 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
        {talent.flow.map((s, i) => (
          <li key={s.title} className="relative bg-night p-6">
            <span className="label text-ember">{pad(i + 1)}</span>
            <p className="headline mt-3 text-xl text-ink">
              {s.title}
              {i < talent.flow.length - 1 && (
                <span aria-hidden="true" className="ml-2 hidden text-faint lg:inline">
                  →
                </span>
              )}
            </p>
            <p className="mt-2 text-sm text-muted">{s.body}</p>
          </li>
        ))}
      </ol>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {[talent.forBrands, talent.forTalent].map((side) => (
          <div key={side.title} className="rounded-sm border border-line bg-surface p-6 sm:p-8">
            <h3 className="headline text-2xl text-ink">{side.title}</h3>
            <ul className="mt-5 space-y-3">
              {side.points.map((p) => (
                <li key={p} className="flex gap-3 text-ink">
                  <Tick />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="headline mt-16 text-3xl text-ink sm:text-4xl">Three ways to work with us</h3>
      <ul className="mt-8 grid gap-6 lg:grid-cols-3">
        {talent.models.map((m) => (
          <li
            key={m.name}
            className={`flex flex-col rounded-sm border p-6 sm:p-8 ${m.featured ? "border-ember bg-raised" : "border-line bg-surface"}`}
          >
            <p className="label text-gold">{m.basis}</p>
            <p className="headline mt-3 text-2xl text-ink">{m.name}</p>
            <ul className="mt-5 space-y-3 text-sm">
              {m.points.map((p) => (
                <li key={p} className="flex gap-3 text-ink">
                  <Tick />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-6">
              <p className="border-t border-line pt-5 text-sm text-muted">
                <span className="font-semibold text-ink">Best for: </span>
                {m.bestFor}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {!standalone && (
        <div className="mt-10">
          <ButtonLink href="/talent/" variant="secondary">
            More on talent <Arrow />
          </ButtonLink>
        </div>
      )}
    </Section>
  );
}
