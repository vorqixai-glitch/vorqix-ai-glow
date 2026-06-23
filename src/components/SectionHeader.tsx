export const SectionHeader = ({
  eyebrow, title, description, align = "center",
}: { eyebrow?: string; title: string; description?: string; align?: "center" | "left" }) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} mb-12`}>
    {eyebrow && (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-primary mb-4`}>
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />{eyebrow}
      </div>
    )}
    <h2 className="font-display text-4xl sm:text-5xl font-bold text-gradient">{title}</h2>
    {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
  </div>
);