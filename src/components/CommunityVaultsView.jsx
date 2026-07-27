import { useI18n } from '../i18n';
import { Reveal } from './Reveal';
import Button from './ui/Button';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import LiquidationFlow from './vaults/LiquidationFlow';
import TradingGateChecklist from './vaults/TradingGateChecklist';
import VaultTypesCompare from './vaults/VaultTypesCompare';

export const VAULTS_DOC_URL = 'https://docs.standx.com/sip/sip-5b-community-vault';

// Header field table of SIP-5B, verbatim. Every figure in this view is either from the
// proposal, typed in by the reader, or marked as not published.
const META_FIELDS = ['sip', 'parent', 'status', 'date', 'release', 'author'];

export default function CommunityVaultsView() {
  const { t } = useI18n();

  return (
    <div className="section-stack" id="vaults">
      <div className="section-block">
        <Reveal className="flex flex-col gap-5">
          <SectionHeader
            size="lg"
            eyebrow={t('vaults.eyebrow')}
            title={t('vaults.title')}
            description={t('vaults.description')}
          />
          <p className="type-body max-w-[760px] text-[var(--sx-text-muted)]">{t('vaults.intro')}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <Card tone="subtle" padding="md">
            <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
              {META_FIELDS.map((field) => (
                <div key={field} className="flex flex-col gap-1.5">
                  <dt className="mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--sx-muted)]">
                    {t(`vaults.meta.${field}`)}
                  </dt>
                  <dd className="mono text-[13px] font-semibold tracking-[-0.01em] text-[var(--sx-text)]">
                    {t(`vaults.metaValues.${field}`)}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="hairline mt-5 pt-4">
              <Button
                variant="outline"
                size="sm"
                href={VAULTS_DOC_URL}
                iconRight={<span aria-hidden="true">↗</span>}
              >
                {t('vaults.docLink')}
              </Button>
            </div>
          </Card>
        </Reveal>
      </div>

      {/* Three modules; Shield Health rides along inside the liquidation flow as a strip */}
      <VaultTypesCompare />
      <TradingGateChecklist />
      <LiquidationFlow />
    </div>
  );
}
