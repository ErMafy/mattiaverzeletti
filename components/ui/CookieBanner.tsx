'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setIsVisible(false);
  };

  const acceptPreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookie-consent', JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      >
        <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          {!showPreferences ? (
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-white">
                <h3 className="text-xl font-bold mb-2">Informativa sui Cookie</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito web, per analizzare il traffico e per personalizzare i contenuti. Cliccando su &quot;Accetta tutti&quot;, acconsenti all&apos;uso di tutti i cookie. Puoi anche gestire le tue preferenze o rifiutare i cookie non essenziali. Per maggiori informazioni, leggi la nostra <Link href="/cookie-policy" className="text-amber-500 hover:underline">Cookie Policy</Link>.
                </p>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="text-sm text-gray-400 hover:text-white transition-colors underline"
                >
                  Gestisci preferenze
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={rejectAll}
                  className="px-6 py-2.5 rounded-full border border-gray-700 text-white font-medium hover:bg-gray-800 transition-colors text-sm whitespace-nowrap"
                >
                  Rifiuta non essenziali
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors text-sm whitespace-nowrap"
                >
                  Accetta tutti
                </button>
              </div>
            </div>
          ) : (
            <div className="p-6 md:p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Preferenze Cookie</h3>
              <p className="text-gray-400 text-sm mb-6">
                Seleziona quali cookie vuoi abilitare. I cookie strettamente necessari sono sempre attivi in quanto essenziali per il funzionamento del sito.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-bold text-sm mb-1">Strettamente necessari (Sempre attivi)</h4>
                    <p className="text-xs text-gray-400">Fondamentali per la navigazione e il corretto funzionamento del sito.</p>
                  </div>
                  <div className="w-10 h-6 bg-amber-500 rounded-full relative opacity-50 cursor-not-allowed">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-bold text-sm mb-1">Cookie Analitici</h4>
                    <p className="text-xs text-gray-400">Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni in forma anonima.</p>
                  </div>
                  <button 
                    onClick={() => setPreferences({...preferences, analytics: !preferences.analytics})}
                    className={`w-10 h-6 rounded-full relative transition-colors ${preferences.analytics ? 'bg-amber-500' : 'bg-gray-600'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences.analytics ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                  <div>
                    <h4 className="font-bold text-sm mb-1">Cookie di Marketing</h4>
                    <p className="text-xs text-gray-400">Utilizzati per tracciare i visitatori attraverso i siti web. L&apos;intento è visualizzare annunci pertinenti e coinvolgenti per il singolo utente.</p>
                  </div>
                  <button 
                    onClick={() => setPreferences({...preferences, marketing: !preferences.marketing})}
                    className={`w-10 h-6 rounded-full relative transition-colors ${preferences.marketing ? 'bg-amber-500' : 'bg-gray-600'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences.marketing ? 'right-1' : 'left-1'}`}></div>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-3">
                <button
                  onClick={() => setShowPreferences(false)}
                  className="px-6 py-2.5 rounded-full border border-gray-700 text-white font-medium hover:bg-gray-800 transition-colors text-sm"
                >
                  Indietro
                </button>
                <button
                  onClick={acceptPreferences}
                  className="px-6 py-2.5 rounded-full bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors text-sm"
                >
                  Salva preferenze
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}