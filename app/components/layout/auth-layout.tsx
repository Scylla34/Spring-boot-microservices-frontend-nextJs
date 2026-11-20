import Link from "next/link";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="auth-layout">
      <section className="auth-panel">
        <Link className="brand auth-brand" href="/">
          gather<span>ERP</span>
        </Link>
        <div className="auth-content">{children}</div>
        <p className="auth-footnote">Secure access to your Gather workspace.</p>
      </section>
      <aside className="auth-aside" aria-label="Gather workspace">
        <div className="auth-aside-mark">gather<span>ERP</span></div>
        <p>Everything in its right place.</p>
        <span>One clear view of your business.</span>
      </aside>
    </main>
  );
}
