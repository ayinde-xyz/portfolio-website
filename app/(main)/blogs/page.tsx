import { PostCard } from "@/components/blogs/post-card";
import { Title } from "@/components/blogs/title";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";

const BlogPage = async () => {
  const { data: posts } = await sanityFetch({
    query: POSTS_QUERY,
  });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-6">
      <Title>Post index</Title>
      <div className="flex flex-col gap-24 py-12">
        {posts.map((post) => (
          <PostCard key={post._id} {...post} />
        ))}
      </div>
      {/* <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {posts.map((post) => (
          <li key={post._id}>
            <Link
              className="block p-4 hover:text-blue-500"
              href={`/blogs/${post?.slug}`}>
              {post?.title}
            </Link>
          </li>
        ))}
      </ul> */}
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
};

export default BlogPage;
