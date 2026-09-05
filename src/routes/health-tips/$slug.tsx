import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Share2,
  ShieldAlert,
  CalendarDays,
  CheckCircle2,
  Bookmark,
} from "lucide-react";
import { articles, articleCopy } from "@/lib/site-data";
import deskImage from "@/assets/joint-care-desk.jpg";
import xrayImage from "@/assets/orthopedic-xray.jpg";
import rehabImage from "@/assets/rehabilitation-care.jpg";
import { Button } from "@/components/ui/button";
import { FinalCTA } from "@/components/content-sections";

const articleImagesMap: Record<string, string> = {
  "implant-awareness": deskImage,
  "implant-removal": xrayImage,
  "myths-and-facts": rehabImage,
  "fracture-management": xrayImage,
  healing: rehabImage,
  nutrition: deskImage,
};

export const Route = createFileRoute("/health-tips/$slug")({
  head: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    const title = article ? `${article.title} - Patient Education | Dr. K. Prashanth Kumar` : "Article | Dr. K. Prashanth Kumar";
    const desc = article?.summary ?? "Patient education and orthopedic health guide.";

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticleDetailPage,
});

function ArticleDetailPage() {
  const { slug } = Route.useParams();
  const article = articles.find((a) => a.slug === slug);
  const copy = articleCopy[slug];

  if (!article || !copy) {
    return (
      <div className="section-space bg-background text-center">
        <div className="site-container max-w-xl">
          <h1 className="text-3xl font-bold">Article Not Found</h1>
          <p className="mt-3 text-muted-foreground">
            The patient education guide you requested could not be found.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link to="/health-tips">Back to Health Tips</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const featuredImage = articleImagesMap[slug] || deskImage;
  const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <article className="bg-background pt-8 pb-16">
        {/* Article Breadcrumb & Header */}
        <div className="site-container max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/health-tips" className="hover:text-foreground">Health Tips</Link>
            <span>/</span>
            <span className="text-accent">{article.title}</span>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs">
            <span className="rounded-full bg-accent-soft px-3 py-1 font-bold uppercase tracking-wider text-accent">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Calendar className="size-3.5" />
              Published {article.date}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="size-3.5" />
              4 min read
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="mt-4 text-lg font-medium leading-relaxed text-muted-foreground sm:text-xl">
            {article.summary}
          </p>

          {/* Author Badge */}
          <div className="mt-6 flex items-center justify-between border-y border-border py-4">
            <div>
              <strong className="block text-sm font-bold text-foreground">
                Reviewed by Dr. K. Prashanth Kumar
              </strong>
              <span className="text-xs text-muted-foreground">
                MBBS, D.Ortho, DNB Ortho • Orthopedic Surgeon
              </span>
            </div>
            <Link
              to="/about"
              className="text-xs font-bold text-accent hover:underline"
            >
              About the Doctor
            </Link>
          </div>
        </div>

        {/* Featured Image */}
        <div className="site-container mt-8 max-w-4xl">
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-premium">
            <img
              src={featuredImage}
              alt={article.title}
              width="1400"
              height="900"
              className="aspect-[16/9] w-full object-cover"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Article Body */}
        <div className="site-container mt-12 max-w-3xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-foreground font-normal">
              {copy.intro}
            </p>

            <div className="my-10 space-y-8">
              {copy.sections.map(([heading, text]) => (
                <section key={heading} className="rounded-xl border border-border/80 bg-card p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                    {heading}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {text}
                  </p>
                </section>
              ))}
            </div>
          </div>

          {/* Critical Medical Disclaimer Banner */}
          <div className="mt-10 rounded-xl border border-accent/20 bg-accent-soft/30 p-6">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-0.5 size-5 shrink-0 text-accent" />
              <div>
                <strong className="block text-sm font-bold text-foreground">
                  Patient Guidance & Medical Disclaimer
                </strong>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  This educational content provides conservative, general health insights and is not a substitute
                  for professional orthopedic examination, diagnosis, or personalized treatment advice. Every orthopedic
                  injury or degenerative condition requires clinical evaluation. Do not delay seeking medical care based
                  on information read on this website.
                </p>
              </div>
            </div>
          </div>

          {/* Consultation Prompt */}
          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold">Have Questions About Your Symptoms?</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
              Schedule a clinical consultation with Dr. K. Prashanth Kumar at Nirmal or Khanapur to receive personalized evaluation and treatment recommendations.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Button asChild className="bg-accent text-accent-foreground font-bold hover:bg-accent/90">
                <Link to="/contact" hash="consultation">
                  <CalendarDays className="mr-2 size-4" />
                  Request Consultation
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground">
                <a href="tel:+919000006684">
                  Call Clinic Desk
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
            <Link
              to="/health-tips"
              className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-accent"
            >
              <ArrowLeft className="size-4" />
              All Health Tips
            </Link>
          </div>
        </div>

        {/* Related Articles */}
        <div className="site-container mt-16 max-w-4xl border-t border-border pt-12">
          <h3 className="text-xl font-bold text-foreground">Related Educational Articles</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {relatedArticles.map((item) => (
              <article
                key={item.slug}
                className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-accent/40"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent">
                    {item.category}
                  </span>
                  <h4 className="mt-2 text-base font-bold text-foreground group-hover:text-accent">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                    {item.summary}
                  </p>
                </div>
                <Link
                  to="/health-tips/$slug"
                  params={{ slug: item.slug }}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-accent"
                >
                  Read Article
                  <ArrowRight className="size-3" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </article>

      <FinalCTA />
    </>
  );
}
