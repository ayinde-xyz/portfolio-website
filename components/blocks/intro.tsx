import { ChevronsDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { BlurEffect1, BlurEffect2 } from "../blurEffect";
import { Cascadia_Code } from "next/font/google";

const cascadia = Cascadia_Code({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
});

const IntroPage = async () => {
  // const sectionRef = useRef<HTMLDivElement>(null);
  // const [inView, setInView] = useState(false);

  // useEffect(() => {
  //   const observer = new window.IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         setInView(true);
  //       }
  //     },
  //     { threshold: 0.3 }
  //   );
  //   if (sectionRef.current) {
  //     observer.observe(sectionRef.current);
  //   }
  //   return () => {
  //     if (sectionRef.current) {
  //       observer.unobserve(sectionRef.current);
  //     }
  //   };
  // }, []);

  return (
    <section
      id="intro"
      className="snap-start  min-h-screen flex flex-col justify-center w-full">
      <BlurEffect1 />
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-10">
            <h1
              className={`text-6xl  bg-clip-text text-transparent bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500  tracking-tighter sm:text-7xl md:text-8xl lg:text-10xl/none`}>
              Hi I&apos;m Ayinde AbdurRahman
            </h1>
            <h1
              className={`${cascadia.className} text-zinc-500 md:text-xl  dark:text-zinc-400 `}>
              A fullstack developer with a passion for creating beautiful and
              accessible web experiences.
            </h1>
          </div>
          <div className="flex gap-3">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md  bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 text-sm text-zinc-50 shadow-sm transition-colors hover:bg-zinc-900/90 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
              href="#">
              Hire Me
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md   bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 bg-zinc-900 px-4 py-2 text-sm text-zinc-50 shadow-sm transition-colors hover:bg-zinc-900/90 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
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
