import { dataOrientedDesignInYukusParser } from "@/content/writings/data-oriented-design-in-yukus-parser";
import type { DatedArticle } from "@/lib/content";
import { byDate } from "@/lib/date";

export const writings: DatedArticle[] = [dataOrientedDesignInYukusParser].toSorted(byDate);
