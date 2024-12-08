'use client';

import { useEffect } from 'react';
import { QUESTIONS } from '@/constants/data/quiz-questions';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ResultModal } from './ResultModal';
import { useQuizStore } from '@/store/quiz-store';
import { QuizHeader } from './QuizHeader';
import { QuizOption } from './QuizOption';

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const {
    currentQuestion,
    responses,
    showResults,
    setCurrentQuestion,
    addResponse,
    completeQuiz,
    setShowResults,
    resetQuiz
  } = useQuizStore();

  const progress = ((currentQuestion + 1) / QUESTIONS.length) * 100;
  const currentQ = QUESTIONS[currentQuestion];
  const canGoBack = currentQuestion > 0;

  const handleOptionSelect = (questionId: string, optionId: string) => {
    addResponse(questionId, optionId);
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      completeQuiz();
    }
  };

  useEffect(() => {
    if (!isOpen) resetQuiz();
  }, [isOpen, resetQuiz]);

  return (
    <>
      <Dialog open={isOpen && !showResults} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[700px] h-[80vh] flex flex-col">
          <DialogTitle className="sr-only">Design Style Quiz</DialogTitle>
          <QuizHeader
            currentQuestion={currentQuestion}
            totalQuestions={QUESTIONS.length}
            progress={progress}
            title={currentQ.title}
            onPrevious={() => setCurrentQuestion(currentQuestion - 1)}
            onStartOver={resetQuiz}
            canGoBack={canGoBack}
          />

          <div className="flex-1 overflow-y-auto py-6">
            <div className="grid gap-6 h-full">
              {currentQ.options.map((option) => (
                <QuizOption
                  key={option.id}
                  id={option.id}
                  text={option.text}
                  imageUrl={option.imageUrl}
                  isSelected={responses[currentQ.id] === option.id}
                  onClick={() => handleOptionSelect(currentQ.id, option.id)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <ResultModal isOpen={isOpen && showResults} onClose={onClose} />
    </>
  );
}