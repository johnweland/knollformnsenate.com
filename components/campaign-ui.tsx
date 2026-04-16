import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { sharedComponentContent } from "@/lib/content";
import type { NewsArticle } from "@/lib/news";
import { cn } from "@/lib/utils";

export function PageSection({
  children,
  className,
  tone = "base",
  ...props
}: React.ComponentProps<"section"> & {
  tone?: "base" | "muted" | "paper";
}) {
  return (
    <section
      {...props}
      className={cn(
        "py-16 sm:py-20",
        tone === "muted" && "bg-muted",
        tone === "paper" && "bg-background",
        className,
      )}
    >
      <div className="campaign-container">{children}</div>
    </section>
  );
}

export function PageTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4">
      <p className="campaign-kicker">{eyebrow}</p>
      <h1 className="max-w-5xl font-sans text-4xl font-black tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{description}</p>
    </div>
  );
}

export function HeroSection({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  actions,
  stats,
  align = "left",
}: {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  stats?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-secondary text-white">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(25,28,29,0.84),rgba(25,28,29,0.54)_42%,rgba(190,0,20,0.36)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(156,183,255,0.22),transparent_28%)]" />
      <div className="campaign-container relative z-10 py-20 sm:py-24 lg:py-32">
        <div
          className={cn(
            "max-w-4xl space-y-6",
            align === "center" && "mx-auto text-center",
          )}
        >
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/82">{eyebrow}</p>
          <h1 className="font-sans text-5xl font-black tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-white/82 sm:text-xl">{description}</p>
          {actions ? <div className="flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
          {stats ? <div className="pt-3">{stats}</div> : null}
        </div>
      </div>
    </section>
  );
}

export function SplitHeroSection({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  actions,
  stats,
}: {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
  actions?: React.ReactNode;
  stats?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(248,249,250,0.98),rgba(231,232,233,0.92))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,27,35,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(64,92,158,0.18),transparent_32%)]" />
      <div className="campaign-container relative grid gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-24">
        <div className="space-y-7">
          <div className="space-y-4">
            <p className="campaign-kicker">{eyebrow}</p>
            <h1 className="max-w-4xl font-sans text-5xl font-black tracking-[-0.05em] text-foreground sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {description}
            </p>
          </div>
          {actions ? <div className="flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
          {stats ? <div className="pt-2">{stats}</div> : null}
        </div>
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -left-6 top-8 hidden h-[76%] w-[72%] rounded-lg bg-white/65 shadow-xl lg:block" />
          <div className="absolute -right-2 top-0 hidden h-full w-full rounded-lg border border-primary/10 bg-[linear-gradient(135deg,rgba(190,0,20,0.08),rgba(64,92,158,0.08))] lg:block" />
          <div className="relative overflow-hidden rounded-lg bg-card p-3 shadow-2xl ring-1 ring-black/6 lg:rotate-[3deg]">
            <div className="overflow-hidden rounded-[calc(var(--radius)+2px)] bg-muted">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1200}
                height={900}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ImagePanel({
  src,
  alt,
  eyebrow,
  title,
  description,
}: {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="campaign-card overflow-hidden p-3">
      <div className="relative overflow-hidden rounded-[calc(var(--radius)+2px)] bg-muted">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={900}
          className="h-auto w-full object-cover"
          priority={false}
        />
      </div>
      <div className="space-y-3 px-3 pb-3 pt-5">
        <p className="campaign-kicker">{eyebrow}</p>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
        <p className="leading-7 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <article className="campaign-card p-6">
      <div className="flex size-11 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
        <Icon className="size-5" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 leading-7 text-muted-foreground">{description}</p>
    </article>
  );
}

export function StatGrid({
  stats,
}: {
  stats: Array<{ label: string; value: string }>;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="campaign-card p-5">
          <p className="campaign-kicker">{stat.label}</p>
          <p className="mt-3 text-2xl font-black tracking-[-0.03em] text-foreground">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export function QuoteBlock({
  quote,
  attribution,
  detail,
}: {
  quote: string;
  attribution: string;
  detail: string;
}) {
  return (
    <aside className="campaign-card relative overflow-hidden p-8">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,var(--color-tertiary),var(--color-primary))]" />
      <blockquote className="space-y-5">
        <p className="font-serif text-3xl leading-tight text-foreground">“{quote}”</p>
        <footer className="space-y-1">
          <p className="font-sans text-sm font-bold uppercase tracking-[0.18em] text-foreground">
            {attribution}
          </p>
          <p className="text-sm leading-6 text-muted-foreground">{detail}</p>
        </footer>
      </blockquote>
    </aside>
  );
}

export function NewsCard({
  article,
  featured = false,
}: {
  article: NewsArticle;
  featured?: boolean;
}) {
  return (
    <article className="campaign-card flex h-full flex-col justify-between p-6 sm:p-7">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          <span>{article.category}</span>
          <span>{article.date}</span>
        </div>
        <h2
          className={cn(
            "font-sans font-black tracking-[-0.03em] text-foreground",
            featured ? "text-3xl" : "text-2xl",
          )}
        >
          {article.title}
        </h2>
        <p className="leading-7 text-muted-foreground">{article.summary}</p>
      </div>
      <div className="mt-8">
        <Link
          href={`/news/${article.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-secondary transition-colors hover:text-primary"
        >
          {sharedComponentContent.newsCardReadLabel}
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
