import { Bell, ChevronDown, ChevronRight, Menu, Search, UserRound, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getRouteTitle } from "./navigation";

interface NavbarProps {
  pathname: string;
  mobileOpen: boolean;
  onMenuToggle: () => void;
}

export function Navbar({ pathname, mobileOpen, onMenuToggle }: NavbarProps) {
  return (
    <header className="topbar">
      <Button
        className="mobile-menu-button"
        variant="ghost"
        size="icon"
        aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={mobileOpen}
        onClick={onMenuToggle}
      >
        {mobileOpen ? <X size={17} /> : <Menu size={17} />}
      </Button>

      <div className="breadcrumbs" aria-label="Breadcrumb">
        <span>Workspace</span>
        <ChevronRight size={12} aria-hidden="true" />
        <strong>{getRouteTitle(pathname)}</strong>
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
  );
}
