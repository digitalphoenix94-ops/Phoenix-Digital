import { contactForm } from "@/content/forms";
import { site } from "@/content/site";
import { CopyButton } from "../CopyButton";
import { SmartForm } from "../forms/SmartForm";
import { LogoLockup } from "../Logo";
import { WhatsAppButton } from "../WhatsAppButton";
import { SectionHeader } from "../ui";

export function Contact({ asPage = false }: { asPage?: boolean }) {
  const { contact } = site;
  const FormHeading = asPage ? "h2" : "h3";
  return (
    <section id="contact" aria-labelledby="contact-title" className={asPage ? "pb-24 pt-14 sm:pt-20" : "border-t border-line py-20 sm:py-28"}>
      <div className="wrap grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            id="contact-title"
            as={asPage ? "h1" : "h2"}
            eyebrow="Contact"
            title="Let's build your next campaign."
            sub="Tell us what you're launching or growing. Call, WhatsApp, email or send the brief below."
          />

          <div className="mt-10 space-y-6">
            <div className="rounded-sm border border-line bg-surface p-6">
              <p className="label text-muted">Phone & WhatsApp</p>
              <a href={`tel:${contact.phoneE164}`} className="headline mt-2 block text-2xl text-ink hover:text-ember sm:text-3xl">
                {contact.phone}
              </a>
              <p className="mt-1 text-sm text-muted">
                {contact.person}, {contact.role}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <CopyButton value={contact.phone} label="phone" />
              </div>
            </div>

            <div className="rounded-sm border border-line bg-surface p-6">
              <p className="label text-muted">Email</p>
              <a href={`mailto:${contact.email}`} className="headline mt-2 block break-all text-xl text-ink hover:text-ember sm:text-2xl">
                {contact.email}
              </a>
              <div className="mt-4">
                <CopyButton value={contact.email} label="email" />
              </div>
            </div>

            <WhatsAppButton className="w-full sm:w-auto" />

            <p className="text-sm text-muted">
              {contact.city}, {contact.country}. Working across East Africa.
            </p>
            <LogoLockup className="h-auto w-36" />
          </div>
        </div>

        <div id="brief" className="lg:col-span-7">
          <div className="rounded-sm border border-line bg-raised p-6 sm:p-10">
            <FormHeading className="headline text-2xl text-ink sm:text-3xl">Send us a brief</FormHeading>
            <p className="mt-2 text-muted">A few details and we&rsquo;ll come back with next steps.</p>
            <SmartForm config={contactForm} prefillFromQuery className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
