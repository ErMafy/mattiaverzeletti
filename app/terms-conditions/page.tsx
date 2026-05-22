import React from 'react';
import Link from 'next/link';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-24 px-6">
      <div className="max-w-4xl mx-auto mt-16 font-sans">
        <Link href="/" className="text-amber-500 font-semibold mb-8 inline-block hover:underline">
          &larr; Torna alla Home
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-black">Termini e Condizioni</h1>
        
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-black mb-4">1. Introduzione</h2>
            <p>
              I presenti Termini e Condizioni regolano l&apos;utilizzo dei servizi di coaching online e l&apos;accesso al sito web offerti da:<br/>
              <strong>Mattia Verzeletti</strong><br/>
              P.IVA: 02831030032<br/>
              C.F.: VRZMTT02S28B019Z<br/>
              Novara (NO), 28100.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">2. Servizi Offerti</h2>
            <p>
              Offriamo servizi di personal training online, programmi di allenamento personalizzati, monitoraggio e consulenza legati al fitness e al benessere fisico. Tali servizi non costituiscono in alcun modo parere medico o diagnosi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">3. Idoneità Fisica</h2>
            <p>
              Acquistando o usufruendo dei servizi di allenamento, accetti e dichiari di godere di buona salute e di essere in possesso di un certificato medico di idoneità all&apos;attività sportiva (non agonistica) in corso di validità. L&apos;utente si assume ogni responsabilità per eventuali infortuni o problemi di salute legati all&apos;esecuzione dei programmi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">4. Pagamenti e Rimborsi</h2>
            <p>
              Tutti i pagamenti per i servizi di coaching e le schede di allenamento devono essere effettuati anticipatamente. A causa della natura digitale e personalizzata dei servizi offerti, non sono previsti rimborsi una volta che il programma di allenamento o la consulenza è stata consegnata/erogata, salvo disposizioni di legge inderogabili applicabili.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">5. Proprietà Intellettuale</h2>
            <p>
              Tutto il materiale (schede di allenamento, video, contenuti testuali, logo) è di proprietà di Mattia Verzeletti e non può essere copiato, ridistribuito o venduto a terzi senza esplicito consenso scritto.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">6. Modifiche ai Termini</h2>
            <p>
              Ci riserviamo il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento. Le modifiche avranno effetto non appena pubblicate su questa pagina.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-black mb-4">7. Foro Competente</h2>
            <p>
              Per qualsiasi controversia derivante o relativa ai presenti Termini e Condizioni, la competenza esclusiva spetta al Foro di Novara, nel rispetto delle norme vigenti in materia di codice del consumo.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-12">
            Ultimo aggiornamento: Ottobre 2023
          </p>
        </div>
      </div>
    </div>
  );
}