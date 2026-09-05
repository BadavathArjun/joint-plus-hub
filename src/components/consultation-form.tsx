import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { submitConsultation } from "@/lib/consultation.functions";
import { Button } from "@/components/ui/button";

type FormErrors = Partial<Record<"fullName" | "mobileNumber" | "preferredLocation" | "preferredDate" | "concern" | "consentGiven", string>>;

export function ConsultationForm() {
  const submit = useServerFn(submitConsultation);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [message, setMessage] = useState("");
  const today = new Date().toISOString().slice(0, 10);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const values = {
      fullName: String(form.get("fullName") ?? "").trim(), mobileNumber: String(form.get("mobileNumber") ?? "").trim(),
      preferredLocation: String(form.get("preferredLocation") ?? ""), preferredDate: String(form.get("preferredDate") ?? ""),
      concern: String(form.get("concern") ?? "").trim(), consentGiven: form.get("consentGiven") === "on",
    };
    const next: FormErrors = {};
    if (values.fullName.length < 2 || values.fullName.length > 100) next.fullName = "Enter your full name.";
    if (!/^(?:\+?91)?[6-9]\d{9}$/.test(values.mobileNumber)) next.mobileNumber = "Enter a valid 10-digit Indian mobile number.";
    if (!(["Nirmal", "Khanapur"] as string[]).includes(values.preferredLocation)) next.preferredLocation = "Choose a consultation location.";
    if (!values.preferredDate || values.preferredDate < today) next.preferredDate = "Choose today or a future date.";
    if (values.concern.length < 10 || values.concern.length > 1000) next.concern = "Briefly describe your concern (10–1000 characters).";
    if (!values.consentGiven) next.consentGiven = "Consent is required to submit your request.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("loading"); setMessage("");
    try {
      await submit({ data: { ...values, preferredLocation: values.preferredLocation as "Nirmal" | "Khanapur", consentGiven: true } });
      setStatus("success"); event.currentTarget.reset();
    } catch (error) {
      setStatus("error"); setMessage(error instanceof Error ? error.message : "Please try again or call the clinic.");
    }
  }
  if (status === "success") return <div className="rounded-lg border border-success/30 bg-success-soft p-8 text-center" role="status"><CheckCircle2 className="mx-auto size-10 text-success"/><h3 className="mt-4 text-xl font-bold">Request received</h3><p className="mt-2 text-muted-foreground">Thank you. The clinic can use your details to follow up about your consultation request.</p><Button className="mt-6" variant="outline" onClick={() => setStatus("idle")}>Send another request</Button></div>;
  const fieldClass = "mt-2 min-h-12 w-full rounded-md border border-input bg-background px-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/25 placeholder:text-muted-foreground";
  return <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
    <Field label="Full Name" error={errors.fullName}><input className={fieldClass} name="fullName" autoComplete="name" maxLength={100} placeholder="Your full name" /></Field>
    <Field label="Mobile Number" error={errors.mobileNumber}><input className={fieldClass} name="mobileNumber" autoComplete="tel" inputMode="tel" maxLength={13} placeholder="10-digit mobile number" /></Field>
    <Field label="Preferred Location" error={errors.preferredLocation}><select className={fieldClass} name="preferredLocation" defaultValue=""><option value="" disabled>Select a location</option><option>Nirmal</option><option>Khanapur</option></select></Field>
    <Field label="Preferred Consultation Date" error={errors.preferredDate}><input className={fieldClass} name="preferredDate" type="date" min={today} /></Field>
    <div className="sm:col-span-2"><Field label="Message / Concern" error={errors.concern}><textarea className={`${fieldClass} min-h-28 py-3`} name="concern" maxLength={1000} placeholder="Briefly tell us what you would like to discuss" /></Field></div>
    <div className="sm:col-span-2"><label className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"><input className="mt-1 size-4 accent-primary" type="checkbox" name="consentGiven" />I agree that my contact details and concern may be used to respond to this consultation request.</label>{errors.consentGiven ? <p className="mt-1 text-sm text-destructive">{errors.consentGiven}</p> : null}</div>
    {status === "error" ? <p className="sm:col-span-2 text-sm text-destructive" role="alert">{message}</p> : null}
    <div className="sm:col-span-2"><Button size="lg" className="min-h-12 w-full sm:w-auto" disabled={status === "loading"}>{status === "loading" ? <><LoaderCircle className="animate-spin"/>Submitting…</> : "Request Consultation"}</Button></div>
  </form>;
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="block text-sm font-semibold text-foreground">{label}{children}{error ? <span className="mt-1 block font-normal text-destructive">{error}</span> : null}</label>;
}