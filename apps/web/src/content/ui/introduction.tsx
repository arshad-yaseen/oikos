import { A } from "@oikos/ui/components/prose/anchor";
import { P } from "@oikos/ui/components/prose/paragraph";
import type { Article } from "@/lib/content";

export const introduction = {
  slug: "introduction",
  title: "Introduction",
  description: "The components that ship with Oikos, each with its variants and source.",
  body: (
    <>
      <P>
        Every component is documented here with its variants, and every demo shows the code that
        renders it. Copy a demo as it is, or import the component and compose your own.
      </P>
      <P>
        Components are built on top of <A href="https://base-ui.com">Base UI</A>, unstyled
        accessible primitives, and styled with <A href="https://tailwindcss.com">Tailwind CSS</A>.
        The tokens and rules behind them live in the repository, where people and agents read the
        same documents before they build.
      </P>
    </>
  ),
} satisfies Article;
