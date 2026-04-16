import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  candidateProfile,
  footerNavigationItems,
  siteFooterContent,
} from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-4 border-primary bg-slate-100">
      <div className="campaign-container grid gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="space-y-10">
          <div className="max-w-md space-y-4">
            <p className="font-sans text-xl font-bold tracking-tight text-slate-900">
              {siteFooterContent.campaignName}
            </p>
            <p className="font-serif text-lg leading-8 text-slate-600">
              {candidateProfile.shortBio}
            </p>
          </div>
          <div className="max-w-2xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-900">
              {siteFooterContent.stayInformedLabel}
            </p>
            <div className="space-y-4">
              <p className="font-serif text-lg leading-8 text-slate-600">
                {siteFooterContent.stayInformedDescription}
              </p>
              <form className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
                <label htmlFor="newsletter-email" className="sr-only">
                  {siteFooterContent.newsletterEmailLabel}
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder={siteFooterContent.newsletterEmailPlaceholder}
                  className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-primary"
                />
                <Button
                  type="submit"
                  className="campaign-button-primary h-11 px-5 text-xs uppercase tracking-[0.18em] text-white sm:w-auto"
                >
                  {siteFooterContent.newsletterButtonLabel}
                </Button>
              </form>
              <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                {siteFooterContent.newsletterDisclaimer}
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5 ml-auto">
          <div className="space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-900">
              {siteFooterContent.navigationLabel}
            </p>
            <nav className="flex flex-col gap-4">
              {footerNavigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-slate-600 underline underline-offset-4 transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="campaign-container border-t border-slate-200 py-8 text-center">
        <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
          {siteFooterContent.copyright}
        </p>
      </div>
    </footer>
  );
}
