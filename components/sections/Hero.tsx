import { hero } from "@/content/home";
import { site } from "@/content/site";
import { LogoLockup } from "../Logo";
import { Arrow, ButtonLink } from "../ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="wrap grid items-center gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-24">
        <div className="lg:col-span-7">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="display mt-6 text-[2.65rem] text-ink sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            {hero.headline}
          </h1>
          <p className="mt-7 max-w-xl text-lg text-muted sm:text-xl">{hero.sub}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primary.href}>
              {hero.primary.label} <Arrow />
            </ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="secondary">
              {hero.secondary.label}
            </ButtonLink>
          </div>
        </div>

        <div className="relative flex flex-col items-start lg:col-span-5 lg:items-center">
          <div className="relative w-56 sm:w-72 lg:w-full lg:max-w-[26rem]">
            <div aria-hidden="true" className="ember-glow pointer-events-none absolute -inset-[30%] rounded-full" />
            <LogoLockup priority size={960} className="relative h-auto w-full" />
          </div>
          <p className="headline mt-8 text-2xl text-gold lg:text-center">{site.tagline}</p>
        </div>
      </div>
    </section>
  );
}
