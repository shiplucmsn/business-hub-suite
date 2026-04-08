import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Clock, DollarSign, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PublicNavbar } from "@/components/PublicNavbar";

const JOB_TYPES = ["All", "Full-time", "Part-time", "Contract", "Remote", "Freelance"];

const JOBS = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: ["Senior React Developer", "UI/UX Designer", "Marketing Manager", "Data Analyst", "DevOps Engineer", "Product Manager", "Content Writer", "Sales Executive", "Full-Stack Developer"][i % 9],
  company: ["TechCorp", "DesignLab", "GrowthCo", "DataViz", "CloudOps", "ProductHub", "MediaWorks", "SalesForce", "AppForge"][i % 9],
  location: ["Sydney, AU", "Melbourne, AU", "Remote", "Brisbane, AU", "Perth, AU", "Sydney, AU", "Remote", "Adelaide, AU", "Melbourne, AU"][i % 9],
  salary: ["$120k-150k", "$90k-110k", "$100k-130k", "$85k-105k", "$130k-160k", "$110k-140k", "$70k-90k", "$80k-120k", "$100k-140k"][i % 9],
  type: JOB_TYPES[1 + (i % 5)],
  posted: ["2h ago", "5h ago", "1d ago", "2d ago", "3d ago", "5d ago", "1w ago", "1w ago", "2w ago"][i % 9],
  tags: [["React", "TypeScript"], ["Figma", "UI"], ["SEO", "Ads"], ["Python", "SQL"], ["AWS", "Docker"], ["Agile", "Scrum"], ["SEO", "Blog"], ["B2B", "CRM"], ["Node.js", "React"]][i % 9],
}));

const ITEMS_PER_PAGE = 8;

const JobListing = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = JOBS.filter(j =>
    (type === "All" || j.type === type) &&
    (j.title.toLowerCase().includes(search.toLowerCase()) || j.company.toLowerCase().includes(search.toLowerCase()))
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paged = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Find Your Next <span className="gradient-text">Opportunity</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">Browse top jobs from leading companies</p>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search jobs or companies..." className="pl-10 h-11" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
            </div>
            <Select value={type} onValueChange={(v) => { setType(v); setPage(1); }}>
              <SelectTrigger className="w-full sm:w-48 h-11"><Briefcase className="h-4 w-4 mr-2" /><SelectValue /></SelectTrigger>
              <SelectContent>
                {JOB_TYPES.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            {paged.map((j, i) => (
              <motion.div key={j.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Card className="border-border/50 hover:shadow-elevated transition-all duration-300 cursor-pointer" onClick={() => navigate(`/job/${j.id}`)}>
                  <CardContent className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="h-12 w-12 shrink-0 rounded-xl gradient-primary flex items-center justify-center">
                      <Building2 className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground mb-1">{j.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        <span>{j.company}</span>
                        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                        <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> {j.salary}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <Badge variant="outline" className="text-xs">{j.type}</Badge>
                        {j.tags.map(t => <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>)}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:flex-col sm:items-end">
                      <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {j.posted}</span>
                      <Button size="sm" className="gradient-primary text-primary-foreground">Apply</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              <Button variant="outline" size="icon" disabled={page === 1} onClick={() => setPage(p => p - 1)}><ChevronLeft className="h-4 w-4" /></Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button key={i} variant={page === i + 1 ? "default" : "outline"} size="sm" className={page === i + 1 ? "gradient-primary text-primary-foreground" : ""} onClick={() => setPage(i + 1)}>{i + 1}</Button>
              ))}
              <Button variant="outline" size="icon" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}><ChevronRight className="h-4 w-4" /></Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobListing;
