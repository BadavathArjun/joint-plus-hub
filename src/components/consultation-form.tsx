import { useState, useId, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, LoaderCircle, AlertCircle } from "lucide-react";
import { submitConsultation } from "@/lib/consultation.functions";
import { Button } from "@/components/ui/button";

type FormErrors = Partial<
  Record<
    | "fullName"
    | "mobileNumber"
    | "preferredLocation"
    | "preferredDate"
    | "concern"
    | "consentGiven",
    string
  >
>;

export function ConsultationForm() {
  const submit = useServerFn(submitConsultation);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverMessage, setServerMessage] = useState("");
  const formUid = useId();

  const today = new Date().toISOString().slice(0, 10);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = {
      fullName: String(form.get("fullName") ?? "").trim(),
      mobileNumber: String(form.get("mobileNumber") ?? "").trim(),
      preferredLocation: String(form.get("preferredLocation") ?? ""),
      preferredDate: String(form.get("preferredDate") ?? ""),
      concern: String(form.get("concern") ?? "").trim(),
      consentGiven: form.get("consentGiven") === "on",
    };

    const next: FormErrors = {};
    if (values.fullName.length < 2 || values.fullName.length > 100) {
      next.fullName = "Please enter your full name (2–100 characters).";
    }

    // Validate 10-digit Indian phone with optional +91 prefix
    if (!/^(?:\+?91)?[6-9]\d{9}$/.test(values.mobileNumber.replace(/\s+/g, ""))) {
      next.mobileNumber = "Enter a valid 10-digit Indian mobile number (e.g. 9876543210).";
    }

    if (!["Nirmal", "Khanapur"].includes(values.preferredLocation)) {
      next.preferredLocation = "Please select a consultation location.";
    }

    if (!values.preferredDate || values.preferredDate < today) {
      next.preferredDate = "Please choose today or a future consultation date.";
    }

    if (values.concern.length < 10 || values.concern.length > 1000) {
      next.concern = "Briefly describe your orthopedic concern (10–1000 characters).";
    }

    if (!values.consentGiven) {
      next.consentGiven = "You must agree to the privacy consent to submit this request.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    setServerMessage("");

    try {
      await submit({
        data: {
          fullName: values.fullName,
          mobileNumber: values.mobileNumber.replace(/\s+/g, ""),
          preferredLocation: values.preferredLocation as "Nirmal" | "Khanapur",
          preferredDate: values.preferredDate,
          concern: values.concern,
          consentGiven: true,
        },
      });
      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setServerMessage(
        error instanceof Error
          ? error.message
          : "We couldn't submit your request. Please call +91 90000 06684 directly."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-success/30 bg-success-soft p-8 text-center shadow-sm"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="mx-auto size-12 text-success" />
        <h3 className="mt-4 text-2xl font-bold text-foreground">
          Consultation Request Received
        </h3>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground">
          Thank you. Your consultation request details have been securely recorded.
          Our clinic coordination team will get in touch with you shortly.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button
            variant="outline"
            className="min-h-11"
            onClick={() => setStatus("idle")}
          >
            Submit Another Request
          </Button>
          <Button asChild className="min-h-11">
            <a href="tel:+919000006684">Call Clinic Now</a>
          </Button>
        </div>
      </div>
    );
  }

  const fieldClass =
    "mt-2 min-h-12 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 placeholder:text-muted-foreground disabled:opacity-50";

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-premium sm:grid-cols-2 sm:p-8"
      aria-label="Consultation Request Form"
    >
      <Field
        id={`${formUid}-fullName`}
        label="Full Name *"
        error={errors.fullName}
      >
        <input
          id={`${formUid}-fullName`}
          className={fieldClass}
          name="fullName"
          autoComplete="name"
          maxLength={100}
          placeholder="e.g. Rahul Sharma"
          aria-invalid={Boolean(errors.fullName)}
          aria-describedby={errors.fullName ? `${formUid}-fullName-err` : undefined}
          required
        />
      </Field>

      <Field
        id={`${formUid}-mobileNumber`}
        label="Indian Mobile Number *"
        error={errors.mobileNumber}
      >
        <input
          id={`${formUid}-mobileNumber`}
          className={fieldClass}
          name="mobileNumber"
          autoComplete="tel"
          inputMode="tel"
          maxLength={14}
          placeholder="e.g. 9876543210"
          aria-invalid={Boolean(errors.mobileNumber)}
          aria-describedby={errors.mobileNumber ? `${formUid}-mobileNumber-err` : undefined}
          required
        />
      </Field>

      <Field
        id={`${formUid}-preferredLocation`}
        label="Preferred Location *"
        error={errors.preferredLocation}
      >
        <select
          id={`${formUid}-preferredLocation`}
          className={fieldClass}
          name="preferredLocation"
          defaultValue=""
          aria-invalid={Boolean(errors.preferredLocation)}
          aria-describedby={errors.preferredLocation ? `${formUid}-preferredLocation-err` : undefined}
          required
        >
          <option value="" disabled>
            Select Clinic Location
          </option>
          <option value="Nirmal">Nirmal - Dr. Devender Reddy Hospital</option>
          <option value="Khanapur">Khanapur - S.S Children's Hospital</option>
        </select>
      </Field>

      <Field
        id={`${formUid}-preferredDate`}
        label="Preferred Consultation Date *"
        error={errors.preferredDate}
      >
        <input
          id={`${formUid}-preferredDate`}
          className={fieldClass}
          name="preferredDate"
          type="date"
          min={today}
          aria-invalid={Boolean(errors.preferredDate)}
          aria-describedby={errors.preferredDate ? `${formUid}-preferredDate-err` : undefined}
          required
        />
      </Field>

      <div className="sm:col-span-2">
        <Field
          id={`${formUid}-concern`}
          label="Medical Concern / Message *"
          error={errors.concern}
        >
          <textarea
            id={`${formUid}-concern`}
            className={`${fieldClass} min-h-28 py-3`}
            name="concern"
            maxLength={1000}
            placeholder="Briefly describe your orthopedic concern, joint pain, or question (10–1000 characters)..."
            aria-invalid={Boolean(errors.concern)}
            aria-describedby={errors.concern ? `${formUid}-concern-err` : undefined}
            required
          />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
          <input
            className="mt-1 size-4 shrink-0 rounded border-input text-accent focus:ring-accent"
            type="checkbox"
            name="consentGiven"
            required
          />
          <span>
            I agree that my contact details and health concern information may be securely used by Dr. K. Prashanth Kumar’s clinic to process this consultation request.
          </span>
        </label>
        {errors.consentGiven ? (
          <p className="mt-1 text-xs font-medium text-destructive">
            {errors.consentGiven}
          </p>
        ) : null}
      </div>

      {status === "error" ? (
        <div
          className="flex items-center gap-3 rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm text-destructive sm:col-span-2"
          role="alert"
        >
          <AlertCircle className="size-5 shrink-0" />
          <span>{serverMessage}</span>
        </div>
      ) : null}

      <div className="sm:col-span-2">
        <Button
          type="submit"
          size="lg"
          className="min-h-12 w-full text-base font-bold sm:w-auto"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <LoaderCircle className="mr-2 size-5 animate-spin" />
              Submitting Request...
            </>
          ) : (
            "Request Consultation"
          )}
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <span id={`${id}-err`} className="mt-1 block text-xs font-medium text-destructive">
          {error}
        </span>
      ) : null}
    </div>
  );
}