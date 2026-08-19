import { Quote, Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const testimonials = [
  {
    quote:
      "VORQIX rebuilt our dispatch operation around AI in under three months. Planning time dropped by two thirds and our team finally works on customers instead of spreadsheets.",
    name: "Operations Director",
    org: "National freight carrier",
  },
  {
    quote:
      "They shipped a full multi-tenant SaaS platform in nine weeks — billing, permissions, analytics, everything. It still runs as our core product today.",
    name: "Founder & CEO",
    org: "B2B logistics SaaS",
  },
  {
    quote:
      "The agents they deployed handle 80% of our inbound document processing with a full audit trail. Compliance signed off without a single exception.",
    name: "Head of Compliance",
    org: "Financial services group",
  },
];

export const Testimonials = () => (
  <section className="container py-24">
    <SectionHeader
      eyebrow="Testimonials"
      title="Trusted by operators who measure results"
      description="What teams say after their systems go live."
    />
    <div className="grid md:grid-cols-3 gap-6">
      {testimonials.map((t) => (
        <Card key={t.name} className="glass border-border p-7 flex flex-col">
          <Quote className="h-7 w-7 text-primary mb-4" />
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.quote}</p>
          <div className="flex gap-0.5 mt-5 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
            ))}
          </div>
          <div className="font-display font-semibold text-sm">{t.name}</div>
          <div className="text-xs text-muted-foreground">{t.org}</div>
        </Card>
      ))}
    </div>
  </section>
);