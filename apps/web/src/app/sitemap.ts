import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { ui } from "@/content/ui";
import { writings } from "@/content/writings";

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
    ...ui.nav.flatMap((group) =>
      group.items.map((item) => ({
        url: `${base}${item.href}`,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
    ),
  ];
}
