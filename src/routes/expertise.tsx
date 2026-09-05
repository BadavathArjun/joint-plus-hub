import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { expertise } from "@/lib/site-data";
import { FinalCTA, RheumatologySection } from "@/components/content-sections";

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      {
        title: "Clinical Expertise | Dr. K. Prashanth Kumar",
      },
      {
        name: "description",
        content:
          "Explore Dr. K. Prashanth Kumar's clinical expertise across Joint Replacement, Rheumatology & Arthritis, Trauma & Fracture Care, Sports Injuries, and Complex Trauma.",
      },
      {
        property: "og:title",
        content: "Areas of Expertise | Dr. K. Prashanth Kumar",
      },
      {
        property: "og:description",
        content:
          "Specialized orthopedic care in joint reconstruction, fracture management, and arthritis treatment.",
      },
    ],
  }),
  component: ExpertisePage,
});

const detailedExpertise = [
  {
    title: "Joint Replacement",
    tagline: "Restoring Joint Function & Alleviating Chronic Degeneration",
    desc: "Joint replacement surgery involves replacing damaged, osteoarthritic, or severely worn joint surfaces with precision medical implants. Dr. Prashanth Kumar performs thorough evaluations to determine surgical candidacy and guides patients through pre-operative planning and structured recovery.",
    highlights: [
      "Total and partial knee joint evaluation",
      "Hip joint preservation and replacement care",
      "Implant selection suited to patient anatomy and lifestyle",
      "Structured post-surgical rehabilitation pathways",
    ],
  },
  {
    title: "Rheumatology & Arthritis",
    tagline: "Comprehensive Inflammatory and Degenerative Joint Management",
    desc: "Arthritis encompasses multiple conditions causing joint inflammation, stiffness, and cartilage loss. Dr. Prashanth Kumar manages both degenerative osteoarthritis and autoimmune inflammatory arthritis through structured medical and physical modalities.",
    highlights: [
      "Clinical assessment of joint swelling and pain",
      "Evaluation of autoimmune joint disorders",
      "Non-surgical symptom alleviation and flare management",
      "Mobility preservation and physical therapy guidance",
    ],
  },
  {
    title: "Trauma & Fracture Care",
    tagline: "Prompt, Evidence-Based Stabilization and Bone Healing",
    desc: "From minor fractures to acute musculoskeletal trauma, effective stabilization ensures correct anatomical alignment and optimal bone healing. Treatment ranges from casting and splinting to surgical internal fixation depending on the fracture severity.",
    highlights: [
      "Comprehensive clinical assessment and radiographic analysis",
      "Conservative fracture immobilization (casts and splints)",
      "Surgical reduction and internal fixation where indicated",
      "Structured follow-up to ensure complete union and recovery",
    ],
  },
  {
    title: "Sports Injury Management",
    tagline: "Protecting Athletes and Active Individuals",
    desc: "Athletic and recreational injuries require accurate diagnosis to prevent chronic instability or accelerated joint wear. Care focuses on soft tissue injuries, ligament sprains, meniscus tears, and tendon concerns.",
    highlights: [
      "Evaluation of knee ligament, meniscus, and tendon injuries",
      "Shoulder and ankle stability assessment",
      "Graduated return-to-activity protocols",
      "Preventive guidance to reduce re-injury risks",
    ],
  },
  {
    title: "Complex Trauma",
    tagline: "Specialized Orthopedic Care for Severe Musculoskeletal Injuries",
    desc: "Complex traumatic events often involve multi-fragment fractures, joint surface disruptions, or combined soft-tissue trauma requiring advanced surgical reconstruction and meticulous post-acute monitoring.",
    highlights: [
      "Management of intra-articular and multi-fragment fractures",
      "Anatomical joint reconstruction",
      "Long-term recovery planning and monitoring",
      "Coordination with supportive rehabilitation teams",
    ],
  },
];

function ExpertisePage() {
  return (
    <>
      <PageBanner
        eyebrow="Clinical Focus"
        title="Areas of Expertise"
        text="Specialized orthopedic care designed to address complex joint conditions, bone fractures, and musculoskeletal health."
      />

      <section className="section-space bg-background">
        <div className="site-container">
          <SectionHeading
            eyebrow="Core Competencies"
            title="Specialized Clinical Focus"
            text="Each discipline is backed by specialized training and 10+ years of dedicated practice."
          />

          <div className="mt-12 space-y-8">
            {detailedExpertise.map((item, index) => {
              const matched = expertise[index];
              const Icon = matched ? matched.icon : CheckCircle2;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-8 shadow-sm transition hover:border-accent/40 hover:shadow-premium"
                >
                  <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent">
                          <Icon className="size-6" />
                        </span>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-accent">
                            Specialty 0{index + 1}
                          </span>
                          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                            {item.title}
                          </h2>
                        </div>
                      </div>

                      <p className="mt-4 text-base font-semibold text-primary">
                        {item.tagline}
                      </p>
                      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>

                      <div className="mt-6">
                        <Button asChild size="default" className="font-bold">
                          <Link to="/contact" hash="consultation">
                            <CalendarDays className="mr-2 size-4" />
                            Consult on {item.title}
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center rounded-xl border border-border/80 bg-muted/40 p-6">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
                        Key Clinical Components
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <RheumatologySection />
      <FinalCTA />
    </>
  );
}
