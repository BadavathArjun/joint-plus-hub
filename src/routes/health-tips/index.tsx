import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, AlertCircle } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/lib/site-data";
import deskImage from "@/assets/joint-care-desk.jpg";
import xrayImage from "@/assets/orthopedic-xray.jpg";
import rehabImage from "@/assets/rehabilitation-care.jpg";
import { FinalCTA } from "@/components/content-sections";

export const Route = createFileRoute("/health-tips/")({
  head: () => ({
    meta: [
      {
        title: "Health Tips & Patient Education | Dr. K. Prashanth Kumar",
      },
      {
        name: "description",
        content:
          "Evidence-based, conservative patient education articles by Dr. K. Prashanth Kumar covering orthopedic implants, fracture management, recovery, myths and facts, and nutrition.",
      },
      {
        property: "og:title",
        content: "Health Tips & Patient Education | Dr. K. Prashanth Kumar",
      },
      {
        property: "og:description",
        content:
          "Helpful, factual guidance on orthopedic conditions, joint preservation, and rehabilitation.",
      },
    ],
  }),
  component: HealthTipsIndexPage,
});

const articleImages = [deskImage, xrayImage, rehabImage, deskImage, rehabImage, xrayImage];

function HealthTipsIndexPage() {
  return (
    <>
      <PageBanner
        eyebrow="Patient Resources"
        title="Health Tips & Patient Education"
        text="Clear, factual guidance to help you understand orthopedic health, procedures, bone healing, and joint preservation."
      />

      <section className="section-space bg-background">
        <div className="site-container">
          <SectionHeading
            eyebrow="Knowledge Base"
            title="Educational Articles"
            text="Explore general medical information written to support informed discussions with your healthcare provider."
          />

          {/* Educational Disclaimer Banner */}
          <div className="mt-8 flex items-start gap-4 rounded-xl border border-accent/20 bg-accent-soft/40 p-5 text-sm text-foreground">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-accent" />
            <p className="leading-relaxed">
              <strong>Medical Information Notice:</strong> These articles provide general educational guidance
              and do not constitute individual medical diagnosis or treatment plans. Always consult Dr. K. Prashanth Kumar
              or a qualified clinician regarding your specific medical symptoms.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => {
              const image = articleImages[index % articleImages.length];

              return (
                <article
                  key={article.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-premium"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={image}
                      alt={article.title}
                      loading="lazy"
                      width="1400"
                      height="900"
                      className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                    <div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="rounded bg-accent-soft px-2.5 py-0.5 font-bold uppercase tracking-wider text-accent">
                          {article.category}
                        </span>
                        <span className="text-muted-foreground">{article.date}</span>
                      </div>
                      <h2 className="mt-3 text-xl font-bold text-foreground transition group-hover:text-accent sm:text-2xl">
                        {article.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {article.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border">
                      <Link
                        to="/health-tips/$slug"
                        params={{ slug: article.slug }}
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary transition group-hover:text-accent"
                      >
                        <BookOpen className="size-4" />
                        Read Article
                        <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
