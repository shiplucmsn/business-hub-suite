import { DashboardLayout } from "@/components/DashboardLayout";
import { Search, Filter, MoreHorizontal, Mail, Phone, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const LEADS = [
  { id: 1, name: "Sarah Wilson", email: "sarah@example.com", phone: "+61 4 1234 5678", company: "Wilson Enterprises", source: "Website", status: "New", value: "$2,500", date: "2026-03-31" },
  { id: 2, name: "Michael Chen", email: "mchen@example.com", phone: "+61 4 2345 6789", company: "Chen & Co", source: "Marketplace", status: "Contacted", value: "$5,000", date: "2026-03-30" },
  { id: 3, name: "Emma Thompson", email: "emma.t@example.com", phone: "+61 4 3456 7890", company: "Thompson Design", source: "Referral", status: "Qualified", value: "$8,200", date: "2026-03-29" },
  { id: 4, name: "James Brown", email: "jbrown@example.com", phone: "+61 4 4567 8901", company: "Brown Industries", source: "Website", status: "Proposal", value: "$12,000", date: "2026-03-28" },
  { id: 5, name: "Olivia Martin", email: "olivia@example.com", phone: "+61 4 5678 9012", company: "Martin Solutions", source: "Marketplace", status: "New", value: "$3,400", date: "2026-03-27" },
  { id: 6, name: "Liam Davis", email: "liam.d@example.com", phone: "+61 4 6789 0123", company: "Davis Tech", source: "Referral", status: "Contacted", value: "$6,750", date: "2026-03-26" },
  { id: 7, name: "Sophia Lee", email: "sophia@example.com", phone: "+61 4 7890 1234", company: "Lee Group", source: "Website", status: "Qualified", value: "$15,000", date: "2026-03-25" },
  { id: 8, name: "Noah Garcia", email: "noah.g@example.com", phone: "+61 4 8901 2345", company: "Garcia & Sons", source: "Marketplace", status: "New", value: "$4,200", date: "2026-03-24" },
];

const statusColors: Record<string, string> = {
  New: "bg-info/10 text-info",
  Contacted: "bg-warning/10 text-warning",
  Qualified: "bg-success/10 text-success",
  Proposal: "bg-accent/10 text-accent",
};

const stats = [
  { label: "Total Leads", value: "8", change: "+12%" },
  { label: "New This Week", value: "3", change: "+50%" },
  { label: "Conversion Rate", value: "24%", change: "+3%" },
  { label: "Total Value", value: "$57,050", change: "+18%" },
];

export default function Leads() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = LEADS.filter((l) => {
    const matchSearch = !search || l.name.toLowerCase().includes(search.toLowerCase()) || l.company.toLowerCase().includes(search.toLowerCase()) || l.email.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "all" || l.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Customer Leads</h1>
          <p className="text-muted-foreground text-sm mt-1">Track and manage your sales leads</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label} className="shadow-card border-border/50">
              <CardContent className="p-5">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <div className="flex items-end justify-between mt-1">
                  <p className="text-2xl font-bold">{s.value}</p>
                  <span className="flex items-center text-xs font-medium text-success">
                    <ArrowUpRight className="h-3 w-3" /> {s.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search and Filter */}
        <Card className="shadow-card border-border/50">
          <CardHeader className="pb-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <CardTitle className="text-base font-semibold">All Leads</CardTitle>
              <div className="flex items-center gap-2">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search leads..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 h-9" />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-36 h-9">
                    <Filter className="h-3.5 w-3.5 mr-1.5" />
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Contacted">Contacted</SelectItem>
                    <SelectItem value="Qualified">Qualified</SelectItem>
                    <SelectItem value="Proposal">Proposal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 text-left font-medium text-muted-foreground">Name</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground hidden md:table-cell">Company</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground hidden lg:table-cell">Source</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Value</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground hidden sm:table-cell">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead) => (
                    <tr key={lead.id} className="border-b border-border/50 last:border-0">
                      <td className="py-3">
                        <div>
                          <p className="font-medium text-foreground">{lead.name}</p>
                          <p className="text-xs text-muted-foreground">{lead.email}</p>
                        </div>
                      </td>
                      <td className="py-3 hidden md:table-cell text-muted-foreground">{lead.company}</td>
                      <td className="py-3 hidden lg:table-cell">
                        <Badge variant="outline" className="text-xs">{lead.source}</Badge>
                      </td>
                      <td className="py-3 font-medium">{lead.value}</td>
                      <td className="py-3">
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[lead.status]}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="py-3 hidden sm:table-cell">
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="icon" className="h-7 w-7"><Mail className="h-3.5 w-3.5" /></Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7"><Phone className="h-3.5 w-3.5" /></Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7"><MoreHorizontal className="h-3.5 w-3.5" /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filtered.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">No leads found</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
