import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageSection } from "@/components/campaign-ui";
import { candidateProfile, newsPageContent } from "@/lib/content";
import { getAllNewsArticles } from "@/lib/news";

export const metadata: Metadata = {
  title: newsPageContent.metadataTitle,
  description: newsPageContent.metadataDescription,
};

const ARTICLES_PER_PAGE = 3;

function clampPage(page: number, totalPages: number) {
  if (Number.isNaN(page) || page < 1) {
    return 1;
  }

  return Math.min(page, totalPages);
}

export default async function NewsPage(props: PageProps<"/news">) {
  const searchParams = await props.searchParams;
  const newsArticles = await getAllNewsArticles();
  const featuredArticle = newsArticles[0];
  const paginatedArticles = newsArticles.slice(1);
  const totalPages = Math.max(1, Math.ceil(paginatedArticles.length / ARTICLES_PER_PAGE));
  const currentPage = clampPage(Number(searchParams.page ?? "1"), totalPages);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const visibleArticles = paginatedArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <>
      <PageSection tone="paper" className="pb-10 pt-20 sm:pt-24 lg:pt-28">
        <header className="mb-16">
          <div className="mb-6 h-1 w-24 bg-tertiary" />
          <h1 className="text-6xl font-black uppercase leading-none tracking-[-0.06em] text-foreground sm:text-7xl lg:text-8xl">
            {newsPageContent.heroTitle}
          </h1>
          <p className="mt-5 max-w-3xl border-l-4 border-surface-container-high pl-6 font-serif text-xl italic leading-8 text-muted-foreground sm:text-2xl">
            {newsPageContent.heroDescription}
          </p>
        </header>

        {featuredArticle ? (
          <>
            <section className="mb-24 grid gap-0 lg:grid-cols-12">
              <div className="group relative z-10 overflow-hidden rounded-lg shadow-2xl lg:col-span-8">
                <Link href={`/news/${featuredArticle.slug}`} className="block">
                  <div
                    className="h-[420px] w-full bg-[linear-gradient(135deg,rgba(190,0,20,0.88),rgba(64,92,158,0.82))] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={
                      featuredArticle.image
                        ? {
                            backgroundImage: `linear-gradient(135deg,rgba(25,28,29,0.45),rgba(25,28,29,0.2)), url(${featuredArticle.image})`,
                          }
                        : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <span className="mb-4 inline-block bg-primary px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
                      {featuredArticle.category}
                    </span>
                    <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
                      {featuredArticle.title}
                    </h2>
                  </div>
                </Link>
              </div>
              <div className="relative z-20 rounded-lg bg-surface-container-lowest p-10 shadow-xl lg:-ml-12 lg:col-span-5 lg:mt-24">
                <div className="mb-6 flex items-center gap-4 text-muted-foreground">
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    {featuredArticle.date}
                  </span>
                  <span className="h-px w-8 bg-outline-variant" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    {featuredArticle.readTime}
                  </span>
                </div>
                <p className="mb-8 text-lg leading-8 text-foreground/85">{featuredArticle.summary}</p>
                <Link
                  href={`/news/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary"
                >
                  {newsPageContent.featuredReadLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </section>

            <section className="space-y-12">
              <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
                {visibleArticles.map((article, index) => (
                  <article
                    key={article.slug}
                    className={
                      index === 1
                        ? "flex h-full flex-col rounded-lg border-t-4 border-tertiary bg-surface-container-low p-8"
                        : "flex flex-col gap-6"
                    }
                  >
                    {index === 1 ? null : (
                      <Link
                        href={`/news/${article.slug}`}
                        className="group aspect-[4/3] overflow-hidden rounded-lg bg-surface-container-low bg-cover bg-center"
                        style={
                          article.image
                            ? {
                                backgroundImage: `linear-gradient(135deg,rgba(25,28,29,0.35),rgba(25,28,29,0.15)), url(${article.image})`,
                              }
                            : undefined
                        }
                      >
                        <div className="h-full w-full bg-[linear-gradient(135deg,rgba(64,92,158,0.78),rgba(190,0,20,0.48))] transition-transform duration-500 group-hover:scale-110" />
                      </Link>
                    )}

                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                          {article.category}
                        </span>
                      </div>
                      <h3
                        className={
                          index === 1
                            ? "mb-4 text-2xl font-bold leading-tight italic text-foreground"
                            : "mb-3 text-2xl font-bold leading-tight text-foreground transition-colors hover:text-primary"
                        }
                      >
                        <Link href={`/news/${article.slug}`}>{article.title}</Link>
                      </h3>
                      <p className="mb-4 line-clamp-3 text-muted-foreground">{article.summary}</p>
                      <time className="text-xs font-bold uppercase tracking-[0.18em] text-outline">
                        {article.date}
                      </time>
                    </div>
                  </article>
                ))}
              </div>

              <nav className="flex items-center justify-center gap-3">
                <Link
                  href={currentPage > 1 ? `/news?page=${currentPage - 1}` : "/news"}
                  aria-disabled={currentPage === 1}
                  className={`rounded-full p-3 transition-colors ${
                    currentPage === 1
                      ? "pointer-events-none text-outline"
                      : "hover:bg-surface-container-high text-foreground"
                  }`}
                >
                  <ChevronLeft className="size-5" />
                </Link>

                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  const href = page === 1 ? "/news" : `/news?page=${page}`;

                  return (
                    <Link
                      key={page}
                      href={href}
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${
                        page === currentPage
                          ? "bg-primary text-white"
                          : "text-muted-foreground hover:bg-surface-container-high"
                      }`}
                    >
                      {page}
                    </Link>
                  );
                })}

                <Link
                  href={currentPage < totalPages ? `/news?page=${currentPage + 1}` : `/news?page=${totalPages}`}
                  aria-disabled={currentPage === totalPages}
                  className={`rounded-full p-3 transition-colors ${
                    currentPage === totalPages
                      ? "pointer-events-none text-outline"
                      : "hover:bg-surface-container-high text-foreground"
                  }`}
                >
                  <ChevronRight className="size-5" />
                </Link>
              </nav>
            </section>
          </>
        ) : (
          <section className="campaign-card p-10">
            <h2 className="text-4xl font-bold tracking-tight text-foreground">
              {newsPageContent.emptyStateTitle}
            </h2>
            <p className="mt-4 max-w-3xl font-serif text-xl leading-8 text-muted-foreground">
              {newsPageContent.emptyStateDescription}
            </p>
          </section>
        )}
      </PageSection>

      <PageSection tone="muted" className="pt-0">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-lg bg-secondary p-12 text-white shadow-2xl md:flex md:items-center md:gap-8">
            <div className="absolute -right-24 -top-24 size-64 rounded-full bg-white/5" />
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl font-bold">{newsPageContent.briefingTitle}</h2>
              <p className="mt-2 max-w-md text-secondary-fixed/80">
                {newsPageContent.briefingDescription}
              </p>
            </div>
            <div className="relative z-10 mt-8 w-full max-w-sm flex-1 md:mt-0">
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder={newsPageContent.briefingEmailPlaceholder}
                  className="rounded-lg border border-white/20 bg-white/10 p-4 text-xs font-bold tracking-[0.18em] text-white placeholder:text-white/40 focus:border-primary focus:outline-none"
                />
                <Button className="campaign-button-primary h-12 text-xs uppercase tracking-[0.18em] text-white">
                  {newsPageContent.briefingButtonLabel}
                </Button>
              </form>
            </div>
          </div>

          <aside className="flex flex-col justify-between rounded-lg border-l-4 border-secondary bg-surface-container-high p-8">
            <div>
              <h3 className="text-xl font-bold text-foreground">{newsPageContent.overviewTitle}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {candidateProfile.coreMessage}
              </p>
            </div>
            <Button asChild variant="outline" className="mt-8 h-11 text-xs uppercase tracking-[0.18em]">
              <Link href="/about">{newsPageContent.overviewButtonLabel}</Link>
            </Button>
          </aside>
        </section>
      </PageSection>
    </>
  );
}
