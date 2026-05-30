export type ReserveForm = {
  date: string;
  time: string;
  guests: string;
  name: string;
  email: string;
  phone: string;
  occasion: string;
};

export type Errors = Partial<Record<keyof ReserveForm, string>>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validate(form: ReserveForm): Errors {
  const errors: Errors = {};
  if (!form.date) errors.date = 'Please choose a date';
  if (!form.time) errors.time = 'Please choose a time';
  if (!form.guests) errors.guests = 'Select party size';
  if (!form.name.trim()) errors.name = 'Please enter your name';
  if (!emailRe.test(form.email)) errors.email = 'Enter a valid email';
  if (!form.phone.trim()) errors.phone = 'Please enter a phone number';
  return errors;
}
