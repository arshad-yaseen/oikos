import type { ComponentProps } from "react";
import { cn } from "@oikos/ui/lib/cn";

export type SelectItemDescriptionProps = ComponentProps<"div">;

export function ItemDescription({ className, ...props }: SelectItemDescriptionProps) {
  return (
    <div
      data-slot="select-item-description"
      className={cn(
        "col-start-2 -mt-0.5 min-w-0 truncate pb-0.5",
        "text-xs text-neutral-500 dark:text-neutral-400",
        className,
      )}
      {...props}
    />
  );
}
