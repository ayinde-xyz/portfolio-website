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

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen snap-center snap-normal py-12 md:py-24 lg:py-32">
      <BlurEffect1 />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:gap-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Flash News</CardTitle>
            <CardDescription>
              A news app that provides you with the latest news from around the
              world.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              alt="Project 1"
              className="object-cover rounded-md"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <Link
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              href="#">
              View Details
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">Chat GPT clone</CardTitle>
            <CardDescription>
              A clone of the popular chatbot, GPT-3.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              alt="Project 2"
              className="object-cover rounded-md"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <Link
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              href="#">
              View Details
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              E-commerce online Store
            </CardTitle>
            <CardDescription>
              An e-commerce store that allows you to buy and sell products.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Image
              alt="Project 3"
              className="object-cover rounded-md"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <Link
              className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              href="#">
              View Details
            </Link>
          </CardContent>
        </Card>
      </div>
      <BlurEffect2 />
    </section>
  );
};

export default Projects;
