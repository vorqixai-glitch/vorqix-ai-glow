import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Brain, ChevronDown, Code2, Cpu, LineChart, Plug, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const solutions = [
  { icon: Bot, title: "AI Automation", desc: "Eliminate repetitive operations with intelligent end-to-end automation across your stack.", details: ["Event-driven AI workflows", "Document & data processing", "Multi-system orchestration"] },
  { icon: Code2, title: "Custom Software Development", desc: "Production-grade engineering — built around your business model, not a template.", details: ["Full-stack web & mobile", "Modern cloud architecture", "Long-term maintainability"] },
  { icon: Cpu, title: "SaaS Development", desc: "From validated MVP to enterprise-grade multi-tenant platform.", details: ["Authentication & billing", "Admin dashboards", "Scalable infrastructure"] },
  { icon: Workflow, title: "Workflow Optimization", desc: "Map, measure, and re-engineer operations for AI-native efficiency.", details: ["Process audits", "Bottleneck removal", "ROI modeling"] },
  { icon: Brain, title: "AI Agents", desc: "Deployable agents that act, reason, and integrate with your tools.", details: ["Sales & research agents", "Internal copilots", "Tool-using LLM systems"] },
  { icon: LineChart, title: "Business Intelligence", desc: "Predictive analytics and real-time dashboards that inform every decision.", details: ["Custom data warehouses", "AI forecasting", "Executive dashboards"] },
  { icon: Plug, title: "Integrations", desc: "Connect anything to anything — clean APIs, robust pipelines, zero lock-in.", details: ["CRM, ERP, payments", "Webhooks & event buses", "AI-driven ETL"] },
];

const products = [
  { name: "Vorqix Flow", tag: "Automation OS", desc: "Drag-and-drop AI workflow builder for operations teams. Visual, fast, observable.", features: ["50+ integrations", "Custom AI nodes", "Real-time monitoring"] },
  { name: "Vorqix Agent", tag: "Agent platform", desc: "Deploy production AI agents for sales, support, and ops in hours.", features: ["Tool-use & memory", "Voice & chat", "Audit logs"] },
  { name: "Vorqix Insight", tag: "Predictive BI", desc: "Modern BI with AI forecasting and natural-language analytics.", features: ["Ask data in English", "Predictive models", "Whitelabel ready"] },
];

const Solutions = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="container py-24">
        <SectionHeader eyebrow="Solutions" title="AI-first capabilities, end-to-end" description="A complete suite of services to design, ship, and scale intelligent software." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <Card key={s.title} className="p-8 bg-card/60 border-border hover:border-primary/40 transition-all duration-300 group">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary grid place-items-center mb-6 shadow-elegant group-hover:scale-110 transition-transform">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
              <ul className="space-y-1.5 text-sm">
                {s.details.map((d) => (
                  <li key={d} className="flex gap-2 text-foreground/80"><span className="text-primary">→</span>{d}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-24">
        <SectionHeader eyebrow="SaaS Showcase" title="Our flagship platforms" description="Click any product to expand its capabilities." />
        <div className="space-y-4 max-w-4xl mx-auto">
          {products.map((p, i) => (
            <Card key={p.name} className="glass border-border overflow-hidden">
              <button className="w-full p-6 flex items-center justify-between text-left" onClick={() => setOpen(open === i ? null : i)}>
                <div>
                  <div className="text-xs uppercase tracking-widest text-primary mb-1">{p.tag}</div>
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-6 pb-6 animate-fade-in border-t border-border pt-4">
                  <p className="text-muted-foreground mb-4">{p.desc}</p>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {p.features.map((f) => (
                      <div key={f} className="p-3 rounded-lg bg-secondary/40 text-sm">{f}</div>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-24 text-center">
        <Card className="p-12 lg:p-16 glass border-border bg-gradient-to-br from-secondary/40 to-transparent">
          <h2 className="font-display text-4xl font-bold text-gradient mb-4">Ready to deploy AI in your business?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">Book a free 30-minute strategy call. We'll map opportunities specific to your operations.</p>
          <Button asChild variant="hero" size="xl"><Link to="/contact">Book a consultation <ArrowRight className="ml-1" /></Link></Button>
        </Card>
      </section>
    </>
  );
};
export default Solutions;