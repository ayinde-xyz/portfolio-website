import { notFound } from "next/navigation";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Post } from "@/components/blogs/post";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  return {
    title: post?.title,
    description: `Written by ${post?.author?.name} on ${new Date(
      post?.date || ""
    ).toLocaleDateString()}`,
    openGraph: {
      images: [post?.mainImage ? urlFor(post.mainImage).url() : ""],
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 py-12">
      <Post {...post} />
      {/* {post?.mainImage ? (
        <Image
          className="w-full aspect-[800/300]"
          src={urlFor(post.mainImage)
            .width(800)
            .height(300)
            .quality(80)
            .auto("format")
            .url()}
          alt={post?.mainImage?.alt || ""}
          width="800"
          height="300"
        />
      ) : null}
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      {post?.body ? (
        <article className="prose">
          <PortableText value={post.body} components={components} />
        </article>
      ) : null} */}
      <hr />
      <Link href="/blogs">&larr; Return to index</Link>
    </main>
  );
}
