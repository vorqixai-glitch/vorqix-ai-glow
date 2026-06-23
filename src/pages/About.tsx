import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const values = [
  { icon: Target, t: "Outcomes over outputs", d: "We ship to move the business metric — not just deliver features." },
  { icon: Eye, t: "AI-first thinking", d: "We re-imagine processes for the AI era, not bolt AI onto legacy systems." },
  { icon: Heart, t: "Long-term partnership", d: "We embed deeply with our clients and stay invested in their growth." },
  { icon: Users, t: "Senior team only", d: "Every project is led by experienced engineers and product designers." },
];

const About = () => (
  <>
    <section className="container py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest text-primary mb-6">About VORQIX.AI</div>
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-gradient leading-tight">
          We build the intelligent software that defines the next decade of business.
        </h1>
        <p className="mt-8 text-lg text-muted-foreground">
          VORQIX.AI is an AI innovation company. We design, engineer, and ship custom AI systems, automation platforms, and SaaS products for ambitious teams across the globe.
        </p>
      </div>
    </section>

    <section className="container py-12">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { k: "Our mission", v: "Make AI a practical, accessible advantage for every modern business." },
          { k: "Our vision", v: "A world where intelligent software does the work — and humans do the meaningful." },
          { k: "Our promise", v: "Real outcomes. Real engineering. No hype, no jargon — just results." },
        ].map((b) => (
          <Card key={b.k} className="p-8 glass border-border">
            <div className="text-xs uppercase tracking-widest text-primary mb-3">{b.k}</div>
            <p className="font-display text-xl">{b.v}</p>
          </Card>
        ))}
      </div>
    </section>

    <section className="container py-24">
      <SectionHeader eyebrow="Values" title="What we believe" />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v) => (
          <Card key={v.t} className="p-6 bg-card/60 border-border">
            <v.icon className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-display text-lg font-semibold mb-2">{v.t}</h3>
            <p className="text-sm text-muted-foreground">{v.d}</p>
          </Card>
        ))}
      </div>
    </section>

    <section className="container py-24 text-center">
      <Card className="p-12 glass border-border">
        <h2 className="font-display text-4xl font-bold text-gradient mb-4">Let's build something intelligent.</h2>
        <Button asChild variant="hero" size="xl"><Link to="/contact">Start a project <ArrowRight className="ml-1" /></Link></Button>
      </Card>
    </section>
  </>
);
export default About;