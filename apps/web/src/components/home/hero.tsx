import type { Route } from "next";
import Link from "next/link";
import { Button } from "@oikos/ui/components/button";
import { cn } from "@oikos/ui/lib/cn";

export function Hero() {
  return (
    <section
      className={cn(
        "flex flex-col gap-10 pt-16",
        "mx-auto w-full max-w-[calc(var(--layout-width)+(var(--layout-padding)*2))]",
        "h-[calc(100dvh-var(--header-height))]",
        "border-x-hairline border-current/10",
      )}
    >
      <div
        className={cn(
          "relative w-full px-(--layout-padding)",
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

      <div className="flex flex-wrap justify-center gap-2 px-(--layout-padding)">
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
