import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Campaign Disclosures",
  description:
    "Campaign disclosures for Chris Knoll, Marj Fogelman, and Krist Wollum.",
  pathname: "/disclosures",
});

const disclosures = [
  {
    id: "chris-knoll",
    name: "Chris Knoll",
    statement:
      "Prepared and paid for by Knoll for MN Senate Committee, PO Box 147, St. James, MN 56081.",
  },
  {
    id: "marj-fogelman",
    name: "Marj Fogelman",
    statement:
      "Prepared and paid for by Marj Fogelman for MN House, PO Box 141, Fulda, MN 56131.",
  },
  {
    id: "krist-wollum",
    name: "Krist Wollum",
    statement:
      "Prepared & paid for by wollum4house committee, PO Box 13, Porter, MN 56280.",
  },
];

export default function DisclosuresPage() {
  return (
    <main className="flex-1 bg-white px-6 py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Campaign Disclosures
        </h1>
        <div className="mt-6 h-1 w-16 bg-primary" />
        <div className="mt-8 divide-y divide-slate-200">
          {disclosures.map((disclosure) => (
            <section
              key={disclosure.id}
              id={disclosure.id}
              aria-labelledby={`${disclosure.id}-heading`}
              className="scroll-mt-28 py-8 first:pt-0"
            >
              <h2
                id={`${disclosure.id}-heading`}
                className="text-xl font-bold text-slate-900 sm:text-2xl"
              >
                {disclosure.name}
              </h2>
              <p className="mt-3 text-base leading-8 text-slate-700 sm:text-lg">
                {disclosure.statement}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
