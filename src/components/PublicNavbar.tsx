import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

const MAIN_LINKS = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Services", path: "/services-marketplace" },
  { label: "Products", path: "/products-marketplace" },
  { label: "Wholesale", path: "/wholesale" },
  { label: "Shopping", path: "/consumer-shopping" },
];

const OTHER_LINKS = [
  
  { label: "Pricing", path: "/pricing" },
  { label: "Directory", path: "/directory" },
  { label: "Jobs", path: "/jobs" },
  { label: "Leads", path: "/frontend-leads" },
];

export function PublicNavbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">

        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">T</span>
          </div>
          <span className="text-lg sm:text-xl font-bold text-foreground">
            TradingHub
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">

          {MAIN_LINKS.map((link) => (
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

          {/* Others Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              Others
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  dropdownOpen && "rotate-180"
                )}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-52 bg-card border border-border rounded-lg shadow-lg z-50 p-1">
                {OTHER_LINKS.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => {
                      navigate(link.path);
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-sm rounded-md hover:bg-accent/50"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Button
            size="sm"
            variant="outline"
            className="hidden sm:flex"
            onClick={() => navigate("/login")}
          >
            Sign in
          </Button>

          {/* <Button
            size="sm"
            className="gradient-primary text-primary-foreground hidden sm:flex"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard <ArrowRight className="h-4 w-4 ml-1" />
          </Button> */}

          {/* Mobile Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-lg max-h-[70vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">

            {MAIN_LINKS.map((link) => (
              <button
                key={link.path}
                onClick={() => {
                  navigate(link.path);
                  setMobileOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-accent/50"
              >
                {link.label}
              </button>
            ))}

            {/* Mobile Others Dropdown */}
            <div>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium"
              >
                Others
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform",
                    mobileDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {mobileDropdownOpen && (
                <div className="ml-4 space-y-1">
                  {OTHER_LINKS.map((link) => (
                    <button
                      key={link.path}
                      onClick={() => {
                        navigate(link.path);
                        setMobileOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm rounded-md hover:bg-accent/50"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auth Buttons */}
            <div className="flex gap-2 mt-2">
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={() => {
                  navigate("/login");
                  setMobileOpen(false);
                }}
              >
                Sign in
              </Button>
              <Button
                size="sm"
                className="flex-1 gradient-primary text-primary-foreground"
                onClick={() => {
                  navigate("/dashboard");
                  setMobileOpen(false);
                }}
              >
                Dashboard
              </Button>
            </div>

          </div>
        </div>
      )}
    </nav>
  );
}