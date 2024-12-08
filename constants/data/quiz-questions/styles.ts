interface DesignStyle {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  characteristics: string[];
  colorPalette: string[];
  galleryImages: string[];
  probability?: number;
}

export const DESIGN_STYLES = {
  modern: {
    id: 'modern',
    name: 'Modern',
    description: 'Clean lines and minimalist approach with a focus on functionality.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
    characteristics: ['Clean lines', 'Neutral colors', 'Minimal decoration'],
    colorPalette: ['#FFFFFF', '#000000', '#808080', '#D3D3D3'],
    galleryImages: [
      'https://images.unsplash.com/photo-1...',
      // Add more image URLs
    ],
    probability: 0
  },
  minimalist: {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simplicity at its finest with clean spaces and purposeful design.',
    imageUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
    characteristics: ['Simple forms', 'Limited color palette', 'Uncluttered spaces'],
    colorPalette: ['#FFFFFF', '#000000', '#808080', '#D3D3D3'],
    galleryImages: [
      'https://images.unsplash.com/photo-1...',
      // Add more image URLs
    ],
    probability: 0
  },
  scandinavian: {
    id: 'scandinavian',
    name: 'Scandinavian',
    description: 'Light, airy spaces with natural elements and cozy accents.',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf',
    characteristics: ['Light woods', 'White spaces', 'Natural textures'],
    colorPalette: ['#FFFFFF', '#000000', '#808080', '#D3D3D3'],
    galleryImages: [
      'https://images.unsplash.com/photo-1...',
      // Add more image URLs
    ],
    probability: 0
  },
  industrial: {
    id: 'industrial',
    name: 'Industrial',
    description: 'Raw and urban aesthetic with exposed materials and vintage touches.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    characteristics: ['Exposed brick', 'Metal accents', 'Open spaces'],
    colorPalette: ['#FFFFFF', '#000000', '#808080', '#D3D3D3'],
    galleryImages: [
      'https://images.unsplash.com/photo-1...',
      // Add more image URLs
    ],
    probability: 0
  },
  bohemian: {
    id: 'bohemian',
    name: 'Bohemian',
    description: 'Free-spirited and eclectic mix of colors, patterns, and textures.',
    imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
    characteristics: ['Mixed patterns', 'Rich colors', 'Layered textures'],
    colorPalette: ['#FFFFFF', '#000000', '#808080', '#D3D3D3'],
    galleryImages: [
      'https://images.unsplash.com/photo-1...',
      // Add more image URLs
    ],
    probability: 0
  },
  coastal: {
    id: 'coastal',
    name: 'Coastal',
    description: 'Beach-inspired design with light colors and natural materials.',
    imageUrl: 'https://images.unsplash.com/photo-1600573472591-ee6c8e695481',
    characteristics: ['Light blues', 'Natural light', 'Beach elements'],
    colorPalette: ['#FFFFFF', '#000000', '#808080', '#D3D3D3'],
    galleryImages: [
      'https://images.unsplash.com/photo-1...',
      // Add more image URLs
    ],
    probability: 0
  },
  traditional: {
    id: 'traditional',
    name: 'Traditional',
    description: 'Classic and timeless design with elegant details and rich textures.',
    imageUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
    characteristics: ['Symmetry', 'Classic patterns', 'Rich colors'],
    colorPalette: ['#FFFFFF', '#000000', '#808080', '#D3D3D3'],
    galleryImages: [
      'https://images.unsplash.com/photo-1...',
      // Add more image URLs
    ],
    probability: 0
  },
  contemporary: {
    id: 'contemporary',
    name: 'Contemporary',
    description: 'Current trends mixed with modern and traditional elements.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498e',
    characteristics: ['Mixed materials', 'Bold accents', 'Clean lines'],
    colorPalette: ['#FFFFFF', '#000000', '#808080', '#D3D3D3'],
    galleryImages: [
      'https://images.unsplash.com/photo-1...',
      // Add more image URLs
    ],
    probability: 0
  },
  japandi: {
    id: 'japandi',
    name: 'Japandi',
    description: 'Japanese minimalism meets Scandinavian functionality.',
    imageUrl: 'https://images.unsplash.com/photo-1598928636598-26c2a617c15d',
    characteristics: ['Natural materials', 'Minimal decor', 'Zen aesthetic'],
    colorPalette: ['#FFFFFF', '#000000', '#808080', '#D3D3D3'],
    galleryImages: [
      'https://images.unsplash.com/photo-1...',
      // Add more image URLs
    ],
    probability: 0
  },
  midCentury: {
    id: 'midCentury',
    name: 'Mid-Century Modern',
    description: 'Retro-inspired design with organic shapes and clean lines.',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    characteristics: ['Organic shapes', 'Retro elements', 'Functional design'],
    colorPalette: ['#FFFFFF', '#000000', '#808080', '#D3D3D3'],
    galleryImages: [
      'https://images.unsplash.com/photo-1...',
      // Add more image URLs
    ],
    probability: 0
  }
} as const;

export type StyleKey = keyof typeof DESIGN_STYLES;

// Helper function to get style details
export const getStyleDetails = (styleKey: StyleKey) => DESIGN_STYLES[styleKey];

// Get all style keys
export const getAllStyles = () => Object.keys(DESIGN_STYLES) as StyleKey[];

// Get style characteristics
export const getStyleCharacteristics = (styleKey: StyleKey) => 
  DESIGN_STYLES[styleKey].characteristics;

// Placeholder images untuk quiz questions
export const QUESTION_IMAGES = {
  colorPalette: {
    neutral: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800',
    bold: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800'
  },
  lighting: {
    natural: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800',
    ambient: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?q=80&w=800'
  },
  furniture: {
    clean: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?q=80&w=800',
    ornate: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800'
  },
  // ... tambahkan kategori lainnya
};