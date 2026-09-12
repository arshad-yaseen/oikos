import { Button } from "@oikos/ui/components/button";
import { Diffusion } from "@oikos/ui/components/dot-matrix/diffusion";

export function Loading() {
  return (
    <Button variant="outline" disabled>
      <Diffusion />
      Generating…
    </Button>
  );
}
