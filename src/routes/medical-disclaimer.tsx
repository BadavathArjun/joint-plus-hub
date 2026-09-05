import { createFileRoute, Link } from "@tanstack/react-router";
import { PageBanner } from "@/components/page-banner";
import { FinalCTA } from "@/components/content-sections";
import { AlertCircle, ShieldAlert, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/medical-disclaimer")({
  head: () => ({
    meta: [
      {
        title: "Medical Disclaimer | Dr. K. Prashanth Kumar",
      },
      {
        name: "description",
        content:
          "Important medical disclaimer regarding the educational nature of website content, emergency medical guidance, and physician-patient relationship clarification.",
      },
      {
        property: "og:title",
        content: "Medical Disclaimer | Dr. K. Prashanth Kumar",
      },
      {
        property: "og:description",
        content:
          "Official medical disclaimer and patient guidance notice.",
      },
    ],
  }),
  component: MedicalDisclaimerPage,
});

function MedicalDisclaimerPage() {
  return (
    <>
      <PageBanner
        eyebrow="Important Notice"
        title="Medical Disclaimer"
        text="Please read this essential notice regarding information provided on this website."
      />

      <section className="section-space bg-background">
        <div className="site-container max-w-4xl">
          {/* Urgent Emergency Warning */}
          <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="size-6 shrink-0 text-destructive mt-1" />
              <div>
                <h2 className="text-xl font-bold text-destructive">
                  Emergency Medical Situations
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground">
                  If you or someone in your care has experienced an acute, life-threatening injury, an open bone fracture
                  with bleeding, head trauma, sudden loss of limb sensation, or intolerable trauma, <strong>do not wait for an online reply</strong>.
                  Proceed immediately to the nearest hospital casualty or emergency trauma facility, or call emergency services.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate mt-10 max-w-none space-y-8 text-base leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                1. Informational and Educational Purpose Only
              </h2>
              <p className="mt-3">
                All materials, articles, clinical guidance, service descriptions, and anatomical explanations on this website
                are published for general informational and patient educational purposes only. They are not intended, and must not
                be construed, as personal medical advice, clinical diagnosis, or a definitive course of treatment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                2. No Doctor-Patient Relationship Established
              </h2>
              <p className="mt-3">
                Browsing this website, reading patient education articles, or submitting a consultation request form does not
                create a formal doctor-patient relationship between you and Dr. K. Prashanth Kumar. A physician-patient relationship
                is only established upon in-person clinical consultation, mutual consent, and formal registration at the hospital clinic.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                3. Individualized Nature of Orthopedic Care
              </h2>
              <p className="mt-3">
                Every orthopedic condition, joint degeneration pattern, bone fracture, and surgical candidacy varies widely depending
                on individual medical history, bone density, age, physical activity levels, and comorbidities. Never disregard professional
                medical advice or delay seeking an evaluation because of something you have read on this website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                4. Illustrative Imagery & No Guarantee of Results
              </h2>
              <p className="mt-3">
                Any medical photographs, models, diagrams, or clinical care scenes displayed on this website are illustrative
                and intended solely to elucidate medical concepts. They do not portray guaranteed outcomes or specific surgical results.
                Medical treatments and surgical interventions involve inherent risks, which should always be discussed directly with
                your treating surgeon.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground">Have Specific Orthopedic Concerns?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                For a personalized and accurate evaluation of your joint or bone symptoms, schedule an in-person consultation with Dr. K. Prashanth Kumar.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button asChild>
                  <Link to="/contact" hash="consultation">Request Consultation</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:+919000006684">
                    <Phone className="mr-2 size-4" />
                    Call Clinic (+91 90000 06684)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
