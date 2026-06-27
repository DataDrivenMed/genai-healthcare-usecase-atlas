import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "LSUHSC Generative AI Use-Case Atlas",
  description: "Teaching, clinical care, research, operations, models, governance, and partner-governed implementation pathways for academic health sciences."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main id="main" className="min-h-screen">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
