import AboutMe from "@/components/blocks/about-me";
import Certifications from "@/components/blocks/certifications";
import ContactMe from "@/components/blocks/contact-me";
import Experience from "@/components/blocks/experience";
import IntroPage from "@/components/blocks/intro";
import Projects from "@/components/blocks/projects";
import Skills from "@/components/blocks/skills";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { INTRO_QUERY } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  const { data: metadataInfo } = await sanityFetch({ query: INTRO_QUERY });

  if (!metadataInfo) {
    return {};
  }
  return {
    title: metadataInfo.seo.title,
    description: metadataInfo.seo.description,
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    authors: { name: "Ayinde AbdurRahman" },
    openGraph: {
      title: metadataInfo.seo.title!,
      description: metadataInfo.seo.description!,
      url: "https://ayindeabdulrahman.vercel.app",
      siteName: "Ayinde AbdurRahman",
      images: [
        metadataInfo.seo.image ? urlFor(metadataInfo.seo.image).url() : "",
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
      images: [
        metadataInfo?.seo.image ? urlFor(metadataInfo.seo.image).url() : "",
      ],
    },
  };
};

export default function Home() {
  // console.log(aboutMe);
  return (
    <main className="min-h-screen ">
      {/* Intro Page */}
      <IntroPage />
      {/* About me */}
      <AboutMe />
      {/* Projects */}
      <Projects />
      {/* Certifications */}
      <Certifications />
      {/* Skills */}
      <Skills />
      {/* Experience */}
      <Experience />
      {/* Contact Me */}
      <ContactMe />
    </main>
  );
}
