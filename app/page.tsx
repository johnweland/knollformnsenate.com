import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CampaignDivider,
  PageSection,
  PageTitle,
  SplitHeroSection,
} from "@/components/campaign-ui";
import {
  candidateProfile,
  homePageContent,
  issues,
  issuesOverview,
} from "@/lib/content";
import { getAllNewsArticles } from "@/lib/news";

export const metadata: Metadata = {
  title: homePageContent.metadataTitle,
  description:
    `${candidateProfile.hero.headline}. ${candidateProfile.hero.subheadline}`,
};

export default async function HomePage() {
  const featuredNews = (await getAllNewsArticles()).slice(0, 3);
  const [dispatchLead, ...dispatchSidebars] = featuredNews;

  return (
    <>
      <SplitHeroSection
        imageSrc={homePageContent.heroImageSrc}
        imageAlt={homePageContent.heroImageAlt}
        eyebrow={candidateProfile.race}
        title={candidateProfile.hero.headline}
        description={candidateProfile.hero.subheadline}
        actions={
          <>
            <Button asChild size="lg" className="campaign-button-primary h-12 px-6 text-sm uppercase tracking-[0.18em]">
              <Link href={homePageContent.heroPrimaryCtaHref}>
                {homePageContent.heroPrimaryCtaLabel}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="h-12 bg-secondary px-6 text-sm uppercase tracking-[0.18em] text-secondary-foreground"
            >
              <Link href={homePageContent.heroSecondaryCtaHref}>
                {homePageContent.heroSecondaryCtaLabel}
              </Link>
            </Button>
          </>
        }
      />
      <CampaignDivider />

      <PageSection tone="paper">
        <div className="space-y-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="campaign-kicker">{homePageContent.platformKicker}</p>
              <h2 className="font-sans text-4xl font-black tracking-[-0.04em] text-foreground sm:text-5xl">
                {homePageContent.platformTitle}
              </h2>
            </div>
            <p className="max-w-sm font-serif text-xl italic leading-8 text-muted-foreground">
              {issuesOverview}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {issues.slice(0, 3).map((issue) => (
              <article
                key={issue.slug}
                className="campaign-card group flex h-full flex-col justify-between p-10 transition-transform duration-300 hover:-translate-y-2"
              >
                <div>
                  <p className="campaign-kicker">{issue.eyebrow}</p>
                  <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground">
                    {issue.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    {issue.summary}
                  </p>
                </div>
                <Link
                  href="/issues"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-all group-hover:gap-4"
                >
                  {homePageContent.issueCtaLabel}
                  <ChevronRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </PageSection>
      <CampaignDivider />

      <PageSection tone="paper">
        <div className="space-y-12">
          <div className="flex flex-col gap-4 border-b-4 border-primary pb-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-sans text-4xl font-black uppercase tracking-[-0.04em] text-foreground sm:text-5xl">
              {homePageContent.dispatchTitle}
            </h2>
            <Link
              href="/news"
              className="text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              {homePageContent.dispatchArchiveLabel}
            </Link>
          </div>

          {dispatchLead ? (
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              <article className="group space-y-6">
                <Link
                  href={`/news/${dispatchLead.slug}`}
                  className="block overflow-hidden rounded-lg bg-muted shadow-lg"
                >
                  <div
                    className="aspect-[16/9] bg-[linear-gradient(135deg,rgba(190,0,20,0.88),rgba(64,92,158,0.82))] bg-cover bg-center"
                    style={
                      dispatchLead.image
                        ? {
                            backgroundImage: `linear-gradient(135deg,rgba(25,28,29,0.45),rgba(25,28,29,0.2)), url(${dispatchLead.image})`,
                          }
                        : undefined
                    }
                  />
                </Link>
                <div className="space-y-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                    {dispatchLead.category} - {dispatchLead.date}
                  </p>
                  <h3 className="text-3xl font-black tracking-[-0.03em] text-foreground transition-colors group-hover:text-primary sm:text-4xl">
                    <Link href={`/news/${dispatchLead.slug}`}>{dispatchLead.title}</Link>
                  </h3>
                  <p className="text-xl leading-8 text-muted-foreground">
                    {dispatchLead.summary}
                  </p>
                  <Link
                    href={`/news/${dispatchLead.slug}`}
                    className="inline-flex items-center gap-2 border-b border-primary pb-1 text-sm font-bold uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
                  >
                    {homePageContent.dispatchReadLabel}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </article>

              <div className="space-y-8">
                {dispatchSidebars.map((article) => (
                  <article key={article.slug} className="group flex gap-5">
                    <Link
                      href={`/news/${article.slug}`}
                      className="block h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-[linear-gradient(135deg,rgba(64,92,158,0.88),rgba(190,0,20,0.72))] bg-cover bg-center"
                      style={
                        article.image
                          ? {
                              backgroundImage: `linear-gradient(135deg,rgba(25,28,29,0.35),rgba(25,28,29,0.15)), url(${article.image})`,
                            }
                          : undefined
                      }
                    />
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                        {article.category}
                      </p>
                      <h4 className="text-xl font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary">
                        <Link href={`/news/${article.slug}`}>{article.title}</Link>
                      </h4>
                      <p className="line-clamp-2 leading-7 text-muted-foreground">
                        {article.summary}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ) : (
            <div className="campaign-card p-10">
              <h3 className="text-3xl font-black tracking-[-0.03em] text-foreground">
                {homePageContent.emptyNewsTitle}
              </h3>
              <p className="mt-4 max-w-2xl text-xl leading-8 text-muted-foreground">
                {homePageContent.emptyNewsDescription}
              </p>
            </div>
          )}
        </div>
      </PageSection>
      <CampaignDivider />

      <PageSection tone="muted">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <PageTitle
            eyebrow={homePageContent.volunteerEyebrow}
            title={homePageContent.volunteerTitle}
            description={homePageContent.volunteerDescription}
          />
          <div className="campaign-card flex flex-col gap-5 p-8">
            <p className="text-base leading-7 text-muted-foreground">
              {homePageContent.volunteerBody}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="campaign-button-primary h-12 px-6 text-sm uppercase tracking-[0.18em]">
                <Link href={homePageContent.volunteerPrimaryCtaHref}>
                  {homePageContent.volunteerPrimaryCtaLabel}
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-6 text-sm uppercase tracking-[0.18em]">
                <Link href={homePageContent.volunteerSecondaryCtaHref}>
                  {homePageContent.volunteerSecondaryCtaLabel}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
