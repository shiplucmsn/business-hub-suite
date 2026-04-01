import { ArrowRight, Globe, ShoppingBag, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BusinessSearchSection from "@/components/BusinessSearchSection";
import { ThemeToggle } from "@/components/ThemeToggle";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">BizOS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#search" className="hover:text-foreground transition-colors">Find Business</a>
            <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm" className="gradient-primary text-primary-foreground" onClick={() => navigate("/dashboard")}>
              Dashboard <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4 sm:mb-6">
            Your All-in-One <br className="hidden sm:block" />
            <span className="gradient-text">Business Platform</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Create websites, manage products & services, find customers, and grow your business — all from one place.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            <Button size="lg" className="gradient-primary text-primary-foreground" onClick={() => navigate("/dashboard")}>
              Get Started Free
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#search">Browse Businesses</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section id="features" className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[
            { icon: Globe, label: "Website Builder", desc: "Launch in minutes" },
            { icon: ShoppingBag, label: "E-Commerce", desc: "Sell products online" },
            { icon: Users, label: "CRM", desc: "Manage customers" },
            { icon: Briefcase, label: "Job Board", desc: "Hire talent" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="bg-card border border-border rounded-xl p-4 sm:p-5 text-center shadow-soft">
              <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-lg gradient-primary flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground text-xs sm:text-sm">{label}</h3>
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
      <footer className="border-t border-border py-6 sm:py-8 px-4 text-center text-sm text-muted-foreground">
        © 2026 BizOS. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
