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
      <div className="bg-white py-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-12 items-center">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="w-full max-w-xs aspect-[1.5/1] flex items-center justify-center">
              <img src="/BMWE_Logo_mit_Fooerderzusatz_de.png" alt="BMWi Logo" className="w-full h-full object-contain" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center">
              <img src="/Hochschule_Düsseldorf_logo.svg" alt="Hochschule Düsseldorf Logo" className="w-full h-full object-contain" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center">
              <img src="/Antelopes_Logo_Dunkelgrau.svg" alt="Antelopes Logo" className="w-full h-full object-contain" />
            </div>
            <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-lg p-4">
              <img src="/volatile_white.svg" alt="Volatile Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="text-black space-y-6">
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
