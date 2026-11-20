import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WorkspaceLayout } from "@/app/components/layout/workspace-layout";

export default function NotFound() {
  return (
    <WorkspaceLayout>
      <section className="not-found-page">
        <div className="not-found-content">
          <div className="not-found-code" aria-hidden="true">404</div>
          <h1>We can&apos;t find that page</h1>
          <p>The page may have moved, or the address might be mistyped. Your workspace is still right where you left it.</p>
          <Link className="not-found-link" href="/">
            <ArrowLeft size={14} aria-hidden="true" />
            Back to overview
          </Link>
        </div>
      </section>
    </WorkspaceLayout>
  );
}
