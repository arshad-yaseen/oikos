"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/site/logo";
import { site } from "@/lib/site";
import { ThemeToggle } from "@oikos/ui/components/theme-toggle";
import { cn } from "@oikos/ui/lib/cn";

function parentPath(pathname: string): Route {
  return (pathname.slice(0, pathname.lastIndexOf("/")) || "/") as Route;
}

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "sticky top-0 z-10 px-(--layout-padding)",
        "border-b-hairline border-transparent",
        "border-current/10 bg-background",
      )}
    >
      <div className="mx-auto flex h-(--header-height) max-w-(--layout-width) items-center justify-between">
        <Link href={parentPath(pathname)} aria-label={site.name} className="shrink-0">
          <Logo className="h-6" />
        </Link>
        <ThemeToggle className="rounded-full" />
      </div>
    </header>
  );
}
