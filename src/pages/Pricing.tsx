import { useState } from "react";
import { CheckCircle2, X, ArrowRight, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PublicNavbar } from "@/components/PublicNavbar";
import { useNavigate } from "react-router-dom";

const PLANS = [
  {
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    desc: "Perfect for getting started",
    features: [
      "1 Website", "Basic CRM (100 contacts)", "5 Products", "3 Services",
      "Community Support", "Basic Analytics", "TradingHub Branding",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    yearlyPrice: 290,
    desc: "For growing businesses",
    features: [
      "Unlimited Websites", "Advanced CRM (10k contacts)", "Unlimited Products",
      "Unlimited Services", "AI Tools Suite", "Priority Support",
      "Custom Domain", "Remove Branding", "Advanced Analytics",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 990,
    desc: "For teams and agencies",
    features: [
      "Everything in Pro", "White Label", "API Access", "Dedicated Account Manager",
      "Custom Integrations", "SLA Guarantee", "Team Collaboration (25 seats)",
      "Audit Logs", "SSO / SAML",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const COMPARISON_FEATURES = [
  { name: "Websites", free: "1", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "Products", free: "5", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "Services", free: "3", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "CRM Contacts", free: "100", pro: "10,000", enterprise: "Unlimited" },
  { name: "AI Tools", free: false, pro: true, enterprise: true },
  { name: "Custom Domain", free: false, pro: true, enterprise: true },
  { name: "Analytics", free: "Basic", pro: "Advanced", enterprise: "Advanced" },
  { name: "API Access", free: false, pro: false, enterprise: true },
  { name: "White Label", free: false, pro: false, enterprise: true },
  { name: "Support", free: "Community", pro: "Priority", enterprise: "Dedicated" },
];

const FAQS = [
  { q: "Can I switch plans anytime?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference." },
  { q: "Is there a free trial?", a: "Yes! The Pro plan comes with a 14-day free trial. No credit card required to start." },
  { q: "What payment methods do you accept?", a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans." },
  { q: "Can I cancel anytime?", a: "Absolutely. No long-term contracts. Cancel anytime from your dashboard with just a few clicks." },
  { q: "Do you offer discounts for nonprofits?", a: "Yes, we offer 50% off for verified nonprofits and educational institutions. Contact our sales team." },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();

  const renderCell = (val: string | boolean) => {
    if (val === true) return <CheckCircle2 className="h-4 w-4 text-primary mx-auto" />;
    if (val === false) return <X className="h-4 w-4 text-muted-foreground/40 mx-auto" />;
    return <span className="text-sm">{val}</span>;
  };

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto animate-[fadeInUp_0.7s_ease-out]">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs font-medium">
            <Zap className="h-3 w-3 mr-1.5" /> Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            Start free. Upgrade when you're ready. No hidden fees, ever.
          </p>
          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 bg-muted rounded-full p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!yearly ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${yearly ? "bg-card shadow-sm text-foreground" : "text-muted-foreground"}`}
            >
              Yearly <span className="text-xs text-primary ml-1">Save 17%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {PLANS.map((p) => (
            <Card key={p.name} className={`border-border/50 relative ${p.popular ? "ring-2 ring-primary shadow-elevated" : ""}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="gradient-primary text-primary-foreground border-0 px-3">Most Popular</Badge>
                </div>
              )}
              <CardContent className="p-6 pt-8">
                <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-foreground">
                    ${yearly ? p.yearlyPrice : p.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground text-sm">/{yearly ? "yr" : "mo"}</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${p.popular ? "gradient-primary text-primary-foreground" : ""}`}
                  variant={p.popular ? "default" : "outline"}
                  onClick={() => navigate("/dashboard")}
                >
                  {p.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">Feature <span className="gradient-text">Comparison</span></h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 text-sm font-semibold text-foreground">Feature</th>
                  <th className="py-3 px-4 text-sm font-semibold text-foreground text-center">Free</th>
                  <th className="py-3 px-4 text-sm font-semibold text-primary text-center">Pro</th>
                  <th className="py-3 pl-4 text-sm font-semibold text-foreground text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_FEATURES.map((f) => (
                  <tr key={f.name} className="border-b border-border/50">
                    <td className="py-3 pr-4 text-sm text-foreground">{f.name}</td>
                    <td className="py-3 px-4 text-center">{renderCell(f.free)}</td>
                    <td className="py-3 px-4 text-center bg-primary/5">{renderCell(f.pro)}</td>
                    <td className="py-3 pl-4 text-center">{renderCell(f.enterprise)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <Card key={i} className="border-border/50">
                <button
                  className="w-full p-5 flex items-center justify-between text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="h-4 w-4 text-muted-foreground shrink-0" /> : <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 -mt-1">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Start Building <span className="gradient-text">Today</span></h2>
          <p className="text-muted-foreground text-lg mb-8">Join 12,000+ businesses. No credit card required.</p>
          <Button size="lg" className="gradient-primary text-primary-foreground h-12 px-8 text-base" onClick={() => navigate("/dashboard")}>
            Start Free Trial <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4 text-center text-sm text-muted-foreground">
        © 2026 TradingHub. All rights reserved.
      </footer>
    </div>
  );
};

export default Pricing;
