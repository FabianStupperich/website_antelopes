import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Project from './components/Project';
import Consortium from './components/Consortium';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="bg-white py-2.5 hidden md:block" style={{ paddingLeft: '4vw', paddingRight: '4vw' }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center" style={{ gap: '4vw' }}>
          <div className="flex items-center justify-start flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-12">
            <div className="flex items-center justify-center">
              <a href="https://www.fcn.eonerc.rwth-aachen.de/cms/~dndh/E-ON-ERC-FCN/" target="_blank" rel="noopener noreferrer">
                <img src="/rwth_eerc_rgb.png" alt="RWTH EERC Logo" className="h-8 md:h-10 lg:h-12 xl:h-16 w-auto object-contain hover:opacity-80 transition-opacity" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="https://zies.hs-duesseldorf.de/" target="_blank" rel="noopener noreferrer">
                <img src="/Logo_ZIES.png" alt="Hochschule Düsseldorf Logo" className="h-8 md:h-10 lg:h-12 xl:h-16 w-auto object-contain hover:opacity-80 transition-opacity" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="https://volatile.de/" target="_blank" rel="noopener noreferrer">
                <img src="/volatile_schwarz.svg" alt="Volatile Logo" className="h-6 md:h-8 lg:h-10 xl:h-12 w-auto object-contain hover:opacity-80 transition-opacity" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a target="_blank" rel="noopener noreferrer">
                <img src={language === 'en' ? '/BMWE_Logo_EN.png' : '/BMWE_Logo_mit_Fooerderzusatz_de.png'} alt="BMWK Logo" className="h-16 md:h-20 lg:h-24 xl:h-32 w-auto object-contain hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>

          <div className="text-gray-700 text-xs md:text-sm lg:text-base" style={{ lineHeight: '1.4' }}>
            <div className="mb-2 md:mb-3 lg:mb-4">
              <h3 className="font-semibold mb-1">{t('funding.program')}</h3>
              <p>
                {t('funding.program.text')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">{t('funding.code')}</h3>
              <p>03EI1101C</p>
            </div>
          </div>
        </div>
      </div>
      
      <Project />
      <Consortium />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
