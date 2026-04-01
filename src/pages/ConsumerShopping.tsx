import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, ShoppingBag, Heart, Star, Filter, Grid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const PRODUCTS = [
  { id: 1, name: "Wireless Noise-Cancelling Headphones", category: "Electronics", price: "$249.99", originalPrice: "$349.99", rating: 4.8, reviews: 1243, image: "🎧", badge: "Best Seller" },
  { id: 2, name: "Organic Skincare Gift Set", category: "Beauty", price: "$89.99", originalPrice: "$119.99", rating: 4.7, reviews: 856, image: "🧴", badge: "New" },
  { id: 3, name: "Premium Yoga Mat - Eco Friendly", category: "Sports", price: "$59.99", originalPrice: null, rating: 4.6, reviews: 432, image: "🧘", badge: null },
  { id: 4, name: "Smart Home Security Camera", category: "Electronics", price: "$129.99", originalPrice: "$179.99", rating: 4.5, reviews: 678, image: "📷", badge: "Sale" },
  { id: 5, name: "Artisan Coffee Blend - 1kg", category: "Food", price: "$34.99", originalPrice: null, rating: 4.9, reviews: 2341, image: "☕", badge: "Top Rated" },
  { id: 6, name: "Linen Throw Blanket", category: "Home", price: "$79.99", originalPrice: "$99.99", rating: 4.4, reviews: 312, image: "🛋️", badge: null },
  { id: 7, name: "Running Shoes - UltraBoost", category: "Sports", price: "$189.99", originalPrice: "$219.99", rating: 4.7, reviews: 1567, image: "👟", badge: "Popular" },
  { id: 8, name: "Portable Bluetooth Speaker", category: "Electronics", price: "$69.99", originalPrice: null, rating: 4.6, reviews: 945, image: "🔊", badge: null },
  { id: 9, name: "Natural Scented Candle Set", category: "Home", price: "$44.99", originalPrice: "$54.99", rating: 4.3, reviews: 234, image: "🕯️", badge: "New" },
  { id: 10, name: "Fitness Tracker Watch", category: "Electronics", price: "$149.99", originalPrice: "$199.99", rating: 4.8, reviews: 2100, image: "⌚", badge: "Sale" },
  { id: 11, name: "Organic Green Tea - 100 Bags", category: "Food", price: "$24.99", originalPrice: null, rating: 4.5, reviews: 567, image: "🍵", badge: null },
  { id: 12, name: "Luxury Bath Towel Set", category: "Home", price: "$64.99", originalPrice: "$84.99", rating: 4.6, reviews: 389, image: "🛁", badge: null },
];

const CATEGORIES = ["All", "Electronics", "Beauty", "Sports", "Food", "Home"];

const badgeColors: Record<string, string> = {
  "Best Seller": "bg-success/10 text-success",
  "New": "bg-info/10 text-info",
  "Sale": "bg-destructive/10 text-destructive",
  "Top Rated": "bg-warning/10 text-warning",
  "Popular": "bg-accent/10 text-accent",
};

export default function ConsumerShopping() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFav = (id: number) => setFavorites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]);

  const filtered = PRODUCTS.filter((p) => {
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/")} className="mr-1">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:inline">BizOS</span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="relative">
              <Heart className="h-4 w-4 mr-1" /> <span className="hidden sm:inline">Wishlist</span>
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full gradient-primary flex items-center justify-center text-[10px] font-bold text-primary-foreground">
                  {favorites.length}
                </span>
              )}
            </Button>
            <Button size="sm" className="gradient-primary text-primary-foreground">
              <ShoppingBag className="h-4 w-4 mr-1" /> <span className="hidden sm:inline">Cart</span>
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl gradient-primary mb-4">
            <ShoppingBag className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Consumer <span className="gradient-text">Shopping</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Discover amazing products from trusted sellers
          </p>
        </div>

        {/* Search */}
        <div className="bg-card rounded-2xl shadow-elevated p-4 sm:p-6 mb-8 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative sm:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
            </div>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> products
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {filtered.map((product) => (
            <Card key={product.id} className="shadow-card hover:shadow-elevated transition-all duration-300 group relative">
              <button
                className="absolute top-3 right-3 z-10 h-8 w-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center border border-border hover:bg-card transition-colors"
                onClick={() => toggleFav(product.id)}
              >
                <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-destructive text-destructive" : "text-muted-foreground"}`} />
              </button>
              <CardContent className="p-3 sm:p-4 space-y-2">
                <div className="h-20 sm:h-28 rounded-lg bg-secondary flex items-center justify-center text-3xl sm:text-4xl">
                  {product.image}
                </div>
                {product.badge && (
                  <Badge className={`text-[10px] sm:text-xs ${badgeColors[product.badge] || "bg-secondary text-secondary-foreground"}`} variant="outline">
                    {product.badge}
                  </Badge>
                )}
                <h3 className="text-xs sm:text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 text-warning fill-warning" />
                  <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-base sm:text-lg font-bold text-foreground">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
                <Button size="sm" className="w-full gradient-primary text-primary-foreground text-xs sm:text-sm">
                  <ShoppingBag className="h-3.5 w-3.5 mr-1" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <ShoppingBag className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-1">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
