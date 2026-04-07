import {
  ArrowRight, Globe, ShoppingBag, Users, Briefcase, Zap, Bot, BarChart3,
  Star, CheckCircle2, Building2, Sparkles, Shield, TrendingUp, Play,
  ChevronRight, Quote
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import BusinessSearchSection from "@/components/BusinessSearchSection";
import { PublicNavbar } from "@/components/PublicNavbar";

const STATS = [
  { value: "12,000+", label: "Active Businesses" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "50M+", label: "Transactions Processed" },
  { value: "150+", label: "Countries Served" },
];

const FEATURES = [
  { icon: Globe, title: "Website Builder", desc: "Launch professional websites in minutes with drag-and-drop tools and custom subdomains.", color: "from-blue-500 to-cyan-500" },
  { icon: ShoppingBag, title: "E-Commerce", desc: "Sell products and services online with integrated payments, inventory, and shipping.", color: "from-violet-500 to-purple-500" },
  { icon: Users, title: "CRM & Leads", desc: "Manage customer relationships, track leads, and automate follow-ups effortlessly.", color: "from-orange-500 to-rose-500" },
  { icon: Briefcase, title: "Job Board", desc: "Post jobs, receive applications, and hire the best talent directly from your platform.", color: "from-emerald-500 to-teal-500" },
];

const AI_FEATURES = [
  { icon: Bot, title: "Smart Automation", desc: "Automate repetitive tasks — invoicing, follow-ups, and scheduling powered by AI." },
  { icon: Sparkles, title: "AI Recommendations", desc: "Get personalized suggestions for pricing, marketing, and business growth." },
  { icon: BarChart3, title: "Predictive Analytics", desc: "Forecast revenue, customer behavior, and market trends with intelligent insights." },
  { icon: Shield, title: "Fraud Detection", desc: "AI-powered security monitors transactions and protects your business 24/7." },
];

const USE_CASES = [
  { title: "Small Business", desc: "Launch your online presence, manage orders, and grow your customer base — all in one place.", badge: "Popular" },
  { title: "Freelancer", desc: "Showcase your portfolio, list services, manage clients, and get paid seamlessly.", badge: "Fast Setup" },
  { title: "Agency", desc: "Manage multiple client accounts, team workflows, and white-label solutions at scale.", badge: "Enterprise" },
];

const MARKETPLACE_PREVIEW = [
  { type: "Service", title: "Professional Logo Design", price: "$99", rating: 4.9, reviews: 312, seller: "CreativeStudio" },
  { type: "Product", title: "Business Analytics Dashboard", price: "$49/mo", rating: 4.8, reviews: 189, seller: "DataViz Pro" },
  { type: "Job", title: "Senior React Developer", price: "$120k-150k", rating: 4.7, reviews: 45, seller: "TechCorp" },
];

const TESTIMONIALS = [
  { name: "Sarah Chen", role: "CEO, Bloom Digital", text: "BizOS transformed how we manage our agency. The AI tools alone saved us 20 hours per week.", avatar: "SC" },
  { name: "James Murray", role: "Founder, Murray Plumbing", text: "From zero online presence to fully booked in 3 months. The website builder and CRM are game-changers.", avatar: "JM" },
  { name: "Priya Patel", role: "Freelance Designer", text: "I manage all my clients, invoices, and portfolio in one place. It's the only tool I need.", avatar: "PP" },
];

const PRICING_PREVIEW = [
  { plan: "Free", price: "$0", period: "/mo", features: ["1 Website", "Basic CRM", "5 Products", "Community Support"], cta: "Get Started", popular: false },
  { plan: "Pro", price: "$29", period: "/mo", features: ["Unlimited Websites", "Advanced CRM", "Unlimited Products", "AI Tools", "Priority Support"], cta: "Start Free Trial", popular: true },
  { plan: "Enterprise", price: "$99", period: "/mo", features: ["Everything in Pro", "White Label", "API Access", "Dedicated Manager", "Custom Integrations"], cta: "Contact Sales", popular: false },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* Hero */}
      <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto animate-[fadeInUp_0.7s_ease-out]">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-xs font-medium">
            <Sparkles className="h-3 w-3 mr-1.5" /> AI-Powered Trading Hub
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
            The Operating System <br className="hidden sm:block" />
            for <span className="gradient-text">Modern Business</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Create websites, manage products & services, find customers, and grow your business — all powered by AI, all from one platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button size="lg" className="gradient-primary text-primary-foreground h-12 px-8 text-base" onClick={() => navigate("/dashboard")}>
              Start Free Trial <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base">
              <Play className="h-4 w-4 mr-2" /> Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Trusted / Stats */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">Trusted by thousands of businesses worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold gradient-text">{s.value}</div>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Everything You Need to <span className="gradient-text">Succeed</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">One platform, every tool. Build, sell, manage, and grow without switching apps.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="group border-border/50 hover:shadow-elevated transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="h-11 w-11 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="secondary" className="mb-4 px-3 py-1 text-xs"><Bot className="h-3 w-3 mr-1" /> AI-Powered</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Supercharged with <span className="gradient-text">Artificial Intelligence</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Let AI handle the heavy lifting while you focus on what matters most.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {AI_FEATURES.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-border/50 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6 flex gap-4">
                  <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Built for <span className="gradient-text">Every Business</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Whether you're a solo freelancer or a growing agency, BizOS scales with you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {USE_CASES.map((uc) => (
              <Card key={uc.title} className="border-border/50 hover:shadow-elevated transition-all duration-300 relative overflow-hidden">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-4 text-xs">{uc.badge}</Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{uc.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.desc}</p>
                  <Button variant="ghost" size="sm" className="text-primary p-0 h-auto hover:bg-transparent">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Explore the <span className="gradient-text">Marketplace</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Services, products, and jobs — all in one thriving ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {MARKETPLACE_PREVIEW.map((item) => (
              <Card key={item.title} className="border-border/50 hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">{item.type}</Badge>
                    <span className="text-lg font-bold gradient-text">{item.price}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Star className="h-3.5 w-3.5 text-warning fill-warning" />
                    <span>{item.rating} ({item.reviews} reviews)</span>
                  </div>
                  <p className="text-xs text-muted-foreground">by {item.seller}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" onClick={() => navigate("/wholesale")}>
              Browse All <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Loved by <span className="gradient-text">Thousands</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">See what our customers have to say about BizOS.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <Card key={t.name} className="border-border/50">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary/20 mb-3" />
                  <p className="text-sm text-foreground/80 leading-relaxed mb-5">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">{t.avatar}</div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Simple, Transparent <span className="gradient-text">Pricing</span></h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Start free. Upgrade when you're ready.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRICING_PREVIEW.map((p) => (
              <Card key={p.plan} className={`border-border/50 relative ${p.popular ? "ring-2 ring-primary shadow-elevated" : ""}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="gradient-primary text-primary-foreground border-0 px-3">Most Popular</Badge>
                  </div>
                )}
                <CardContent className="p-6 pt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{p.plan}</h3>
                  <div className="mb-5">
                    <span className="text-3xl font-extrabold text-foreground">{p.price}</span>
                    <span className="text-muted-foreground text-sm">{p.period}</span>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${p.popular ? "gradient-primary text-primary-foreground" : ""}`} variant={p.popular ? "default" : "outline"}>
                    {p.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Transform Your <span className="gradient-text">Business</span>?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Join 12,000+ businesses already using BizOS. Start free — no credit card required.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button size="lg" className="gradient-primary text-primary-foreground h-12 px-8 text-base" onClick={() => navigate("/dashboard")}>
              Start Free Trial <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base" onClick={() => navigate("/pricing")}>
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Business Search */}
      <div id="search">
        <BusinessSearchSection />
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">B</span>
              </div>
              <span className="text-lg font-bold text-foreground">BizOS</span>
            </div>
            <p className="text-sm text-muted-foreground">The all-in-one platform for modern business.</p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Marketplace", "API"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-foreground text-sm mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © 2026 BizOS. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
