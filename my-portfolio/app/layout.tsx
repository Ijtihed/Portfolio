import type { Metadata } from "next";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Moon } from "lucide-react";
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/react"

const anekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "Islam Tayeb",
  description: "Islam Tayeb's Portfolio",
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple:[ '/favicon.ico?v=4'],
  },
  }

  export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistMono.variable, GeistSans.variable, anekTelugu.variable, "font-mono h-full bg-background text-foreground")}>
        {children}
        <SpeedInsights />
        <Analytics/>
        <Toaster />
      </body>
    </html>
  );
}
