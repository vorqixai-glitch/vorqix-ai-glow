import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const posts = [
  { tag: "AI Strategy", date: "Jun 18, 2026", title: "The new AI-first operating model for modern businesses", excerpt: "How leading teams are restructuring around AI agents and automation pipelines.", read: "8 min" },
  { tag: "Engineering", date: "Jun 10, 2026", title: "Building production-grade AI agents that don't hallucinate", excerpt: "Architectural patterns we use to ship reliable agents into enterprise environments.", read: "12 min" },
  { tag: "Case Study", date: "May 28, 2026", title: "How we cut dispatch operations by 70% for a 1,200-vehicle fleet", excerpt: "Inside the AI dispatch system we built — and the results six months in.", read: "10 min" },
  { tag: "SaaS", date: "May 14, 2026", title: "The 9-week SaaS sprint: what actually ships", excerpt: "A breakdown of our high-velocity SaaS engagement and what it produces.", read: "6 min" },
  { tag: "Product", date: "Apr 30, 2026", title: "Why we built Vorqix Flow", excerpt: "The vision behind our flagship AI workflow platform.", read: "5 min" },
  { tag: "Industry", date: "Apr 12, 2026", title: "AI agents in logistics: state of the industry 2026", excerpt: "Where the industry stands and where the real opportunities live.", read: "11 min" },
];

const Blog = () => {
  const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!f.get("email")) return toast.error("Email required");
    toast.success("Subscribed.");
    e.currentTarget.reset();
  };
  return (
    <>
      <section className="container py-24">
        <SectionHeader eyebrow="Blog" title="Thought leadership for the AI era" description="Essays, case studies, and field notes from the VORQIX.AI team." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Card key={p.title} className="overflow-hidden bg-card/60 border-border hover:border-primary/40 transition-all group">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent grid-bg" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary uppercase tracking-widest">{p.tag}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                  <span>· {p.read}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                <Link to="#" className="inline-flex items-center gap-1 text-sm text-primary">Read article <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container py-16">
        <Card className="p-10 glass border-border text-center">
          <h2 className="font-display text-3xl font-bold text-gradient mb-3">Get the VORQIX briefing</h2>
          <p className="text-muted-foreground mb-6">Monthly insights on AI, automation, and software. No spam.</p>
          <form onSubmit={subscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input name="email" type="email" placeholder="you@company.com" className="bg-secondary/50 border-border" required />
            <Button type="submit" variant="hero">Subscribe</Button>
          </form>
        </Card>
      </section>
    </>
  );
};
export default Blog;