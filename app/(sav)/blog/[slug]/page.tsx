import { Metadata } from "next";
import { BLOG_POSTS } from "@/constants/data/blog";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
      title: "Create New Post | Admin Dashboard",
    };
  }

  return {
    title: `Edit ${post.title} | Admin Dashboard`,
    description: `Edit blog post: ${post.title}`,
  };
}

export default function AdminBlogEditPage({ params }: Props) {
  const post = BLOG_POSTS.find((post) => post.slug === params.slug);
  const isNewPost = params.slug === "new";

  if (!post && !isNewPost) {
    notFound();
  }

  return (
    <Container>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            {isNewPost ? "Create New Post" : `Edit Post: ${post?.title}`}
          </h1>
          <Button variant="ghost" asChild>
            <Link href="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Posts
            </Link>
          </Button>
        </div>
        <Separator />
        <Card className="p-6">
          {/* TODO: Add blog editor form */}
          <div className="space-y-4">
            <p>Blog editor form will be implemented here</p>
            <Button>Save Draft</Button>
            <Button variant="secondary">Preview</Button>
            <Button variant="default">Publish</Button>
          </div>
        </Card>
      </div>
    </Container>
  );
}