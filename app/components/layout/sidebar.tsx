import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { utilityNavigation, workspaceNavigation, type NavigationItem } from "./navigation";

interface SidebarProps {
  pathname: string;
  mobileOpen: boolean;
  onNavigate: () => void;
  onClose: () => void;
}

function NavigationLinks({
  items,
  pathname,
  onNavigate,
}: {
  items: NavigationItem[];
  pathname: string;
  onNavigate: () => void;
}) {
  return items.map((item) => {
    const Icon = item.icon;
    const isActive = pathname === item.href;

    return (
      <Link
        key={item.href}
        href={item.href}
        aria-current={isActive ? "page" : undefined}
        onClick={onNavigate}
      >
        <Icon size={14} strokeWidth={1.8} aria-hidden="true" />
        <span>{item.label}</span>
        {item.count ? <span className="nav-count">{item.count}</span> : null}
      </Link>
    );
  });
}

export function Sidebar({ pathname, mobileOpen, onNavigate, onClose }: SidebarProps) {
  return (
    <>
      <aside className={`sidebar${mobileOpen ? " sidebar-open" : ""}`} aria-label="Main navigation">
        <Link className="brand" href="/" onClick={onNavigate}>
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
          <NavigationLinks items={workspaceNavigation} pathname={pathname} onNavigate={onNavigate} />
        </nav>

        <section className="sidebar-note" aria-label="Report suggestion">
          <strong>A little more clarity.</strong>
          <p>Your business, all together. Make room for what&apos;s next.</p>
          <Link href="/reports" onClick={onNavigate}>
            Explore reports <ArrowRight size={13} aria-hidden="true" />
          </Link>
        </section>

        <nav className="sidebar-bottom" aria-label="Support and settings">
          <NavigationLinks items={utilityNavigation} pathname={pathname} onNavigate={onNavigate} />
        </nav>
        <p className="sidebar-meta">Gather ERP · v1.0</p>
      </aside>

      {mobileOpen ? (
        <button
          className="sidebar-scrim"
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
        />
      ) : null}
    </>
  );
}
