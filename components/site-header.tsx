"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navigationItems, siteHeaderContent } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-background/85 backdrop-blur-xl">
      <div className="campaign-container py-4">
        <div className="flex min-h-14 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex flex-col"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-primary">
              {siteHeaderContent.brandName}
            </span>
            <span className="font-serif text-base text-foreground sm:text-lg">
              {siteHeaderContent.brandSubtitle}
            </span>
          </Link>
          <div className="hidden items-center gap-4 lg:flex">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold uppercase tracking-[0.14em] text-foreground/75">
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
          </div>
        ) : null}
      </div>
    </header>
  );
}
