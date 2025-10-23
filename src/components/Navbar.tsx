import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate('/')} className="flex items-center space-x-2">
            <img src="/VaeluesLogoWeiss.svg" alt="VAELUES Logo" className="h-6 sm:h-8" />
          </button>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => handleSectionClick('project')}
              className="text-white hover:text-white transition-colors text-sm"
            >
              Projekt
            </button>
            <button
              onClick={() => navigate('/konsortium')}
              className="text-white hover:text-white transition-colors text-sm"
            >
              Konsortium
            </button>
            <button
              onClick={() => navigate('/news')}
              className="text-white hover:text-white transition-colors text-sm"
            >
              News
            </button>
            <button
              onClick={() => navigate('/publikationen')}
              className="text-white hover:text-white transition-colors text-sm"
            >
              Publikationen
            </button>
          </div> 

          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleSectionClick('contact')}
              className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition-colors text-sm font-semibold"
            >
              Kontakt
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
              Projekt
            </button>
            <button
              onClick={() => { navigate('/konsortium'); setIsMenuOpen(false); }}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Konsortium
            </button>
            <button
              onClick={() => { navigate('/news'); setIsMenuOpen(false); }}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              News
            </button>
            <button
              onClick={() => { navigate('/publikationen'); setIsMenuOpen(false); }}
              className="block text-gray-300 hover:text-white transition-colors"
            >
              Publikationen
            </button>
            <button
              onClick={() => handleSectionClick('contact')}
              className="block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors text-center font-semibold"
            >
              Kontakt
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
