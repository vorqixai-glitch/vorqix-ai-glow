import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useState } from "react";
import { posts } from "@/data/posts";
import { useSEO } from "@/hooks/use-seo";

const Blog = () => {
  useSEO({
    title: "Blog — AI, automation & SaaS insights | VORQIX.AI",
    description: "Essays, case studies, and field notes on AI automation, agents, SaaS development, and business growth from the VORQIX.AI team.",
    path: "/blog",
  });
  const tags = ["All", ...Array.from(new Set(posts.map((p) => p.tag)))];
  const [tag, setTag] = useState("All");
  const filtered = tag === "All" ? posts : posts.filter((p) => p.tag === tag);
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
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-4 py-2 rounded-full text-xs font-medium border transition-all ${
                tag === t
                  ? "bg-gradient-primary text-primary-foreground border-transparent"
                  : "glass border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <Card key={p.slug} className="overflow-hidden bg-card/60 border-border hover:border-primary/40 transition-all group">
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/20 via-accent/10 to-transparent grid-bg" />
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary uppercase tracking-widest">{p.tag}</span>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                  <span>· {p.read}</span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.excerpt}</p>
                <Link to={`/blog/${p.slug}`} className="inline-flex items-center gap-1 text-sm text-primary">Read article <ArrowRight className="h-4 w-4" /></Link>
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