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
  weight: {
    modern: number;
    traditional: number;
    minimalist: number;
    eclectic: number;
    industrial: number;
  };
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