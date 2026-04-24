import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Particles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => ({
        id: index,
        x: 6 + ((index * 113) % 88),
        size: 1.5 + (index % 3) * 0.7,
        delay: (index * 0.32) % 2.4,
        duration: 2.8 + (index % 4) * 0.5,
        travel: 90 + (index % 3) * 30,
      })),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: -particle.travel,
            opacity: [0, 0.75, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeOut',
            opacity: {
              times: [0, 0.4, 1],
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
            },
          }}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: '#5bd38b',
            boxShadow: `0 0 ${particle.size * 3}px #5bd38b`,
          }}
        />
      ))}
    </div>
  );
}
