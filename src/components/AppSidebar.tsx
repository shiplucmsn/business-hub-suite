import {
  LayoutDashboard,
  Globe,
  Server,
  Building2,
  Briefcase,
  ShoppingBag,
  Users,
  CreditCard,
  FileText,
  Crown,
  Megaphone,
  UserCheck,
  ExternalLink,
  Settings,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNav = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Website Builder", url: "/website-builder", icon: Globe },
  { title: "Domain & Hosting", url: "/domains", icon: Server },
  { title: "Company Page", url: "/company", icon: Building2 },
];

const businessNav = [
  { title: "Services", url: "/services", icon: Briefcase },
  { title: "Products", url: "/products", icon: ShoppingBag },
  { title: "Job Board", url: "/jobs", icon: FileText },
  { title: "Marketplace", url: "/marketplace", icon: Megaphone },
];

const managementNav = [
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Leads", url: "/leads", icon: UserCheck },
  { title: "Payments", url: "/payments", icon: CreditCard },
  { title: "Subscription", url: "/subscription", icon: Crown },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  const renderGroup = (label: string, items: typeof mainNav) => (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.url}
                  end={item.url === "/dashboard"}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  activeClassName="bg-sidebar-accent text-sidebar-accent-foreground"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="gradient-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
            <LayoutDashboard className="h-4 w-4 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-lg font-bold tracking-tight text-sidebar-foreground">
              TradingHub
            </span>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2">
        {renderGroup("Overview", mainNav)}
        {renderGroup("Business", businessNav)}
        {renderGroup("Management", managementNav)}
      </SidebarContent>
      <SidebarFooter className="p-4 space-y-2">
        {!collapsed && (
          <>
            <a
              href="/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-secondary/50 p-3 text-sm text-foreground hover:bg-secondary transition-colors"
            >
              <ExternalLink className="h-4 w-4 text-primary" />
              <span>View Frontend</span>
            </a>
            <div className="rounded-lg bg-sidebar-accent p-3">
              <p className="text-xs font-medium text-sidebar-accent-foreground">Free Plan</p>
              <p className="mt-1 text-xs text-muted-foreground">Upgrade to Pro</p>
            </div>
          </>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
