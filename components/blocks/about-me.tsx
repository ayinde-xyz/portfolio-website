import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "@/components/typewriter";
import { BlurEffect1, BlurEffect2 } from "../blurEffect";
import { sanityFetch } from "@/sanity/lib/live";
import { INTRO_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const AboutMe = async () => {
  const { data: aboutMe } = await sanityFetch({ query: INTRO_QUERY });

  return (
    <section
      id="about-me"
      className="relative min-h-screen snap-center snap-normal flex flex-col items-center justify-center space-y-4 p-4 md:space-y-6 md:p-6">
      <BlurEffect1 />
      <div className="w-24 h-24 md:w-32 md:h-32">
        <Image
          alt="Profile Picture"
          className="object-cover rounded-full"
          height="128"
          src={
            aboutMe?.image
              ? urlFor(aboutMe.image).width(128).height(128).url()
              : "https://via.placeholder.com/128"
          }
          priority
          style={{
            aspectRatio: "128/128",
            objectFit: "cover",
          }}
          width="128"
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl bg-clip-text text-transparent font-bold text-center md:text-4xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500">
          {aboutMe?.name || "Ayinde AbdurRahman"}
        </h2>

        <p className="mx-auto max-w-[700px] text-center text-zinc-500 md:text-lg/relaxed dark:text-zinc-400">
          I am a {aboutMe?.role && <Typewriter role={aboutMe.role} />}
        </p>
      </div>
      <div className="flex space-x-4">
        {aboutMe?.socials?.linkedin && (
          <Link
            className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-900/80 dark:hover:text-zinc-50/80"
            href={aboutMe.socials.linkedin}
            target="_blank"
            prefetch={false}>
            <Linkedin />
          </Link>
        )}
        {aboutMe?.socials?.github && (
          <Link
            aria-label="GitHub"
            className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-900/80 dark:hover:text-zinc-50/80"
            href={aboutMe.socials.github}
            target="_blank"
            prefetch={false}>
            <Github />
          </Link>
        )}
        {aboutMe?.socials?.twitter && (
          <Link
            className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-900/80 dark:hover:text-zinc-50/80"
            href={aboutMe.socials.twitter}
            target="_blank">
            <Twitter />
          </Link>
        )}
      </div>
      <BlurEffect2 />
    </section>
  );
};

export default AboutMe;
