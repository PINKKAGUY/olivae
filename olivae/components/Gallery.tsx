'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gallery, type GalleryImage } from '@/data/gallery';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

const spanClass: Record<NonNullable<GalleryImage['span']> | 'normal', string> = {
  wide: 'sm:col-span-2',
  tall: 'sm:row-span-2',
  normal: '',
};

export function Gallery() {
  const [active, setActive] = useState<GalleryImage | null>(null);

  return (
    <Section id="gallery" className="bg-night">
      <Reveal>
        <div className="text-center">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-light text-ivory md:text-5xl">
            Moments at Olivae
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3">
          {gallery.map((img) => (
            <button
              key={img.src}
              onClick={() => setActive(img)}
              className={`group relative overflow-hidden ${spanClass[img.span ?? 'normal']}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-charcoal/20 transition-colors group-hover:bg-charcoal/0" />
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/90 p-6"
          >
            <div className="relative h-[80vh] w-full max-w-4xl">
              <Image src={active.src} alt={active.alt} fill className="object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
