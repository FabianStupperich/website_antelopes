import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ConsortiumDetailed() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const partners = [
    {
      id: 1,
      logo: '/rwth_eerc_rgb.png',
      university: '',
      subtitle: '',
      sections: [
        {
          title: 'Kurzprofil',
          content: 'Der Lehrstuhl für Energiesystemökonomik (FCN-ESE, Leitung: Prof. Dr.-Ing. Aaron Praktiknjo) der RWTH Aachen University beschäftigt sich mit energiesystemischen Fragestellungen an der Schnittstelle zwischen Energieökonomik, Energiepolitik und Energietechnik. Die Wissenschaftler:innen des Lehrstuhls arbeiten an Fragestellungen zu den Themenkomplexen Wirtschaftlichkeit, Versorgungssicherheit und Umweltverträglichkeit. Als Werkzeuge zur Untersuchung solcher Fragestellungen bedienen sie sich aus einem breiten Portfolio an Methoden und Modellen der Energiesystemanalyse (Simulations- und Optimierungsmodelle, Input-Output-Modelle, stochastische Prognosemodelle, KI-basierte Methoden, Lebenszyklusanalysen, u.a.). '
        },
        {
          title: 'Projektrolle',
          content: 'Im Rahmen des Projektvorhabens VAELUES beschäftigt sich FCN-ESE schwerpunktmäßig mit den sozioökonomischen Versorgungssicherheitsindikatoren. Angesichts ihrer wachsenden Bedeutung und der veränderten Rahmenbedingungen durch die Transformation des Energiesystems sollen diese adäquat berechnet werden. Zudem sollen sie durch die Zusammenführung mit der technischen Versorgungssicherheitsmodellierung in einen ganzheitlichen Ansatz zur Bewertung der Resource Adequacy überführt werden. Die Arbeit des FCN-ESE im Projekt konzentriert sich auf drei Kernziele:',
          bullets: [
            'Bereitstellung eines umfassenden und standardisierten Rahmens für die Bewertung verbraucherspezifischer, regionaler und zeitlicher Value of Lost Load Werte',
            'Identifizierung relevanter sozioökonomischer Indikatoren, die als Grundlage für die Anpassung der entwickelten Methoden zur Abbildung zukünftiger Entwicklungen im Energiesystem dienen',
            'Zusammenführung der sozioökonomischen mit der technischen Perspektive und ganzheitliche Bewertung zukünftiger Energiesystemszenarien'
          ]
        }
      ]
    },
    {
      id: 2,
      logo: '/Hochschule_Duesseldorf_logo.svg',
      university: '',
      subtitle: '',
      sections: [
        {
          title: 'Kurzprofil',
          content: 'Das Forschungsinstitut Zentrum für Innovative Energiesysteme (ZIES, Leitung: Prof. Dr.-Ing. Mario Adam) an der Hochschule Düsseldorf beschäftigt sich seit 2016 verstärkt mit der Anwendung von KI-Methoden aus dem Bereich des maschinellen Lernens zur Optimierung von Energieversorgungsystemen. Der Fokus der Forschungs- und Entwicklungsarbeiten kann in die nachfolgenden Bereiche eingeteilt werden: Prognose von zeitlich aufgelösten Simulationseingangsgrößen (Time Series Forecasting), Reduzierung von Simulationsmodelllaufzeiten über Metamodellierung in Kombination mit Versuchsplanungsmethoden (Metamodeling & Design of Experiments), Optimierung der Struktur und Dimensionierung von Energieversorgungssystemen bei Planung bzw. Auslegung im Spannungsfeld von ökonomischen und ökologischen Zielgrößen (multikriterielle Optimierung) sowie die praxisnahe Entwicklung und Erprobung von intelligenten Optimierungs- und Regelungsverfahren im Online-Betrieb multivarianter Energiesysteme.'
        },
        {
          title: 'Projektrolle',
          content: 'Im Rahmen des Projektvorhabens VAELUES richtet sich der Fokus des IAEW auf die technische Dimension der Resource Adequacy. Dabei wird insbesondere die Berücksichtigung nicht nur marktbezogener Ressourcen, sondern auch gebotszoneninterner Übertragungsressourcen sowie deren Unsicherheiten in der Bewertung der Resource Adequacy als zentral erachtet. In enger Zusammenarbeit mit dem FCN-ESE soll die technische Modellierung der Resource Adequacy mit den sozioökonomischen Indikatoren integriert werden, um einen ganzheitlichen Ansatz zur Bewertung der Resource Adequacy zu entwickeln. Die spezifischen Arbeitsziele des IAEW im Rahmen dieses Projekts sind:',
          bullets: [
            'Weiterentwicklung eines technischen Modells zur Bewertung der Resource Adequacy unter Berücksichtigung von gebotszoneninternen Übertragungsressourcen sowie deren Unsicherheiten',
            'Identifikation und Analyse des Einflusses von gebotszoneninternen Netzengpässen auf die technischen Indikatoren der Resource Adequacy',
            'Zusammenführung der sozioökonomischen mit der technischen Perspektive und ganzheitliche Bewertung zukünftiger Energiesystemszenarien',
          ]
        }
      ]
    },
    {
      id: 4,
      logo: '/volatile_white.svg',
      university: '',
      subtitle: '',
      sections: [
        {
          title: 'Kurzprofil',
          content: 'Die Volatile GmbH ist eine Ausgründung aus dem Lehrstuhl für Energiesystemökonomik an der RWTH Aachen University. Volatile entwickelt Software as a Service (SaaS)-Anwendungen für Energiedatenplattformen und Energiesystemanalysen und kombiniert dabei die Vorteile von Automatisierung und künstlicher Intelligenz mit State of the Art Methoden aus der energiesystemanalytischen Forschung. Mit dem volatile Data Hub wird Kunden aus den Bereichen Energiewirtschaft, energieintensive Industrie sowie Energieberatung eine Energiedatenplattform zu historischen und zukünftigen Entwicklungen im Energiesystem bereitgestellt. Mit den volatile On-Demand-Anwendungen wird ein niederschwelliger Zugang zu komplexen energiesystemanalytischen Werkzeugen angeboten.'
        },
        {
          title: 'Projektrolle',
          content: 'Im Zuge des Forschungsvorhaben VAELUES unterstützt der Projektpartner Volatile GmbH die Analyse der Versorgungssicherheitsindikatoren durch den Aufbau und die Bereitstellung eines Datenmanagementsystems sowie durch die Entwicklung einer graphischen Oberfläche zur Ergebnisvisualisierung und Auswertung. Neben der Koordination des operativen Datenmanagements wird die notwendige ökonomische Datenbasis zur Verfügung gestellt. Die graphische Visualisierung der Projektergebnisse soll in Form eines Online-Tools erfolgen.',
          bullets: [
            'Entwicklung und Koordination eines partnerübergreifenden Datenmanagementsystems zur Akquise, Verarbeitung und Generierung einer sozioökonomischen Datenbasis',
            'Unterstützung bei der Validierung sozioökonomischer Modellierungen durch die Bereitstellung regional, zeitlich und sektoral hochaufgelöster Daten',
            'Entwicklung und Hosting eines digitalen Tools zur interaktiven Ergebnisvisualisierung',
          ]
        }
      ]
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
              <div className="grid md:grid-cols-12 gap-4 sm:gap-6 items-start p-4 sm:p-6">
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
                    {partner.sections[0].title}
                  </span>
                </div>

                <div className="md:col-span-6">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {partner.sections[0].content}
                  </p>
                </div>

                <div className="md:col-span-1 flex justify-end items-start">
                  <button
                    onClick={() => setExpandedId(expandedId === partner.id ? null : partner.id)}
                    className={`w-8 h-8 sm:w-10 sm:h-10 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                      expandedId === partner.id ? 'rotate-180' : ''
                    }`}
                    style={{ backgroundColor: '#B34A22' }}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {expandedId === partner.id && (
                <div className="border-t border-gray-200 bg-gray-50 animate-[fadeIn_0.3s_ease-out] p-4 sm:p-6">
                  <div className="space-y-6">
                    {partner.sections.slice(1).map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">{section.title}</h3>
                        {section.content && (
                          <p className="text-gray-700 text-sm leading-relaxed mb-3">
                            {section.content}
                          </p>
                        )}
                        {section.bullets && (
                          <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm leading-relaxed">
                            {section.bullets.map((bullet, bulletIdx) => (
                              <li key={bulletIdx}>{bullet}</li>
                            ))}
                          </ul>
                        )}
                        {!section.content && !section.bullets && (
                          <p className="text-gray-700 text-sm leading-relaxed">
                            Inhalt folgt in Kürze...
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
