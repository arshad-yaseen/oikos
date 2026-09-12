const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ground.arshad.fyi";

export const site = {
  name: "ground",
  title: "ground",
  description:
    "A design system, its components and pages, and the rules that build them. Every new project starts here.",
  url,
  author: { name: "Arshad Yaseen", url: "https://arshad.fyi" },
  twitter: "@arshadyaseeen",
  repository: "https://github.com/arshad-yaseen/ground",
} as const;
