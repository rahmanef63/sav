'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

export function BlurImage({ src, alt, className, ...props }: BlurImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={cn('overflow-hidden relative', className)}>
      <Image
        src={src}
        alt={alt}
        className={cn(
          'duration-700 ease-in-out',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
    </div>
  );
} 