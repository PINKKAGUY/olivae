'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { menu } from '@/data/menu';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const category = menu.find((c) => c.id === active) ?? menu[0];

  return (
    <Section id="menu">
      <Reveal>
        <div className="text-center">
          <Eyebrow>The Menu</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-light text-ivory md:text-5xl">
            A table by the sea
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {menu.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2 text-sm uppercase tracking-[0.2em] transition-colors ${
                active === c.id
                  ? 'text-gold'
                  : 'text-warmgray hover:text-ivory'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.ul
          key={category.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-3xl divide-y divide-gold/10"
        >
          {category.items.map((item) => (
            <li key={item.name} className="flex items-baseline justify-between gap-6 py-5">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="font-serif text-xl text-ivory">{item.name}</h3>
                  {item.signature && (
                    <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
                      Signature
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-warmgray">{item.description}</p>
              </div>
              <div className="whitespace-nowrap font-serif text-lg text-gold">
                {item.price} <span className="text-sm text-warmgray">AED</span>
              </div>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </Section>
  );
}
