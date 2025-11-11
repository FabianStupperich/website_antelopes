import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../contexts/LanguageContext';
import { datenschutzTranslations } from '../contexts/legalTranslations';

export default function Datenschutz() {
  const { language } = useLanguage();
  const t = datenschutzTranslations[language];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">{t.title}</h1>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{t.section1.title}</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section1.generalTitle}</h3>
            <p className="mb-4">
              {t.section1.generalText}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section1.dataCollectionTitle}</h3>

            <h4 className="text-base sm:text-lg font-semibold mb-2">{t.section1.whoResponsibleTitle}</h4>
            <p className="mb-4">
              {t.section1.whoResponsibleText}
            </p>

            <h4 className="text-base sm:text-lg font-semibold mb-2">{t.section1.howCollectTitle}</h4>
            <p className="mb-4">
              {t.section1.howCollectText1}
            </p>
            <p className="mb-4">
              {t.section1.howCollectText2}
            </p>

            <h4 className="text-base sm:text-lg font-semibold mb-2">{t.section1.whyUseTitle}</h4>
            <p className="mb-4">
              {t.section1.whyUseText}
            </p>

            <h4 className="text-base sm:text-lg font-semibold mb-2">{t.section1.rightsTitle}</h4>
            <p className="mb-4">
              {t.section1.rightsText1}
            </p>
            <p className="mb-4">
              {t.section1.rightsText2}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section1.analysisTitle}</h3>
            <p className="mb-4">
              {t.section1.analysisText1}
            </p>
            <p className="mb-4">
              {t.section1.analysisText2}
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{t.section2.title}</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section2.externalTitle}</h3>
            <p className="mb-4">
              {t.section2.externalText1}
            </p>
            <p className="mb-4">
              {t.section2.externalText2}
            </p>
            <p className="mb-4">
              {t.section2.externalText3}
            </p>
            <p className="mb-4">{t.section2.hosterText}</p>
            <p className="mb-2"><strong>Azure</strong></p>
            <p className="mb-2">Microsoft Corporation</p>
            <p className="mb-2">One Microsoft Way</p>
            <p className="mb-4">Redmond, WA 98052-6399 USA</p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section2.processingTitle}</h3>
            <p className="mb-4">
              {t.section2.processingText}
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{t.section3.title}</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.privacyTitle}</h3>
            <p className="mb-4">
              {t.section3.privacyText1}
            </p>
            <p className="mb-4">
              {t.section3.privacyText2}
            </p>
            <p className="mb-4">
              {t.section3.privacyText3}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.responsibleTitle}</h3>
            <p className="mb-4">{t.section3.responsibleText1}</p>
            <p className="mb-2"><strong>RWTH Aachen University</strong></p>
            <p className="mb-2">Templergraben 55</p>
            <p className="mb-2">52062 Aachen (Hausanschrift)</p>
            <p className="mb-2">52056 Aachen (Postanschrift)</p>
            <p className="mb-2">Telefon: +49 241 80 1</p>
            <p className="mb-4">E-Mail: info@rwth-aachen.de</p>
            <p className="mb-4">
              {t.section3.responsibleText2}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.storageTitle}</h3>
            <p className="mb-4">
              {t.section3.storageText}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.legalBasisTitle}</h3>
            <p className="mb-4">
              {t.section3.legalBasisText}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.recipientsTitle}</h3>
            <p className="mb-4">
              {t.section3.recipientsText}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.revocationTitle}</h3>
            <p className="mb-4">
              {t.section3.revocationText}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.objectionTitle}</h3>
            <p className="mb-4 font-semibold uppercase">
              {t.section3.objectionText1}
            </p>
            <p className="mb-4 font-semibold uppercase">
              {t.section3.objectionText2}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.complaintTitle}</h3>
            <p className="mb-4">
              {t.section3.complaintText}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.portabilityTitle}</h3>
            <p className="mb-4">
              {t.section3.portabilityText}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.infoTitle}</h3>
            <p className="mb-4">
              {t.section3.infoText}
            </p>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section3.restrictionTitle}</h3>
            <p className="mb-4">
              {t.section3.restrictionText1}
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">{t.section3.restrictionItem1}</li>
              <li className="mb-2">{t.section3.restrictionItem2}</li>
              <li className="mb-2">{t.section3.restrictionItem3}</li>
              <li className="mb-2">{t.section3.restrictionItem4}</li>
            </ul>
            <p className="mb-4">
              {t.section3.restrictionText2}
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{t.section4.title}</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section4.contactTitle}</h3>
            <p className="mb-4">
              {t.section4.contactText1}
            </p>
            <p className="mb-4">
              {t.section4.contactText2}
            </p>
            <p className="mb-4">
              {t.section4.contactText3}
            </p>
          </section>

          <section className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">{t.section5.title}</h2>

            <h3 className="text-lg sm:text-xl font-semibold mb-2">{t.section5.fontsTitle}</h3>
            <p className="mb-4">
              {t.section5.fontsText1}
            </p>
            <p className="mb-4">
              {t.section5.fontsText2} <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://developers.google.com/fonts/faq</a> {t.section5.fontsText3} <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://policies.google.com/privacy?hl=de</a>.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}
