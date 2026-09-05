import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
  ShieldCheck,
  Award,
  Sparkles,
} from "lucide-react";
import doctorPortrait from "@/assets/dr-prashanth-kumar.png";
import xrayImage from "@/assets/orthopedic-xray.jpg";
import rehabImage from "@/assets/rehabilitation-care.jpg";
import deskImage from "@/assets/joint-care-desk.jpg";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { ConsultationForm } from "@/components/consultation-form";
import { GalleryLightbox, type GalleryItem } from "@/components/gallery-lightbox";
import { articles, expertise, locations, services } from "@/lib/site-data";

export const images = {
  doctor: doctorPortrait,
  xray: xrayImage,
  rehab: rehabImage,
  desk: deskImage,
};

const galleryItems: GalleryItem[] = [
  {
    id: "xray",
    src: xrayImage,
    alt: "Orthopedic radiographic imaging examination and joint review",
    caption: "Radiographic Imaging & Joint Evaluation",
    tag: "Diagnostic Evaluation",
  },
  {
    id: "rehab",
    src: rehabImage,
    alt: "Post-operative mobility guidance and physical rehabilitation",
    caption: "Mobility Support & Recovery Guidance",
    tag: "Rehabilitation",
  },
  {
    id: "desk",
    src: deskImage,
    alt: "Orthopedic consultation setting with anatomical joint model",
    caption: "Informed Patient Counseling & Care Planning",
    tag: "Consultation",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-hero via-background to-background pt-8 pb-16 lg:pt-14 lg:pb-24">
      <div className="site-container grid min-h-[680px] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-soft px-3.5 py-1 text-xs font-semibold text-accent">
            <Sparkles className="size-3.5" />
            <span>Orthopedic & Joint Replacement Specialist</span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Expert Orthopedic Care for Better Movement and Better Living
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dr. K. Prashanth Kumar is an experienced Orthopedic & Joint Replacement Surgeon
            providing comprehensive care for joint problems, fractures, sports injuries,
            arthritis, and trauma with a patient-first approach.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="min-h-12 px-6 text-base font-bold shadow-md hover:shadow-lg">
              <Link to="/contact" hash="consultation">
                <CalendarDays className="mr-2 size-5" />
                Book a Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-12 border-border bg-background/80 px-6 text-base font-semibold backdrop-blur hover:bg-muted">
              <Link to="/services">
                Explore Services
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4">
            {[
              "10+ Years Experience",
              "Orthopedic Specialist",
              "Joint Replacement",
              "Patient-Centered Care",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />
                <span className="text-xs font-semibold text-foreground sm:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          {/* Subtle decorative glow */}
          <div className="absolute -inset-4 rounded-full bg-accent/10 blur-2xl lg:-inset-8" />

          {/* Floating badge */}
          <div className="absolute bottom-6 left-2 z-20 rounded-xl border border-border bg-card/95 p-4 shadow-premium backdrop-blur sm:left-4 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg bg-accent-soft text-accent">
                <Award className="size-5" />
              </span>
              <div>
                <strong className="block text-2xl font-extrabold text-foreground">10+ Years</strong>
                <span className="text-xs font-medium text-muted-foreground">Orthopedic Experience</span>
              </div>
            </div>
          </div>

          {/* Portrait frame */}
          <div className="relative z-10 w-full max-w-[460px] overflow-hidden rounded-2xl border-2 border-border/80 bg-secondary shadow-2xl">
            <img
              src={doctorPortrait}
              width="768"
              height="768"
              alt="Dr. K. Prashanth Kumar, Orthopedic and Joint Replacement Surgeon"
              className="aspect-[4/5] w-full object-cover object-top transition duration-500 hover:scale-[1.01]"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card" aria-label="Key qualifications and focus">
      <div className="site-container grid grid-cols-2 divide-y divide-border sm:divide-y-0 sm:divide-x lg:grid-cols-4">
        {[
          ["10+", "Years of Experience", "Dedicated orthopedic practice"],
          ["Orthopedic", "Specialist", "MBBS, D.Ortho, DNB Ortho"],
          ["Joint Replacement", "Expertise", "Knee, hip & joint solutions"],
          ["Comprehensive", "Patient Care", "Personalized treatment plans"],
        ].map(([val, title, subtitle]) => (
          <div key={title} className="p-6 text-center sm:p-8">
            <strong className="block text-2xl font-extrabold text-primary sm:text-3xl">
              {val}
            </strong>
            <h3 className="mt-1 text-sm font-bold text-foreground sm:text-base">
              {title}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AboutSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className="section-space bg-background" aria-label="About Dr. K. Prashanth Kumar">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-premium">
            <img
              src={doctorPortrait}
              loading="lazy"
              width="768"
              height="768"
              alt="Portrait of Dr. K. Prashanth Kumar"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-4 right-4 rounded-xl border border-primary/20 bg-primary p-5 text-primary-foreground shadow-premium sm:right-6 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-accent-soft">
              Qualifications
            </p>
            <strong className="mt-1 block text-lg font-bold">
              MBBS, D.Ortho, DNB Ortho
            </strong>
            <span className="mt-0.5 block text-xs text-primary-foreground/80">
              Orthopedic & Joint Replacement Surgeon
            </span>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About the Doctor"
            title="Meet Dr. K. Prashanth Kumar"
            text="Experienced Orthopedic Care with a Patient-First Approach"
          />

          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dr. K. Prashanth Kumar provides orthopedic care across joint replacement,
            trauma and fracture care, sports injuries, arthritis, and rheumatology.
            His approach begins with understanding each patient's concerns, evaluating
            the condition carefully, and planning treatment around individual needs.
          </p>

          {!compact ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Where suitable, conservative treatment is considered alongside procedural
              and surgical options, with clear communication supporting each stage of
              care and recovery.
            </p>
          ) : null}

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Qualification", "MBBS, D.Ortho, DNB Ortho"],
              ["Experience", "10+ Years"],
              ["Specialty", "Orthopedics & Joint Care"],
            ].map(([label, val]) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-muted/60 p-4 transition hover:border-accent/30"
              >
                <span className="text-xs font-bold uppercase text-accent">
                  {label}
                </span>
                <strong className="mt-1.5 block text-sm font-bold text-foreground">
                  {val}
                </strong>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild variant="outline" size="lg" className="min-h-12 px-6 font-semibold">
              <Link to="/about">
                Learn More About the Doctor
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExpertiseSection() {
  return (
    <section className="section-space bg-muted/50" aria-label="Clinical Focus">
      <div className="site-container">
        <SectionHeading
          eyebrow="Clinical Focus"
          title="Areas of Expertise"
          text="Specialized care for a wide range of orthopedic and joint conditions."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {expertise.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-premium"
            >
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-105">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
              <Link
                to="/expertise"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-accent transition group-hover:gap-2"
              >
                Learn More
                <ArrowRight className="size-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="section-space bg-background" aria-label="Orthopedic Services">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Orthopedic Services"
            title="Comprehensive Orthopedic Services"
            text="From diagnosis to treatment and recovery, providing personalized orthopedic care."
          />
          <Button asChild variant="outline" className="self-start font-semibold lg:self-end">
            <Link to="/services">
              View all services
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([number, title, text]) => (
            <article
              key={number}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-premium"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                    Service {number}
                  </span>
                  <Stethoscope className="size-5 text-muted-foreground/60 transition group-hover:text-accent" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition group-hover:gap-2 group-hover:text-accent"
              >
                Read Details
                <ArrowRight className="size-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RheumatologySection() {
  return (
    <section className="section-space bg-primary text-primary-foreground" aria-label="Rheumatology & Arthritis Care">
      <div className="site-container">
        <SectionHeading
          light
          eyebrow="Additional Expertise"
          title="Rheumatology & Arthritis Care"
          text="Comprehensive support for joint pain, arthritis and related inflammatory conditions."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Arthritis Management",
              "Personalized evaluation and management of arthritis-related joint symptoms and degenerative cartilage.",
            ],
            [
              "Autoimmune Joint Disorders",
              "Care focused on joint conditions associated with autoimmune and systemic inflammatory disorders.",
            ],
            [
              "Chronic Pain Control",
              "Structured clinical approaches to managing persistent musculoskeletal and chronic joint discomfort.",
            ],
            [
              "Physical Therapy Guidance",
              "Personalized guidance supporting joint mobility, functional preservation, and recovery.",
            ],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-xl border border-primary-foreground/15 bg-primary/60 p-6 backdrop-blur transition hover:border-primary-foreground/30 hover:bg-primary/80"
            >
              <span className="grid size-10 place-items-center rounded-lg bg-primary-foreground/10 text-accent-soft">
                <ShieldCheck className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-primary-foreground">{title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-primary-foreground/75">
                {text}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Button asChild size="lg" className="min-h-12 bg-accent text-accent-foreground font-bold hover:bg-accent/90">
            <Link to="/contact" hash="consultation">
              Discuss Your Condition
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CareProcess() {
  return (
    <section className="section-space bg-muted/50" aria-label="Care Journey">
      <div className="site-container">
        <SectionHeading
          eyebrow="Your Care Journey"
          title="A Clear Path to Better Care"
          text="Every patient receives thorough clinical attention through a structured, transparent process."
        />

        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Consultation", "Understand symptoms, concerns, activity limitations, and medical history."],
            ["02", "Evaluation", "Clinical examination and appropriate diagnostic imaging evaluation."],
            ["03", "Treatment Plan", "Develop a personalized conservative or surgical treatment approach."],
            ["04", "Recovery & Follow-Up", "Guided rehabilitation support and ongoing follow-up care."],
          ].map(([num, title, text], index) => (
            <li
              key={num}
              className="relative rounded-xl border border-border bg-card p-6 shadow-sm transition hover:shadow-premium"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold tracking-wider text-accent">STEP {num}</span>
                <span className="grid size-7 place-items-center rounded-full bg-accent text-xs font-extrabold text-accent-foreground">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section className="section-space bg-background" aria-label="Surgical and Clinical Care Gallery">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Clinical Care"
            title="Success Stories & Surgical Care"
            text="A privacy-conscious visual glimpse into orthopedic assessment, treatment and recovery support."
          />
          <Button asChild variant="outline" className="self-start sm:self-end">
            <Link to="/success-stories">
              View Full Gallery
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-10">
          <GalleryLightbox items={galleryItems} />
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          * Images are illustrative of clinical environments and do not depict named patients, individual outcomes, or before-and-after results.
        </p>
      </div>
    </section>
  );
}

export function HealthTipsSection({ limit }: { limit?: number }) {
  const items = limit ? articles.slice(0, limit) : articles;
  return (
    <section className="section-space bg-muted/50" aria-label="Patient Education">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Patient Education"
            title="Health Tips & Patient Education"
            text="Simple, factual information to help patients understand orthopedic health, procedures, and recovery."
          />
          {limit ? (
            <Button asChild variant="outline" className="self-start sm:self-end font-semibold">
              <Link to="/health-tips">
                View all articles
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          ) : null}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((article, index) => {
            const articleImages = [deskImage, xrayImage, rehabImage];
            const chosenImage = articleImages[index % articleImages.length];

            return (
              <article
                key={article.slug}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-premium"
              >
                <div className="aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={chosenImage}
                    loading="lazy"
                    width="1400"
                    height="900"
                    alt={article.title}
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold uppercase tracking-wider text-accent">
                        {article.category}
                      </span>
                      <span className="text-muted-foreground">{article.date}</span>
                    </div>
                    <h3 className="mt-2.5 text-xl font-bold text-foreground group-hover:text-accent">
                      {article.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {article.summary}
                    </p>
                  </div>
                  <Link
                    to="/health-tips/$slug"
                    params={{ slug: article.slug }}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition group-hover:gap-2 group-hover:text-accent"
                  >
                    Read Guide
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="section-space bg-background" aria-label="Why Choose Dr. Prashanth Kumar">
      <div className="site-container grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <SectionHeading
          eyebrow="Thoughtful Care"
          title="Why Patients Choose Dr. Prashanth Kumar"
          text="Committed to ethical, evidence-based orthopedic care centered around long-term patient wellbeing."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            [
              "Experienced Care",
              "10+ years of dedicated orthopedic experience treating bone, joint, and trauma conditions.",
            ],
            [
              "Comprehensive Expertise",
              "Specialized care spanning joint replacement, arthritis, complex trauma, and sports injuries.",
            ],
            [
              "Personalized Treatment",
              "Treatment plans tailored to each individual's physical needs, lifestyle, and health background.",
            ],
            [
              "Patient-Centered Approach",
              "Clear, honest communication with strong emphasis on conservative options before surgery.",
            ],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition hover:border-accent/30 hover:shadow-premium"
            >
              <div className="size-2 rounded-full bg-accent" />
              <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LocationsSection() {
  return (
    <section className="section-space bg-muted/50" aria-label="Consultation Locations">
      <div className="site-container">
        <SectionHeading
          eyebrow="Visit the Doctor"
          title="Consultation Locations"
          text="Find the clinic location convenient for your consultation in Telangana."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {locations.map((location, index) => (
            <article
              key={location.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition duration-300 hover:border-accent/40 hover:shadow-premium"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-wider text-accent">
                    LOCATION 0{index + 1}
                  </span>
                  <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                    {location.label}
                  </span>
                </div>

                <div className="mt-6 flex items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{location.name}</h3>
                    <p className="mt-1 text-base font-medium text-muted-foreground">
                      {location.city}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={location.map}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-input bg-background px-5 text-sm font-bold text-foreground shadow-sm transition hover:bg-muted"
                >
                  <MapPin className="size-4 text-accent" />
                  Get Directions
                  <ExternalLink className="size-3.5 opacity-70" />
                </a>
                <Button asChild className="min-h-11 flex-1 font-bold">
                  <Link to="/contact" hash="consultation">
                    Book Consultation
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AppointmentSection() {
  return (
    <section id="consultation" className="section-space scroll-mt-24 bg-background" aria-label="Request Consultation">
      <div className="site-container grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Request a Consultation"
            title="Ready to Take the Next Step?"
            text="Request a consultation or callback to discuss your orthopedic concerns with Dr. K. Prashanth Kumar."
          />

          <div className="mt-8 rounded-xl border border-primary/15 bg-primary p-6 text-primary-foreground shadow-md">
            <h3 className="text-base font-bold">Important Notice</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
              For urgent or emergency medical concerns, please contact your local emergency hospital immediately.
              This form is intended for non-emergency consultation scheduling and inquiries.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="size-5 text-accent shrink-0" />
              <span>Direct coordination with clinic desk</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="size-5 text-accent shrink-0" />
              <span>Available at Nirmal and Khanapur</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <CheckCircle2 className="size-5 text-accent shrink-0" />
              <span>Confidential and privacy-conscious patient handling</span>
            </div>
          </div>
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}

export function ContactCards() {
  return (
    <section className="section-space bg-muted/50" aria-label="Contact Channels">
      <div className="site-container">
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          text="Reach out directly for appointments, consultations, or hospital location inquiries."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Phone,
              title: "Call for Appointment",
              text: "+91 90000 06684",
              actionText: "Call Now",
              href: "tel:+919000006684",
            },
            {
              icon: Mail,
              title: "Email Inquiries",
              text: "drprashanthkumarkokkula@gmail.com",
              actionText: "Send Email",
              href: "mailto:drprashanthkumarkokkula@gmail.com",
            },
            {
              icon: MapPin,
              title: "Clinic Locations",
              text: "Nirmal & Khanapur, Telangana",
              actionText: "View Maps",
              href: "/locations",
            },
          ].map(({ icon: Icon, title, text, actionText, href }) => (
            <a
              key={title}
              href={href}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-premium"
            >
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-105">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 break-words text-sm text-muted-foreground">{text}</p>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-bold text-accent transition group-hover:gap-2">
                {actionText}
                <ArrowRight className="size-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-24 text-primary-foreground" aria-label="Call to Action">
      <img
        src={rehabImage}
        loading="lazy"
        width="1400"
        height="900"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-15"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary/80" />

      <div className="site-container relative text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          Your Mobility Matters
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
          Get professional orthopedic care focused on helping you move with confidence,
          recover from injuries, and enjoy better living.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-h-12 bg-accent px-7 text-base font-bold text-accent-foreground hover:bg-accent/90 shadow-lg"
          >
            <Link to="/contact" hash="consultation">
              <CalendarDays className="mr-2 size-5" />
              Book a Consultation
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-h-12 border-primary-foreground/30 bg-primary-foreground/10 px-7 text-base font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 hover:text-primary-foreground"
          >
            <a href="tel:+919000006684">
              <Phone className="mr-2 size-4" />
              Call +91 90000 06684
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}