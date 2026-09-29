// Shared types for everything in /content.
// You normally never need to edit this file: edit the data files next to it instead.

export type Link = { label: string; href: string };

export type Stat = {
  /** The big number, written exactly as it should appear, e.g. "50+" or "12.5M+". */
  value: string;
  /** What the number counts. */
  label: string;
};

export type ProofTab = {
  id: string;
  label: string;
  title: string;
  pitch: string;
  proof: [string, string, string];
  link: Link;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  /** Short extra detail lines (optional). */
  details?: string[];
  link?: Link;
};

/** Filters on the Work page. Add a new one here and in `workFilters` (case-studies.ts). */
export type WorkCategory = "activations" | "atl" | "influencer" | "digital";

export type GallerySlot = {
  /** Path under /public, e.g. "/images/work/lintons/billboard.webp". Leave null to show a labelled placeholder. */
  src: string | null;
  alt: string;
  /** Describes the photo that should go in this slot. Shown on the placeholder until a photo is added. */
  caption: string;
};

export type CaseStudy = {
  /** URL segment: /work/<slug>. Lowercase, hyphens only. */
  slug: string;
  client: string;
  /** One-line summary for cards and meta descriptions. */
  summary: string;
  disciplines: string[];
  categories: WorkCategory[];
  challenge: string;
  whatWeDid: string[];
  results: Stat[];
  /** Optional note shown under the result tiles. */
  resultsNote?: string;
  gallery: GallerySlot[];
  /** Mark true for Phoenix's own ventures (e.g. Sababuu). */
  inHouse?: boolean;
};

export type FormField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
  options?: string[];
  /** Half-width on larger screens. */
  half?: boolean;
  hint?: string;
};

export type FormConfig = {
  /** Sent with the submission so you can tell forms apart in your inbox. */
  id: string;
  subject: string;
  submitLabel: string;
  successMessage: string;
  fields: FormField[];
  /** Which endpoint env variable to use. */
  endpoint: "main" | "common";
};
