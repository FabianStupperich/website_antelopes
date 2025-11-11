import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { impressumTranslations } from '../contexts/legalTranslations';

export default function Impressum() {
  const { language } = useLanguage();
  const t = impressumTranslations[language];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">{t.title}</h1>

          <p className="text-base sm:text-lg mb-6 sm:mb-8">
            {t.intro}
          </p>
          
          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{t.addressTitle}</h2>
            <p className="mb-2"><strong>RWTH Aachen University</strong></p>
            <p className="mb-2">Templergraben 55</p>
            <p className="mb-2">52062 Aachen (Hausanschrift)</p>
            <p className="mb-2">52056 Aachen (Postanschrift)</p>
            <p className="mb-2">Telefon: +49 241 80 1</p>
            <p className="mb-2">E-Mail: info@rwth-aachen.de</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{t.legalFormTitle}</h2>
            <p className="mb-2">
              {t.legalFormText}
            </p>
            <p className="mb-2"><strong>{t.authorityTitle}</strong></p>
            <p className="mb-2">{t.authorityText1}</p>
            <p className="mb-2">{t.authorityText2}</p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{t.vatTitle}</h2>
            <p className="mb-2">{t.vatText}</p>
          </section>

          <section className="mb-8">
            <p className="mb-2">{t.responsibleText}</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
