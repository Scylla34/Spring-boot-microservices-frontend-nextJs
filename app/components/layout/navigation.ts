import {
  BarChart3,
  Boxes,
  CircleHelp,
  FileText,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

export interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
  count?: string;
}

export const workspaceNavigation: NavigationItem[] = [
  { label: "Overview", href: "/", icon: LayoutDashboard },
  { label: "Finance", href: "/finance", icon: WalletCards },
  { label: "Sales & Orders", href: "/sales", icon: ShoppingCart, count: "12" },
  { label: "Purchasing", href: "/purchasing", icon: FileText },
  { label: "Inventory", href: "/inventory", icon: Boxes },
  { label: "People", href: "/people", icon: UsersRound },
  { label: "Reports", href: "/reports", icon: BarChart3 },
];

export const utilityNavigation: NavigationItem[] = [
  { label: "Help & resources", href: "/help", icon: CircleHelp },
  { label: "Settings", href: "/settings", icon: Settings },
];

export function getRouteTitle(pathname: string): string {
  const item = [...workspaceNavigation, ...utilityNavigation].find(
    (navigationItem) => navigationItem.href === pathname,
  );

  if (item) {
    return item.label;
  }

  if (pathname === "/users") {
    return "Users";
  }

  return "Workspace";
}
