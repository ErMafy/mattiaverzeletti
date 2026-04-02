'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const perfectItems = [
  'Migliorare forma fisica e performance',
  'Allenarsi con un coach online',
  'Programma personalizzato',
  'Continuità e costanza',
];

const notSuitableItems = [
  'Vuole allenamenti casuali',
  'Cerca risultati immediati senza costanza',
];

export default function AdattoSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
            Per te?
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight">
            A CHI È ADATTO
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Perfect For Column */}
          <motion.div
            className="group relative p-10 md:p-12 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200/80 hover:border-green-200 hover:shadow-2xl hover:shadow-green-500/5 transition-all duration-500"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-green-50 mb-8 group-hover:bg-green-100 transition-colors duration-300">
              <Check className="w-7 h-7 text-green-600" strokeWidth={2.5} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
              Perfetto per
            </h3>

            <div className="space-y-5">
              {perfectItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                  </div>
                  <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Not Suitable Column */}
          <motion.div
            className="group relative p-10 md:p-12 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-200/80 hover:border-red-200 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-500"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 mb-8 group-hover:bg-red-100 transition-colors duration-300">
              <X className="w-7 h-7 text-red-500" strokeWidth={2.5} />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-black mb-8">
              Non adatto se
            </h3>

            <div className="space-y-5">
              {notSuitableItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-500" strokeWidth={3} />
                  </div>
                  <p className="text-gray-700 font-light text-base md:text-lg leading-relaxed">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
