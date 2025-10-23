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
      <div className="bg-white py-0" style={{ paddingLeft: '4vw', paddingRight: '4vw' }}>
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center" style={{ gap: '4vw' }}>
          <div className="flex items-center justify-start flex-wrap" style={{ gap: '3vw' }}>
            <div className="flex items-center justify-center">
              <img src="/rwth_eerc_rgb.png" alt="BMWE Logo" style={{ height: '6vh' }} className="w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/Hochschule_Duesseldorf_logo.svg" alt="KIVi Antelopes Logo" style={{ height: '6vh' }} className="w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/volatile_schwarz.svg" alt="Hochschule Düsseldorf Logo" style={{ height: '4vh' }} className="w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/BMWE_Logo_mit_Fooerderzusatz_de.png" alt="Volatile Logo" style={{ height: '12vh' }} className="w-auto object-contain" />
            </div>
          </div>

          <div className="text-gray-700" style={{ fontSize: '0.5vw', lineHeight: '1.5' }}>
            <div style={{ marginBottom: '1.5vh' }}>
              <h3 className="font-semibold" style={{ marginBottom: '0.5vh' }}>Förderprogramm:</h3>
              <p>
                8. Energieforschungsprogramms im Förderschwerpunkt Energiesystemanalyse, sektorübergreifende Systemmodellierung und -planung
              </p>
            </div>

            <div>
              <h3 className="font-semibold" style={{ marginBottom: '0.5vh' }}>Förderkennzeichen:</h3>
              <p>03EI1101C</p>
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
