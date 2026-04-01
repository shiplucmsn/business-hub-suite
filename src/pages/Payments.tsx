import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, ArrowUpRight, Download, Send, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const invoices = [
  { id: "INV-001", client: "Acme Corp", amount: "$2,500", date: "Mar 15, 2024", status: "Paid", due: "Mar 30" },
  { id: "INV-002", client: "TechStart Inc", amount: "$1,200", date: "Mar 18, 2024", status: "Pending", due: "Apr 2" },
  { id: "INV-003", client: "Design Co", amount: "$3,800", date: "Mar 20, 2024", status: "Overdue", due: "Mar 25" },
  { id: "INV-004", client: "Global LLC", amount: "$950", date: "Mar 22, 2024", status: "Paid", due: "Apr 6" },
  { id: "INV-005", client: "StartupXYZ", amount: "$4,200", date: "Mar 25, 2024", status: "Draft", due: "—" },
];

const statusColors: Record<string, string> = {
  Paid: "bg-success/10 text-success",
  Pending: "bg-warning/10 text-warning",
  Overdue: "bg-destructive/10 text-destructive",
  Draft: "bg-secondary text-muted-foreground",
};

export default function Payments() {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Payments & Invoices</h1>
            <p className="text-muted-foreground text-sm mt-1">Track payments and manage invoices</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline"><Download className="h-4 w-4 mr-2" /> Export</Button>
            <Button className="gradient-primary text-primary-foreground">
              <Send className="h-4 w-4 mr-2" /> New Invoice
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Total Revenue", value: "$45,231", change: "+20.1%" },
            { label: "Pending", value: "$5,400", change: "3 invoices" },
            { label: "Overdue", value: "$3,800", change: "1 invoice" },
            { label: "This Month", value: "$12,650", change: "+8.4%" },
          ].map((s) => (
            <Card key={s.label} className="shadow-card border-border/50">
              <CardContent className="p-5">
                <p className="text-xs text-muted-foreground">{s.label}</p>
                <p className="text-2xl font-bold mt-1">{s.value}</p>
                <p className="text-xs text-success mt-1 flex items-center gap-0.5">
                  <ArrowUpRight className="h-3 w-3" /> {s.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold">Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 text-left font-medium text-muted-foreground">Invoice</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Client</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground hidden md:table-cell">Date</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground hidden lg:table-cell">Due</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Amount</th>
                    <th className="pb-3 text-left font-medium text-muted-foreground">Status</th>
                    <th className="pb-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="border-b border-border/50 last:border-0">
                      <td className="py-3 font-medium">{inv.id}</td>
                      <td className="py-3">{inv.client}</td>
                      <td className="py-3 text-muted-foreground hidden md:table-cell">{inv.date}</td>
                      <td className="py-3 text-muted-foreground hidden lg:table-cell">{inv.due}</td>
                      <td className="py-3 font-medium">{inv.amount}</td>
                      <td className="py-3">
                        <Badge className={`${statusColors[inv.status]} border-0`}>{inv.status}</Badge>
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
