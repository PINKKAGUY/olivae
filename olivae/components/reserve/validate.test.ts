import { describe, it, expect } from 'vitest';
import { validate, type ReserveForm } from './validate';

const valid: ReserveForm = {
  date: '2026-07-01',
  time: '20:00',
  guests: '2',
  name: 'Lina',
  email: 'lina@example.com',
  phone: '+971500000000',
  occasion: '',
};

describe('validate', () => {
  it('returns no errors for a valid form', () => {
    expect(validate(valid)).toEqual({});
  });

  it('requires a name', () => {
    expect(validate({ ...valid, name: '' }).name).toBeTruthy();
  });

  it('rejects a malformed email', () => {
    expect(validate({ ...valid, email: 'nope' }).email).toBeTruthy();
  });

  it('requires date, time, and guests', () => {
    const errs = validate({ ...valid, date: '', time: '', guests: '' });
    expect(errs.date).toBeTruthy();
    expect(errs.time).toBeTruthy();
    expect(errs.guests).toBeTruthy();
  });
});
