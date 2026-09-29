"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { whatWeDo } from "@/content/home";
import { Arrow, ButtonLink, pad } from "../ui";

export function WhatWeDoTabs() {
  const { tabs } = whatWeDo;
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusTab = (i: number) => {
    const next = (i + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const keys: Record<string, () => void> = {
      ArrowRight: () => focusTab(i + 1),
      ArrowDown: () => focusTab(i + 1),
      ArrowLeft: () => focusTab(i - 1),
      ArrowUp: () => focusTab(i - 1),
      Home: () => focusTab(0),
      End: () => focusTab(tabs.length - 1),
    };
    if (keys[e.key]) {
      e.preventDefault();
      keys[e.key]();
    }
  };

  const tab = tabs[active];
  const isCommon = tab.id === "the-common";

  return (
    <section aria-labelledby="what-we-do-title" className="border-t border-line bg-surface py-20 sm:py-24">
      <div className="wrap">
        <p className="eyebrow">{whatWeDo.eyebrow}</p>
        <h2 id="what-we-do-title" className="headline mt-4 max-w-2xl text-[2rem] text-ink sm:text-5xl">
          {whatWeDo.title}
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div
            role="tablist"
            aria-label="Disciplines"
            className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:col-span-4 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
          >
            {tabs.map((t, i) => {
              const selected = i === active;
              const common = t.id === "the-common";
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`group flex shrink-0 items-center gap-3 whitespace-nowrap rounded-sm border px-4 py-3 text-left transition-colors lg:rounded-none lg:border-x-0 lg:border-t-0 lg:px-0 lg:py-5 ${
                    selected
                      ? common
                        ? "border-leaf text-leaf"
                        : "border-ember text-ink"
                      : "border-line text-muted hover:text-ink"
                  }`}
                >
                  <span className={`label hidden lg:inline ${selected ? (common ? "text-leaf" : "text-ember") : "text-muted"}`}>
                    {pad(i + 1)}
                  </span>
                  <span className="headline text-base lg:text-2xl">{t.label}</span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${tab.id}`}
            aria-labelledby={`tab-${tab.id}`}
            tabIndex={0}
            className={`rounded-sm border p-6 sm:p-10 lg:col-span-8 ${
              isCommon ? "border-leaf/40 bg-leaf-deep" : "border-line bg-raised"
            }`}
          >
            <h3 className="headline text-2xl text-ink sm:text-4xl">{tab.title}</h3>
            <p className="mt-4 max-w-2xl text-lg text-muted">{tab.pitch}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
              {tab.proof.map((p, i) => (
                <li key={p} className="border-t border-line pt-4">
                  <span className={`label ${isCommon ? "text-leaf" : "text-gold"}`}>Proof {pad(i + 1)}</span>
                  <p className="mt-2 text-ink">{p}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ButtonLink href={tab.link.href} variant={isCommon ? "leaf" : "primary"}>
                {tab.link.label} <Arrow />
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
