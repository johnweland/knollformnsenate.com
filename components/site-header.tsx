"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  navigationItems,
  siteHeaderContent,
  socialLinks,
} from "@/lib/content";
import { cn } from "@/lib/utils";

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="size-4 fill-current"
      >
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.022 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.018 1.792-4.687 4.533-4.687 1.313 0 2.686.235 2.686.235v2.963H15.83c-1.491 0-1.956.929-1.956 1.882v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.099 24 12.073Z" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-4 fill-current"
    >
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.636 7.584H.478l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.291 19.492h2.039L6.486 3.24H4.298L17.61 20.645Z" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-background/85 backdrop-blur-xl">
      <div className="campaign-container py-4">
        <div className="flex min-h-14 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/knoll_logo.webp"
              alt={`${siteHeaderContent.brandName} campaign logo`}
              width={48}
              height={48}
              className="h-11 w-11 rounded-full object-cover ring-1 ring-border/60 sm:h-12 sm:w-12"
              priority
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold uppercase tracking-[0.22em] text-primary">
                {siteHeaderContent.brandName}
              </span>
              <span className="font-serif text-base text-foreground sm:text-lg">
                {siteHeaderContent.brandSubtitle}
              </span>
            </div>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/75">
              {navigationItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "transition-colors hover:text-primary",
                      active && "text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="flex items-center gap-2 border-l border-border/60 pl-6">
              {socialLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.ariaLabel}
                  className="flex size-9 items-center justify-center rounded-full border border-border/70 text-foreground/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <SocialIcon label={item.label} />
                </Link>
              ))}
            </div>
            <Button
              asChild
              className="campaign-button-primary h-10 px-4 text-xs uppercase tracking-[0.18em]"
            >
              <Link
                href={siteHeaderContent.donateUrl}
                target="_blank"
              >
                {siteHeaderContent.donateLabel}
              </Link>
            </Button>
          </div>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label={
              isOpen
                ? siteHeaderContent.closeNavigationLabel
                : siteHeaderContent.openNavigationLabel
            }
            className="flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {isOpen ? (
          <div className="mt-4 border-t border-border/60 pt-4 lg:hidden">
            <nav className="flex flex-col gap-1 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/75">
              {navigationItems.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === item.href
                    : pathname === item.href ||
                      pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "border-b border-border/40 px-0 py-4 transition-colors hover:text-primary last:border-b-0",
                      active && "text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Button
              asChild
              className="campaign-button-primary mt-5 h-11 w-full px-4 text-xs uppercase tracking-[0.18em]"
            >
              <Link
                href={siteHeaderContent.donateUrl}
                target="_blank"
                onClick={() => setIsOpen(false)}
              >
                {siteHeaderContent.donateLabel}
              </Link>
            </Button>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/75 transition-colors hover:text-primary"
                >
                  <span className="flex size-9 items-center justify-center rounded-full border border-border/70">
                    <SocialIcon label={item.label} />
                  </span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
