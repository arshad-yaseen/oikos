import { Bloom } from "@oikos/ui/components/dot-matrix/bloom";
import { Helix } from "@oikos/ui/components/dot-matrix/helix";
import { Orbit } from "@oikos/ui/components/dot-matrix/orbit";
import { Ripple } from "@oikos/ui/components/dot-matrix/ripple";

export function Basic() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12">
      <Orbit />
      <Ripple />
      <Bloom />
      <Helix />
    </div>
  );
}
