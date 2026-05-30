import Image from 'next/image';
import { site } from '@/data/site';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

export function Story() {
  const { story } = site;
  return (
    <Section id="story" className="bg-night">
      <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image src={story.image} alt="Inside Olivae" fill className="object-cover" />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div>
            <Eyebrow>{story.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-ivory md:text-5xl">
              {story.title}
            </h2>
            <div className="mt-6 space-y-4 text-ivory/70">
              {story.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gold/20 pt-8">
              {story.stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl text-gold">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-warmgray">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
