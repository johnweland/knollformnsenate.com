import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  CampaignDivider,
  PageSection,
  SplitHeroSection,
} from "@/components/campaign-ui";
import {
  candidateProfile,
  issues,
  issuesOverview,
  issuesPageContent,
} from "@/lib/content";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: issuesPageContent.metadataTitle,
  description: issuesOverview,
  pathname: "/issues",
  image: issuesPageContent.heroImageSrc,
});

export default function IssuesPage() {
  return (
    <>
      <SplitHeroSection
        imageSrc={issuesPageContent.heroImageSrc}
        imageAlt={issuesPageContent.heroImageAlt}
        eyebrow={issuesPageContent.heroKicker}
        title={`${issuesPageContent.heroTitleStart} ${issuesPageContent.heroTitleHighlight}`}
        description={issuesOverview}
      />
      <CampaignDivider />

      <div className="space-y-24">
        {issues.map((issue, index) => (
          <PageSection
            key={issue.slug}
            tone={index % 2 === 0 ? "muted" : "paper"}
          >
            <section className="grid gap-16 md:grid-cols-12 md:items-start">
              <div className="md:col-span-5">
                <div className="relative overflow-hidden rounded-xl bg-surface-container-high p-10 shadow-xl bg-white">
                  <p className="campaign-kicker">{issue.eyebrow}</p>
                  <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-foreground sm:text-5xl">
                    {issue.title}
                  </h2>
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="font-serif text-xl leading-relaxed text-muted-foreground">
                  {issue.summary}
                </p>
                <div className="mt-8 rounded-lg border-[3px] border-primary bg-white p-8">
                  <h3 className="text-2xl font-black tracking-tight text-foreground">
                    {issuesPageContent.focusAreasTitle}
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {issue.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 size-5 text-primary" />
                        <span className="leading-7 text-muted-foreground">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </PageSection>
        ))}
      </div>
      <CampaignDivider />

      <PageSection tone="paper" className="pt-0">
        <section className="mx-auto max-w-5xl text-center">
          <div className="relative overflow-hidden rounded-2xl bg-secondary p-16 shadow-2xl">
            <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] [background-size:40px_40px]" />
            <div className="relative z-10">
              <h2 className="text-4xl font-black text-white sm:text-5xl">
                {issuesPageContent.ctaTitle}
              </h2>
              <p className="mx-auto mt-6 max-w-3xl font-serif text-xl leading-8 text-white/85">
                {candidateProfile.coreMessage}
              </p>
              <div className="mt-10 flex flex-col justify-center gap-6 sm:flex-row">
                <Button
                  asChild
                  className="campaign-button-primary h-12 px-6 text-lg tracking-wide text-white"
                >
                  <Link href={issuesPageContent.ctaPrimaryCtaHref}>
                    {issuesPageContent.ctaPrimaryCtaLabel}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  className="h-12 bg-white px-6 text-lg tracking-wide text-secondary hover:bg-surface-bright"
                >
                  <Link href={issuesPageContent.ctaSecondaryCtaHref}>
                    {issuesPageContent.ctaSecondaryCtaLabel}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </PageSection>
    </>
  );
}
