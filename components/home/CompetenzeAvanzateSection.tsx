'use client';

import { motion } from 'framer-motion';
import { Zap, Target, HeartHandshake, Brain } from 'lucide-react';

const competenze = [
  { icon: Target, title: 'Valutazione postura', description: 'Analisi completa della tua postura' },
  { icon: Zap, title: 'Analisi performance', description: 'Valutazione delle tue capacità atletiche' },
  { icon: Brain, title: 'Test fisici', description: 'Batteria completa di test standardizzati' },
  { icon: HeartHandshake, title: 'Supporto motivazionale', description: 'Sempre al tuo fianco nel percorso' },
];

export default function CompetenzeAvanzateSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
            Specializzazioni
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            COMPETENZE AVANZATE
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competenze.map((competenza, idx) => (
            <motion.div
              key={idx}
              className="group flex items-start gap-6 p-8 bg-white rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <competenza.icon className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  {competenza.title}
                </h3>
                <p className="text-gray-500 font-light text-sm">
                  {competenza.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
