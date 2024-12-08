import { BlogList } from "@/components/pages/blog/components/blog-list";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { BLOG_POSTS } from "@/constants/data/blog";
import Link from "next/link";

export const metadata = {
  title: "Blog Management | Admin Dashboard",
  description: "Manage blog posts - create, edit, and publish posts",
};

export default function AdminBlogPage() {
  return (
    <Container>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Blog Posts</h1>
          <Button asChild>
            <Link href="/blog/new">
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Link>
          </Button>
        </div>
        <BlogList posts={BLOG_POSTS} />
      </div>
    </Container>
  );
}
