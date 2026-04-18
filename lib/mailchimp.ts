import { createHash } from "node:crypto";

export const VOLUNTEER_INTEREST_TAGS = {
  "community-outreach": "Community Outreach",
  "phone-banking": "Phone Banking",
  events: "Events",
} as const;

export type VolunteerInterest = keyof typeof VOLUNTEER_INTEREST_TAGS | "campaign-updates";

export type NewsletterSignupInput = {
  email: string;
  source?: string;
  firstName?: string;
  lastName?: string;
};

export type VolunteerSignupInput = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zip: string;
  interests: VolunteerInterest[];
  why?: string;
  source?: string;
};

type MailchimpConfig = {
  apiKey: string;
  audienceId: string;
  apiServer: string;
  subscribeStatus: "pending" | "subscribed";
  newsletterTag?: string;
};

type MailchimpError = {
  detail?: string;
  errors?: Array<{ field?: string; message?: string }>;
};

type UpsertMailchimpMemberInput = {
  email: string;
  source?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: {
    addr1: string;
    addr2?: string;
    city: string;
    state: string;
    zip: string;
    country?: string;
  };
  tags?: string[];
  note?: string;
};

function getMailchimpConfig(): MailchimpConfig | null {
  const apiKey = process.env.MAILCHIMP_API_KEY?.trim();
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID?.trim();
  const subscribeStatus =
    process.env.MAILCHIMP_SUBSCRIBE_STATUS?.trim().toLowerCase() === "subscribed"
      ? "subscribed"
      : "pending";
  const newsletterTag = process.env.MAILCHIMP_NEWSLETTER_TAG?.trim();
  const configuredApiServer = process.env.MAILCHIMP_API_SERVER?.trim();
  const derivedApiServer = apiKey?.split("-").at(-1)?.trim();
  const apiServer = configuredApiServer || derivedApiServer;

  if (!apiKey || !audienceId || !apiServer) {
    return null;
  }

  return {
    apiKey,
    audienceId,
    apiServer,
    subscribeStatus,
    newsletterTag: newsletterTag || undefined,
  };
}

function getSubscriberHash(email: string) {
  return createHash("md5").update(email.trim().toLowerCase()).digest("hex");
}

async function mailchimpFetch(
  config: MailchimpConfig,
  path: string,
  init: RequestInit = {},
) {
  return fetch(`https://${config.apiServer}.api.mailchimp.com/3.0${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
}

async function upsertMailchimpMember(input: UpsertMailchimpMemberInput) {
  const config = getMailchimpConfig();

  if (!config) {
    return {
      ok: false as const,
      message: "Newsletter signup is not configured yet.",
    };
  }

  const email = input.email.trim().toLowerCase();
  const subscriberHash = getSubscriberHash(email);
  const mergeFields = {
    ...(input.firstName?.trim() ? { FNAME: input.firstName.trim() } : {}),
    ...(input.lastName?.trim() ? { LNAME: input.lastName.trim() } : {}),
    ...(input.phone?.trim() ? { PHONE: input.phone.trim() } : {}),
    ...(input.address
      ? {
          ADDRESS: {
            addr1: input.address.addr1,
            ...(input.address.addr2 ? { addr2: input.address.addr2 } : {}),
            city: input.address.city,
            state: input.address.state,
            zip: input.address.zip,
            ...(input.address.country ? { country: input.address.country } : {}),
          },
        }
      : {}),
  };

  const response = await mailchimpFetch(
    config,
    `/lists/${config.audienceId}/members/${subscriberHash}?skip_merge_validation=true`,
    {
      method: "PUT",
      body: JSON.stringify({
        email_address: email,
        status_if_new: config.subscribeStatus,
        merge_fields: mergeFields,
      }),
    },
  );

  if (!response.ok) {
    const error = (await response.json().catch(() => null)) as MailchimpError | null;
    const fieldErrors = error?.errors
      ?.map((entry) => entry.message)
      .filter(Boolean)
      .join(" ");
    const detail = error?.detail || fieldErrors || "";

    if (
      detail.toLowerCase().includes("permanently deleted") &&
      detail.toLowerCase().includes("resubscribe")
    ) {
      return {
        ok: false as const,
        message:
          "This email was permanently deleted in Mailchimp. Mailchimp requires a signup-form resubscribe for that case. For testing, archive contacts instead of permanently deleting them.",
      };
    }

    return {
      ok: false as const,
      message:
        detail ||
        "We couldn’t save this contact right now. Please try again in a moment.",
    };
  }

  if (input.tags?.length) {
    await mailchimpFetch(
      config,
      `/lists/${config.audienceId}/members/${subscriberHash}/tags`,
      {
        method: "POST",
        body: JSON.stringify({
          tags: input.tags.map((tag) => ({ name: tag, status: "active" })),
        }),
      },
    ).catch(() => undefined);
  }

  if (input.note?.trim()) {
    await mailchimpFetch(
      config,
      `/lists/${config.audienceId}/members/${subscriberHash}/notes`,
      {
        method: "POST",
        body: JSON.stringify({
          note: input.note.trim(),
        }),
      },
    ).catch(() => undefined);
  }

  return {
    ok: true as const,
    message:
      config.subscribeStatus === "pending"
        ? "Check your inbox to confirm your signup."
        : "Your information has been saved.",
  };
}

export async function subscribeNewsletter(input: NewsletterSignupInput) {
  const config = getMailchimpConfig();
  const tags = config?.newsletterTag ? [config.newsletterTag] : [];

  const result = await upsertMailchimpMember({
    email: input.email,
    source: input.source,
    firstName: input.firstName,
    lastName: input.lastName,
    tags,
  });

  return result.ok
    ? {
        ok: true as const,
        message:
          config?.subscribeStatus === "pending"
            ? "Check your inbox to confirm your subscription."
            : "You’re subscribed to campaign updates.",
      }
    : result;
}

export async function submitVolunteerSignup(input: VolunteerSignupInput) {
  const config = getMailchimpConfig();
  const tags = [
    "Volunteer",
    ...input.interests.flatMap((interest) => {
      if (interest === "campaign-updates") {
        return config?.newsletterTag ? [config.newsletterTag] : [];
      }

      const interestTag = VOLUNTEER_INTEREST_TAGS[interest];
      return interestTag ? [interestTag] : [];
    }),
  ];

  const noteParts = [
    input.source ? `Source: ${input.source}` : null,
    input.interests.length
      ? `Interests: ${input.interests.join(", ")}`
      : null,
    input.why?.trim() ? `Why they joined: ${input.why.trim()}` : null,
  ].filter(Boolean);

  const result = await upsertMailchimpMember({
    email: input.email,
    source: input.source,
    firstName: input.firstName,
    lastName: input.lastName,
    phone: input.phone,
    address: {
      addr1: input.addressLine1,
      addr2: input.addressLine2,
      city: input.city,
      state: input.state,
      zip: input.zip,
      country: "US",
    },
    tags,
    note: noteParts.join("\n"),
  });

  return result.ok
    ? {
        ok: true as const,
        message:
          config?.subscribeStatus === "pending"
            ? "Thanks for joining the campaign. Check your inbox to confirm your signup."
            : "Thanks for joining the campaign. Your information has been saved.",
      }
    : result;
}
