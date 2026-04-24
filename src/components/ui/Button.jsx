import { motion } from 'framer-motion';

const VARIANTS = {
  primary: {
    base: 'bg-[var(--sx-primary)] text-white border border-[rgba(255,255,255,0.06)]',
    hover: {
      backgroundColor: 'var(--sx-primary-hover)',
      boxShadow: '0 10px 28px rgba(0, 102, 50, 0.42)',
      y: -1,
    },
    pressed: { backgroundColor: 'var(--sx-primary-pressed)', y: 0, scale: 0.985 },
  },
  secondary: {
    base: 'bg-[var(--sx-surface-2)] text-[var(--sx-text)] border border-[var(--sx-border)]',
    hover: {
      backgroundColor: 'var(--sx-surface-hover)',
      borderColor: 'var(--sx-border-strong)',
      y: -1,
    },
    pressed: { y: 0, scale: 0.985 },
  },
  ghost: {
    base: 'bg-transparent text-[var(--sx-primary-bright)] border border-transparent',
    hover: { color: 'var(--sx-text)' },
    pressed: { scale: 0.99 },
  },
  outline: {
    base: 'bg-transparent text-[var(--sx-primary-bright)] border border-[var(--sx-border-strong)]',
    hover: {
      borderColor: 'rgba(0, 102, 50, 0.7)',
      backgroundColor: 'rgba(0, 102, 50, 0.08)',
      color: 'var(--sx-text)',
      y: -1,
    },
    pressed: { y: 0, scale: 0.985 },
  },
};

const SIZES = {
  sm: 'h-8 px-3 text-[12px]',
  md: 'h-10 px-4 text-[13px]',
  lg: 'h-12 px-6 text-[14px]',
};

export default function Button({
  variant = 'secondary',
  size = 'md',
  children,
  className = '',
  fullWidth = false,
  iconRight,
  iconLeft,
  href,
  target,
  rel,
  ...rest
}) {
  const palette = VARIANTS[variant] ?? VARIANTS.secondary;
  const sizeClass = SIZES[size] ?? SIZES.md;
  const widthClass = fullWidth ? 'w-full' : '';
  const isExternalLink = typeof href === 'string' && /^https?:\/\//i.test(href);
  const linkTarget = target ?? (isExternalLink ? '_blank' : undefined);
  const linkRel = rel ?? (linkTarget === '_blank' ? 'noopener noreferrer' : undefined);
  const classes = `group inline-flex items-center justify-center gap-2 font-medium tracking-[-0.005em] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sx-bg)] ${palette.base} ${sizeClass} ${widthClass} ${className}`;

  const content = (
    <>
      {iconLeft ? <span className="inline-flex shrink-0">{iconLeft}</span> : null}
      <span className="inline-flex items-center">{children}</span>
      {iconRight ? (
        <span
          aria-hidden="true"
          className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
        >
          {iconRight}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <motion.a
        whileHover={palette.hover}
        whileTap={palette.pressed}
        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
        href={href}
        target={linkTarget}
        rel={linkRel}
        className={classes}
        style={{ borderRadius: 4 }}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      whileHover={palette.hover}
      whileTap={palette.pressed}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={classes}
      style={{ borderRadius: 4 }}
      {...rest}
    >
      {content}
    </motion.button>
  );
}
