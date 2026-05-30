'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { site } from '@/data/site';
import { GoldButton } from '@/components/ui/GoldButton';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} id="top" className="relative h-screen w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={site.heroImage}
          alt="Mediterranean coastline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/30 to-charcoal" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-xs uppercase tracking-eyebrow text-gold"
        >
          Mediterranean · Dubai
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl font-light leading-none text-ivory md:text-8xl"
        >
          {site.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-balance text-lg text-ivory/80"
        >
          {site.heroTagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <GoldButton href="#reserve">Reserve a table</GoldButton>
          <GoldButton href="#menu" variant="ghost">
            View the menu
          </GoldButton>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <span className="text-xs uppercase tracking-eyebrow text-ivory/50">Scroll</span>
      </div>
    </div>
  );
}
