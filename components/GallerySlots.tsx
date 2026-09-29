import Image from "next/image";
import type { GallerySlot } from "@/content/types";

/**
 * Photo grid. Slots without a `src` show a labelled placeholder so it's obvious
 * which photo belongs where. Add photos in /content, not here.
 */
export function GallerySlots({ slots, accent = "ember" }: { slots: GallerySlot[]; accent?: "ember" | "leaf" }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {slots.map((slot, i) => (
        <li key={`${slot.caption}-${i}`}>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-line bg-surface">
              {slot.src ? (
                <Image
                  src={slot.src}
                  alt={slot.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="placeholder-slot flex h-full w-full flex-col items-start justify-end p-5">
                  <span className={`label ${accent === "leaf" ? "text-leaf" : "text-ember"}`}>Photo slot {String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-1 text-sm text-muted">Add: {slot.caption}</span>
                </div>
              )}
            </div>
            <figcaption className="mt-2 text-sm text-muted">{slot.caption}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
