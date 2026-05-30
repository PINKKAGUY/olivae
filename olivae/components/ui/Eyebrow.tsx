export function Eyebrow({ children }: { children: string }) {
  return (
    <span className="block text-xs font-medium uppercase tracking-eyebrow text-gold">
      {children}
    </span>
  );
}
