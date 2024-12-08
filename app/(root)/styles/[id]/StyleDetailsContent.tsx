'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ROUTES } from '@/constants/data/quiz-questions/routes';
import { ColorPalette } from '@/components/ui/color-palette';
import { Gallery } from '@/components/ui/gallery';
import type { DesignStyle } from '@/types/data/quiz';

interface StyleDetailsContentProps {
  style: DesignStyle;
}

export function StyleDetailsContent({ style }: StyleDetailsContentProps) {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative w-full h-[400px] rounded-xl overflow-hidden mb-8">
            <Image
              src={style.imageUrl}
              alt={style.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">{style.name}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {style.longDescription || style.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Characteristics</h2>
              <ul className="space-y-2">
                {style.characteristics.map((char) => (
                  <li key={char} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {char}
                  </li>
                ))}
              </ul>
            </div>

            {style.popularElements && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Popular Elements</h2>
                <ul className="space-y-2">
                  {style.popularElements.map((element) => (
                    <li key={element} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full" />
                      {element}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <ColorPalette colors={style.colorPalette} />
          <Gallery images={style.galleryImages} />
          
          <div className="flex justify-center gap-4 mt-12">
            <Button asChild variant="default">
              <Link href={ROUTES.QUIZ}>
                Take the Quiz
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={ROUTES.CONSULTATION}>
                Book Consultation
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
