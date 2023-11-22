"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { BlurEffect1, BlurEffect2 } from "../blurEffect";

const AboutMe = () => {
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
          src="/placeholder.svg"
          style={{
            aspectRatio: "128/128",
            objectFit: "cover",
          }}
          width="128"
        />
      </div>
      <div className="space-y-2">
        <h2 className="text-3xl bg-clip-text text-transparent font-bold text-center md:text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Ayinde AbdurRahman
        </h2>

        <p className="mx-auto max-w-[700px] text-zinc-500 md:text-lg/relaxed dark:text-zinc-400">
          I am a{" "}
          <Typewriter
            words={["Front-End Developer", "Medical Student", "Freelancer"]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </p>
      </div>
      <div className="flex space-x-4">
        <Link
          className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-900/80 dark:hover:text-zinc-50/80"
          href="#">
          <Linkedin />
        </Link>
        <Link
          aria-label="GitHub"
          className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-900/80 dark:hover:text-zinc-50/80"
          href="#">
          <Github />
        </Link>
        <Link
          className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-900/80 dark:hover:text-zinc-50/80"
          href="#">
          <Twitter />
        </Link>
      </div>
      <BlurEffect2 />
    </section>
  );
};

export default AboutMe;
