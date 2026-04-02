'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'VALUTAZIONE INIZIALE',
    description: 'Analizziamo livello, obiettivi, disponibilità e contesto di allenamento per costruire un percorso realmente adatto a te.',
  },
  {
    number: '02',
    title: 'PROGRAMMAZIONE PERSONALIZZATA',
    description: 'Creo un programma su misura, coerente con il tuo sport e impegni.',
  },
  {
    number: '03',
    title: 'MONITORAGGIO E ADATTAMENTO',
    description: 'Feedback e progressioni costanti.',
  },
  {
    number: '04',
    title: 'SUPPORTO COSTANTE',
    description: 'Contatto continuo con il coach.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    },
  },
};

export default function MetodoSection() {
  return (
    <section id="metodo" className="w-full py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Label */}
          <motion.span 
            className="inline-block text-xs font-medium tracking-[0.2em] text-gray-500 uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Come lavoro
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 tracking-tight">
            IL METODO DI LAVORO
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-gray-600 font-light text-lg md:text-xl leading-relaxed">
              Il miglioramento non è casuale. È il risultato di un percorso strutturato, personalizzato e monitorato nel tempo.
            </p>
            <p className="text-gray-500 font-light text-base md:text-lg">
              Il mio lavoro come coach online si basa su metodo, adattamento continuo e obiettivi chiari.
            </p>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative p-8 md:p-10 bg-white rounded-2xl border border-gray-200/80 hover:border-gray-300 hover:shadow-xl hover:shadow-black/5 transition-all duration-500"
              whileHover={{ y: -4 }}
            >
              {/* Number */}
              <div className="text-5xl md:text-6xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors duration-500 mb-6">
                {step.number}
              </div>
              
              {/* Title */}
              <h3 className="text-lg md:text-xl font-semibold text-black mb-4 group-hover:text-gray-900 transition-colors">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
                {step.description}
              </p>

              {/* Hover accent - Gold */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
