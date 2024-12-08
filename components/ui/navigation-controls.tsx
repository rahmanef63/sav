'use client';

import { motion } from 'framer-motion';
import { UserResponses } from '@/types';
import { RefreshCw, ArrowLeft } from 'lucide-react';

interface NavigationControlsProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onReset: () => void;
  responses: UserResponses;
}

export function NavigationControls({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onReset,
  responses
}: NavigationControlsProps) {
  const hasAnswers = Object.keys(responses).length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex justify-between items-center mt-8"
    >
      {currentQuestion > 0 && (
        <button
          onClick={onPrevious}
          className="flex items-center gap-2 px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous Question
        </button>
      )}

      {hasAnswers && (
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 text-destructive hover:text-destructive/90 transition-colors ml-auto"
        >
          <RefreshCw className="w-4 h-4" />
          Start Over
        </button>
      )}
    </motion.div>
  );
}