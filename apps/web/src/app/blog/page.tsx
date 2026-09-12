import type { Metadata } from "next";
import { PostList } from "@/components/blog/post-list";
import { posts } from "@/content/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Blog",
  path: "/blog",
});

export default function BlogPage() {
  return <PostList posts={posts} />;
}
