import { Link } from "react-router-dom";
import { ArrowRight, Truck, Rocket, Megaphone, Building2, ShoppingBag, Banknote, HeartPulse, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const industries = [
  { icon: Truck, t: "Logistics & Supply Chain", d: "Autonomous dispatch, route optimization, predictive maintenance." },
  { icon: Rocket, t: "Startups", d: "Validated MVPs and scalable SaaS from concept to launch." },
  { icon: Megaphone, t: "Agencies", d: "AI content engines, client portals, automation at scale." },
  { icon: Building2, t: "Enterprise", d: "Custom AI platforms with SSO, governance, and integration depth." },
  { icon: ShoppingBag, t: "E-commerce", d: "Personalization, AI merchandising, automated support." },
  { icon: Banknote, t: "Fintech", d: "AI underwriting, fraud detection, compliance automation." },
  { icon: HeartPulse, t: "Healthcare", d: "Compliant AI tools for ops, scheduling, and analytics." },
  { icon: GraduationCap, t: "Education", d: "Adaptive learning platforms and AI tutoring systems." },
];

const Industries = () => (
  <>
    <section className="container py-24">
      <SectionHeader eyebrow="Industries" title="Built for industries that move fast" description="We've shipped AI systems across every modern vertical — and we know what it takes to scale." />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((i) => (
          <Card key={i.t} className="p-6 bg-card/60 border-border hover:border-primary/40 transition-all group">
            <div className="h-12 w-12 rounded-lg bg-gradient-primary grid place-items-center mb-4 shadow-elegant group-hover:scale-110 transition-transform">
              <i.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{i.t}</h3>
            <p className="text-sm text-muted-foreground">{i.d}</p>
          </Card>
        ))}
      </div>
    </section>

    <section className="container py-24 text-center">
      <Card className="p-12 glass border-border">
        <h2 className="font-display text-4xl font-bold text-gradient mb-4">Don't see your industry?</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Our methodology adapts to any business model. Let's discuss how AI can transform yours.</p>
        <Button asChild variant="hero" size="xl"><Link to="/contact">Get a custom proposal <ArrowRight className="ml-1" /></Link></Button>
      </Card>
    </section>
  </>
);
export default Industries;