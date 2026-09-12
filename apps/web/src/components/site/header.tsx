"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import { Logo } from "@/components/site/logo";
import { site } from "@/lib/site";
import { Button } from "@oikos/ui/components/button";
import { Icon } from "@oikos/ui/components/icon";
import { ThemeToggle } from "@oikos/ui/components/theme-toggle";
import { cn } from "@oikos/ui/lib/cn";

/** One path segment up from the current page, so each logo click walks toward home. */
function parentPath(pathname: string): Route {
  return (pathname.slice(0, pathname.lastIndexOf("/")) || "/") as Route;
}

function subscribeToScroll(onChange: () => void): () => void {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const isScrolledNow = (): boolean => window.scrollY > 0;
const isScrolledOnServer = (): boolean => false;

export function Header() {
  const pathname = usePathname();
  const isScrolled = useSyncExternalStore(subscribeToScroll, isScrolledNow, isScrolledOnServer);

  return (
    <header
      data-scrolled={isScrolled || undefined}
      className={cn(
        "sticky top-0 z-10 px-(--layout-padding)",
        "border-b-hairline border-transparent",
        "data-scrolled:border-current/10 data-scrolled:bg-background",
      )}
    >
      <div className="mx-auto flex h-(--header-height) max-w-(--layout-width) items-center justify-between">
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
