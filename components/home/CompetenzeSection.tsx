'use client';

import { motion } from 'framer-motion';

const competenze = [
  'Personal trainer',
  'Preparazione atletica',
  'Ginnastica posturale',
  'Analisi posturale',
  'Programmi personalizzati',
  'Supporto online',
];

export default function CompetenzeSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-white">
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
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            COMPETENZE
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {competenze.map((competenza, idx) => (
            <motion.div
              key={idx}
              className="group px-6 py-4 bg-gray-50 rounded-full border border-gray-200/80 hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm md:text-base font-medium">
                {competenza}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
