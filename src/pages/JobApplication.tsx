import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Upload, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PublicNavbar } from "@/components/PublicNavbar";

const JobApplication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <PublicNavbar />
        <div className="flex items-center justify-center py-24 px-4">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground mb-3">Application Submitted!</h1>
            <p className="text-muted-foreground mb-6">Thank you for applying. The employer will review your application and get back to you soon.</p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={() => navigate("/jobs")}>Browse Jobs</Button>
              <Button className="gradient-primary text-primary-foreground" onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <PublicNavbar />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-8">
        <Button variant="ghost" size="sm" className="mb-6 text-muted-foreground" onClick={() => navigate(-1)}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to job
        </Button>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-2xl font-bold text-foreground mb-2">Apply for Senior React Developer</h1>
          <p className="text-muted-foreground mb-8">Job #{id} at TechCorp</p>

          <Card className="border-border/50">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fname">First name</Label>
                    <Input id="fname" placeholder="John" className="h-11" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lname">Last name</Label>
                    <Input id="lname" placeholder="Doe" className="h-11" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" className="h-11" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" placeholder="+61 400 000 000" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label>Resume / CV</Label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center cursor-pointer hover:border-primary/50 transition-colors">
                    <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Drag & drop your resume or <span className="text-primary font-medium">browse</span></p>
                    <p className="text-xs text-muted-foreground mt-1">PDF, DOC, DOCX up to 5MB</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio URL (optional)</Label>
                  <Input id="portfolio" placeholder="https://yourportfolio.com" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cover">Cover letter</Label>
                  <Textarea id="cover" placeholder="Tell us why you're a great fit for this role..." rows={5} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="q1">Why do you want to work at TechCorp?</Label>
                  <Textarea id="q1" placeholder="Your answer..." rows={3} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="q2">What's your experience with React and TypeScript?</Label>
                  <Textarea id="q2" placeholder="Your answer..." rows={3} />
                </div>
                <Button type="submit" className="w-full h-11 gradient-primary text-primary-foreground">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default JobApplication;
