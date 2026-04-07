import { useState, useRef, useEffect } from "react";
import { Search, MapPin, Building2, Phone, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ORGANIZATIONS = [
  "All Organizations",
  "Removalists",
  "Plumbers",
  "Electricians",
  "Landscapers",
  "Cleaning Services",
  "Builders",
  "Accountants",
  "IT Services",
];

const LOCATION_SUGGESTIONS = [
  "Sydney, NSW",
  "Melbourne, VIC",
  "Brisbane, QLD",
  "Perth, WA",
  "Adelaide, SA",
  "Gold Coast, QLD",
  "Newcastle, NSW",
  "Canberra, ACT",
  "Hobart, TAS",
  "Darwin, NT",
  "Parramatta, NSW",
  "Bondi, NSW",
  "Surry Hills, NSW",
];

interface Business {
  id: number;
  name: string;
  category: string;
  location: string;
  state: string;
  rating: number;
  reviews: number;
  phone: string;
  mapQuery: string;
}

const BUSINESSES: Business[] = [
  { id: 1, name: "Sydney Furniture Removalists", category: "Removalists", location: "Sydney", state: "New South Wales", rating: 4.8, reviews: 124, phone: "+61 2 9876 5432", mapQuery: "Sydney+Furniture+Removalists+Sydney+NSW" },
  { id: 2, name: "Melbourne Express Movers", category: "Removalists", location: "Melbourne", state: "Victoria", rating: 4.6, reviews: 89, phone: "+61 3 9123 4567", mapQuery: "Melbourne+Express+Movers+Melbourne+VIC" },
  { id: 3, name: "Brisbane Quick Removals", category: "Removalists", location: "Brisbane", state: "Queensland", rating: 4.7, reviews: 56, phone: "+61 7 3456 7890", mapQuery: "Brisbane+Quick+Removals+Brisbane+QLD" },
  { id: 4, name: "Perth Pro Plumbing", category: "Plumbers", location: "Perth", state: "Western Australia", rating: 4.9, reviews: 203, phone: "+61 8 6123 4567", mapQuery: "Perth+Pro+Plumbing+Perth+WA" },
  { id: 5, name: "Adelaide Spark Electricians", category: "Electricians", location: "Adelaide", state: "South Australia", rating: 4.5, reviews: 78, phone: "+61 8 8234 5678", mapQuery: "Adelaide+Electricians+Adelaide+SA" },
  { id: 6, name: "Gold Coast Clean Co", category: "Cleaning Services", location: "Gold Coast", state: "Queensland", rating: 4.4, reviews: 45, phone: "+61 7 5567 8901", mapQuery: "Gold+Coast+Cleaning+Services+Gold+Coast+QLD" },
  { id: 7, name: "Canberra Elite Builders", category: "Builders", location: "Canberra", state: "Australian Capital Territory", rating: 4.8, reviews: 167, phone: "+61 2 6234 5678", mapQuery: "Canberra+Elite+Builders+Canberra+ACT" },
  { id: 8, name: "Hobart Green Landscaping", category: "Landscapers", location: "Hobart", state: "Tasmania", rating: 4.6, reviews: 92, phone: "+61 3 6234 5678", mapQuery: "Hobart+Green+Landscaping+Hobart+TAS" },
  { id: 9, name: "Darwin IT Solutions", category: "IT Services", location: "Darwin", state: "Northern Territory", rating: 4.7, reviews: 63, phone: "+61 8 8912 3456", mapQuery: "Darwin+IT+Solutions+Darwin+NT" },
  { id: 10, name: "Newcastle Tax Accountants", category: "Accountants", location: "Newcastle", state: "New South Wales", rating: 4.9, reviews: 215, phone: "+61 2 4923 4567", mapQuery: "Newcastle+Tax+Accountants+Newcastle+NSW" },
  { id: 11, name: "Parramatta Plumbing Experts", category: "Plumbers", location: "Parramatta", state: "New South Wales", rating: 4.5, reviews: 87, phone: "+61 2 9823 4567", mapQuery: "Parramatta+Plumbing+Experts+Parramatta+NSW" },
  { id: 12, name: "Melbourne Deep Clean Services", category: "Cleaning Services", location: "Melbourne", state: "Victoria", rating: 4.3, reviews: 134, phone: "+61 3 9234 5678", mapQuery: "Melbourne+Deep+Clean+Services+Melbourne+VIC" },
  { id: 13, name: "Sydney Sparks Electrical", category: "Electricians", location: "Sydney", state: "New South Wales", rating: 4.7, reviews: 98, phone: "+61 2 9345 6789", mapQuery: "Sydney+Sparks+Electrical+Sydney+NSW" },
  { id: 14, name: "Brisbane Garden Masters", category: "Landscapers", location: "Brisbane", state: "Queensland", rating: 4.8, reviews: 76, phone: "+61 7 3567 8901", mapQuery: "Brisbane+Garden+Masters+Brisbane+QLD" },
  { id: 15, name: "Perth Coastal Builders", category: "Builders", location: "Perth", state: "Western Australia", rating: 4.6, reviews: 112, phone: "+61 8 6234 5678", mapQuery: "Perth+Coastal+Builders+Perth+WA" },
  { id: 16, name: "Adelaide IT Consulting", category: "IT Services", location: "Adelaide", state: "South Australia", rating: 4.4, reviews: 54, phone: "+61 8 8345 6789", mapQuery: "Adelaide+IT+Consulting+Adelaide+SA" },
  { id: 17, name: "Gold Coast Premier Removals", category: "Removalists", location: "Gold Coast", state: "Queensland", rating: 4.9, reviews: 178, phone: "+61 7 5678 9012", mapQuery: "Gold+Coast+Premier+Removals+Gold+Coast+QLD" },
  { id: 18, name: "Canberra Bright Electricians", category: "Electricians", location: "Canberra", state: "Australian Capital Territory", rating: 4.5, reviews: 67, phone: "+61 2 6345 6789", mapQuery: "Canberra+Bright+Electricians+Canberra+ACT" },
  { id: 19, name: "Sydney Prime Accountants", category: "Accountants", location: "Sydney", state: "New South Wales", rating: 4.8, reviews: 198, phone: "+61 2 9456 7890", mapQuery: "Sydney+Prime+Accountants+Sydney+NSW" },
  { id: 20, name: "Melbourne Landscape Design", category: "Landscapers", location: "Melbourne", state: "Victoria", rating: 4.7, reviews: 143, phone: "+61 3 9345 6789", mapQuery: "Melbourne+Landscape+Design+Melbourne+VIC" },
];

const ITEMS_PER_PAGE = 6;

const BusinessCard = ({ business, index }: { business: Business; index: number }) => {
  const [showPhone, setShowPhone] = useState(false);
  const navigate = useNavigate();

  return (
    <Card
      className="overflow-hidden border border-border/60 bg-card hover:shadow-elevated transition-all duration-500 group"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="h-40 w-full bg-muted relative overflow-hidden">
        <iframe
          title={`Map for ${business.name}`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${business.mapQuery}`}
          allowFullScreen
        />
        <Badge
          variant="secondary"
          className="absolute top-3 left-3 text-xs font-medium bg-card/90 backdrop-blur-sm border-0 shadow-sm"
        >
          {business.category}
        </Badge>
      </div>

      <CardContent className="p-5 space-y-3">
        <h3 className="text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
          {business.name}
        </h3>

        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/60" />
          <span>{business.location}, {business.state}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(business.rating) ? "text-warning fill-warning" : "text-muted"}`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-foreground">{business.rating}</span>
          <span className="text-xs text-muted-foreground">({business.reviews})</span>
        </div>

        <div className="flex gap-2 pt-1">
          <Button
            size="sm"
            className="flex-1 gradient-primary text-primary-foreground hover:opacity-90 transition-opacity"
            onClick={() => navigate(`/business/${business.id}`)}
          >
            Details
          </Button>
          <Button
            size="sm"
            variant={showPhone ? "default" : "outline"}
            className="flex-1 text-xs"
            onClick={() => setShowPhone(!showPhone)}
          >
            <Phone className="h-3.5 w-3.5 mr-1" />
            {showPhone ? business.phone : "Phone"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const BusinessSearchSection = () => {
  const [keyword, setKeyword] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [locationOpen, setLocationOpen] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const locationRef = useRef<HTMLDivElement>(null);

  const filteredBusinesses = BUSINESSES.filter((b) => {
    const matchKeyword = !keyword || b.name.toLowerCase().includes(keyword.toLowerCase()) || b.category.toLowerCase().includes(keyword.toLowerCase());
    const matchOrg = !organization || organization === "All Organizations" || b.category === organization;
    const matchLocation = !location || b.location.toLowerCase().includes(location.toLowerCase()) || b.state.toLowerCase().includes(location.toLowerCase());
    return matchKeyword && matchOrg && matchLocation;
  });

  const totalPages = Math.ceil(filteredBusinesses.length / ITEMS_PER_PAGE);
  const paginatedBusinesses = filteredBusinesses.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => { setCurrentPage(1); }, [keyword, organization, location]);

  useEffect(() => {
    if (location.length > 0) {
      const filtered = LOCATION_SUGGESTIONS.filter((l) => l.toLowerCase().includes(location.toLowerCase()));
      setFilteredLocations(filtered);
      setLocationOpen(filtered.length > 0);
    } else {
      setFilteredLocations([]);
      setLocationOpen(false);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (locationRef.current && !locationRef.current.contains(e.target as Node)) {
        setLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14 animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Find a <span className="gradient-text">Business</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Search thousands of trusted businesses near you
          </p>
        </div>

        {/* Search Box */}
        <div
          className="bg-card rounded-2xl shadow-elevated p-4 sm:p-6 mb-10 sm:mb-14 border border-border/50 animate-[fadeInUp_0.6s_ease-out_0.15s_both]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Keyword */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search keyword..."
                aria-label="Search keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="flex h-11 w-full rounded-xl border border-input bg-secondary/50 pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              />
            </div>

            {/* Organization */}
            <Select value={organization} onValueChange={setOrganization}>
              <SelectTrigger className="h-11 rounded-xl border-input bg-secondary/50 focus:ring-2 focus:ring-ring">
                <Building2 className="h-4 w-4 mr-2 text-muted-foreground shrink-0" />
                <SelectValue placeholder="Organization" />
              </SelectTrigger>
              <SelectContent>
                {ORGANIZATIONS.map((org) => (
                  <SelectItem key={org} value={org}>{org}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location */}
            <div className="relative" ref={locationRef}>
              <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
              <input
                type="text"
                placeholder="Location..."
                aria-label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={() => { if (filteredLocations.length > 0) setLocationOpen(true); }}
                className="flex h-11 w-full rounded-xl border border-input bg-secondary/50 pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
              />
              {locationOpen && filteredLocations.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1.5 bg-popover border border-border rounded-xl shadow-elevated z-50 max-h-48 overflow-y-auto animate-[fadeInUp_0.2s_ease-out]">
                  {filteredLocations.map((loc) => (
                    <button
                      key={loc}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent/10 text-foreground transition-colors first:rounded-t-xl last:rounded-b-xl"
                      onClick={() => { setLocation(loc); setLocationOpen(false); }}
                    >
                      <MapPin className="h-3.5 w-3.5 inline mr-2 text-muted-foreground" />
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <Button className="h-11 rounded-xl gradient-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium">
              <Search className="h-4 w-4 mr-2" /> Search
            </Button>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6 animate-[fadeInUp_0.6s_ease-out_0.3s_both]">
          Showing <span className="font-semibold text-foreground">{filteredBusinesses.length}</span> businesses
        </p>

        {/* Business Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {paginatedBusinesses.map((business, i) => (
            <div key={business.id} className="animate-[fadeInUp_0.5s_ease-out_both]" style={{ animationDelay: `${i * 80 + 350}ms` }}>
              <BusinessCard business={business} index={i} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredBusinesses.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-muted-foreground/50" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-1">No businesses found</h3>
            <p className="text-muted-foreground text-sm">Try adjusting your search filters</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1.5 mt-10 animate-[fadeInUp_0.5s_ease-out_0.5s_both]">
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-lg"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                size="sm"
                className={`h-9 w-9 rounded-lg p-0 ${currentPage === page ? "gradient-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-lg"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessSearchSection;
