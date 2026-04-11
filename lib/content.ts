export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/issues", label: "Issues" },
  { href: "/news", label: "News" },
  { href: "/volunteer", label: "Volunteer" },
];

export const footerNavigationItems = [
  { href: "/about", label: "About Chris" },
  { href: "/issues", label: "The Issues" },
  { href: "/news", label: "Campaign Info" },
  { href: "/volunteer", label: "Volunteer" },
];

export type CandidateProfile = {
  name: string;
  race: string;
  status: string;
  residence: string;
  family: string;
  shortBio: string;
  longBio: string;
  professionalDetails: string[];
  coreMessage: string;
  districtContext: string;
  hero: {
    headline: string;
    subheadline: string;
  };
};

export const candidateProfile: CandidateProfile = {
  name: "Chris Knoll",
  race: "Minnesota State Senate District 21",
  status: "Republican-endorsed candidate",
  residence: "St. James, Minnesota",
  family: "Lives in St. James with his wife, Amanda, and their blended family.",
  shortBio:
    "Chris Knoll is a rural Minnesota leader, healthcare executive, and nonprofit administrator serving as CEO of Minnewaska Community Health Services. He is running for Minnesota Senate District 21 to bring practical experience, fiscal accountability, and a strong rural voice to St. Paul.",
  longBio:
    "Chris Knoll was born in Litchfield and grew up in communities across rural Minnesota. He graduated from Sartell High School in 2001, earned a BA in Public Administration with an emphasis in Healthcare Administration from St. Cloud State University, and later completed a Master of Public Administration from Minnesota State University, Mankato. He began his career in senior care, became a Licensed Nursing Home Administrator, and joined Minnewaska Community Health Services in 2014. He was named CEO in 2018. Under his leadership, the organization has expanded its work in senior care and assisted living operations across rural Minnesota. His campaign centers on practical leadership, rural healthcare access, fiscal accountability, and representation for southern Minnesota communities.",
  professionalDetails: [
    "CEO of Minnewaska Community Health Services",
    "Background in healthcare leadership, nonprofit management, and rural public policy",
    "Has served as an election judge",
    "Watonwan County BPOU Chair",
    "Member of the Watonwan County Health and Human Services board",
    "Member of the LeadingAge Public Policy steering committee",
    "Treasurer of the LeadingAge PAC Board",
  ],
  coreMessage:
    "Our region deserves representation that protects rural healthcare, strengthens public safety, supports strong schools, defends constitutional rights, and champions agriculture and small business.",
  districtContext:
    "Minnesota Senate District 21 includes Lincoln, Pipestone, Murray, Rock, Nobles, Cottonwood, and Jackson Counties, plus parts of Watonwan and Martin Counties.",
  hero: {
    headline: "Chris Knoll for Minnesota Senate District 21",
    subheadline:
      "Republican-endorsed candidate focused on rural healthcare, government accountability, and common-sense leadership for southern Minnesota.",
  },
};

export type Issue = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  points: string[];
};

export const issues: Issue[] = [
  {
    slug: "budget-and-government-accountability",
    eyebrow: "Priority One",
    title: "Budget and Government Accountability",
    summary:
      "Minnesotans expect government to be responsible stewards of taxpayer dollars. Chris Knoll supports tying funding to measurable outcomes, conducting line-by-line budget reviews, reducing bureaucratic bloat, and aggressively pursuing fraud in state-funded programs.",
    points: [
      "Tie funding to measurable outcomes.",
      "Conduct line-by-line budget reviews.",
      "Reduce bureaucratic bloat.",
      "Aggressively pursue fraud in state-funded programs.",
    ],
  },
  {
    slug: "welfare-fraud-daycare-fraud-oversight",
    eyebrow: "Program Oversight",
    title: "Welfare Fraud, Daycare Fraud & Oversight",
    summary:
      "Programs meant to help vulnerable people should be protected from abuse. Chris Knoll supports strict eligibility and auditing standards, real-time fraud detection, meaningful consequences for bad actors, and removal of agencies or nonprofits that fail compliance reviews.",
    points: [
      "Maintain strict eligibility and auditing standards.",
      "Use real-time fraud detection.",
      "Apply meaningful consequences for bad actors.",
      "Remove agencies or nonprofits that fail compliance reviews.",
    ],
  },
  {
    slug: "overregulation-of-agriculture-and-rural-business",
    eyebrow: "Rural Economy",
    title: "Overregulation of Agriculture & Rural Business",
    summary:
      "Chris Knoll argues farmers and rural businesses need a real seat at the table. He supports impact assessments before new regulations, rural input into policymaking, and rolling back regulations that are duplicative or disconnected from practical reality.",
    points: [
      "Require impact assessments before new regulations.",
      "Ensure rural input into policymaking.",
      "Roll back duplicative regulations.",
      "Roll back regulations disconnected from practical reality.",
    ],
  },
  {
    slug: "rural-healthcare-access-and-nursing-homes",
    eyebrow: "Rural Care",
    title: "Rural Healthcare Access & Nursing Homes",
    summary:
      "Chris Knoll’s campaign emphasizes protecting rural providers and senior care access. He supports reforming boards that control Medicaid spending, removing mandates that drive rural providers out of business, supporting flexible staffing and reimbursement models, and keeping care close to home.",
    points: [
      "Reform boards that control Medicaid spending.",
      "Remove mandates that drive rural providers out of business.",
      "Support flexible staffing and reimbursement models.",
      "Keep care close to home.",
    ],
  },
  {
    slug: "taxes-and-spending-priorities",
    eyebrow: "Fiscal Responsibility",
    title: "Taxes & Spending Priorities",
    summary:
      "Chris Knoll says Minnesota should live within its means, prioritize real needs, reduce regulatory and agency spending, and lower the tax burden over time.",
    points: [
      "Live within Minnesota's means.",
      "Prioritize real needs.",
      "Reduce regulatory and agency spending.",
      "Lower the tax burden over time.",
    ],
  },
];

export const issuesOverview =
  "Chris Knoll’s campaign focuses on five core priorities: government accountability, stronger fraud oversight, relief from overregulation for agriculture and rural business, protection of rural healthcare and nursing homes, and responsible taxes and spending.";

export type NewsArticle = {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  body: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "campaign-overview",
    category: "Campaign Overview",
    date: "Verified candidate information",
    readTime: "2 min read",
    title: "Chris Knoll for Minnesota Senate District 21",
    summary:
      "Chris Knoll is the Republican-endorsed candidate for Minnesota State Senate District 21 and is running on rural healthcare, government accountability, and common-sense leadership.",
    body: [
      candidateProfile.shortBio,
      candidateProfile.coreMessage,
      candidateProfile.districtContext,
    ],
  },
  {
    slug: "biography-and-leadership",
    category: "Biography",
    date: "Verified candidate information",
    readTime: "3 min read",
    title: "Background and leadership experience",
    summary:
      "Chris Knoll’s background includes healthcare leadership, nonprofit administration, rural public policy, and service in local and statewide roles.",
    body: [
      candidateProfile.longBio,
      candidateProfile.family,
      ...candidateProfile.professionalDetails,
    ],
  },
  {
    slug: "district-21-priorities",
    category: "Issues",
    date: "Verified candidate information",
    readTime: "3 min read",
    title: "Core priorities for District 21",
    summary: issuesOverview,
    body: [
      issues[0].summary,
      issues[1].summary,
      issues[2].summary,
      issues[3].summary,
      issues[4].summary,
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
