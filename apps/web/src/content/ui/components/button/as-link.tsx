import Link from "next/link";
import { Button } from "@arshad.fyi/ui/components/button";
import { Icon } from "@arshad.fyi/ui/components/icon";

export function AsLink() {
  return (
    <Button color="neutral" render={<Link href="/ui" />}>
      Introduction
      <Icon name="ArrowUpRight" />
    </Button>
  );
}
