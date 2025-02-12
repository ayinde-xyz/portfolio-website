import Image, { StaticImageData } from "next/image";
import React from "react";
import next from "@/public/svg/next.svg";
import react from "@/public/svg/react.svg";
import typescript from "@/public/svg/typescript.svg";
import tailwindcss from "@/public/svg/tailwindcss.svg";
import graphql from "@/public/svg/graphql.svg";
import sanity from "@/public/svg/sanity.svg";
import framer from "@/public/svg/framer.svg";
import stripe from "@/public/svg/stripe.svg";
import firebase from "@/public/svg/firebase.svg";

const SkillBadge = ({
  src,
  alt,
  className,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) => {
  return (
    <figure>
      <Image
        className={`h-10 w-max md:h-12 lg:h-16 dark:drop-shadow-[0_0_0.3rem_#ffffff70] ${className}`}
        width={100}
        height={100}
        src={src}
        alt={alt}
        priority
      />
    </figure>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="snap-center snap-always min-h-screen w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <h2 className="text-center lg:text-4xl sm:text-2xl text-lg mb-10">
        Using the latest technologies, I have incoporated the following tools in
        several websites
      </h2>

      <div className="mb-12 mx-auto flex w-full flex-wrap items-center justify-center gap-10 px-5 sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5">
        <SkillBadge src={next} alt="NextJS" className="dark:invert" />
        <SkillBadge src={react} alt="React JS" />
        <SkillBadge src={typescript} alt="React JS" />
        <SkillBadge
          src={tailwindcss}
          alt="Tailwind CSS"
          className="dark:invert"
        />
        <SkillBadge src={graphql} alt="GraphQL" className="dark:invert" />
        <SkillBadge src={sanity} alt="Sanity" className="" />
        <SkillBadge
          src={framer}
          alt="Framer-Motion"
          className="dark:invert h-10"
        />
        <SkillBadge
          src={stripe}
          alt="Framer-Motion"
          className="dark:invert h-10"
        />
        <SkillBadge src={firebase} alt="Framer-Motion" className=" h-10" />
      </div>
    </section>
  );
};

export default Skills;
