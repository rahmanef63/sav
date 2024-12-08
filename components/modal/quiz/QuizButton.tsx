'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { QuizModal } from './QuizModal';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/data/quiz-questions/routes';
import { ArrowRight } from 'lucide-react';

export function QuizButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <Button 
        size="lg" 
        className="text-lg"
        onClick={() => setIsModalOpen(true)}
      >
        Take the Quiz
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>

      <QuizModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
} 