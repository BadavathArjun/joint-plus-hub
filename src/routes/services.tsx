import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, CheckCircle2, Stethoscope } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";
import { CareProcess, FinalCTA } from "@/components/content-sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Orthopedic Services | Dr. K. Prashanth Kumar",
      },
      {
        name: "description",
        content:
          "Comprehensive orthopedic services by Dr. K. Prashanth Kumar including Joint Replacement Surgery, Fracture Treatment, Arthroscopy & Spine Care, Sports Injuries, Conservative Management, and Paediatric Trauma.",
      },
      {
        property: "og:title",
        content: "Orthopedic Services | Dr. K. Prashanth Kumar",
      },
      {
        property: "og:description",
        content:
          "Evidence-based surgical and non-surgical orthopedic services in Nirmal and Khanapur.",
      },
    ],
  }),
  component: ServicesPage,
});

const serviceDetails: Record<
  string,
  {
    overview: string;
    details: string[];
    candidates: string;
  }
> = {
  "01": {
    overview:
      "Precision surgical solutions for severe joint arthritis, cartilage deterioration, and structural joint damage, aimed at restoring pain-free functional mobility.",
    details: [
      "Total and partial knee replacement evaluations",
      "Hip joint arthroplasty and reconstructive care",
      "Selection of evidence-backed prostheses",
      "Comprehensive pre-operative assessment and peri-operative counseling",
    ],
    candidates:
      "Patients with chronic, debilitating joint pain unresponsive to conservative medical therapy.",
  },
  "02": {
    overview:
      "Prompt diagnosis and definitive anatomical treatment for closed and open bone fractures, ensuring reliable union, alignment, and functional recovery.",
    details: [
      "Detailed radiographic review and clinical staging",
      "Cast immobilization and functional bracing",
      "Open reduction and internal fixation (ORIF) with plates, screws, or intramedullary nails",
      "Structured rehabilitation and bone union monitoring",
    ],
    candidates:
      "Individuals experiencing acute traumatic injuries, falls, or suspected bone fractures.",
  },
  "03": {
    overview:
      "Minimally invasive diagnostic and operative arthroscopic techniques alongside clinical care for degenerative and mechanical spinal discomfort.",
    details: [
      "Minimally invasive arthroscopic joint inspection and repair",
      "Meniscal preservation and joint debridement",
      "Conservative spinal care, ergonomic review, and posture counseling",
      "Physical therapy coordination for core and spinal stability",
    ],
    candidates:
      "Patients with persistent joint locking, meniscus concerns, or mechanical back/neck discomfort.",
  },
  "04": {
    overview:
      "Specialized evaluation and management for ligament tears, tendon injuries, and overuse syndromes resulting from athletic activity and physical recreation.",
    details: [
      "ACL, PCL, and collateral ligament injury assessments",
      "Tendonitis, sprains, and muscle strain rehabilitation",
      "Guided return-to-sport protocols",
      "Preventive cross-training and injury mitigation advice",
    ],
    candidates:
      "Athletes, fitness enthusiasts, and active individuals experiencing sport-related pain.",
  },
  "05": {
    overview:
      "Prioritizing non-surgical management for orthopedic conditions whenever clinically appropriate, avoiding unnecessary surgery through evidence-based alternatives.",
    details: [
      "Targeted pharmacological management and anti-inflammatory strategies",
      "Joint preservation exercises and mobility preservation",
      "Activity and lifestyle modifications",
      "Customized splinting and therapeutic physical regimens",
    ],
    candidates:
      "Patients with mild-to-moderate arthritis, early joint wear, or stable non-displaced injuries.",
  },
  "06": {
    overview:
      "Gentle, specialized orthopedic trauma management for children and adolescents, taking growing bones, open growth plates, and pediatric anatomy into careful consideration.",
    details: [
      "Evaluation of pediatric fractures and epiphyseal/growth plate injuries",
      "Kid-friendly casting, splinting, and immobilization",
      "Monitoring for symmetrical bone growth and normal remodeling",
      "Reassurance and transparent communication with parents",
    ],
    candidates:
      "Children and teenagers suffering from acute falls, sports fractures, or childhood bone trauma.",
  },
};

function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Clinical Offerings"
        title="Comprehensive Orthopedic Services"
        text="From initial clinical consultation and diagnostic imaging to surgical reconstruction and guided rehabilitation."
      />

      <section className="section-space bg-background">
        <div className="site-container">
          <SectionHeading
            eyebrow="Our Care Portfolio"
            title="Six Pillars of Orthopedic Care"
            text="Every service is delivered with attention to safety, evidence-based guidelines, and patient comfort."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([number, title, shortDesc]) => {
              const detail = serviceDetails[number];

              return (
                <article
                  key={number}
                  className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition duration-300 hover:border-accent/40 hover:shadow-premium"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                        Service {number}
                      </span>
                      <Stethoscope className="size-5 text-accent" />
                    </div>

                    <h2 className="mt-6 text-2xl font-bold text-foreground">
                      {title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {detail?.overview ?? shortDesc}
                    </p>

                    <div className="mt-6 border-t border-border pt-4">
                      <strong className="block text-xs font-bold uppercase tracking-wider text-foreground">
                        Scope of Treatment:
                      </strong>
                      <ul className="mt-3 space-y-2">
                        {detail?.details.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-accent" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {detail?.candidates ? (
                      <div className="mt-5 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
                        <span className="font-semibold text-foreground">Ideal for: </span>
                        {detail.candidates}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-8 pt-4">
                    <Button asChild className="w-full font-bold">
                      <Link to="/contact" hash="consultation">
                        <CalendarDays className="mr-2 size-4" />
                        Inquire About This Service
                      </Link>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CareProcess />
      <FinalCTA />
    </>
  );
}
