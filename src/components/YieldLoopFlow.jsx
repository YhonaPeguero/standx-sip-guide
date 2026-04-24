import { motion } from 'framer-motion';

const FLOW_NODES = [
  {
    id: 'dusd',
    label: 'Capital',
    title: 'DUSD',
    copy: 'Start with capital in DUSD, the base layer of the loop.',
  },
  {
    id: 'sip-2',
    label: 'Active',
    title: 'SIP #2 Position Yield',
    copy: 'Eligible activity can keep earning while positions stay open.',
  },
  {
    id: 'sip-3',
    label: 'Compounds',
    title: 'SIP #3 DUSD Yield Expansion',
    copy: 'Yield pathways can route value back into DUSD growth.',
  },
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
          className="absolute -bottom-1 text-[10px] text-[var(--sx-primary-bright)]"
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
        className="absolute text-[11px] text-[var(--sx-primary-bright)]"
      >
        →
      </motion.span>
    </div>
  );
}

function FlowNode({ node, index, isOn }) {
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
      style={{ borderRadius: 6 }}
    >
      <div className="flex items-center justify-between">
        <span
          className="mono inline-flex items-center px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em]"
          style={{
            borderRadius: 3,
            color: isOn ? 'var(--sx-primary-bright)' : 'var(--sx-muted)',
            backgroundColor: isOn ? 'rgba(0, 102, 50, 0.18)' : 'var(--sx-surface-2)',
          }}
        >
          {node.label}
        </span>
        <span className="mono text-[10px] tracking-[0.16em] text-[var(--sx-muted-soft)]">
          0{index + 1}
        </span>
      </div>

      <h3 className="text-[16px] font-semibold leading-[1.2] tracking-[-0.015em] text-[var(--sx-text)]">
        {node.title}
      </h3>
      <p className="text-[13px] leading-[1.55] text-[var(--sx-text-muted)]">{node.copy}</p>
    </motion.div>
  );
}

export default function YieldLoopFlow({ isOn }) {
  return (
    <article
      className="relative border border-[var(--sx-border)] bg-[var(--sx-surface)] p-5 shadow-[var(--sx-shadow-lg)] sm:p-7"
      style={{ borderRadius: 6 }}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="eyebrow">StandX Yield Loop</span>
        <motion.span
          animate={{ opacity: isOn ? 1 : 0.45, color: isOn ? '#FAC6C3' : 'var(--sx-muted)' }}
          transition={{ duration: 0.3 }}
          className="mono text-[10px] uppercase tracking-[0.22em]"
        >
          {isOn ? 'Loop Live' : 'Loop Paused'}
        </motion.span>
      </div>

      <div className="mt-5 grid gap-2 md:grid-cols-[1fr_44px_1fr_44px_1fr] md:items-stretch">
        {FLOW_NODES.map((node, index) => (
          <div key={node.id} className="contents">
            <FlowNode node={node} index={index} isOn={isOn} />
            {index < FLOW_NODES.length - 1 ? (
              <>
                <FlowConnector isOn={isOn} />
                <FlowConnector isOn={isOn} vertical />
              </>
            ) : null}
          </div>
        ))}
      </div>

      <p className="mt-5 text-[12px] leading-[1.5] text-[var(--sx-muted)]">
        Capital flows through DUSD, gets activated by SIP #2, and is reinforced by SIP #3 to keep the
        loop running.
      </p>
    </article>
  );
}
