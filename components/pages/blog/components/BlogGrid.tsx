'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Mock data - will be replaced with API call
const posts = [
  {
    id: 'tips-mendesain-ruang-tamu-minimalis',
    title: 'Tips Mendesain Ruang Tamu Minimalis',
    excerpt: 'Pelajari cara mendesain ruang tamu minimalis yang nyaman dan fungsional dengan budget terjangkau.',
    date: '2024-01-01',
    readTime: '5 min read',
    image: '/blog/post1.jpg',
    category: 'Interior Design'
  },
  {
    id: 'tren-desain-interior-2024',
    title: 'Tren Desain Interior 2024',
    excerpt: 'Temukan tren desain interior terbaru yang akan populer di tahun 2024 dan cara mengaplikasikannya.',
    date: '2024-01-02',
    readTime: '7 min read',
    image: '/blog/post2.jpg',
    category: 'Trends'
  },
  {
    id: 'cara-memilih-furniture',
    title: 'Cara Memilih Furniture yang Tepat',
    excerpt: 'Panduan lengkap memilih furniture yang sesuai dengan gaya dan kebutuhan ruangan Anda.',
    date: '2024-01-03',
    readTime: '6 min read',
    image: '/blog/post3.jpg',
    category: 'Furniture'
  },
];

const BlogGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card key={post.id} className="group hover:shadow-lg transition-shadow duration-200">
          <Link href={`/blog/${post.id}`}>
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-200 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
          </Link>
          <CardHeader>
            <Link href={`/blog/${post.id}`}>
              <CardTitle className="hover:text-primary transition-colors">
                {post.title}
              </CardTitle>
            </Link>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="group/btn">
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default BlogGrid;
