import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "@/components/SectionHeader";

export const faqs = [
  {
    q: "What does a typical VORQIX.AI engagement look like?",
    a: "We start with a paid discovery sprint that maps your workflows, data, and success metrics. From there we scope a fixed-outcome build — usually 6 to 12 weeks — followed by an optional managed support retainer.",
  },
  {
    q: "How quickly can we see results from AI automation?",
    a: "Most clients have a first automation live in production within three to four weeks. Larger platform builds ship in vertical slices so value lands continuously rather than at the end.",
  },
  {
    q: "Do you work with startups as well as enterprises?",
    a: "Yes. We run lean MVP and SaaS sprints for funded startups and multi-team platform programs for established companies in logistics, healthcare, finance, and professional services.",
  },
  {
    q: "Who owns the code and the data?",
    a: "You do. Every engagement hands over full source ownership, infrastructure access, and documentation. Your data stays in your environment and is never used to train third-party models.",
  },
  {
    q: "How do you keep AI systems reliable and compliant?",
    a: "Bounded tool access, retrieval grounded in your permissioned data, human approval gates on high-risk steps, regression evaluation before deploys, and full audit trails on every agent action.",
  },
  {
    q: "What technologies do you build on?",
    a: "Modern TypeScript and Python stacks, cloud-native infrastructure, vector and relational data layers, and best-fit foundation models selected per workload rather than locked to one vendor.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const FAQSection = () => (
  <section className="container py-24">
    <SectionHeader
      eyebrow="FAQ"
      title="Questions, answered"
      description="What teams usually ask before starting an engagement."
    />
    <Accordion type="single" collapsible className="max-w-3xl mx-auto">
      {faqs.map((f) => (
        <AccordionItem key={f.q} value={f.q} className="border-border">
          <AccordionTrigger className="text-left font-display text-base">{f.q}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>
);