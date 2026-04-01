import { Bell, Package, CreditCard, Users, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const notifications = [
  { id: 1, icon: Package, title: "New order received", desc: "Order #3211 from Sarah Wilson", time: "2 min ago", unread: true },
  { id: 2, icon: CreditCard, title: "Payment confirmed", desc: "$1,999 received for Web Design", time: "1 hour ago", unread: true },
  { id: 3, icon: Users, title: "New customer signed up", desc: "James Brown joined your platform", time: "3 hours ago", unread: false },
  { id: 4, icon: MessageSquare, title: "New review posted", desc: "5-star review on Logo Design", time: "5 hours ago", unread: false },
];

export function NotificationDropdown() {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full gradient-primary flex items-center justify-center">
              <span className="text-[10px] font-bold text-primary-foreground">{unreadCount}</span>
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          {unreadCount > 0 && (
            <span className="text-xs font-normal text-primary cursor-pointer hover:underline">
              Mark all as read
            </span>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {notifications.map((n) => (
          <DropdownMenuItem key={n.id} className="flex items-start gap-3 p-3 cursor-pointer">
            <div className={`rounded-lg p-2 shrink-0 ${n.unread ? "gradient-primary" : "bg-secondary"}`}>
              <n.icon className={`h-4 w-4 ${n.unread ? "text-primary-foreground" : "text-muted-foreground"}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm ${n.unread ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                {n.title}
              </p>
              <p className="text-xs text-muted-foreground truncate">{n.desc}</p>
              <p className="text-xs text-muted-foreground/70 mt-0.5">{n.time}</p>
            </div>
            {n.unread && <span className="h-2 w-2 rounded-full gradient-primary shrink-0 mt-1.5" />}
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-center justify-center text-sm text-primary cursor-pointer">
          View all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
