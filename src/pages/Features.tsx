import {
  Globe, ShoppingBag, Users, Briefcase, Bot, Sparkles, Zap, BarChart3,
  Code, Layers, ArrowRight, CheckCircle2, Building2, MessageSquare, Plug
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PublicNavbar } from "@/components/PublicNavbar";
import { useNavigate } from "react-router-dom";

const FEATURES = [
  {
    icon: Globe,
    title: "Website & Subdomain Management",
    desc: "Build stunning websites with our drag-and-drop builder. Get custom subdomains, SSL certificates, and full SEO tools — no coding required.",
    highlights: ["Custom Subdomains", "SEO Optimization", "SSL Included", "Templates"],
  },
  {
    icon: Building2,
    title: "Company Profiles",
    desc: "Create rich business profiles like Facebook Pages. Showcase your story, team, portfolio, and let customers follow and engage with your brand.",
    highlights: ["Social Presence", "Follower System", "Rich Media", "Analytics"],
  },
  {
    icon: ShoppingBag,
    title: "Services Marketplace",
    desc: "List your services like on Fiverr. Set pricing packages, manage orders, and let clients browse, compare, and book your services instantly.",
    highlights: ["Pricing Tiers", "Order Management", "Client Reviews", "Categories"],
  },
  {
    icon: Layers,
    title: "Product Marketplace",
    desc: "Sell physical or digital products like WooCommerce. Inventory management, shipping, payments, and analytics — all built in.",
    highlights: ["Inventory Tracking", "Payment Gateway", "Shipping", "Analytics"],
  },
  {
    icon: Briefcase,
    title: "Job Board",
    desc: "Post jobs, review applications, and hire talent like LinkedIn Jobs. Smart matching connects you with the right candidates automatically.",
    highlights: ["Smart Matching", "Applications", "ATS Built-in", "Analytics"],
  },
  {
    icon: Bot,
    title: "AI-Powered Tools",
    desc: "From content generation to predictive analytics, our AI suite automates repetitive tasks and surfaces insights you'd otherwise miss.",
    highlights: ["Content Generation", "Predictive Analytics", "Automation", "Insights"],
  },
];

const INTEGRATIONS = [
  "Stripe", "PayPal", "Google Analytics", "Mailchimp", "Slack", "Zapier", "HubSpot", "QuickBooks"
];

const Features = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto animate-[fadeInUp_0.7s_ease-out]">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs font-medium">
            <Zap className="h-3 w-3 mr-1.5" /> Platform Features
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
            Everything to <span className="gradient-text">Run & Grow</span> Your Business
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            A complete suite of tools designed to replace a dozen apps. Build, sell, manage, and scale from one dashboard.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            const isEven = i % 2 === 0;
            return (
              <Card key={f.title} className="border-border/50 overflow-hidden hover:shadow-elevated transition-all duration-300">
                <CardContent className={`p-0 flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="md:w-2/5 gradient-primary flex items-center justify-center py-12 md:py-0">
                    <Icon className="h-16 w-16 text-primary-foreground/80" />
                  </div>
                  <div className="md:w-3/5 p-6 sm:p-8 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-5">{f.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.highlights.map((h) => (
                        <span key={h} className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          <CheckCircle2 className="h-3 w-3" /> {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-10">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs"><Plug className="h-3 w-3 mr-1" /> Integrations</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Works With Your <span className="gradient-text">Favorite Tools</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Connect seamlessly with the tools you already use and love.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {INTEGRATIONS.map((name) => (
              <div key={name} className="px-5 py-3 bg-card border border-border/50 rounded-xl text-sm font-medium text-foreground shadow-soft hover:shadow-card transition-shadow">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8">Start your free trial today — no credit card required.</p>
          <Button size="lg" className="gradient-primary text-primary-foreground h-12 px-8 text-base" onClick={() => navigate("/dashboard")}>
            Start Free Trial <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4 text-center text-sm text-muted-foreground">
        © 2026 BizOS. All rights reserved.
      </footer>
    </div>
  );
};

export default Features;
