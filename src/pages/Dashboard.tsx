import { DashboardLayout } from "@/components/DashboardLayout";
import {
  TrendingUp,
  Users,
  ShoppingBag,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const stats = [
  { label: "Total Revenue", value: "$45,231", change: "+20.1%", up: true, icon: DollarSign },
  { label: "Active Customers", value: "2,350", change: "+15.3%", up: true, icon: Users },
  { label: "Orders", value: "1,247", change: "+8.2%", up: true, icon: ShoppingBag },
  { label: "Conversion Rate", value: "3.2%", change: "-2.1%", up: false, icon: TrendingUp },
];

const revenueData = [
  { name: "Jan", revenue: 4000, orders: 240 },
  { name: "Feb", revenue: 3000, orders: 198 },
  { name: "Mar", revenue: 5000, orders: 305 },
  { name: "Apr", revenue: 4500, orders: 280 },
  { name: "May", revenue: 6000, orders: 390 },
  { name: "Jun", revenue: 5500, orders: 350 },
  { name: "Jul", revenue: 7000, orders: 420 },
];

const recentOrders = [
  { id: "#3210", customer: "Olivia Martin", product: "Web Design Package", amount: "$1,999", status: "Completed" },
  { id: "#3209", customer: "Jackson Lee", product: "SEO Service", amount: "$499", status: "Processing" },
  { id: "#3208", customer: "Isabella Nguyen", product: "Logo Design", amount: "$299", status: "Completed" },
  { id: "#3207", customer: "William Kim", product: "E-commerce Setup", amount: "$2,499", status: "Pending" },
  { id: "#3206", customer: "Sofia Davis", product: "Content Writing", amount: "$149", status: "Completed" },
];

const statusColors: Record<string, string> = {
  Completed: "bg-success/10 text-success",
  Processing: "bg-info/10 text-info",
  Pending: "bg-warning/10 text-warning",
};

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Welcome back, John. Here's your business overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-card border-border/50">
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div className="rounded-lg bg-secondary p-2">
                    <stat.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className={`flex items-center gap-0.5 text-xs font-medium ${stat.up ? "text-success" : "text-destructive"}`}>
                    {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {stat.change}
                  </span>
                </div>
                <div className="mt-3">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid gap-4 lg:grid-cols-7">
          <Card className="lg:col-span-4 shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-semibold">Revenue Overview</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(234, 85%, 55%)" stopOpacity={0.15} />
                      <stop offset="95%" stopColor="hsl(234, 85%, 55%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 90%)" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(234, 85%, 55%)"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorRevenue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="lg:col-span-3 shadow-card border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-base font-semibold">Orders</CardTitle>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 90%)" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(220, 10%, 46%)" />
                  <Tooltip />
                  <Bar dataKey="orders" fill="hsl(250, 70%, 58%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card className="shadow-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Recent Orders</CardTitle>
            <Button variant="ghost" size="sm" className="text-xs text-primary">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 text-left font-medium text-muted-foreground">Order</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Customer</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground hidden md:table-cell">Product</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Amount</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-border/50 last:border-0">
                      <td className="py-3 font-medium">{order.id}</td>
                      <td className="py-3">{order.customer}</td>
                      <td className="py-3 hidden md:table-cell text-muted-foreground">{order.product}</td>
                      <td className="py-3 font-medium">{order.amount}</td>
                      <td className="py-3">
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[order.status]}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
