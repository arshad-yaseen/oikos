import type { Article } from "@/types/article";

export type Section = {
  slug: string;
  title: string;
  /** In the order the sidebar shows them. */
  articles: Article[];
};
