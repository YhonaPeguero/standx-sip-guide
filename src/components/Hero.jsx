import { motion, useReducedMotion } from 'framer-motion';
import { useI18n } from '../i18n';
import Button from './ui/Button';

const EASE = [0.22, 1, 0.36, 1];

function FeatureRow() {
  const { t } = useI18n();
  const features = [
    { key: 'dusd', label: t('hero.features.dusd') },
    { key: 'sip2', label: t('hero.features.sip2') },
    { key: 'sip3', label: t('hero.features.sip3') },
    { key: 'multilingual', label: t('hero.features.multilingual') },
  ];

  return (
    <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-4">
      {features.map((feature, index) => (
        <li
          key={feature.key}
          className="type-body-sm flex items-start gap-2 text-[var(--sx-text-muted)]"
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
  const reduceMotion = useReducedMotion();

  // Signature entrance: tag → headline → subtitle → CTAs → features rise in sequence,
  // then a gradient rule sweeps in under the headline. Disabled under reduced motion.
  const container = {
    hidden: {},
    show: {
      transition: reduceMotion ? {} : { staggerChildren: 0.09, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
  };

  return (
    <section className="relative">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col items-start gap-6"
      >
        <motion.span variants={item} className="tag-pill">
          {t('hero.tag')}
        </motion.span>

        <motion.h1 variants={item} className="type-display max-w-[900px]">
          {t('hero.title.line1')}{' '}
          <span className="text-gradient-primary">{t('hero.title.line2')}</span>
          <span className="text-[var(--sx-primary-glow)]">.</span>
        </motion.h1>

        <motion.span
          aria-hidden="true"
          initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: reduceMotion ? 0 : 0.55, ease: EASE }}
          className="h-[2px] w-[72px] origin-left"
          style={{
            background: 'linear-gradient(90deg, var(--sx-primary-bright), var(--sx-primary-glow))',
            boxShadow: '0 0 16px rgba(0, 255, 128, 0.35)',
          }}
        />

        <motion.p variants={item} className="type-body-lg max-w-[620px] text-[var(--sx-text-muted)]">
          {t('hero.subtitle')}
        </motion.p>

        <motion.div variants={item} className="mt-1 flex flex-wrap items-center gap-3">
          <Button variant="primary" size="lg" onClick={onPrimary} iconRight={<span>→</span>}>
            {t('hero.primaryCta')}
          </Button>
          <Button variant="outline" size="lg" onClick={onSecondary}>
            {t('hero.secondaryCta')}
          </Button>
        </motion.div>

        <motion.div variants={item} className="w-full">
          <FeatureRow />
        </motion.div>
      </motion.div>
    </section>
  );
}
