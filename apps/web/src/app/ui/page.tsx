import type { Metadata } from "next";
import { ArticleHeader } from "@/components/article-header";
import { ui } from "@/content/ui";
import { createMetadata } from "@/lib/create-metadata";

export const metadata: Metadata = createMetadata({
  title: ui.introduction.title,
  description: ui.introduction.description,
  path: "/ui",
});

export default function UiPage() {
  return (
    <>
      <ArticleHeader article={ui.introduction} />
      {ui.introduction.body}
    </>
  );
}
