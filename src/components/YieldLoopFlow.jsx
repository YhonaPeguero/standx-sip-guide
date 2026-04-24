import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

const FLOW_NODE_IDS = [
  { id: 'dusd', key: 'dusd' },
  { id: 'sip-2', key: 'sip2' },
  { id: 'sip-3', key: 'sip3' },
];

function FlowConnector({ isOn, vertical = false }) {
  if (vertical) {
    return (
      <div className="relative my-1 flex h-8 items-center justify-center md:hidden" aria-hidden="true">
        <motion.div
          animate={{ opacity: isOn ? 1 : 0.4, scaleY: isOn ? 1 : 0.7 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-px origin-top"
          style={{
            background:
              'linear-gradient(180deg, transparent 0%, var(--sx-border-strong) 30%, rgba(0,102,50,0.6) 70%, transparent 100%)',
          }}
        />
        <motion.span
          animate={{ opacity: isOn ? 1 : 0.45 }}
          transition={{ duration: 0.3 }}
          className="absolute -bottom-1 text-[11px] text-[var(--sx-primary-bright)]"
        >
          v
        </motion.span>
      </div>
    );
  }

  return (
    <div className="relative hidden h-full items-center justify-center md:flex" aria-hidden="true">
      <motion.div
        initial={false}
        animate={{ opacity: isOn ? 1 : 0.45 }}
        transition={{ duration: 0.4 }}
        className="relative h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--sx-border-strong) 25%, rgba(0,102,50,0.7) 50%, var(--sx-border-strong) 75%, transparent 100%)',
        }}
      >
        {isOn ? (
          <motion.span
            initial={{ x: '-20%', opacity: 0 }}
            animate={{ x: '120%', opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/2 -translate-y-1/2 h-[2px] w-6"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, var(--sx-primary-bright) 50%, transparent 100%)',
            }}
          />
        ) : null}
      </motion.div>
      <motion.span
        animate={{ opacity: isOn ? 1 : 0.5, x: isOn ? 0 : -2 }}
        transition={{ duration: 0.3 }}
        className="absolute text-[12px] text-[var(--sx-primary-bright)]"
      >
        →
      </motion.span>
    </div>
  );
}

function FlowNode({ node, index, isOn, guideId }) {
  return (
    <motion.div
      initial={false}
      animate={{
        borderColor: isOn ? 'rgba(0, 102, 50, 0.55)' : 'var(--sx-border)',
        backgroundColor: isOn ? 'rgba(11, 24, 18, 0.96)' : 'var(--sx-surface)',
        boxShadow: isOn
          ? '0 0 0 1px rgba(0,102,50,0.18), 0 14px 32px rgba(0, 102, 50, 0.18)'
          : '0 8px 22px rgba(0, 0, 0, 0.32)',
      }}
      whileHover={{ y: -2, borderColor: 'rgba(0, 102, 50, 0.7)' }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex h-full flex-col gap-3 border p-5"
      data-guide-id={guideId}
      style={{ borderRadius: 6 }}
    >
      <div className="flex items-center justify-between">
        <span
          className="mono inline-flex items-center px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em]"
          style={{
            borderRadius: 3,
            color: isOn ? 'var(--sx-primary-bright)' : 'var(--sx-muted)',
            backgroundColor: isOn ? 'rgba(0, 102, 50, 0.18)' : 'var(--sx-surface-2)',
          }}
        >
          {node.label}
        </span>
        <span className="mono text-[11px] tracking-[0.13em] text-[var(--sx-muted-soft)]">
          0{index + 1}
        </span>
      </div>

      <h3 className="text-[17px] font-semibold leading-[1.26] tracking-[-0.015em] text-[var(--sx-text)]">
        {node.title}
      </h3>
      <p className="text-[14px] leading-[1.62] text-[var(--sx-text-muted)]">{node.copy}</p>
    </motion.div>
  );
}

export default function YieldLoopFlow({ isOn }) {
  const { t } = useI18n();

  const flowNodes = FLOW_NODE_IDS.map((node) => ({
    id: node.id,
    label: t(`yieldLoop.nodes.${node.key}.label`),
    title: t(`yieldLoop.nodes.${node.key}.title`),
    copy: t(`yieldLoop.nodes.${node.key}.copy`),
  }));

  return (
    <article
      className="relative border border-[var(--sx-border)] bg-[var(--sx-surface)] p-5 shadow-[var(--sx-shadow-lg)] sm:p-7"
      style={{ borderRadius: 6 }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="eyebrow">{t('yieldLoop.eyebrow')}</span>
        <motion.span
          animate={{ opacity: isOn ? 1 : 0.45, color: isOn ? '#00ff2a' : 'var(--sx-muted)' }}
          transition={{ duration: 0.3 }}
          className="mono text-[11px] uppercase tracking-[0.16em]"
        >
          {isOn ? t('yieldLoop.live') : t('yieldLoop.paused')}
        </motion.span>
      </div>

      <div className="mt-5 grid gap-2 md:grid-cols-[1fr_44px_1fr_44px_1fr] md:items-stretch">
        {flowNodes.map((node, index) => (
          <div key={node.id} className="contents">
            <FlowNode node={node} index={index} isOn={isOn} guideId={`guide-${node.id}`} />
            {index < flowNodes.length - 1 ? (
              <>
                <FlowConnector isOn={isOn} />
                <FlowConnector isOn={isOn} vertical />
              </>
            ) : null}
          </div>
        ))}
      </div>

      <p className="mt-5 text-[13px] leading-[1.58] text-[var(--sx-muted)]">
        {t('yieldLoop.summary')}
      </p>
    </article>
  );
}
