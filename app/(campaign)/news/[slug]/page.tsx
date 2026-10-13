import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { HeroSection, PageSection } from "@/components/campaign-ui";
import { newsArticlePageContent } from "@/lib/content";
import { createNewsArticleMetadata, createPageMetadata } from "@/lib/metadata";
import {
  getAllNewsArticles,
  getNewsArticleBySlug,
  parseMarkdownBlocks,
} from "@/lib/news";

export async function generateStaticParams() {
  const newsArticles = await getAllNewsArticles();

  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/news/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) {
    return createPageMetadata({
      title: newsArticlePageContent.notFoundTitle,
      description: "The requested campaign news article could not be found.",
      pathname: "/news",
      image: newsArticlePageContent.heroImageSrc,
    });
  }

  return createNewsArticleMetadata(article);
}

export default async function NewsArticlePage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <HeroSection
        imageSrc={article.image ?? newsArticlePageContent.heroImageSrc}
        imageAlt={newsArticlePageContent.heroImageAlt}
        eyebrow={article.category}
        title={article.title}
        description={`${article.date} · ${article.readTime} · ${article.summary}`}
      />

      <PageSection tone="paper">
        <article className="mx-auto grid max-w-4xl gap-7 font-serif text-xl leading-10 text-foreground/90">
          {parseMarkdownBlocks(article.body).map((block, index) => {
            if (block.type === "heading") {
              const HeadingTag = block.level === 1 ? "h1" : block.level === 2 ? "h2" : "h3";

              return (
                <HeadingTag
                  key={`${block.type}-${index}`}
                  className="font-sans text-3xl font-black tracking-[-0.03em] text-foreground"
                >
                  {block.text}
                </HeadingTag>
              );
            }

            if (block.type === "list") {
              return (
                <ul key={`${block.type}-${index}`} className="list-disc space-y-3 pl-6">
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            if (block.type === "blockquote") {
              return (
                <blockquote
                  key={`${block.type}-${index}`}
                  className="border-l-4 border-primary pl-6 text-2xl italic leading-9 text-foreground"
                >
                  {block.text}
                </blockquote>
              );
            }

            return <p key={`${block.type}-${index}`}>{block.text}</p>;
          })}
        </article>
      </PageSection>

      <PageSection tone="muted">
        <div className="campaign-card flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="campaign-kicker">{newsArticlePageContent.nextStepKicker}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {newsArticlePageContent.nextStepTitle}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="campaign-button-primary h-12 px-6 text-sm uppercase tracking-[0.18em]">
              <Link href={newsArticlePageContent.primaryCtaHref}>
                {newsArticlePageContent.primaryCtaLabel}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 text-sm uppercase tracking-[0.18em]">
              <Link href={newsArticlePageContent.secondaryCtaHref}>
                {newsArticlePageContent.secondaryCtaLabel}
              </Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
