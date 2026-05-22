import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto mt-16 font-sans">
        <Link href="/" className="text-amber-500 font-semibold mb-8 inline-block hover:underline">
          &larr; Torna alla Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-black">Privacy Policy</h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Informazioni sul Titolare del Trattamento</h2>
            <p>
              Titolare del Trattamento dei Dati:<br/>
              <strong>Mattia Verzeletti</strong><br/>
              P.IVA: 02831030032<br/>
              C.F.: VRZMTT02S28B019Z<br/>
              Indirizzo: Novara (NO), 28100<br/>
              Email: mv.athletica@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Quali dati raccogliamo</h2>
            <p>Raccogliamo i seguenti tipi di dati personali:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Dati di contatto:</strong> Nome, cognome, indirizzo email, numero di telefono (quando forniti volontariamente tramite moduli di contatto o WhatsApp).</li>
              <li><strong>Dati tecnici e di navigazione:</strong> Indirizzo IP, tipo di browser, informazioni sui dispositivi, dati estratti tramite cookie analytics.</li>
              <li><strong>Dati relativi alla salute o fisici:</strong> (Se applicabile) Solo con il tuo esplicito consenso, potremmo trattare informazioni relative a condizioni fisiche, obiettivi sportivi, per elaborare i programmi di allenamento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Finalità del trattamento</h2>
            <p>I tuoi dati sono trattati per le seguenti finalità:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Fornitura dei servizi richiesti (programmi di allenamento, coaching online).</li>
              <li>Rispondere alle richieste di informazioni giunte via email, modulo di contatto o WhatsApp.</li>
              <li>Adempimento di obblighi fiscali e contabili.</li>
              <li>Miglioramento dell&apos;esperienza utente sul sito web.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Base giuridica del trattamento</h2>
            <p>
              Il trattamento avviene sulla base del consenso espresso dall&apos;utente (per quanto riguarda le categorie particolari di dati o il marketing diretto via email), sulla base dell&apos;esecuzione di un contratto o misure precontrattuali, nonché per obbligo di legge (es. fatturazione).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Conservazione dei dati</h2>
            <p>
              I dati personali sono conservati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti. I dati fiscali e contabili saranno conservati per 10 anni come previsto dalla legge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Diritti dell&apos;utente</h2>
            <p>
              In conformità al GDPR (Regolamento UE 2016/679), l&apos;utente ha il diritto di:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Accedere ai propri dati.</li>
              <li>Richiederne la rettifica, la cancellazione o la limitazione del trattamento.</li>
              <li>Opporsi al trattamento in determinati casi.</li>
              <li>Richiedere la portabilità dei dati.</li>
              <li>Revocare il consenso in qualsiasi momento.</li>
            </ul>
            <p className="mt-4">
              Per esercitare tali diritti, puoi contattare il Titolare all&apos;indirizzo email indicato nella Sezione 1.
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