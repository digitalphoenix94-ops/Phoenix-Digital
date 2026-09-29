import { howWeWork, packages, packagesIntro } from "@/content/packages";
import { ButtonLink, Section, SectionHeader, Tick, pad } from "../ui";

export function Packages() {
  return (
    <Section id="packages" labelledBy="packages-title">
      <SectionHeader id="packages-title" eyebrow={packagesIntro.eyebrow} title={packagesIntro.title} sub={packagesIntro.sub} />
      <ul className="mt-12 grid gap-6 lg:grid-cols-3">
        {packages.map((p) => (
          <li
            key={p.name}
            className={`relative flex flex-col rounded-sm border p-6 sm:p-8 ${p.popular ? "border-ember bg-raised" : "border-line bg-surface"}`}
          >
            {p.popular && (
              <span className="label absolute -top-3 left-6 rounded-sm bg-gold px-2.5 py-1 font-semibold text-night">
                Most popular
              </span>
            )}
            <p className="label text-muted">{p.basis}</p>
            <h3 className="display mt-3 text-4xl text-ink">{p.name}</h3>
            <p className="mt-3 text-muted">{p.summary}</p>
            <ul className="mt-6 space-y-3 text-sm">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-ink">
                  <Tick />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <p className="headline border-t border-line pt-5 text-xl text-gold">{p.price}</p>
              <ButtonLink
                href={`/contact/?package=${p.name.toLowerCase()}#brief`}
                variant={p.popular ? "primary" : "secondary"}
                className="mt-5 w-full"
              >
                Talk about {p.name}
              </ButtonLink>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">{packagesIntro.footnote}</p>
    </Section>
  );
}

export function HowWeWork() {
  return (
    <Section id="how-we-work" labelledBy="how-title">
      <SectionHeader id="how-title" eyebrow={howWeWork.eyebrow} title={howWeWork.title} />
      <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
        {howWeWork.steps.map((s, i) => (
          <li key={s.title} className="border-t-2 border-ember pt-5">
            <span className="label text-ember">{pad(i + 1)}</span>
            <h3 className="headline mt-2 text-2xl text-ink">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
