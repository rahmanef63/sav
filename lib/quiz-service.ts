import { QuizResult, UserResponses } from '@/types/data/quiz';
import { calculateStyle } from './calculate-style';

const QUIZ_STORAGE_KEY = 'quizResult';

export const QuizService = {
  saveResult(result: QuizResult) {
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(result));
    return result;
  },

  getResult(): QuizResult | null {
    const stored = localStorage.getItem(QUIZ_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  },

  clearResult() {
    localStorage.removeItem(QUIZ_STORAGE_KEY);
  }
}; 