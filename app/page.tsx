import AboutMe from "@/components/about-me";
import Certifications from "@/components/certifications";
import ContactMe from "@/components/contact-me";
import IntroPage from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

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
