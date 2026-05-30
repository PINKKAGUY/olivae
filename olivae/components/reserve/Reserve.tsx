'use client';

import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';
import { GoldButton } from '@/components/ui/GoldButton';
import { validate, type ReserveForm, type Errors } from './validate';

const empty: ReserveForm = {
  date: '',
  time: '',
  guests: '',
  name: '',
  email: '',
  phone: '',
  occasion: '',
};

const fieldBase =
  'w-full bg-transparent border-b border-gold/30 py-3 text-ivory placeholder-warmgray focus:border-gold focus:outline-hidden transition-colors';

export function Reserve() {
  const [form, setForm] = useState<ReserveForm>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof ReserveForm, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) setSubmitted(true);
  };

  return (
    <Section id="reserve">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <Eyebrow>Reservations</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl font-light text-ivory md:text-5xl">
            Reserve your table
          </h2>
          <p className="mt-4 text-warmgray">
            We hold tables for two hours. For parties larger than eight, please call us.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="relative mx-auto mt-12 max-w-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 border border-gold/30 bg-night px-8 py-16 text-center"
              >
                <span className="font-serif text-6xl text-gold">✦</span>
                <h3 className="font-serif text-3xl text-ivory">Reservation requested</h3>
                <p className="max-w-md text-warmgray">
                  Thank you, {form.name.split(' ')[0] || 'guest'}. We&apos;ll confirm your table at{' '}
                  {form.time || 'your chosen time'} by email shortly.
                </p>
                <button
                  onClick={() => {
                    setForm(empty);
                    setSubmitted(false);
                  }}
                  className="mt-2 text-sm uppercase tracking-[0.2em] text-gold hover:text-goldlight"
                >
                  Make another request
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                <Field label="Date" error={errors.date}>
                  <input type="date" className={fieldBase} value={form.date}
                    onChange={(e) => update('date', e.target.value)} />
                </Field>
                <Field label="Time" error={errors.time}>
                  <input type="time" className={fieldBase} value={form.time}
                    onChange={(e) => update('time', e.target.value)} />
                </Field>
                <Field label="Guests" error={errors.guests}>
                  <select className={fieldBase} value={form.guests}
                    onChange={(e) => update('guests', e.target.value)}>
                    <option value="" className="bg-charcoal">Party size</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n} className="bg-charcoal">{n} {n === 1 ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Occasion" error={undefined}>
                  <input type="text" placeholder="Birthday, anniversary…" className={fieldBase}
                    value={form.occasion} onChange={(e) => update('occasion', e.target.value)} />
                </Field>
                <Field label="Name" error={errors.name}>
                  <input type="text" placeholder="Your name" className={fieldBase}
                    value={form.name} onChange={(e) => update('name', e.target.value)} />
                </Field>
                <Field label="Email" error={errors.email}>
                  <input type="email" placeholder="you@email.com" className={fieldBase}
                    value={form.email} onChange={(e) => update('email', e.target.value)} />
                </Field>
                <Field label="Phone" error={errors.phone} full>
                  <input type="tel" placeholder="+971 …" className={fieldBase}
                    value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                </Field>
                <div className="sm:col-span-2 mt-2 flex justify-center">
                  <GoldButton type="submit">Request reservation</GoldButton>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </Section>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-warmgray">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-300">{error}</p>}
    </div>
  );
}
