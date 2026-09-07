/** Root-relative, so `metadataBase` resolves it. */
export function ogImageUrl(title: string, subtitle: string): string {
  return `/og?${new URLSearchParams({ title, subtitle })}`;
}
