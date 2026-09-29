import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { Activations } from "@/components/sections/Activations";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { HowWeWork, Packages } from "@/components/sections/Packages";
import { Services } from "@/components/sections/Services";
import { Talent } from "@/components/sections/Talent";
import { TheCommonSection } from "@/components/sections/TheCommon";
import { WhatWeDoTabs } from "@/components/sections/WhatWeDoTabs";
import { Work } from "@/components/sections/Work";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    path: "/",
  }),
  title: { absolute: `${site.name} | Integrated marketing agency in Nairobi, Kenya` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatWeDoTabs />
      <About />
      <Services />
      <Activations />
      <Talent />
      <TheCommonSection />
      <Work />
      <Packages />
      <HowWeWork />
      <Contact />
    </>
  );
}
