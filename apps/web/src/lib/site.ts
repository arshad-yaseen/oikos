// Everything the site says about itself. A fork starts here.
const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://oikos.arshad.fyi";

export const site = {
  name: "Oikos",
  title: "Oikos",
  description: "A web starter with a handcrafted design system, built for people and agents.",
  url,
  author: { name: "Arshad Yaseen", url: "https://arshad.fyi" },
  twitter: "@arshadyaseeen",
} as const;
