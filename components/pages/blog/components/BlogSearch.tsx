"use client"

import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search } from 'lucide-react'

interface BlogSearchProps {
  onSearch: (query: string) => void
}

const BlogSearch = ({ onSearch }: BlogSearchProps) => {
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2 mb-8">
      <Input
        type="text"
        placeholder="Cari artikel..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="flex-1"
      />
      <Button type="submit">
        <Search className="w-4 h-4 mr-2" />
        Cari
      </Button>
    </form>
  )
}

export default BlogSearch
