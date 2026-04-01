import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Package, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const products = [
  { name: "Premium WordPress Theme", price: "$59", stock: 999, category: "Digital", sales: 1240 },
  { name: "Business Card Template Pack", price: "$29", stock: 999, category: "Digital", sales: 856 },
  { name: "Custom Logo Package", price: "$199", stock: 50, category: "Service", sales: 342 },
  { name: "Social Media Template Kit", price: "$39", stock: 999, category: "Digital", sales: 2100 },
  { name: "Website Maintenance Plan", price: "$99/mo", stock: 20, category: "Subscription", sales: 189 },
  { name: "Email Marketing Setup", price: "$149", stock: 30, category: "Service", sales: 267 },
];

export default function Products() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Products</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage your product catalog</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline"><Filter className="h-4 w-4 mr-2" /> Filter</Button>
            <Button className="gradient-primary text-primary-foreground">
              <Plus className="h-4 w-4 mr-2" /> Add Product
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <Card key={p.name} className="shadow-card border-border/50 hover:shadow-elevated transition-shadow">
              <div className="h-32 bg-secondary flex items-center justify-center rounded-t-lg">
                <Package className="h-10 w-10 text-muted-foreground/30" />
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="text-xs mb-2">{p.category}</Badge>
                    <h3 className="font-semibold text-sm">{p.name}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/50">
                  <span className="text-lg font-bold gradient-text">{p.price}</span>
                  <span className="text-xs text-muted-foreground">{p.sales} sold</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
