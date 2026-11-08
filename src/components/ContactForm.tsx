"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Info, Loader2, Send } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { formLabels } from "@/content/contact";

type FormState = "idle" | "submitting" | "success" | "error" | "unconfigured";

type FieldErrors = Partial<
  Record<"name" | "email" | "subject" | "message", boolean>
>;

/**
 * Contact form with client-side validation and honest submit states.
 *
 * Backend configuration (site owner):
 *   Set NEXT_PUBLIC_CONTACT_FORM_ENDPOINT to a URL that accepts a
 *   JSON POST { name, email, subject, message } — e.g. a Formspree
 *   endpoint, a Supabase Edge Function, or your own API route.
 *   Until it is set, submitting shows a clear "not connected" notice
 *   instead of pretending the message was delivered.
 */
export default function ContactForm() {
  const { t } = useLanguage();
  const labels = formLabels;

  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [honeypot, setHoneypot] = useState("");

  const endpoint = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT;

  function validate(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }): FieldErrors {
    const next: FieldErrors = {
      name: data.name.trim().length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()),
      subject: data.subject.trim().length < 2,
      message: data.message.trim().length < 10,
    };
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "submitting") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    // Honeypot filled → almost certainly a bot. Reset silently.
    if (honeypot !== "") {
      form.reset();
      return;
    }

    // No backend configured → be honest about it.
    if (!endpoint) {
      setState("unconfigured");
      return;
    }

    setState("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      form.reset();
      setState("success");
    } catch {
      setState("error");
    }
  }

  const inputClass = (invalid: boolean) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500/60 focus:border-gold-500 ${
      invalid ? "border-red-400" : "border-navy-200"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot — hidden from real visitors */}
      <div className="sr-only" aria-hidden>
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-navy-900">
            {t(labels.name)} <span aria-hidden>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder={t(labels.namePlaceholder)}
            aria-invalid={Boolean(errors.name)}
            className={inputClass(Boolean(errors.name))}
          />
          {errors.name ? (
            <p role="alert" className="mt-1.5 text-xs text-red-600">
              {t(labels.errors.name)}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-navy-900">
            {t(labels.email)} <span aria-hidden>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={t(labels.emailPlaceholder)}
            aria-invalid={Boolean(errors.email)}
            className={inputClass(Boolean(errors.email))}
          />
          {errors.email ? (
            <p role="alert" className="mt-1.5 text-xs text-red-600">
              {t(labels.errors.email)}
            </p>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium text-navy-900">
          {t(labels.subject)} <span aria-hidden>*</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          placeholder={t(labels.subjectPlaceholder)}
          aria-invalid={Boolean(errors.subject)}
          className={inputClass(Boolean(errors.subject))}
        />
        {errors.subject ? (
          <p role="alert" className="mt-1.5 text-xs text-red-600">
            {t(labels.errors.subject)}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-navy-900">
          {t(labels.message)} <span aria-hidden>*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder={t(labels.messagePlaceholder)}
          aria-invalid={Boolean(errors.message)}
          className={`${inputClass(Boolean(errors.message))} resize-y`}
        />
        {errors.message ? (
          <p role="alert" className="mt-1.5 text-xs text-red-600">
            {t(labels.errors.message)}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-cream-50 transition-colors hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {state === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
        ) : (
          <Send className="h-4 w-4" aria-hidden />
        )}
        {state === "submitting" ? t(labels.submitting) : t(labels.submit)}
      </button>

      {/* Status messages */}
      <div aria-live="polite">
        {state === "success" ? (
          <div className="flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold">{t(labels.successTitle)}</p>
              <p className="mt-0.5">{t(labels.successText)}</p>
            </div>
          </div>
        ) : null}

        {state === "error" ? (
          <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
            <div>
              <p className="font-semibold">{t(labels.errorTitle)}</p>
              <p className="mt-0.5">{t(labels.errorText)}</p>
            </div>
          </div>
        ) : null}

        {state === "unconfigured" ? (
          <div className="flex items-start gap-3 rounded-xl border border-gold-300 bg-gold-50 p-4 text-sm text-navy-800">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" aria-hidden />
            <div>
              <p className="font-semibold">{t(labels.unconfiguredTitle)}</p>
              <p className="mt-0.5">{t(labels.unconfiguredText)}</p>
            </div>
          </div>
        ) : null}
      </div>
    </form>
  );
}
