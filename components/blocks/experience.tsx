import { EXPERIENCE_QUERY } from "@/sanity/lib/queries";
import { BlurEffect1, BlurEffect2 } from "../blurEffect";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { sanityFetch } from "@/sanity/lib/live";
import { Cascadia_Code } from "next/font/google";

const cascadia = Cascadia_Code({
  subsets: ["latin"],
  fallback: ["system-ui", "sans-serif"],
});

const Experience = async () => {
  const { data: experience } = await sanityFetch({
    query: EXPERIENCE_QUERY,
  });
  return (
    <section id="experience" className="relative min-h-screen snap-start">
      <BlurEffect1 />
      <h1 className=" pb-10 text-6xl tracking-tighter  bg-clip-text text-transparent text-center mb-7 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500  sm:text-7xl md:text-8xl lg:text-10xl/none">
        Experience
      </h1>
      <div
        className={`${cascadia.className} container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:gap-10`}>
        {experience.map((experience) => (
          <Card
            key={experience._id}
            className="transition-all duration-200 hover:scale-105 hover:border hover:border-zinc-500 cursor-pointer">
            <CardHeader>
              <CardTitle className="text-center pb-3">
                {experience.title}
              </CardTitle>

              <div className="flex justify-between">
                <p>
                  {experience.startDate}- {experience.endDate || "Present"}
                </p>
                <p>{experience.company}</p>
              </div>
              <CardDescription>{experience.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center"></CardContent>
          </Card>
        ))}
      </div>
      <BlurEffect2 />
    </section>
  );
};

export default Experience;
