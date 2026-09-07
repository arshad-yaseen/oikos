import Link from "next/link";
import { Button } from "@arshad.fyi/ui/components/button";
import { Icon } from "@arshad.fyi/ui/components/icon";
import { Route } from "next";

export function AsLink() {
  return (
    <Button color="neutral" render={<Link href={"/ui" as Route} />}>
      Introduction
      <Icon name="ArrowUpRight" />
    </Button>
  );
}
