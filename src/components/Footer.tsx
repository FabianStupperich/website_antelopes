import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <footer className="text-white py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#4D5562' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-20 mb-6">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/Antelopes_Logo_Weiss.svg" alt="VAELUES Logo" className="h-12 sm:h-14 md:h-16" />
            </div>
            <p className="text-white text-xs">
              © 2025
            </p>
          </div>

          <div className="pt-4 sm:pt-6 md:pt-8">
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-white hover:text-white transition-colors">
                  {t('footer.home')}
                </a>
              </li>
              <li>
                <a href="/news" className="text-white hover:text-white transition-colors">
                  {t('nav.news')}
                </a>
              </li>
              <li>
                <button onClick={() => handleSectionClick('project')} className="text-white hover:text-white transition-colors text-left">
                  {t('footer.project')}
                </button>
              </li>
              <li>
                <a href="/konsortium" className="text-white hover:text-white transition-colors">
                  {t('nav.consortium')}
                </a>
              </li>
              <li>
                <a href="/publikationen" className="text-white hover:text-white transition-colors">
                  {t('nav.publications')}
                </a>
              </li>
            </ul>
          </div>

          <div className="pt-4 sm:pt-6 md:pt-8">
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/impressum" className="text-white hover:text-white transition-colors">
                  {t('footer.impressum')}
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="text-white hover:text-white transition-colors">
                  {t('footer.datenschutz')}
                </a>
              </li>
              <li>
                <button onClick={() => handleSectionClick('contact')} className="text-white hover:text-white transition-colors text-left">
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
