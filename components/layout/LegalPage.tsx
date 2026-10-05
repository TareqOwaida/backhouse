import { Container } from "@/components/layout/Container";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { formatDate } from "@/lib/content/articles";
import type { ArticleBlock } from "@/types";

type LegalPageProps = {
  title: string;
  updated: string;
  intro: string;
  blocks: ArticleBlock[];
};

export function LegalPage({ title, updated, intro, blocks }: LegalPageProps) {
  return (
    <Container width="narrow" className="pt-14 pb-20 sm:pt-20 sm:pb-24">
      <header className="border-b border-ink pb-10">
        <p className="text-label text-muted">
          Last updated <time dateTime={updated}>{formatDate(updated)}</time>
        </p>
        <h1 className="mt-5 text-h1">{title}</h1>
        <p className="mt-6 text-lead text-ink-2">{intro}</p>
      </header>
      <ArticleBody blocks={blocks} className="py-12" />
    </Container>
  );
}
