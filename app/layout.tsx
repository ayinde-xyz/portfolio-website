import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ToasterProvider } from "@/providers/toast-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Ayinde AbdurRahman",
//   description: "My personal portfolio website built with Next.js and React",
//   metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
//   authors: { name: "Ayinde AbdurRahman" },
//   openGraph: {
//     title: "Ayinde AbdurRahman",
//     description: "My personal portfolio website built with Next.js and React",
//     url: "https://ayindeabdulrahman.vercel.app",
//     siteName: "Ayinde AbdurRahman",
//     images: [
//       {
//         url: "https://media.istockphoto.com/id/929848296/photo/top-view-of-business-workplace-with-laptop-and-coffee-cup.jpg?s=612x612&w=0&k=20&c=YAUk15S7WVFt8YjgWaWFvPbumVdZ0viYsPYVss2OUOk=",
//         width: 800,
//         height: 600,
//         alt: "Ayinde AbdurRahman",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Ayinde AbdurRahman",
//     description: "My personal portfolio website built with Next.js and React",
//     site: "@ayinde_xyz",
//     creator: "@ayinde_xyz",
//     images: {
//       url: "https://media.istockphoto.com/id/929848296/photo/top-view-of-business-workplace-with-laptop-and-coffee-cup.jpg?s=612x612&w=0&k=20&c=YAUk15S7WVFt8YjgWaWFvPbumVdZ0viYsPYVss2OUOk=",
//       alt: "Built by Ayinde AbdurRahman",
//     },
//   },
// };

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
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

// ↑ @emailjs/browser 3.12.1 → 4.4.1
// ↑ @types/node 20.17.6 → 22.13.1
// ↑ @types/react 18.3.12 → 19.0.8
// ↑ @types/react-dom 18.3.1 → 19.0.3
// ↑ eslint 8.57.1 → 9.20.1
// ↑ eslint-config-next 14.0.2 → 15.1.7
// ↑ postcss 8.4.49 → 8.5.2
// ↑ tailwind-scrollbar 3.1.0 → 4.0.0
// ↑ tailwindcss 3.4.14 → 4.0.6
// ↑ typescript 5.6.3 → 5.7.3
// ↑ @hookform/resolvers 3.9.1 → 4.0.0
// ↑ @radix-ui/react-dropdown-menu 2.1.2 → 2.1.6
// ↑ @radix-ui/react-label 2.1.0 → 2.1.2
// ↑ @radix-ui/react-slot 1.1.0 → 1.1.2
// ↑ @vercel/analytics 1.4.0 → 1.5.0
// ↑ axios 1.7.7 → 1.7.9
// ↑ class-variance-authority 0.7.0 → 0.7.1
// ↑ framer-motion 11.11.13 → 12.4.2
// ↑ lucide-react 0.292.0 → 0.475.0
// ↑ next 14.2.17 → 15.1.7
// ↑ next-themes 0.2.1 → 0.4.4
// ↑ react 18.3.1 → 19.0.0
// ↑ react-dom 18.3.1 → 19.0.0
// ↑ react-hook-form 7.53.2 → 7.54.2
// ↑ react-hot-toast 2.4.1 → 2.5.1
// ↑ resend 2.1.0 → 4.1.2
// ↑ styled-components 6.1.13 → 6.1.15
// ↑ tailwind-merge 2.5.4 → 3.0.1
// ↑ zod 3.23.8 → 3.24.2

// ↑ @types/node 22.13.5 → 22.13.8
// ↑ eslint-config-next 15.1.7 → 15.2.0
// ↑ typescript 5.7.3 → 5.8.2
// ↑ @sanity/client 6.28.1 → 6.28.2
// ↑ @sanity/icons 3.6.0 → 3.7.0
// ↑ lucide-react 0.476.0 → 0.477.0
// ↑ next 15.1.7 → 15.2.0
