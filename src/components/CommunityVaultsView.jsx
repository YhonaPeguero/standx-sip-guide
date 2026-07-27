import { useI18n } from '../i18n';
import { Reveal } from './Reveal';
import SectionHeader from './ui/SectionHeader';
import LiquidationFlow from './vaults/LiquidationFlow';
import TradingGateChecklist from './vaults/TradingGateChecklist';
import VaultTypesCompare from './vaults/VaultTypesCompare';

export const VAULTS_DOC_URL = 'https://docs.standx.com/sip/sip-5b-community-vault';

// SIP-5B's header table used to run here as a six-field band: SIP, PARENT, STATUS, DATE,
// RELEASE DATE, AUTHOR. Four of those earned their removal rather than a smaller type size.
//
// AUTHOR was the worst of them. "StandX Team" set directly under this page's own title
// reads as the byline of the page, not of the proposal it describes — precisely the
// impression a community-built, unaffiliated guide must not give. SIP and PARENT were
// already carried by the section badge and by the prose below it, and DATE said nothing
// the release date does not.
//
// What survives is what a reader actually needs before deciding to read on: whether the
// proposal is live, when it shipped, and where to find it.

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

          {/* One line: is it live, when did it ship, where do I read it. */}
          <p className="mono flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-[12px] text-[var(--sx-muted)]">
            <span>
              {t('vaults.meta.status')}{' '}
              <span className="font-semibold text-[var(--sx-text)]">
                {t('vaults.metaValues.status')}
              </span>
            </span>

            <span aria-hidden="true" className="text-[var(--sx-muted-soft)]">
              ·
            </span>

            <span>
              {t('vaults.meta.release')}{' '}
              <span className="font-semibold text-[var(--sx-text)]">
                {t('vaults.metaValues.release')}
              </span>
            </span>

            <span aria-hidden="true" className="text-[var(--sx-muted-soft)]">
              ·
            </span>

            <a
              href={VAULTS_DOC_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target inline-flex items-center font-semibold text-[var(--sx-primary-bright)] underline decoration-[var(--sx-border-strong)] underline-offset-4 transition-colors duration-200 hover:decoration-[var(--sx-primary-bright)]"
            >
              {t('vaults.docLink')}
              <span aria-hidden="true">&nbsp;↗</span>
            </a>
          </p>
        </Reveal>
      </div>

      {/* Three modules; Shield Health rides along inside the liquidation flow as a strip */}
      <VaultTypesCompare />
      <TradingGateChecklist />
      <LiquidationFlow />
    </div>
  );
}
