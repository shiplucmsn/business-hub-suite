import { ArrowRight, Globe, ShoppingBag, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BusinessSearchSection from "@/components/BusinessSearchSection";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-foreground">BizOS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#search" className="hover:text-foreground transition-colors">Find Business</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          </div>
          <Button size="sm" className="gradient-primary text-primary-foreground" onClick={() => navigate("/")}>
            Dashboard <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
            Your All-in-One <br />
            <span className="gradient-text">Business Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Create websites, manage products & services, find customers, and grow your business — all from one place.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button size="lg" className="gradient-primary text-primary-foreground" onClick={() => navigate("/")}>
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#search">Browse Businesses</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section id="features" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Globe, label: "Website Builder", desc: "Launch in minutes" },
            { icon: ShoppingBag, label: "E-Commerce", desc: "Sell products online" },
            { icon: Users, label: "CRM", desc: "Manage customers" },
            { icon: Briefcase, label: "Job Board", desc: "Hire talent" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-5 text-center shadow-soft">
              <div className="h-10 w-10 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-3">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{label}</h3>
              <p className="text-xs text-muted-foreground mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Search Section */}
      <div id="search">
        <BusinessSearchSection />
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-4 text-center text-sm text-muted-foreground">
        © 2026 BizOS. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
