// app/layout.jsx file

import { ReactNode } from 'react';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        <header>
            <h1>Header Element</h1>
            <p>Header will remain here, when user is navigating</p>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
