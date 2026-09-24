import type { Route } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Button } from "@oikos/ui/components/button";
import { cn } from "@oikos/ui/lib/cn";

export function Hero() {
  return (
    <section
      className={cn(
        "mx-auto grid max-w-(--layout-width) gap-8 pt-16 sm:pt-24",
        "md:grid-cols-2 md:gap-x-12",
      )}
    >
      <h1
        className={cn(
          "text-4xl/12 font-normal tracking-tighter text-balance sm:text-5xl/16",
          "[text-box:trim-both_cap_alphabetic]",
        )}
      >
        Where every project starts.
      </h1>

      <div className="flex flex-col items-start gap-10 md:items-end md:justify-between md:gap-4">
        <p
          className={cn(
            "max-w-sm text-base text-pretty md:text-right",
            "[text-box:trim-both_cap_alphabetic]",
            "text-neutral-600 dark:text-neutral-400",
          )}
        >
          {site.description}
        </p>

        <Button className="rounded-full" size="lg" render={<Link href={"/ui" as Route} />}>
          Explore UI
        </Button>
      </div>
    </section>
  );
}
