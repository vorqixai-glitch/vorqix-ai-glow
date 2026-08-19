import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FAQSection, faqJsonLd } from "@/components/FAQSection";
import { useSEO } from "@/hooks/use-seo";

const FAQ = () => {
  useSEO({
    title: "FAQ — AI development & automation questions | VORQIX.AI",
    description:
      "Answers on engagement models, timelines, pricing, code ownership, reliability, and the technology behind VORQIX.AI builds.",
    path: "/faq",
    jsonLd: faqJsonLd,
  });
  return (
    <>
      <FAQSection />
      <section className="container pb-24">
        <Card className="glass border-border p-10 text-center">
          <h2 className="font-display text-3xl font-bold text-gradient mb-3">Still have a question?</h2>
          <p className="text-muted-foreground mb-6">Send it over — we answer within 24 hours.</p>
          <Button asChild variant="hero"><Link to="/contact">Contact us</Link></Button>
        </Card>
      </section>
    </>
  );
};
export default FAQ;