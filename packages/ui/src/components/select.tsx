import { Select as SelectPrimitive } from "@base-ui/react/select";
import { Group } from "@arshad.fyi/ui/components/select/group";
import { GroupLabel } from "@arshad.fyi/ui/components/select/group-label";
import { Icon } from "@arshad.fyi/ui/components/select/icon";
import { Item } from "@arshad.fyi/ui/components/select/item";
import { ItemDescription } from "@arshad.fyi/ui/components/select/item-description";
import { ItemIndicator } from "@arshad.fyi/ui/components/select/item-indicator";
import { ItemText } from "@arshad.fyi/ui/components/select/item-text";
import { Label } from "@arshad.fyi/ui/components/select/label";
import { List } from "@arshad.fyi/ui/components/select/list";
import { Popup } from "@arshad.fyi/ui/components/select/popup";
import { ScrollDownArrow, ScrollUpArrow } from "@arshad.fyi/ui/components/select/scroll-arrows";
import { Separator } from "@arshad.fyi/ui/components/select/separator";
import { Trigger } from "@arshad.fyi/ui/components/select/trigger";
import { Value } from "@arshad.fyi/ui/components/select/value";

export type SelectProps<
  Value,
  Multiple extends boolean | undefined = false,
> = SelectPrimitive.Root.Props<Value, Multiple>;

export const Select = {
  Root: SelectPrimitive.Root,
  Label,
  Trigger,
  Value,
  Icon,
  Popup,
  List,
  Item,
  ItemIndicator,
  ItemText,
  ItemDescription,
  Group,
  GroupLabel,
  Separator,
  ScrollUpArrow,
  ScrollDownArrow,
};
