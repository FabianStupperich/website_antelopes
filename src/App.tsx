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
      <div className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-16 items-center">
            <div className="flex items-center justify-start gap-8 flex-wrap">
              <div className="flex items-center justify-center">
                <img src="/KIVi_Antelopes_Logo.svg" alt="KIVi Antelopes Logo" className="h-16 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/Hochschule_Duesseldorf_logo.svg" alt="Hochschule Düsseldorf Logo" className="h-16 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/Antelopes_Logo_Dunkelgrau.svg" alt="Antelopes Logo" className="h-16 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/volatile_schwarz.svg" alt="Volatile Logo" className="h-16 w-auto object-contain" />
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
