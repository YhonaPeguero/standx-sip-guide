export default function Stat({ label, value, sublabel, accent = false, size = 'md', className = '' }) {
  const valueSize =
    size === 'lg'
      ? 'text-[26px] sm:text-[30px]'
      : size === 'sm'
        ? 'text-[16px] sm:text-[18px]'
        : 'text-[20px] sm:text-[22px]';

  const valueColor = accent ? 'var(--sx-primary-bright)' : 'var(--sx-text)';

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <p className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--sx-muted)]">{label}</p>
      <p
        className={`mono ${valueSize} font-semibold tracking-[-0.02em]`}
        style={{ color: valueColor }}
      >
        {value}
      </p>
      {sublabel ? (
        <p className="text-[12px] leading-[1.5] text-[var(--sx-muted-soft)]">{sublabel}</p>
      ) : null}
    </div>
  );
}
