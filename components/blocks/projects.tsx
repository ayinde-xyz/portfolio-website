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
import flashNews from "@/public/flash-news.png";
import chatGPT from "@/public/chatgpt.png";

const projects = [
  {
    title: "Flash News",
    description:
      "A news app that provides you with the latest news from around the world.",
    image: flashNews,
    url: "https://flash-news-xi.vercel.app",
  },
  {
    title: "Gemini Chatbot",
    description: "A clone of the popular chatbot, Google Gemini.",
    image: chatGPT,
    url: "https://gemini-clone-eta-weld.vercel.app",
  },
  {
    title: "E-commerce online Store",
    description:
      "An e-commerce store that allows you to buy and sell products.",
    image: "/placeholder.svg",
    url: "https://ecommerce-store-beige-six.vercel.app",
  },
  {
    title: "E-commerce Admin Dashboard",
    description:
      "An admin dashboard for an e-commerce store that allows you to manage products.",
    image: "/placeholder.svg",
    url: "https://ecommerce-admin-silk-ten.vercel.app",
  },
  {
    title: "Web Authentication App",
    description:
      "An app that allows you to authenticate users using their email and password.",
    image: "/placeholder.svg",
    url: "https://authjs.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen snap-center snap-normal py-12 md:py-24 lg:py-32">
      <BlurEffect1 />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:gap-10">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="transition-all duration-200 hover:scale-105 hover:border hover:border-zinc-500 cursor-pointer">
            <CardHeader>
              <CardTitle className="text-center">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <Image
                alt="Project 1"
                className="object-cover rounded-md"
                height="200"
                src={project.image}
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width="300"
              />
              <Link
                className="mt-4 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                href="#">
                View Details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
      <BlurEffect2 />
    </section>
  );
};

export default Projects;
