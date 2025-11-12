import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMenuOpen(false);
  };

  const isImpressum = location.pathname === '/impressum';
  const isDatenschutz = location.pathname === '/datenschutz';
  const isNewsPage = location.pathname === '/news';
  const isPublikationen = location.pathname === '/publikationen';
  const isKonsortium = location.pathname === '/konsortium';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-black ${isImpressum || isDatenschutz || isNewsPage || isPublikationen || isKonsortium || isScrolled ? 'sm:bg-black' : 'sm:bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center space-x-2">
            <img
              src={isImpressum || isDatenschutz || isNewsPage || isPublikationen || isKonsortium || isScrolled ? "/Antelopes_Logo_Weiss.svg" : "/Antelopes_Logo_Weiss.svg"}
              alt="VAELUES Logo"
              className="h-6 sm:h-8"
            />
          </button>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => handleSectionClick('project')}
              className={`transition-colors text-sm ${isImpressum || isDatenschutz || isNewsPage || isPublikationen || isKonsortium || isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}
            >
              {t('nav.project')}
            </button>
            <button
              onClick={() => navigate('/konsortium')}
              className={`transition-colors text-sm ${isImpressum || isDatenschutz || isNewsPage || isPublikationen || isKonsortium || isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}
            >
              {t('nav.consortium')}
            </button>
            <button
              onClick={() => navigate('/publikationen')}
              className={`transition-colors text-sm ${isImpressum || isDatenschutz || isNewsPage || isPublikationen || isKonsortium || isScrolled ? 'text-white hover:text-gray-300' : 'text-black hover:text-gray-700'}`}
            >
              {t('nav.publications')}
            </button>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <div className={`flex items-center gap-1 text-sm font-semibold ${isImpressum || isDatenschutz || isNewsPage || isPublikationen || isKonsortium || isScrolled ? 'text-white' : 'text-white'}`}>
              <button
                onClick={() => setLanguage('de')}
                className={`transition-colors ${language === 'de' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              >
                DE
              </button>
              <span>|</span>
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${language === 'en' ? 'opacity-100' : 'opacity-50 hover:opacity-75'}`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => handleSectionClick('contact')}
              className="px-5 py-2 rounded-full transition-colors text-sm font-semibold text-white"
              style={{ backgroundColor: '#B34A22' }}
            >
              {t('nav.contact')}
            </button>
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => handleSectionClick('project')}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              {t('nav.project')}
            </button>
            <button
              onClick={() => { navigate('/konsortium'); setIsMenuOpen(false); }}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              {t('nav.consortium')}
            </button>
            <button
              onClick={() => { navigate('/news'); setIsMenuOpen(false); }}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              {t('nav.news')}
            </button>
            <button
              onClick={() => { navigate('/publikationen'); setIsMenuOpen(false); }}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              {t('nav.publications')}
            </button>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => { setLanguage('de'); setIsMenuOpen(false); }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${language === 'de' ? 'bg-white text-black' : 'bg-gray-700 text-gray-300'}`}
              >
                DE
              </button>
              <button
                onClick={() => { setLanguage('en'); setIsMenuOpen(false); }}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${language === 'en' ? 'bg-white text-white' : 'bg-gray-700 text-gray-300'}`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => handleSectionClick('contact')}
              className="block text-white px-6 py-2 rounded-full transition-colors text-center font-semibold"
              style={{ backgroundColor: '#B34A22' }}
            >
              {t('nav.contact')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
