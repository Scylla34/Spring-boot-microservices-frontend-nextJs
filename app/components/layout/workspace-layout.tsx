"use client";

import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

interface WorkspaceLayoutProps {
  children: ReactNode;
}

export function WorkspaceLayout({ children }: WorkspaceLayoutProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeNavigation() {
    setMobileOpen(false);
  }

  return (
    <div className="workspace-shell">
      <Sidebar
        pathname={pathname}
        mobileOpen={mobileOpen}
        onNavigate={closeNavigation}
        onClose={closeNavigation}
      />
      <div className="workspace-main">
        <Navbar
          pathname={pathname}
          mobileOpen={mobileOpen}
          onMenuToggle={() => setMobileOpen((isOpen) => !isOpen)}
        />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}
