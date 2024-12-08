'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Question, Option } from '@/types';
import Image from 'next/image';

interface QuestionCardProps {
  question: Question;
  onSelect: (optionId: string) => void;
  isVisible: boolean;
}

export function QuestionCard({ question, onSelect, isVisible }: QuestionCardProps) {
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="w-full max-w-4xl mx-auto p-6"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">{question.title}</h2>
            {question.description && (
              <p className="text-gray-600 dark:text-gray-300">{question.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {question.options.map((option) => (
              <motion.div
                key={option.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative"
                onHoverStart={() => setHoveredOption(option.id)}
                onHoverEnd={() => setHoveredOption(null)}
              >
                <button
                  onClick={() => onSelect(option.id)}
                  className="w-full h-full bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                >
                  {(question.type === 'both' || question.type === 'image') && option.imageUrl && (
                    <div className="relative w-full h-48">
                      <Image
                        src={option.imageUrl}
                        alt={option.text}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{option.text}</h3>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}