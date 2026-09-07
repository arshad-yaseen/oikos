import { notFound, redirect } from "next/navigation";
import { ui } from "@/content/ui";

type SectionPageProps = {
  params: Promise<{ section: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return ui.sections.map((section) => ({ section: section.slug }));
}

export default async function SectionPage({ params }: SectionPageProps) {
  const { section } = await params;
  const first = ui.sections.find((entry) => entry.slug === section)?.articles[0];

  if (!first) {
    notFound();
  }

  redirect(`/ui/${section}/${first.slug}`);
}
