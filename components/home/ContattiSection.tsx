'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Instagram } from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefono',
    value: '+39 338 955 5120',
    href: 'tel:+393389555120',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'mv.athletica@gmail.com',
    href: 'mailto:mv.athletica@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@mattiaverzeletti.pt',
    href: 'https://instagram.com/mattiaverzeletti.pt',
  },
];

export default function ContattiSection() {
  return (
    <section id="contattami" className="py-24 bg-black">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-400 text-sm font-semibold rounded-full mb-6">
            CONTATTAMI
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Inizia il tuo <span className="text-amber-400">percorso</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Contattami per una consulenza gratuita e scopri come posso aiutarti a raggiungere i tuoi obiettivi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((contact, idx) => (
            <motion.a
              key={contact.label}
              href={contact.href}
              target={contact.label === 'Instagram' ? '_blank' : undefined}
              rel={contact.label === 'Instagram' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-amber-500/20 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors duration-300">
                <contact.icon className="w-8 h-8 text-amber-400 group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{contact.label}</h3>
              <p className="text-amber-400 font-medium group-hover:text-amber-300 transition-colors">
                {contact.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm">
            Rispondo entro 24 ore • Consulenza iniziale gratuita
          </p>
        </motion.div>
      </div>
    </section>
  );
}
