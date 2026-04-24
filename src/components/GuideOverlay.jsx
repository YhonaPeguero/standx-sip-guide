import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '../i18n';

function DimmingLayer({ style }) {
  return <motion.div layout className="fixed pointer-events-auto bg-[rgba(2,8,6,0.68)]" style={style} />;
}

export default function GuideOverlay({
  isOpen,
  steps,
  stepIndex,
  spotlightRect,
  onStartGuide,
  onDismissPrompt,
  showPrompt,
  onBack,
  onNext,
  onSkip,
  onFinish,
  narrationSupported,
  isNarratedGuide,
  isNarrationPaused,
  showVoiceUnavailableNotice,
  onNarratedGuideChange,
  onNarrationPauseToggle,
  onNarrationMute,
}) {
  const { t } = useI18n();

  const step = steps[stepIndex];
  const totalSteps = steps.length;
  const isLastStep = totalSteps > 0 && stepIndex === totalSteps - 1;
  const progress = totalSteps > 0 ? ((stepIndex + 1) / totalSteps) * 100 : 0;

  const spotlight =
    spotlightRect && spotlightRect.width > 0 && spotlightRect.height > 0
      ? {
          top: Math.max(0, spotlightRect.top),
          left: Math.max(0, spotlightRect.left),
          width: Math.max(0, spotlightRect.width),
          height: Math.max(0, spotlightRect.height),
        }
      : null;

  return (
    <>
      <AnimatePresence>
        {showPrompt && !isOpen ? (
          <motion.aside
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-4 top-[92px] z-40 w-[min(92vw,360px)] border border-[var(--sx-border-strong)] bg-[rgba(11,18,15,0.96)] p-4 shadow-[var(--sx-shadow-lg)]"
            style={{ borderRadius: 6 }}
          >
            <p className="text-[14px] leading-[1.6] text-[var(--sx-text)]">{t('guide.prompt')}</p>

            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={onStartGuide}
                className="inline-flex h-9 items-center border border-[rgba(0,102,50,0.7)] bg-[rgba(0,102,50,0.14)] px-3 text-[13px] font-medium text-[var(--sx-primary-bright)] transition-colors duration-200 hover:bg-[rgba(0,102,50,0.22)]"
                style={{ borderRadius: 4 }}
              >
                {t('guide.start')}
              </button>
              <button
                type="button"
                onClick={onDismissPrompt}
                className="inline-flex h-9 items-center border border-[var(--sx-border)] bg-transparent px-3 text-[13px] text-[var(--sx-muted)] transition-colors duration-200 hover:text-[var(--sx-text)]"
                style={{ borderRadius: 4 }}
              >
                {t('guide.skip')}
              </button>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && step ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, pointerEvents: 'auto' }}
            exit={{ opacity: 0, pointerEvents: 'none' }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] pointer-events-none"
            aria-live="polite"
          >
            {spotlight ? (
              <>
                <DimmingLayer style={{ top: 0, left: 0, right: 0, height: spotlight.top }} />
                <DimmingLayer
                  style={{ top: spotlight.top, left: 0, width: spotlight.left, height: spotlight.height }}
                />
                <DimmingLayer
                  style={{
                    top: spotlight.top,
                    left: spotlight.left + spotlight.width,
                    right: 0,
                    height: spotlight.height,
                  }}
                />
                <DimmingLayer
                  style={{
                    top: spotlight.top + spotlight.height,
                    left: 0,
                    right: 0,
                    bottom: 0,
                  }}
                />

                <motion.div
                  layout
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none fixed border border-[rgba(0,102,50,0.72)]"
                  style={{
                    top: spotlight.top,
                    left: spotlight.left,
                    width: spotlight.width,
                    height: spotlight.height,
                    borderRadius: 8,
                    boxShadow:
                      '0 0 0 1px rgba(0,102,50,0.3), 0 0 0 8px rgba(0,102,50,0.08), 0 16px 34px rgba(0,0,0,0.45)',
                  }}
                />
              </>
            ) : (
              <div className="fixed inset-0 pointer-events-auto bg-[rgba(2,8,6,0.68)]" />
            )}

            <motion.section
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-4 left-1/2 z-[71] w-[min(94vw,420px)] -translate-x-1/2 border border-[var(--sx-border-strong)] bg-[rgba(9,15,12,0.98)] p-4 shadow-[var(--sx-shadow-lg)] pointer-events-auto sm:bottom-6 sm:left-auto sm:right-6 sm:w-[380px] sm:translate-x-0"
              style={{ borderRadius: 8 }}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="mono text-[11px] uppercase tracking-[0.14em] text-[var(--sx-primary-bright)]">
                  {t('guide.stepLabel')} {stepIndex + 1}/{totalSteps}
                </span>
                <button
                  type="button"
                  onClick={onSkip}
                  className="text-[12px] text-[var(--sx-muted)] transition-colors duration-200 hover:text-[var(--sx-text)]"
                >
                  {t('guide.skip')}
                </button>
              </div>

              <h3 className="mt-2.5 text-[19px] font-semibold tracking-[-0.015em] text-[var(--sx-text)]">
                {step.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.64] text-[var(--sx-text-muted)]">{step.text}</p>

              <div className="mt-4 h-[3px] w-full overflow-hidden bg-[var(--sx-surface-2)]" style={{ borderRadius: 999 }}>
                <motion.div
                  initial={false}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-[var(--sx-primary)]"
                />
              </div>

              {narrationSupported ? (
                <div className="mt-4 border-t border-[var(--sx-border)] pt-3">
                  <label className="flex items-center gap-2 text-[13px] text-[var(--sx-text-muted)]">
                    <input
                      type="checkbox"
                      checked={isNarratedGuide}
                      onChange={(event) => onNarratedGuideChange(event.target.checked)}
                      className="h-4 w-4 accent-[var(--sx-primary)]"
                    />
                    <span>{t('guide.narrated')}</span>
                  </label>

                  {isNarratedGuide ? (
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={onNarrationPauseToggle}
                        className="inline-flex h-8 items-center border border-[var(--sx-border)] px-2.5 text-[12px] text-[var(--sx-text-muted)] transition-colors duration-200 hover:text-[var(--sx-text)]"
                        style={{ borderRadius: 4 }}
                      >
                        {isNarrationPaused ? t('guide.resume') : t('guide.pause')}
                      </button>
                      <button
                        type="button"
                        onClick={onNarrationMute}
                        className="inline-flex h-8 items-center border border-[var(--sx-border)] px-2.5 text-[12px] text-[var(--sx-text-muted)] transition-colors duration-200 hover:text-[var(--sx-text)]"
                        style={{ borderRadius: 4 }}
                      >
                        {t('guide.mute')}
                      </button>
                    </div>
                  ) : null}

                  {showVoiceUnavailableNotice ? (
                    <p className="mt-2 text-[12px] leading-[1.58] text-[var(--sx-muted)]">
                      {t('guide.voiceUnavailable')}
                    </p>
                  ) : null}
                </div>
              ) : null}

              <div className="mt-4 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={onBack}
                  disabled={stepIndex === 0}
                  className="inline-flex h-9 items-center border border-[var(--sx-border)] px-3 text-[13px] text-[var(--sx-text-muted)] transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-45"
                  style={{ borderRadius: 4 }}
                >
                  {t('guide.back')}
                </button>

                <button
                  type="button"
                  onClick={isLastStep ? onFinish : onNext}
                  className="inline-flex h-9 items-center border border-[rgba(0,102,50,0.75)] bg-[rgba(0,102,50,0.16)] px-3 text-[13px] font-medium text-[var(--sx-primary-bright)] transition-colors duration-200 hover:bg-[rgba(0,102,50,0.24)]"
                  style={{ borderRadius: 4 }}
                >
                  {isLastStep ? t('guide.finish') : t('guide.next')}
                </button>
              </div>
            </motion.section>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
