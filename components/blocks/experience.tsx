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

const Experience = async () => {
  const { data: experience } = await sanityFetch({
    query: EXPERIENCE_QUERY,
  });
  return (
    <section
      id="experience"
      className="relative min-h-auto snap-center snap-normal py-12 md:py-24 lg:py-32">
      <BlurEffect1 />
      <h1 className="text-center text-xl md:text-4xl pb-10">Experience</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-6 lg:gap-10">
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
