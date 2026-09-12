import { Select as SelectPrimitive } from "@base-ui/react/select";
import { Group } from "@oikos/ui/components/select/group";
import { GroupLabel } from "@oikos/ui/components/select/group-label";
import { Icon } from "@oikos/ui/components/select/icon";
import { Item } from "@oikos/ui/components/select/item";
import { ItemDescription } from "@oikos/ui/components/select/item-description";
import { ItemIndicator } from "@oikos/ui/components/select/item-indicator";
import { ItemText } from "@oikos/ui/components/select/item-text";
import { Label } from "@oikos/ui/components/select/label";
import { List } from "@oikos/ui/components/select/list";
import { Popup } from "@oikos/ui/components/select/popup";
import { ScrollDownArrow, ScrollUpArrow } from "@oikos/ui/components/select/scroll-arrows";
import { Separator } from "@oikos/ui/components/select/separator";
import { Trigger } from "@oikos/ui/components/select/trigger";
import { Value } from "@oikos/ui/components/select/value";

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
