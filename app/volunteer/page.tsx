import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ClipboardPen, Handshake, Info, PhoneCall } from "lucide-react";

import { NewsletterSignup } from "@/components/newsletter-signup";
import { VolunteerSignupForm } from "@/components/volunteer-signup-form";
import { Button } from "@/components/ui/button";
import { PageSection } from "@/components/campaign-ui";
import { candidateProfile, volunteerPageContent } from "@/lib/content";

export const metadata: Metadata = {
  title: volunteerPageContent.metadataTitle,
  description: volunteerPageContent.metadataDescription,
};

export default function VolunteerPage() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-surface">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,var(--color-surface),rgba(248,249,250,0.82),transparent)]" />
          <div className="h-full w-full bg-[linear-gradient(135deg,rgba(64,92,158,0.45),rgba(190,0,20,0.25))]" />
        </div>
        <div className="campaign-container relative z-20 grid min-h-[760px] grid-cols-12 gap-8 py-16">
          <div className="col-span-12 self-center lg:col-span-7">
            <span className="mb-6 inline-block rounded-sm border-l-4 border-primary bg-secondary-fixed px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-on-secondary-fixed">
              {volunteerPageContent.heroEyebrow}
            </span>
            <h1 className="font-sans text-6xl font-extrabold leading-[0.95] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-8xl">
              {volunteerPageContent.heroTitleLineOne}
              <br />
              <span className="font-serif font-normal italic text-primary">
                {volunteerPageContent.heroTitleLineTwo}
              </span>
            </h1>
            <p className="mt-8 max-w-2xl font-serif text-2xl leading-relaxed text-muted-foreground">
              {candidateProfile.coreMessage}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="campaign-button-primary h-14 px-8 text-lg text-white">
                <Link href={volunteerPageContent.heroPrimaryCtaHref}>
                  {volunteerPageContent.heroPrimaryCtaLabel}
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="h-14 px-8 text-lg font-bold text-secondary hover:bg-secondary-fixed/30"
              >
                <Link href={volunteerPageContent.heroSecondaryCtaHref}>
                  <Info className="size-5" />
                  {volunteerPageContent.heroSecondaryCtaLabel}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-tertiary" />
      </section>

      <PageSection tone="muted" className="border-t border-outline-variant/15" id="mission">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h2 className="text-5xl font-bold tracking-tight text-foreground">
              {volunteerPageContent.missionTitle}
            </h2>
            <div className="mt-8 h-1 w-24 bg-primary" />
            <p className="mt-8 font-serif text-xl leading-relaxed text-muted-foreground">
              {candidateProfile.shortBio}
            </p>
            <div className="mt-12 rounded-xl border border-outline-variant/10 bg-white p-8 shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {volunteerPageContent.focusLabel}
              </h4>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                {candidateProfile.hero.subheadline}
              </p>
            </div>
          </div>

          <div className="space-y-12 lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <article className="rounded-xl bg-white p-10 shadow-sm transition-shadow hover:shadow-md sm:col-span-2">
                <Handshake className="mb-4 size-10 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  {volunteerPageContent.communityOutreachTitle}
                </h3>
                <p className="mt-3 text-lg leading-8 text-muted-foreground">
                  {volunteerPageContent.communityOutreachDescription}
                </p>
              </article>

              <article className="rounded-xl border-t-4 border-secondary bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <PhoneCall className="mb-4 size-8 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">
                  {volunteerPageContent.phoneBankingTitle}
                </h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {volunteerPageContent.phoneBankingDescription}
                </p>
              </article>

              <article className="rounded-xl border-t-4 border-tertiary bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                <ClipboardPen className="mb-4 size-8 text-tertiary" />
                <h3 className="text-xl font-bold text-foreground">
                  {volunteerPageContent.eventsTitle}
                </h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {volunteerPageContent.eventsDescription}
                </p>
              </article>

              <article className="relative h-80 overflow-hidden rounded-xl shadow-xl sm:col-span-2">
                <Image
                  src="/knoll-speaking.webp"
                  alt="Chris Knoll speaking in District 21"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(64,92,158,0.35),rgba(190,0,20,0.18))]" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 to-transparent p-8">
                  <p className="text-xl font-bold text-white">{candidateProfile.race}</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection tone="paper" id="signup">
        <div className="overflow-hidden rounded-2xl bg-surface-container-high shadow-2xl lg:flex lg:min-h-[700px]">
          <div className="relative lg:w-1/3">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(64,92,158,0.86),rgba(25,28,29,0.76))]" />
            <div className="relative z-10 flex h-full flex-col justify-center p-12 text-white">
              <h3 className="text-4xl font-bold">{volunteerPageContent.signupTitle}</h3>
              <p className="mt-6 text-lg leading-8 text-white/88">
                {volunteerPageContent.signupDescription}
              </p>
              <ul className="mt-8 space-y-4 text-sm font-bold uppercase tracking-[0.18em]">
                {volunteerPageContent.signupBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-primary-fixed" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-10 sm:p-16 lg:w-2/3">
            <VolunteerSignupForm />
          </div>
        </div>
      </PageSection>

      <section className="bg-secondary py-16 text-secondary-foreground">
        <div className="campaign-container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {volunteerPageContent.updatesTitle}
            </h2>
            <p className="mt-2 font-serif text-xl text-secondary-fixed/80">
              {volunteerPageContent.updatesDescription}
            </p>
          </div>
          <NewsletterSignup
            source="volunteer-updates"
            emailLabel={volunteerPageContent.formEmailLabel}
            emailPlaceholder={volunteerPageContent.updatesEmailPlaceholder}
            buttonLabel={volunteerPageContent.updatesButtonLabel}
            hideLabel
            className="w-full md:w-auto"
            formClassName="md:grid-cols-[20rem_auto]"
            inputClassName="border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-white"
            buttonClassName="campaign-button-primary h-14 px-8 text-sm font-bold uppercase tracking-[0.18em] text-white"
            messageClassName="text-white"
          />
        </div>
      </section>
    </>
  );
}
