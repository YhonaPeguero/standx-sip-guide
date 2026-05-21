import { motion } from 'framer-motion';
import { useI18n } from '../i18n';
import Button from './ui/Button';

function HeroTag() {
  const { t } = useI18n();
  return <span className="tag-pill">{t('hero.tag')}</span>;
}

function FeatureRow() {
  const { t } = useI18n();
  const features = [
    { key: 'dusd', label: t('hero.features.dusd') },
    { key: 'sip2', label: t('hero.features.sip2') },
    { key: 'sip3', label: t('hero.features.sip3') },
    { key: 'multilingual', label: t('hero.features.multilingual') },
  ];

  return (
    <ul className="mt-8 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-4">
      {features.map((feature, index) => (
        <li
          key={feature.key}
          className="flex items-start gap-2 text-[12px] leading-[1.4] text-[var(--sx-text-muted)]"
        >
          <span
            className="mono mt-0.5 inline-flex h-4 w-5 items-center justify-center text-[10px] tracking-[0.12em] text-[var(--sx-primary-bright)]"
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="tracking-[-0.005em]">{feature.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Hero({ onPrimary, onSecondary }) {
  const { t } = useI18n();

  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-start gap-5"
      >
        <HeroTag />

        <h1 className="max-w-[820px] text-[40px] font-semibold leading-[1.02] tracking-[-0.038em] text-[var(--sx-text)] sm:text-[56px] sm:leading-[0.98] lg:text-[64px]">
          {t('hero.title.line1')}{' '}
          <span className="text-[var(--sx-primary-bright)]">{t('hero.title.line2')}</span>
          <span className="text-[var(--sx-primary-bright)]">.</span>
        </h1>

        <p className="max-w-[640px] text-[16px] leading-[1.6] text-[var(--sx-text-muted)] sm:text-[17px]">
          {t('hero.subtitle')}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" onClick={onPrimary} iconRight={<span>→</span>}>
            {t('hero.primaryCta')}
          </Button>
          <Button variant="outline" size="lg" onClick={onSecondary}>
            {t('hero.secondaryCta')}
          </Button>
        </div>

        <FeatureRow />
      </motion.div>
    </section>
  );
}
