'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
import { StyleResult } from '@/types';

interface ShareButtonProps {
  results: StyleResult[];
}

export function ShareButton({ results }: ShareButtonProps) {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    const text = `I just discovered my interior design style! My top match is ${results[0]?.style} (${results[0]?.probability}% match). Take the quiz to find yours!`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Interior Design Style',
          text,
          url: window.location.href,
        });
        setShared(true);
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      await navigator.clipboard.writeText(text);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  if (!results.length) return null;

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleShare}
      className="fixed bottom-4 right-4 bg-primary text-primary-foreground rounded-full p-3 shadow-lg hover:bg-primary/90 transition-colors"
    >
      <Share2 className="w-5 h-5" />
      {shared && (
        <span className="absolute -top-8 right-0 bg-black text-white text-sm px-2 py-1 rounded">
          {navigator.share ? 'Shared!' : 'Copied!'}
        </span>
      )}
    </motion.button>
  );
}