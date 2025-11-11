import Navbar from './Navbar';
import Footer from './Footer';
import { ExternalLink } from 'lucide-react';

export default function Publications() {
  const publicationsKiViAntelopes = [
    {
      id: 1,
      number: 1,
      title: 'Künstliche Intelligenz bei der Untersuchung der Versorgungssicherheit mit Elektrizität: Angewandte Metamodellierung für die robuste Optimierung der Resilienz und Adäquanz sektorengekoppelter hochkomplexer Energiesysteme (KIVi Antelopes)',
      authors: 'Lehrstuhl für Energiesystemökonomik (FCN-ESE) - RWTH Aachen University',
      date: ' September 2025',
      link: 'https://www.fcn.eonerc.rwth-aachen.de/cms/e-on-erc-fcn/forschung/forschungsprojekte/-neu-forschungsprojekte-fcn-ese/~bqeiri/kivi-antelopes/'
    }
  ];

  const publicationsKiVi01 = [
    {
      id: 1,
      number: 1,
      title: 'KIVi 01 - Künstliche Intelligenz für die Versorgungssicherheit',
      authors: 'Forschungsteam KIVi 01',
      date: 'Dezember 2023',
      link: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />

      <div className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-8 sm:mb-12 lg:mb-16">Publikationen</h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">KIVi Antelopes</h2>

          <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden mb-12">
            <div className="grid grid-cols-12 gap-6 p-6 bg-gray-50 border-b border-gray-200 font-semibold text-gray-600 text-sm">
              <div className="col-span-1">Nr.</div>
              <div className="col-span-4">Titel</div>
              <div className="col-span-3">Autoren</div>
              <div className="col-span-2">Datum</div>
              <div className="col-span-2">Link</div>
            </div>

            {publicationsKiViAntelopes.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-6 p-6 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="col-span-1 text-gray-900 font-medium">{item.number}</div>
                <div className="col-span-4 text-gray-900 font-semibold">{item.title}</div>
                <div className="col-span-3 text-gray-700">{item.authors}</div>
                <div className="col-span-2 text-gray-900 font-medium">{item.date}</div>
                <div className="col-span-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium transition-colors"
                  >
                    <span>Zur Veröffentlichung</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden space-y-4 mb-12">
            {publicationsKiViAntelopes.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-sm">{item.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-500 font-medium mb-1">Autoren</div>
                    <div className="text-gray-900">{item.authors}</div>
                  </div>

                  <div>
                    <div className="text-gray-500 font-medium mb-1">Datum</div>
                    <div className="text-gray-900 font-medium">{item.date}</div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors"
                    >
                      <span>Zur Veröffentlichung</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">KIVi 01</h2>

          <div className="hidden lg:block bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-12 gap-6 p-6 bg-gray-50 border-b border-gray-200 font-semibold text-gray-600 text-sm">
              <div className="col-span-1">Nr.</div>
              <div className="col-span-4">Titel</div>
              <div className="col-span-3">Autoren</div>
              <div className="col-span-2">Datum</div>
              <div className="col-span-2">Link</div>
            </div>

            {publicationsKiVi01.map((item) => (
              <div key={item.id} className="grid grid-cols-12 gap-6 p-6 items-center border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="col-span-1 text-gray-900 font-medium">{item.number}</div>
                <div className="col-span-4 text-gray-900 font-semibold">{item.title}</div>
                <div className="col-span-3 text-gray-700">{item.authors}</div>
                <div className="col-span-2 text-gray-900 font-medium">{item.date}</div>
                <div className="col-span-2">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium transition-colors"
                  >
                    <span>Zur Veröffentlichung</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden space-y-4">
            {publicationsKiVi01.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-sm">{item.number}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div>
                    <div className="text-gray-500 font-medium mb-1">Autoren</div>
                    <div className="text-gray-900">{item.authors}</div>
                  </div>

                  <div>
                    <div className="text-gray-500 font-medium mb-1">Datum</div>
                    <div className="text-gray-900 font-medium">{item.date}</div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold transition-colors"
                    >
                      <span>Zur Veröffentlichung</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
