import { Arrow, ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-28">
      <div className="wrap max-w-3xl">
        <p className="eyebrow">404</p>
        <h1 className="display mt-5 text-5xl text-ink sm:text-7xl">This page didn&rsquo;t catch.</h1>
        <p className="mt-6 text-lg text-muted">The link may be old or mistyped. Try the home page or our work.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">
            Go home <Arrow />
          </ButtonLink>
          <ButtonLink href="/work/" variant="secondary">
            See our work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
