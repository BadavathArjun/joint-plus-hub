import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { CalendarDays, Mail, Menu, Phone, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems, services } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-xl">
    <div className="site-container grid min-h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
      <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Dr. K. Prashanth Kumar home">
        <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"><Stethoscope className="size-5"/></span>
        <span className="min-w-0"><strong className="block truncate text-base font-bold leading-tight text-foreground">Dr. K. Prashanth Kumar</strong><small className="block truncate text-xs text-muted-foreground">Orthopedic & Joint Replacement Surgeon</small></span>
      </Link>
      <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
        {navItems.map(([label, href]) => <Link key={href} to={href} className="text-sm font-semibold text-muted-foreground transition hover:text-primary" activeProps={{ className: "text-primary" }}>{label}</Link>)}
      </nav>
      <div className="hidden xl:block"><Button asChild size="lg"><Link to="/contact" hash="consultation"><CalendarDays/>Book Consultation</Link></Button></div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild><Button variant="outline" size="icon" className="min-h-11 min-w-11 xl:hidden" aria-label="Open navigation"><Menu/></Button></SheetTrigger>
        <SheetContent className="w-[88%] max-w-sm">
          <SheetHeader className="pr-8 text-left"><SheetTitle>Dr. K. Prashanth Kumar</SheetTitle><SheetDescription>Orthopedic & Joint Replacement Surgeon</SheetDescription></SheetHeader>
          <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">{navItems.map(([label, href]) => <SheetClose asChild key={href}><Link to={href} onClick={() => setOpen(false)} className="border-b border-border py-3 text-base font-semibold text-foreground">{label}</Link></SheetClose>)}</nav>
          <SheetClose asChild><Button asChild className="mt-8 min-h-12 w-full"><Link to="/contact" hash="consultation"><CalendarDays/>Book Consultation</Link></Button></SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  </header>;
}

export function SiteFooter() {
  return <footer className="bg-footer text-primary-foreground">
    <div className="site-container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
      <div><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-md bg-accent text-accent-foreground"><Stethoscope className="size-5"/></span><strong>Dr. K. Prashanth Kumar</strong></div><p className="mt-5 text-sm leading-6 text-primary-foreground/70">Orthopedic & Joint Replacement Surgeon<br/>MBBS, D.Ortho, DNB Ortho</p></div>
      <FooterColumn title="Quick Links" items={navItems.slice(0, 7)} />
      <FooterColumn title="Services" items={services.map((service) => [service[1], "/services"] as const)} />
      <div><h2 className="font-bold">Contact</h2><a className="mt-5 flex gap-2 text-sm text-primary-foreground/75 hover:text-primary-foreground" href="tel:+919000006684"><Phone className="size-4 shrink-0"/>+91 90000 06684</a><a className="mt-3 flex min-w-0 gap-2 break-all text-sm text-primary-foreground/75 hover:text-primary-foreground" href="mailto:drprashanthkumarkokkula@gmail.com"><Mail className="mt-0.5 size-4 shrink-0"/>drprashanthkumarkokkula@gmail.com</a></div>
    </div>
    <div className="border-t border-primary-foreground/15"><div className="site-container flex flex-col gap-4 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Dr. K. Prashanth Kumar. All Rights Reserved.</p><div className="flex gap-5"><Link to="/privacy-policy" className="hover:text-primary-foreground">Privacy Policy</Link><Link to="/medical-disclaimer" className="hover:text-primary-foreground">Medical Disclaimer</Link></div></div></div>
  </footer>;
}

function FooterColumn({ title, items }: { title: string; items: readonly (readonly [string, string])[] }) {
  return <div><h2 className="font-bold">{title}</h2><ul className="mt-4 space-y-2">{items.map(([label, href], index) => <li key={`${href}-${index}`}><Link to={href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground">{label}</Link></li>)}</ul></div>;
}

export function MobileConsultationBar() {
  return <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 p-2 backdrop-blur-lg md:hidden"><Button asChild className="min-h-11 w-full"><Link to="/contact" hash="consultation"><CalendarDays/>Book Consultation</Link></Button></div>;
}