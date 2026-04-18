"use client";

import { useActionState, useId } from "react";

import { submitVolunteerForm } from "@/app/actions/newsletter";
import { Button } from "@/components/ui/button";
import { volunteerPageContent } from "@/lib/content";
import { cn } from "@/lib/utils";

const initialVolunteerSignupState = {
  status: "idle" as const,
  message: "",
};

function FieldLabel({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground"
    >
      {children}
    </label>
  );
}

function TextInput({
  id,
  name,
  placeholder,
  type = "text",
  autoComplete,
  required = false,
}: {
  id: string;
  name: string;
  placeholder: string;
  type?: React.ComponentProps<"input">["type"];
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      autoComplete={autoComplete}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-md border border-input bg-surface-container-low px-4 py-4 text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
    />
  );
}

export function VolunteerSignupForm() {
  const [state, formAction, pending] = useActionState(
    submitVolunteerForm,
    initialVolunteerSignupState,
  );
  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const addressLine1Id = useId();
  const addressLine2Id = useId();
  const cityId = useId();
  const stateId = useId();
  const zipId = useId();
  const whyId = useId();

  return (
    <form action={formAction} className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <FieldLabel htmlFor={firstNameId}>
          {volunteerPageContent.formFirstNameLabel}
        </FieldLabel>
        <TextInput
          id={firstNameId}
          name="firstName"
          placeholder={volunteerPageContent.formFirstNamePlaceholder}
          autoComplete="given-name"
          required
        />
      </div>
      <div>
        <FieldLabel htmlFor={lastNameId}>
          {volunteerPageContent.formLastNameLabel}
        </FieldLabel>
        <TextInput
          id={lastNameId}
          name="lastName"
          placeholder={volunteerPageContent.formLastNamePlaceholder}
          autoComplete="family-name"
          required
        />
      </div>
      <div>
        <FieldLabel htmlFor={emailId}>{volunteerPageContent.formEmailLabel}</FieldLabel>
        <TextInput
          id={emailId}
          name="email"
          placeholder={volunteerPageContent.formEmailPlaceholder}
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div>
        <FieldLabel htmlFor={phoneId}>{volunteerPageContent.formPhoneLabel}</FieldLabel>
        <TextInput
          id={phoneId}
          name="phone"
          placeholder={volunteerPageContent.formPhonePlaceholder}
          type="tel"
          autoComplete="tel"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <FieldLabel htmlFor={addressLine1Id}>
          {volunteerPageContent.formAddressLine1Label}
        </FieldLabel>
        <TextInput
          id={addressLine1Id}
          name="addressLine1"
          placeholder={volunteerPageContent.formAddressLine1Placeholder}
          autoComplete="address-line1"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <FieldLabel htmlFor={addressLine2Id}>
          {volunteerPageContent.formAddressLine2Label}
        </FieldLabel>
        <TextInput
          id={addressLine2Id}
          name="addressLine2"
          placeholder={volunteerPageContent.formAddressLine2Placeholder}
          autoComplete="address-line2"
        />
      </div>
      <div>
        <FieldLabel htmlFor={cityId}>{volunteerPageContent.formCityLabel}</FieldLabel>
        <TextInput
          id={cityId}
          name="city"
          placeholder={volunteerPageContent.formCityPlaceholder}
          autoComplete="address-level2"
          required
        />
      </div>
      <div>
        <FieldLabel htmlFor={stateId}>{volunteerPageContent.formStateLabel}</FieldLabel>
        <TextInput
          id={stateId}
          name="state"
          placeholder={volunteerPageContent.formStatePlaceholder}
          autoComplete="address-level1"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <FieldLabel htmlFor={zipId}>{volunteerPageContent.formZipLabel}</FieldLabel>
        <TextInput
          id={zipId}
          name="zip"
          placeholder={volunteerPageContent.formZipPlaceholder}
          autoComplete="postal-code"
          required
        />
      </div>
      <fieldset className="sm:col-span-2">
        <legend className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {volunteerPageContent.formInterestsLabel}
        </legend>
        <p className="mb-4 text-sm leading-7 text-muted-foreground">
          {volunteerPageContent.formInterestsHelp}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {volunteerPageContent.formInterestOptions.map((option) => (
            <label
              key={option.value}
              className="flex items-start gap-3 rounded-md border border-outline-variant/40 bg-surface-container-low px-4 py-4 text-sm leading-6 text-foreground"
            >
              <input
                name="interests"
                type="checkbox"
                value={option.value}
                className="mt-1 rounded-sm border-outline-variant text-primary focus:ring-primary"
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="sm:col-span-2">
        <FieldLabel htmlFor={whyId}>{volunteerPageContent.formWhyLabel}</FieldLabel>
        <textarea
          id={whyId}
          name="why"
          className="w-full rounded-md border border-input bg-surface-container-low px-4 py-4 text-foreground shadow-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          placeholder={volunteerPageContent.formWhyPlaceholder}
          rows={4}
        />
      </div>
      <label className="sm:col-span-2 flex items-start gap-3">
        <input
          name="consent"
          className="mt-1 rounded-sm border-outline-variant text-primary focus:ring-primary"
          type="checkbox"
          value="yes"
          required
        />
        <span className="text-sm leading-7 text-muted-foreground">
          {volunteerPageContent.formConsentLabel}
        </span>
      </label>
      {state.status !== "idle" ? (
        <p
          aria-live="polite"
          className={cn(
            "sm:col-span-2 text-sm",
            state.status === "success" ? "text-green-700" : "text-red-700",
          )}
        >
          {state.message}
        </p>
      ) : null}
      <div className="sm:col-span-2 pt-2">
        <Button
          type="submit"
          disabled={pending}
          className="campaign-button-primary h-14 w-full text-xl font-extrabold uppercase tracking-tight text-white"
        >
          {pending ? "Submitting..." : volunteerPageContent.formSubmitLabel}
        </Button>
      </div>
    </form>
  );
}
