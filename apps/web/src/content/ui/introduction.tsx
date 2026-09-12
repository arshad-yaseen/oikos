import { A } from "@oikos/ui/components/prose/anchor";
import { H2 } from "@oikos/ui/components/prose/heading";
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

      <H2>Built for agents</H2>
      <P>
        Everything in Oikos is explicit. What a piece of code does is written where it is used, so
        nothing happens that you cannot see there. Styles are plain utilities, colors name both of
        their modes, and a component owns only the behaviour that is hard to get right, a select or
        a dialog, and leaves every other decision to the caller.
      </P>
      <P>
        An agent is strongest on what it already knows, the platform, and weakest on what it has to
        learn from a codebase, a wrapper’s opinions, a library’s names, a token that changes behind
        its back. Each of these narrows what it can make. So Oikos keeps the code plain and puts its
        rules in three short documents on design, code, and styling, read before every task. What an
        agent can see it can change, and everything stays consistent by rule rather than by wrapper.
        Explicit, coherent, less is more.
      </P>
    </>
  ),
} satisfies Article;
