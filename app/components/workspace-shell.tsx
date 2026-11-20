"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BarChart3,
  Bell,
  Boxes,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  FileText,
  LayoutDashboard,
  Menu,
  Search,
  Settings,
  ShoppingCart,
  UsersRound,
  WalletCards,
  X,
  ArrowRight,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationItem {
  label: string;
  href: string;
  icon: LucideIcon;
  count?: string;
}

const navigationItems: NavigationItem[] = [
  { label: "Overview", href: "/", icon: LayoutDashboard },
  { label: "Finance", href: "/finance", icon: WalletCards },
  { label: "Sales & Orders", href: "/sales", icon: ShoppingCart, count: "12" },
  { label: "Purchasing", href: "/purchasing", icon: FileText },
  { label: "Inventory", href: "/inventory", icon: Boxes },
  { label: "People", href: "/people", icon: UsersRound },
  { label: "Reports", href: "/reports", icon: BarChart3 },
];

const utilityItems: NavigationItem[] = [
  { label: "Help & resources", href: "/help", icon: CircleHelp },
  { label: "Settings", href: "/settings", icon: Settings },
];

const routeTitles: Record<string, string> = {
  "/": "Overview",
  "/finance": "Finance",
  "/sales": "Sales & Orders",
  "/purchasing": "Purchasing",
  "/inventory": "Inventory",
  "/people": "People",
  "/reports": "Reports",
  "/users": "Users",
};

interface WorkspaceShellProps {
  children: React.ReactNode;
}

export function WorkspaceShell({ children }: WorkspaceShellProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentTitle = routeTitles[pathname] ?? "Workspace";

  function closeMobileNavigation() {
    setMobileOpen(false);
  }

  function renderNavigationItem(item: NavigationItem) {
    const Icon = item.icon;
    const isActive = pathname === item.href;

    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        onClick={closeMobileNavigation}
      >
        <Icon size={14} strokeWidth={1.8} aria-hidden="true" />
        <span>{item.label}</span>
        {item.count ? <span className="nav-count">{item.count}</span> : null}
      </Link>
    );
  }

  return (
    <div className="workspace-shell">
      <aside className={`sidebar${mobileOpen ? " sidebar-open" : ""}`} aria-label="Main navigation">
        <Link className="brand" href="/" onClick={closeMobileNavigation}>
          gather<span>ERP</span>
        </Link>

        <button className="workspace-picker" type="button">
          <span>
            <strong>Acme Studio</strong>
            <small>Your workspace</small>
          </span>
          <ChevronDown size={14} aria-hidden="true" />
        </button>

        <div className="nav-label">Workspace</div>
        <nav className="primary-nav" aria-label="Workspace">
          {navigationItems.map(renderNavigationItem)}
        </nav>

        <section className="sidebar-note" aria-label="Report suggestion">
          <strong>A little more clarity.</strong>
          <p>Your business, all together. Make room for what&apos;s next.</p>
          <Link href="/reports" onClick={closeMobileNavigation}>
            Explore reports <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </section>

        <nav className="sidebar-bottom" aria-label="Support and settings">
          {utilityItems.map(renderNavigationItem)}
        </nav>
        <p className="sidebar-meta">Gather ERP · v1.0</p>
      </aside>

      {mobileOpen ? (
        <button
          className="sidebar-scrim"
          type="button"
          aria-label="Close navigation"
          onClick={closeMobileNavigation}
        />
      ) : null}

      <div className="workspace-main">
        <header className="topbar">
          <Button
            className="mobile-menu-button"
            variant="ghost"
            size="icon"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((isOpen) => !isOpen)}
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </Button>

          <div className="breadcrumbs" aria-label="Breadcrumb">
            <span>Workspace</span>
            <ChevronRight size={12} aria-hidden="true" />
            <strong>{currentTitle}</strong>
          </div>

          <div className="topbar-actions">
            <label className="search-box">
              <Search size={13} aria-hidden="true" />
              <input aria-label="Search" type="search" placeholder="Search anything..." />
              <kbd>⌘ K</kbd>
            </label>
            <span className="topbar-divider" aria-hidden="true" />
            <Button className="icon-action" variant="ghost" size="icon" aria-label="Notifications">
              <Bell size={15} />
              <span className="notification-dot" />
            </Button>
            <span className="topbar-divider" aria-hidden="true" />
            <button className="account-button" type="button">
              <span className="account-avatar"><UserRound size={13} /></span>
              <span>My account</span>
              <ChevronDown size={13} aria-hidden="true" />
            </button>
          </div>
        </header>

        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
