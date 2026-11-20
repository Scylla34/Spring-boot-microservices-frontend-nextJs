import { ReactNode } from 'react';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { WorkspaceShell } from "@/app/components/workspace-shell";
import "./globals.css";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <WorkspaceShell>{children}</WorkspaceShell>
      </body>
    </html>
  );
}
