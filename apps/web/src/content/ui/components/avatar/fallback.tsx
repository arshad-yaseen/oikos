import { Avatar } from "@oikos/ui/components/avatar";

export function Fallback() {
  return (
    <Avatar.Root>
      <Avatar.Image src="data:," alt="Noah Pierre" />
      <Avatar.Fallback>NP</Avatar.Fallback>
    </Avatar.Root>
  );
}
