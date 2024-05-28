import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayinde AbdurRahman",
  description: "My personal portfolio website built with Next.js and React",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  authors: { name: "Ayinde AbdurRahman" },
  openGraph: {
    title: "Ayinde AbdurRahman",
    description: "My personal portfolio website built with Next.js and React",
    url: "https://ayindeabdulrahman.vercel.app",
    siteName: "Ayinde AbdurRahman",
    images: [
      {
        url: "https://media.istockphoto.com/id/929848296/photo/top-view-of-business-workplace-with-laptop-and-coffee-cup.jpg?s=612x612&w=0&k=20&c=YAUk15S7WVFt8YjgWaWFvPbumVdZ0viYsPYVss2OUOk=",
        width: 800,
        height: 600,
        alt: "Ayinde AbdurRahman",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayinde AbdurRahman",
    description: "My personal portfolio website built with Next.js and React",
    site: "@ayinde_xyz",
    creator: "@ayinde_xyz",
    images: {
      url: "https://media.istockphoto.com/id/929848296/photo/top-view-of-business-workplace-with-laptop-and-coffee-cup.jpg?s=612x612&w=0&k=20&c=YAUk15S7WVFt8YjgWaWFvPbumVdZ0viYsPYVss2OUOk=",
      alt: "Built by Ayinde AbdurRahman",
    },
  },
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
