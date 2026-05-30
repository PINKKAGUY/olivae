import type { ReactNode } from 'react';

export function GoldButton({
  children,
  href,
  variant = 'solid',
  type,
  className = '',
}: {
  children: ReactNode;
  href?: string;
  variant?: 'solid' | 'ghost';
  type?: 'button' | 'submit';
  className?: string;
}) {
  const base =
    'inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-[0.2em] transition-colors duration-300';
  const styles =
    variant === 'solid'
      ? 'bg-gold text-charcoal hover:bg-goldlight'
      : 'border border-gold/60 text-gold hover:border-gold hover:bg-gold/10';
  const cls = `${base} ${styles} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? 'button'} className={cls}>
      {children}
    </button>
  );
}
