import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader, SiteFooter, MobileConsultationBar } from "@/components/site-shell";
import { ThemeProvider } from "@/components/theme-provider";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-primary">404</h1>
        <h2 className="mt-4 text-2xl font-bold text-foreground">Page Not Found</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <Link to="/">Return to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Unable to Load Page
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A temporary error occurred while rendering this page. You can try refreshing or returning home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-input bg-background px-5 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}

const doctorStructuredData = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. K. Prashanth Kumar",
  jobTitle: "Orthopedic & Joint Replacement Surgeon",
  description:
    "Experienced Orthopedic & Joint Replacement Surgeon providing comprehensive care for joint problems, fractures, sports injuries, arthritis and trauma in Nirmal and Khanapur, Telangana.",
  telephone: "+91 90000 06684",
  email: "drprashanthkumarkokkula@gmail.com",
  medicalSpecialty: [
    "Orthopedic Surgery",
    "Joint Replacement",
    "Rheumatology",
    "Trauma and Fracture Care",
    "Sports Medicine",
  ],
  areaServed: ["Nirmal, Telangana", "Khanapur, Telangana"],
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Dr. Devender Reddy Super Speciality Hospital",
      addressLocality: "Nirmal",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "S.S Children's Hospital",
      addressLocality: "Khanapur",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Dr. K. Prashanth Kumar | Orthopedic & Joint Replacement Surgeon",
      },
      {
        name: "description",
        content:
          "Official website of Dr. K. Prashanth Kumar (MBBS, D.Ortho, DNB Ortho) with 10+ years of experienced orthopedic care in Nirmal and Khanapur, Telangana.",
      },
      { name: "author", content: "Dr. K. Prashanth Kumar" },
      {
        property: "og:title",
        content: "Dr. K. Prashanth Kumar | Orthopedic & Joint Replacement Surgeon",
      },
      {
        property: "og:description",
        content:
          "Specialized care for joint replacement, arthritis, fractures, trauma, and sports injuries in Nirmal & Khanapur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(doctorStructuredData),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var k='joint-plus-theme';var s=localStorage.getItem(k);var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans transition-colors duration-200">
        <ThemeProvider>
          {/* Skip to Content for Keyboard/Screen-reader accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg focus:outline-none"
          >
            Skip to main content
          </a>
          <SiteHeader />
          <main id="main-content" className="flex-1 pb-16 lg:pb-0">
            {children}
          </main>
          <MobileConsultationBar />
          <SiteFooter />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}

function Button({
  asChild,
  children,
  className,
  size,
  ...props
}: {
  asChild?: boolean;
  children: ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg";
  [key: string]: unknown;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow transition hover:bg-primary/90 ${className ?? ""}`}
      {...props}
    >
      {children}
    </span>
  );
}
