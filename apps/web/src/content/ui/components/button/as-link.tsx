import Link from "next/link";
import { Button } from "@arshad/ui/components/button";
import { Icon } from "@arshad/ui/components/icon";
import { Route } from "next";

export function AsLink() {
  return (
    <Button color="neutral" render={<Link href={"/ui" as Route} />}>
      Introduction
      <Icon name="ArrowUpRight" />
    </Button>
  );
}
