'use client';

import { useState } from 'react';
import BlogSearch from './BlogSearch';

export function BlogList() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Implement search logic here
  };

  return (
    <div className="space-y-8">
      <BlogSearch onSearch={handleSearch} />
      {/* Blog posts will be rendered here */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Blog post cards will go here */}
      </div>
    </div>
  );
}
