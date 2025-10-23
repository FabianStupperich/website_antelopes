import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Project() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);

  const sections = [
    {
      title: 'Die Herausforderung',
      content: 'Mit dem Ausbau von Photovoltaik- und Windenergieanlagen  sowie dem Ausstieg aus Kernkraft, Braun- und Steinkohle bei der Stromerzeugung steht Deutschland vor der Herausforderung, die Versorgungssicherheit für elektrische Energie weiterhin zu gewährleisten. Die volatilen erneuerbaren Energien ersetzen fossile Brennstoffe, während gleichzeitig durch Elektromobilität und Wärmepumpen neue flexible Stromverbraucher entstehen. Bisherige Bewertungsmethoden betrachten entweder nur technische oder nur wirtschaftliche Aspekte der Versorgungssicherheit ohne Differenzierung inländischer Regionen, was der Komplexität des transformierten Energiesystems nicht gerecht wird.',
      image: '/sunset-3442835.jpg',
      imagePosition: 'right'
    },
    {
      title: 'Der Lösungsansatz',
      content: 'VAELUES führt erstmals technische und sozioökonomische Bewertungen der Versorgungssicherheit systematisch zusammen. Wir erweitern technische Simulationsmodelle um die Berücksichtigung regionaler Netzengpässe und Sektorkopplungstechnologien. Parallel entwickeln wir Methoden zur Bestimmung des Value of Lost Load (VoLL), die berücksichtigen, dass verschiedene Verbrauchergruppen und Regionen Stromausfälle unterschiedlich bewerten. Durch die Kopplung beider Ansätze können wir bestimmen, wo Investitionen in zusätzliche Kapazitäten wirklich sinnvoll sind und wo alternative Lösungen wie Nachfrageflexibilität aus gesamtwirtschaftlicher Sicht vorzuziehen wären.',
      image: '/electrical-863402.jpg',
      imagePosition: 'left'
    },
    {
      title: 'Projektziele',
      content: 'Das Projekt entwickelt erweiterte Modelle zur ganzheitlichen Bewertung der Versorgungssicherheit und wendet diese auf das deutsche Energiesystem der Jahre 2035 und 2045 an. Die Ergebnisse münden in konkrete regionale Handlungsempfehlungen für Kapazitätserweiterungen bei Erzeugung, Speicherung und Nachfrageflexibilität. Ein interaktives Visualisierungstool macht die komplexen Zusammenhänge für Stakeholder aus Politik, Wirtschaft und Wissenschaft zugänglich.',
      image: '/solar-8244680.jpg',
      imagePosition: 'right'
    },
    {
      title: 'Bedeutung für die Energiewende',
      content: 'Die Projektergebnisse unterstützen politische Entscheidungsträger und Unternehmen dabei, fundierte Entscheidungen über Investitionen in die Versorgungssicherheit zu treffen. Durch die transparente Darstellung von Kosten und Nutzen verschiedener Versorgungssicherheitsniveaus trägt VAELUES zur gesellschaftlichen Akzeptanz der Energiewende bei und hilft, knappe Ressourcen optimal einzusetzen.',
      image: '/windmills-1048981.jpg',
      imagePosition: 'left'
    }
  ];

  return (
    <section id="project" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          ref={titleRef}
          className={`text-3xl sm:text-4xl font-black text-gray-900 mb-8 sm:mb-12 transition-all duration-1000 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Das Projekt
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {sections.map((section, index) => {
            const { elementRef, isVisible } = useScrollAnimation(0.15);

            return (
              <div
                key={index}
                ref={elementRef}
                className={`grid md:grid-cols-2 gap-6 sm:gap-8 items-start ${
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
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{section.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{section.content}</p>
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
                  <div className="relative rounded overflow-hidden group">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-48 sm:h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
