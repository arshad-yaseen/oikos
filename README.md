# Oikos

A web starter with a handcrafted design system, built for people and agents. Clone it, rename it, and build.

Live at [oikos.arshad.fyi](https://oikos.arshad.fyi).

## What is inside

- `packages/ui` is the design system: the tokens, the stylesheet, and components built on Base UI and Tailwind CSS.
- `apps/web` is the site: a home page, the component documentation under `/ui`, and a blog under `/blog`.
- `agents/` holds the three documents that govern every change. Read them before touching anything.

## Make it yours

1. Clone the repository and give it your name.
2. Rename the package scope from `@oikos` to your own, in every `package.json` and import.
3. Edit `apps/web/src/lib/site.ts`. Everything the site says about itself is there.
4. Replace the logo in `apps/web/src/components/site/logo.tsx` and the icon in `apps/web/src/app/icon.svg`.
5. Delete the example post in `apps/web/src/content/blog/` and write your own.

## Scripts

Every task runs through the root scripts.

```sh
bun install
bun run dev
bun run build
bun run typecheck
bun run lint
bun run format
```
