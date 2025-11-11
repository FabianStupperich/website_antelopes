import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Project() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  const sections = [
    {
      title: 'Die Herausforderung',
      content: 'Die Bewertung der Versorgungssicherheit mit Elektrizität wird durch die Energiewende zunehmend komplexer. Hochkomplexe Simulationsmodelle, die alle relevanten Systemkomponenten wie erneuerbare Energien, Speicher und Sektorenkopplung berücksichtigen, benötigen für eine einzige Szenarioberechnung bis zu 8 Stunden. Diese extremen Rechenzeiten begrenzen die Anzahl untersuchbarer Szenarien drastisch und verhindern umfassende Analysen verschiedener Zukunftspfade. Gleichzeitig steigen die Anforderungen der europäischen Regulierungsbehörden an die Versorgungssicherheitsbewertung stetig – ein Dilemma zwischen Modellkomplexität und verfügbaren Rechenressourcen.',
      image: '/energy-4030427.jpg',
      imagePosition: 'right'
    },
    {
      title: 'Der Lösungsansatz',
      content: 'KIVi Antelopes entwickelt KI-basierte Metamodelle, die komplexe Versorgungssicherheitsmodelle um mehrere Zehnerpotenzen beschleunigen können. Diese intelligenten Algorithmen lernen das Verhalten der ursprünglichen Simulationsmodelle und können deren Ergebnisse in Millisekunden mit hoher Genauigkeit vorhersagen. Durch die Kombination von maschinellem Lernen mit statistischen Methoden wie Design of Experiments und aktivem Lernen entstehen effiziente Tools, die den europäischen ERAA-Standard erfüllen. Das Ergebnis: Tausende von Szenarien können statt weniger Einzelfälle analysiert werden.',
      image: '/ai-generated-7958880.jpg',
      imagePosition: 'left'
    },
    {
      title: 'Projektziele',
      content: 'Das Projekt verfolgt vier zentrale Ziele: Erstens die radikale Beschleunigung aktueller Optimierungsmodelle für die Versorgungssicherheitsbewertung durch innovative Metamodellierung. Zweitens die Entwicklung ressourceneffizienter Trainings- und Validierungsverfahren für KI-basierte Modelle. Drittens die kontinuierliche Verbesserung der Metamodelle durch Algorithmen des aktiven Lernens für nachhaltigen Praxiseinsatz. Viertens die Bereitstellung einer webbasierten Analyseplattform sowie eines Open-Source-Frameworks mit Praxisleitfaden, um die entwickelten Methoden direkt für Netzbetreiber, Regulierungsbehörden und die Wissenschaft nutzbar zu machen.',
      image: '/coding-1841550.jpg',
      imagePosition: 'right'
    },
    {
      title: 'Bedeutung für die Energiewende',
      content: 'Die Projektergebnisse ermöglichen eine deutlich robustere Planung des zukünftigen Energiesystems. Durch die drastische Beschleunigung der Modellrechnungen können erstmals umfassende Unsicherheitsanalysen und Sensitivitätsstudien durchgeführt werden, die für eine verlässliche Bewertung der Versorgungssicherheit in einem von erneuerbaren Energien geprägten System unerlässlich sind. Dies unterstützt fundierte Entscheidungen zum Ausbau von Kraftwerkskapazitäten, Speichern und Übertragungsnetzen. Gleichzeitig werden Black-Swan-Ereignisse und Klimawandeleffekte besser analysierbar, was die Resilienz des Stromversorgungssystems stärkt und die Energiewende beschleunigt.',
      image: '/housing-4459403.jpg',
      imagePosition: 'left'
    }
  ];

  return (
    <section id="project" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          ref={titleRef}
          className={`text-3xl sm:text-4xl font-black text-gray-900 mb-8 sm:mb-10 transition-all duration-1000 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Das Projekt
        </h2>
        <div className="space-y-32">
          {sections.map((section, index) => {
            const { elementRef, isVisible } = useScrollAnimation(0.15);

            return (
              <div
                key={index}
                ref={elementRef}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  section.imagePosition === 'left' ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : section.imagePosition === 'left'
                      ? 'opacity-0 translate-x-12'
                      : 'opacity-0 -translate-x-12'
                  } ${section.imagePosition === 'left' ? 'md:order-2' : ''}`}
                >
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-base">{section.content}</p>
                </div>

                <div
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : section.imagePosition === 'left'
                      ? 'opacity-0 -translate-x-12'
                      : 'opacity-0 translate-x-12'
                  } ${section.imagePosition === 'left' ? 'md:order-1' : ''}`}
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gray-200 rounded-lg"></div>
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-64 sm:h-80 md:h-96 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
