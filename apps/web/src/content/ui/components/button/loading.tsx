import { Button } from "@basis/ui/components/button";
import { Diffusion } from "@basis/ui/components/dot-matrix/diffusion";

export function Loading() {
  return (
    <Button variant="outline" disabled>
      <Diffusion />
      Generating…
    </Button>
  );
}
