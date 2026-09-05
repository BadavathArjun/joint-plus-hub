import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import { FinalCTA } from "@/components/content-sections";
import { ShieldCheck, Lock, EyeOff, FileText } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      {
        title: "Privacy Policy | Dr. K. Prashanth Kumar",
      },
      {
        name: "description",
        content:
          "Privacy policy explaining how patient consultation request information and personal details are handled securely and confidentially by Dr. K. Prashanth Kumar's clinic.",
      },
      {
        property: "og:title",
        content: "Privacy Policy | Dr. K. Prashanth Kumar",
      },
      {
        property: "og:description",
        content:
          "Confidential and ethical patient data handling policy.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Data Protection & Ethics"
        title="Privacy Policy"
        text="How we protect your confidential information and medical inquiries."
      />

      <section className="section-space bg-background">
        <div className="site-container max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-10 text-base leading-relaxed text-muted-foreground">
            {/* Overview */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-lg bg-accent-soft text-accent">
                  <ShieldCheck className="size-5" />
                </span>
                <h2 className="text-xl font-bold text-foreground">
                  Our Commitment to Patient Privacy
                </h2>
              </div>
              <p className="mt-4">
                Dr. K. Prashanth Kumar’s medical practice values the trust you place in us when sharing your personal
                and health-related information. This Privacy Policy outlines how consultation requests submitted through
                this website are received, stored, and managed in compliance with ethical healthcare standards.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">1. Information We Collect</h2>
              <p className="mt-3">
                When you choose to submit a consultation request through this website, we collect only the information
                necessary to coordinate your medical inquiry:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li><strong className="text-foreground">Full Name:</strong> To identify you in clinical communications.</li>
                <li><strong className="text-foreground">Indian Mobile Number:</strong> To contact you via call or SMS to confirm your consultation.</li>
                <li><strong className="text-foreground">Preferred Clinic Location:</strong> To route your inquiry to either Nirmal or Khanapur consultation centers.</li>
                <li><strong className="text-foreground">Preferred Date:</strong> To facilitate schedule alignment.</li>
                <li><strong className="text-foreground">Medical Concern / Message:</strong> A brief description of your joint, fracture, or orthopedic inquiry.</li>
              </ul>
            </div>

            {/* How Your Data is Protected */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">2. Security and Access Controls</h2>
              <p className="mt-3">
                We implement technical safeguards to prevent unauthorized access to consultation records:
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border/80 bg-muted/40 p-5">
                  <Lock className="size-5 text-accent" />
                  <strong className="mt-2 block text-sm text-foreground">Row-Level Security</strong>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Our database uses strict row-level protection. Consultation requests are not publicly queryable or readable by unauthorized visitors.
                  </p>
                </div>
                <div className="rounded-xl border border-border/80 bg-muted/40 p-5">
                  <EyeOff className="size-5 text-accent" />
                  <strong className="mt-2 block text-sm text-foreground">No Third-Party Advertising</strong>
                  <p className="mt-1 text-xs text-muted-foreground">
                    We never sell, rent, or trade your phone numbers, medical messages, or personal details to third-party advertisers or brokers.
                  </p>
                </div>
              </div>
            </div>

            {/* Purpose of Data Use */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">3. Purpose of Processing</h2>
              <p className="mt-3">
                Your information is used strictly for:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Directly scheduling, rescheduling, or confirming your orthopedic consultation.</li>
                <li>Communicating clinical or logistical updates regarding your visit.</li>
                <li>Maintaining administrative records of patient inquiries.</li>
              </ul>
            </div>

            {/* Contact for Privacy Questions */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-base font-bold text-foreground">Inquiries & Data Deletion Requests</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                If you have questions about this privacy policy, or wish to request the removal or update of your submitted inquiry information, please contact Dr. K. Prashanth Kumar’s clinic desk at:
              </p>
              <p className="mt-3 font-semibold text-foreground">
                Email: <a href="mailto:drprashanthkumarkokkula@gmail.com" className="text-accent hover:underline">drprashanthkumarkokkula@gmail.com</a><br />
                Telephone: <a href="tel:+919000006684" className="text-accent hover:underline">+91 90000 06684</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
