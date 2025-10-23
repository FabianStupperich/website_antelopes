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
      <div className="bg-white py-0 px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-16 items-center">
          <div className="flex items-center justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 flex-nowrap overflow-x-auto">
            <div className="flex items-center justify-center flex-shrink-0">
              <img src="/rwth_eerc_rgb.png" alt="BMWE Logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center flex-shrink-0">
              <img src="/Hochschule_Duesseldorf_logo.svg" alt="KIVi Antelopes Logo" className="h-16 sm:h-20 md:h-24 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center flex-shrink-0">
              <img src="/volatile_schwarz.svg" alt="Hochschule Düsseldorf Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center flex-shrink-0">
              <img src="/BMWE_Logo_mit_Fooerderzusatz_de.png" alt="Volatile Logo" className="h-32 sm:h-40 md:h-48 w-auto object-contain" />
            </div>
          </div>

          <div className="text-gray-700 space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-2">Förderprogramm:</h3>
              <p className="text-sm leading-relaxed">
                8. Energieforschungsprogramms im Förderschwerpunkt Energiesystemanalyse, sektorübergreifende Systemmodellierung und -planung
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Förderkennzeichen:</h3>
              <p className="text-sm">03EI1099C</p>
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
