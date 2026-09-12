import { CodeBlock } from "@arshad/ui/components/code-block";
import { A } from "@arshad/ui/components/prose/anchor";
import { Callout } from "@arshad/ui/components/prose/callout";
import { H2, H3 } from "@arshad/ui/components/prose/heading";
import { InlineCode } from "@arshad/ui/components/prose/inline-code";
import { Li, Ul } from "@arshad/ui/components/prose/list";
import { P } from "@arshad/ui/components/prose/paragraph";
import { Strong } from "@arshad/ui/components/prose/strong";
import { Table } from "@arshad/ui/components/prose/table";
import type { DatedArticle } from "@/lib/content";

const POST_SKELETON = `import { P } from "@arshad/ui/components/prose/paragraph";
import type { DatedArticle } from "@/lib/content";

export const helloWorld = {
  slug: "hello-world",
  title: "Hello, world",
  description: "The first post.",
  date: "2026-01-01",
  body: <P>Hello.</P>,
} satisfies DatedArticle;`;

export const writingAPost = {
  slug: "writing-a-post",
  title: "Writing a post",
  description:
    "A post is one file, a date, and the prose components. This one uses every part, so it doubles as the reference.",
  date: "2026-09-12",
  body: (
    <>
      <P>
        A post is a file in <InlineCode>content/blog/</InlineCode>, exported as a{" "}
        <InlineCode>DatedArticle</InlineCode> and added to the list in{" "}
        <InlineCode>content/blog.ts</InlineCode>. The route, the list, the metadata, the Open Graph
        image, and the sitemap all follow from that one entry. This post uses every prose component,
        so it doubles as the reference. Delete it when the first real one is ready.
      </P>

      <H2>Paragraphs carry the inline marks</H2>
      <P>
        Body text is a <InlineCode>P</InlineCode>. Inside it, <Strong>Strong</Strong> carries
        emphasis by weight, <InlineCode>InlineCode</InlineCode> marks an identifier, and{" "}
        <A href="https://example.com">A</A> is a link. Use real typographic characters: one ellipsis
        character, curly quotes, and an apostrophe that isn’t straight.
      </P>

      <H2>Lists hold parallel items</H2>
      <P>One or two sentences per item, and every item the same kind of thing.</P>
      <Ul>
        <Li>The date orders the list, newest first.</Li>
        <Li>The slug is the URL, and it never changes after publishing.</Li>
        <Li>The description feeds the meta tags and the social card.</Li>
      </Ul>

      <H2>Code arrives as a string</H2>
      <P>
        A code block takes its source as a string and highlights it on the client. This is the whole
        of a post, before any prose.
      </P>
      <CodeBlock code={POST_SKELETON} />
      <H3>A third level stands on weight alone</H3>
      <P>
        An <InlineCode>H3</InlineCode> shares the prose size and differs by weight, so it sits
        inside a section without starting a new one. Levels never skip.
      </P>

      <H2>Tables are for precise lookup</H2>
      <P>Cells are authored prose, and their position is their identity.</P>
      <Table
        head={["Component", "Renders", "Use for"]}
        rows={[
          ["P", "Paragraph", "Body text"],
          ["H2, H3", "Heading", "Sections and their parts"],
          ["A", "Link", "References and sources"],
          ["InlineCode", "Code span", "Identifiers, paths, commands"],
          ["Ul, Li", "List", "Parallel items"],
          ["Table", "Table", "Lookup across two or more axes"],
          ["CodeBlock", "Code block", "Source, highlighted"],
          ["Callout", "Aside", "A limit or a takeaway"],
        ]}
      />

      <H2>A callout is an aside</H2>
      <Callout>
        A callout carries a limit or a takeaway that the paragraphs around it should not have to
        interrupt themselves for. It is not a heading, and it is not a warning box.
      </Callout>
    </>
  ),
} satisfies DatedArticle;
