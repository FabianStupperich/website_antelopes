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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center mb-8">
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="/KIVi_Antelopes_Logo.svg" alt="KIVi Antelopes Logo" className="w-full h-20 object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="/Hochschule_Duesseldorf_logo.svg" alt="Hochschule Düsseldorf Logo" className="w-full h-20 object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
              <img src="/Antelopes_Logo_Dunkelgrau.svg" alt="Antelopes Logo" className="w-full h-20 object-contain" />
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-900 rounded-lg shadow-sm">
              <img src="/volatile_white.svg" alt="Volatile Logo" className="w-full h-20 object-contain" />
            </div>
          </div>

          <div className="text-center text-gray-700 space-y-4 max-w-3xl mx-auto">
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
