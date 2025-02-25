import { ChevronsDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BlurEffect1, BlurEffect2 } from "../blurEffect";

const IntroPage = async () => {
  return (
    <section
      id="intro"
      className="snap-center relative top-20 snap-normal min-h-screen w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <BlurEffect1 />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to My Portfolio
            </h1>
            <p className="max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
              I am a front-end developer with a passion for creating beautiful
              and accessible web experiences.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow-sm transition-colors hover:bg-zinc-900/90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
              href="#">
              Hire Me
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 shadow-sm transition-colors hover:bg-zinc-900/90 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
              href="/blogs">
              Blogs
            </Link>
          </div>
          <div>
            <Link href={"#about-me"} className=" relative top-16">
              <ChevronsDown className="animate-bounce h-10 w-10 md:h-16 md:w-16" />
            </Link>
          </div>
        </div>
      </div>
      <BlurEffect2 />
    </section>
  );
};

export default IntroPage;
