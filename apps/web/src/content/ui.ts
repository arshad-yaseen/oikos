import { avatar } from "@/content/ui/components/avatar";
import { button } from "@/content/ui/components/button";
import { input } from "@/content/ui/components/input";
import { loaders } from "@/content/ui/components/loaders";
import { select } from "@/content/ui/components/select";
import { textarea } from "@/content/ui/components/textarea";
import { introduction } from "@/content/ui/introduction";
import { shadowsOverBorders } from "@/content/ui/notes/shadows-over-borders";
import { byDate } from "@/lib/by-date";
import type { DatedArticle } from "@/types/article";
import type { NavGroup } from "@/types/nav";
import type { Section } from "@/types/section";

const sections: Section[] = [
  {
    slug: "components",
    title: "Components",
    articles: [button, input, textarea, select, avatar, loaders],
  },
];

const notes: DatedArticle[] = [shadowsOverBorders].toSorted(byDate);

/** The notes listing has no authored file, so its copy lives here. */
const notesIndex = {
  title: "Notes",
  description: "Short design and engineering notes.",
};

/** The sidebar, top to bottom. Pagination walks the same order. */
const nav: NavGroup[] = [
  {
    items: [
      { title: introduction.title, href: "/ui", isExact: true },
      { title: notesIndex.title, href: "/ui/notes" },
      ...notes.map((note) => ({ title: note.title, href: `/ui/notes/${note.slug}` })),
    ],
  },
  ...sections.map((section) => ({
    title: section.title,
    items: section.articles.map((article) => ({
      title: article.title,
      href: `/ui/${section.slug}/${article.slug}`,
    })),
  })),
];

export const ui = { introduction, notesIndex, notes, sections, nav };
