import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Start a brief with Phoenix Digital in Nairobi. Call or WhatsApp ${site.contact.phone} or email ${site.contact.email}.`,
  path: "/contact/",
});

export default function ContactPage() {
  return <Contact asPage />;
}
