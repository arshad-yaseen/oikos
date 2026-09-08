"use client";

import { useTheme } from "@basis/ui/hooks/use-theme";
import { Button } from "@basis/ui/components/button";
import { Icon } from "@basis/ui/components/icon";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function handleClick() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button variant="plain" color="neutral" aria-label="Toggle theme" onClick={handleClick}>
      <Icon name="Moon" className="dark:hidden" />
      <Icon name="Sun" className="hidden dark:block" />
    </Button>
  );
}
