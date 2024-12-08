import { create } from 'zustand'
import { QuizResult, StyleResult } from '@/types/data/quiz'
import { calculateStyle } from '@/lib/calculate-style'
import { QuizService } from '@/lib/quiz-service'

interface Responses {
  [key: string]: string;
}

interface QuizStore {
  isOpen: boolean;
  currentQuestion: number;
  responses: Responses;
  showResults: boolean;
  results: QuizResult | null;
  onOpen: () => void;
  onClose: () => void;
  setCurrentQuestion: (questionIndex: number) => void;
  addResponse: (questionId: string, optionId: string) => void;
  completeQuiz: () => void;
  setShowResults: (show: boolean) => void;
  setResults: (results: QuizResult) => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  isOpen: false,
  currentQuestion: 0,
  responses: {},
  showResults: false,
  results: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  setCurrentQuestion: (questionIndex) => set({ currentQuestion: questionIndex }),
  addResponse: (questionId, optionId) => 
    set((state) => ({
      responses: { ...state.responses, [questionId]: optionId }
    })),
  completeQuiz: () => {
    const state = get();
    const styles = calculateStyle(state.responses);
    const result: QuizResult = {
      responses: state.responses,
      styles,
      timestamp: Date.now(),
      completed: true
    };
    QuizService.saveResult(result);
    set({ showResults: true, results: result });
  },
  setShowResults: (show) => set({ showResults: show }),
  setResults: (results) => set({ results }),
  resetQuiz: () => {
    QuizService.clearResult();
    set({
      currentQuestion: 0,
      responses: {},
      showResults: false,
      results: null
    });
  }
}))
