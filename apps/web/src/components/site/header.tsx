import { Logo } from "@/components/site/logo";
import { ParentLink } from "@/components/site/parent-link";
import { site } from "@/lib/site";
import { ThemeToggle } from "@oikos/ui/components/theme-toggle";
import { cn } from "@oikos/ui/lib/cn";

export function Header() {
  return (
    <header
      className={cn(
        "sticky top-0 z-10 px-(--layout-padding)",
        "border-b-hairline border-current/10 bg-background",
      )}
    >
      <div className="mx-auto flex h-(--header-height) max-w-(--layout-width) items-center justify-between">
        <ParentLink aria-label={site.name} className="shrink-0">
          <Logo className="h-6" />
        </ParentLink>
        <ThemeToggle className="rounded-full" />
      </div>
    </header>
  );
}
