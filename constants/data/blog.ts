import { BlogPost, BlogCategory } from "@/types/content/blog";

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: "1",
    name: "Desain Interior",
    slug: "desain-interior",
  },
  {
    id: "2",
    name: "Tips & Trik",
    slug: "tips-trik",
  },
  {
    id: "3",
    name: "Inspirasi",
    slug: "inspirasi",
  },
];

export const Status = {
  DRAFT: "draft" as const,
  PUBLISHED: "published" as const,
  ARCHIVED: "archived" as const,
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "tips-menata-ruang-tamu-minimalis",
    title: "Tips Menata Ruang Tamu Minimalis",
    excerpt: "Panduan lengkap menata ruang tamu minimalis yang nyaman dan estetik",
    description: "Panduan lengkap menata ruang tamu minimalis yang nyaman dan estetik dengan konsep modern",
    content: "Lorem ipsum dolor sit amet...",
    coverImage: "/blog/post1.jpg",
    author: {
      id: "1",
      name: "SAV Design Team",
      avatar: "/team/avatar1.jpg",
      role: "Interior Designer",
      bio: "Tim desainer profesional dari SAV Design Studio",
      social: {
        instagram: "savdesign",
      }
    },
    categories: [
      {
        id: "2",
        name: "Tips & Trik",
        slug: "tips-trik"
      }
    ],
    tags: ["ruang-tamu", "minimalis", "interior"],
    publishedAt: "2024-01-01",
    featured: true,
    status: Status.PUBLISHED,
    readingTime: 5
  },
  {
    id: "2",
    slug: "inspirasi-desain-kamar-tidur-modern",
    title: "Inspirasi Desain Kamar Tidur Modern",
    excerpt: "Kumpulan inspirasi desain kamar tidur dengan gaya modern",
    description: "Kumpulan inspirasi desain kamar tidur dengan gaya modern yang elegan",
    content: "Lorem ipsum dolor sit amet...",
    coverImage: "/blog/post2.jpg",
    author: {
      id: "2",
      name: "SAV Design Team",
      avatar: "/team/avatar2.jpg",
      role: "Interior Designer",
      bio: "Tim desainer profesional dari SAV Design Studio"
    },
    categories: [
      {
        id: "3",
        name: "Inspirasi",
        slug: "inspirasi"
      }
    ],
    tags: ["kamar-tidur", "modern", "interior"],
    publishedAt: "2024-01-02",
    featured: false,
    status: Status.PUBLISHED,
    readingTime: 4
  },
  {
    id: "3",
    slug: "panduan-memilih-furniture",
    title: "Panduan Memilih Furniture yang Tepat",
    excerpt: "Tips memilih furniture yang sesuai dengan ruangan Anda",
    description: "Tips memilih furniture yang sesuai dengan ruangan dan gaya interior Anda",
    content: "Lorem ipsum dolor sit amet...",
    coverImage: "/blog/post3.jpg",
    author: {
      id: "1",
      name: "SAV Design Team",
      avatar: "/team/avatar1.jpg",
      role: "Interior Designer",
      bio: "Tim desainer profesional dari SAV Design Studio"
    },
    categories: [
      {
        id: "2",
        name: "Tips & Trik",
        slug: "tips-trik"
      }
    ],
    tags: ["furniture", "interior"],
    publishedAt: "2024-01-03",
    featured: false,
    status: Status.PUBLISHED,
    readingTime: 3
  }
];

export const BLOG_PAGINATION = {
  ITEMS_PER_PAGE: 9,
  DEFAULT_PAGE: 1,
};

export const BLOG_ROUTES = {
  LIST: "/blog",
  DETAIL: (slug: string) => `/blog/${slug}`,
} as const;
