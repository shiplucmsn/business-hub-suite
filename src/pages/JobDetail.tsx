import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, DollarSign, Clock, Building2, ArrowLeft, CheckCircle2, Briefcase, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PublicNavbar } from "@/components/PublicNavbar";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to jobs
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">Senior React Developer</h1>
                  <p className="text-muted-foreground">TechCorp · Job #{id}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mt-4">
                <Badge variant="outline"><MapPin className="h-3 w-3 mr-1" /> Sydney, AU</Badge>
                <Badge variant="outline"><DollarSign className="h-3 w-3 mr-1" /> $120k-150k</Badge>
                <Badge variant="outline"><Briefcase className="h-3 w-3 mr-1" /> Full-time</Badge>
                <Badge variant="outline"><Clock className="h-3 w-3 mr-1" /> Posted 2h ago</Badge>
              </div>
            </div>

            <Card className="border-border/50">
              <CardContent className="p-6 space-y-5">
                <div>
                  <h2 className="font-semibold text-foreground mb-3">Job Description</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We're looking for a Senior React Developer to join our growing engineering team. You'll be building scalable, high-performance web applications using React, TypeScript, and modern tooling. This is a unique opportunity to shape the technical direction of our product.
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-foreground mb-3">Requirements</h2>
                  <ul className="space-y-2">
                    {["5+ years of React experience", "Strong TypeScript skills", "Experience with state management (Redux, Zustand)", "Knowledge of REST & GraphQL APIs", "Experience with testing (Jest, Cypress)", "Excellent communication skills", "Bachelor's in CS or equivalent"].map(r => (
                      <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold text-foreground mb-3">Benefits</h2>
                  <ul className="space-y-2">
                    {["Competitive salary + equity", "Remote-friendly work culture", "Health, dental & vision insurance", "Unlimited PTO", "Learning & development budget", "Team retreats & events"].map(b => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
            <Card className="border-border/50">
              <CardContent className="p-5 space-y-4">
                <Button className="w-full h-11 gradient-primary text-primary-foreground" onClick={() => navigate(`/job/${id}/apply`)}>
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full">Save Job</Button>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-5">
                <h3 className="font-semibold text-foreground mb-4">About TechCorp</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-primary" /> Technology · SaaS</div>
                  <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> 200-500 employees</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Sydney, Australia</div>
                </div>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                  TechCorp is a leading SaaS platform helping businesses automate their workflows and scale operations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
