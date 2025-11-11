import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';

export default function Impressum() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
            {language === 'de' ? 'Impressum gemäß § 5 Telemediengesetz (TMG)' : 'Imprint according to § 5 Telemedia Act (TMG)'}
          </h1>

          <p className="text-base sm:text-lg mb-6 sm:mb-8">
            {language === 'de'
              ? 'Für die Website ist die Volatile GmbH in Vertretung für das Konsortium von KIVi-Antelopes verantwortlich.'
              : 'Volatile GmbH is responsible for the website on behalf of the KIVi-Antelopes consortium.'}
          </p>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {language === 'de' ? 'Anschrift Konsortiumsleitung:' : 'Consortium Management Address:'}
            </h2>
            <p className="mb-2"><strong>RWTH Aachen University</strong></p>
            <p className="mb-2">Templergraben 55</p>
            <p className="mb-2">52062 Aachen (Hausanschrift)</p>
            <p className="mb-2">52056 Aachen (Postanschrift)</p>
            <p className="mb-2">Telefon: +49 241 80 1</p>
            <p className="mb-2">E-Mail: info@rwth-aachen.de</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {language === 'de' ? 'Rechtsform:' : 'Legal Form:'}
            </h2>
            <p className="mb-2">
              {language === 'de'
                ? 'Die RWTH Aachen University ist eine Körperschaft des öffentlichen Rechts. Sie wird durch den Rektor, Univ.-Prof. Dr. rer. nat. Dr. h.c. mult. Ulrich Rüdiger, vertreten.'
                : 'RWTH Aachen University is a corporation under public law. It is represented by the Rector, Univ.-Prof. Dr. rer. nat. Dr. h.c. mult. Ulrich Rüdiger.'}
            </p>
            <p className="mb-2">
              <strong>{language === 'de' ? 'Zuständige Aufsichtsbehörde' : 'Responsible Supervisory Authority'}</strong>
            </p>
            <p className="mb-2">Ministerium für Kultur und Wissenschaft des Landes Nordrhein-Westfalen, Völklinger Straße 49,</p>
            <p className="mb-2">40221 Düsseldorf</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              {language === 'de' ? 'Umsatzsteuer-Identifikationsnummer:' : 'VAT Identification Number:'}
            </h2>
            <p className="mb-2">
              {language === 'de' ? 'Gemäß § 27 a Umsatzsteuergesetz: DE 121689807' : 'According to § 27 a Sales Tax Act: DE 121689807'}
            </p>
          </section>

          <section className="mb-8">
            <p className="mb-2">
              {language === 'de'
                ? 'Inhaltlich Verantwortlich i.S.d. § 18 Abs. 2 MStV: Volatile GmbH'
                : 'Responsible for Content according to § 18 para. 2 MStV: Volatile GmbH'}
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
