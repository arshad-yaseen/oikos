import { Hero } from "@/components/hero";
import { JsonLd } from "@/components/json-ld";
import { websiteJsonLd } from "@/lib/website-json-ld";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center overflow-x-clip px-(--layout-padding)">
      <JsonLd schema={websiteJsonLd()} />
      <Hero />
    </main>
  );
}
