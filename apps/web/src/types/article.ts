import type { ReactNode } from "react";

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: ReactNode;
  /** Publish date, ISO 8601 (YYYY-MM-DD). Set in dated collections. */
  date?: string;
  /** Repo-relative path to what the article documents, a file or a directory. */
  source?: string;
};

/** An article in a chronological collection, where the date is what orders it. */
export type DatedArticle = Article & {
  date: string;
};
