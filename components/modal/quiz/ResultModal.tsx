'use client';

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/data/quiz-questions/routes';
import { useQuizStore } from '@/store/quiz-store';
import { ResultCard } from './ResultCard';
import { OtherResults } from './OtherResults';

interface ResultModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResultModal({ isOpen, onClose }: ResultModalProps) {
  const router = useRouter();
  const results = useQuizStore((state) => state.results);
  
  if (!results) return null;
  
  const [topStyle, ...otherStyles] = results.styles;
  
  if (!topStyle) return null;

  const handleConsultation = () => {
    onClose();
    router.push(ROUTES.CONSULTATION);
  };

  const handleViewResults = () => {
    onClose();
    router.push(ROUTES.QUIZ_RESULTS);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">Quiz Results</DialogTitle>
        <div className="space-y-8">
          <ResultCard
            style={topStyle}
            onConsultation={handleConsultation}
            onViewResults={handleViewResults}
          />
          
          {otherStyles.length > 0 && (
            <OtherResults results={otherStyles} />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}