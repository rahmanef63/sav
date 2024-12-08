import { DESIGN_STYLES } from '@/constants/data/quiz-questions/styles';
import { DesignStyleKey, StyleWeight } from '@/types/data/quiz';

export function getStyleKeys(): DesignStyleKey[] {
  return Object.keys(DESIGN_STYLES) as DesignStyleKey[];
}

export function createEmptyStyleWeight(): StyleWeight {
  return getStyleKeys().reduce((acc, key) => ({
    ...acc,
    [key]: 0
  }), {} as StyleWeight);
}

export function getStyleByKey(key: DesignStyleKey) {
  return DESIGN_STYLES[key];
}

export function isValidStyleKey(key: string): key is DesignStyleKey {
  return key in DESIGN_STYLES;
} 