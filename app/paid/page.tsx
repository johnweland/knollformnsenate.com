import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Campaign Disclosures",
  description:
    "Campaign disclosures for Chris Knoll, Marj Fogelman, and Krist Wollum, and radio ad scripts for Chris Knoll.",
  pathname: "/paid",
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

const radioAds = [
  {
    id: "accountability",
    title: "Ad 1 — “Accountability”",
    participants: "Chris Knoll and Marj Fogelman · Approximately 30 seconds",
    paragraphs: [
      "MARJ: Hi, I’m State Representative Marj Fogelman.",
      "CHRIS: And I’m Chris Knoll, candidate for Minnesota Senate District 21.",
      "MARJ: Minnesotans work hard for their money. They deserve a government that protects their tax dollars and takes fraud seriously.",
      "CHRIS: And they deserve leaders focused on responsible spending and standing up for families, farmers, and small businesses.",
      "MARJ: This election, make your voice heard.",
      "CHRIS: Vote Republican on November 3rd.",
      "BOTH: We’d be honored to earn your vote.",
      "DISCLAIMER: Paid for by the Marj Fogelman for House Committee and Knoll for MN Senate Committee.",
    ],
  },
  {
    id: "your-vote-matters",
    title: "Ad 2 — “Your Vote Matters”",
    participants: "Chris Knoll and Marj Fogelman · Approximately 30 seconds",
    paragraphs: [
      "CHRIS: I’m Chris Knoll. Elections have consequences, and this November, your vote matters.",
      "MARJ: I’m Representative Marj Fogelman. We believe Minnesota needs greater accountability, responsible spending, and stronger safeguards for taxpayer dollars.",
      "CHRIS: We’ll keep fighting for the families, farmers, and small businesses that make southern Minnesota strong.",
      "MARJ: Don’t sit this election out. Talk to your family and friends, and make a plan to vote.",
      "CHRIS: Vote Republican November 3rd.",
      "BOTH: We’d be honored to earn your vote.",
      "DISCLAIMER: Paid for by the Marj Fogelman for House Committee and Knoll for MN Senate Committee.",
    ],
  },
  {
    id: "radio-ad-option-1",
    title: "Radio Ad — Option 1",
    participants: "Chris Knoll",
    paragraphs: [
      "Hi, I'm Chris Knoll, the Republican-endorsed candidate for Minnesota Senate District 21. I'm running because we need accountability in St. Paul — to stop government fraud, protect your tax dollars, control spending and taxes, and stand up for our families, farmers, and small businesses.",
      "This November, I'm asking for your vote.",
      "Vote Chris Knoll for Minnesota Senate District 21.",
      "Leading with faith. Inspiring hope.",
      "Prepared and paid for by Knoll for MN Senate Committee.",
    ],
  },
  {
    id: "radio-ad-option-2",
    title: "Radio Ad — Option 2",
    participants: "Chris Knoll",
    paragraphs: [
      "Hi, I'm Chris Knoll.",
      "I've spent my career and my life being held accountable for the decisions I make. I believe our government should be held to that same standard. I'm running for Minnesota Senate District 21 to fight government fraud, protect your tax dollars, control spending, and stand up for our families, farmers, and small businesses. I'd be honored to earn your vote.",
      "I'm Chris Knoll. Leading with faith. Inspiring hope.",
      "Learn more at KnollForMNSenate.com.",
      "Prepared and paid for by Knoll for MN Senate Committee",
    ],
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
        <section
          aria-labelledby="radio-ad-scripts-heading"
          className="mt-8 border-t-2 border-slate-200 pt-10"
        >
          <h2
            id="radio-ad-scripts-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Radio Ad Scripts
          </h2>
          <div className="mt-8 space-y-10">
            {radioAds.map((ad) => (
              <article
                key={ad.id}
                id={ad.id}
                aria-labelledby={`${ad.id}-heading`}
                className="scroll-mt-8 border-b border-slate-200 pb-10 last:border-b-0 last:pb-0"
              >
                <h3
                  id={`${ad.id}-heading`}
                  className="text-xl font-bold text-slate-900"
                >
                  {ad.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {ad.participants}
                </p>
                <div className="mt-5 space-y-3 text-base leading-8 text-slate-700 sm:text-lg">
                  {ad.paragraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
