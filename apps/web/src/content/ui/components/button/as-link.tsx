import Link from "next/link";
import { Button } from "@oikos/ui/components/button";
import { Icon } from "@oikos/ui/components/icon";
import { Route } from "next";

export function AsLink() {
  return (
    <Button color="neutral" render={<Link href={"/ui" as Route} />}>
      Introduction
      <Icon name="ArrowUpRight" />
    </Button>
  );
}
