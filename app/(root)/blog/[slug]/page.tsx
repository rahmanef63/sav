import { Metadata } from "next";
import { BLOG_POSTS } from "@/constants/data/blog";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | SAV Design Studio",
    };
  }

  return {
    title: `${post.title} | SAV Design Studio`,
    description: post.description,
    openGraph: {
      title: `${post.title} | SAV Design Studio`,
      description: post.description,
      type: "article",
      authors: post.author ? [post.author.name] : [],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
