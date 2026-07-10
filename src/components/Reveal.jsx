import { motion, useReducedMotion } from 'framer-motion';

// Single motion vocabulary for the whole app: sections rise once when they enter the
// viewport (Reveal), card grids stagger their children (StaggerGroup + StaggerItem).
// Everything collapses to static rendering under prefers-reduced-motion.

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: '0px 0px -60px 0px' };

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const STATIC_VARIANTS = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0 },
};

export function Reveal({ children, delay = 0, className = '', as = 'div', ...rest }) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  return (
    <Component
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : delay, ease: EASE }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
}

export function StaggerGroup({ children, className = '', ...rest }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? 'show' : 'hidden'}
      whileInView="show"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        show: { transition: reduceMotion ? {} : { staggerChildren: 0.06 } },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div variants={reduceMotion ? STATIC_VARIANTS : ITEM_VARIANTS} className={className}>
      {children}
    </motion.div>
  );
}
