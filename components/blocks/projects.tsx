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

import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { DialogDescription, DialogTrigger } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";

const Projects = async () => {
  const { data: projects } = await sanityFetch({
    query: PROJECTS_QUERY,
  });

  return (
    <section
      id="projects"
      className="relative min-h-screen snap-center snap-normal py-12 md:py-24 lg:py-32">
      <BlurEffect1 />
      <h1 className="text-center text-xl md:text-4xl mb-10">Projects</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:gap-10">
        {projects.map((project) => (
          <Card
            key={project._id}
            className="transition-all duration-200 hover:scale-105 hover:border hover:border-zinc-500 cursor-pointer">
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
                  <Button className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-screen py-10 overflow-y-scroll flex items-center flex-col gap-x-4">
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
                    <Button className="mt-6 mx-auto px-4  py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
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
