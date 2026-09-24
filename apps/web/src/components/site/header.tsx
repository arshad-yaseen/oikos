"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/site/logo";
import { site } from "@/lib/site";
import { Button } from "@oikos/ui/components/button";
import { Icon } from "@oikos/ui/components/icon";
import { ThemeToggle } from "@oikos/ui/components/theme-toggle";
import { cn } from "@oikos/ui/lib/cn";

function parentPath(pathname: string): Route {
  return (pathname.slice(0, pathname.lastIndexOf("/")) || "/") as Route;
}

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-10 border-b-hairline border-current/10 bg-background">
      <div
        className={cn(
          "mx-auto flex h-(--header-height) items-center justify-between",
          "max-w-[calc(var(--layout-width)+var(--layout-padding)*2)] px-(--layout-padding)",
          "border-x-hairline",
          isHome ? "border-current/10" : "border-transparent",
        )}
      >
        <Link href={parentPath(pathname)} aria-label={site.name} className="shrink-0">
          <Logo className="h-6" />
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            color="neutral"
            className="rounded-full"
            render={<a href={site.repository} target="_blank" rel="noreferrer" />}
          >
            GitHub
            <Icon name="ArrowUpRight" />
          </Button>
          <ThemeToggle className="rounded-full" />
        </div>
      </div>
    </header>
  );
}
