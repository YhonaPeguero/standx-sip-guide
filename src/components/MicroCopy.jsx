import { AnimatePresence, motion } from 'framer-motion';
import { useI18n } from '../i18n';

export default function MicroCopy({ isOn }) {
  const { t } = useI18n();

  return (
    <div className="relative flex h-7 items-center">
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={isOn ? 'on' : 'off'}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="text-[16px] tracking-[-0.01em] text-[var(--sx-text-muted)] sm:text-[18px]"
        >
          {isOn ? t('microCopy.on') : t('microCopy.off')}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
