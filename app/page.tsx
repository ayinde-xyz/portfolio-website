import AboutMe from "@/components/blocks/about-me";
import Certifications from "@/components/blocks/certifications";
import ContactMe from "@/components/blocks/contact-me";
import IntroPage from "@/components/blocks/intro";
import Projects from "@/components/blocks/projects";
import Skills from "@/components/blocks/skills";

export default function Home() {
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
      {/* Contact Me */}
      <ContactMe />
    </main>
  );
}
