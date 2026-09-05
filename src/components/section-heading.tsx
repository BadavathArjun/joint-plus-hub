export function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow?: string; title: string; text?: string; light?: boolean }) {
  return <div className="max-w-2xl">
    {eyebrow ? <p className={`eyebrow ${light ? "text-accent-soft" : "text-accent"}`}>{eyebrow}</p> : null}
    <h2 className={`mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? "text-primary-foreground" : "text-foreground"}`}>{title}</h2>
    {text ? <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{text}</p> : null}
  </div>;
}