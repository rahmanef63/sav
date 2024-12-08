import { QuizResult, QuizValidation, UserResponses } from '@/types/data/quiz';
import { QUESTIONS } from '@/constants/data/quiz-questions/questions';

export function validateQuizResponses(responses: UserResponses): QuizValidation {
  // Check if all questions are answered
  const answeredQuestions = Object.keys(responses).length;
  const totalQuestions = QUESTIONS.length;

  if (answeredQuestions !== totalQuestions) {
    return {
      isValid: false,
      message: `Please answer all questions (${answeredQuestions}/${totalQuestions} completed)`
    };
  }

  // Validate each response exists in questions
  for (const [questionId, answerId] of Object.entries(responses)) {
    const question = QUESTIONS.find(q => q.id === questionId);
    if (!question) {
      return {
        isValid: false,
        message: `Invalid question: ${questionId}`
      };
    }

    const option = question.options.find(o => o.id === answerId);
    if (!option) {
      return {
        isValid: false,
        message: `Invalid answer for question: ${questionId}`
      };
    }
  }

  return { isValid: true };
} 