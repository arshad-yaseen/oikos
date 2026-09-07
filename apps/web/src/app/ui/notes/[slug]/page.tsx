import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleHeader } from "@/components/article-header";
import { ui } from "@/content/ui";
import { createMetadata } from "@/lib/create-metadata";

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ui.notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = ui.notes.find((entry) => entry.slug === slug);

  if (!note) {
    return {};
  }

  return createMetadata({
    title: note.title,
    description: note.description,
    path: `/ui/notes/${note.slug}`,
    type: "article",
    publishedTime: note.date,
  });
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = ui.notes.find((entry) => entry.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <>
      <ArticleHeader article={note} />
      {note.body}
    </>
  );
}
