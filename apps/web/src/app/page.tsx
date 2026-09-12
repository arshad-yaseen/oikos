import { Hero } from "@/components/home/hero";
import { JsonLd } from "@/components/site/json-ld";
import { websiteJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    // The hero's rules span the viewport, and 100vw includes the scrollbar, so clip the overflow.
    <main className="overflow-x-clip px-(--layout-padding)">
      <JsonLd schema={websiteJsonLd()} />
      <Hero />
    </main>
  );
}
