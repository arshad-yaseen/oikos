import type { MetadataRoute } from "next";
import { ui } from "@/content/ui";
import { writings } from "@/content/writings";
import { pages } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  return [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/writings`, changeFrequency: "monthly", priority: 0.8 },
    ...writings.map((writing) => ({
      url: `${base}/writings/${writing.slug}`,
      lastModified: writing.date,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    ...pages(ui).map((page) => ({
      url: `${base}${page.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
