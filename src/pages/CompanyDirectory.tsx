import { useState } from "react";
import { Search, MapPin, Building2, Star, Filter, LayoutGrid, List, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PublicNavbar } from "@/components/PublicNavbar";
import { useNavigate } from "react-router-dom";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";

const INDUSTRIES = ["All Industries", "Technology", "Construction", "Healthcare", "Finance", "Education", "Retail", "Hospitality"];
const LOCATIONS = ["All Locations", "Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Gold Coast", "Canberra"];

const COMPANIES = [
  { id: 1, name: "TechVault Solutions", industry: "Technology", location: "Sydney", state: "NSW", rating: 4.9, reviews: 312, employees: "50-100", desc: "Enterprise SaaS and cloud solutions for modern businesses.", verified: true },
  { id: 2, name: "BuildRight Construction", industry: "Construction", location: "Melbourne", state: "VIC", rating: 4.7, reviews: 189, employees: "100-200", desc: "Commercial and residential construction with 20+ years experience.", verified: true },
  { id: 3, name: "HealthFirst Clinic", industry: "Healthcare", location: "Brisbane", state: "QLD", rating: 4.8, reviews: 256, employees: "25-50", desc: "Comprehensive healthcare services with cutting-edge technology.", verified: false },
  { id: 4, name: "FinanceWise Advisory", industry: "Finance", location: "Perth", state: "WA", rating: 4.6, reviews: 145, employees: "10-25", desc: "Financial planning and investment advisory for individuals and businesses.", verified: true },
  { id: 5, name: "EduSpark Academy", industry: "Education", location: "Adelaide", state: "SA", rating: 4.5, reviews: 98, employees: "25-50", desc: "Online and in-person courses for professional development.", verified: false },
  { id: 6, name: "RetailPro Stores", industry: "Retail", location: "Gold Coast", state: "QLD", rating: 4.4, reviews: 76, employees: "200+", desc: "Multi-channel retail solutions and e-commerce services.", verified: true },
  { id: 7, name: "StayWell Hotels", industry: "Hospitality", location: "Sydney", state: "NSW", rating: 4.8, reviews: 534, employees: "200+", desc: "Premium hospitality and accommodation services across Australia.", verified: true },
  { id: 8, name: "CodeCraft Labs", industry: "Technology", location: "Melbourne", state: "VIC", rating: 4.7, reviews: 167, employees: "25-50", desc: "Custom software development and digital transformation.", verified: true },
  { id: 9, name: "GreenBuild Co", industry: "Construction", location: "Canberra", state: "ACT", rating: 4.6, reviews: 112, employees: "50-100", desc: "Sustainable building solutions and green architecture.", verified: false },
  { id: 10, name: "MindCare Health", industry: "Healthcare", location: "Perth", state: "WA", rating: 4.9, reviews: 287, employees: "50-100", desc: "Mental health services and wellness programs.", verified: true },
  { id: 11, name: "WealthStream Finance", industry: "Finance", location: "Sydney", state: "NSW", rating: 4.5, reviews: 198, employees: "100-200", desc: "Wealth management and corporate finance solutions.", verified: true },
  { id: 12, name: "LearnHub Online", industry: "Education", location: "Brisbane", state: "QLD", rating: 4.3, reviews: 67, employees: "10-25", desc: "E-learning platform for tech skills and certifications.", verified: false },
];

const ITEMS_PER_PAGE = 6;

const CompanyDirectory = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("");
  const [location, setLocation] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = COMPANIES.filter((c) => {
    const matchSearch = !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase());
    const matchIndustry = !industry || industry === "All Industries" || c.industry === industry;
    const matchLoc = !location || location === "All Locations" || c.location === location;
    return matchSearch && matchIndustry && matchLoc;
  });

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />

      {/* Hero */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto animate-[fadeInUp_0.7s_ease-out]">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-[1.1] mb-4 tracking-tight">
            Company <span className="gradient-text">Directory</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Discover and connect with verified businesses across Australia.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 pb-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elevated p-4 sm:p-6 border border-border/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search companies..."
                  aria-label="Search companies"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                  className="flex h-11 w-full rounded-xl border border-input bg-secondary/50 pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                />
              </div>
              <Select value={industry} onValueChange={(v) => { setIndustry(v); setCurrentPage(1); }}>
                <SelectTrigger className="h-11 rounded-xl border-input bg-secondary/50">
                  <Filter className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
                  <SelectValue placeholder="Industry" />
                </SelectTrigger>
                <SelectContent>
                  {INDUSTRIES.map((i) => <SelectItem key={i} value={i}>{i}</SelectItem>)}
                </SelectContent>
              </Select>
              <Select value={location} onValueChange={(v) => { setLocation(v); setCurrentPage(1); }}>
                <SelectTrigger className="h-11 rounded-xl border-input bg-secondary/50">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {LOCATIONS.map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  className={`h-11 w-11 rounded-xl ${viewMode === "grid" ? "gradient-primary text-primary-foreground" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  className={`h-11 w-11 rounded-xl ${viewMode === "list" ? "gradient-primary text-primary-foreground" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Showing <span className="font-semibold text-foreground">{filtered.length}</span> companies
          </p>
        </div>
      </section>

      {/* Companies */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {paginated.map((c) => (
                <Card key={c.id} className="border-border/50 hover:shadow-elevated transition-all duration-300 cursor-pointer group" onClick={() => navigate(`/company-profile/${c.id}`)}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                        {c.name[0]}
                      </div>
                      {c.verified && <Badge variant="secondary" className="text-xs">✓ Verified</Badge>}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">{c.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Badge variant="outline" className="text-xs">{c.industry}</Badge>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{c.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">{c.desc}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Star className="h-3.5 w-3.5 text-warning fill-warning" /> {c.rating} ({c.reviews})
                      </span>
                      <span className="text-xs text-muted-foreground">{c.employees} employees</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {paginated.map((c) => (
                <Card key={c.id} className="border-border/50 hover:shadow-elevated transition-all duration-300 cursor-pointer" onClick={() => navigate(`/company-profile/${c.id}`)}>
                  <CardContent className="p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                      {c.name[0]}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{c.name}</h3>
                        {c.verified && <Badge variant="secondary" className="text-xs">✓ Verified</Badge>}
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-1">{c.desc}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground shrink-0">
                      <Badge variant="outline" className="text-xs">{c.industry}</Badge>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{c.location}</span>
                      <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-warning fill-warning" />{c.rating}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Building2 className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-1">No companies found</h3>
              <p className="text-sm text-muted-foreground">Try adjusting your filters</p>
            </div>
          )}

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1.5 mt-10">
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg" disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Button
                  key={p}
                  variant={currentPage === p ? "default" : "ghost"}
                  size="sm"
                  className={`h-9 w-9 rounded-lg p-0 ${currentPage === p ? "gradient-primary text-primary-foreground" : "text-muted-foreground"}`}
                  onClick={() => setCurrentPage(p)}
                >
                  {p}
                </Button>
              ))}
              <Button variant="outline" size="icon" className="h-9 w-9 rounded-lg" disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4 text-center text-sm text-muted-foreground">
        © 2026 TradingHub. All rights reserved.
      </footer>
    </div>
  );
};

export default CompanyDirectory;
