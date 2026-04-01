import { useState } from "react";
import { Search, Phone, Mail, Filter, UserCheck, ChevronLeft, ChevronRight } from "lucide-react";
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

const LEADS = [
  { id: 1, name: "Sarah Wilson", email: "sarah@example.com", phone: "+61 4 1234 5678", company: "Wilson Enterprises", industry: "Retail", status: "New", interest: "Web Design", date: "2026-03-31" },
  { id: 2, name: "Michael Chen", email: "mchen@example.com", phone: "+61 4 2345 6789", company: "Chen & Co", industry: "Technology", status: "Contacted", interest: "SEO Services", date: "2026-03-30" },
  { id: 3, name: "Emma Thompson", email: "emma.t@example.com", phone: "+61 4 3456 7890", company: "Thompson Design", industry: "Creative", status: "Qualified", interest: "Branding Package", date: "2026-03-29" },
  { id: 4, name: "James Brown", email: "jbrown@example.com", phone: "+61 4 4567 8901", company: "Brown Industries", industry: "Manufacturing", status: "New", interest: "E-commerce Setup", date: "2026-03-28" },
  { id: 5, name: "Olivia Martin", email: "olivia@example.com", phone: "+61 4 5678 9012", company: "Martin Solutions", industry: "Consulting", status: "Contacted", interest: "Marketing", date: "2026-03-27" },
  { id: 6, name: "Liam Davis", email: "liam.d@example.com", phone: "+61 4 6789 0123", company: "Davis Tech", industry: "Technology", status: "Qualified", interest: "App Development", date: "2026-03-26" },
  { id: 7, name: "Sophia Lee", email: "sophia@example.com", phone: "+61 4 7890 1234", company: "Lee Group", industry: "Finance", status: "New", interest: "Website Redesign", date: "2026-03-25" },
  { id: 8, name: "Noah Garcia", email: "noah.g@example.com", phone: "+61 4 8901 2345", company: "Garcia & Sons", industry: "Construction", status: "Contacted", interest: "Digital Marketing", date: "2026-03-24" },
  { id: 9, name: "Ava Patel", email: "ava.p@example.com", phone: "+61 4 9012 3456", company: "Patel Consulting", industry: "Healthcare", status: "New", interest: "Social Media Management", date: "2026-03-23" },
  { id: 10, name: "Ethan Wright", email: "ethan.w@example.com", phone: "+61 4 0123 4567", company: "Wright & Associates", industry: "Legal", status: "Qualified", interest: "Content Strategy", date: "2026-03-22" },
  { id: 11, name: "Mia Johnson", email: "mia.j@example.com", phone: "+61 4 1234 9876", company: "Johnson Media", industry: "Media", status: "Contacted", interest: "Video Production", date: "2026-03-21" },
  { id: 12, name: "Lucas Kim", email: "lucas.k@example.com", phone: "+61 4 2345 8765", company: "Kim Logistics", industry: "Logistics", status: "New", interest: "Supply Chain Software", date: "2026-03-20" },
  { id: 13, name: "Isabella Nguyen", email: "isabella.n@example.com", phone: "+61 4 3456 7654", company: "Nguyen Foods", industry: "Hospitality", status: "Qualified", interest: "POS System", date: "2026-03-19" },
  { id: 14, name: "Jack Taylor", email: "jack.t@example.com", phone: "+61 4 4567 6543", company: "Taylor Tech", industry: "Technology", status: "New", interest: "Cloud Migration", date: "2026-03-18" },
];

const statusColors: Record<string, string> = {
  New: "bg-info/10 text-info border-info/20",
  Contacted: "bg-warning/10 text-warning border-warning/20",
  Qualified: "bg-success/10 text-success border-success/20",
};

const ITEMS_PER_PAGE = 6;

export default function FrontendLeads() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [showPhoneId, setShowPhoneId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = LEADS.filter((l) => {
    const matchSearch = !search || l.name.toLowerCase().includes(search.toLowerCase()) || l.company.toLowerCase().includes(search.toLowerCase()) || l.interest.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || l.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

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

        <div className="bg-card rounded-2xl shadow-elevated p-4 sm:p-6 mb-8 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="relative sm:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by name, company, or interest..." value={search} onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} className="pl-10" />
            </div>
            <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setCurrentPage(1); }}>
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
          {paginated.map((lead) => (
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
