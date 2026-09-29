import type { ReactNode } from "react";

/** Left-aligned editorial hero used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  sub,
  children,
  aside,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section aria-labelledby="page-title" className="pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div className="wrap grid items-end gap-10 lg:grid-cols-12">
        <div className={aside ? "lg:col-span-8" : "lg:col-span-10"}>
          <p className="eyebrow">{eyebrow}</p>
          <h1 id="page-title" className="display mt-5 text-[2.5rem] text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {sub && <p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl">{sub}</p>}
          {children}
        </div>
        {aside && <div className="lg:col-span-4">{aside}</div>}
      </div>
    </section>
  );
}
