'use client';

import { motion } from 'framer-motion';
import { Activity, Ruler, Dumbbell } from 'lucide-react';

const tests = [
  { 
    icon: Ruler, 
    title: 'Flessibilità',
    description: 'Test di mobilità articolare completa'
  },
  { 
    icon: Activity, 
    title: 'Analisi Posturale',
    description: 'Valutazione posturale approfondita'
  },
  { 
    icon: Dumbbell, 
    title: 'Test di Forza',
    description: 'Salti, massimali e potenza'
  },
];

export default function TestFisiciSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
            Valutazione
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            I TEST FISICI
          </h2>
        </motion.div>

        {/* Tests Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tests.map((test, idx) => (
            <motion.div
              key={idx}
              className="group relative p-8 bg-white rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 mb-6 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <test.icon className="w-7 h-7" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-black mb-3">
                {test.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 font-light text-sm">
                {test.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
