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
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="w-full max-w-md aspect-[1.5/1] flex items-center justify-center">
              <img src="/BMWE_Logo_mit_Fooerderzusatz_de.png" alt="BMWi Logo" className="w-full h-full object-contain" />
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
