import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Consortium() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  const partners = [
    {
      id: 1,
      logo: '/rwth_eerc_rgb.png',
      university: '',
      subtitle: '',
      title: 'Kurzprofil',
      content: 'Der Lehrstuhl für Energiesystemökonomik (FCN-ESE, Leitung: Univ.- Prof. Dr.-Ing. Aaron Praktiknjo) der RWTH Aachen University beschäftigt sich mit Fragestellungen an der Schnittstelle zwischen Energieökonomik, Energiepolitik und Energietechnik. Die Wissenschaftler:innen des Lehrstuhls arbeiten zu den Themenkomplexen Wirtschaftlichkeit, Versorgungssicherheit und Umweltverträglichkeit. Dafür wird ein breites Spektrum an Methoden der Energiesystemanalyse eingesetzt – von Simulations- und Optimierungsmodellen über Input-Output- und Prognosemodelle bis hin zu KI-basierten Ansätzen und Lebenszyklusanalysen.'
    },
    {
      id: 2,
      logo: '/show_picture.svg',
      university: '',
      subtitle: '',
      title: 'Kurzprofil',
      content: 'Der Lehrstuhl für Übertragungsnetze und Energiewirtschaft (Leitung: Univ.-Prof. Dr.-Ing. Albert Moser) des Instituts für Elektrische Anlagen & Netze, Digitalisierung & Energiewirtschaft (IAEW) beschäftigt sich mit der mathematischen Modellierung, Optimierung und Bewertung des technisch-wirtschaftlichen Ausbaus und Betriebs von Energieversorgungssystemen. Der Fokus gilt insbesondere den Märkten, der Versorgungssicherheit und Energieübertragung sowie der Systemstabilität im elektrischen Übertragungsnetz. Durch langjährige Erfahrung als Forschungsinstitut in der Markt-, Netz- und Systemanalyse verfügt das IAEW über detaillierte Kenntnisse und ausgereifte Modelle zur Bewertung von Marktmechanismen, Netzbetriebsstrategien und Netzausbaumaßnahmen sowie der Versorgungssicherheit und Systemstabilität in sektorengekoppelten Energiesystemen.'
    },
    {
      id: 3,
      logo: '/MAON.png',
      university: '',
      subtitle: '',
      title: 'Kurzprofil',
      content: 'Die Maon GmbH ist eine Ausgründung aus dem IAEW der RWTH Aachen University und des Lehrstuhls für Energieversorgungsnetze und Integration Erneuerbarer Energien der Technischen Universität Berlin. In dem im Jahr 2019 gegründeten Unternehmen werden Daten, Modelle und Verfahren zur Simulation von Großhandelsmärkten für Elektrizität entwickelt und in eine Cloud-Lösung integriert. Die Marktsimulation wird regelmäßig bspw. von Netzbetreibern zur Herleitung der Netznutzung und von Händlern zur Preisprognose genutzt. Maon ist zudem als Prognose- und Datenlieferant für Marktakteure aktiv und erstellt dabei u. a. langfristige Prognosen der Strompreisverteilung für Investitionsentscheidungen in Wind- und Photovoltaikanlagen, Wasserkraftwerke, Batteriespeicher, Gasturbinen, Elektrolyseure sowie andere Industrieverbraucher.'
    },
    {
      id: 4,
      logo: '/volatile_white.svg',
      university: '',
      subtitle: '',
      title: 'Kurzprofil',
      content: 'Die Volatile GmbH ist eine Ausgründung aus dem Lehrstuhl für Energiesystemökonomik an der RWTH Aachen University. Volatile entwickelt Software as a Service (SaaS)-Anwendungen für Energiedatenplattformen und Energiesystemanalysen und kombiniert dabei die Vorteile von Automatisierung und künstlicher Intelligenz mit State of the Art Methoden aus der energiesystemanalytischen Forschung. Mit dem volatile Data Hub wird Kunden aus den Bereichen Energiewirtschaft, energieintensive Industrie sowie Energieberatung eine Energiedatenplattform zu historischen und zukünftigen Entwicklungen im Energiesystem bereitgestellt. Mit den volatile On-Demand-Anwendungen wird ein niederschwelliger Zugang zu komplexen energiesystemanalytischen Werkzeugen angeboten.'
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
                  <img
                    src={partner.logo}
                    alt="Partner Logo"
                    className={`${partner.id <= 2 ? 'h-10 sm:h-12 md:h-16' : 'h-8 sm:h-10 md:h-12'} object-contain ${partner.id === 4 ? 'invert' : ''}`}
                  />
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
