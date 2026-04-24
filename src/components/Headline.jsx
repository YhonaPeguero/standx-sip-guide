import { useI18n } from '../i18n';

export default function Headline() {
  const { t } = useI18n();

  return (
    <h1 className="max-w-[640px] text-[42px] font-semibold leading-[1] tracking-[-0.038em] text-[var(--sx-text)] sm:text-[56px] sm:leading-[0.96] lg:text-[64px]">
      {t('headline.title')}
      <span className="text-[var(--sx-accent)]">.</span>
    </h1>
  );
}
