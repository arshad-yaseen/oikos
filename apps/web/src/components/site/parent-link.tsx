"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type ParentLinkProps = Omit<ComponentProps<typeof Link>, "href">;

function parentPath(pathname: string): Route {
  // Every parent of a page here is a page or redirects to one, which `Route` cannot prove.
  return (pathname.slice(0, pathname.lastIndexOf("/")) || "/") as Route;
}

/** Links one path segment up from the current page, so each click walks toward home. */
export function ParentLink(props: ParentLinkProps) {
  const pathname = usePathname();

  return <Link href={parentPath(pathname)} {...props} />;
}
