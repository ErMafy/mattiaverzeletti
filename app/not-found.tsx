'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-8xl md:text-9xl font-black text-amber-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-wide">
          Pagina Non Trovata
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link href="/home">
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-full uppercase tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Torna alla Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
