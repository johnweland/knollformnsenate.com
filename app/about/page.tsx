import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Home, Landmark, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageSection, SplitHeroSection } from "@/components/campaign-ui";
import { candidateProfile } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    `Learn more about ${candidateProfile.name}, his background, and his leadership experience in ${candidateProfile.race}.`,
};

export default function AboutPage() {
  return (
    <>
      <SplitHeroSection
        imageSrc="/community-placeholder.svg"
        imageAlt="Chris Knoll campaign community graphic"
        eyebrow={`About ${candidateProfile.name}`}
        title={candidateProfile.name}
        description={candidateProfile.shortBio}
      />

      <PageSection tone="paper">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Background
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-primary" />
        </div>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="campaign-card p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="size-6 text-primary" />
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Candidate Overview
                </h3>
              </div>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                {candidateProfile.longBio}
              </p>
            </div>
            <div className="campaign-card p-8">
              <div className="flex items-center gap-3">
                <Home className="size-6 text-secondary" />
                <h3 className="text-2xl font-bold tracking-tight text-foreground">
                  Home and Family
                </h3>
              </div>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                {candidateProfile.family}
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Residence: {candidateProfile.residence}
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-xl bg-muted shadow-2xl">
              <div className="aspect-video bg-[linear-gradient(135deg,rgba(64,92,158,0.9),rgba(190,0,20,0.75))]" />
            </div>
            <div className="campaign-card mt-6 max-w-xs p-6 lg:absolute lg:-bottom-10 lg:-left-10">
              <h4 className="text-xl font-bold tracking-tight text-foreground">Campaign Focus</h4>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                {candidateProfile.coreMessage}
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection tone="muted">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between mb-14">
          <div className="max-w-2xl">
            <p className="campaign-kicker">The Experience to Lead</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-foreground sm:text-5xl">
              Leadership Experience
            </h2>
          </div>
          <p className="max-w-sm font-serif text-xl italic leading-8 text-muted-foreground">
            Rural healthcare, nonprofit administration, public policy, and community service.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <article className="campaign-card md:col-span-8 p-10">
            <div className="flex items-center gap-3 text-primary">
              <BriefcaseBusiness className="size-7" />
            </div>
            <h3 className="mt-6 text-3xl font-bold tracking-tight text-foreground">
              Leadership Roles
            </h3>
            <div className="mt-6 grid gap-4 border-t border-border/50 pt-8">
              {candidateProfile.professionalDetails.map((detail) => (
                <p key={detail} className="text-lg leading-8 text-muted-foreground">
                  {detail}
                </p>
              ))}
            </div>
          </article>

          <article className="md:col-span-4 rounded-xl bg-secondary p-10 text-secondary-foreground relative overflow-hidden">
            <Landmark className="absolute right-6 top-6 size-28 opacity-10" />
            <h3 className="relative z-10 text-3xl font-bold tracking-tight">District 21</h3>
            <p className="relative z-10 mt-4 text-lg leading-8 text-secondary-foreground/85">
              {candidateProfile.districtContext}
            </p>
            <p className="relative z-10 mt-8 text-sm font-bold uppercase tracking-[0.18em] underline underline-offset-8 decoration-primary-container">
              Southern Minnesota
            </p>
          </article>

          <article className="md:col-span-5 rounded-xl bg-primary p-10 text-primary-foreground">
            <h3 className="text-3xl font-bold tracking-tight text-primary-foreground">
              Home Community
            </h3>
            <p className="mt-4 text-lg leading-8 text-primary-foreground/88">
              {candidateProfile.family}
            </p>
            <div className="mt-8 flex -space-x-2">
              <div className="size-10 rounded-full border-2 border-primary bg-white/80" />
              <div className="size-10 rounded-full border-2 border-primary bg-white/60" />
              <div className="size-10 rounded-full border-2 border-primary bg-white/40" />
            </div>
          </article>

          <article className="campaign-card md:col-span-7 flex flex-col gap-6 p-10 lg:flex-row lg:items-center">
            <div className="hidden size-36 flex-shrink-0 overflow-hidden rounded-full bg-muted lg:block">
              <div className="h-full w-full bg-[linear-gradient(135deg,rgba(190,0,20,0.82),rgba(64,92,158,0.72))]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">
                Campaign Message
              </h3>
              <p className="mt-3 leading-8 text-muted-foreground">
                {candidateProfile.shortBio}
              </p>
            </div>
          </article>
        </div>
      </PageSection>

      <PageSection tone="paper">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-xl bg-muted shadow-2xl">
              <div className="aspect-[16/10] bg-[linear-gradient(135deg,rgba(190,0,20,0.78),rgba(64,92,158,0.72))]" />
            </div>
            <div className="absolute -left-6 -top-6 hidden size-36 rounded-full bg-primary/8 lg:block" />
          </div>
          <div className="campaign-card p-10">
            <p className="campaign-kicker">Values</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
              Core Message
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {candidateProfile.coreMessage}
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection tone="muted">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-14 text-center shadow-2xl sm:px-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_32%)]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="campaign-kicker text-white/85">Get Involved</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Support the campaign in District 21.
            </h2>
            <p className="mt-5 text-xl leading-8 text-white/86">
              Help share Chris Knoll&apos;s message across southern Minnesota.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="h-12 bg-white px-6 text-sm uppercase tracking-[0.18em] text-primary hover:bg-white/90"
              >
                <Link href="/issues">View the Issues</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 border-white/70 bg-transparent px-6 text-sm uppercase tracking-[0.18em] text-white hover:bg-white hover:text-primary"
              >
                <Link href="/volunteer">
                  Volunteer
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </PageSection>
    </>
  );
}
