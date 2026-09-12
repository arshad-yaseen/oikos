"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";
import { highlight } from "sugar-high";
import type { LanguageName, TokenType } from "sugar-high";
import { cn } from "@oikos/ui/lib/cn";

type CodeBlockProps = {
  code: string;
  lang?: LanguageName;
};

const UNLOCK_DELAY = 150;

const DEFAULT_LANG: LanguageName = "typescript";

// Sugar High's Vercel theme.
const THEME = {
  "--sh-class": "light-dark(#107d32, #00ca52)",
  "--sh-identifier": "light-dark(#171717, #ededed)",
  "--sh-sign": "light-dark(#171717, #ededed)",
  "--sh-property": "light-dark(#d60020, #ff5e63)",
  "--sh-entity": "light-dark(#107d32, #00ca52)",
  "--sh-jsxliterals": "light-dark(#171717, #ededed)",
  "--sh-string": "light-dark(#107d32, #00ca52)",
  "--sh-keyword": "light-dark(#c41562, #ff518d)",
  "--sh-comment": "light-dark(#4d4d4d, #a0a0a0)",
} satisfies Partial<Record<`--sh-${TokenType}`, string>>;

export function CodeBlock({ code, lang = DEFAULT_LANG }: CodeBlockProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    let timer = 0;
    const unlock = () => {
      element.style.pointerEvents = "";
    };
    const handleScroll = () => {
      element.style.pointerEvents = "none";
      clearTimeout(timer);
      timer = window.setTimeout(unlock, UNLOCK_DELAY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
      unlock();
    };
  }, []);

  return (
    <div
      ref={ref}
      data-slot="code-block"
      className={cn(
        "max-h-120 overflow-auto rounded-lg p-4 text-sm/6",
        "border-hairline border-current/10",
        "[&_pre]:focus-visible:outline-hidden",
      )}
      style={THEME as CSSProperties}
    >
      <pre tabIndex={0}>
        <code dangerouslySetInnerHTML={{ __html: highlight(code.trim(), { lang }) }} />
      </pre>
    </div>
  );
}
