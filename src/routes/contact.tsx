import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, AlertCircle, ExternalLink, Clock } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { ConsultationForm } from "@/components/consultation-form";
import { locations } from "@/lib/site-data";
import { FinalCTA } from "@/components/content-sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact & Book Consultation | Dr. K. Prashanth Kumar",
      },
      {
        name: "description",
        content:
          "Contact Dr. K. Prashanth Kumar's orthopedic clinic in Nirmal and Khanapur. Request an appointment or call +91 90000 06684 for joint, fracture, and sports injury care.",
      },
      {
        property: "og:title",
        content: "Contact & Consultation | Dr. K. Prashanth Kumar",
      },
      {
        property: "og:description",
        content:
          "Direct contact details and secure online consultation request form.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Appointments & Inquiries"
        title="Contact & Consultation"
        text="Request an in-person orthopedic consultation or connect with Dr. K. Prashanth Kumar's clinic desk."
      />

      <section className="section-space bg-background">
        <div className="site-container">
          {/* Emergency Alert */}
          <div className="mb-12 flex items-start gap-4 rounded-xl border border-destructive/20 bg-destructive/5 p-5 text-sm text-foreground">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-destructive" />
            <div>
              <strong className="block font-bold text-destructive">Emergency Medical Notice</strong>
              <p className="mt-1 leading-relaxed text-muted-foreground">
                If you or a family member have experienced acute trauma, severe bleeding, or an open bone fracture,
                please seek immediate care at the nearest hospital emergency room. This online form is for elective
                and non-emergency appointment scheduling.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            {/* Contact Details & Clinic Centers */}
            <div>
              <SectionHeading
                eyebrow="Get in Touch"
                title="Direct Clinic Communications"
                text="Feel free to call or submit your query online. Our clinical coordination desk is available to assist you."
              />

              <div className="mt-8 space-y-5">
                <a
                  href="tel:+919000006684"
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-accent/40"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-105">
                    <Phone className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Telephone Consultation Desk</h3>
                    <p className="mt-1 text-lg font-extrabold text-primary">+91 90000 06684</p>
                    <span className="mt-1 inline-block text-xs text-accent">Tap to call directly</span>
                  </div>
                </a>

                <a
                  href="mailto:drprashanthkumarkokkula@gmail.com"
                  className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-accent/40"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-105">
                    <Mail className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Email Inquiries</h3>
                    <p className="mt-1 break-all text-sm font-semibold text-foreground">
                      drprashanthkumarkokkula@gmail.com
                    </p>
                    <span className="mt-1 inline-block text-xs text-accent">Send an email message</span>
                  </div>
                </a>
              </div>

              <div className="mt-8 border-t border-border pt-8">
                <h3 className="text-base font-bold uppercase tracking-wider text-foreground">
                  Consultation Centers
                </h3>
                <div className="mt-4 space-y-4">
                  {locations.map((loc) => (
                    <div key={loc.name} className="rounded-xl border border-border/70 bg-muted/40 p-5">
                      <div className="flex items-start justify-between">
                        <div>
                          <strong className="block text-base font-bold text-foreground">{loc.name}</strong>
                          <span className="text-xs text-accent font-semibold">{loc.city}</span>
                        </div>
                        <a
                          href={loc.map}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-md bg-background px-3 py-1 text-xs font-bold text-foreground shadow-sm hover:bg-muted"
                        >
                          Directions
                          <ExternalLink className="size-3" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Consultation Request Form */}
            <div id="consultation" className="scroll-mt-28">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-accent">
                  Online Scheduling
                </span>
                <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                  Request a Consultation
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fill out your details and orthopedic concerns below. Our clinic coordinator will review your request and confirm your appointment slot.
                </p>
              </div>

              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
