import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cpu, LineChart, Zap, ShieldCheck, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";

const products = [
  { icon: Zap, name: "Vorqix Flow", tag: "Automation OS", price: "$49/mo", desc: "Drag-and-drop AI workflows for ops teams.", features: ["50+ integrations", "Custom AI nodes", "Observability built-in", "Team collaboration"] },
  { icon: Bot, name: "Vorqix Agent", tag: "Agent platform", price: "$99/mo", desc: "Production-ready AI agents that act and integrate.", features: ["Tool use & memory", "Voice + chat channels", "Knowledge base sync", "Audit logs"] },
  { icon: LineChart, name: "Vorqix Insight", tag: "Predictive BI", price: "$129/mo", desc: "AI-native BI with natural language analytics.", features: ["Ask in English", "Forecasting models", "Whitelabel ready", "API-first"] },
  { icon: Layers, name: "Vorqix Connect", tag: "Integration hub", price: "$39/mo", desc: "Universal connector for AI pipelines and SaaS tools.", features: ["200+ apps", "Visual mapping", "Schema sync", "Edge runtime"] },
];

const Products = () => (
  <>
    <section className="container py-24">
      <SectionHeader eyebrow="SaaS Products" title="The Vorqix Platform" description="A suite of AI-native products that businesses use to automate, build, and scale." />
      <div className="grid md:grid-cols-2 gap-6">
        {products.map((p) => (
          <Card key={p.name} className="p-8 glass border-border relative overflow-hidden group">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gradient-primary opacity-20 blur-3xl group-hover:opacity-40 transition-opacity" />
            <div className="flex items-center justify-between mb-6">
              <div className="h-12 w-12 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant">
                <p.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="text-xs uppercase tracking-widest text-primary">{p.tag}</div>
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">{p.name}</h3>
            <p className="text-muted-foreground mb-6">{p.desc}</p>
            <ul className="space-y-2 mb-6">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-foreground/80"><span className="text-primary">✓</span>{f}</li>
              ))}
            </ul>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div><span className="font-display text-2xl font-bold text-gradient">{p.price}</span><span className="text-sm text-muted-foreground"> /seat</span></div>
              <Button asChild variant="hero" size="sm"><Link to="/contact">Request demo</Link></Button>
            </div>
          </Card>
        ))}
      </div>
    </section>

    <section className="container py-24">
      <SectionHeader eyebrow="Enterprise" title="Custom & whitelabel deployments" />
      <Card className="p-12 glass border-border">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, t: "Enterprise security", d: "SSO, audit logs, custom data residency." },
            { icon: Layers, t: "Whitelabel ready", d: "Run our platforms under your brand." },
            { icon: Cpu, t: "Custom models", d: "Fine-tune AI on your proprietary data." },
          ].map((f) => (
            <div key={f.t}>
              <f.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold mb-2">{f.t}</h3>
              <p className="text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <p className="text-muted-foreground">Need a tailored deployment for your org?</p>
          <Button asChild variant="hero"><Link to="/contact">Talk to sales <ArrowRight className="ml-1" /></Link></Button>
        </div>
      </Card>
    </section>
  </>
);
export default Products;