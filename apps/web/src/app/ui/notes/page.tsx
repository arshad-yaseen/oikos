import type { Metadata } from "next";
import { ArticleHeader } from "@/components/article-header";
import { ui } from "@/content/ui";
import { createMetadata } from "@/lib/create-metadata";
import { A } from "@arshad.fyi/ui/components/prose/anchor";
import { Li, Ul } from "@arshad.fyi/ui/components/prose/list";

export const metadata: Metadata = createMetadata({
  title: ui.notesIndex.title,
  description: ui.notesIndex.description,
  path: "/ui/notes",
});

export default function NotesPage() {
  return (
    <>
      <ArticleHeader article={ui.notesIndex} />
      <Ul>
        {ui.notes.map((note) => (
          <Li key={note.slug}>
            <A href={`/ui/notes/${note.slug}`}>{note.title}</A>
          </Li>
        ))}
      </Ul>
    </>
  );
}
