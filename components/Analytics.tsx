import Script from "next/script";
import { GA4_ID } from "@/lib/analytics";

/** Loads Google Analytics 4 only when NEXT_PUBLIC_GA4_ID is set. */
export function Analytics() {
  if (!GA4_ID) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA4_ID}');`}
      </Script>
    </>
  );
}
