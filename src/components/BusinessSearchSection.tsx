import { useState, useRef, useEffect } from "react";
import { Search, MapPin, Building2, Phone, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  {
    id: 1,
    name: "Sydney Furniture Removalists",
    category: "Removalists",
    location: "Sydney",
    state: "New South Wales",
    rating: 4.8,
    reviews: 124,
    phone: "+61 2 9876 5432",
    mapQuery: "Sydney+Furniture+Removalists+Sydney+NSW",
  },
  {
    id: 2,
    name: "Melbourne Express Movers",
    category: "Removalists",
    location: "Melbourne",
    state: "Victoria",
    rating: 4.6,
    reviews: 89,
    phone: "+61 3 9123 4567",
    mapQuery: "Melbourne+Express+Movers+Melbourne+VIC",
  },
  {
    id: 3,
    name: "Brisbane Quick Removals",
    category: "Removalists",
    location: "Brisbane",
    state: "Queensland",
    rating: 4.7,
    reviews: 56,
    phone: "+61 7 3456 7890",
    mapQuery: "Brisbane+Quick+Removals+Brisbane+QLD",
  },
  {
    id: 4,
    name: "Perth Pro Plumbing",
    category: "Plumbers",
    location: "Perth",
    state: "Western Australia",
    rating: 4.9,
    reviews: 203,
    phone: "+61 8 6123 4567",
    mapQuery: "Perth+Pro+Plumbing+Perth+WA",
  },
  {
    id: 5,
    name: "Adelaide Spark Electricians",
    category: "Electricians",
    location: "Adelaide",
    state: "South Australia",
    rating: 4.5,
    reviews: 78,
    phone: "+61 8 8234 5678",
    mapQuery: "Adelaide+Electricians+Adelaide+SA",
  },
  {
    id: 6,
    name: "Gold Coast Clean Co",
    category: "Cleaning Services",
    location: "Gold Coast",
    state: "Queensland",
    rating: 4.4,
    reviews: 45,
    phone: "+61 7 5567 8901",
    mapQuery: "Gold+Coast+Cleaning+Services+Gold+Coast+QLD",
  },
];

const BusinessCard = ({ business }: { business: Business }) => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 group">
      {/* Embedded Google Map */}
      <div className="h-44 w-full bg-muted relative overflow-hidden">
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
      </div>

      <CardContent className="p-5 space-y-3">
        {/* Category Badge */}
        <Badge variant="secondary" className="text-xs font-medium">
          {business.category}
        </Badge>

        {/* Business Name */}
        <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors">
          {business.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <MapPin className="h-3.5 w-3.5" />
          <span>{business.state}</span>
        </div>
        <p className="text-sm text-foreground/80">{business.name}</p>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < Math.floor(business.rating) ? "text-warning" : "text-muted"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            {business.rating} ({business.reviews} reviews)
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button size="sm" className="flex-1 gradient-primary text-primary-foreground">
            Details
          </Button>
          <Button
            size="sm"
            variant={showPhone ? "default" : "outline"}
            className="flex-1"
            onClick={() => setShowPhone(!showPhone)}
          >
            <Phone className="h-3.5 w-3.5 mr-1" />
            {showPhone ? business.phone : "Show Phone"}
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
  const locationRef = useRef<HTMLDivElement>(null);

  const filteredBusinesses = BUSINESSES.filter((b) => {
    const matchKeyword =
      !keyword ||
      b.name.toLowerCase().includes(keyword.toLowerCase()) ||
      b.category.toLowerCase().includes(keyword.toLowerCase());
    const matchOrg =
      !organization ||
      organization === "All Organizations" ||
      b.category === organization;
    const matchLocation =
      !location ||
      b.location.toLowerCase().includes(location.toLowerCase()) ||
      b.state.toLowerCase().includes(location.toLowerCase());
    return matchKeyword && matchOrg && matchLocation;
  });

  useEffect(() => {
    if (location.length > 0) {
      const filtered = LOCATION_SUGGESTIONS.filter((l) =>
        l.toLowerCase().includes(location.toLowerCase())
      );
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
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Find a <span className="gradient-text">Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Search thousands of trusted businesses near you
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-card rounded-2xl shadow-elevated p-4 sm:p-6 mb-10 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Keyword Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search keyword..."
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Organization Dropdown */}
            <Select value={organization} onValueChange={setOrganization}>
              <SelectTrigger>
                <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Organization" />
              </SelectTrigger>
              <SelectContent>
                {ORGANIZATIONS.map((org) => (
                  <SelectItem key={org} value={org}>
                    {org}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Auto-suggest */}
            <div className="relative" ref={locationRef}>
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
              <Input
                placeholder="Location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10"
                onFocus={() => {
                  if (filteredLocations.length > 0) setLocationOpen(true);
                }}
              />
              {locationOpen && filteredLocations.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-elevated z-50 max-h-48 overflow-y-auto">
                  {filteredLocations.map((loc) => (
                    <button
                      key={loc}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-accent/10 text-foreground transition-colors"
                      onClick={() => {
                        setLocation(loc);
                        setLocationOpen(false);
                      }}
                    >
                      <MapPin className="h-3.5 w-3.5 inline mr-2 text-muted-foreground" />
                      {loc}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search Button */}
            <Button className="gradient-primary text-primary-foreground h-10">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground mb-6">
          Showing <span className="font-semibold text-foreground">{filteredBusinesses.length}</span> businesses
        </p>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBusinesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>

        {filteredBusinesses.length === 0 && (
          <div className="text-center py-16">
            <Building2 className="h-12 w-12 mx-auto text-muted-foreground/40 mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-1">No businesses found</h3>
            <p className="text-muted-foreground">Try adjusting your search filters</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BusinessSearchSection;
