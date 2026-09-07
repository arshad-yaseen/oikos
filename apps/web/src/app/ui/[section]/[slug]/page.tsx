import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/article-header";
import { ui } from "@/content/ui";
import { createMetadata } from "@/lib/create-metadata";
import type { Article } from "@/types/article";

type ArticlePageProps = {
  params: Promise<{ section: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ui.sections.flatMap((section) =>
    section.articles.map((article) => ({ section: section.slug, slug: article.slug })),
  );
}

function findArticle(section: string, slug: string): Article | undefined {
  return ui.sections
    .find((entry) => entry.slug === section)
    ?.articles.find((article) => article.slug === slug);
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { section, slug } = await params;
  const article = findArticle(section, slug);

  if (!article) {
    return {};
  }

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/ui/${section}/${article.slug}`,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { section, slug } = await params;
  const article = findArticle(section, slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <ArticleHeader article={article} />
      {article.body}
    </>
  );
}
