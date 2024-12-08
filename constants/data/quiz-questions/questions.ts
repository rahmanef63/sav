import { Question } from '@/types/data/quiz';

export const QUESTIONS: Question[] = [
    {
        id: 'color-palette',
        title: 'Which color palette resonates with you the most?',
        type: 'both',
        options: [
          {
            id: 'neutral',
            text: 'Neutral & Earthy',
            imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
            weight: { 
              modern: 0.7, 
              minimalist: 0.9, 
              scandinavian: 0.8, 
              industrial: 0.6,
              japandi: 0.8,
              coastal: 0.5,
              traditional: 0.4,
              contemporary: 0.6,
              bohemian: 0.2,
              midCentury: 0.5
            }
          },
          {
            id: 'bold',
            text: 'Bold & Vibrant',
            imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
            weight: { 
              modern: 0.5, 
              minimalist: 0.1, 
              scandinavian: 0.2, 
              industrial: 0.4,
              japandi: 0.1,
              coastal: 0.3,
              traditional: 0.6,
              contemporary: 0.8,
              bohemian: 0.9,
              midCentury: 0.7
            }
          }
        ]
      },
      {
        id: 'space-layout',
        title: 'What type of space layout appeals to you?',
        type: 'both',
        options: [
          {
            id: 'open',
            text: 'Open & Flowing',
            imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
            weight: { 
              modern: 0.9, 
              minimalist: 0.8, 
              scandinavian: 0.9, 
              industrial: 0.8,
              japandi: 0.7,
              coastal: 0.8,
              traditional: 0.4,
              contemporary: 0.8,
              bohemian: 0.6,
              midCentury: 0.7
            }
          },
          {
            id: 'defined',
            text: 'Defined & Structured',
            imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
            weight: { 
              modern: 0.5, 
              minimalist: 0.6, 
              scandinavian: 0.4, 
              industrial: 0.7,
              japandi: 0.6,
              coastal: 0.4,
              traditional: 0.8,
              contemporary: 0.6,
              bohemian: 0.4,
              midCentury: 0.6
            }
          }
        ]
      },
      {
        id: 'materials',
        title: 'Which materials do you prefer?',
        type: 'both',
        options: [
          {
            id: 'natural',
            text: 'Natural & Organic',
            imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf',
            weight: { 
              modern: 0.6, 
              minimalist: 0.7, 
              scandinavian: 0.9, 
              industrial: 0.3,
              japandi: 0.9,
              coastal: 0.8,
              traditional: 0.7,
              contemporary: 0.5,
              bohemian: 0.8,
              midCentury: 0.6
            }
          },
          {
            id: 'industrial',
            text: 'Industrial & Modern',
            imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498e',
            weight: { 
              modern: 0.8, 
              minimalist: 0.6, 
              scandinavian: 0.3, 
              industrial: 0.9,
              japandi: 0.4,
              coastal: 0.2,
              traditional: 0.3,
              contemporary: 0.7,
              bohemian: 0.3,
              midCentury: 0.8
            }
          }
        ]
      },
  {
    id: 'lighting',
    title: 'What\'s your preferred lighting style?',
    type: 'both',
    options: [
      {
        id: 'natural',
        text: 'Natural & Bright',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        weight: {
          modern: 0.7,
          minimalist: 0.8,
          scandinavian: 0.9,
          industrial: 0.5,
          japandi: 0.8,
          coastal: 0.9,
          traditional: 0.6,
          contemporary: 0.7,
          bohemian: 0.6,
          midCentury: 0.7
        }
      },
      {
        id: 'ambient',
        text: 'Warm & Ambient',
        imageUrl: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab',
        weight: {
          modern: 0.5,
          minimalist: 0.4,
          scandinavian: 0.3,
          industrial: 0.7,
          japandi: 0.6,
          coastal: 0.4,
          traditional: 0.8,
          contemporary: 0.6,
          bohemian: 0.9,
          midCentury: 0.8
        }
      }
    ]
  },
  {
    id: 'furniture-style',
    title: 'Which furniture style appeals to you most?',
    type: 'both',
    options: [
      {
        id: 'clean',
        text: 'Clean & Minimal',
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
        weight: {
          modern: 0.9,
          minimalist: 0.9,
          scandinavian: 0.8,
          industrial: 0.6,
          japandi: 0.8,
          coastal: 0.6,
          traditional: 0.3,
          contemporary: 0.7,
          bohemian: 0.2,
          midCentury: 0.7
        }
      },
      {
        id: 'ornate',
        text: 'Ornate & Detailed',
        imageUrl: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc',
        weight: {
          modern: 0.2,
          minimalist: 0.1,
          scandinavian: 0.3,
          industrial: 0.3,
          japandi: 0.2,
          coastal: 0.5,
          traditional: 0.9,
          contemporary: 0.5,
          bohemian: 0.8,
          midCentury: 0.4
        }
      }
    ]
  },
  {
    id: 'texture',
    title: 'Which textures do you prefer in your space?',
    type: 'both',
    options: [
      {
        id: 'smooth',
        text: 'Smooth & Sleek',
        imageUrl: 'https://images.unsplash.com/photo-1600585154363-67eb9e2ea2ea',
        weight: {
          modern: 0.8,
          minimalist: 0.9,
          scandinavian: 0.7,
          industrial: 0.7,
          japandi: 0.7,
          coastal: 0.5,
          traditional: 0.4,
          contemporary: 0.8,
          bohemian: 0.3,
          midCentury: 0.7
        }
      },
      {
        id: 'layered',
        text: 'Layered & Textured',
        imageUrl: 'https://images.unsplash.com/photo-1600573472613-5d2a0891eb22',
        weight: {
          modern: 0.4,
          minimalist: 0.2,
          scandinavian: 0.5,
          industrial: 0.5,
          japandi: 0.6,
          coastal: 0.7,
          traditional: 0.8,
          contemporary: 0.5,
          bohemian: 0.9,
          midCentury: 0.6
        }
      }
    ]
  },
  {
    id: 'decor-amount',
    title: 'How much decoration do you prefer?',
    type: 'both',
    options: [
      {
        id: 'minimal',
        text: 'Minimal & Curated',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        weight: {
          modern: 0.8,
          minimalist: 0.9,
          scandinavian: 0.8,
          industrial: 0.7,
          japandi: 0.9,
          coastal: 0.5,
          traditional: 0.3,
          contemporary: 0.6,
          bohemian: 0.2,
          midCentury: 0.6
        }
      },
      {
        id: 'abundant',
        text: 'Abundant & Decorated',
        imageUrl: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc',
        weight: {
          modern: 0.3,
          minimalist: 0.1,
          scandinavian: 0.3,
          industrial: 0.4,
          japandi: 0.2,
          coastal: 0.7,
          traditional: 0.9,
          contemporary: 0.5,
          bohemian: 0.9,
          midCentury: 0.5
        }
      }
    ]
  },
  {
    id: 'room-feel',
    title: 'What feeling do you want your room to evoke?',
    type: 'both',
    options: [
      {
        id: 'calm',
        text: 'Calm & Serene',
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
        weight: {
          modern: 0.6,
          minimalist: 0.9,
          scandinavian: 0.8,
          industrial: 0.4,
          japandi: 0.9,
          coastal: 0.8,
          traditional: 0.5,
          contemporary: 0.6,
          bohemian: 0.3,
          midCentury: 0.5
        }
      },
      {
        id: 'energetic',
        text: 'Energetic & Lively',
        imageUrl: 'https://images.unsplash.com/photo-1600573472613-5d2a0891eb22',
        weight: {
          modern: 0.7,
          minimalist: 0.2,
          scandinavian: 0.4,
          industrial: 0.6,
          japandi: 0.3,
          coastal: 0.6,
          traditional: 0.7,
          contemporary: 0.8,
          bohemian: 0.9,
          midCentury: 0.8
        }
      }
    ]
  },
  {
    id: 'window-treatment',
    title: 'What\'s your preferred window treatment?',
    type: 'both',
    options: [
      {
        id: 'minimal-windows',
        text: 'Minimal & Clean',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
        weight: {
          modern: 0.8,
          minimalist: 0.9,
          scandinavian: 0.8,
          industrial: 0.7,
          japandi: 0.8,
          coastal: 0.7,
          traditional: 0.3,
          contemporary: 0.7,
          bohemian: 0.4,
          midCentury: 0.7
        }
      },
      {
        id: 'layered-windows',
        text: 'Layered & Dramatic',
        imageUrl: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc',
        weight: {
          modern: 0.3,
          minimalist: 0.2,
          scandinavian: 0.3,
          industrial: 0.4,
          japandi: 0.3,
          coastal: 0.6,
          traditional: 0.9,
          contemporary: 0.5,
          bohemian: 0.8,
          midCentury: 0.4
        }
      }
    ]
  },
  {
    id: 'art-style',
    title: 'What type of art appeals to you?',
    type: 'both',
    options: [
      {
        id: 'abstract',
        text: 'Abstract & Contemporary',
        imageUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d',
        weight: {
          modern: 0.9,
          minimalist: 0.7,
          scandinavian: 0.6,
          industrial: 0.7,
          japandi: 0.5,
          coastal: 0.4,
          traditional: 0.2,
          contemporary: 0.9,
          bohemian: 0.6,
          midCentury: 0.8
        }
      },
      {
        id: 'traditional',
        text: 'Classical & Traditional',
        imageUrl: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc',
        weight: {
          modern: 0.2,
          minimalist: 0.3,
          scandinavian: 0.4,
          industrial: 0.3,
          japandi: 0.4,
          coastal: 0.5,
          traditional: 0.9,
          contemporary: 0.4,
          bohemian: 0.5,
          midCentury: 0.3
        }
      }
    ]
  }
]; 