'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroHome() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  return (
    <section 
      ref={ref}
      className="relative w-full min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28 text-center"
        style={{ opacity, y }}
      >
        {/* Small Label */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 text-amber-700 text-xs font-bold tracking-[0.15em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          PERSONAL TRAINING ONLINE
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black mb-8 leading-[0.9] tracking-tight uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          viewport={{ once: true }}
        >
          COSTRUISCI IL TUO
          <br />
          <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 bg-clip-text text-transparent">
            PROGRESSO
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-gray-500 mb-8 font-light max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          Allenamenti online personalizzati, monitorati e adatti ai tuoi obiettivi
        </motion.p>

        {/* Decorative Line - Gold */}
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent w-32 mx-auto mb-8 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        />

        {/* Philosophy Text */}
        <motion.p
          className="text-sm md:text-base text-gray-400 font-light tracking-wide max-w-2xl mx-auto uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Il vero cambiamento arriva quando allenamento, costanza e consapevolezza lavorano insieme
        </motion.p>
      </motion.div>
    </section>
  );
}
