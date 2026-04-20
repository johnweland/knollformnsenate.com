import Link from "next/link";

import { NewsletterSignup } from "@/components/newsletter-signup";
import {
  candidateProfile,
  footerNavigationItems,
  siteFooterContent,
  socialLinks,
} from "@/lib/content";

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-5 fill-current"
      >
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.022 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.018 1.792-4.687 4.533-4.687 1.313 0 2.686.235 2.686.235v2.963H15.83c-1.491 0-1.956.929-1.956 1.882v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.099 24 12.073Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5 fill-current"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.636 7.584H.478l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.291 19.492h2.039L6.486 3.24H4.298L17.61 20.645Z" />
    </svg>
  );
}

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
            <NewsletterSignup
              source="site-footer"
              description={siteFooterContent.stayInformedDescription}
              emailLabel={siteFooterContent.newsletterEmailLabel}
              emailPlaceholder={siteFooterContent.newsletterEmailPlaceholder}
              buttonLabel={siteFooterContent.newsletterButtonLabel}
              disclaimer={siteFooterContent.newsletterDisclaimer}
              hideLabel
              inputClassName="border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-primary"
              buttonClassName="campaign-button-primary h-11 px-5 text-xs uppercase tracking-[0.18em] text-white sm:w-auto"
              messageClassName="text-slate-700"
              className="space-y-4"
            />
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
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-900">
              {siteFooterContent.connectLabel}
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.ariaLabel}
                  className="flex size-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-colors hover:border-primary hover:text-primary"
                >
                  <SocialIcon label={item.label} />
                </Link>
              ))}
            </div>
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
