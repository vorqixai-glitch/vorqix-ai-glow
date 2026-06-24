import { SectionHeader } from "@/components/SectionHeader";

type Props = { kind: "privacy" | "terms" };

export default function Legal({ kind }: Props) {
  const isPrivacy = kind === "privacy";
  const title = isPrivacy ? "Privacy Policy" : "Terms of Service";
  const eyebrow = isPrivacy ? "Privacy" : "Terms";
  const updated = "Last updated: June 24, 2026";

  const sections = isPrivacy
    ? [
        { h: "Overview", p: "VORQIX.AI (\"we\", \"us\") respects your privacy. This page explains what we collect, how we use it, and your rights." },
        { h: "Information we collect", p: "Account details you provide (name, email, company), usage telemetry from our products, and any content you submit through forms or integrations." },
        { h: "How we use information", p: "To operate and improve our products, deliver services, communicate updates, and meet legal obligations. We do not sell personal data." },
        { h: "Data security", p: "We follow enterprise-grade controls including encryption in transit and at rest, least-privilege access, and routine audits." },
        { h: "Your rights", p: "You may request access, correction, export, or deletion of your data at any time by contacting privacy@vorqix.ai." },
        { h: "Contact", p: "Questions? Email privacy@vorqix.ai." },
      ]
    : [
        { h: "Acceptance", p: "By using VORQIX.AI services, you agree to these terms. If you do not agree, do not use the services." },
        { h: "Use of services", p: "You agree not to misuse our services, reverse-engineer our platforms, or use them for unlawful purposes." },
        { h: "Intellectual property", p: "All VORQIX.AI software, trademarks, and content remain our property. Your content remains yours; you grant us limited rights to operate the service." },
        { h: "Service availability", p: "We aim for high availability but do not guarantee uninterrupted service. Scheduled maintenance and emergency fixes may occur." },
        { h: "Liability", p: "To the maximum extent permitted by law, VORQIX.AI is not liable for indirect or consequential damages arising from use of the services." },
        { h: "Contact", p: "Questions? Email legal@vorqix.ai." },
      ];

  return (
    <div className="container py-24 max-w-4xl">
      <SectionHeader align="left" eyebrow={eyebrow} title={title} description={updated} />
      <div className="space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="font-display text-xl font-semibold mb-2">{s.h}</h2>
            <p className="text-muted-foreground leading-relaxed">{s.p}</p>
          </section>
        ))}
      </div>
    </div>
  );
}