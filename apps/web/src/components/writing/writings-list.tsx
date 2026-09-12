import type { Route } from "next";
import Link from "next/link";
import { formatDate } from "@/lib/date";
import type { DatedArticle } from "@/lib/content";
import { cn } from "@arshad/ui/lib/cn";

type WritingsListProps = {
  writings: DatedArticle[];
};

export function WritingsList({ writings }: WritingsListProps) {
  return (
    <ul className="flex flex-col gap-7">
      {writings.map((writing) => (
        <li key={writing.slug} className="flex flex-col gap-1">
          <time
            dateTime={writing.date}
            className="text-sm text-neutral-500 tabular-nums dark:text-neutral-400"
          >
            {formatDate(writing.date, { month: "short" })}
          </time>
          {/* Every slug here comes from a content index, which `Route` cannot prove. */}
          <Link
            href={`/writings/${writing.slug}` as Route}
            className={cn(
              "w-fit text-2xl/snug tracking-tight text-pretty",
              "text-accent-500 dark:text-accent-400",
              "hover:text-accent-600 dark:hover:text-accent-300",
              "transition-colors duration-150 motion-reduce:transition-none",
            )}
          >
            {writing.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
