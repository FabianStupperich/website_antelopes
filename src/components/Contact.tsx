import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">{t('contact.title')}</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="bg-gray-50 p-4 sm:p-6 rounded">
            <h3 className="text-base font-bold text-gray-900 mb-3 sm:mb-4">{t('contact.heading')}</h3>
            <div className="space-y-3 sm:space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">Lehrstuhl für Energiesystemökonomik (FCN-ESE)</h4>
                <h4 className="text-gray-900 mb-1 text-sm">E.ON Energy Research Center</h4>
                <h4 className="text-gray-900 mb-1 text-sm">RWTH Aachen University</h4> <br />
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{t('contact.person')}</h4> 
               </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{t('contact.phone')}</h4>
                <p className="text-gray-600 text-sm">
                  +49 241 80-49873
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{t('contact.email')}</h4>
                <p className="text-gray-600 text-sm">
                  marius.tillmanns@eonerc.rwth-aachen.de
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
