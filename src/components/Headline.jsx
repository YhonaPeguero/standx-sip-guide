import { useI18n } from '../i18n';

export default function Headline() {
  const { t } = useI18n();

  return (
    <h1 className="type-h1 max-w-[680px]">
      {t('headline.title')}
      <span className="text-[var(--sx-primary-glow)]">.</span>
    </h1>
  );
}
