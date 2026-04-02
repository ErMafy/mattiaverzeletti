'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+39 3389555120';
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '393389555120';

export default function CTAFinalSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={ref}
      className="relative w-full py-32 md:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Animated background elements - Gold */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-600/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(245,158,11,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.2) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Quote mark - Gold */}
        <motion.div
          className="text-8xl md:text-9xl font-serif text-amber-500/20 leading-none mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          &ldquo;
        </motion.div>

        {/* Main Quote */}
        <motion.p
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-relaxed mb-6 uppercase tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          CREDO CHE OGNI PERSONA POSSA MIGLIORARE
        </motion.p>
        
        <motion.p
          className="text-lg md:text-xl text-gray-400 font-light mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          Il percorso inizia con una scelta. La scelta di investire su te stesso.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <motion.a
            href={`https://wa.me/${WHATSAPP}?text=Ciao%20Mattia,%20vorrei%20iniziare%20un%20percorso%20di%20allenamento%20con%20te.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full transition-all duration-300 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 uppercase tracking-wide"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>INIZIA ORA</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href={`tel:${PHONE.replace(/\s/g, '')}`}
            className="group flex items-center gap-3 px-10 py-5 border-2 border-amber-500/50 text-amber-400 font-bold rounded-full transition-all duration-300 hover:border-amber-500 hover:bg-amber-500/10 uppercase tracking-wide"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Phone className="w-5 h-5" />
            <span>CHIAMAMI</span>
          </motion.a>
        </motion.div>

        {/* Decorative bottom element */}
        <motion.div
          className="mt-20 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/50" />
          <span className="text-xs text-amber-500/60 font-bold tracking-[0.25em] uppercase">
            TRASFORMAZIONE
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/50" />
        </motion.div>
      </div>
    </section>
  );
}
