import { Author } from "@/components/blogs/author";
import { Categories } from "@/components/blogs/categories";
import { components } from "@/components/blogs/portable-text";
import { PortableText } from "next-sanity";
import { POST_QUERYResult } from "@/sanity/sanity.types";
import { PublishedAt } from "@/components/blogs/published-at";
import { Title } from "@/components/blogs/title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export function Post(props: NonNullable<POST_QUERYResult>) {
  const { title, author, mainImage, body, date, categories } = props;

  return (
    <article className="grid lg:grid-cols-12 gap-y-12">
      <header className="lg:col-span-12 flex flex-col gap-4 items-start">
        <div className="flex gap-4 items-center">
          <Categories categories={categories} />
          <PublishedAt publishedAt={date} />
        </div>
        <Title>{title}</Title>
        <Author author={author} />
      </header>
      {mainImage ? (
        <figure className="lg:col-span-4 flex flex-col gap-2 items-start">
          <Image
            src={
              urlFor(mainImage).width(400).height(400).url() ||
              "https://via.placeholder.com/400"
            }
            width={400}
            height={400}
            alt=""
          />
        </figure>
      ) : null}
      {body ? (
        <div className="lg:col-span-7 lg:col-start-6 prose lg:prose-lg">
          <PortableText value={body} components={components} />
        </div>
      ) : null}
    </article>
  );
}
