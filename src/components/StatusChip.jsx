import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '../i18n';

export default function StatusChip({ isOn }) {
  const { t } = useI18n();

  return (
    <div>
      <motion.div
        animate={{
          backgroundColor: isOn ? 'rgba(0, 102, 50, 0.16)' : 'rgba(10, 14, 13, 0.94)',
          borderColor: isOn ? 'rgba(0, 102, 50, 0.7)' : 'var(--sx-border-strong)',
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="inline-flex items-center gap-2.5 border px-3 py-1.5"
        style={{ borderRadius: 4 }}
      >
        <div className="relative h-[8px] w-[8px]">
          <motion.div
            animate={{ backgroundColor: isOn ? '#FAC6C3' : '#6f7d74' }}
            className="absolute inset-0 rounded-full"
          />
          <AnimatePresence>
            {isOn ? (
              <motion.div
                key="pulse"
                initial={{ scale: 1, opacity: 0.7 }}
                animate={{ scale: 2.8, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                className="absolute inset-0 rounded-full bg-[#FAC6C3]"
              />
            ) : null}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isOn ? 'on' : 'off'}
            initial={{ opacity: 0, y: 3 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -3 }}
            transition={{ duration: 0.22 }}
            className="mono text-[10px] font-semibold uppercase tracking-[0.24em]"
            style={{ color: isOn ? '#FAC6C3' : 'var(--sx-muted)' }}
          >
            {isOn ? t('statusChip.on') : t('statusChip.off')}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
