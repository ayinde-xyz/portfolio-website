import { PostCard } from "@/components/blogs/post-card";
import { Title } from "@/components/blogs/title";
import { BlurEffect1, BlurEffect2 } from "@/components/blurEffect";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

const BlogPage = async () => {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <main className="container mx-auto grid grid-cols-1 p-6 mt-10">
      <BlurEffect1 />
      <Title>Post index</Title>
      <div className="flex flex-col gap-24 py-6">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
      <hr />
      <Link href="/">&larr; Return home</Link>
      <BlurEffect2 />
    </main>
  );
};

export default BlogPage;
