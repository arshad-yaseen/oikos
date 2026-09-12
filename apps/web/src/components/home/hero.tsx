import type { Route } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "@oikos/ui/components/button";
import { cn } from "@oikos/ui/lib/cn";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-(--layout-width) flex-col items-center gap-8 pt-16">
      <div className="flex w-full flex-col items-center gap-6">
        <div
          className={cn(
            "relative w-full",
            "before:absolute before:top-0 before:left-1/2 before:w-screen before:-translate-x-1/2 before:content-['']",
            "after:absolute after:bottom-0 after:left-1/2 after:w-screen after:-translate-x-1/2 after:content-['']",
            "before:border-t-hairline after:border-b-hairline",
            "before:border-current/10 after:border-current/10",
            "before:pointer-events-none after:pointer-events-none",
          )}
        >
          <h1
            className={cn(
              "text-5xl font-normal tracking-tighter",
              "text-center text-balance",
              "[text-box:trim-both_cap_alphabetic]",
            )}
          >
            Where every project starts.
          </h1>
        </div>

        <p
          className={cn(
            "max-w-2xl text-center text-base/8 text-pretty",
            "text-neutral-600 dark:text-neutral-400",
          )}
        >
          {site.description}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <Button className="rounded-full" render={<Link href={"/ui" as Route} />}>
          Explore UI
        </Button>
        <Button variant="outline" className="rounded-full" render={<Link href="/blog" />}>
          Blog
        </Button>
      </div>
    </section>
  );
}
