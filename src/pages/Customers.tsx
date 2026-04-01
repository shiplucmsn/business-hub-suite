import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Mail, Phone, MoreHorizontal, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const customers = [
  { name: "Olivia Martin", email: "olivia@email.com", spent: "$4,299", orders: 12, status: "Active", joined: "Jan 2024" },
  { name: "Jackson Lee", email: "jackson@email.com", spent: "$2,150", orders: 8, status: "Active", joined: "Mar 2024" },
  { name: "Isabella Nguyen", email: "isabella@email.com", spent: "$1,890", orders: 5, status: "Inactive", joined: "Feb 2024" },
  { name: "William Kim", email: "william@email.com", spent: "$6,720", orders: 24, status: "Active", joined: "Dec 2023" },
  { name: "Sofia Davis", email: "sofia@email.com", spent: "$890", orders: 3, status: "Active", joined: "May 2024" },
  { name: "Liam Brown", email: "liam@email.com", spent: "$3,450", orders: 15, status: "Active", joined: "Apr 2024" },
];

export default function Customers() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Customers</h1>
            <p className="text-muted-foreground text-sm mt-1">CRM dashboard and customer management</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Total Customers", value: "2,350", sub: "+180 this month" },
            { label: "Active Customers", value: "1,890", sub: "80% active rate" },
            { label: "Avg. Lifetime Value", value: "$1,240", sub: "+12% vs last quarter" },
          ].map((s) => (
            <Card key={s.label} className="shadow-card border-border/50">
              <CardContent className="p-5">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-2xl font-bold mt-1">{s.value}</p>
                <p className="text-xs text-success mt-1">{s.sub}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">All Customers</CardTitle>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
                <Input placeholder="Search..." className="pl-8 h-8 w-48 bg-secondary border-none text-xs" />
              </div>
              <Button variant="outline" size="sm" className="h-8"><Filter className="h-3 w-3 mr-1" /> Filter</Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 text-left font-medium text-muted-foreground">Customer</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground hidden md:table-cell">Email</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Spent</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground hidden lg:table-cell">Orders</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground"></th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((c) => (
                    <tr key={c.email} className="border-b border-border/50 last:border-0">
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <div className="gradient-primary h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                            <span className="text-xs font-semibold text-primary-foreground">{c.name.split(" ").map(n => n[0]).join("")}</span>
                          </div>
                          <span className="font-medium">{c.name}</span>
                        </div>
                      </td>
                      <td className="py-3 text-muted-foreground hidden md:table-cell">{c.email}</td>
                      <td className="py-3 font-medium">{c.spent}</td>
                      <td className="py-3 hidden lg:table-cell">{c.orders}</td>
                      <td className="py-3">
                        <Badge variant="secondary" className={c.status === "Active" ? "bg-success/10 text-success border-0" : ""}>{c.status}</Badge>
                      </td>
                      <td className="py-3">
                        <Button variant="ghost" size="icon" className="h-7 w-7"><MoreHorizontal className="h-3 w-3" /></Button>
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
