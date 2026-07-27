import { motion, useReducedMotion } from 'framer-motion';
import { useI18n } from '../i18n';
import Button from './ui/Button';

// THESIS: this guide opens as what it is — the front matter of a specification, not the
// top of a landing page. It refuses eyebrow pill → gradient display headline → two CTAs →
// numbered feature row, the arrangement every dark crypto site has shipped since 2021.
// OWN-WORLD: inherited unchanged. StandX green on near-black, Geist + Geist Mono, 3–6px
// radii, hairline rules, the inset-highlight elevation ladder. The one primitive promoted
// is the mono field table already used for SIP-5B's header on the vaults tab.
// STORY: a reader arriving from a shared link learns in one viewport what this document
// is, what it covers, who maintains it, that it is unaffiliated, and where to start.
// FIRST VIEWPORT: left-aligned masthead. Title at h1, abstract beneath it, then a
// hairline-ruled six-field table. Affiliation is a field with a value, not fine print.
// One outline action into the simulator; the mechanics link stays plain text.
// FORM: specification front matter — the notation this audience reads daily on
// docs.standx.com. Inherited surface, so no concept roll.

const EASE = [0.22, 1, 0.36, 1];

export const SIP_DOCS_URL = 'https://docs.standx.com/sip/';

export default function Hero({ onPrimary, onSecondary }) {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();

  // The scope field carries the three yield layers the guide covers, joined rather than
  // listed, so the table reads as one record instead of reintroducing a feature row.
  const scopeValue = [
    t('hero.features.dusd'),
    t('hero.features.sip2'),
    t('hero.features.sip3'),
  ].join(' · ');

  const fields = [
    { key: 'source', value: t('hero.meta.sourceValue'), href: SIP_DOCS_URL },
    { key: 'scope', value: scopeValue, wide: true },
    { key: 'languages', value: t('hero.features.multilingual') },
    { key: 'maintainer', value: t('hero.meta.maintainerValue') },
    { key: 'affiliation', value: t('hero.meta.affiliationValue'), emphasis: true },
  ];

  const container = {
    hidden: {},
    show: {
      transition: reduceMotion ? {} : { staggerChildren: 0.07, delayChildren: 0.04 },
    },
  };

  const item = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  };

  return (
    <section className="content-layer relative">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col">
        <motion.h1 variants={item} className="type-h1 max-w-[760px]">
          {t('hero.title.line1')} {t('hero.title.line2')}
        </motion.h1>

        <motion.p
          variants={item}
          className="type-body-lg mt-6 max-w-[640px] text-[var(--sx-text-muted)]"
        >
          {t('hero.subtitle')}
        </motion.p>

        {/* The masthead record. Same mono dt/dd grammar as the SIP-5B header table on the
            vaults tab, so the guide describes itself the way it describes a proposal. */}
        <motion.dl
          variants={item}
          className="hairline mt-10 grid gap-x-8 gap-y-5 pt-7 sm:grid-cols-2 lg:grid-cols-3"
        >
          {fields.map((field) => (
            <div
              key={field.key}
              className={`flex flex-col gap-1.5 ${field.wide ? 'lg:col-span-2' : ''}`}
            >
              <dt className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--sx-muted)]">
                {t(`hero.meta.${field.key}`)}
              </dt>
              <dd
                className="mono text-[13px] font-semibold leading-[1.5] tracking-[-0.01em]"
                style={{ color: field.emphasis ? 'var(--sx-primary-bright)' : 'var(--sx-text)' }}
              >
                {field.href ? (
                  <a
                    href={field.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-[var(--sx-border-strong)] underline-offset-4 transition-colors duration-200 hover:decoration-[var(--sx-primary-bright)]"
                  >
                    {field.value}
                    <span aria-hidden="true"> ↗</span>
                  </a>
                ) : (
                  field.value
                )}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button variant="outline" size="md" onClick={onPrimary} iconRight={<span>→</span>}>
            {t('hero.primaryCta')}
          </Button>
          <button
            type="button"
            onClick={onSecondary}
            className="text-[14px] font-medium text-[var(--sx-text-muted)] underline decoration-[var(--sx-border-strong)] underline-offset-4 outline-none transition-colors duration-200 hover:text-[var(--sx-text)] hover:decoration-[var(--sx-primary-bright)]"
          >
            {t('hero.secondaryCta')}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
