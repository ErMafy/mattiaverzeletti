'use client';

import { motion } from 'framer-motion';
import { UserCheck, TestTube, MessageCircle, Microscope } from 'lucide-react';

const reasons = [
  { icon: UserCheck, text: 'Percorsi personalizzati' },
  { icon: TestTube, text: 'Test regolari' },
  { icon: MessageCircle, text: 'Supporto costante' },
  { icon: Microscope, text: 'Approccio scientifico' },
];

export default function PerchéScegliereSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-white">
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
            Vantaggi
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            PERCHÉ SCEGLIERMI
          </h2>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col items-center text-center p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-all duration-300">
                <reason.icon className="w-7 h-7" />
              </div>
              
              {/* Text */}
              <p className="text-sm md:text-base font-medium text-gray-700 group-hover:text-black transition-colors">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
