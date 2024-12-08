"use client"

import BlogSearch from "@/components/pages/blog/components/BlogSearch";
import BlogGrid from "@/components/pages/blog/components/BlogGrid";

export default function BlogClient() {
  const handleSearch = (query: string) => {
    // Implement search functionality here
    console.log("Searching for:", query);
  };

  return (
    <div className="space-y-8">
      <BlogSearch onSearch={handleSearch} />
      <BlogGrid />
    </div>
  );
}
