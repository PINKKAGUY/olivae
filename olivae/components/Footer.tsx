import { info } from '@/data/info';

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-charcoal px-6 py-16 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="font-serif text-3xl text-ivory">Olivae</div>
            <p className="mt-4 max-w-xs text-sm text-warmgray">
              Mediterranean fine dining, above the Dubai skyline.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-eyebrow text-gold">Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-warmgray">
              {info.hours.map((h) => (
                <li key={h.days} className="flex justify-between gap-6">
                  <span>{h.days}</span>
                  <span className="text-ivory/80">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-eyebrow text-gold">Find us</h3>
            <address className="mt-4 space-y-1 text-sm not-italic text-warmgray">
              {info.address.map((line) => (
                <div key={line}>{line}</div>
              ))}
              <div className="pt-2">
                <a href={`tel:${info.phone.replace(/\s/g, '')}`} className="hover:text-gold">
                  {info.phone}
                </a>
              </div>
              <div>
                <a href={`mailto:${info.email}`} className="hover:text-gold">
                  {info.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="my-10 hairline" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-warmgray sm:flex-row">
          <span>© {/* static year */}2026 Olivae. All rights reserved.</span>
          <div className="flex gap-6">
            {info.socials.map((s) => (
              <a key={s.label} href={s.href} className="uppercase tracking-[0.2em] hover:text-gold">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
