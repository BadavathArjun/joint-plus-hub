import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, CheckCircle2, ShieldCheck, Stethoscope } from "lucide-react";
import doctorAsset from "@/assets/dr-prashanth-kumar.png.asset.json";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ContactCards, FinalCTA, WhyChoose } from "@/components/content-sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Dr. K. Prashanth Kumar | Orthopedic Surgeon",
      },
      {
        name: "description",
        content:
          "Learn about Dr. K. Prashanth Kumar (MBBS, D.Ortho, DNB Ortho), his 10+ years of clinical experience, orthopedic qualifications, and patient-centered care philosophy.",
      },
      {
        property: "og:title",
        content: "About Dr. K. Prashanth Kumar | Orthopedic & Joint Specialist",
      },
      {
        property: "og:description",
        content:
          "Dedicated Orthopedic & Joint Replacement Surgeon serving Nirmal and Khanapur with over a decade of clinical experience.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="Doctor Biography"
        title="About Dr. K. Prashanth Kumar"
        text="Dedicated to restoring movement, relieving joint discomfort, and providing patient-first orthopedic care."
      />

      <section className="section-space bg-background">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-premium">
              <img
                src={doctorAsset.url}
                alt="Dr. K. Prashanth Kumar, Orthopedic and Joint Replacement Surgeon"
                width="768"
                height="768"
                className="aspect-[4/5] w-full object-cover object-top"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -bottom-4 right-4 rounded-xl border border-primary/20 bg-primary p-5 text-primary-foreground shadow-premium sm:right-6">
              <span className="text-xs font-bold uppercase tracking-wider text-accent-soft">
                Medical Credentials
              </span>
              <strong className="mt-1 block text-lg font-bold">
                MBBS, D.Ortho, DNB Ortho
              </strong>
              <p className="mt-0.5 text-xs text-primary-foreground/80">
                Orthopedic & Joint Replacement Surgeon
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Clinical Background"
              title="A Decade of Orthopedic Dedication"
              text="Combining specialized training with compassionate, individual-focused medical care."
            />

            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Dr. K. Prashanth Kumar is an experienced Orthopedic and Joint Replacement Surgeon with
                over 10 years of clinical practice. His specialized training encompasses joint replacement
                procedures, trauma and complex fracture management, sports injuries, and arthritis care.
              </p>
              <p>
                Dr. Prashanth Kumar believes that effective orthopedic care begins with listening. By taking
                the time to understand every patient’s symptoms, daily physical demands, and health background,
                he formulates tailored treatment plans that prioritize long-term joint function and safety.
              </p>
              <p>
                Whenever appropriate, conservative management—such as targeted medications, lifestyle adaptations,
                and physical rehabilitation guidance—is explored before considering procedural or surgical intervention.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-muted/60 p-4">
                <span className="text-xs font-bold uppercase text-accent">Qualifications</span>
                <strong className="mt-1.5 block text-sm font-bold text-foreground">
                  MBBS, D.Ortho, DNB Ortho
                </strong>
              </div>
              <div className="rounded-xl border border-border bg-muted/60 p-4">
                <span className="text-xs font-bold uppercase text-accent">Experience</span>
                <strong className="mt-1.5 block text-sm font-bold text-foreground">
                  10+ Years Practice
                </strong>
              </div>
              <div className="rounded-xl border border-border bg-muted/60 p-4">
                <span className="text-xs font-bold uppercase text-accent">Specialization</span>
                <strong className="mt-1.5 block text-sm font-bold text-foreground">
                  Joints & Trauma Care
                </strong>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="min-h-12 font-bold shadow-md">
                <Link to="/contact" hash="consultation">
                  <CalendarDays className="mr-2 size-5" />
                  Request a Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-12 font-semibold">
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Care Pillars */}
      <section className="section-space bg-muted/50">
        <div className="site-container">
          <SectionHeading
            eyebrow="Clinical Philosophy"
            title="Core Principles of Patient Care"
            text="How Dr. Prashanth Kumar approaches diagnosis, treatment, and long-term recovery."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Stethoscope,
                title: "Thorough Clinical Assessment",
                text: "Comprehensive physical examinations and careful review of imaging to identify the root cause of joint and musculoskeletal pain.",
              },
              {
                icon: ShieldCheck,
                title: "Conservative Care First",
                text: "Prioritizing non-surgical options, therapeutic exercises, and joint protection strategies whenever clinically advisable.",
              },
              {
                icon: CheckCircle2,
                title: "Informed Patient Decisions",
                text: "Clear, transparent discussions about options, surgical requirements, and post-procedure recovery timelines with zero pressure.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:shadow-premium"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />
      <ContactCards />
      <FinalCTA />
    </>
  );
}
