import { motion } from 'framer-motion';

const TONES = {
  default: {
    background: 'var(--sx-surface)',
    border: 'var(--sx-border)',
    hoverBorder: 'var(--sx-border-strong)',
    hoverBackground: 'var(--sx-surface-hover)',
  },
  raised: {
    background: 'var(--sx-surface)',
    border: 'var(--sx-border-strong)',
    hoverBorder: 'rgba(0, 102, 50, 0.55)',
    hoverBackground: 'var(--sx-surface-hover)',
  },
  subtle: {
    background: 'var(--sx-surface-2)',
    border: 'var(--sx-border-soft)',
    hoverBorder: 'var(--sx-border-strong)',
    hoverBackground: 'var(--sx-surface-3)',
  },
};

const PADDING = {
  sm: 'p-4',
  md: 'p-5 sm:p-6',
  lg: 'p-6 sm:p-8',
};

export default function Card({
  children,
  tone = 'default',
  padding = 'md',
  interactive = false,
  elevated = false,
  className = '',
  as: Component = 'article',
  ...rest
}) {
  const palette = TONES[tone] ?? TONES.default;
  const padClass = PADDING[padding] ?? PADDING.md;

  const baseClasses = `relative ${padClass} ${className}`;
  const shadow = elevated ? 'var(--sx-shadow-lg)' : 'var(--sx-shadow-md)';

  if (interactive) {
    return (
      <motion.div
        initial={false}
        whileHover={{
          borderColor: palette.hoverBorder,
          backgroundColor: palette.hoverBackground,
          y: -2,
        }}
        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className={`${baseClasses} border`}
        style={{
          borderRadius: 6,
          backgroundColor: palette.background,
          borderColor: palette.border,
          boxShadow: shadow,
        }}
      >
        <Component {...rest}>{children}</Component>
      </motion.div>
    );
  }

  return (
    <Component
      {...rest}
      className={`${baseClasses} border`}
      style={{
        borderRadius: 6,
        backgroundColor: palette.background,
        borderColor: palette.border,
        boxShadow: shadow,
      }}
    >
      {children}
    </Component>
  );
}
