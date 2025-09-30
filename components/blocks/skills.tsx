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
import prisma from "@/public/svg/prisma.svg";
import { Cascadia_Code } from "next/font/google";
import SkillBadge from "../badge";
import { BlurEffect1, BlurEffect2 } from "../blurEffect";

const cascadia = Cascadia_Code({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
});

const Skills = () => {
  return (
    <section
      id="skills"
      className="snap-start flex justify-center flex-col min-h-screen w-full">
      <BlurEffect1 />
      <h2
        className={`text-center tracking-tighter  ${cascadia.className} lg:text-4xl sm:text-2xl text-lg mb-10`}>
        Using the{" "}
        <span className="bg-linear-to-r  bg-clip-text text-transparent from-indigo-500 via-purple-500 to-pink-500">
          latest technologies
        </span>
        , I have incoporated the following tools in{" "}
        <span className="bg-linear-to-r  bg-clip-text text-transparent from-indigo-500 via-purple-500 to-pink-500">
          several websites
        </span>
      </h2>

      <div className="mb-12 mx-auto flex w-full flex-wrap items-center justify-center gap-10 px-5 sm:mb-24 sm:w-4/5 sm:px-0 lg:gap-16 xl:w-3/5">
        <SkillBadge src={next} alt="NextJS" className="dark:invert" />
        <SkillBadge src={react} alt="React JS" />
        <SkillBadge src={typescript} alt="Typescript" />
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
        <SkillBadge
          src={prisma}
          alt="Framer-Motion"
          className=" h-10 dark:invert"
        />
      </div>
      <BlurEffect2 />
    </section>
  );
};

export default Skills;
