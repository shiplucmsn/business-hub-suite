import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, ShoppingCart, CheckCircle2, ArrowLeft, Heart, Share2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PublicNavbar } from "@/components/PublicNavbar";

const IMAGES_PLACEHOLDER = ["Main View", "Dashboard", "Settings", "Mobile View"];

const REVIEWS = [
  { name: "Alex M.", rating: 5, text: "Incredible product! Saved me weeks of development time.", date: "1 day ago" },
  { name: "Sarah L.", rating: 4, text: "Great value for money. Documentation could be better.", date: "5 days ago" },
  { name: "James W.", rating: 5, text: "Perfect for our team. Easy to customize and deploy.", date: "1 week ago" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Image Gallery */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="h-72 sm:h-96 gradient-primary rounded-2xl flex items-center justify-center mb-4">
              <span className="text-5xl font-bold text-white/20">Product #{id}</span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {IMAGES_PLACEHOLDER.map((img, i) => (
                <div key={i} className="h-20 gradient-primary opacity-60 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
                  <span className="text-xs text-white/50">{img}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-5">
            <div>
              <Badge variant="secondary" className="mb-3">Software</Badge>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Analytics Dashboard Pro</h1>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" /><span className="font-medium text-foreground">4.8</span>(189 reviews)</div>
                <span>·</span>
                <span>1,200 sales</span>
              </div>
            </div>

            <div className="text-3xl font-bold gradient-text">$49</div>

            <p className="text-muted-foreground leading-relaxed">
              A comprehensive analytics dashboard with 50+ pre-built components, dark mode support, and real-time data visualization. Built with React and Tailwind CSS.
            </p>

            <ul className="space-y-2">
              {["React 18 + TypeScript", "50+ Dashboard Components", "Dark & Light Mode", "Real-time Charts", "Responsive Design", "Lifetime Updates"].map(f => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <Button className="flex-1 h-12 gradient-primary text-primary-foreground">
                <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12"><Heart className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon" className="h-12 w-12"><Share2 className="h-4 w-4" /></Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-4 w-4 text-primary" />
              <span>30-day money-back guarantee · Secure checkout · Instant download</span>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="description">
          <TabsList>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({REVIEWS.length})</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="mt-4">
            <Card className="border-border/50"><CardContent className="p-6 prose prose-sm max-w-none text-muted-foreground">
              <p>Analytics Dashboard Pro is the ultimate toolkit for building data-driven applications. With over 50 pre-built components, you can create stunning dashboards in minutes.</p>
              <p>Includes chart components, data tables, KPI cards, filter panels, and more — all fully responsive and customizable.</p>
            </CardContent></Card>
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
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;
