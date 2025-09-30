import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { BlurEffect1, BlurEffect2 } from "../blurEffect";
import { Cascadia_Code } from "next/font/google";

import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";

const cascadia = Cascadia_Code({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
});

const Projects = async () => {
  const { data: projects } = await sanityFetch({
    query: PROJECTS_QUERY,
  });

  return (
    <section
      id="projects"
      className="relative min-h-screen snap-start py-12 md:py-24 lg:py-32">
      <BlurEffect1 />
      <h1 className="text-6xl tracking-tighter  bg-clip-text text-transparent text-center mb-7 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500  sm:text-7xl md:text-8xl lg:text-10xl/none">
        Projects
      </h1>
      <div
        className={`${cascadia.className} tracking-tight container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:gap-10`}>
        {projects.map((project) => (
          <Card
            key={project._id}
            className="transition-all duration-200 hover:scale-105 hover:border dark:bg-slate-900/30  bg-white/30 backdrop-blur-sm backdrop-grayscale  hover:border-zinc-500 cursor-pointer">
            <CardHeader>
              <CardTitle className="text-center">{project.title}</CardTitle>
              <CardDescription>{project.bio}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              {project?.image && (
                <Image
                  alt={project.image.alt || "Project image"}
                  className="object-cover rounded-md"
                  src={urlFor(project.image)
                    .width(500)
                    .height(300)
                    .quality(100)
                    .auto("format")
                    .url()}
                  width={500}
                  height={300}
                />
              )}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500">
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-screen py-13 overflow-y-scroll flex items-center flex-col gap-x-4">
                  <DialogHeader>{project.title}</DialogHeader>
                  <DialogDescription>
                    <p className="whitespace-pre-wrap">{project.description}</p>
                    {project?.image && (
                      <Image
                        alt={project.image.alt || "Project image"}
                        className="object-cover rounded-md pt-6"
                        src={urlFor(project.image)
                          .width(500)
                          .height(300)
                          .quality(100)
                          .auto("format")
                          .url()}
                        width={500}
                        height={300}
                      />
                    )}
                    <Button className="mt-6 mx-auto px-4  py-2 border border-transparent text-sm font-medium rounded-md text-white  hover:bg-blue-700">
                      <Link className="" href={project.url || ""}>
                        View Website
                      </Link>
                    </Button>
                  </DialogDescription>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
      <BlurEffect2 />
    </section>
  );
};

export default Projects;
