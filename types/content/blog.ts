export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  description: string
  author?: BlogAuthor
  categories: BlogCategory[]
  tags: string[]
  publishedAt: string
  updatedAt?: string
  readingTime: number
  featured: boolean
  seo?: BlogSEO
  status: 'draft' | 'published' | 'archived'
}

export interface BlogAuthor {
  id: string
  name: string
  avatar: string
  role: string
  bio?: string
  image?: string
  social?: {
    instagram?: string
    linkedin?: string
    twitter?: string
  }
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description?: string
  parentId?: string
}

export interface BlogSEO {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
}

export interface BlogComment {
  id: string
  postId: string
  author: {
    name: string
    email: string
    avatar?: string
  }
  content: string
  createdAt: string
  parentId?: string
  replies?: BlogComment[]
}

export interface BlogArchive {
  year: number
  months: {
    month: number
    count: number
    posts: BlogPost[]
  }[]
  totalPosts: number
}

export interface BlogSearchParams {
  query?: string
  category?: string
  tag?: string
  author?: string
  page?: number
  limit?: number
  sortBy?: 'date' | 'popularity' | 'relevance'
  featured?: boolean
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
}

export interface BlogSearchParams {
  query?: string;
  category?: string;
  tag?: string;
  page?: number;
  limit?: number;
}
