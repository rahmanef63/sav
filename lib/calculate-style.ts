import { StyleResult, UserResponses } from '@/types/data/quiz';
import { QUESTIONS,  } from '@/constants/data/quiz-questions';
import { DESIGN_STYLES } from '@/constants/data/quiz-questions/styles';

export function calculateStyle(responses: UserResponses): StyleResult[] {
  const weights = Object.keys(DESIGN_STYLES).reduce((acc, style) => ({
    ...acc,
    [style]: 0
  }), {} as Record<string, number>);

  let totalQuestions = Object.keys(responses).length;
  let consistencyScore = 0;
  let lastStyle = '';

  // Calculate weights with consistency bonus
  Object.entries(responses).forEach(([questionId, optionId], index) => {
    const question = QUESTIONS.find(q => q.id === questionId);
    if (!question) return;

    const option = question.options.find(o => o.id === optionId);
    if (!option) return;

    // Find dominant style in this answer
    let dominantStyle = '';
    let maxWeight = 0;

    Object.entries(option.weight).forEach(([style, weight]) => {
      if (weight > maxWeight) {
        maxWeight = weight;
        dominantStyle = style;
      }
      if (style in weights) {
        // Apply question position weight (later questions worth more)
        const positionMultiplier = 1 + (index * 0.1);
        weights[style] += weight * positionMultiplier;
      }
    });

    // Add consistency bonus
    if (dominantStyle === lastStyle) {
      consistencyScore += 0.5;
    }
    lastStyle = dominantStyle;
  });

  // Apply consistency bonus to final weights
  Object.keys(weights).forEach(style => {
    if (weights[style] > 0) {
      weights[style] *= (1 + (consistencyScore * 0.1));
    }
  });

  // Convert to results array with normalized probabilities
  const maxWeight = Math.max(...Object.values(weights));
  
  return Object.entries(DESIGN_STYLES).map(([key, styleData]) => ({
    style: styleData.name,
    description: styleData.description,
    imageUrl: styleData.imageUrl,
    probability: Math.round((weights[key] / maxWeight) * 100)
  })).sort((a, b) => b.probability - a.probability);
}