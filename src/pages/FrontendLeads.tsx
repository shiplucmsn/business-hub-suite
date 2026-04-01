import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Phone, Mail, ArrowLeft, Filter, UserCheck, Send } from "lucide-react";
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

const LEADS = [
  { id: 1, name: "Sarah Wilson", email: "sarah@example.com", phone: "+61 4 1234 5678", company: "Wilson Enterprises", industry: "Retail", status: "New", interest: "Web Design", date: "2026-03-31" },
  { id: 2, name: "Michael Chen", email: "mchen@example.com", phone: "+61 4 2345 6789", company: "Chen & Co", industry: "Technology", status: "Contacted", interest: "SEO Services", date: "2026-03-30" },
  { id: 3, name: "Emma Thompson", email: "emma.t@example.com", phone: "+61 4 3456 7890", company: "Thompson Design", industry: "Creative", status: "Qualified", interest: "Branding Package", date: "2026-03-29" },
  { id: 4, name: "James Brown", email: "jbrown@example.com", phone: "+61 4 4567 8901", company: "Brown Industries", industry: "Manufacturing", status: "New", interest: "E-commerce Setup", date: "2026-03-28" },
  { id: 5, name: "Olivia Martin", email: "olivia@example.com", phone: "+61 4 5678 9012", company: "Martin Solutions", industry: "Consulting", status: "Contacted", interest: "Marketing", date: "2026-03-27" },
  { id: 6, name: "Liam Davis", email: "liam.d@example.com", phone: "+61 4 6789 0123", company: "Davis Tech", industry: "Technology", status: "Qualified", interest: "App Development", date: "2026-03-26" },
  { id: 7, name: "Sophia Lee", email: "sophia@example.com", phone: "+61 4 7890 1234", company: "Lee Group", industry: "Finance", status: "New", interest: "Website Redesign", date: "2026-03-25" },
  { id: 8, name: "Noah Garcia", email: "noah.g@example.com", phone: "+61 4 8901 2345", company: "Garcia & Sons", industry: "Construction", status: "Contacted", interest: "Digital Marketing", date: "2026-03-24" },
];

const statusColors: Record<string, string> = {
  New: "bg-info/10 text-info border-info/20",
  Contacted: "bg-warning/10 text-warning border-warning/20",
  Qualified: "bg-success/10 text-success border-success/20",
};

export default function FrontendLeads() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showPhoneId, setShowPhoneId] = useState<number | null>(null);

  const filtered = LEADS.filter((l) => {
    const matchSearch = !search || l.name.toLowerCase().includes(search.toLowerCase()) || l.company.toLowerCase().includes(search.toLowerCase()) || l.interest.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || l.status === statusFilter;
    return matchSearch && matchStatus;
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
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl gradient-primary mb-4">
            <UserCheck className="h-6 w-6 text-primary-foreground" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Customer <span className="gradient-text">Leads</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse and connect with potential business leads
          </p>
        </div>

        {/* Search & Filter */}
        <div className="bg-card rounded-2xl shadow-elevated p-4 sm:p-6 mb-8 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative sm:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by name, company, or interest..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Contacted">Contacted</SelectItem>
                <SelectItem value="Qualified">Qualified</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-6">
          Showing <span className="font-semibold text-foreground">{filtered.length}</span> leads
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filtered.map((lead) => (
            <Card key={lead.id} className="shadow-card hover:shadow-elevated transition-all duration-300 group">
              <CardContent className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full gradient-primary flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-primary-foreground">{lead.name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{lead.name}</h3>
                      <p className="text-xs text-muted-foreground">{lead.company}</p>
                    </div>
                  </div>
                  <Badge className={`text-xs ${statusColors[lead.status]}`} variant="outline">
                    {lead.status}
                  </Badge>
                </div>

                <div className="space-y-1.5 text-sm">
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Industry:</span> {lead.industry}</p>
                  <p className="text-muted-foreground"><span className="text-foreground font-medium">Interest:</span> {lead.interest}</p>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={`mailto:${lead.email}`}>
                      <Mail className="h-3.5 w-3.5 mr-1" /> Email
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant={showPhoneId === lead.id ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setShowPhoneId(showPhoneId === lead.id ? null : lead.id)}
                  >
                    <Phone className="h-3.5 w-3.5 mr-1" />
                    {showPhoneId === lead.id ? lead.phone : "Call"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <UserCheck className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-1">No leads found</h3>
            <p className="text-muted-foreground">Try adjusting your search</p>
          </div>
        )}
      </div>
    </div>
  );
}
