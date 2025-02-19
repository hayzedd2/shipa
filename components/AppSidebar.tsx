import {
  BoxIcon,
  Calendar,
  ChartNoAxesColumn,
  ChartSpline,
  CircleHelp,
  Container,
  Home,
  Inbox,
  LayoutDashboard,
  LayoutGrid,
  PackageIcon,
  PackageSearch,
  ScrollText,
  Search,
  Settings,
  ShieldCheck,
  Users,
  Warehouse,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { UserMenu } from "./UserMenu";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutGrid,
  },
  {
    title: "Tracking",
    url: "#",
    icon: PackageSearch,
  },
  {
    title: "Orders",
    url: "#",
    icon: ScrollText,
  },
  {
    title: "Drivers",
    url: "#",
    icon: Users,
  },
  {
    title: "Analytics",
    url: "#",
    icon: ChartNoAxesColumn,
  },
  {
    title: "Warehouse",
    url: "#",
    icon: Container,
  },
  {
    title: "Insurance",
    url: "#",
    icon: ShieldCheck,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Help center",
    url: "#",
    icon: CircleHelp,
  },
];

export function AppSidebar() {
  return (
    <Sidebar >
      <div className="h-14 dotted-down flex items-center   mx-5">
        <div className="logo gap-2 flex items-center">
          <PackageIcon size={18} className="icon-color" />
          <h1 className="font-[600] text-[1.5rem] mt-[2px]">Shipa</h1>
        </div>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[14px]">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.slice(0, 7).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="text-muted-foreground" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[14px]">Support</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.slice(7, 9).map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="text-muted-foreground" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  );
}
