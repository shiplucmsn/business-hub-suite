import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Shield, Settings, Plus, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const domains = [
  { name: "mybusiness.com", status: "Active", ssl: true, expires: "Dec 2025" },
  { name: "shop.mybusiness.com", status: "Active", ssl: true, expires: "Dec 2025" },
  { name: "blog.mybusiness.com", status: "Pending", ssl: false, expires: "—" },
];

export default function Domains() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Domain & Hosting</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage your domains, DNS, and hosting settings</p>
          </div>
          <Button className="gradient-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" /> Add Domain
          </Button>
        </div>

        <div className="grid gap-4">
          {domains.map((d) => (
            <Card key={d.name} className="shadow-card border-border/50">
              <CardContent className="flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                  <div className="rounded-lg bg-secondary p-2.5">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold">{d.name}</p>
                      <ExternalLink className="h-3 w-3 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground mt-0.5">Expires {d.expires}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {d.ssl && (
                    <Badge variant="secondary" className="bg-success/10 text-success border-0">
                      <Shield className="h-3 w-3 mr-1" /> SSL
                    </Badge>
                  )}
                  <Badge variant={d.status === "Active" ? "default" : "secondary"} className={d.status === "Active" ? "gradient-primary border-0" : ""}>
                    {d.status}
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "DNS Records", desc: "Manage A, CNAME, MX records", count: "12 records" },
            { title: "SSL Certificates", desc: "Auto-renew enabled", count: "2 active" },
            { title: "Hosting Stats", desc: "99.9% uptime this month", count: "2.4 GB used" },
          ].map((item) => (
            <Card key={item.title} className="shadow-card border-border/50 cursor-pointer hover:shadow-elevated transition-shadow">
              <CardContent className="p-5">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                <p className="text-lg font-bold mt-3 gradient-text">{item.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
