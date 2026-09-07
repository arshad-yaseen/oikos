import type { PropsWithChildren } from "react";
import { Pagination } from "@/components/book/pagination";
import { Sidebar } from "@/components/book/sidebar";
import { ui } from "@/content/ui";
import { nav, pages } from "@/lib/content";

export default function UiLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full px-(--layout-padding) [--sidebar-width:--spacing(56)]">
      <div className="mx-auto flex max-w-(--layout-width)">
        <Sidebar nav={nav(ui)} />
        <main className="min-w-0 flex-1 pt-8 pb-32 md:pl-6">
          <article className="flex flex-col gap-6">{children}</article>
          <Pagination pages={pages(ui)} />
        </main>
      </div>
    </div>
  );
}
