import type { DatedArticle } from "@/lib/content";
import { ogImageUrl } from "@/lib/metadata";
import { site } from "@/lib/site";

const author = {
  "@type": "Person",
  name: site.author.name,
  url: site.author.url,
};

export function websiteJsonLd(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    author,
  };
}

export function articleJsonLd(writing: DatedArticle): object {
  const url = `${site.url}/writings/${writing.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: writing.title,
    description: writing.description,
    datePublished: writing.date,
    dateModified: writing.date,
    url,
    mainEntityOfPage: url,
    image: `${site.url}${ogImageUrl(writing.title, site.name)}`,
    author,
    publisher: author,
  };
}
