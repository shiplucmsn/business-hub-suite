import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search, ShoppingCart, Package, Truck, Shield, Star, Filter, ChevronLeft, ChevronRight } from "lucide-react";
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
  { id: 1, name: "Industrial Steel Beams - Bulk Pack", category: "Construction", price: "$12,500", minOrder: "50 units", rating: 4.9, reviews: 87, image: "🏗️", supplier: "SteelCorp Australia", location: "Sydney, NSW" },
  { id: 2, name: "Organic Cotton Fabric Roll - 500m", category: "Textiles", price: "$3,200", minOrder: "10 rolls", rating: 4.7, reviews: 134, image: "🧶", supplier: "GreenThread Co", location: "Melbourne, VIC" },
  { id: 3, name: "Commercial Grade Coffee Beans - 50kg", category: "Food & Beverage", price: "$890", minOrder: "20 bags", rating: 4.8, reviews: 256, image: "☕", supplier: "Brisbane Roasters", location: "Brisbane, QLD" },
  { id: 4, name: "LED Panel Lights - Box of 100", category: "Electronics", price: "$2,400", minOrder: "5 boxes", rating: 4.6, reviews: 98, image: "💡", supplier: "BrightTech Solutions", location: "Perth, WA" },
  { id: 5, name: "Recycled Cardboard Boxes - 1000pc", category: "Packaging", price: "$650", minOrder: "1000 pcs", rating: 4.5, reviews: 67, image: "📦", supplier: "EcoPack Australia", location: "Adelaide, SA" },
  { id: 6, name: "Stainless Steel Fasteners - Bulk", category: "Hardware", price: "$1,800", minOrder: "100 sets", rating: 4.8, reviews: 142, image: "🔩", supplier: "FastenPro", location: "Gold Coast, QLD" },
  { id: 7, name: "Premium Timber Planks - Bundle", category: "Construction", price: "$5,600", minOrder: "20 bundles", rating: 4.7, reviews: 73, image: "🪵", supplier: "AusTimber Mills", location: "Hobart, TAS" },
  { id: 8, name: "Food Grade Plastic Containers - 500pc", category: "Packaging", price: "$1,100", minOrder: "500 pcs", rating: 4.4, reviews: 89, image: "🥡", supplier: "PackRight Industries", location: "Darwin, NT" },
];

const CATEGORIES = ["All", "Construction", "Textiles", "Food & Beverage", "Electronics", "Packaging", "Hardware"];

export default function Wholesale() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = PRODUCTS.filter((p) => {
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.supplier.toLowerCase().includes(search.toLowerCase());
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
            <Button size="sm" className="gradient-primary text-primary-foreground" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Hero */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl gradient-primary mb-4">
            <Package className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            <span className="gradient-text">Wholesale</span> Marketplace
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Buy in bulk directly from verified suppliers at competitive prices
          </p>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {[
            { icon: Shield, label: "Verified Suppliers" },
            { icon: Truck, label: "Fast Delivery" },
            { icon: Package, label: "Bulk Pricing" },
            { icon: Star, label: "Quality Assured" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 bg-card border border-border rounded-lg p-3 text-sm">
              <Icon className="h-4 w-4 text-primary shrink-0" />
              <span className="text-foreground font-medium text-xs sm:text-sm">{label}</span>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="bg-card rounded-2xl shadow-elevated p-4 sm:p-6 mb-8 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative sm:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products or suppliers..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((product) => (
            <Card key={product.id} className="shadow-card hover:shadow-elevated transition-all duration-300 group">
              <CardContent className="p-5 space-y-3">
                <div className="h-16 w-16 rounded-xl bg-secondary flex items-center justify-center text-3xl mx-auto">
                  {product.image}
                </div>
                <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                <h3 className="text-sm font-semibold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-muted-foreground">{product.supplier} • {product.location}</p>
                <div className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-warning fill-warning" />
                  <span className="text-xs text-muted-foreground">{product.rating} ({product.reviews})</span>
                </div>
                <div className="flex items-end justify-between pt-1">
                  <div>
                    <p className="text-lg font-bold text-foreground">{product.price}</p>
                    <p className="text-xs text-muted-foreground">Min: {product.minOrder}</p>
                  </div>
                  <Button size="sm" className="gradient-primary text-primary-foreground">
                    <ShoppingCart className="h-3.5 w-3.5 mr-1" /> Inquire
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <Package className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-1">No products found</h3>
            <p className="text-muted-foreground">Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
