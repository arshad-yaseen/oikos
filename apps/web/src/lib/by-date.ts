type Dated = {
  date?: string;
};

/** Newest first. ISO dates compare correctly as strings. */
export function byDate(a: Dated, b: Dated): number {
  return (b.date ?? "").localeCompare(a.date ?? "");
}
