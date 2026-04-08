import { useParams, useNavigate } from "react-router-dom";
import {
  Star, MapPin, Globe, Users, MessageSquare, Phone, Mail, Clock,
  ShoppingBag, Briefcase, CheckCircle2, ArrowLeft, Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PublicNavbar } from "@/components/PublicNavbar";
import { useState } from "react";

const COMPANY = {
  name: "TechVault Solutions",
  tagline: "Enterprise SaaS & Cloud Solutions",
  industry: "Technology",
  location: "Sydney, NSW, Australia",
  website: "techvault.com.au",
  phone: "+61 2 9876 5432",
  email: "hello@techvault.com.au",
  employees: "50-100",
  founded: "2018",
  rating: 4.9,
  reviews: 312,
  followers: "2.4k",
  about: "TechVault Solutions is a leading enterprise SaaS company based in Sydney. We build cloud-native platforms that help businesses digitize their operations, automate workflows, and scale efficiently. With a team of 80+ engineers and designers, we've served over 500 businesses across Australia and Southeast Asia.",
  tags: ["SaaS", "Cloud Computing", "Digital Transformation", "API Development", "AI/ML"],
};

const SERVICES = [
  { name: "Cloud Migration", price: "From $5,000", desc: "Seamless migration of your infrastructure to AWS/Azure/GCP." },
  { name: "Custom Software", price: "From $15,000", desc: "Bespoke web and mobile applications tailored to your needs." },
  { name: "AI Integration", price: "From $8,000", desc: "Integrate machine learning models into your existing systems." },
  { name: "DevOps Consulting", price: "$200/hr", desc: "CI/CD pipelines, monitoring, and infrastructure automation." },
];

const PRODUCTS = [
  { name: "VaultCRM Pro", price: "$49/mo", desc: "All-in-one customer relationship management platform.", rating: 4.8 },
  { name: "CloudDash Analytics", price: "$29/mo", desc: "Real-time analytics dashboard for cloud infrastructure.", rating: 4.7 },
  { name: "AutoFlow Engine", price: "$99/mo", desc: "Workflow automation engine with visual builder.", rating: 4.9 },
];

const JOBS = [
  { title: "Senior React Developer", type: "Full-time", salary: "$120k-$150k", location: "Sydney / Remote" },
  { title: "DevOps Engineer", type: "Full-time", salary: "$130k-$160k", location: "Sydney" },
  { title: "UI/UX Designer", type: "Contract", salary: "$80/hr", location: "Remote" },
];

const REVIEWS = [
  { name: "Mark Johnson", rating: 5, date: "2 weeks ago", text: "Exceptional service. The cloud migration was seamless and our downtime was minimal. Highly recommend the team." },
  { name: "Lisa Wong", rating: 5, date: "1 month ago", text: "Their custom software development is top-notch. They delivered on time and the quality exceeded our expectations." },
  { name: "David Smith", rating: 4, date: "2 months ago", text: "Great DevOps consulting. Helped us set up a robust CI/CD pipeline. Only minor communication delays." },
];

const CompanyProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* Cover */}
      <div className="relative h-48 sm:h-64 gradient-primary">
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </div>

      {/* Profile Header */}
      <section className="px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            <div className="h-28 w-28 rounded-2xl gradient-primary border-4 border-background flex items-center justify-center shadow-elevated">
              <span className="text-4xl font-bold text-primary-foreground">T</span>
            </div>
            <div className="flex-1 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{COMPANY.name}</h1>
                    <Badge variant="secondary" className="text-xs">✓ Verified</Badge>
                  </div>
                  <p className="text-muted-foreground mt-1">{COMPANY.tagline}</p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{COMPANY.location}</span>
                    <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{COMPANY.followers} followers</span>
                    <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-warning fill-warning" />{COMPANY.rating} ({COMPANY.reviews} reviews)</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><MessageSquare className="h-3.5 w-3.5 mr-1.5" />Message</Button>
                  <Button size="sm" className="gradient-primary text-primary-foreground">Follow</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-3">About</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{COMPANY.about}</p>
                <div className="flex flex-wrap gap-2">
                  {COMPANY.tags.map((t) => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {SERVICES.map((s) => (
                    <div key={s.name} className="p-4 rounded-xl border border-border/50 bg-muted/30 hover:shadow-card transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-foreground text-sm">{s.name}</h3>
                        <span className="text-xs font-semibold gradient-text">{s.price}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Products */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Products</h2>
                <div className="space-y-3">
                  {PRODUCTS.map((p) => (
                    <div key={p.name} className="flex items-center justify-between p-4 rounded-xl border border-border/50 bg-muted/30">
                      <div>
                        <h3 className="font-medium text-foreground text-sm">{p.name}</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                      </div>
                      <div className="text-right shrink-0 ml-4">
                        <span className="text-sm font-semibold gradient-text">{p.price}</span>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star className="h-3 w-3 text-warning fill-warning" />
                          <span className="text-xs text-muted-foreground">{p.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Jobs */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Open Positions</h2>
                <div className="space-y-3">
                  {JOBS.map((j) => (
                    <div key={j.title} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl border border-border/50 bg-muted/30 gap-2">
                      <div>
                        <h3 className="font-medium text-foreground text-sm">{j.title}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{j.type}</Badge>
                          <span className="text-xs text-muted-foreground">{j.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-foreground">{j.salary}</span>
                        <Button size="sm" variant="outline" className="text-xs">Apply</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Reviews</h2>
                <div className="space-y-4">
                  {REVIEWS.map((r, i) => (
                    <div key={i} className="pb-4 border-b border-border/50 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-semibold">{r.name.split(" ").map(n => n[0]).join("")}</div>
                          <div>
                            <p className="text-sm font-medium text-foreground">{r.name}</p>
                            <p className="text-xs text-muted-foreground">{r.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className={`h-3 w-3 ${j < r.rating ? "text-warning fill-warning" : "text-muted"}`} />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{r.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Contact Info</h2>
                <div className="space-y-3">
                  {[
                    { icon: Globe, label: COMPANY.website },
                    { icon: Phone, label: COMPANY.phone },
                    { icon: Mail, label: COMPANY.email },
                    { icon: MapPin, label: COMPANY.location },
                    { icon: Users, label: `${COMPANY.employees} employees` },
                    { icon: Clock, label: `Founded ${COMPANY.founded}` },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Icon className="h-4 w-4 text-primary/60 shrink-0" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Quick Stats</h2>
                <div className="space-y-3">
                  {[
                    { label: "Services", value: SERVICES.length },
                    { label: "Products", value: PRODUCTS.length },
                    { label: "Open Positions", value: JOBS.length },
                    { label: "Response Rate", value: "98%" },
                  ].map((s) => (
                    <div key={s.label} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="font-semibold text-foreground">{s.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h2 className="text-lg font-semibold text-foreground mb-4">Send a Message</h2>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="flex h-10 w-full rounded-xl border border-input bg-secondary/50 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="flex h-10 w-full rounded-xl border border-input bg-secondary/50 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                  <textarea
                    placeholder="Your message..."
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="flex w-full rounded-xl border border-input bg-secondary/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                  />
                  <Button className="w-full gradient-primary text-primary-foreground">
                    <Send className="h-4 w-4 mr-2" /> Send Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4 text-center text-sm text-muted-foreground">
        © 2026 TradingHub. All rights reserved.
      </footer>
    </div>
  );
};

export default CompanyProfile;
