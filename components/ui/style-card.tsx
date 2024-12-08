'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/data/quiz-questions/routes';
import { ArrowRight } from 'lucide-react';

interface StyleCardProps {
  style: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
  };
  index: number;
}

export function StyleCard({ style, index }: StyleCardProps) {
  if (!style?.id) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-card shadow-lg"
    >
      <div className="relative h-64">
        <Image
          src={style.imageUrl}
          alt={style.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2">{style.name}</h3>
        <p className="text-muted-foreground mb-4">{style.description}</p>
        <Link
          href={ROUTES.STYLE_DETAILS({ id: style.id })}
          className="inline-flex items-center text-primary hover:underline"
        >
          Learn More
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}