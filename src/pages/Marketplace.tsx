import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Filter, Star, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const listings = [
  { title: "Professional Logo Design", seller: "CreativeHub", price: "From $49", rating: 4.9, reviews: 2340, category: "Design", location: "Remote" },
  { title: "WordPress Website Development", seller: "WebPro Agency", price: "From $299", rating: 4.8, reviews: 1256, category: "Web Dev", location: "USA" },
  { title: "Social Media Marketing", seller: "GrowthLab", price: "From $199/mo", rating: 4.7, reviews: 890, category: "Marketing", location: "Remote" },
  { title: "Video Editing & Production", seller: "MediaCraft", price: "From $79", rating: 4.6, reviews: 567, category: "Video", location: "UK" },
  { title: "SEO Audit & Strategy", seller: "RankMasters", price: "From $149", rating: 4.8, reviews: 432, category: "SEO", location: "Remote" },
  { title: "Mobile App UI Design", seller: "AppDesignCo", price: "From $399", rating: 4.9, reviews: 678, category: "Design", location: "Canada" },
];

export default function Marketplace() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Marketplace</h1>
          <p className="text-muted-foreground text-sm mt-1">Discover services and products</p>
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search the marketplace..." className="pl-10 bg-card border-border" />
          </div>
          <Button variant="outline"><Filter className="h-4 w-4 mr-2" /> Filters</Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {["All", "Design", "Web Dev", "Marketing", "SEO", "Video", "Writing"].map((cat) => (
            <Button key={cat} variant={cat === "All" ? "default" : "outline"} size="sm" className={cat === "All" ? "gradient-primary text-primary-foreground" : ""}>
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((l) => (
            <Card key={l.title} className="shadow-card border-border/50 hover:shadow-elevated transition-shadow cursor-pointer">
              <div className="h-36 gradient-primary opacity-60 rounded-t-lg" />
              <CardContent className="p-4">
                <Badge variant="secondary" className="text-xs mb-2">{l.category}</Badge>
                <h3 className="font-semibold text-sm">{l.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">by {l.seller}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <Star className="h-3 w-3 text-warning fill-warning" />
                  <span>{l.rating} ({l.reviews})</span>
                  <span className="ml-auto flex items-center gap-1"><MapPin className="h-3 w-3" /> {l.location}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-border/50">
                  <span className="text-sm font-bold gradient-text">{l.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
