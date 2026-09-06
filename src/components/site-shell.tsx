import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarDays, Mail, Menu, Phone, Stethoscope, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle, ThemeSegmentedControl } from "@/components/theme-toggle";
import { navItems, services } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md transition-colors">
      <div className="site-container flex min-h-20 items-center justify-between gap-4">
        {/* Brand / Doctor Identity */}
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
          aria-label="Dr. K. Prashanth Kumar - Home"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Stethoscope className="size-5 text-accent-soft" />
          </span>
          <div className="min-w-0">
            <strong className="block truncate text-base font-bold leading-tight text-foreground sm:text-lg">
              Dr. K. Prashanth Kumar
            </strong>
            <span className="block truncate text-xs font-medium text-muted-foreground">
              Orthopedic & Joint Replacement Surgeon
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className="text-sm font-semibold text-muted-foreground transition hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              activeProps={{ className: "text-accent font-bold" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button & Theme Toggle */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild size="default" className="min-h-11 px-5 font-bold shadow-sm">
            <Link to="/contact" hash="consultation">
              <CalendarDays className="mr-2 size-4" />
              Book Consultation
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation Drawer Trigger & Theme Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle className="size-10" />
          <Button asChild size="sm" variant="default" className="h-10 px-3 text-xs font-bold">
            <Link to="/contact" hash="consultation">
              Book
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="size-11 border-border"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-sm p-6 flex flex-col justify-between overflow-y-auto">
              <div>
                <SheetHeader className="text-left">
                  <SheetTitle className="text-lg font-bold text-foreground">
                    Dr. K. Prashanth Kumar
                  </SheetTitle>
                  <SheetDescription className="text-xs text-muted-foreground">
                    MBBS, D.Ortho, DNB Ortho • Orthopedic Surgeon
                  </SheetDescription>
                </SheetHeader>

                <nav className="mt-8 flex flex-col space-y-1" aria-label="Mobile navigation">
                  {navItems.map(([label, href]) => (
                    <SheetClose asChild key={href}>
                      <Link
                        to={href}
                        onClick={() => setOpen(false)}
                        className="flex min-h-12 items-center rounded-lg px-3 text-base font-semibold text-foreground transition hover:bg-muted"
                        activeProps={{ className: "bg-accent-soft text-accent font-bold" }}
                      >
                        {label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </div>

              <div className="mt-8 pt-6 border-t border-border space-y-4">
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Appearance
                  </span>
                  <ThemeSegmentedControl />
                </div>

                <SheetClose asChild>
                  <Button asChild className="min-h-12 w-full text-base font-bold shadow-sm">
                    <Link to="/contact" hash="consultation" onClick={() => setOpen(false)}>
                      <CalendarDays className="mr-2 size-5" />
                      Book Consultation
                    </Link>
                  </Button>
                </SheetClose>

                <div className="space-y-2 pt-2 text-xs text-muted-foreground">
                  <a href="tel:+919000006684" className="flex items-center gap-2 py-1 hover:text-foreground">
                    <Phone className="size-4 text-accent" />
                    +91 90000 06684
                  </a>
                  <p className="flex items-center gap-2 py-1">
                    <MapPin className="size-4 text-accent" />
                    Nirmal & Khanapur, Telangana
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/20 bg-footer text-primary-foreground" aria-label="Site Footer">
      <div className="site-container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Doctor Profile */}
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground shadow-sm">
              <Stethoscope className="size-5" />
            </span>
            <div>
              <strong className="block text-base font-bold text-primary-foreground">
                Dr. K. Prashanth Kumar
              </strong>
              <span className="block text-xs text-primary-foreground/75">
                MBBS, D.Ortho, DNB Ortho
              </span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            Orthopedic & Joint Replacement Surgeon providing ethical, evidence-based care for joints,
            fractures, and trauma across Nirmal and Khanapur.
          </p>
          <div className="mt-6">
            <Button asChild size="sm" className="bg-accent text-accent-foreground font-bold hover:bg-accent/90">
              <Link to="/contact" hash="consultation">
                Book Consultation
              </Link>
            </Button>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent-soft">
            Quick Links
          </h2>
          <ul className="mt-4 space-y-2.5">
            {navItems.map(([label, href]) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-sm text-primary-foreground/75 transition hover:text-primary-foreground"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent-soft">
            Orthopedic Services
          </h2>
          <ul className="mt-4 space-y-2.5">
            {services.map((service) => (
              <li key={service[0]}>
                <Link
                  to="/services"
                  className="text-sm text-primary-foreground/75 transition hover:text-primary-foreground"
                >
                  {service[1]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Contact & Locations */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-accent-soft">
            Contact & Clinics
          </h2>
          <div className="mt-4 space-y-3">
            <a
              href="tel:+919000006684"
              className="flex items-center gap-3 text-sm text-primary-foreground/80 transition hover:text-primary-foreground"
            >
              <Phone className="size-4 shrink-0 text-accent" />
              <span>+91 90000 06684</span>
            </a>
            <a
              href="mailto:drprashanthkumarkokkula@gmail.com"
              className="flex items-start gap-3 break-all text-sm text-primary-foreground/80 transition hover:text-primary-foreground"
            >
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>drprashanthkumarkokkula@gmail.com</span>
            </a>
            <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <strong className="block font-semibold text-primary-foreground">Consultation Clinics</strong>
                <span>Dr. Devender Reddy Hospital, Nirmal</span>
                <span className="block">S.S Children's Hospital, Khanapur</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 bg-black/20">
        <div className="site-container flex flex-col gap-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dr. K. Prashanth Kumar. All Rights Reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy-policy" className="transition hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link to="/medical-disclaimer" className="transition hover:text-primary-foreground">
              Medical Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function MobileConsultationBar() {
  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-lg lg:hidden"
      aria-label="Mobile Quick Actions"
    >
      <div className="flex items-center gap-3">
        <a
          href="tel:+919000006684"
          className="flex min-h-12 flex-1 items-center justify-center gap-2 rounded-lg border border-input bg-background px-4 text-sm font-bold text-foreground shadow-sm active:bg-muted"
        >
          <Phone className="size-4 text-accent" />
          Call Clinic
        </a>
        <Button asChild className="min-h-12 flex-1 font-bold shadow-md">
          <Link to="/contact" hash="consultation">
            <CalendarDays className="mr-2 size-4" />
            Book Consult
          </Link>
        </Button>
      </div>
    </aside>
  );
}