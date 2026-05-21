const TONES = {
  default: {
    color: 'var(--sx-text-muted)',
    background: 'var(--sx-surface-2)',
    border: 'var(--sx-border)',
  },
  primary: {
    color: 'var(--sx-primary-bright)',
    background: 'rgba(0,102,50,0.18)',
    border: 'rgba(139, 210, 178, 0.28)',
  },
  accent: {
    color: 'var(--sx-accent)',
    background: 'var(--sx-accent-soft)',
    border: 'rgba(250, 198, 195, 0.32)',
  },
  muted: {
    color: 'var(--sx-muted)',
    background: 'transparent',
    border: 'var(--sx-border)',
  },
};

export default function Chip({ children, tone = 'default', className = '', as: Component = 'span' }) {
  const palette = TONES[tone] ?? TONES.default;

  return (
    <Component
      className={`mono inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] ${className}`}
      style={{
        borderRadius: 3,
        color: palette.color,
        backgroundColor: palette.background,
        border: `1px solid ${palette.border}`,
      }}
    >
      {children}
    </Component>
  );
}
