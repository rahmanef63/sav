"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Edit, Trash2 } from "lucide-react"

// Mock data - In a real app, this would come from your API
const initialBlogs = [
  {
    id: 1,
    title: "2024 Interior Design Trends",
    author: "Emma Wilson",
    category: "Trends",
    status: "published",
    createdAt: "2024-03-15",
  },
  {
    id: 2,
    title: "Sustainable Materials in Modern Homes",
    author: "Michael Brown",
    category: "Sustainability",
    status: "draft",
    createdAt: "2024-03-14",
  },
]

export function AdminBlogs() {
  const [blogs, setBlogs] = useState(initialBlogs)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Blog Posts</h2>
        <Button>Create New Post</Button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {blogs.map((blog) => (
            <TableRow key={blog.id}>
              <TableCell className="font-medium">{blog.title}</TableCell>
              <TableCell>{blog.author}</TableCell>
              <TableCell>{blog.category}</TableCell>
              <TableCell>
                <Badge variant={blog.status === 'published' ? 'success' : 'default'}>
                  {blog.status}
                </Badge>
              </TableCell>
              <TableCell>{new Date(blog.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}