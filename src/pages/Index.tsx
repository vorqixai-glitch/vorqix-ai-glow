import { Link } from "react-router-dom";
import {
  ArrowRight, Bot, Brain, Code2, Cpu, Database, GitBranch, LineChart,
  Sparkles, Workflow, CheckCircle2, Building2, Plug, Send, Bell,
  Truck, Stethoscope, Home as HomeIcon, ShoppingCart, Briefcase, PlaneTakeoff,
  ShieldCheck, MessageSquare, Activity, BarChart3, Layers, Boxes, Calendar,
  Mail, ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SectionHeader } from "@/components/SectionHeader";

const stats = [
  { k: "240+", v: "Projects Delivered" },
  { k: "1,800+", v: "Automations Built" },
  { k: "320k+", v: "Hours Saved" },
  { k: "98%", v: "Client Satisfaction" },
];

const featuredProducts = [
  { name: "SaaS Factory AI", tag: "Build", desc: "Spin up production-grade SaaS platforms in days, not months — powered by AI scaffolding.", metric: "10x faster delivery", icon: Layers },
  { name: "NEXUS Dispatch Pro", tag: "Logistics", desc: "Autonomous dispatch & route intelligence for high-volume logistics operations.", metric: "+38% throughput", icon: Truck },
  { name: "Compliance Scanner AI", tag: "Security", desc: "Continuous compliance & risk scanning for SOC2, HIPAA, GDPR, and ISO frameworks.", metric: "24/7 coverage", icon: ShieldCheck },
  { name: "VORCREATE AI", tag: "Content", desc: "Multi-modal content engine producing brand-safe assets at agency scale.", metric: "12x output", icon: Sparkles },
];

const services = [
  { icon: Bot, title: "AI Automation", desc: "Automate workflows with intelligent agents that learn and adapt." },
  { icon: Brain, title: "AI Agents", desc: "Production-ready autonomous agents that act, decide, and integrate." },
  { icon: Code2, title: "Custom Software", desc: "Bespoke applications engineered for performance and scale." },
  { icon: Cpu, title: "SaaS Development", desc: "Full-stack SaaS from MVP to enterprise platforms." },
  { icon: LineChart, title: "Business Intelligence", desc: "Real-time analytics and predictive insights for growth." },
  { icon: Plug, title: "Integrations", desc: "Connect every tool, API, and data source seamlessly." },
  { icon: Workflow, title: "Workflow Optimization", desc: "Re-engineer operations with AI-first processes." },
];

const industries = [
  { icon: Truck, name: "Logistics" },
  { icon: PlaneTakeoff, name: "Transportation" },
  { icon: Briefcase, name: "Consulting" },
  { icon: Stethoscope, name: "Healthcare" },
  { icon: HomeIcon, name: "Real Estate" },
  { icon: ShoppingCart, name: "Ecommerce" },
  { icon: Building2, name: "Professional Services" },
];

const cases = [
  {
    tag: "Logistics", title: "Autonomous dispatch for a 1,200-vehicle fleet",
    before: "Manual dispatch · 14 ops staff", after: "AI dispatch · 4 ops staff",
    roi: "+38% throughput", time: "−72% planning time",
  },
  {
    tag: "Fintech", title: "AI underwriting platform for a lending SaaS",
    before: "8 hr decisions", after: "Sub-3 min decisions",
    roi: "−62% decision time", time: "$2.4M saved / yr",
  },
  {
    tag: "Agency", title: "Content engine generating 4k assets / month",
    before: "Manual production", after: "Automated multi-modal engine",
    roi: "12x output", time: "−85% prod time",
  },
];

const blog = [
  { tag: "AI", title: "The agentic stack: what 2026 changed", date: "Jun 18, 2026" },
  { tag: "SaaS", title: "Pricing AI features without burning margin", date: "Jun 04, 2026" },
  { tag: "Automation", title: "From RPA to autonomous ops in 90 days", date: "May 22, 2026" },
  { tag: "Business Growth", title: "How mid-market firms 4x with AI", date: "May 09, 2026" },
];

const Index = () => {
  const onNewsletter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!fd.get("email")) return toast.error("Email required");
    toast.success("Subscribed. Welcome to VORQIX intel.");
    e.currentTarget.reset();
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/30 blur-3xl animate-orb pointer-events-none" />
        <div className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full bg-accent/30 blur-3xl animate-orb-slow pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] rounded-full bg-primary-glow/20 blur-3xl animate-float pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background" />

        <div className="container relative py-28 lg:py-40">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs uppercase tracking-widest mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              VORQIX.AI · Enterprise AI Innovation
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              Building <span className="text-gradient">Intelligent Software</span> That Scales Businesses
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              AI automation, custom software, SaaS platforms, and intelligent systems built for growth.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Book Strategy Call <ArrowRight className="ml-1" /></Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/products">Request Demo</Link>
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

      {/* TRUST */}
      <section className="border-y border-border bg-secondary/20">
        <div className="container py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">{s.k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="container py-24">
        <SectionHeader eyebrow="Featured Products" title="Flagship SaaS, built by VORQIX" description="Production AI platforms powering teams across logistics, security, and content." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <Card key={p.name} className="p-7 glass border-border relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-50 transition-opacity" />
              <div className="h-11 w-11 rounded-lg bg-gradient-primary grid place-items-center mb-5 shadow-elegant">
                <p.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-primary mb-2">{p.tag}</div>
              <h3 className="font-display text-xl font-bold mb-2">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">{p.desc}</p>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs font-semibold text-gradient">{p.metric}</span>
                <Link to="/products" className="text-xs text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">Explore <ChevronRight className="h-3 w-3" /></Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-24">
        <SectionHeader eyebrow="Services" title="A complete AI engineering team" description="From strategy to deployment — every capability your business needs to operate AI-first." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="group p-7 bg-card/60 border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 shadow-card">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary grid place-items-center mb-5 shadow-elegant group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="relative py-24 border-y border-border bg-secondary/10">
        <div className="container">
          <SectionHeader eyebrow="Industries" title="Verticals we transform" description="Domain-tuned AI systems for the operators driving global commerce." />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {industries.map((i) => (
              <Card key={i.name} className="p-5 glass border-border text-center hover:border-primary/40 hover:-translate-y-1 transition-all">
                <div className="h-10 w-10 mx-auto rounded-lg bg-gradient-primary grid place-items-center mb-3">
                  <i.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="text-sm font-semibold">{i.name}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="container py-24">
        <SectionHeader eyebrow="Case Studies" title="Outcomes, measured in ROI" description="Before / after results from real VORQIX engagements." />
        <div className="grid lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <Card key={c.title} className="p-7 glass border-border group hover:-translate-y-1 transition-all">
              <Badge variant="outline" className="border-primary/40 text-primary mb-4">{c.tag}</Badge>
              <h3 className="font-display text-lg font-semibold mb-5 min-h-[3.5rem]">{c.title}</h3>
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 rounded-lg bg-secondary/40 border border-border">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Before</div>
                  <div className="text-xs">{c.before}</div>
                </div>
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/30">
                  <div className="text-[10px] uppercase tracking-widest text-primary mb-1">After</div>
                  <div className="text-xs">{c.after}</div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="text-xl font-display font-bold text-gradient">{c.roi}</span>
                <span className="text-xs text-muted-foreground">{c.time}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <InteractiveDemos />

      {/* BLOG */}
      <section className="container py-24">
        <SectionHeader eyebrow="Insights" title="From the VORQIX lab" description="Field notes on AI, SaaS, automation, and business growth." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blog.map((b) => (
            <Link to="/blog" key={b.title} className="group">
              <Card className="p-6 h-full bg-card/60 border-border hover:border-primary/40 hover:-translate-y-1 transition-all">
                <Badge variant="outline" className="border-primary/40 text-primary mb-4">{b.tag}</Badge>
                <h3 className="font-display text-base font-semibold mb-4 group-hover:text-primary transition-colors">{b.title}</h3>
                <div className="text-xs text-muted-foreground flex items-center justify-between mt-auto">
                  <span>{b.date}</span>
                  <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="mt-12 max-w-xl mx-auto">
          <form onSubmit={onNewsletter} className="flex flex-col sm:flex-row gap-3 p-2 glass rounded-xl border border-border">
            <Input name="email" type="email" placeholder="you@company.com" className="border-0 bg-transparent flex-1 focus-visible:ring-0" required />
            <Button type="submit" variant="hero"><Bell className="mr-1 h-4 w-4" /> Subscribe</Button>
          </form>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="relative overflow-hidden rounded-3xl glass border border-border p-12 lg:p-16 text-center">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              Ready to build with <span className="text-gradient">VORQIX</span>?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              Book a strategy call, request a demo, or start your project today. We respond within 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild variant="hero" size="lg"><Link to="/contact"><Calendar className="mr-2 h-4 w-4" /> Book Strategy Call</Link></Button>
              <Button asChild variant="glass" size="lg"><Link to="/products"><Sparkles className="mr-2 h-4 w-4" /> Request Demo</Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/contact">Get Started <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* ---------- Interactive Demos ---------- */
const demoTabs = [
  { id: "chat", label: "AI Chat", icon: MessageSquare },
  { id: "flow", label: "Automation Flow", icon: Workflow },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
] as const;

type DemoId = typeof demoTabs[number]["id"];

function InteractiveDemos() {
  const [tab, setTab] = useState<DemoId>("chat");
  return (
    <section className="container py-24">
      <SectionHeader eyebrow="Live Demo" title="See VORQIX intelligence in action" description="Three peeks into the systems we ship daily." />
      <div className="flex justify-center gap-2 mb-8 flex-wrap">
        {demoTabs.map((d) => (
          <button key={d.id} onClick={() => setTab(d.id)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 transition-all border ${
              tab === d.id ? "bg-gradient-primary text-primary-foreground border-transparent shadow-elegant" : "glass border-border text-muted-foreground hover:text-foreground"
            }`}>
            <d.icon className="h-4 w-4" /> {d.label}
          </button>
        ))}
      </div>
      <Card className="glass border-border p-6 lg:p-8 overflow-hidden">
        {tab === "chat" && <ChatDemo />}
        {tab === "flow" && <FlowDemo />}
        {tab === "analytics" && <AnalyticsDemo />}
      </Card>
    </section>
  );
}

function ChatDemo() {
  const script = [
    { role: "user", text: "Summarize today's logistics ops." },
    { role: "ai", text: "412 shipments routed · 38 exceptions auto-resolved · 4 require human review. Avg ETA accuracy 96.3%." },
    { role: "user", text: "Draft a Slack update for the team." },
    { role: "ai", text: "Posted ✓ — '🚚 Daily ops: 412 routed, 38 auto-fixed, 4 escalations. Throughput +12% WoW. Great work team.'" },
  ];
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible >= script.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 900);
    return () => clearTimeout(t);
  }, [visible, script.length]);
  return (
    <div className="max-w-2xl mx-auto space-y-3 min-h-[320px]">
      {script.slice(0, visible).map((m, i) => (
        <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-up`}>
          <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
            m.role === "user" ? "bg-gradient-primary text-primary-foreground" : "glass border border-border"
          }`}>{m.text}</div>
        </div>
      ))}
      {visible < script.length && (
        <div className="flex justify-start">
          <div className="glass border border-border px-4 py-3 rounded-2xl inline-flex gap-1">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse [animation-delay:200ms]" />
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse [animation-delay:400ms]" />
          </div>
        </div>
      )}
    </div>
  );
}

function FlowDemo() {
  const nodes = [
    { icon: Mail, label: "Trigger: New Lead" },
    { icon: Brain, label: "AI Enrichment" },
    { icon: GitBranch, label: "Score & Route" },
    { icon: Database, label: "Sync to CRM" },
    { icon: Send, label: "Notify Sales" },
  ];
  return (
    <div className="min-h-[320px] flex items-center">
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-4">
        {nodes.map((n, i) => (
          <div key={n.label} className="relative animate-fade-up" style={{ animationDelay: `${i * 120}ms` }}>
            <div className="p-4 rounded-xl glass border border-border text-center">
              <div className="h-10 w-10 mx-auto rounded-lg bg-gradient-primary grid place-items-center mb-2">
                <n.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="text-xs font-medium">{n.label}</div>
            </div>
            {i < nodes.length - 1 && (
              <ArrowRight className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 h-4 w-4 text-primary" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsDemo() {
  const bars = [42, 58, 49, 71, 65, 84, 92, 78, 96, 88, 110, 124];
  const max = Math.max(...bars);
  return (
    <div className="min-h-[320px] grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Revenue impact</div>
            <div className="font-display text-3xl font-bold text-gradient">$2.4M</div>
          </div>
          <Badge variant="outline" className="border-primary/40 text-primary">+38% YoY</Badge>
        </div>
        <div className="flex items-end gap-2 h-48 p-4 rounded-xl bg-secondary/30 border border-border">
          {bars.map((b, i) => (
            <div key={i} className="flex-1 rounded-t bg-gradient-primary animate-fade-up" style={{ height: `${(b / max) * 100}%`, animationDelay: `${i * 50}ms` }} />
          ))}
        </div>
      </div>
      <div className="space-y-3">
        {[
          { l: "Active Agents", v: "47", icon: Bot },
          { l: "Tasks / hr", v: "1,284", icon: Activity },
          { l: "Uptime", v: "99.98%", icon: ShieldCheck },
          { l: "Integrations", v: "62", icon: Boxes },
        ].map((k) => (
          <div key={k.l} className="flex items-center gap-3 p-3 rounded-xl glass border border-border">
            <div className="h-9 w-9 rounded-lg bg-gradient-primary grid place-items-center"><k.icon className="h-4 w-4 text-primary-foreground" /></div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground">{k.l}</div>
              <div className="font-display font-bold">{k.v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;