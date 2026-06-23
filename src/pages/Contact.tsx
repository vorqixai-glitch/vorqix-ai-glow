import { Mail, Calendar, MessageSquare, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeader } from "@/components/SectionHeader";
import { toast } from "sonner";

const Contact = () => {
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    if (!f.get("email") || !f.get("name")) return toast.error("Name and email are required");
    toast.success("Inquiry received. We'll respond within 24 hours.");
    e.currentTarget.reset();
  };
  return (
    <section className="container py-24">
      <SectionHeader eyebrow="Contact" title="Let's build something intelligent" description="Tell us about your project. We respond within 24 hours." />
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Mail, t: "Email us", d: "hello@vorqix.ai" },
            { icon: Calendar, t: "Book a call", d: "30-min strategy consultation" },
            { icon: MessageSquare, t: "Quick question", d: "Reply within hours, not days" },
            { icon: Building2, t: "Enterprise", d: "sales@vorqix.ai" },
          ].map((c) => (
            <Card key={c.t} className="p-5 glass border-border flex items-center gap-4">
              <div className="h-11 w-11 rounded-lg bg-gradient-primary grid place-items-center shadow-elegant"><c.icon className="h-5 w-5 text-primary-foreground" /></div>
              <div>
                <div className="font-semibold">{c.t}</div>
                <div className="text-sm text-muted-foreground">{c.d}</div>
              </div>
            </Card>
          ))}
        </div>
        <Card className="lg:col-span-3 p-8 glass border-border shadow-elegant">
          <form onSubmit={submit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label>Full name *</Label><Input name="name" required className="bg-secondary/50 border-border mt-1" /></div>
              <div><Label>Work email *</Label><Input name="email" type="email" required className="bg-secondary/50 border-border mt-1" /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label>Company</Label><Input name="company" className="bg-secondary/50 border-border mt-1" /></div>
              <div>
                <Label>Project type</Label>
                <Select>
                  <SelectTrigger className="bg-secondary/50 border-border mt-1"><SelectValue placeholder="Select..." /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automation">AI Automation</SelectItem>
                    <SelectItem value="custom">Custom Software</SelectItem>
                    <SelectItem value="saas">SaaS Development</SelectItem>
                    <SelectItem value="agent">AI Agents</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label>Budget range</Label>
              <Select>
                <SelectTrigger className="bg-secondary/50 border-border mt-1"><SelectValue placeholder="Select..." /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="lt25">Under $25k</SelectItem>
                  <SelectItem value="25-100">$25k–$100k</SelectItem>
                  <SelectItem value="100-500">$100k–$500k</SelectItem>
                  <SelectItem value="gt500">$500k+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div><Label>Tell us about your project *</Label><Textarea name="message" rows={5} required className="bg-secondary/50 border-border mt-1" /></div>
            <Button type="submit" variant="hero" size="lg" className="w-full">Send inquiry</Button>
            <p className="text-xs text-muted-foreground text-center">By submitting, you agree to receive a response from our team.</p>
          </form>
        </Card>
      </div>
    </section>
  );
};
export default Contact;