import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap, Building2 } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    desc: "For individuals getting started",
    icon: Zap,
    features: ["1 Website", "5 Products", "Basic Analytics", "Community Support"],
    current: true,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    desc: "For growing businesses",
    icon: Crown,
    features: ["5 Websites", "Unlimited Products", "Advanced Analytics", "Priority Support", "Custom Domain", "Service Listings"],
    popular: true,
  },
  {
    name: "Business",
    price: "$99",
    period: "/month",
    desc: "For established companies",
    icon: Building2,
    features: ["Unlimited Websites", "Unlimited Everything", "White-label", "Dedicated Support", "API Access", "Team Management", "Custom Integrations"],
  },
];

export default function Subscription() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tight">Subscription & Billing</h1>
          <p className="text-muted-foreground text-sm mt-1">Choose the plan that fits your business</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`shadow-card border-border/50 relative ${plan.popular ? "ring-2 ring-primary shadow-elevated" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="gradient-primary text-primary-foreground border-0 px-3">Most Popular</Badge>
                </div>
              )}
              <CardContent className="p-6 pt-8">
                <div className="rounded-lg bg-secondary p-2 w-fit">
                  <plan.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold mt-4">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{plan.desc}</p>
                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <Button
                  className={`w-full mt-6 ${plan.popular ? "gradient-primary text-primary-foreground" : ""}`}
                  variant={plan.current ? "outline" : plan.popular ? "default" : "outline"}
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : "Upgrade"}
                </Button>
                <div className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-success shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

// Need Badge import
import { Badge } from "@/components/ui/badge";
