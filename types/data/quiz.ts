import { DESIGN_STYLES } from "@/constants/data/quiz-questions/styles";

export interface Question {
  id: string;
  title: string;
  description?: string;
  type: 'text' | 'image' | 'both';
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  imageUrl?: string;
  weight: StyleWeight;
}

export type StyleWeight = {
  [K in DesignStyleKey]: number;
};

export interface DesignStyle {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly longDescription?: string;
  readonly characteristics: readonly string[];
  readonly popularElements?: readonly string[];
  readonly imageUrl: string;
  readonly galleryImages: readonly string[];
  readonly colorPalette: readonly string[];
}

export interface StyleResult {
  style: string;
  description: string;
  imageUrl: string;
  probability: number;
}

export interface UserResponses {
  [questionId: string]: string;
}

export interface QuizResult {
  responses: UserResponses;
  styles: StyleResult[];
  timestamp: number;
  completed: boolean;
}

export interface QuizValidation {
  isValid: boolean;
  message?: string;
}

export type DesignStyleKey = keyof typeof DESIGN_STYLES;