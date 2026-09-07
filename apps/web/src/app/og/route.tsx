import { ImageResponse } from "next/og";
import { OgImage } from "@/components/og-image";
import { og } from "@/config/og";
import { site } from "@/config/site";
import { loadOgFonts } from "@arshad.fyi/ui/lib/load-og-fonts";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? site.name;
  const subtitle = searchParams.get("subtitle") ?? undefined;

  return new ImageResponse(<OgImage title={title} subtitle={subtitle} />, {
    ...og.size,
    fonts: await loadOgFonts(),
    // The URL names the content, so a given URL never needs to change.
    headers: { "Cache-Control": "public, max-age=31536000, immutable" },
  });
}
