import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ClipboardPen, Handshake, Info, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
            <div className="mt-12 rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-8 shadow-sm">
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
              <article className="rounded-xl bg-surface-container-lowest p-10 shadow-sm transition-shadow hover:shadow-md sm:col-span-2">
                <Handshake className="mb-4 size-10 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">
                  {volunteerPageContent.communityOutreachTitle}
                </h3>
                <p className="mt-3 text-lg leading-8 text-muted-foreground">
                  {volunteerPageContent.communityOutreachDescription}
                </p>
              </article>

              <article className="rounded-xl border-t-4 border-secondary bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md">
                <PhoneCall className="mb-4 size-8 text-secondary" />
                <h3 className="text-xl font-bold text-foreground">
                  {volunteerPageContent.phoneBankingTitle}
                </h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {volunteerPageContent.phoneBankingDescription}
                </p>
              </article>

              <article className="rounded-xl border-t-4 border-tertiary bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md">
                <ClipboardPen className="mb-4 size-8 text-tertiary" />
                <h3 className="text-xl font-bold text-foreground">
                  {volunteerPageContent.eventsTitle}
                </h3>
                <p className="mt-2 leading-7 text-muted-foreground">
                  {volunteerPageContent.eventsDescription}
                </p>
              </article>

              <article className="relative h-80 overflow-hidden rounded-xl shadow-xl sm:col-span-2">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(64,92,158,0.78),rgba(190,0,20,0.48))]" />
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
            <form className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {volunteerPageContent.formFirstNameLabel}
                </label>
                <input
                  className="w-full rounded-md border border-input bg-surface-container-low px-4 py-4 text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder={volunteerPageContent.formFirstNamePlaceholder}
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {volunteerPageContent.formLastNameLabel}
                </label>
                <input
                  className="w-full rounded-md border border-input bg-surface-container-low px-4 py-4 text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder={volunteerPageContent.formLastNamePlaceholder}
                  type="text"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {volunteerPageContent.formEmailLabel}
                </label>
                <input
                  className="w-full rounded-md border border-input bg-surface-container-low px-4 py-4 text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder={volunteerPageContent.formEmailPlaceholder}
                  type="email"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {volunteerPageContent.formZipLabel}
                </label>
                <input
                  className="w-full rounded-md border border-input bg-surface-container-low px-4 py-4 text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder={volunteerPageContent.formZipPlaceholder}
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {volunteerPageContent.formInterestsLabel}
                </label>
                <Select>
                  <SelectTrigger className="font-sans">
                    <SelectValue placeholder={volunteerPageContent.formInterestsPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {volunteerPageContent.formInterestOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {volunteerPageContent.formWhyLabel}
                </label>
                <textarea
                  className="w-full rounded-md border border-input bg-surface-container-low px-4 py-4 text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder={volunteerPageContent.formWhyPlaceholder}
                  rows={4}
                />
              </div>
              <div className="sm:col-span-2 flex items-start gap-3">
                <input className="mt-1 rounded-sm border-outline-variant text-primary focus:ring-primary" type="checkbox" />
                <span className="text-sm leading-7 text-muted-foreground">
                  {volunteerPageContent.formConsentLabel}
                </span>
              </div>
              <div className="sm:col-span-2 pt-2">
                <Button className="campaign-button-primary h-14 w-full text-xl font-extrabold uppercase tracking-tight text-white">
                  {volunteerPageContent.formSubmitLabel}
                </Button>
              </div>
            </form>
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
          <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row">
            <input
              className="rounded-md border border-white/20 bg-white/10 px-6 py-4 text-white placeholder:text-white/60 md:w-80"
              placeholder={volunteerPageContent.updatesEmailPlaceholder}
              type="text"
            />
            <Button className="campaign-button-primary h-14 px-8 text-sm font-bold uppercase tracking-[0.18em] text-white">
              {volunteerPageContent.updatesButtonLabel}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
