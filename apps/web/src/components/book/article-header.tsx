import { type Article, sourceUrl } from "@/lib/content";
import { Button } from "@arshad.fyi/ui/components/button";
import { P } from "@arshad.fyi/ui/components/prose/paragraph";

type ArticleHeaderProps = {
  article: Pick<Article, "title" | "description" | "source">;
};

export function ArticleHeader({ article }: ArticleHeaderProps) {
  return (
    <>
      <header className="flex items-center justify-between gap-4">
        <h1 className="text-xl font-medium tracking-tight text-balance">{article.title}</h1>
        {article.source && (
          <Button
            variant="plain"
            size="sm"
            className="shrink-0"
            render={<a href={sourceUrl(article.source)} target="_blank" rel="noreferrer" />}
          >
            Source code
          </Button>
        )}
      </header>
      <P>{article.description}</P>
    </>
  );
}
