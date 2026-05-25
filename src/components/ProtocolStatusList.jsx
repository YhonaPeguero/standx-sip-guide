import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

const ALWAYS_ACTIVE_ROWS = [
  {
    id: 'dusd',
    titleKey: 'protocolStatus.rows.dusd.title',
    copyKey: 'protocolStatus.rows.dusd.copy',
  },
  {
    id: 'sip3',
    titleKey: 'protocolStatus.rows.sip3.title',
    copyKey: 'protocolStatus.rows.sip3.copy',
  },
];

function StatusDot({ active = true }) {
  return (
    <span aria-hidden="true" className="relative inline-flex h-[8px] w-[8px] shrink-0">
      <span
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: active ? '#00ff2a' : '#6f7d74' }}
      />
      {active ? (
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: 'rgba(0, 255, 42, 0.55)' }}
        />
      ) : null}
    </span>
  );
}

function InlineSwitch({ isOn, onChange, ariaLabel }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label={ariaLabel}
      onClick={onChange}
      className="relative h-[24px] w-[42px] shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--sx-bg)]"
      style={{
        borderRadius: 999,
        backgroundColor: isOn ? 'rgba(0, 102, 50, 0.85)' : 'var(--sx-surface-2)',
        border: `1px solid ${isOn ? 'rgba(0, 102, 50, 0.95)' : 'var(--sx-border-strong)'}`,
        transition: 'background-color 200ms ease, border-color 200ms ease',
      }}
    >
      <motion.span
        animate={{ x: isOn ? 18 : 2 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 -translate-y-1/2 h-[16px] w-[16px]"
        style={{
          borderRadius: 999,
          backgroundColor: isOn ? '#00ff2a' : '#6f7d74',
        }}
      />
    </button>
  );
}

function AlwaysActivePill({ label }) {
  return (
    <span
      className="mono shrink-0 whitespace-nowrap px-1.5 py-0.5 text-[10px] uppercase tracking-[0.12em]"
      style={{
        borderRadius: 3,
        color: 'var(--sx-primary-bright)',
        backgroundColor: 'rgba(0, 102, 50, 0.18)',
      }}
    >
      {label}
    </span>
  );
}

export default function ProtocolStatusList({
  compact = false,
  className = '',
  showSip2Row = false,
  isSip2On = false,
  onToggleSip2,
}) {
  const { t } = useI18n();
  const alwaysActiveLabel = t('protocolStatus.alwaysActive');

  const padding = compact ? 'px-3 py-2.5' : 'px-4 py-3';

  return (
    <ul
      role="list"
      className={`flex flex-col divide-y divide-[var(--sx-border)] border border-[var(--sx-border)] ${className}`}
      style={{ borderRadius: 6 }}
    >
      {ALWAYS_ACTIVE_ROWS.map((row) => (
        <li key={row.id} className={`flex flex-col gap-1.5 ${padding}`}>
          <div className="flex items-center gap-2.5">
            <StatusDot />
            <span
              className={`min-w-0 flex-1 font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--sx-text)] ${compact ? 'text-[13px]' : 'text-[14px]'}`}
            >
              {t(row.titleKey)}
            </span>
            <AlwaysActivePill label={alwaysActiveLabel} />
          </div>
          {!compact ? (
            <p className="pl-[18px] text-[12px] leading-[1.5] text-[var(--sx-muted)]">
              {t(row.copyKey)}
            </p>
          ) : null}
        </li>
      ))}

      {showSip2Row ? (
        <li className={`flex flex-col gap-1.5 ${padding}`}>
          <div className="flex items-center gap-2.5">
            <StatusDot active={isSip2On} />
            <span
              className={`min-w-0 flex-1 font-semibold leading-[1.3] tracking-[-0.01em] text-[var(--sx-text)] ${compact ? 'text-[13px]' : 'text-[14px]'}`}
            >
              {t('protocolStatus.rows.sip2.title')}
            </span>
            <InlineSwitch
              isOn={isSip2On}
              onChange={onToggleSip2}
              ariaLabel={isSip2On ? t('toggle.ariaOn') : t('toggle.ariaOff')}
            />
          </div>
          {!compact ? (
            <p className="pl-[18px] text-[12px] leading-[1.5] text-[var(--sx-muted)]">
              {t('protocolStatus.rows.sip2.copy')}
            </p>
          ) : null}
        </li>
      ) : null}
    </ul>
  );
}
