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
import { Check, X } from "lucide-react"

// Mock data - In a real app, this would come from your API
const applications = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    company: "Design Studio X",
    experience: "5 years",
    status: "pending",
    appliedAt: "2024-03-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    company: "Interior Solutions",
    experience: "8 years",
    status: "pending",
    appliedAt: "2024-03-14",
  },
]

export function AdminPartnerApplications() {
  const [applications, setApplications] = useState(initialApplications)

  const handleAction = (id: number, action: 'approve' | 'reject') => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: action === 'approve' ? 'approved' : 'rejected' } : app
    ))
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Partner Applications</h2>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Experience</TableHead>
            <TableHead>Applied</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>{application.name}</TableCell>
              <TableCell>{application.email}</TableCell>
              <TableCell>{application.company}</TableCell>
              <TableCell>{application.experience}</TableCell>
              <TableCell>{new Date(application.appliedAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge variant={
                  application.status === 'approved' ? 'success' :
                  application.status === 'rejected' ? 'destructive' :
                  'default'
                }>
                  {application.status}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAction(application.id, 'approve')}
                    disabled={application.status !== 'pending'}
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAction(application.id, 'reject')}
                    disabled={application.status !== 'pending'}
                  >
                    <X className="h-4 w-4" />
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