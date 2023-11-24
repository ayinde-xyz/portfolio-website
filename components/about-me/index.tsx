"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { BlurEffect1, BlurEffect2 } from "../blurEffect";
import { useScroll, useTransform, motion } from "framer-motion";

const AboutMe = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [1, 0.8], [0, 1]);
  const yText = useTransform(
    scrollYProgress,
    [0, 200, 300, 500],
    [0, 50, 50, 300]
  );
  // console.log(scale);
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
      <motion.div ref={targetRef} className="space-y-2">
        <motion.h2
          style={{ scale }}
          className="text-3xl bg-clip-text text-transparent font-bold text-center md:text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Ayinde AbdurRahman
        </motion.h2>

        <p className="mx-auto max-w-[700px] text-center text-zinc-500 md:text-lg/relaxed dark:text-zinc-400">
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
      </motion.div>
      <div className="flex space-x-4">
        <Link
          className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-900/80 dark:hover:text-zinc-50/80"
          href="https://www.linkedin.com/in/abdurrahman-ayinde-b918b5237"
          target="_blank"
          prefetch={false}>
          <Linkedin />
        </Link>
        <Link
          aria-label="GitHub"
          className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-900/80 dark:hover:text-zinc-50/80"
          href="https://github.com/ayinde-xyz"
          target="_blank"
          prefetch={false}>
          <Github />
        </Link>
        <Link
          className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-900/80 dark:hover:text-zinc-50/80"
          href="https://twitter.com/ayinde_xyz"
          target="_blank">
          <Twitter />
        </Link>
      </div>
      <BlurEffect2 />
    </section>
  );
};

export default AboutMe;
