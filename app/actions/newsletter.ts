"use server";

import {
  submitVolunteerSignup,
  subscribeNewsletter,
  type VolunteerInterest,
  VOLUNTEER_INTEREST_TAGS,
} from "@/lib/mailchimp";

export type NewsletterSignupState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribeToNewsletter(
  _previousState: NewsletterSignupState,
  formData: FormData,
): Promise<NewsletterSignupState> {
  const email = String(formData.get("email") ?? "").trim();
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const source = String(formData.get("source") ?? "").trim();

  if (!email) {
    return {
      status: "error",
      message: "Enter an email address to subscribe.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "Enter a valid email address.",
    };
  }

  const result = await subscribeNewsletter({
    email,
    firstName: firstName || undefined,
    lastName: lastName || undefined,
    source: source || undefined,
  });

  return {
    status: result.ok ? "success" : "error",
    message: result.message,
  };
}

const PHONE_PATTERN = /^[0-9+().\-\s]{7,}$/;
const ZIP_PATTERN = /^\d{5}(?:-\d{4})?$/;
const VALID_INTERESTS = new Set([
  ...Object.keys(VOLUNTEER_INTEREST_TAGS),
  "campaign-updates",
]);

function isVolunteerInterest(value: string): value is VolunteerInterest {
  return VALID_INTERESTS.has(value);
}

export async function submitVolunteerForm(
  _previousState: NewsletterSignupState,
  formData: FormData,
): Promise<NewsletterSignupState> {
  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const addressLine1 = String(formData.get("addressLine1") ?? "").trim();
  const addressLine2 = String(formData.get("addressLine2") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const state = String(formData.get("state") ?? "").trim();
  const zip = String(formData.get("zip") ?? "").trim();
  const why = String(formData.get("why") ?? "").trim();
  const consent = formData.get("consent");
  const interests = formData
    .getAll("interests")
    .map((value) => String(value))
    .filter(isVolunteerInterest);

  if (!firstName || !lastName) {
    return {
      status: "error",
      message: "Enter both a first and last name.",
    };
  }

  if (!email) {
    return {
      status: "error",
      message: "Enter an email address to join the campaign.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "Enter a valid email address.",
    };
  }

  if (!phone || !PHONE_PATTERN.test(phone)) {
    return {
      status: "error",
      message: "Enter a valid phone number.",
    };
  }

  if (!addressLine1 || !city || !state || !zip) {
    return {
      status: "error",
      message: "Enter your full address, including city, state, and ZIP code.",
    };
  }

  if (!ZIP_PATTERN.test(zip)) {
    return {
      status: "error",
      message: "Enter a valid ZIP code.",
    };
  }

  if (!interests.length) {
    return {
      status: "error",
      message: "Choose at least one area where you would like to help.",
    };
  }

  if (!consent) {
    return {
      status: "error",
      message: "Please confirm that we can contact you about the campaign.",
    };
  }

  const result = await submitVolunteerSignup({
    email,
    firstName,
    lastName,
    phone,
    addressLine1,
    addressLine2: addressLine2 || undefined,
    city,
    state,
    zip,
    interests,
    why: why || undefined,
    source: "Website Volunteer Form",
  });

  return {
    status: result.ok ? "success" : "error",
    message: result.message,
  };
}
