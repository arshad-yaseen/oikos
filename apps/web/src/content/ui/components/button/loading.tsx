import { Button } from "@arshad.fyi/ui/components/button";
import { Diffusion } from "@arshad.fyi/ui/components/dot-matrix/diffusion";

export function Loading() {
  return (
    <Button variant="outline" disabled>
      <Diffusion />
      Generating…
    </Button>
  );
}
