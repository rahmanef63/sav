'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleryProps {
  images: readonly string[];
}

export function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <motion.div
            key={image}
            whileHover={{ scale: 1.05 }}
            className="relative h-48 cursor-pointer rounded-lg overflow-hidden"
            onClick={() => setSelectedImage(image)}
          >
            <Image
              src={image}
              alt="Gallery image"
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <button
              className="absolute left-4 text-white"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = images.indexOf(selectedImage);
                const prevIndex = (currentIndex - 1 + images.length) % images.length;
                setSelectedImage(images[prevIndex]);
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="absolute right-4 text-white"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = images.indexOf(selectedImage);
                const nextIndex = (currentIndex + 1) % images.length;
                setSelectedImage(images[nextIndex]);
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            <div className="relative w-[90vw] h-[80vh]">
              <Image
                src={selectedImage}
                alt="Selected gallery image"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}