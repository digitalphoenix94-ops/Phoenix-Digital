import Image from "next/image";

/** PD monogram with the flame. Used in the header. */
export function LogoMark({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/pd-mark.webp"
      alt=""
      width={160}
      height={128}
      className={className}
      priority
    />
  );
}

/** Full lockup: monogram + PHOENIX DIGITAL wordmark. Used in the hero, footer and contact. */
export function LogoLockup({
  className = "w-48 h-auto",
  priority = false,
  size = 480,
}: {
  className?: string;
  priority?: boolean;
  size?: 480 | 960;
}) {
  const img = (
    <Image
      src={`/brand/pd-lockup-${size}.webp`}
      alt="Phoenix Digital"
      width={size}
      height={Math.round((size * 535) / 480)}
      className={className}
      // No preload link here: it would fetch the large file even on phones, where <picture> picks the small one.
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
  if (size === 480) return img;
  // Serve the smaller file below desktop widths.
  return (
    <picture>
      <source media="(max-width: 1023px)" srcSet="/brand/pd-lockup-480.webp" />
      {img}
    </picture>
  );
}

/** The Common T&C monogram (bronze on transparent). */
export function CommonMark({ className = "h-10 w-10" }: { className?: string }) {
  return <Image src="/brand/common-mark.webp" alt="" width={160} height={160} className={className} />;
}

export function CommonBadge({
  className = "w-72 h-auto",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const img = (
    <Image
      src={priority ? "/brand/common-badge-960.webp" : "/brand/common-badge-480.webp"}
      alt="The Common, Tigoni. Est. 2026"
      width={priority ? 960 : 480}
      height={priority ? 960 : 480}
      className={className}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
    />
  );
  if (!priority) return img;
  return (
    <picture>
      <source media="(max-width: 1023px)" srcSet="/brand/common-badge-480.webp" />
      {img}
    </picture>
  );
}
