import { Hero } from "@/components/home/hero";
import { JsonLd } from "@/components/site/json-ld";
import { websiteJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <main className="px-(--layout-padding)">
      <JsonLd schema={websiteJsonLd()} />
      <Hero />
    </main>
  );
}
