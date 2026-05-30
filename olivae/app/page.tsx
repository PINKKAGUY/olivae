import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Story } from '@/components/Story';
import { Menu } from '@/components/Menu';
import { Gallery } from '@/components/Gallery';
import { Reserve } from '@/components/reserve/Reserve';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Story />
      <Menu />
      <Gallery />
      <Reserve />
      <Footer />
    </main>
  );
}
