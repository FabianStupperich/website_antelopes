import Navbar from './Navbar';
import Footer from './Footer';

export default function Impressum() {

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Impressum gemäß § 5 Telemediengesetz (TMG)</h1>

          <p className="text-base sm:text-lg mb-6 sm:mb-8">
            Für die Website ist die Volatile GmbH in Vertretung für das Konsortium von KIVi-Antelopes verantwortlich.
          </p>
          
          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Anschrift Konsortiumsleitung:</h2>
            <p className="mb-2"><strong>RWTH Aachen University</strong></p>
            <p className="mb-2">Templergraben 55</p>
            <p className="mb-2">52062 Aachen (Hausanschrift)</p>
            <p className="mb-2">52056 Aachen (Postanschrift)</p>
            <p className="mb-2">Telefon: +49 241 80 1</p>
            <p className="mb-2">E-Mail: info@rwth-aachen.de</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Rechtsform:</h2>
            <p className="mb-2">
              Die RWTH Aachen University ist eine Körperschaft des öffentlichen Rechts. Sie wird durch den
              Rektor, Univ.-Prof. Dr. rer. nat. Dr. h.c. mult. Ulrich Rüdiger, vertreten.
            </p>
            <p className="mb-2"><strong>Zuständige Aufsichtsbehörde</strong></p>
            <p className="mb-2">Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen, Völklinger Straße 49,</p>
            <p className="mb-2">40221 Düsseldorf</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Umsatzsteuer-Identifikationsnummer:</h2>
            <p className="mb-2">Gemäß § 27 a Umsatzsteuergesetz: DE 121689807</p>
          </section>

          <section className="mb-8">
            <p className="mb-2">Inhaltlich Verantwortlich i.S.d. § 18 Abs. 2 MStV: Volatile GmbH</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
