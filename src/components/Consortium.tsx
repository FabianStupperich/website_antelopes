import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Consortium() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  const partners = [
    {
      id: 1,
      logo: '/rwth_eerc_rgb.png',
      website: 'https://www.fcn.eonerc.rwth-aachen.de/cms/~dndh/E-ON-ERC-FCN/',
      university: '',
      subtitle: '',
      title: 'Kurzprofil',
      content: 'Der Lehrstuhl für Energiesystemökonomik (FCN-ESE, Leitung: Prof. Dr.-Ing. Aaron Praktiknjo) der RWTH Aachen University beschäftigt sich mit energiesystemischen Fragestellungen an der Schnittstelle zwischen Energieökonomik, Energiepolitik und Energietechnik. Die Wissenschaftler:innen des Lehrstuhls arbeiten an Fragestellungen zu den Themenkomplexen Wirtschaftlichkeit, Versorgungssicherheit und Umweltverträglichkeit. Als Werkzeuge zur Untersuchung solcher Fragestellungen bedienen sie sich aus einem breiten Portfolio an Methoden und Modellen der Energiesystemanalyse (Simulations- und Optimierungsmodelle, Input-Output-Modelle, stochastische Prognosemodelle, KI-basierte Methoden, Lebenszyklusanalysen, u.a.). '
    },
    {
      id: 2,
      logo: '/Hochschule_Duesseldorf_logo.svg',
      website: 'https://www.hs-duesseldorf.de/',
      university: '',
      subtitle: '',
      title: 'Kurzprofil',
      content: 'Das Forschungsinstitut Zentrum für Innovative Energiesysteme (ZIES, Leitung: Prof. Dr.-Ing. Mario Adam) an der Hochschule Düsseldorf beschäftigt sich seit 2016 verstärkt mit der Anwendung von KI-Methoden aus dem Bereich des maschinellen Lernens zur Optimierung von Energieversorgungsystemen. Der Fokus der Forschungs- und Entwicklungsarbeiten kann in die nachfolgenden Bereiche eingeteilt werden: Prognose von zeitlich aufgelösten Simulationseingangsgrößen (Time Series Forecasting), Reduzierung von Simulationsmodelllaufzeiten über Metamodellierung in Kombination mit Versuchsplanungsmethoden (Metamodeling & Design of Experiments), Optimierung der Struktur und Dimensionierung von Energieversorgungssystemen bei Planung bzw. Auslegung im Spannungsfeld von ökonomischen und ökologischen Zielgrößen (multikriterielle Optimierung) sowie die praxisnahe Entwicklung und Erprobung von intelligenten Optimierungs- und Regelungsverfahren im Online-Betrieb multivarianter Energiesysteme.'
    },
    {
      id: 4,
      logo: '/volatile_white.svg',
      website: 'https://volatile.de/',
      university: '',
      subtitle: '',
      title: 'Kurzprofil',
      content: 'Die Volatile GmbH ist eine Ausgründung aus dem Lehrstuhl für Energiesystemökonomik an der RWTH Aachen University. Volatile entwickelt Software as a Service (SaaS)-Anwendungen für Energiedatenplattformen und Energiesystemanalysen und kombiniert dabei die Vorteile von Automatisierung und künstlicher Intelligenz mit State of the Art Methoden aus der energiesystemanalytischen Forschung. Mit dem volatile Data Hub wird Kunden aus den Bereichen Energiewirtschaft, energieintensive Industrie sowie Energieberatung eine Energiedatenplattform zu historischen und zukünftigen Entwicklungen im Energiesystem bereitgestellt. Mit den volatile On-Demand-Anwendungen wird ein niederschwelliger Zugang zu komplexen energiesystemanalytischen Werkzeugen angeboten. '
    }
  ];

  return (
    <section id="consortium" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          ref={titleRef}
          className={`text-3xl sm:text-4xl font-black text-gray-900 mb-8 sm:mb-10 transition-all duration-1000 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Konsortium
        </h2>

        <div ref={cardsRef} className="space-y-4 sm:space-y-5">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`bg-white border border-gray-200 rounded overflow-hidden transition-all duration-700 hover:shadow-xl ${
                cardsVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-11 gap-4 sm:gap-6 items-start p-4 sm:p-6">
                <div className="md:col-span-3 flex flex-col gap-2">
                  <a href={partner.website} target="_blank" rel="noopener noreferrer">
                    <img
                      src={partner.logo}
                      alt="Partner Logo"
                      className={`${partner.id <= 2 ? 'h-10 sm:h-12 md:h-16' : 'h-8 sm:h-10 md:h-12'} object-contain ${partner.id === 4 ? 'invert' : ''} hover:opacity-80 transition-opacity`}
                    />
                  </a>
                  {partner.university && (
                    <div className="text-xs text-gray-600 font-semibold">
                      {partner.university}
                    </div>
                  )}
                  {partner.subtitle && (
                    <div className="text-xs text-gray-500">
                      {partner.subtitle}
                    </div>
                  )}
                </div>

                <div className="md:col-span-2 flex items-start">
                  <span className="text-gray-400 text-sm font-medium">
                    {partner.title}
                  </span>
                </div>

                <div className="md:col-span-6">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {partner.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
