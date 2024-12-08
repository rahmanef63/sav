'use client';

import { useEffect, useState } from 'react';
import { QuizResult } from '@/types/data/quiz';
import { QuizService } from '@/lib/quiz-service';
import { StyleCard } from '@/components/ui/style-card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/data/quiz-questions/routes';
import { DESIGN_STYLES } from '@/constants/data/quiz-questions/styles';

export function QuizResults() {
  const [result, setResult] = useState<QuizResult | null>(null);
  const router = useRouter();

  useEffect(() => {
    const quizResult = QuizService.getResult();
    if (!quizResult) {
      router.push(ROUTES.HOME);
      return;
    }
    setResult(quizResult);
  }, [router]);

  if (!result) return null;

  // Get top 3 matching styles
  const topStyles = result.styles.slice(0, 3);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Your Design Style Match</h2>
        <p className="text-muted-foreground">
          Based on your responses, here are your top matching styles
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {topStyles.map((style, index) => {
          const styleKey = style.style.toLowerCase() as keyof typeof DESIGN_STYLES;
          const styleData = DESIGN_STYLES[styleKey];
          if (!styleData) return null;

          return (
            <div key={style.style} className="relative">
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {style.probability}% Match
                </span>
              </div>
              <StyleCard
                style={styleData}
                index={index}
              />
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button 
          onClick={() => {
            QuizService.clearResult();
            router.push(ROUTES.QUIZ);
          }}
        >
          Retake Quiz
        </Button>
        <Button 
          variant="outline"
          onClick={() => router.push(ROUTES.STYLES)}
        >
          Explore All Styles
        </Button>
      </div>
    </div>
  );
} 