import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail, Globe, Star, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const BUSINESSES = [
  { id: 1, name: "Sydney Furniture Removalists", category: "Removalists", location: "Sydney", state: "New South Wales", rating: 4.8, reviews: 124, phone: "+61 2 9876 5432", email: "info@sydneyremovals.com.au", website: "sydneyremovals.com.au", mapQuery: "Sydney+Furniture+Removalists+Sydney+NSW", hours: "Mon-Sat 7am-6pm", description: "Sydney's most trusted furniture removalists with over 15 years of experience. We provide careful, efficient moving services for homes and offices across the Greater Sydney area.", services: ["Home Removals", "Office Relocations", "Packing Services", "Storage Solutions", "Interstate Moving", "Furniture Assembly"] },
  { id: 2, name: "Melbourne Express Movers", category: "Removalists", location: "Melbourne", state: "Victoria", rating: 4.6, reviews: 89, phone: "+61 3 9123 4567", email: "hello@melbournemovers.com.au", website: "melbournemovers.com.au", mapQuery: "Melbourne+Express+Movers+Melbourne+VIC", hours: "Mon-Sun 6am-8pm", description: "Fast and reliable moving services across Melbourne and regional Victoria.", services: ["Residential Moving", "Commercial Relocations", "Packing & Unpacking", "Furniture Disposal"] },
  { id: 3, name: "Brisbane Quick Removals", category: "Removalists", location: "Brisbane", state: "Queensland", rating: 4.7, reviews: 56, phone: "+61 7 3456 7890", email: "contact@brisbaneqr.com.au", website: "brisbaneqr.com.au", mapQuery: "Brisbane+Quick+Removals+Brisbane+QLD", hours: "Mon-Fri 7am-5pm", description: "Affordable and quick removal services in Brisbane.", services: ["Local Moves", "Long Distance", "Packing"] },
  { id: 4, name: "Perth Pro Plumbing", category: "Plumbers", location: "Perth", state: "Western Australia", rating: 4.9, reviews: 203, phone: "+61 8 6123 4567", email: "service@perthplumbing.com.au", website: "perthplumbing.com.au", mapQuery: "Perth+Pro+Plumbing+Perth+WA", hours: "24/7 Emergency", description: "Perth's highest-rated plumbing service. Available 24/7 for emergencies.", services: ["Emergency Plumbing", "Hot Water Systems", "Drain Cleaning", "Gas Fitting", "Bathroom Renovations", "Leak Detection"] },
  { id: 5, name: "Adelaide Spark Electricians", category: "Electricians", location: "Adelaide", state: "South Australia", rating: 4.5, reviews: 78, phone: "+61 8 8234 5678", email: "jobs@adelaidespark.com.au", website: "adelaidespark.com.au", mapQuery: "Adelaide+Electricians+Adelaide+SA", hours: "Mon-Fri 8am-5pm", description: "Licensed electricians serving Adelaide and surrounds.", services: ["Electrical Repairs", "Rewiring", "Safety Inspections", "Solar Installation"] },
  { id: 6, name: "Gold Coast Clean Co", category: "Cleaning Services", location: "Gold Coast", state: "Queensland", rating: 4.4, reviews: 45, phone: "+61 7 5567 8901", email: "book@gcclean.com.au", website: "gcclean.com.au", mapQuery: "Gold+Coast+Cleaning+Services+Gold+Coast+QLD", hours: "Mon-Sat 6am-6pm", description: "Professional cleaning for homes and businesses on the Gold Coast.", services: ["Home Cleaning", "Office Cleaning", "End of Lease", "Carpet Cleaning"] },
];

const REVIEWS = [
  { name: "Sarah M.", rating: 5, date: "2 weeks ago", text: "Absolutely fantastic service! The team was professional, on time, and handled our furniture with great care." },
  { name: "David L.", rating: 4, date: "1 month ago", text: "Good overall experience. Communication could have been slightly better but the work itself was excellent." },
  { name: "Emma K.", rating: 5, date: "2 months ago", text: "Highly recommend! Best service provider in the area. Will definitely use again." },
];

export default function BusinessDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const business = BUSINESSES.find((b) => b.id === Number(id));
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  if (!business) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Business not found</h1>
          <Button onClick={() => navigate("/")} variant="outline">Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top Bar */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-14">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back
          </Button>
          <span className="font-semibold text-foreground truncate">{business.name}</span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Map */}
            <Card className="overflow-hidden shadow-card border-border/50">
              <div className="h-64 sm:h-80 w-full">
                <iframe title={`Map for ${business.name}`} width="100%" height="100%" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${business.mapQuery}`} allowFullScreen />
              </div>
            </Card>

            {/* Info */}
            <Card className="shadow-card border-border/50">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">{business.category}</Badge>
                <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{business.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {business.state}</span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {business.hours}</span>
                  <span className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-warning" /> {business.rating} ({business.reviews} reviews)
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed">{business.description}</p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="shadow-card border-border/50">
              <CardHeader><CardTitle className="text-lg">Services</CardTitle></CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {business.services.map((s) => (
                    <div key={s} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50">
                      <div className="h-2 w-2 rounded-full gradient-primary" />
                      <span className="text-sm text-foreground">{s}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card className="shadow-card border-border/50">
              <CardHeader><CardTitle className="text-lg">Reviews</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {REVIEWS.map((r, i) => (
                  <div key={i} className="border-b border-border/50 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-foreground">{r.name[0]}</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{r.name}</p>
                          <p className="text-xs text-muted-foreground">{r.date}</p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, j) => (
                          <Star key={j} className={`h-3.5 w-3.5 ${j < r.rating ? "text-warning fill-warning" : "text-muted"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-foreground/80">{r.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="shadow-card border-border/50">
              <CardHeader><CardTitle className="text-lg">Contact</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <a href={`tel:${business.phone}`} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{business.phone}</span>
                </a>
                <a href={`mailto:${business.email}`} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground truncate">{business.email}</span>
                </a>
                <a href={`https://${business.website}`} target="_blank" rel="noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">{business.website}</span>
                </a>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="shadow-card border-border/50">
              <CardHeader><CardTitle className="text-lg">Send a Message</CardTitle></CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Your name" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} />
                <Input placeholder="Your email" type="email" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} />
                <Textarea placeholder="Your message..." rows={4} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} />
                <Button className="w-full gradient-primary text-primary-foreground">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
