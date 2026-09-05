import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, MapPin, Phone, Mail, CalendarDays, Navigation } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { locations } from "@/lib/site-data";
import { AppointmentSection, FinalCTA } from "@/components/content-sections";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      {
        title: "Clinic Locations | Dr. K. Prashanth Kumar",
      },
      {
        name: "description",
        content:
          "Find Dr. K. Prashanth Kumar's orthopedic consultation clinics in Nirmal (Dr. Devender Reddy Super Speciality Hospital) and Khanapur (S.S Children's Hospital), Telangana.",
      },
      {
        property: "og:title",
        content: "Clinic Locations | Dr. K. Prashanth Kumar",
      },
      {
        property: "og:description",
        content:
          "Official clinic locations and Google Maps directions for orthopedic consultations.",
      },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Clinic Locations"
        title="Consultation Locations"
        text="Dr. K. Prashanth Kumar consults patients across two dedicated hospital locations in Telangana."
      />

      <section className="section-space bg-background">
        <div className="site-container">
          <SectionHeading
            eyebrow="Visit the Clinic"
            title="Hospital Consultation Centers"
            text="Choose the clinic location most convenient for you. For appointments or questions, contact the central clinic desk."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {locations.map((loc, index) => (
              <article
                key={loc.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 shadow-sm transition duration-300 hover:border-accent/40 hover:shadow-premium"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
                      Location 0{index + 1}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {loc.label}
                    </span>
                  </div>

                  <div className="mt-6 flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-6" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                        {loc.name}
                      </h2>
                      <p className="mt-1 text-base font-medium text-accent">
                        {loc.city}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
                    <p className="flex items-center gap-3">
                      <Phone className="size-4 text-accent shrink-0" />
                      <span>Direct Inquiries: <a href="tel:+919000006684" className="font-semibold text-foreground hover:underline">+91 90000 06684</a></span>
                    </p>
                    <p className="flex items-center gap-3">
                      <Mail className="size-4 text-accent shrink-0" />
                      <span className="break-all">drprashanthkumarkokkula@gmail.com</span>
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 pt-4 border-t border-border sm:flex-row">
                  <a
                    href={loc.map}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-input bg-background px-5 text-sm font-bold text-foreground shadow-sm transition hover:bg-muted"
                  >
                    <Navigation className="size-4 text-accent" />
                    Get Google Maps Directions
                    <ExternalLink className="size-3.5 opacity-60" />
                  </a>

                  <Button asChild size="lg" className="min-h-12 flex-1 font-bold">
                    <Link to="/contact" hash="consultation">
                      <CalendarDays className="mr-2 size-4" />
                      Request Appointment
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-muted/40 p-6 text-center text-sm text-muted-foreground">
            <p>
              * Consultation scheduling is coordinated centrally. Please contact the clinic desk in advance or submit the form below to secure your consultation slot.
            </p>
          </div>
        </div>
      </section>

      <AppointmentSection />
      <FinalCTA />
    </>
  );
}
