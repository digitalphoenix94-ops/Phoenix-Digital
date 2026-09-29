import Image from "next/image";
import { about, stats } from "@/content/home";
import { site } from "@/content/site";
import { Section, SectionHeader } from "../ui";
import { StatGrid } from "../StatGrid";

export function About() {
  const { founder } = about;
  return (
    <Section id="about" labelledBy="about-title">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeader id="about-title" eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 max-w-2xl space-y-4 text-lg text-muted">
            {about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="headline mt-8 text-xl text-gold">{site.secondaryLine}</p>
        </div>

        <figure className="relative self-start rounded-sm border border-line bg-surface p-6 sm:p-10 lg:col-span-5">
          <span aria-hidden="true" className="display absolute -top-6 left-6 text-7xl leading-none text-ember">
            &ldquo;
          </span>
          <blockquote className="headline text-xl leading-snug text-ink sm:text-2xl">
            <p>{founder.quote}</p>
          </blockquote>
          <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
            {founder.photo ? (
              <Image
                src={founder.photo}
                alt={founder.name}
                width={112}
                height={112}
                className="h-14 w-14 rounded-full object-cover"
              />
            ) : (
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ember-deep font-mono text-sm text-ember"
              >
                VK
              </span>
            )}
            <span>
              <span className="block font-semibold text-ink">{founder.name}</span>
              <span className="block text-sm text-muted">{founder.role}</span>
              <span className="block text-sm text-muted">{founder.bio}</span>
            </span>
          </figcaption>
        </figure>
      </div>

      <StatGrid stats={stats} className="mt-16 sm:mt-20" />
    </Section>
  );
}
