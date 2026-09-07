import type { PropsWithChildren } from "react";
import { Pagination } from "@/components/pagination";
import { Sidebar } from "@/components/sidebar";
import { ui } from "@/content/ui";

export default function UiLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full px-(--layout-padding) [--sidebar-width:--spacing(56)]">
      <div className="mx-auto flex max-w-(--layout-width)">
        <Sidebar nav={ui.nav} />
        <main className="min-w-0 flex-1 pt-8 pb-32 md:pl-6">
          <article className="flex flex-col gap-6">{children}</article>
          <Pagination nav={ui.nav} />
        </main>
      </div>
    </div>
  );
}
