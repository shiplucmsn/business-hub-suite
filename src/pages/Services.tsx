import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const services = [
  { title: "Full Website Development", category: "Web Dev", price: "From $2,999", rating: 4.9, reviews: 128, delivery: "14 days", tiers: ["Basic", "Standard", "Premium"] },
  { title: "SEO Optimization Package", category: "Marketing", price: "From $499", rating: 4.7, reviews: 89, delivery: "7 days", tiers: ["Starter", "Growth", "Enterprise"] },
  { title: "Brand Identity Design", category: "Design", price: "From $799", rating: 4.8, reviews: 64, delivery: "10 days", tiers: ["Logo Only", "Full Brand", "Complete"] },
  { title: "Social Media Management", category: "Marketing", price: "From $399/mo", rating: 4.6, reviews: 42, delivery: "Ongoing", tiers: ["Basic", "Pro", "Agency"] },
  { title: "Mobile App Development", category: "Development", price: "From $5,999", rating: 4.9, reviews: 35, delivery: "30 days", tiers: ["MVP", "Standard", "Premium"] },
  { title: "Content Writing", category: "Content", price: "From $149", rating: 4.5, reviews: 156, delivery: "3 days", tiers: ["Article", "Blog Pack", "Full Content"] },
];

export default function Services() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Services</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage your service listings</p>
          </div>
          <Button className="gradient-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" /> New Service
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="shadow-card border-border/50 hover:shadow-elevated transition-shadow cursor-pointer group">
              <div className="h-32 gradient-primary opacity-70 group-hover:opacity-80 transition-opacity rounded-t-lg" />
              <CardContent className="p-4">
                <Badge variant="secondary" className="text-xs mb-2">{s.category}</Badge>
                <h3 className="font-semibold text-sm">{s.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-0.5"><Star className="h-3 w-3 text-warning fill-warning" /> {s.rating}</span>
                  <span>({s.reviews})</span>
                  <span className="flex items-center gap-0.5 ml-auto"><Clock className="h-3 w-3" /> {s.delivery}</span>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                  <span className="text-sm font-bold gradient-text">{s.price}</span>
                  <div className="flex gap-1">
                    {s.tiers.map((t) => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
