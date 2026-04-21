"use client";

import { useActionState, useId } from "react";
import { useFormStatus } from "react-dom";

import { subscribeToNewsletter } from "@/app/actions/newsletter";
import type { NewsletterSignupState } from "@/app/actions/newsletter";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NewsletterSignupProps = {
  buttonLabel: string;
  description?: string;
  disclaimer?: string;
  emailLabel: string;
  emailPlaceholder: string;
  source: string;
  title?: string;
  variant?: "inline" | "stacked";
  className?: string;
  formClassName?: string;
  inputClassName?: string;
  buttonClassName?: string;
  messageClassName?: string;
  labelClassName?: string;
  hideLabel?: boolean;
};

function SubmitButton({
  className,
  label,
}: {
  className?: string;
  label: string;
}) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className={className}
    >
      {pending ? "Submitting..." : label}
    </Button>
  );
}

const initialNewsletterSignupState: NewsletterSignupState = {
  status: "idle",
  message: "",
};

export function NewsletterSignup({
  buttonClassName,
  buttonLabel,
  className,
  description,
  disclaimer,
  emailLabel,
  emailPlaceholder,
  formClassName,
  hideLabel = false,
  inputClassName,
  labelClassName,
  messageClassName,
  source,
  title,
  variant = "inline",
}: NewsletterSignupProps) {
  const [state, formAction] = useActionState(
    subscribeToNewsletter,
    initialNewsletterSignupState,
  );
  const inputId = useId();

  return (
    <div className={cn("space-y-4", className)}>
      {title ? <h3 className="text-3xl font-bold tracking-tight">{title}</h3> : null}
      {description ? <p className="text-lg leading-8">{description}</p> : null}

      <form
        action={formAction}
        className={cn(
          "grid gap-3",
          variant === "inline" && "sm:grid-cols-[1fr_auto] sm:items-end",
          formClassName,
        )}
      >
        <input name="source" type="hidden" value={source} />
        <div className={cn(variant === "inline" ? "min-w-0" : "w-full")}>
          <label
            htmlFor={inputId}
            className={cn(hideLabel && "sr-only", labelClassName)}
          >
            {emailLabel}
          </label>
          <input
            id={inputId}
            name="email"
            type="email"
            autoComplete="email"
            placeholder={emailPlaceholder}
            required
            className={cn(
              "h-11 w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors",
              inputClassName,
            )}
          />
        </div>
        <SubmitButton className={buttonClassName} label={buttonLabel} />
      </form>

      {state.status !== "idle" ? (
        <p
          aria-live="polite"
          className={cn(
            "text-sm",
            state.status === "success" ? "text-green-700" : "text-red-700",
            messageClassName,
          )}
        >
          {state.message}
        </p>
      ) : null}

      {disclaimer ? <p className="text-xs uppercase tracking-[0.16em]">{disclaimer}</p> : null}
    </div>
  );
}
