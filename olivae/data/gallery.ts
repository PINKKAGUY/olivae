export type GalleryImage = {
  src: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
};

export const gallery: GalleryImage[] = [
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80', alt: 'Olivae dining room', span: 'wide' },
  { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80', alt: 'Plated seafood dish', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=900&q=80', alt: 'Fresh Mediterranean mezze' },
  { src: 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?auto=format&fit=crop&w=900&q=80', alt: 'Olive grove' },
  { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80', alt: 'Grilled dish close-up', span: 'tall' },
  { src: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80', alt: 'Dubai skyline at dusk', span: 'wide' },
];
