import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, CheckCircle2, MessageSquare, ShieldCheck, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PublicNavbar } from "@/components/PublicNavbar";

const PACKAGES = [
  { name: "Basic", price: 99, delivery: "3 days", revisions: 1, features: ["1 Concept", "Source file", "3-day delivery"] },
  { name: "Standard", price: 199, delivery: "5 days", revisions: 3, features: ["3 Concepts", "Source file", "Social media kit", "5-day delivery"], popular: true },
  { name: "Premium", price: 399, delivery: "7 days", revisions: "Unlimited", features: ["5 Concepts", "Source file", "Full brand kit", "Social media kit", "Stationery design", "7-day delivery"] },
];

const REVIEWS = [
  { name: "Emily R.", rating: 5, text: "Absolutely stunning work! Delivered ahead of schedule and exceeded all expectations.", date: "2 days ago" },
  { name: "Marcus T.", rating: 5, text: "Professional, creative, and super responsive. Will definitely order again.", date: "1 week ago" },
  { name: "Lisa K.", rating: 4, text: "Great design quality. Minor revision needed but handled quickly.", date: "2 weeks ago" },
  { name: "David P.", rating: 5, text: "Best service on the platform. Highly recommend to anyone needing design work.", date: "3 weeks ago" },
];

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to services
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Details */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 space-y-6">
            <div className="h-64 sm:h-80 gradient-primary rounded-2xl flex items-center justify-center">
              <span className="text-6xl font-bold text-white/20">Service #{id}</span>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary">Design</Badge>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium">4.9</span>
                  <span className="text-muted-foreground">(312 reviews)</span>
                </div>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Professional Logo & Brand Identity Design</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 3-7 day delivery</span>
                <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4" /> Money-back guarantee</span>
              </div>
            </div>

            <Tabs defaultValue="description">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="seller">About Seller</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-4 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Get a unique, professional logo design that perfectly represents your brand. Our expert designers create custom logos tailored to your business identity, ensuring your brand stands out in the competitive marketplace.
                </p>
                <h3 className="font-semibold text-foreground">What's included:</h3>
                <ul className="space-y-2">
                  {["Custom logo concepts", "Unlimited revisions (Premium)", "High-res files (PNG, SVG, PDF)", "Full brand guidelines", "Social media kit"].map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4 space-y-4">
                {REVIEWS.map((r, i) => (
                  <Card key={i} className="border-border/50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xs font-bold">{r.name.charAt(0)}</div>
                          <span className="font-medium text-foreground text-sm">{r.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{r.date}</span>
                      </div>
                      <div className="flex gap-0.5 mb-2">{Array.from({ length: r.rating }, (_, i) => <Star key={i} className="h-3.5 w-3.5 fill-warning text-warning" />)}</div>
                      <p className="text-sm text-muted-foreground">{r.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="seller" className="mt-4">
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-14 w-14 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">CS</div>
                      <div>
                        <h3 className="font-semibold text-foreground">CreativeStudio</h3>
                        <p className="text-sm text-muted-foreground">Top Rated Seller · Member since 2021</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div><span className="text-lg font-bold text-foreground">4.9</span><p className="text-xs text-muted-foreground">Rating</p></div>
                      <div><span className="text-lg font-bold text-foreground">312</span><p className="text-xs text-muted-foreground">Reviews</p></div>
                      <div><span className="text-lg font-bold text-foreground">98%</span><p className="text-xs text-muted-foreground">On-time</p></div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Right - Pricing Packages */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
            {PACKAGES.map((pkg) => (
              <Card key={pkg.name} className={`border-border/50 ${pkg.popular ? "ring-2 ring-primary" : ""}`}>
                {pkg.popular && <div className="px-4 pt-3"><Badge className="gradient-primary text-primary-foreground border-0">Best Value</Badge></div>}
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-foreground">{pkg.name}</h3>
                    <span className="text-2xl font-bold gradient-text">${pkg.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{pkg.delivery} delivery · {pkg.revisions} revision{typeof pkg.revisions === "number" && pkg.revisions > 1 ? "s" : ""}</p>
                  <ul className="space-y-2 mb-4">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.popular ? "gradient-primary text-primary-foreground" : ""}`} variant={pkg.popular ? "default" : "outline"}>
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}

            <Card className="border-border/50">
              <CardContent className="p-5 text-center">
                <MessageSquare className="h-8 w-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Custom Order?</h3>
                <p className="text-xs text-muted-foreground mb-3">Contact the seller for a personalized quote</p>
                <Button variant="outline" className="w-full">Contact Seller</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
