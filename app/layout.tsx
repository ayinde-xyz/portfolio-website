import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayinde AbdulRahman",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="scroll-smooth md:scrollbar-thin md:scrollbar-thumb-rounded-md md:scrollbar-thumb-gray-900 "
      lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ToasterProvider />
          <Header />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
