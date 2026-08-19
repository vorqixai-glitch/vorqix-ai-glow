import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getPost, posts } from "@/data/posts";
import { useSEO } from "@/hooks/use-seo";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);
  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  useSEO({
    title: post ? `${post.title} | VORQIX.AI` : "Article not found | VORQIX.AI",
    description: post?.excerpt ?? "VORQIX.AI insights on AI, automation, and software.",
    path: `/blog/${slug ?? ""}`,
    type: "article",
    jsonLd: post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: { "@type": "Organization", name: post.author },
          publisher: { "@type": "Organization", name: "VORQIX.AI" },
          mainEntityOfPage: `https://vorqix.ai/blog/${post.slug}`,
        }
      : undefined,
  });

  if (!post) return <NotFound />;

  return (
    <article className="container py-24 max-w-3xl">
      <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="h-4 w-4" /> All articles
      </Link>
      <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
        <span className="px-2 py-1 rounded bg-primary/10 text-primary uppercase tracking-widest">{post.tag}</span>
        <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{post.date}</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-3 w-3" />{post.read}</span>
      </div>
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-gradient mb-6">{post.title}</h1>
      <p className="text-lg text-muted-foreground mb-10">{post.excerpt}</p>
      <div className="space-y-6">
        {post.body.map((p, i) => (
          <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
        ))}
      </div>

      <Card className="glass border-border p-8 mt-14 text-center">
        <h2 className="font-display text-2xl font-bold mb-3">Want this applied to your operation?</h2>
        <p className="text-muted-foreground mb-6">Book a strategy call and we'll map the highest-ROI automation in your business.</p>
        <Button asChild variant="hero"><Link to="/contact">Book a strategy call</Link></Button>
      </Card>

      <div className="mt-16">
        <h2 className="font-display text-xl font-semibold mb-6">Keep reading</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {related.map((r) => (
            <Link key={r.slug} to={`/blog/${r.slug}`} className="block p-5 rounded-xl glass border border-border hover:border-primary/40 transition-colors">
              <div className="text-xs text-primary uppercase tracking-widest mb-2">{r.tag}</div>
              <div className="font-display text-sm font-semibold">{r.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
};
export default BlogPost;