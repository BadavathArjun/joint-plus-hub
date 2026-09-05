import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageBanner({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="bg-primary py-16 text-primary-foreground sm:py-20"><div className="site-container"><div className="flex items-center gap-2 text-xs font-bold uppercase text-accent-soft"><Link to="/">Home</Link><ChevronRight className="size-3"/><span>{eyebrow}</span></div><h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-primary-foreground/75">{text}</p></div></section>;
}