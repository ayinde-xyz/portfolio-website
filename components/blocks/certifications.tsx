import {
  CardTitle,
  CardHeader,
  CardDescription,
  Card,
} from "@/components/ui/card";
import { BlurEffect1, BlurEffect2 } from "../blurEffect";
import { sanityFetch } from "@/sanity/lib/live";
import { CERTIFICATIONS_QUERY } from "@/sanity/lib/queries";

const Certifications = async () => {
  const { data: certifications } = await sanityFetch({
    query: CERTIFICATIONS_QUERY,
  });

  return (
    <section
      id="certifications"
      className="relative min-h-screen snap-normal snap-center ">
      <BlurEffect1 />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 lg:gap-10">
        {certifications.map((certification) => (
          <Card
            key={certification._id}
            className="transition-all duration-200  hover:scale-105 hover:border hover:border-zinc-500 cursor-pointer">
            <CardHeader className="p-4">
              <CardTitle>{certification.title}</CardTitle>
              <div>Issued by: {certification.organization}</div>
              <div>Date: {certification.date}</div>
            </CardHeader>
            <div className="p-4">
              <CardDescription>
                Skills: HTML, CSS, JavaScript, React
              </CardDescription>
              <CardDescription>
                Certification ID: {certification.certificationId}
              </CardDescription>
            </div>
          </Card>
        ))}
      </div>
      <BlurEffect2 />
    </section>
  );
};

export default Certifications;

{
  /* <Card className="transition-all duration-200 hover:scale-105 hover:border hover:border-zinc-500 cursor-pointer">
          <CardHeader className="p-4">
            <CardTitle>JavaScript Algorithms and Data Structures</CardTitle>
            <div>Issued by: FreeCodeCamp</div>
            <div>Date: March 2023</div>
          </CardHeader>
          <div className="p-4">
            <CardDescription>
              Skills: JavaScript, Data Structures, Algorithms
            </CardDescription>
            <CardDescription>Certification ID: 0987654321</CardDescription>
          </div>
        </Card>
        <Card className="transition-all duration-200  hover:scale-105 hover:border hover:border-zinc-500 cursor-pointer">
          <CardHeader className="p-4">
            <CardTitle>React - The Complete Guide 2023</CardTitle>
            <div>Issued by: Udemy</div>
            <div>Date: November 2023</div>
          </CardHeader>
          <div className="p-4">
            <CardDescription>
              Skills: React, Next.js, Tailwind CSS
            </CardDescription>
            <CardDescription>
              Certification ID: UC-7a235ce1-a826-4529-8d86-26150d69e19f
            </CardDescription>
          </div>
        </Card> */
}
