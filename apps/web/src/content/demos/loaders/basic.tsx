import { Bloom } from "@arshad.fyi/ui/components/dot-matrix/bloom";
import { Helix } from "@arshad.fyi/ui/components/dot-matrix/helix";
import { Orbit } from "@arshad.fyi/ui/components/dot-matrix/orbit";
import { Ripple } from "@arshad.fyi/ui/components/dot-matrix/ripple";

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
