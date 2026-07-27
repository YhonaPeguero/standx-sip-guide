import { useI18n } from '../../i18n';

// Two fixed markers used across the SIP-5B modules. Both read the same literal string in
// every locale on purpose: one states that a figure came from the reader, the other that
// SIP-5B does not publish it. Neither may ever be attached to an invented number.

export function IllustrativeNote({ className = '' }) {
  const { t } = useI18n();

  return (
    <p className={`type-caption text-[var(--sx-muted-soft)] ${className}`}>
      {t('vaults.illustrative')}
    </p>
  );
}

export function NotPublishedChip({ className = '' }) {
  const { t } = useI18n();

  return (
    <span
      className={`mono inline-flex shrink-0 items-center whitespace-nowrap px-1.5 py-0.5 text-[10px] tracking-[0.1em] ${className}`}
      style={{
        borderRadius: 3,
        color: 'var(--sx-muted)',
        border: '1px dashed var(--sx-border-strong)',
      }}
    >
      {t('vaults.notPublished')}
    </span>
  );
}
