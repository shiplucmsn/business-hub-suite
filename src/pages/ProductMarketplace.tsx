import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Star, ShoppingCart, ChevronLeft, ChevronRight, ArrowUpDown, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PublicNavbar } from "@/components/PublicNavbar";

const CATEGORIES = ["All", "Software", "Templates", "Courses", "E-books", "Tools", "Plugins", "Graphics", "Audio"];

const PRODUCTS = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: ["Analytics Dashboard", "React UI Kit", "Marketing Course", "SEO Toolkit", "WordPress Theme", "Icon Pack", "Email Templates", "Copywriting Guide", "CRM Plugin", "Stock Photos Bundle", "Audio Effects Pack", "Landing Page Builder"][i % 12],
  seller: ["DataViz Pro", "UIHub", "GrowthAcademy", "SEOTools", "ThemeForest", "IconLab", "MailCraft", "CopyPro", "AppStore", "PhotoStock", "SoundWave", "PageCraft"][i % 12],
  price: [49, 79, 129, 39, 59, 29, 49, 19, 99, 69, 34, 89][i % 12],
  rating: [4.8, 4.9, 4.7, 4.6, 4.8, 4.9, 4.5, 4.7, 4.8, 4.6, 4.7, 4.9][i % 12],
  reviews: [189, 234, 156, 98, 312, 445, 123, 78, 201, 167, 89, 278][i % 12],
  category: CATEGORIES[1 + (i % 8)],
  sales: [1200, 890, 560, 340, 2100, 3400, 780, 230, 1500, 910, 430, 1800][i % 12],
}));

const ITEMS_PER_PAGE = 12;

const ProductMarketplace = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("popular");
  const [page, setPage] = useState(1);
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered = PRODUCTS.filter(p =>
    (category === "All" || p.category === category) &&
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "price-low") return a.price - b.price;
    if (sort === "price-high") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return b.sales - a.sales;
  });

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const paged = sorted.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Product <span className="gradient-text">Marketplace</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Digital products, templates, tools, and more</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-10 h-11" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
            </div>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="w-full sm:w-48 h-11"><ArrowUpDown className="h-4 w-4 mr-2" /><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low → High</SelectItem>
                <SelectItem value="price-high">Price: High → Low</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-1">
              <Button variant={view === "grid" ? "default" : "outline"} size="icon" onClick={() => setView("grid")}><Grid3X3 className="h-4 w-4" /></Button>
              <Button variant={view === "list" ? "default" : "outline"} size="icon" onClick={() => setView("list")}><List className="h-4 w-4" /></Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map(c => (
              <Button key={c} variant={category === c ? "default" : "outline"} size="sm" className={category === c ? "gradient-primary text-primary-foreground" : ""} onClick={() => { setCategory(c); setPage(1); }}>{c}</Button>
            ))}
          </div>

          <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" : "space-y-4"}>
            {paged.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                <Card className={`border-border/50 hover:shadow-elevated transition-all duration-300 cursor-pointer group ${view === "list" ? "flex flex-row" : ""}`} onClick={() => navigate(`/product/${p.id}`)}>
                  <div className={`gradient-primary opacity-80 flex items-center justify-center ${view === "list" ? "w-32 h-auto rounded-l-lg" : "h-36 rounded-t-lg"}`}>
                    <ShoppingCart className="h-8 w-8 text-white/30" />
                  </div>
                  <CardContent className={`${view === "list" ? "p-4 flex-1" : "p-4"}`}>
                    <Badge variant="secondary" className="text-xs mb-2">{p.category}</Badge>
                    <h3 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">by {p.seller}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-xs">
                        <Star className="h-3 w-3 fill-warning text-warning" />
                        <span className="text-foreground font-medium">{p.rating}</span>
                        <span className="text-muted-foreground">({p.reviews})</span>
                      </div>
                      <span className="font-bold gradient-text">${p.price}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

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

export default ProductMarketplace;
