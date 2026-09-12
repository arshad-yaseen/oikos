"use client";

import { useTheme } from "@oikos/ui/hooks/use-theme";
import { Button, type ButtonProps } from "@oikos/ui/components/button";
import { Icon } from "@oikos/ui/components/icon";

export type ThemeToggleProps = Omit<ButtonProps, "children" | "onClick">;

export function ThemeToggle({
  variant = "plain",
  color = "neutral",
  "aria-label": ariaLabel = "Toggle theme",
  ...props
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  function handleClick() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <Button variant={variant} color={color} aria-label={ariaLabel} onClick={handleClick} {...props}>
      <Icon name="Moon" className="dark:hidden" />
      <Icon name="Sun" className="hidden dark:block" />
    </Button>
  );
}
