import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, MessageSquare, Globe, Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CompanyPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Company Page</h1>
            <p className="text-muted-foreground text-sm mt-1">Your public business profile</p>
          </div>
          <Button className="gradient-primary text-primary-foreground">
            <Edit className="h-4 w-4 mr-2" /> Edit Profile
          </Button>
        </div>

        <Card className="shadow-card border-border/50 overflow-hidden">
          <div className="h-40 gradient-primary" />
          <CardContent className="relative p-6">
            <div className="absolute -top-12 left-6 gradient-primary h-24 w-24 rounded-2xl border-4 border-card flex items-center justify-center shadow-elevated">
              <span className="text-3xl font-bold text-primary-foreground">B</span>
            </div>
            <div className="ml-0 pt-14 md:ml-32 md:pt-0">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">TradingHub Technologies</h2>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" /> San Francisco, CA
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> 1.2k followers</span>
                    <span className="flex items-center gap-1"><Star className="h-3 w-3 text-warning" /> 4.8 (256 reviews)</span>
                    <span className="flex items-center gap-1"><Globe className="h-3 w-3" /> mybusiness.com</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><MessageSquare className="h-3 w-3 mr-1" /> Message</Button>
                  <Button size="sm" className="gradient-primary text-primary-foreground">Follow</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-3">
          <Card className="shadow-card border-border/50 md:col-span-2">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-2">About</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                TradingHub Technologies is a leading SaaS company providing all-in-one business management solutions. We help businesses streamline their operations, from website building to payment processing.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["SaaS", "Web Development", "E-commerce", "Digital Services"].map((t) => (
                  <Badge key={t} variant="secondary">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-card border-border/50">
            <CardContent className="p-5">
              <h3 className="font-semibold mb-3">Quick Stats</h3>
              <div className="space-y-3">
                {[
                  { label: "Services Listed", value: "24" },
                  { label: "Products", value: "156" },
                  { label: "Jobs Posted", value: "8" },
                  { label: "Response Rate", value: "98%" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{s.label}</span>
                    <span className="text-sm font-semibold">{s.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
