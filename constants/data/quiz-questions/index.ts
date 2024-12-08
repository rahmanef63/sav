export * from './routes';
export * from './metadata';
export * from './quiz';
export * from './questions';
export * from './styles';

import { StyleResult } from '@/types/data/quiz';
import { DESIGN_STYLES } from './styles';

// Style Results Template
export const STYLE_RESULTS: StyleResult[] = Object.entries(DESIGN_STYLES).map(([key, style]) => ({
  style: style.name,
  description: style.description,
  imageUrl: style.imageUrl,
  probability: 0
}));