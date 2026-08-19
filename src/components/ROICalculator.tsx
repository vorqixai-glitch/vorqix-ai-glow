import { useMemo, useState } from "react";
import { Calculator, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";

const currency = (n: number) =>
  n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export const ROICalculator = () => {
  const [people, setPeople] = useState(12);
  const [hours, setHours] = useState(9);
  const [rate, setRate] = useState(45);

  const result = useMemo(() => {
    const automationRate = 0.65;
    const weeklyHours = people * hours * automationRate;
    const annualHours = weeklyHours * 48;
    const annualSavings = annualHours * rate;
    return { weeklyHours, annualHours, annualSavings };
  }, [people, hours, rate]);

  return (
    <section className="container py-24">
      <SectionHeader
        eyebrow="ROI Calculator"
        title="Estimate what automation returns"
        description="Adjust the inputs to model the annual value of automating your repetitive operational work."
      />
      <Card className="glass border-border p-8 lg:p-10 grid lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <ControlRow label="People doing repetitive work" value={`${people}`} >
            <Slider value={[people]} onValueChange={(v) => setPeople(v[0])} min={1} max={200} step={1} />
          </ControlRow>
          <ControlRow label="Manual hours per person / week" value={`${hours} h`}>
            <Slider value={[hours]} onValueChange={(v) => setHours(v[0])} min={1} max={40} step={1} />
          </ControlRow>
          <ControlRow label="Fully loaded hourly cost" value={currency(rate)}>
            <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={15} max={200} step={5} />
          </ControlRow>
          <p className="text-xs text-muted-foreground">
            Model assumes 65% of mapped manual work is automatable — the median coverage across our delivered engagements.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-secondary/30 p-8 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 text-primary text-xs uppercase tracking-widest mb-6">
            <Calculator className="h-4 w-4" /> Projected impact
          </div>
          <div className="space-y-6">
            <Metric label="Hours returned / week" value={`${Math.round(result.weeklyHours).toLocaleString()} h`} />
            <Metric label="Hours returned / year" value={`${Math.round(result.annualHours).toLocaleString()} h`} />
            <div>
              <div className="text-xs text-muted-foreground mb-1">Estimated annual savings</div>
              <div className="font-display text-4xl font-bold text-gradient flex items-center gap-2">
                {currency(result.annualSavings)}
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
          <Button asChild variant="hero" className="mt-8 w-full">
            <Link to="/contact">Validate this with our team</Link>
          </Button>
        </div>
      </Card>
    </section>
  );
};

const ControlRow = ({ label, value, children }: { label: string; value: string; children: React.ReactNode }) => (
  <div>
    <div className="flex items-baseline justify-between mb-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-display font-semibold">{value}</span>
    </div>
    {children}
  </div>
);

const Metric = ({ label, value }: { label: string; value: string }) => (
  <div>
    <div className="text-xs text-muted-foreground mb-1">{label}</div>
    <div className="font-display text-2xl font-bold">{value}</div>
  </div>
);