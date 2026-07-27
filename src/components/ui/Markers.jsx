import { useI18n } from '../../i18n';

// The two fixed markers that carry the site's numbers rule: every figure on screen is
// published by StandX, typed in by the reader, or declared `not published`. Both read the
// same literal string in every locale on purpose. Neither may ever be attached to an
// invented number.
//
// They started out in the SIP-5B modules and now serve the simulator too, so they live here
// rather than under components/vaults/. The i18n keys keep their original `vaults.*` names:
// the strings are single-sourced and identical everywhere, and renaming them across five
// locales would churn the vaults tab for no behavioural gain.

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
