import type { ReactNode } from "react";
import { WorkspaceLayout } from "@/app/components/layout/workspace-layout";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <WorkspaceLayout>{children}</WorkspaceLayout>;
}
