import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { HeroSection, PageSection } from "@/components/campaign-ui";
import { getArticleBySlug, newsArticles } from "@/lib/content";

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/news/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function NewsArticlePage(props: PageProps<"/news/[slug]">) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <HeroSection
        imageSrc="/editorial-placeholder.svg"
        imageAlt="Campaign article graphic"
        eyebrow={article.category}
        title={article.title}
        description={`${article.date} · ${article.readTime} · ${article.summary}`}
      />

      <PageSection tone="paper">
        <article className="mx-auto grid max-w-4xl gap-7 font-serif text-xl leading-10 text-foreground/90">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </PageSection>

      <PageSection tone="muted">
        <div className="campaign-card flex flex-col gap-4 p-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="campaign-kicker">Next Step</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Keep up with the campaign or join the volunteer team.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="campaign-button-primary h-12 px-6 text-sm uppercase tracking-[0.18em]">
              <Link href="/volunteer">Volunteer</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-6 text-sm uppercase tracking-[0.18em]">
              <Link href="/news">Back to News</Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </>
  );
}
