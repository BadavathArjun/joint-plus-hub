import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  TrustBar,
  ExpertiseSection,
  ServicesSection,
  RheumatologySection,
  CareProcess,
  GallerySection,
  HealthTipsSection,
  WhyChoose,
  LocationsSection,
  AppointmentSection,
  ContactCards,
  FinalCTA,
} from "@/components/content-sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Dr. K. Prashanth Kumar | Orthopedic & Joint Replacement Surgeon",
      },
      {
        name: "description",
        content:
          "Official website of Dr. K. Prashanth Kumar (MBBS, D.Ortho, DNB Ortho). 10+ years of experienced orthopedic & joint replacement surgery in Nirmal and Khanapur, Telangana.",
      },
      {
        property: "og:title",
        content: "Dr. K. Prashanth Kumar | Orthopedic & Joint Replacement Surgeon",
      },
      {
        property: "og:description",
        content:
          "Comprehensive orthopedic care for joint replacement, fractures, sports injuries, arthritis, and trauma.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: IndexPage,
});

function IndexPage() {
  return (
    <>
      {/* 1. Doctor Introduction */}
      <Hero />

      {/* 2. Trust Indicators */}
      <TrustBar />

      {/* 3. Areas of Expertise */}
      <ExpertiseSection />

      {/* 4. Orthopedic Services */}
      <ServicesSection />

      {/* 5. Rheumatology & Arthritis Care */}
      <RheumatologySection />

      {/* 6. Care Process */}
      <CareProcess />

      {/* 7. Surgical and Clinical Care Gallery */}
      <GallerySection />

      {/* 8. Patient Education / Health Tips */}
      <HealthTipsSection limit={3} />

      {/* 9. Trust / Why Patients Choose */}
      <WhyChoose />

      {/* 10. Consultation Locations */}
      <LocationsSection />

      {/* 11. Consultation Request Form */}
      <AppointmentSection />

      {/* 12. Contact Details */}
      <ContactCards />

      {/* 13. Final Call to Action */}
      <FinalCTA />
    </>
  );
}
