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

  return {
    title: metadataInfo?.seo.title,
    description: metadataInfo?.seo.description,
    openGraph: {
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
