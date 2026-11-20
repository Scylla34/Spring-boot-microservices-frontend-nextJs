import type { ReactNode } from "react";
import { AuthLayout } from "@/app/components/layout/auth-layout";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <AuthLayout>{children}</AuthLayout>;
}
