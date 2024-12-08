'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { QuizService } from '@/lib/quiz-service';
import { QuizResults } from '@/components/modal/quiz/QuizResults';
import { ROUTES } from '@/constants/data/quiz-questions/routes';

export default function ResultsPage() {
  const router = useRouter();

  useEffect(() => {
    const results = QuizService.getResult();
    if (!results) {
      router.push(ROUTES.HOME);
    }
  }, [router]);

  return (
    <div className="container py-8">
      <QuizResults />
    </div>
  );
} 