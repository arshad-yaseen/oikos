import type { DatedArticle } from "@/types/article";
import { site } from "@/config/site";

export function articleJsonLd(writing: DatedArticle): object {
  const url = `${site.url}/writings/${writing.slug}`;
  const author = {
    "@type": "Person",
    name: site.author.name,
    url: site.author.url,
  };

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: writing.title,
    description: writing.description,
    datePublished: writing.date,
    dateModified: writing.date,
    url,
    mainEntityOfPage: url,
    image: `${url}/opengraph-image`,
    author,
    publisher: author,
  };
}
