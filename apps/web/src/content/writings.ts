import { dataOrientedDesignInYukusParser } from "@/content/writings/data-oriented-design-in-yukus-parser";
import { byDate } from "@/lib/by-date";
import type { DatedArticle } from "@/types/article";

export const writings: DatedArticle[] = [dataOrientedDesignInYukusParser].toSorted(byDate);
