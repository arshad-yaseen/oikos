import type { Metadata } from "next";
import { WritingsList } from "@/components/writing/writings-list";
import { writings } from "@/content/writings";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Writings",
  path: "/writings",
});

export default function WritingsPage() {
  return <WritingsList writings={writings} />;
}
