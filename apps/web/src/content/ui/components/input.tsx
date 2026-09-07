import { Basic } from "@/content/ui/components/input/basic";
import { Sizes } from "@/content/ui/components/input/sizes";
import { Disabled } from "@/content/ui/components/input/disabled";
import { Invalid } from "@/content/ui/components/input/invalid";
import { Demo } from "@/components/demo";
import { PropsTable } from "@/components/props-table";
import { A } from "@arshad.fyi/ui/components/prose/anchor";
import { H2 } from "@arshad.fyi/ui/components/prose/heading";
import { InlineCode } from "@arshad.fyi/ui/components/prose/inline-code";
import { P } from "@arshad.fyi/ui/components/prose/paragraph";
import type { Article } from "@/types/article";

export const input = {
  slug: "input",
  title: "Input",
  description: "A single-line text field.",
  source: "packages/ui/src/components/input.tsx",
  body: (
    <>
      <Demo name="ui/components/input/basic">
        <Basic />
      </Demo>

      <H2>Sizes</H2>
      <P>Three sizes to fit different layouts.</P>
      <Demo name="ui/components/input/sizes">
        <Sizes />
      </Demo>

      <H2>Disabled</H2>
      <P>Prevent interaction with the field.</P>
      <Demo name="ui/components/input/disabled">
        <Disabled />
      </Demo>

      <H2>Invalid</H2>
      <P>Shows an error state when the value is invalid.</P>
      <Demo name="ui/components/input/invalid">
        <Invalid />
      </Demo>

      <H2>API</H2>
      <PropsTable rows={[{ name: "size", type: '"sm" | "md" | "lg"', default: '"md"' }]} />
      <P>
        Plus everything from <A href="https://base-ui.com/react/components/input">Base UI Input</A>,
        including <InlineCode>value</InlineCode>, <InlineCode>defaultValue</InlineCode>,{" "}
        <InlineCode>onValueChange</InlineCode>, and the native input attributes.
      </P>
    </>
  ),
} satisfies Article;
