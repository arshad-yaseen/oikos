import type { Metadata } from "next";
import { og } from "@/config/og";
import { site } from "@/config/site";
import { ogImageUrl } from "@/lib/og-image-url";

type CreateMetadataOptions = {
  title: string;
  description?: string;
  /** Root-relative path, resolved against `metadataBase` for canonical and OG URLs. */
  path: string;
  type?: "website" | "article";
  /** ISO 8601 date, only used when `type` is `"article"`. */
  publishedTime?: string;
};

export function createMetadata({
  title,
  description = site.description,
  path,
  type = "website",
  publishedTime,
}: CreateMetadataOptions): Metadata {
  const image = { url: ogImageUrl(title, site.name), ...og.size, alt: title };

  const shared = {
    title,
    description,
    url: path,
    siteName: site.name,
    locale: "en_US",
    images: [image],
  };

  const openGraph: Metadata["openGraph"] =
    type === "article"
      ? { ...shared, type: "article", publishedTime, authors: [site.author.name] }
      : { ...shared, type: "website" };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: site.twitter,
      site: site.twitter,
      images: [image],
    },
  };
}
