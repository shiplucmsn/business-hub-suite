import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, Star, Clock, ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PublicNavbar } from "@/components/PublicNavbar";

const CATEGORIES = ["All", "Design", "Development", "Marketing", "Writing", "Video", "Business", "Data", "AI & ML"];

const SERVICES = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: ["Logo Design", "Web Development", "SEO Audit", "Content Writing", "Video Editing", "Social Media Management", "App Development", "Data Analysis", "AI Chatbot Setup", "Brand Strategy", "UI/UX Design", "Email Marketing"][i % 12],
  seller: ["CreativeStudio", "DevPro", "GrowthLab", "WriteWell", "MediaCraft", "SocialBuzz", "AppForge", "DataViz", "AIFactory", "BrandCo", "PixelPerfect", "MailChimp"][i % 12],
  price: [99, 249, 149, 79, 199, 129, 499, 179, 299, 159, 189, 89][i % 12],
  rating: [4.9, 4.8, 4.7, 4.9, 4.6, 4.8, 4.9, 4.7, 4.8, 4.6, 4.9, 4.7][i % 12],
  reviews: [312, 189, 245, 156, 98, 278, 134, 201, 87, 167, 223, 145][i % 12],
  delivery: ["3 days", "7 days", "5 days", "2 days", "4 days", "3 days", "14 days", "5 days", "7 days", "10 days", "5 days", "3 days"][i % 12],
  category: CATEGORIES[1 + (i % 8)],
  featured: i < 3,
}));

const ITEMS_PER_PAGE = 9;

const ServicesMarketplace = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);

  const filtered = SERVICES.filter(s =>
    (category === "All" || s.category === category) &&
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-low") return a.price - b.price;
    if (sort === "price-high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return b.reviews - a.reviews;
  });

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const paged = sorted.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Services <span className="gradient-text">Marketplace</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Find expert services for every business need</p>
          </motion.div>

          {/* Search & Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search services..." className="pl-10 h-11" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
            </div>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-full sm:w-48 h-11">
                <ArrowUpDown className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low → High</SelectItem>
                <SelectItem value="price-high">Price: High → Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map(c => (
              <Button key={c} variant={category === c ? "default" : "outline"} size="sm" className={category === c ? "gradient-primary text-primary-foreground" : ""} onClick={() => { setCategory(c); setPage(1); }}>
                {c}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paged.map((s, i) => (
              <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Card className="border-border/50 hover:shadow-elevated transition-all duration-300 cursor-pointer group" onClick={() => navigate(`/service/${s.id}`)}>
                  <div className="h-40 gradient-primary opacity-80 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                    <span className="text-4xl font-bold text-white/20">{s.title.charAt(0)}</span>
                    {s.featured && <Badge className="absolute top-3 left-3 bg-warning text-warning-foreground border-0">Featured</Badge>}
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">{s.category}</Badge>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                        <span className="font-medium text-foreground">{s.rating}</span>
                        <span className="text-muted-foreground">({s.reviews})</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-xs text-muted-foreground mb-3">by {s.seller}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" /> {s.delivery}
                      </div>
                      <span className="text-lg font-bold gradient-text">${s.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button variant="outline" size="icon" disabled={page === 1} onClick={() => setPage(p => p - 1)}><ChevronLeft className="h-4 w-4" /></Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button key={i} variant={page === i + 1 ? "default" : "outline"} size="sm" className={page === i + 1 ? "gradient-primary text-primary-foreground" : ""} onClick={() => setPage(i + 1)}>{i + 1}</Button>
              ))}
              <Button variant="outline" size="icon" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}><ChevronRight className="h-4 w-4" /></Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicesMarketplace;
