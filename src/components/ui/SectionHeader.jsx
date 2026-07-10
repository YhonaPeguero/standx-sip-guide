export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  action,
  className = '',
  size = 'md',
}) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  // Sizes come from the token scale (--sx-fs-h2 / --sx-fs-h2-sm) via type roles.
  const titleClass =
    size === 'lg' ? 'type-h2 max-w-[780px]' : 'type-h2-sm max-w-[680px]';

  return (
    <header className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${className}`}>
      <div className={`flex flex-col ${alignClasses}`}>
        {/* Eyebrow is the single section-marker pattern (tag-pill), with air before the title */}
        {eyebrow ? <span className="tag-pill mb-5">{eyebrow}</span> : null}
        {title ? <h2 className={titleClass}>{title}</h2> : null}
        {description ? (
          <p className="type-body mt-3.5 max-w-[620px] text-[var(--sx-text-muted)]">
            {description}
          </p>
        ) : null}
      </div>

      {action ? <div className="shrink-0 sm:ml-6">{action}</div> : null}
    </header>
  );
}
