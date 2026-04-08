import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
  { label: "Directory", path: "/directory" },
  { label: "Services", path: "/services-marketplace" },
  { label: "Products", path: "/products-marketplace" },
  { label: "Jobs", path: "/jobs" },
  { label: "Wholesale", path: "/wholesale" },
  { label: "Shopping", path: "/consumer-shopping" },
  { label: "Leads", path: "/frontend-leads" },
];

export function PublicNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">T</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-foreground">TradingHub</span>
        </div>

        <div className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={cn(
                "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button size="sm" variant="outline" className="hidden sm:flex" onClick={() => navigate("/login")}>
            Sign in
          </Button>
          <Button size="sm" className="gradient-primary text-primary-foreground hidden sm:flex" onClick={() => navigate("/dashboard")}>
            Dashboard <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-lg max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => { navigate(link.path); setMobileOpen(false); }}
                className={cn(
                  "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {link.label}
              </button>
            ))}
            <div className="flex gap-2 mt-2">
              <Button size="sm" variant="outline" className="flex-1" onClick={() => { navigate("/login"); setMobileOpen(false); }}>Sign in</Button>
              <Button size="sm" className="flex-1 gradient-primary text-primary-foreground" onClick={() => { navigate("/dashboard"); setMobileOpen(false); }}>Dashboard</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
