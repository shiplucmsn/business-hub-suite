import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import WebsiteBuilder from "./pages/WebsiteBuilder";
import Domains from "./pages/Domains";
import CompanyPage from "./pages/CompanyPage";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Jobs from "./pages/Jobs";
import Marketplace from "./pages/Marketplace";
import Customers from "./pages/Customers";
import Payments from "./pages/Payments";
import Subscription from "./pages/Subscription";
import Leads from "./pages/Leads";
import BusinessDetail from "./pages/BusinessDetail";
import FrontendLeads from "./pages/FrontendLeads";
import Wholesale from "./pages/Wholesale";
import ConsumerShopping from "./pages/ConsumerShopping";
import Settings from "./pages/Settings";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import CompanyDirectory from "./pages/CompanyDirectory";
import CompanyProfile from "./pages/CompanyProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/directory" element={<CompanyDirectory />} />
          <Route path="/company-profile/:id" element={<CompanyProfile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/website-builder" element={<WebsiteBuilder />} />
          <Route path="/domains" element={<Domains />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/business/:id" element={<BusinessDetail />} />
          <Route path="/frontend-leads" element={<FrontendLeads />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/consumer-shopping" element={<ConsumerShopping />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
