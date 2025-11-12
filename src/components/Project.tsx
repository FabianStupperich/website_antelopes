import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage } from '../contexts/LanguageContext';

export default function Project() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { t } = useLanguage();

  const sections = [
    {
      titleKey: 'project.challenge.title',
      contentKey: 'project.challenge.content',
      image: '/energy-4030427.jpg',
      imagePosition: 'right'
    },
    {
      titleKey: 'project.solution.title',
      contentKey: 'project.solution.content',
      image: '/ai-generated-7958880.jpg',
      imagePosition: 'left'
    },
    {
      titleKey: 'project.goals.title',
      contentKey: 'project.goals.content',
      image: '/coding-1841550.jpg',
      imagePosition: 'right'
    },
    {
      titleKey: 'project.impact.title',
      contentKey: 'project.impact.content',
      image: '/wind_offshore.png',
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
          {t('project.title')}
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
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{t(section.titleKey)}</h3>
                  <p className="text-gray-700 leading-relaxed text-base">{t(section.contentKey)}</p>
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
                        alt={t(section.titleKey)}
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
