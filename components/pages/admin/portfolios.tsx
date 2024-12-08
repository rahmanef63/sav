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
const initialPortfolios = [
  {
    id: 1,
    title: "Modern Minimalist Villa",
    designer: "Sarah Anderson",
    category: "Residential",
    status: "published",
    createdAt: "2024-03-15",
  },
  {
    id: 2,
    title: "Urban Coffee Shop",
    designer: "John Smith",
    category: "Commercial",
    status: "draft",
    createdAt: "2024-03-14",
  },
]

export function AdminPortfolios() {
  const [portfolios, setPortfolios] = useState(initialPortfolios)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Portfolios</h2>
        <Button>Add New Portfolio</Button>
      </div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Designer</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {portfolios.map((portfolio) => (
            <TableRow key={portfolio.id}>
              <TableCell className="font-medium">{portfolio.title}</TableCell>
              <TableCell>{portfolio.designer}</TableCell>
              <TableCell>{portfolio.category}</TableCell>
              <TableCell>
                <Badge variant={portfolio.status === 'published' ? 'success' : 'default'}>
                  {portfolio.status}
                </Badge>
              </TableCell>
              <TableCell>{new Date(portfolio.createdAt).toLocaleDateString()}</TableCell>
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