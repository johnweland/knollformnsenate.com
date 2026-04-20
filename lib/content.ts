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
  status: "Endorsed Republican candidate",
  residence: "St. James, Minnesota",
  family:
    "Chris and his wife Amanda live in St. James and have a blended family with four children. As a family, they enjoy road trips, water parks, and cheering on their kids at basketball, volleyball, and football games.",
  shortBio:
    "Chris Knoll is the CEO of Minnewaska Community Health Services and a licensed Department of Human Services provider with firsthand experience navigating state government systems.",
  longBio:
    "Chris Knoll is a CEO for Minnewaska Community Health Services and a licensed Department of Human Services provider with firsthand experience navigating state government systems. He earned his Bachelor's degree in Public Administration from St. Cloud State University and became a Licensed Nursing Home Administrator after completing rigorous state and federal testing, along with BCA and FBI background checks. He maintains his licensure through annual renewals, continuing education, and strict compliance standards. While working full time, Chris also earned his Master's degree in Public Administration from Minnesota State University, Mankato.",
  professionalDetails: [
    "CEO of Minnewaska Community Health Services",
    "Licensed Department of Human Services provider",
    "Licensed Nursing Home Administrator",
    "Maintains licensure through annual renewals, continuing education, and strict compliance standards",
    "Completed rigorous state and federal testing, along with BCA and FBI background checks",
    "Earned a Bachelor's degree in Public Administration from St. Cloud State University",
    "Earned a Master's degree in Public Administration from Minnesota State University, Mankato while working full time",
  ],
  coreMessage:
    "“You cannot legislate for one—you must legislate for all.” This principle reflects a commitment to fairness, accountability, and policies that serve the entire community.",
  districtContext:
    "Across the district, individuals and businesses are feeling the effects of overregulation and government overreach. Chris Knoll is committed to restoring balance, strengthening the local economy, and ensuring Minnesota remains competitive.",
  hero: {
    headline: "Chris Knoll for Minnesota Senate District 21",
    subheadline:
      "Leading with Faith and Inspiring Hope. As the endorsed Republican candidate, Chris Knoll is committed to serving the people of District 21 and defending the values that define the community.",
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
    slug: "law-and-order",
    eyebrow: "Priority One",
    title: "Law and Order",
    summary:
      "Laws must be enforced consistently and fairly. Public safety depends on accountability and respect for the rule of law.",
    points: [
      "Laws must be enforced consistently and fairly.",
      "Public safety depends on accountability and respect for the rule of law.",
    ],
  },
  {
    slug: "stop-fraud-and-restore-accountability",
    eyebrow: "Program Oversight",
    title: "Stop Fraud & Restore Accountability",
    summary:
      "Chris will work to eliminate fraud within state programs and ensure that those who break the law are held accountable.",
    points: [
      "Eliminate fraud within state programs.",
      "Ensure that those who break the law are held accountable.",
    ],
  },
  {
    slug: "protect-constitutional-rights",
    eyebrow: "Constitutional Freedoms",
    title: "Protect Constitutional Rights",
    summary:
      "The right to bear arms must be preserved. Public safety can be achieved without infringing on constitutional freedoms.",
    points: [
      "Preserve the right to bear arms.",
      "Pursue public safety without infringing on constitutional freedoms.",
    ],
  },
  {
    slug: "education-reform",
    eyebrow: "Schools",
    title: "Education Reform",
    summary:
      "Schools should focus on core academics, reading, writing, and arithmetic, while empowering parents through school choice.",
    points: [
      "Focus on core academics: reading, writing, and arithmetic.",
      "Empower parents through school choice.",
    ],
  },
  {
    slug: "support-frontline-workers",
    eyebrow: "Essential Services",
    title: "Support Frontline Workers",
    summary:
      "Teachers, nurses, childcare providers, law enforcement, EMS, and firefighters deserve meaningful support. Funding should prioritize people, not bureaucracy.",
    points: [
      "Support teachers, nurses, childcare providers, law enforcement, EMS, and firefighters.",
      "Prioritize people, not bureaucracy.",
    ],
  },
  {
    slug: "fiscal-responsibility",
    eyebrow: "Taxpayer Stewardship",
    title: "Fiscal Responsibility",
    summary:
      "State spending must be controlled. Minnesota families are already overburdened, and government must live within its means.",
    points: [
      "Control state spending.",
      "Government must live within its means.",
    ],
  },
  {
    slug: "support-small-business-and-agriculture",
    eyebrow: "District 21 Economy",
    title: "Support Small Business & Agriculture",
    summary:
      "Farmers, producers, and small business owners are the backbone of District 21. Reducing regulation and unfunded mandates will help them succeed.",
    points: [
      "Support farmers, producers, and small business owners.",
      "Reduce regulation and unfunded mandates.",
    ],
  },
  {
    slug: "secure-elections",
    eyebrow: "Election Integrity",
    title: "Secure Elections",
    summary:
      "Election integrity is essential. Only eligible American citizens should participate in our elections at every level.",
    points: [
      "Protect election integrity.",
      "Only eligible American citizens should participate in our elections at every level.",
    ],
  },
  {
    slug: "government-transparency",
    eyebrow: "Results",
    title: "Government Transparency",
    summary:
      "Taxpayer dollars must be used effectively. Programs should be evaluated based on measurable results and real outcomes.",
    points: [
      "Use taxpayer dollars effectively.",
      "Evaluate programs based on measurable results and real outcomes.",
    ],
  },
];

export const issuesOverview =
  "District 21 families, farmers, and business owners deserve better.";

export const siteHeaderContent = {
  brandName: candidateProfile.name,
  brandSubtitle: candidateProfile.race,
  donateLabel: "Donate",
  donateUrl:
    "https://secure.winred.com/knoll-for-mn-senate-f5a4118f/donate-today",
  openNavigationLabel: "Open navigation menu",
  closeNavigationLabel: "Close navigation menu",
};

export const siteFooterContent = {
  campaignName: `${candidateProfile.name} for Senate`,
  stayInformedLabel: "Stay Informed",
  stayInformedDescription:
    "Sign up for campaign updates, event announcements, and ways to get involved across District 21.",
  newsletterEmailLabel: "Email address",
  newsletterEmailPlaceholder: "Enter your email address",
  newsletterButtonLabel: "Stay Updated",
  newsletterDisclaimer:
    "By signing up, you agree to receive email updates from Knoll for Senate.",
  navigationLabel: "Navigation",
  copyright:
    "© 2026 Paid for by Knoll for Senate Committee. All rights reserved.",
};

export const sharedComponentContent = {
  newsCardReadLabel: "Read article",
};

export const homePageContent = {
  metadataTitle: "Home",
  heroImageSrc: "/knoll_logo.webp",
  heroImageAlt: "Chris Knoll campaign logo",
  heroPrimaryCtaLabel: "Volunteer",
  heroPrimaryCtaHref: "/volunteer",
  heroSecondaryCtaLabel: "Learn More",
  heroSecondaryCtaHref: "/about",
  platformKicker: "The Platform",
  platformTitle: "Core Priorities",
  issueCtaLabel: "View Issues",
  dispatchTitle: "Campaign Dispatch",
  dispatchArchiveLabel: "Archive / All News",
  dispatchReadLabel: "Continue Reading",
  emptyNewsTitle: "No news yet",
  emptyNewsDescription:
    "No news yet. Add a markdown file in news-articles when campaign updates are ready.",
  volunteerEyebrow: "Volunteer",
  volunteerTitle: `Volunteer with ${candidateProfile.name} for ${candidateProfile.race}.`,
  volunteerDescription:
    "Help build momentum across District 21 through grassroots outreach, events, and community support.",
  volunteerBody:
    "Start with the volunteer page to share your contact information and how you would like to help.",
  volunteerPrimaryCtaLabel: "Join the Volunteer List",
  volunteerPrimaryCtaHref: "/volunteer",
  volunteerSecondaryCtaLabel: "Read Campaign Info",
  volunteerSecondaryCtaHref: "/news",
};

export const aboutPageContent = {
  metadataTitle: "About",
  metadataDescription: `Learn more about ${candidateProfile.name}, his background, and his leadership experience in ${candidateProfile.race}.`,
  heroImageSrc: "/knoll.webp",
  heroImageAlt: "Chris Knoll portrait",
  heroEyebrow: `About ${candidateProfile.name}`,
  backgroundTitle: "Background",
  overviewTitle: "Candidate Overview",
  familyTitle: "Home and Family",
  residenceLabel: "Residence",
  focusTitle: "Campaign Focus",
  experienceKicker: "The Experience to Lead",
  experienceTitle: "Leadership Experience",
  experienceDescription:
    "Chris believes leadership requires selflessness, integrity, and a willingness to stand up for what is right.",
  rolesTitle: "Leadership Roles",
  districtTitle: "District 21",
  districtLabel: "Southern Minnesota",
  homeCommunityTitle: "Home Community",
  campaignMessageTitle: "Campaign Message",
  valuesKicker: "Values",
  valuesTitle: "Core Message",
  valuesDescription: candidateProfile.coreMessage,
  involvementKicker: "Get Involved",
  involvementTitle: "Support the campaign in District 21.",
  involvementDescription:
    "Volunteer, stay connected, and help share Chris Knoll's message of accountability, conservative leadership, and real results across District 21.",
  involvementPrimaryCtaLabel: "View the Issues",
  involvementPrimaryCtaHref: "/issues",
  involvementSecondaryCtaLabel: "Volunteer",
  involvementSecondaryCtaHref: "/volunteer",
};

export const issuesPageContent = {
  metadataTitle: "Issues",
  heroKicker: "Core Priorities",
  heroTitleStart: "Issues for",
  heroTitleHighlight: "District 21",
  focusAreasTitle: "Focus Areas",
  ctaTitle: "Support the campaign in District 21",
  ctaPrimaryCtaLabel: "Volunteer",
  ctaPrimaryCtaHref: "/volunteer",
  ctaSecondaryCtaLabel: "About Chris",
  ctaSecondaryCtaHref: "/about",
};

export const newsPageContent = {
  metadataTitle: "News",
  metadataDescription:
    "Read campaign updates, local coverage, and announcements from Chris Knoll for Minnesota Senate District 21.",
  heroTitle: "Newsroom",
  heroDescription:
    "Stay up to date with campaign news, local coverage, and updates from Chris Knoll as the race for Senate District 21 moves forward.",
  emptyStateTitle: "No news yet",
  emptyStateDescription:
    "No news yet. Add a markdown file in news-articles when campaign updates are ready.",
  featuredReadLabel: "Read the Full Dispatch",
  briefingTitle: "Get the Briefing",
  briefingDescription:
    "Get the latest campaign updates and important news from across District 21 delivered to your inbox.",
  briefingEmailPlaceholder: "YOUR EMAIL ADDRESS",
  briefingButtonLabel: "Join the Briefing",
  overviewTitle: "Campaign Overview",
  overviewButtonLabel: "Read Candidate Bio",
};

export const newsArticlePageContent = {
  notFoundTitle: "Article Not Found",
  heroImageSrc: "/editorial-placeholder.svg",
  heroImageAlt: "Campaign article graphic",
  nextStepKicker: "Next Step",
  nextStepTitle: "Join the campaign and stay connected.",
  primaryCtaLabel: "Volunteer",
  primaryCtaHref: "/volunteer",
  secondaryCtaLabel: "Back to News",
  secondaryCtaHref: "/news",
};

export const volunteerPageContent = {
  metadataTitle: "Volunteer",
  metadataDescription:
    "Join Chris Knoll's campaign for Minnesota Senate District 21 and help build momentum through outreach, events, and grassroots support.",
  heroEyebrow: "Volunteer",
  heroTitleLineOne: "Join the",
  heroTitleLineTwo: "campaign",
  heroPrimaryCtaLabel: "Join the Volunteer List",
  heroPrimaryCtaHref: "#signup",
  heroSecondaryCtaLabel: "Learn More",
  heroSecondaryCtaHref: "#mission",
  missionTitle: "Why Volunteer",
  focusLabel: "Campaign Focus",
  communityOutreachTitle: "Community Outreach",
  communityOutreachDescription:
    "Campaigns are powered by people, and there are many ways to get involved. Whether it is knocking doors, handing out literature, or helping spread the word in your community, your time and support can make a real difference.",
  phoneBankingTitle: "Phone Banking",
  phoneBankingDescription:
    "Every conversation matters. Reaching voters directly helps share Chris Knoll's message of accountability, strong leadership, and real results across District 21.",
  eventsTitle: "Events and Outreach",
  eventsDescription:
    "From parades to community events, every handshake and every hour volunteered helps build momentum and strengthen the campaign throughout the district.",
  signupTitle: "Join the campaign.",
  signupDescription:
    "Chris Knoll is running to bring accountability, strong leadership, and real results to Minnesota Senate District 21. Sign up today and help move this campaign forward.",
  signupBenefits: ["Community Outreach", "Events", "Campaign Updates"],
  formFirstNameLabel: "First Name",
  formFirstNamePlaceholder: "John",
  formLastNameLabel: "Last Name",
  formLastNamePlaceholder: "Doe",
  formEmailLabel: "Email Address",
  formEmailPlaceholder: "john@example.com",
  formPhoneLabel: "Phone Number",
  formPhonePlaceholder: "(320) 555-0123",
  formAddressLine1Label: "Street Address",
  formAddressLine1Placeholder: "123 Main Street",
  formAddressLine2Label: "Apartment, suite, etc. (optional)",
  formAddressLine2Placeholder: "Suite 200",
  formCityLabel: "City",
  formCityPlaceholder: "St. James",
  formStateLabel: "State",
  formStatePlaceholder: "MN",
  formZipLabel: "Zip Code",
  formZipPlaceholder: "56081",
  formInterestsLabel: "Interests",
  formInterestsHelp: "Select every area where you would like to help.",
  formInterestOptions: [
    { value: "community-outreach", label: "Community Outreach" },
    { value: "phone-banking", label: "Phone Banking" },
    { value: "events", label: "Events" },
    { value: "campaign-updates", label: "Campaign Updates" },
  ],
  formWhyLabel: "Why are you joining us?",
  formWhyPlaceholder: "Tell us how you would like to help the campaign...",
  formConsentLabel:
    "By signing up, I agree to receive campaign emails and updates from Knoll for Senate.",
  formSubmitLabel: "Join the Team",
  updatesTitle: "Want updates from the campaign?",
  updatesDescription:
    "Join us in building momentum and standing up for the future of District 21.",
  updatesEmailPlaceholder: "Enter your email",
  updatesButtonLabel: "Stay Updated",
};
