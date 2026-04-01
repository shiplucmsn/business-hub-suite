import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Layout, Palette, Eye, Plus, Monitor, Smartphone } from "lucide-react";

const templates = [
  { name: "Business Pro", desc: "Professional corporate template", color: "from-primary to-accent" },
  { name: "Creative Studio", desc: "Portfolio & creative agency", color: "from-accent to-primary" },
  { name: "E-commerce", desc: "Online store template", color: "from-info to-primary" },
];

export default function WebsiteBuilder() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Website Builder</h1>
            <p className="text-muted-foreground text-sm mt-1">Create and manage your company website</p>
          </div>
          <Button className="gradient-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" /> New Website
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="shadow-card border-border/50 border-dashed flex items-center justify-center min-h-[280px] cursor-pointer hover:border-primary/50 transition-colors">
            <CardContent className="flex flex-col items-center gap-3 text-center p-6">
              <div className="rounded-full bg-secondary p-4">
                <Plus className="h-6 w-6 text-primary" />
              </div>
              <p className="font-medium">Create New Website</p>
              <p className="text-xs text-muted-foreground">Start from scratch or choose a template</p>
            </CardContent>
          </Card>

          {templates.map((t) => (
            <Card key={t.name} className="shadow-card border-border/50 overflow-hidden group cursor-pointer hover:shadow-elevated transition-shadow">
              <div className={`h-36 bg-gradient-to-br ${t.color} opacity-80`} />
              <CardContent className="p-4">
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" variant="outline" className="text-xs h-8">
                    <Eye className="h-3 w-3 mr-1" /> Preview
                  </Button>
                  <Button size="sm" className="text-xs h-8 gradient-primary text-primary-foreground">
                    <Layout className="h-3 w-3 mr-1" /> Edit
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Design Tools</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { icon: Layout, title: "Drag & Drop Builder", desc: "Visual page editor" },
                { icon: Palette, title: "Theme Customization", desc: "Colors, fonts & branding" },
                { icon: Monitor, title: "Responsive Preview", desc: "Desktop, tablet & mobile" },
              ].map((tool) => (
                <div key={tool.title} className="flex items-start gap-3 rounded-lg border border-border/50 p-4 hover:bg-secondary/50 transition-colors cursor-pointer">
                  <div className="rounded-lg bg-secondary p-2">
                    <tool.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{tool.title}</p>
                    <p className="text-xs text-muted-foreground">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
