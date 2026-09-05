import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, CheckCircle2, ShieldAlert } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { GalleryLightbox, type GalleryItem } from "@/components/gallery-lightbox";
import xrayImage from "@/assets/orthopedic-xray.jpg";
import rehabImage from "@/assets/rehabilitation-care.jpg";
import deskImage from "@/assets/joint-care-desk.jpg";
import { CareProcess, FinalCTA } from "@/components/content-sections";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      {
        title: "Clinical Care Gallery & Success Stories | Dr. K. Prashanth Kumar",
      },
      {
        name: "description",
        content:
          "Privacy-conscious visual overview of orthopedic assessment, radiographic imaging review, joint consultations, and guided recovery pathways with Dr. K. Prashanth Kumar.",
      },
      {
        property: "og:title",
        content: "Clinical Care Gallery | Dr. K. Prashanth Kumar",
      },
      {
        property: "og:description",
        content:
          "Visual insights into orthopedic diagnostics, surgical care planning, and structured rehabilitation.",
      },
    ],
  }),
  component: SuccessStoriesPage,
});

const galleryItems: GalleryItem[] = [
  {
    id: "xray",
    src: xrayImage,
    alt: "Radiological imaging review in orthopedic diagnostic setting",
    caption: "Radiographic Imaging & Bone Alignment Review",
    tag: "Diagnostic Assessment",
  },
  {
    id: "rehab",
    src: rehabImage,
    alt: "Guided orthopedic rehabilitation and physical mobility exercise",
    caption: "Structured Rehabilitation & Functional Mobility Support",
    tag: "Post-Acute Recovery",
  },
  {
    id: "desk",
    src: deskImage,
    alt: "Orthopedic consultation room with anatomical joint model for patient counseling",
    caption: "Evidence-Based Consultation & Surgical Counseling",
    tag: "Clinical Consultation",
  },
];

function SuccessStoriesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Clinical Care"
        title="Success Stories & Care Gallery"
        text="A privacy-conscious glimpse into how Dr. K. Prashanth Kumar evaluates, plans, and guides orthopedic care and recovery."
      />

      <section className="section-space bg-background">
        <div className="site-container">
          <SectionHeading
            eyebrow="Visual Overview"
            title="Clinical Care in Practice"
            text="Explore the key stages of orthopedic evaluation, clinical consultation, and mobility restoration."
          />

          {/* Privacy Note */}
          <div className="mt-8 flex items-start gap-4 rounded-xl border border-border bg-muted/40 p-5 text-sm text-muted-foreground">
            <ShieldAlert className="mt-0.5 size-5 shrink-0 text-accent" />
            <p className="leading-relaxed">
              <strong>Patient Privacy Notice:</strong> In adherence to strict medical ethics and privacy standards,
              clinical imagery presented here is generic and educational. We do not publish patient names, identifiable
              photographs, or unverified before-and-after claims. Every clinical recovery depends on individual patient factors.
            </p>
          </div>

          {/* Interactive Lightbox Gallery */}
          <div className="mt-12">
            <GalleryLightbox items={galleryItems} />
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-foreground">
              Our Clinical Approach to Patient Recovery
            </h3>
            <p className="mt-2 text-base text-muted-foreground">
              Every successful outcome in orthopedic medicine stems from adherence to clinical discipline,
              accurate diagnostic evaluation, and careful step-by-step rehabilitation.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Accurate Clinical Assessment",
                  text: "Detailed symptom mapping and imaging analysis to pinpoint joint cartilage degradation, bone fractures, or ligament tears.",
                },
                {
                  title: "Tailored Surgical Precision",
                  text: "When surgery is necessary, meticulous operative techniques prioritize tissue preservation, implant alignment, and stability.",
                },
                {
                  title: "Continuous Follow-Up",
                  text: "Post-procedure reviews track bone union, joint range of motion, muscle strength, and safe return to daily activities.",
                },
              ].map((pillar) => (
                <div key={pillar.title} className="rounded-xl border border-border/80 bg-muted/30 p-6">
                  <h4 className="text-base font-bold text-foreground">{pillar.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="font-bold">
                <Link to="/contact" hash="consultation">
                  <CalendarDays className="mr-2 size-4" />
                  Schedule a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CareProcess />
      <FinalCTA />
    </>
  );
}
