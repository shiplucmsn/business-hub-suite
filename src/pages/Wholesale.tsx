import { useState } from "react";
import { Search, ShoppingCart, Package, Truck, Shield, Star, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PublicNavbar } from "@/components/PublicNavbar";
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
  { id: 9, name: "Copper Wire Spools - Industrial", category: "Electronics", price: "$4,200", minOrder: "25 spools", rating: 4.6, reviews: 54, image: "🔌", supplier: "CopperTech Supplies", location: "Wollongong, NSW" },
  { id: 10, name: "Organic Wheat Flour - 100kg Bags", category: "Food & Beverage", price: "$520", minOrder: "50 bags", rating: 4.9, reviews: 178, image: "🌾", supplier: "AusGrain Wholesale", location: "Toowoomba, QLD" },
  { id: 11, name: "Safety Helmets - Carton of 50", category: "Hardware", price: "$975", minOrder: "10 cartons", rating: 4.5, reviews: 62, image: "⛑️", supplier: "SafetyFirst AU", location: "Geelong, VIC" },
  { id: 12, name: "Silk Fabric Premium - 200m Rolls", category: "Textiles", price: "$6,800", minOrder: "5 rolls", rating: 4.8, reviews: 41, image: "🎀", supplier: "LuxFabrics Co", location: "Surry Hills, NSW" },
  { id: 13, name: "Concrete Mix - 2 Tonne Bags", category: "Construction", price: "$380", minOrder: "100 bags", rating: 4.3, reviews: 95, image: "🧱", supplier: "BuildMate Supplies", location: "Penrith, NSW" },
  { id: 14, name: "Biodegradable Cups - 5000pc", category: "Packaging", price: "$1,450", minOrder: "5000 pcs", rating: 4.7, reviews: 112, image: "🥤", supplier: "GreenPack Solutions", location: "Cairns, QLD" },
];

const CATEGORIES = ["All", "Construction", "Textiles", "Food & Beverage", "Electronics", "Packaging", "Hardware"];
const ITEMS_PER_PAGE = 8;

export default function Wholesale() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = PRODUCTS.filter((p) => {
    const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.supplier.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || p.category === category;
    return matchSearch && matchCat;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
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

        <div className="bg-card rounded-2xl shadow-elevated p-4 sm:p-6 mb-8 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative sm:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products or suppliers..." value={search} onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} className="pl-10" />
            </div>
            <Select value={category} onValueChange={(v) => { setCategory(v); setCurrentPage(1); }}>
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
          {paginated.map((product) => (
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

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <Button variant="outline" size="sm" disabled={currentPage === 1} onClick={() => setCurrentPage((p) => p - 1)}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button key={page} variant={currentPage === page ? "default" : "outline"} size="sm" className={currentPage === page ? "gradient-primary text-primary-foreground" : ""} onClick={() => setCurrentPage(page)}>
                {page}
              </Button>
            ))}
            <Button variant="outline" size="sm" disabled={currentPage === totalPages} onClick={() => setCurrentPage((p) => p + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
