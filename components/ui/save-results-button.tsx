'use client';

import { motion } from 'framer-motion';
import { BookmarkPlus } from 'lucide-react';

interface SaveResultsButtonProps {
  onSave: () => void;
}

export function SaveResultsButton({ onSave }: SaveResultsButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onSave}
      className="fixed bottom-4 left-4 bg-secondary text-secondary-foreground rounded-full p-3 shadow-lg hover:bg-secondary/90 transition-colors"
    >
      <BookmarkPlus className="w-5 h-5" />
    </motion.button>
  );
}