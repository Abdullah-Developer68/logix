import type { Metadata } from "next";

/**
 * Per-page metadata: title, description, canonical URL, and matching Open
 * Graph / Twitter cards. Nested openGraph objects replace the root layout's
 * rather than merging, so the shared fields are repeated here.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Logix",
      locale: "en_US",
      url: path,
      title: `${title} | Logix`,
      description,
    },
    twitter: { card: "summary_large_image", title: `${title} | Logix`, description },
  };
}
