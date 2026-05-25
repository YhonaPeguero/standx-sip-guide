import { useState } from 'react';
import { SIP2_SCENARIOS } from '../constants/chart';
import { useI18n } from '../i18n';

export default function ScenarioSelector({ value, onChange, disabled = false, className = '' }) {
  const { t } = useI18n();
  const [hintOpen, setHintOpen] = useState(false);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <div className="flex items-center justify-between gap-2">
        <span className="mono min-w-0 flex-1 text-[11px] uppercase tracking-[0.12em] text-[var(--sx-muted)]">
          {t('scenarioSelector.label')}
        </span>
        <button
          type="button"
          aria-expanded={hintOpen}
          aria-controls="scenario-selector-hint"
          aria-label={t('scenarioSelector.hint')}
          onClick={() => setHintOpen((open) => !open)}
          className="mono inline-flex h-6 w-6 shrink-0 items-center justify-center text-[12px] text-[var(--sx-muted)] hover:text-[var(--sx-text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/80"
          style={{ borderRadius: 4, border: '1px solid var(--sx-border)' }}
        >
          ?
        </button>
      </div>

      <div
        role="group"
        aria-label={t('scenarioSelector.label')}
        className={`grid grid-cols-3 gap-1 border border-[var(--sx-border)] p-1 ${disabled ? 'opacity-60' : ''}`}
        style={{ borderRadius: 6, backgroundColor: 'var(--sx-surface-2)' }}
      >
        {SIP2_SCENARIOS.map((scenario) => {
          const isSelected = scenario.id === value;
          return (
            <button
              key={scenario.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              disabled={disabled}
              onClick={() => onChange(scenario.id)}
              className="mono flex min-w-0 items-center justify-center px-1.5 py-1.5 text-center text-[10px] uppercase leading-[1.15] tracking-[0.08em] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sx-accent)]/80 disabled:cursor-not-allowed sm:text-[11px] sm:tracking-[0.1em]"
              style={{
                borderRadius: 4,
                color: isSelected ? 'var(--sx-primary-bright)' : 'var(--sx-muted)',
                backgroundColor: isSelected ? 'rgba(0, 102, 50, 0.18)' : 'transparent',
                border: `1px solid ${isSelected ? 'rgba(0, 102, 50, 0.55)' : 'transparent'}`,
                transition: 'background-color 180ms ease, color 180ms ease, border-color 180ms ease',
                wordBreak: 'break-word',
              }}
            >
              {t(scenario.labelKey)}
            </button>
          );
        })}
      </div>

      {hintOpen ? (
        <p
          id="scenario-selector-hint"
          className="text-[12px] leading-[1.55] text-[var(--sx-muted)]"
        >
          {t('scenarioSelector.hint')}
        </p>
      ) : (
        <p className="text-[11px] leading-[1.5] text-[var(--sx-muted-soft)]">
          {t('scenarioSelector.illustrative')}
        </p>
      )}

      {disabled ? (
        <p className="text-[11px] leading-[1.5] text-[var(--sx-muted-soft)]">
          {t('scenarioSelector.disabledHint')}
        </p>
      ) : null}
    </div>
  );
}
