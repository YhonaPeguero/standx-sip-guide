export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  className = '',
}) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <header className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <div className={`flex flex-col gap-2.5 ${alignClasses}`}>
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        {title ? (
          <h2 className="max-w-[680px] text-[25px] font-semibold leading-[1.12] tracking-[-0.02em] text-[var(--sx-text)] sm:text-[29px]">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="max-w-[560px] text-[15px] leading-[1.62] text-[var(--sx-text-muted)]">
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0 sm:ml-6">{action}</div> : null}
    </header>
  );
}
