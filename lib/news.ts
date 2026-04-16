import { cache } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";

const NEWS_DIRECTORY = path.join(process.cwd(), "news-articles");

export type NewsArticle = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  image?: string;
  body: string;
};

export type NewsArticleBlock =
  | { type: "heading"; level: 1 | 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "blockquote"; text: string };

type Frontmatter = {
  title?: string;
  summary?: string;
  category?: string;
  date?: string;
  readTime?: string;
  image?: string;
};

function parseFrontmatter(fileContents: string) {
  if (!fileContents.startsWith("---\n")) {
    return {
      frontmatter: {} as Frontmatter,
      body: fileContents.trim(),
    };
  }

  const closingMarkerIndex = fileContents.indexOf("\n---\n", 4);

  if (closingMarkerIndex === -1) {
    return {
      frontmatter: {} as Frontmatter,
      body: fileContents.trim(),
    };
  }

  const frontmatterText = fileContents.slice(4, closingMarkerIndex);
  const body = fileContents.slice(closingMarkerIndex + 5).trim();
  const frontmatterEntries = frontmatterText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const separatorIndex = line.indexOf(":");

      if (separatorIndex === -1) {
        return null;
      }

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");

      return [key, value] as const;
    })
    .filter((entry): entry is readonly [string, string] => entry !== null);

  return {
    frontmatter: Object.fromEntries(frontmatterEntries) as Frontmatter,
    body,
  };
}

async function getMarkdownFilenames() {
  try {
    const entries = await fs.readdir(NEWS_DIRECTORY, { withFileTypes: true });

    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => name.endsWith(".md") && !name.startsWith("_"))
      .sort((left, right) => right.localeCompare(left));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    throw error;
  }
}

async function readNewsArticle(filename: string): Promise<NewsArticle> {
  const fullPath = path.join(NEWS_DIRECTORY, filename);
  const fileContents = await fs.readFile(fullPath, "utf8");
  const { frontmatter, body } = parseFrontmatter(fileContents);
  const slug = filename.replace(/\.md$/, "");

  return {
    slug,
    title: frontmatter.title ?? "content needed",
    summary: frontmatter.summary ?? "content needed",
    category: frontmatter.category ?? "content needed",
    date: frontmatter.date ?? "content needed",
    readTime: frontmatter.readTime ?? "content needed",
    image: frontmatter.image,
    body,
  };
}

export const getAllNewsArticles = cache(async () => {
  const filenames = await getMarkdownFilenames();
  const articles = await Promise.all(filenames.map((filename) => readNewsArticle(filename)));

  return articles.sort((left, right) => {
    const rightTime = Date.parse(right.date);
    const leftTime = Date.parse(left.date);

    if (Number.isNaN(leftTime) || Number.isNaN(rightTime)) {
      return right.slug.localeCompare(left.slug);
    }

    return rightTime - leftTime;
  });
});

export const getNewsArticleBySlug = cache(async (slug: string) => {
  const articles = await getAllNewsArticles();

  return articles.find((article) => article.slug === slug);
});

export function parseMarkdownBlocks(markdown: string): NewsArticleBlock[] {
  const blocks: NewsArticleBlock[] = [];
  const lines = markdown.split("\n");
  let paragraphLines: string[] = [];

  const flushParagraph = () => {
    if (paragraphLines.length === 0) {
      return;
    }

    blocks.push({
      type: "paragraph",
      text: paragraphLines.join(" ").trim(),
    });
    paragraphLines = [];
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    const headingMatch = /^(#{1,3})\s+(.*)$/.exec(line);

    if (headingMatch) {
      flushParagraph();
      blocks.push({
        type: "heading",
        level: headingMatch[1].length as 1 | 2 | 3,
        text: headingMatch[2].trim(),
      });
      continue;
    }

    if (line.startsWith(">")) {
      flushParagraph();
      const quoteLines = [line.replace(/^>\s?/, "").trim()];

      while (index + 1 < lines.length && lines[index + 1].trim().startsWith(">")) {
        index += 1;
        quoteLines.push(lines[index].trim().replace(/^>\s?/, "").trim());
      }

      blocks.push({
        type: "blockquote",
        text: quoteLines.join(" ").trim(),
      });
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      const items = [line.replace(/^[-*]\s+/, "").trim()];

      while (index + 1 < lines.length && /^[-*]\s+/.test(lines[index + 1].trim())) {
        index += 1;
        items.push(lines[index].trim().replace(/^[-*]\s+/, "").trim());
      }

      blocks.push({
        type: "list",
        items,
      });
      continue;
    }

    paragraphLines.push(line);
  }

  flushParagraph();

  return blocks;
}
