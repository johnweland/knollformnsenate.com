import type { Metadata } from "next";

import { candidateProfile } from "@/lib/content";
import type { NewsArticle } from "@/lib/news";

const SITE_URL = "https://knollformnsenate.com";
const SITE_NAME = `${candidateProfile.name} for Minnesota Senate District 21`;
const DEFAULT_OG_IMAGE = "/knoll-speaking.webp";

function toAbsoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

function getMetadataImage(imagePath?: string) {
  return toAbsoluteUrl(imagePath ?? DEFAULT_OG_IMAGE);
}

function getIsoDate(date: string) {
  const timestamp = Date.parse(date);

  if (Number.isNaN(timestamp)) {
    return undefined;
  }

  return new Date(timestamp).toISOString();
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: candidateProfile.hero.headline,
    template: `%s | ${candidateProfile.hero.headline}`,
  },
  description: candidateProfile.hero.subheadline,
  applicationName: SITE_NAME,
  appleWebApp: {
    title: "Knoll for MN Senate",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: candidateProfile.hero.headline,
    description: candidateProfile.hero.subheadline,
    images: [
      {
        url: getMetadataImage(),
        alt: candidateProfile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: candidateProfile.hero.headline,
    description: candidateProfile.hero.subheadline,
    images: [getMetadataImage()],
  },
};

type PageMetadataOptions = {
  title: string;
  description: string;
  pathname: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  pathname,
  image,
}: PageMetadataOptions): Metadata {
  const resolvedImage = getMetadataImage(image);

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "website",
      url: pathname,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: resolvedImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [resolvedImage],
    },
  };
}

export function createNewsArticleMetadata(article: NewsArticle): Metadata {
  const pathname = `/news/${article.slug}`;
  const publishedTime = getIsoDate(article.date);
  const resolvedImage = getMetadataImage(article.image);

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      type: "article",
      url: pathname,
      siteName: SITE_NAME,
      title: article.title,
      description: article.summary,
      publishedTime,
      authors: [candidateProfile.name],
      images: [
        {
          url: resolvedImage,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [resolvedImage],
    },
  };
}
