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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
