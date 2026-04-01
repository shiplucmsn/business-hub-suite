import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, Plus, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const jobs = [
  { title: "Senior React Developer", company: "BizOS", location: "Remote", type: "Full-time", salary: "$120k-$150k", posted: "2 days ago", applicants: 24 },
  { title: "UI/UX Designer", company: "BizOS", location: "San Francisco", type: "Full-time", salary: "$90k-$120k", posted: "5 days ago", applicants: 38 },
  { title: "Marketing Manager", company: "BizOS", location: "Remote", type: "Contract", salary: "$80k-$100k", posted: "1 week ago", applicants: 15 },
  { title: "DevOps Engineer", company: "BizOS", location: "New York", type: "Full-time", salary: "$130k-$160k", posted: "3 days ago", applicants: 12 },
  { title: "Content Strategist", company: "BizOS", location: "Remote", type: "Part-time", salary: "$50k-$70k", posted: "1 day ago", applicants: 8 },
];

const typeColors: Record<string, string> = {
  "Full-time": "bg-primary/10 text-primary",
  "Contract": "bg-warning/10 text-warning",
  "Part-time": "bg-info/10 text-info",
};

export default function Jobs() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Job Board</h1>
            <p className="text-muted-foreground text-sm mt-1">Post and manage job listings</p>
          </div>
          <Button className="gradient-primary text-primary-foreground">
            <Plus className="h-4 w-4 mr-2" /> Post Job
          </Button>
        </div>

        <div className="grid gap-4">
          {jobs.map((job) => (
            <Card key={job.title} className="shadow-card border-border/50 hover:shadow-elevated transition-shadow cursor-pointer">
              <CardContent className="flex flex-col md:flex-row md:items-center justify-between p-5 gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-secondary p-3 shrink-0">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{job.company}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {job.posted}</span>
                      <span className="flex items-center gap-1"><Briefcase className="h-3 w-3" /> {job.applicants} applicants</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:flex-col md:items-end">
                  <Badge className={`${typeColors[job.type]} border-0`}>{job.type}</Badge>
                  <span className="font-semibold text-sm">{job.salary}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
