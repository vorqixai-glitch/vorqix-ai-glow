import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Footer = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (new FormData(form).get("email") || "").toString().trim();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) return toast.error("Enter a valid email");
    toast.success("Subscribed. Welcome aboard.");
    form.reset();
  };
  return (
    <footer className="border-t border-border mt-24">
      <div className="container py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5 space-y-6">
          <Logo />
          <p className="text-muted-foreground max-w-sm">
            AI innovation company building intelligent software, automation systems, and SaaS products for businesses and entrepreneurs.
          </p>
          <form onSubmit={onSubmit} className="flex gap-2 max-w-md">
            <Input name="email" type="email" placeholder="you@company.com" className="bg-secondary/50 border-border" />
            <Button type="submit" variant="hero">Subscribe</Button>
          </form>
          <div className="flex gap-2">
            {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-md glass hover:text-primary transition-colors" aria-label="social">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-display font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/solutions" className="hover:text-foreground">AI Automation</Link></li>
              <li><Link to="/solutions" className="hover:text-foreground">Custom Software</Link></li>
              <li><Link to="/solutions" className="hover:text-foreground">AI Agents</Link></li>
              <li><Link to="/products" className="hover:text-foreground">SaaS Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/industries" className="hover:text-foreground">Logistics</Link></li>
              <li><Link to="/industries" className="hover:text-foreground">Startups</Link></li>
              <li><Link to="/industries" className="hover:text-foreground">Agencies</Link></li>
              <li><Link to="/industries" className="hover:text-foreground">Enterprise</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col sm:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} VORQIX.AI — All rights reserved.</p>
          <p>vorqix.ai · Building the future of intelligent business.</p>
        </div>
      </div>
    </footer>
  );
};