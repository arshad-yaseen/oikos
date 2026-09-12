import { writingAPost } from "@/content/blog/writing-a-post";
import type { DatedArticle } from "@/lib/content";
import { byDate } from "@/lib/date";

export const posts: DatedArticle[] = [writingAPost].toSorted(byDate);
