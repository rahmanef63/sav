"use client"

import { DataTable } from "@/components/ui/Data-Table"
import { columns, Blog } from "./columns"

const data: Blog[] = [
  {
    id: "1",
    title: "First Blog Post",
    slug: "first-blog-post",
    status: "published",
    createdAt: "2024-12-08",
    updatedAt: "2024-12-08",
  },
  {
    id: "2",
    title: "Draft Post",
    slug: "draft-post",
    status: "draft",
    createdAt: "2024-12-08",
    updatedAt: "2024-12-08",
  },
]

export function BlogList() {
  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Blog Posts</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your blog posts
          </p>
        </div>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  )
}
