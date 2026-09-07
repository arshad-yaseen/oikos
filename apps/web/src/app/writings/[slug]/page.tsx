import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/site/json-ld";
import { WritingArticle } from "@/components/writing/writing-article";
import { writings } from "@/content/writings";
import { articleJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return writings.map((writing) => ({ slug: writing.slug }));
}

export async function generateMetadata({ params }: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const writing = writings.find((entry) => entry.slug === slug);

  if (!writing) {
    return {};
  }

  return createMetadata({
    title: writing.title,
    description: writing.description,
    path: `/writings/${writing.slug}`,
    publishedTime: writing.date,
  });
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const writing = writings.find((entry) => entry.slug === slug);

  if (!writing) {
    notFound();
  }

  return (
    <>
      <JsonLd schema={articleJsonLd(writing)} />
      <WritingArticle writing={writing}>{writing.body}</WritingArticle>
    </>
  );
}
