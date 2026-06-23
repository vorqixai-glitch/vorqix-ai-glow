import { Link } from "react-router-dom";
import { ArrowRight, Bot, Brain, Code2, Cpu, Database, GitBranch, LineChart, Rocket, Sparkles, Workflow, Zap, CheckCircle2, Quote, Building2, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SectionHeader } from "@/components/SectionHeader";
import heroImg from "@/assets/hero-ai.jpg";

const services = [
  { icon: Bot, title: "AI Automation", desc: "Automate repetitive workflows with intelligent agents that learn and adapt." },
  { icon: Code2, title: "Custom Software", desc: "Bespoke applications engineered for performance, scale, and your business model." },
  { icon: Cpu, title: "SaaS Development", desc: "Full-stack SaaS products from MVP to enterprise-grade platforms." },
  { icon: Workflow, title: "Workflow Optimization", desc: "Re-engineer operations with AI-first processes that cut costs and time." },
  { icon: Brain, title: "AI Agents", desc: "Production-ready autonomous agents that act, decide, and integrate." },
  { icon: LineChart, title: "Business Intelligence", desc: "Real-time analytics and predictive insights that drive growth." },
];

const products = [
  { name: "Vorqix Flow", tag: "Automation", desc: "AI-powered workflow engine for operations teams.", metric: "10x faster ops" },
  { name: "Vorqix Agent", tag: "AI Agents", desc: "Deployable AI agents for sales, support, and research.", metric: "24/7 autonomy" },
  { name: "Vorqix Insight", tag: "Analytics", desc: "Predictive BI dashboard for data-driven decisions.", metric: "Real-time" },
];

const testimonials = [
  { name: "Sarah Chen", role: "COO, NorthLane Logistics", quote: "VORQIX rebuilt our dispatch system with AI. We cut manual ops by 70% in two months." },
  { name: "Marcus Vale", role: "Founder, Studioform", quote: "From concept to production SaaS in 9 weeks. The team is the real deal." },
  { name: "Priya Raman", role: "VP Growth, Helix Agency", quote: "Their AI agents replaced three tools and saved us six figures annually." },
];

const cases = [
  { tag: "Logistics", title: "Autonomous dispatch for a fleet of 1,200 vehicles", result: "+38% throughput" },
  { tag: "Fintech", title: "AI underwriting platform for a lending SaaS", result: "-62% decision time" },
  { tag: "Agency", title: "Content engine generating 4k assets/month", result: "12x output" },
];

const process = [
  { step: "01", title: "Discover", desc: "Deep-dive workshop to map opportunities and constraints." },
  { step: "02", title: "Design", desc: "Architecture, UX, and AI strategy tailored to outcomes." },
  { step: "03", title: "Build", desc: "Rapid sprints with production-grade engineering." },
  { step: "04", title: "Scale", desc: "Monitoring, optimization, and continuous evolution." },
];

const Index = () => {
  const onContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("email")) return toast.error("Email required");
    toast.success("Thanks — we'll be in touch within 24 hours.");
    e.currentTarget.reset();
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
        <div className="container relative py-28 lg:py-40">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-widest mb-8">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span>AI Innovation Studio · Est. 2024</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Building <span className="text-gradient">Intelligent Software</span> for the Future of Business
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              We design and engineer AI automation, custom software, and SaaS products that transform how modern businesses operate.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Start your project <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/solutions">Explore Solutions</Link>
              </Button>
            </div>
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs uppercase tracking-widest text-muted-foreground">
              {["SOC2-Ready", "Enterprise-grade", "Global Delivery", "AI-First"].map((t) => (
                <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" />{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/20">
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { k: "120+", v: "AI systems shipped" },
            { k: "40+", v: "Enterprise clients" },
            { k: "9.4/10", v: "Client satisfaction" },
            { k: "24/7", v: "Global delivery" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-24">
        <SectionHeader eyebrow="What we do" title="A complete AI engineering team" description="From strategy to deployment — we build the systems modern businesses depend on." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="group p-8 bg-card/60 border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 shadow-card">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary grid place-items-center mb-6 shadow-elegant group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container py-24">
        <SectionHeader eyebrow="SaaS Products" title="Built by us. Used by thousands." description="Our flagship SaaS platforms — engineered to scale." />
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Card key={p.name} className="p-8 glass border-border relative overflow-hidden group">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
              <div className="text-xs uppercase tracking-widest text-primary mb-4">{p.tag}</div>
              <h3 className="font-display text-2xl font-bold mb-3">{p.name}</h3>
              <p className="text-muted-foreground mb-6">{p.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gradient">{p.metric}</span>
                <Button asChild variant="ghost" size="sm"><Link to="/products">Learn more <ArrowRight className="h-4 w-4" /></Link></Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container py-24">
        <SectionHeader eyebrow="Case Studies" title="Outcomes that matter" description="Selected work from clients across logistics, fintech, and creative." />
        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Card key={c.title} className="p-8 bg-card/60 border-border hover:border-primary/40 transition-all">
              <div className="text-xs uppercase tracking-widest text-primary mb-4">{c.tag}</div>
              <h3 className="font-display text-lg font-semibold mb-4">{c.title}</h3>
              <div className="text-3xl font-display font-bold text-gradient">{c.result}</div>
            </Card>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container py-24">
        <SectionHeader eyebrow="Process" title="From idea to production in weeks" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p) => (
            <div key={p.step} className="p-8 rounded-xl glass relative">
              <div className="font-display text-5xl font-bold text-primary/20 mb-4">{p.step}</div>
              <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-24">
        <SectionHeader eyebrow="Testimonials" title="Trusted by operators & founders" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-8 glass border-border">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <p className="text-foreground/90 mb-6">{t.quote}</p>
              <div className="text-sm">
                <div className="font-semibold">{t.name}</div>
                <div className="text-muted-foreground">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* PRICING INQUIRY + CONTACT */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader align="left" eyebrow="Engagement" title="Pricing tailored to outcomes" description="Every engagement is scoped to your stage and goals. Tell us about your project and we'll send a tailored proposal within 24 hours." />
            <div className="space-y-4">
              {[
                { icon: Rocket, t: "MVP Sprint", p: "From $15k", d: "4–6 week production MVPs" },
                { icon: Building2, t: "Custom Build", p: "From $50k", d: "End-to-end custom AI software" },
                { icon: Zap, t: "Retainer", p: "From $12k/mo", d: "Embedded AI engineering team" },
              ].map((p) => (
                <div key={p.t} className="flex items-center gap-4 p-5 rounded-xl glass">
                  <div className="h-12 w-12 rounded-lg bg-gradient-primary grid place-items-center"><p.icon className="h-5 w-5 text-primary-foreground" /></div>
                  <div className="flex-1">
                    <div className="font-semibold">{p.t}</div>
                    <div className="text-sm text-muted-foreground">{p.d}</div>
                  </div>
                  <div className="font-display font-bold text-primary">{p.p}</div>
                </div>
              ))}
            </div>
          </div>
          <Card className="p-8 glass border-border shadow-elegant">
            <h3 className="font-display text-2xl font-bold mb-2">Start a conversation</h3>
            <p className="text-sm text-muted-foreground mb-6">Tell us about your project. We respond within 24 hours.</p>
            <form onSubmit={onContact} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Name</Label><Input name="name" required className="bg-secondary/50 border-border mt-1" /></div>
                <div><Label>Company</Label><Input name="company" className="bg-secondary/50 border-border mt-1" /></div>
              </div>
              <div><Label>Work email</Label><Input name="email" type="email" required className="bg-secondary/50 border-border mt-1" /></div>
              <div><Label>How can we help?</Label><Textarea name="message" rows={4} className="bg-secondary/50 border-border mt-1" /></div>
              <Button type="submit" variant="hero" size="lg" className="w-full">Send inquiry <ArrowRight className="ml-1" /></Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Index;
