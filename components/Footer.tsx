import Link from "next/link";
import { site, whatsappLink } from "@/content/site";
import { LogoLockup } from "./Logo";

export function Footer() {
  const socials = site.socials.filter((s) => s.url);
  return (
    <footer className="border-t border-line bg-surface">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <LogoLockup className="h-auto w-36" />
          <p className="headline mt-6 text-2xl text-ink">{site.tagline}</p>
          <p className="mt-2 text-muted">{site.secondaryLine}</p>
        </div>

        <nav aria-label="Footer" className="md:col-span-3">
          <p className="label text-muted">Explore</p>
          <ul className="mt-4 space-y-2.5">
            <li><Link href="/" className="text-ink hover:text-ember">Home</Link></li>
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={`hover:text-ember ${item.highlight ? "text-gold" : "text-ink"}`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="label text-muted">Talk to us</p>
          <ul className="mt-4 space-y-2.5">
            <li><a href={`tel:${site.contact.phoneE164}`} className="text-ink hover:text-ember">{site.contact.phone}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-ember">WhatsApp</a></li>
            <li><a href={`mailto:${site.contact.email}`} className="break-all text-ink hover:text-ember">{site.contact.email}</a></li>
            <li className="text-muted">{site.contact.city}, {site.contact.country}</li>
          </ul>
        </div>

        {socials.length > 0 && (
          <div className="md:col-span-2">
            <p className="label text-muted">Follow</p>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ink hover:text-ember">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {site.name}, {site.contact.city}.</p>
          <p>Where brands catch fire.</p>
        </div>
      </div>
    </footer>
  );
}
