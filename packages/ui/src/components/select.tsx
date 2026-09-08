import { Select as SelectPrimitive } from "@base-ui/react/select";
import { Group } from "@basis/ui/components/select/group";
import { GroupLabel } from "@basis/ui/components/select/group-label";
import { Icon } from "@basis/ui/components/select/icon";
import { Item } from "@basis/ui/components/select/item";
import { ItemDescription } from "@basis/ui/components/select/item-description";
import { ItemIndicator } from "@basis/ui/components/select/item-indicator";
import { ItemText } from "@basis/ui/components/select/item-text";
import { Label } from "@basis/ui/components/select/label";
import { List } from "@basis/ui/components/select/list";
import { Popup } from "@basis/ui/components/select/popup";
import { ScrollDownArrow, ScrollUpArrow } from "@basis/ui/components/select/scroll-arrows";
import { Separator } from "@basis/ui/components/select/separator";
import { Trigger } from "@basis/ui/components/select/trigger";
import { Value } from "@basis/ui/components/select/value";

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
