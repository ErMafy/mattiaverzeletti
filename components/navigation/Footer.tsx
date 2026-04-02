'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';

const footerLinks = {
  servizi: [
    { label: 'Coaching Online', href: '#percorsi' },
    { label: 'Programmi Personalizzati', href: '#metodo' },
    { label: 'Test Fisici', href: '#' },
  ],
  info: [
    { label: 'Chi Sono', href: '#chi-sono' },
    { label: 'Competenze', href: '#' },
    { label: 'Contatti', href: '#' },
  ],
};

const PHONE = process.env.NEXT_PUBLIC_PHONE || '+39 3389555120';
const EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'mv.athletica@gmail.com';
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '393389555120';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-premium py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/home" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/logo.png"
                  alt="Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                MV
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Personal Trainer Online. Allenamenti personalizzati per raggiungere i tuoi obiettivi.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://www.instagram.com/mattiaverzeletti.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </motion.a>
              <motion.a
                href={`mailto:${EMAIL}`}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-amber-500 hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Servizi */}
          <div>
            <h4 className="text-sm font-bold tracking-wide uppercase mb-6 text-amber-400">Servizi</h4>
            <ul className="space-y-4">
              {footerLinks.servizi.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-bold tracking-wide uppercase mb-6 text-amber-400">Info</h4>
            <ul className="space-y-4">
              {footerLinks.info.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti Diretti */}
          <div>
            <h4 className="text-sm font-bold tracking-wide uppercase mb-6 text-amber-400">Contattami</h4>
            
            {/* Telefono */}
            <a 
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm">{PHONE}</span>
            </a>
            
            {/* Email */}
            <a 
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors mb-6 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm">{EMAIL}</span>
            </a>

            {/* WhatsApp Button */}
            <motion.a
              href={`https://wa.me/${WHATSAPP}?text=Ciao%20Mattia,%20vorrei%20informazioni%20sui%20tuoi%20percorsi%20di%20allenamento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full py-3 bg-green-500 text-white font-semibold rounded-full text-sm justify-center hover:bg-green-600 transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MessageCircle className="w-4 h-4" />
              Scrivimi su WhatsApp
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} Mattia Verzeletti. Tutti i diritti riservati.
          </p>
          <p className="text-gray-600 text-xs font-medium tracking-wider">
            MADE BY <span className="text-amber-500 font-bold">THEWOLF</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
