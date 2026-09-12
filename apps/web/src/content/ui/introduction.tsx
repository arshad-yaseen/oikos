import { A } from "@oikos/ui/components/prose/anchor";
import { P } from "@oikos/ui/components/prose/paragraph";
import type { Article } from "@/lib/content";

export const introduction = {
  slug: "introduction",
  title: "Introduction",
  description: "The design system every Oikos page is built with.",
  body: (
    <>
      <P>
        Oikos UI is a small set of components, the tokens they share, and the notes that record why
        they look the way they do. Every page on this site is built from it, so what is documented
        here is what ships.
      </P>
      <P>
        Each component page shows the component in its states and variants, with the source of every
        example beneath it. Components are built on <A href="https://base-ui.com">Base UI</A>,
        unstyled accessible primitives, and styled with{" "}
        <A href="https://tailwindcss.com">Tailwind CSS</A>.
      </P>
    </>
  ),
} satisfies Article;
