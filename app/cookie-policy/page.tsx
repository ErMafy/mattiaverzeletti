import React from 'react';
import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto mt-16 font-sans">
        <Link href="/" className="text-amber-500 font-semibold mb-8 inline-block hover:underline">
          &larr; Torna alla Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-black">Cookie Policy</h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Cosa sono i cookie?</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell&apos;utente, dove vengono memorizzati, per poi essere ritrasmessi agli stessi siti alla visita successiva. I cookie permettono al sito di funzionare correttamente e in modo efficiente, oltre a fornire informazioni al proprietario del sito a fini statistici o pubblicitari.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Quali Cookie utilizziamo</h2>
            <p className="mb-4">Il nostro sito utilizza i seguenti tipi di cookie:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Cookie Tecnici / Essenziali:</strong>
                <p className="text-sm mt-1">Sono necessari per il corretto funzionamento del sito. Senza questi cookie, alcune parti o funzionalità del sito non potrebbero essere utilizzate. Sono sempre attivi.</p>
              </li>
              <li>
                <strong>Cookie Analitici (o di Statistica):</strong>
                <p className="text-sm mt-1">Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo e trasmettendo informazioni in forma anonima (es. Google Analytics). Richiedono il tuo consenso.</p>
              </li>
              <li>
                <strong>Cookie di Profilazione / Marketing:</strong>
                <p className="text-sm mt-1">Utilizzati per tracciare i visitatori attraverso i siti web allo scopo di mostrare annunci pertinenti. Richiedono il tuo consenso.</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Gestione delle tue preferenze sui cookie</h2>
            <p>
              Quando accedi per la prima volta al sito, ti viene mostrato un banner che ti permette di accettare tutti i cookie, rifiutarli o gestire le tue preferenze individualmente. Le tue scelte vengono memorizzate per le visite future.
            </p>
            <p className="mt-4">
              Inoltre, puoi modificare le impostazioni del tuo browser per disabilitare completamente i cookie. Di seguito trovi i link alle guide dei principali browser:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-e-gestire-i-cookie-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:underline">Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Chi è il Titolare del Trattamento</h2>
            <p>
              <strong>Mattia Verzeletti</strong><br/>
              P.IVA: 02831030032<br/>
              C.F.: VRZMTT02S28B019Z<br/>
              Indirizzo: Novara (NO), 28100<br/>
              Email: mv.athletica@gmail.com
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-12">
            Ultimo aggiornamento: Aprile 2026
          </p>
        </div>
      </div>
    </div>
  );
}