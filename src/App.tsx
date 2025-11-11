import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Project from './components/Project';
import Consortium from './components/Consortium';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="bg-white py-2.5 hidden md:block" style={{ paddingLeft: '4vw', paddingRight: '4vw' }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center" style={{ gap: '4vw' }}>
          <div className="flex items-center justify-start flex-wrap" style={{ gap: '3vw' }}>
            <div className="flex items-center justify-center">
              <a href="https://www.fcn.eonerc.rwth-aachen.de/cms/~dndh/E-ON-ERC-FCN/" target="_blank" rel="noopener noreferrer">
                <img src="/rwth_eerc_rgb.png" alt="RWTH EERC Logo" style={{ height: '6vh' }} className="w-auto object-contain hover:opacity-80 transition-opacity" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="https://zies.hs-duesseldorf.de/" target="_blank" rel="noopener noreferrer">
                <img src="/Hochschule_Duesseldorf_logo.svg" alt="Hochschule Düsseldorf Logo" style={{ height: '6vh' }} className="w-auto object-contain hover:opacity-80 transition-opacity" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a href="https://volatile.de/" target="_blank" rel="noopener noreferrer">
                <img src="/volatile_schwarz.svg" alt="Volatile Logo" style={{ height: '4vh' }} className="w-auto object-contain hover:opacity-80 transition-opacity" />
              </a>
            </div>
            <div className="flex items-center justify-center">
              <a target="_blank" rel="noopener noreferrer">
                <img src="/BMWE_Logo_mit_Fooerderzusatz_de.png" alt="BMWK Logo" style={{ height: '12vh' }} className="w-auto object-contain hover:opacity-80 transition-opacity" />
              </a>
            </div>
          </div>

          <div className="text-gray-700" style={{ fontSize: '0.8vw', lineHeight: '1' }}>
            <div style={{ marginBottom: '1.5vh' }}>
              <h3 className="font-semibold" style={{ marginBottom: '0.5vh' }}>{t('funding.program')}</h3>
              <p>
                {t('funding.program.text')}
              </p>
            </div>

            <div>
              <h3 className="font-semibold" style={{ marginBottom: '0.5vh' }}>{t('funding.code')}</h3>
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
