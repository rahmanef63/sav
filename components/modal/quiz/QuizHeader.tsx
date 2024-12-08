import { Button } from '@/components/ui/button';
import { DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, RotateCcw } from 'lucide-react';

interface QuizHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  progress: number;
  title: string;
  onPrevious: () => void;
  onStartOver: () => void;
  canGoBack: boolean;
}

export function QuizHeader({
  currentQuestion,
  totalQuestions,
  progress,
  title,
  onPrevious,
  onStartOver,
  canGoBack
}: QuizHeaderProps) {
  return (
    <DialogHeader className="flex-none">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {canGoBack && (
              <Button variant="ghost" size="icon" onClick={onPrevious} className="h-8 w-8">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            )}
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {totalQuestions}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={onStartOver} className="h-8 w-8">
              <RotateCcw className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">{Math.round(progress)}%</span>
          </div>
        </div>
        <Progress value={progress} className="h-2" />
        <DialogTitle className="text-2xl text-center">{title}</DialogTitle>
      </div>
    </DialogHeader>
  );
} 