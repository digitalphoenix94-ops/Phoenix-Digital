import { clients } from "@/content/case-studies";

export function ClientRow({ className = "" }: { className?: string }) {
  return (
    <div className={`border-t border-line pt-8 ${className}`}>
      <h3 className="label text-muted">Brands we&rsquo;ve worked with</h3>
      <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
        {clients.map((c) => (
          <li key={c} className="headline text-lg text-ink/80 sm:text-xl">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
