import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

export default function ConsortiumDetailed() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const { language } = useLanguage();
  const t = translations[language];

  const partners = [
    {
      id: 1,
      logo: '/rwth_eerc_rgb.png',
      website: 'https://www.fcn.eonerc.rwth-aachen.de/cms/~dndh/E-ON-ERC-FCN/',
      contentKey: 'rwth' as const,
      sections: [
        { titleKey: 'profile' as const, contentType: 'profile' as const },
        { titleKey: 'projectRole' as const, contentType: 'role' as const }
      ]
    },
    {
      id: 2,
      logo: '/Hochschule_Duesseldorf_logo.svg',
      website: 'https://zies.hs-duesseldorf.de/',
      contentKey: 'hsd' as const,
      sections: [
        { titleKey: 'profile' as const, contentType: 'profile' as const },
        { titleKey: 'projectRole' as const, contentType: 'role' as const }
      ]
    },
    {
      id: 4,
      logo: '/volatile_white.svg',
      website: 'https://volatile.de/',
      contentKey: 'volatile' as const,
      sections: [
        { titleKey: 'profile' as const, contentType: 'profile' as const },
        { titleKey: 'projectRole' as const, contentType: 'role' as const }
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
          {t.consortium.title}
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
              <div className="p-4 sm:p-6">
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-6">
                  <div className="lg:col-span-3 flex flex-row lg:flex-col gap-3 lg:gap-2 items-center lg:items-start">
                    <a href={partner.website} target="_blank" rel="noopener noreferrer">
                      <img
                        src={partner.logo}
                        alt="Partner Logo"
                        className={`${partner.id <= 2 ? 'h-10 sm:h-12 lg:h-16' : 'h-8 sm:h-10 lg:h-12'} object-contain ${partner.id === 4 ? 'invert' : ''} hover:opacity-80 transition-opacity`}
                      />
                    </a>
                    <div className="flex-1 lg:flex-none">
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
                  </div>

                  <div className="lg:col-span-2 flex items-start">
                    <span className="text-gray-400 text-sm font-medium">
                      {t.consortium[partner.sections[0].titleKey]}
                    </span>
                  </div>

                  <div className="lg:col-span-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {t.consortiumContent[partner.contentKey][partner.sections[0].contentType]}
                    </p>
                  </div>

                  <div className="lg:col-span-1 flex justify-end items-start mt-2 lg:mt-0">
                    <button
                      onClick={() => setExpandedId(expandedId === partner.id ? null : partner.id)}
                      className={`w-10 h-10 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 ${
                        expandedId === partner.id ? 'rotate-180' : ''
                      }`}
                      style={{ backgroundColor: '#B34A22' }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {expandedId === partner.id && (
                <div className="border-t border-gray-200 bg-gray-50 animate-[fadeIn_0.3s_ease-out] p-4 sm:p-6">
                  <div className="space-y-6">
                    {partner.sections.slice(1).map((section, idx) => (
                      <div key={idx}>
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">{t.consortium[section.titleKey]}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3">
                          {t.consortiumContent[partner.contentKey][section.contentType]}
                        </p>
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
