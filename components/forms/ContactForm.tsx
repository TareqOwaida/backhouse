"use client";

import { useActionState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { submitInquiry } from "@/app/contact/actions";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Field";
import {
  initialContactState,
  locationOptions,
  situationOptions,
} from "@/lib/contact";
import { site } from "@/lib/site";

export function ContactForm({ plan }: { plan?: string }) {
  const [state, action, pending] = useActionState(submitInquiry, initialContactState);
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.status !== "idle") {
      statusRef.current?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="rounded-md border border-line bg-paper-2 p-8 outline-none sm:p-10"
      >
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-green text-paper">
          <Check aria-hidden="true" className="size-5" strokeWidth={2} />
        </span>
        <h2 className="mt-6 text-h3">Got it. We&rsquo;ll be in touch within a business day.</h2>
        <p className="mt-3 max-w-md text-body text-ink-2">
          Someone from the bookkeeping team, not a salesperson, will reply with a
          couple of times for a call. If it&rsquo;s urgent, call{" "}
          <a href={site.phoneHref} className="whitespace-nowrap text-ink underline underline-offset-4">
            {site.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  const { errors, values } = state;

  return (
    <form action={action} noValidate className="relative space-y-7">
      {state.status === "error" && state.message && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="rounded-sm border border-error/40 bg-error/[0.06] px-4 py-3 text-small text-error outline-none"
        >
          {state.message}{" "}
          {Object.keys(errors).length === 0 && (
            <a href={`mailto:${site.email}`} className="underline underline-offset-4">
              {site.email}
            </a>
          )}
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          id="name"
          name="name"
          label="Your name"
          autoComplete="name"
          required
          defaultValue={values.name}
          error={errors.name}
        />
        <Input
          id="restaurant"
          name="restaurant"
          label="Restaurant"
          autoComplete="organization"
          placeholder="e.g. Marrow & Rye"
          required
          defaultValue={values.restaurant}
          error={errors.restaurant}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          autoComplete="email"
          inputMode="email"
          required
          defaultValue={values.email}
          error={errors.email}
        />
        <Input
          id="phone"
          name="phone"
          type="tel"
          label="Phone"
          autoComplete="tel"
          inputMode="tel"
          optional
          defaultValue={values.phone}
          error={errors.phone}
        />
      </div>

      {/* React resets the form after an action and only re-applies defaultValue
          to inputs, not selects. Re-keying on the returned value keeps the
          owner's choices in place after a validation error. */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Select
          key={`locations-${values.locations}`}
          id="locations"
          name="locations"
          label="Locations"
          placeholder="Choose one"
          options={[...locationOptions]}
          required
          defaultValue={values.locations}
          error={errors.locations}
        />
        <Select
          key={`situation-${values.situation}`}
          id="situation"
          name="situation"
          label="Where do your books stand?"
          placeholder="Choose one"
          options={[...situationOptions]}
          required
          defaultValue={values.situation}
          error={errors.situation}
        />
      </div>

      <Textarea
        id="message"
        name="message"
        label="Anything we should know?"
        optional
        placeholder="POS and payroll systems, what's frustrating you, anything you're deciding soon."
        defaultValue={values.message}
        error={errors.message}
        hint="Two or three lines is plenty. We'll ask the rest on the call."
      />

      {plan && <input type="hidden" name="plan" value={plan} />}

      {/* Honeypot, hidden from real users. */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg" disabled={pending} aria-busy={pending}>
          {pending ? "Sending…" : "Request a call"}
        </Button>
        <p className="text-small text-muted">
          No sales team. You&rsquo;ll hear from a bookkeeper.
        </p>
      </div>
    </form>
  );
}
