'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, GraduationCap, Users, Phone, Mail, MessageCircle } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, text: 'Laureato in Scienze Motorie' },
  { icon: Award, text: 'Esperto ELAV Sport Performance' },
  { icon: Users, text: 'Personal Trainer & Istruttore Posturale' },
];

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+39 3389555120';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'mv.athletica@gmail.com';
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '393389555120';

export default function ChiSonoSection() {
  return (
    <section id="chi-sono" className="w-full pt-28 md:pt-32 pb-20 md:pb-28 bg-gradient-to-b from-gray-900 via-gray-900 to-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] text-amber-400 uppercase mb-4">
            IL COACH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            CIAO, SONO MATTIA
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo - Prima su mobile */}
          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Background decoration - Gold */}
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl -z-10 blur-xl" />
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 group border border-amber-500/20">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src="/assets/mattia.png"
                  alt="Mattia Verzeletti - Personal Trainer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-xl shadow-xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-widest uppercase">ONLINE COACH</p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Intro Text */}
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
                Aiuto persone e atleti a raggiungere i propri obiettivi con programmi personalizzati e monitoraggio costante.
              </p>
              
              <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed">
                Il mio approccio si basa su metodo scientifico, adattamento continuo e un rapporto diretto con ogni cliente.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4 pt-2">
              {credentials.map((cred, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300">
                    <cred.icon className="w-5 h-5 text-amber-400 group-hover:text-black transition-colors" />
                  </div>
                  <p className="text-gray-300 font-medium">
                    {cred.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-amber-500/50 via-amber-500/20 to-transparent my-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            />

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={`https://wa.me/${WHATSAPP}?text=Ciao%20Mattia,%20vorrei%20informazioni%20sui%20tuoi%20percorsi%20di%20allenamento.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-white font-bold rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg shadow-green-500/30"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                WHATSAPP
              </motion.a>
              
              <motion.a
                href={`tel:${PHONE.replace(/\s/g, '')}`}
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-amber-500 text-amber-400 font-bold rounded-full hover:bg-amber-500 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-5 h-5" />
                CHIAMAMI
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
