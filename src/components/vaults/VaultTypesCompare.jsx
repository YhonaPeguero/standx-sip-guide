import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import { Reveal, StaggerGroup, StaggerItem } from '../Reveal';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Chip from '../ui/Chip';
import SectionHeader from '../ui/SectionHeader';

// The three types and their three attributes come straight from the comparison table in the
// Motivation section of SIP-5B. Only the Strategy Vault has published numeric parameters.
const VAULT_TYPES = [
  { id: 'strategy', tone: 'primary', hasParams: true },
  { id: 'reward', tone: 'accent', hasParams: false },
  { id: 'shield', tone: 'default', hasParams: false },
];

const ATTRIBUTES = ['nature', 'return', 'exit'];

export default function VaultTypesCompare() {
  const { t } = useI18n();
  const [openId, setOpenId] = useState(null);

  return (
    <div className="section-block">
      <Reveal>
        <SectionHeader
          size="lg"
          eyebrow={t('vaults.types.eyebrow')}
          title={t('vaults.types.title')}
          description={t('vaults.types.description')}
        />
      </Reveal>

      <StaggerGroup className="grid gap-3 md:grid-cols-3">
        {VAULT_TYPES.map(({ id, tone, hasParams }) => {
          const isOpen = openId === id;
          const params = hasParams ? t(`vaults.types.${id}.params`) : [];
          const paramItems = Array.isArray(params) ? params : [];

          return (
            <StaggerItem key={id} className="h-full">
              <Card tone="default" padding="md" interactive className="h-full">
                <div className="flex h-full flex-col">
                  <Chip tone={tone} className="self-start">
                    {t(`vaults.types.${id}.tag`)}
                  </Chip>

                  <h3 className="type-h3 mt-3.5">{t(`vaults.types.${id}.name`)}</h3>

                  <dl className="mt-4 flex flex-col divide-y divide-[var(--sx-border-soft)]">
                    {ATTRIBUTES.map((attribute) => (
                      <div key={attribute} className="flex flex-col gap-1 py-2.5 first:pt-0">
                        <dt className="mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--sx-muted)]">
                          {t(`vaults.types.columns.${attribute}`)}
                        </dt>
                        <dd className="text-[13.5px] leading-[1.5] text-[var(--sx-text)]">
                          {t(`vaults.types.${id}.${attribute}`)}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-auto pt-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      iconRight={<span aria-hidden="true">{isOpen ? '−' : '+'}</span>}
                      aria-expanded={isOpen}
                      onClick={() => setOpenId(isOpen ? null : id)}
                    >
                      {isOpen ? t('vaults.types.hideDetail') : t('vaults.types.showDetail')}
                    </Button>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="hairline mt-3 pt-3.5">
                          <p className="text-[13px] leading-[1.6] text-[var(--sx-text-muted)]">
                            {t(`vaults.types.${id}.detail`)}
                          </p>

                          {paramItems.length > 0 ? (
                            <ul className="mt-3.5 flex flex-col gap-2">
                              {paramItems.map((param, index) => (
                                <li key={index} className="flex items-baseline justify-between gap-3">
                                  <span className="text-[12.5px] leading-[1.5] text-[var(--sx-muted)]">
                                    {param.label}
                                  </span>
                                  <span className="mono shrink-0 text-[12.5px] font-semibold text-[var(--sx-primary-bright)]">
                                    {param.value}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerGroup>
    </div>
  );
}
