import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Project from './components/Project';
import Consortium from './components/Consortium';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="bg-white py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="flex items-center justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 flex-wrap">
              <div className="flex items-center justify-center">
                <img src="/rwth_eerc_rgb.png" alt="RWTH EERC Logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/Hochschule_Duesseldorf_logo.svg" alt="Hochschule Düsseldorf Logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/volatile_schwarz.svg" alt="Volatile Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/BMWE_Logo_mit_Fooerderzusatz_de.png" alt="BMWE Logo" className="h-32 sm:h-36 md:h-40 lg:h-48 w-auto object-contain" />
              </div>
            </div>

            <div className="text-gray-700 space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h3 className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Förderprogramm:</h3>
                <p className="text-xs sm:text-sm leading-relaxed">
                  8. Energieforschungsprogramms im Förderschwerpunkt Energiesystemanalyse, sektorübergreifende Systemmodellierung und -planung
                </p>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold mb-1 sm:mb-2">Förderkennzeichen:</h3>
                <p className="text-xs sm:text-sm">03EI1101C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <News />
      <Project />
      <Consortium />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
